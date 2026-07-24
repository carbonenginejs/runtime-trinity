// GPU-free per-object / per-frame constant data.
//
// A RawData is a thin, write-mostly view over a slice of a packed constant
// buffer: name -> encoded bytes. It is NOT a CjsModel (no persistence, no
// reactivity) - it is transient GPU staging, produced fresh each frame and
// consumed by the engine's uploader.
//
// Design + rationale: runtime-trinity/agents/PER-OBJECT-DATA-DESIGN-2026-07-24.md
// Transpose contract (why matrices are stored transposed): the
// carbon-math-conventions skill, "GPU upload: the transpose contract".
//
// Verbs (name ALWAYS first - a keyed store, not a math op):
//   Set(name, value)     logical value in, ENCODED into the buffer
//   SetRaw(name, value)  bytes in, NO encoding (value is already GPU-form)
//   Copy(name, out)      bytes OUT into a caller buffer - never a reference
// There is intentionally no Get: the payload is write-only from Trinity's
// side (every field derives from logical inputs the fill already holds), and
// the uploader reads the whole packed slice via GetData().

/**
 * The encoding KIND of a struct field - a packing directive, not a math type.
 * Selects which encoder writes the bytes. Constants (not bare strings) so a
 * typo throws at the lookup instead of silently packing wrong.
 */
const RawDataType = Object.freeze({
  /** Square matrix, stored TRANSPOSED (HLSL column_major). N inferred from size. */
  MATRIX: "matrix",
  /** Straight copy - float / vec2 / vec3 / vec4. */
  VECTOR: "vector",
  /** Integer bit-cast into the float buffer's Uint32 lanes (e.g. bone offsets). */
  UINT: "uint",
  /** mat4 packed column-stride into 12 floats (Carbon Float4x3; skill gotcha 7). */
  MATRIX_3X4: "matrix3x4"
});

/**
 * Encoders: (floats, uints, field, value) -> void. `field` is the resolved
 * layout entry { offset, size, elements, encoding } with offset RELATIVE to
 * the slice start (the views are already sliced to this struct's slot).
 * `size` is the DESTINATION footprint in floats per element.
 */
const RawDataEncoders = Object.freeze({
  [RawDataType.MATRIX](floats, _uints, field, value) {
    const n = Math.sqrt(field.size);
    for (let element = 0; element < field.elements; element++) {
      const source = element * field.size;
      const destination = field.offset + element * field.size;

      // Transpose on the shared byte layout: buffer(r,c) = value(c,r). This is
      // exactly Carbon's `= Transpose(m)` staging fill.
      for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) {
          floats[destination + row * n + column] = value[source + column * n + row];
        }
      }
    }
  },
  [RawDataType.VECTOR](floats, _uints, field, value) {
    const total = field.size * field.elements;
    for (let index = 0; index < total; index++) {
      floats[field.offset + index] = value[index];
    }
  },
  [RawDataType.UINT](_floats, uints, field, value) {
    const total = field.size * field.elements;
    for (let index = 0; index < total; index++) {
      uints[field.offset + index] = value[index] >>> 0;
    }
  },
  [RawDataType.MATRIX_3X4](floats, _uints, field, value) {
    // Column-stride pack of a 16-float mat4 into 12 floats (size must be 12):
    // rows come from (v0,v4,v8,v12) / (v1,v5,v9,v13) / (v2,v6,v10,v14).
    for (let element = 0; element < field.elements; element++) {
      const source = element * 16;
      const destination = field.offset + element * field.size;
      for (let row = 0; row < 3; row++) {
        floats[destination + row * 4 + 0] = value[source + row + 0];
        floats[destination + row * 4 + 1] = value[source + row + 4];
        floats[destination + row * 4 + 2] = value[source + row + 8];
        floats[destination + row * 4 + 3] = value[source + row + 12];
      }
    }
  }
});

/**
 * A packed constant-data slice bound to a resolved layout. Instances are
 * handed out by a RawDataStore (transient, arena-backed) or constructed
 * directly by an object that owns a persistent buffer.
 */
class RawData {
  /** Resolved layout: { fields: { name -> { offset, size, elements, encoding } }, stride }. */
  #layout = null;

  /** Float32 view of this struct's slot (offsets are relative to its start). */
  #floats = null;

  /** Uint32 view over the SAME bytes, for UINT lanes. */
  #uints = null;

  /**
   * @param {object} layout - resolved layout for one struct
   * @param {Float32Array} floats - the slice (start = struct slot)
   * @param {Uint32Array} uints - Uint32 view over the same slice
   */
  constructor(layout, floats, uints) {
    this.#layout = layout;
    this.#floats = floats;
    this.#uints = uints;
  }

  /** Whether a field exists in the layout. */
  Has(name) {
    return Object.prototype.hasOwnProperty.call(this.#layout.fields, name);
  }

  /**
   * Write a LOGICAL value, encoded per the field's kind (MATRIX transposes,
   * UINT bit-casts, MATRIX_3X4 column-stride packs, VECTOR copies).
   */
  Set(name, value) {
    const field = this.#layout.fields[name];
    if (!field) {
      throw new Error(`RawData: unknown field "${name}"`);
    }
    const encoder = RawDataEncoders[field.encoding];
    if (!encoder) {
      throw new Error(`RawData: no encoder for encoding "${field.encoding}" (field "${name}")`);
    }
    encoder(this.#floats, this.#uints, field, value);
  }

  /**
   * Write bytes that are ALREADY in GPU form - no encoding. Mirrors Carbon's
   * direct member write (e.g. worldInverse computed from an already-transposed
   * world). Copies up to the field's footprint.
   */
  SetRaw(name, value) {
    const field = this.#layout.fields[name];
    if (!field) {
      throw new Error(`RawData: unknown field "${name}"`);
    }
    const total = Math.min(field.size * field.elements, value.length);
    for (let index = 0; index < total; index++) {
      this.#floats[field.offset + index] = value[index];
    }
  }

  /**
   * Copy a field's packed bytes OUT into a caller-owned buffer. Never returns
   * a reference into the payload. Debug / inspection only - the render path is
   * write-only.
   */
  Copy(name, out) {
    const field = this.#layout.fields[name];
    if (!field) {
      throw new Error(`RawData: unknown field "${name}"`);
    }
    const total = field.size * field.elements;
    for (let index = 0; index < total; index++) {
      out[index] = this.#floats[field.offset + index];
    }
    return out;
  }

  /** The packed Float32 slice - what the engine uploader memcpys/binds. */
  GetData() {
    return this.#floats;
  }

  /** The resolved layout (offsets/sizes/encodings) - the engine's bind map. */
  GetLayout() {
    return this.#layout;
  }
}

export { RawData, RawDataEncoders, RawDataType };
//# sourceMappingURL=RawData.js.map
