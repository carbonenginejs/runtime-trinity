// The engine contract for laying out per-object constant data, plus the
// GPU-free DefaultPacker used when no engine is present (tests, headless).
//
// SEPARATION OF CONCERNS (see PER-OBJECT-DATA-DESIGN-2026-07-24.md):
//   - the struct DEF (Trinity) is LOGICAL: field names, sizes, encoding KIND.
//   - the PACKER (engine) is PHYSICAL: where each field lands in bytes, with
//     the backend's own alignment/padding. Even "does a scalar get padded to
//     a register / does a vec3 straddle" is the target engine's rule, not a
//     universal one (WebGL sets uniforms individually; a WebGPU UBO applies
//     std140). So Trinity never computes offsets - the packer does.
//
// A packer is any object implementing:
//
//   ResolveLayout(normalizedDef) -> {
//     fields: { [name]: { offset, size, elements, encoding } },  // offset in floats
//     stride: number                                             // floats per instance
//   }
//
// `normalizedDef` is an array of { name, elements, size, encoding, default }
// (RawDataStore.normalizeDef output). Offsets are FLOAT offsets relative to
// the start of one instance's slot; the same offset indexes both the Float32
// and Uint32 views (4 bytes each). `stride` is the per-instance footprint the
// arena bumps by.
//
// The generic byte encoders (transpose etc.) live in RawData.js and are keyed
// by encoding kind - a packer supplies offsets, not encoders. A backend that
// needed a different encoding for a kind would be a future extension (packer
// overriding the encoder table); it is intentionally not modelled yet.

/**
 * @typedef {object} RawDataField
 * @property {number} offset - float offset within the instance slot
 * @property {number} size - destination footprint in floats per element
 * @property {number} elements - array count (1 for a scalar field)
 * @property {string} encoding - RawDataType kind
 */

/**
 * @typedef {object} RawDataLayout
 * @property {Object<string, RawDataField>} fields
 * @property {number} stride - floats per instance
 */

/**
 * @typedef {object} RawDataPacker
 * @property {(def: Array<object>) => RawDataLayout} ResolveLayout
 */

/**
 * Tight-packing packer: fields laid out in declaration order with no padding,
 * offset in floats accumulating field footprints. Correct for GPU-free tests
 * and any backend that sets constants individually (WebGL). A UBO backend
 * (WebGPU std140) supplies its own packer instead of this one.
 *
 * @type {RawDataPacker}
 */
const DefaultPacker = Object.freeze({
  ResolveLayout(def) {
    const fields = {};
    let offset = 0;
    for (const field of def) {
      fields[field.name] = {
        offset,
        size: field.size,
        elements: field.elements,
        encoding: field.encoding
      };
      offset += field.size * field.elements;
    }
    return {
      fields,
      stride: offset
    };
  }
});

export { DefaultPacker };
//# sourceMappingURL=packer.js.map
