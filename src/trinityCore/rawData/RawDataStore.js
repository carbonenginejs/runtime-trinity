// Factory + arena for RawData constant-data payloads.
//
// Two halves (PER-OBJECT-DATA-DESIGN-2026-07-24.md):
//   - STATIC struct registry - the logical shapes (name -> field defs). Shared
//     across all stores because a struct's shape is backend-neutral.
//   - INSTANCE, per-engine - a packer (physical offsets/padding for one
//     backend) plus a retained bump arena that hands out transient RawData.
//
// Allocation is an ARENA (bump), not a free-list:
//   - Alloc(name) bumps a cursor and returns a view ("snip off what you need")
//     into a RETAINED backing buffer - the buffer is NOT recreated per frame.
//   - Reset() rewinds the cursor; every slot is freed at once, O(1); the
//     chunks are kept and reused next frame.
//   - There is no Unalloc: transient slots live until their batch dispatches,
//     so Reset is the only free. Permanent per-object data is not Alloc'd - a
//     static placeable constructs its own RawData and owns it across frames.
//
// Maps to Carbon: Alloc == accumulator.Allocate (Tr2Renderer::GetPoolAllocator,
// reset per frame). No clear-on-Alloc, so an unwritten field shows the previous
// tenant's bytes - that reproduces Carbon's "unwritten slots = allocator
// garbage" (declared defaults are re-applied on Alloc; everything else is
// write-what-you-rely-on).
import { RawData, RawDataType } from "./RawData.js";
import { DefaultPacker } from "./packer.js";


export class RawDataStore
{
  /** Default packer for this store (one backend). */
  #packer = DefaultPacker;

  /** Per-struct packer overrides: name -> packer. */
  #perName = new Map();

  /** Resolved-layout cache: name -> { fields, stride, defaults }. */
  #layouts = new Map();

  /** Retained arena chunks (Float32) and their Uint32 aliases. */
  #chunks = [];

  #chunkAliases = [];

  /** Floats per chunk; also the largest struct a single Alloc may request. */
  #chunkFloats = 8192;

  #chunkIndex = 0;

  #cursor = 0;

  /**
   * @param {object} [packer] - the engine's packer (has ResolveLayout); default
   *   is the tight-packing GPU-free packer.
   * @param {object} [options]
   * @param {number} [options.chunkFloats] - arena chunk size in floats.
   */
  constructor(packer = DefaultPacker, options = {})
  {
    this.#packer = packer ?? DefaultPacker;

    if (Number.isInteger(options.chunkFloats) && options.chunkFloats > 0)
    {
      this.#chunkFloats = options.chunkFloats;
    }

    this.#AddChunk();
  }

  /**
   * Bind a packer for one struct name (overrides the store default). Invalidates
   * any cached layout for that name.
   */
  SetPacker(name, packer)
  {
    this.#perName.set(name, packer);
    this.#layouts.delete(name);
  }

  /**
   * Lease a TRANSIENT payload for a registered struct. Bumps the arena and
   * returns a RawData view over the next slot, with declared defaults applied.
   * Valid until the next Reset().
   */
  Alloc(name)
  {
    const layout = this.#ResolveLayout(name);
    const stride = layout.stride;

    if (stride > this.#chunkFloats)
    {
      throw new Error(`RawDataStore: struct "${name}" (${stride} floats) exceeds the chunk size (${this.#chunkFloats})`);
    }

    if (this.#cursor + stride > this.#chunkFloats)
    {
      this.#chunkIndex++;
      this.#cursor = 0;

      if (this.#chunkIndex >= this.#chunks.length)
      {
        this.#AddChunk();
      }
    }

    const start = this.#cursor;
    this.#cursor += stride;

    const floats = this.#chunks[this.#chunkIndex].subarray(start, start + stride);
    const uints = this.#chunkAliases[this.#chunkIndex].subarray(start, start + stride);

    for (const preset of layout.defaults)
    {
      const values = preset.values;

      for (let index = 0; index < values.length; index++)
      {
        floats[preset.offset + index] = values[index];
      }
    }

    return new RawData(layout, floats, uints);
  }

  /**
   * Free every transient slot at once (frame end). Rewinds the arena cursor;
   * the backing chunks are RETAINED and reused - nothing is reallocated.
   */
  Reset()
  {
    this.#chunkIndex = 0;
    this.#cursor = 0;
  }

  #ResolveLayout(name)
  {
    const cached = this.#layouts.get(name);

    if (cached)
    {
      return cached;
    }

    const def = RawDataStore.getStruct(name);

    if (!def)
    {
      throw new Error(`RawDataStore: unknown struct "${name}" (register it with RawDataStore.addStruct)`);
    }

    const packer = this.#perName.get(name) ?? this.#packer;
    const resolved = packer.ResolveLayout(def);
    const defaults = [];

    for (const field of def)
    {
      if (field.default)
      {
        defaults.push({ offset: resolved.fields[field.name].offset, values: field.default });
      }
    }

    const layout = { fields: resolved.fields, stride: resolved.stride, defaults };
    this.#layouts.set(name, layout);

    return layout;
  }

  #AddChunk()
  {
    const chunk = new Float32Array(this.#chunkFloats);
    this.#chunks.push(chunk);
    this.#chunkAliases.push(new Uint32Array(chunk.buffer));
  }

  /** Registered struct defs (normalized), shared across all stores. */
  static #structs = new Map();

  /** The field encoding kinds (packing directives). */
  static Type = RawDataType;

  /**
   * Register a struct shape. `def` is an array of field defs:
   *   { name, encoding, size, elements?, default? }
   * `size` may instead be a defaults ARRAY whose length is the size.
   */
  static addStruct(name, def)
  {
    RawDataStore.#structs.set(name, RawDataStore.normalizeDef(def));
  }

  /**
   * Register several structs. Accepts [name, def] pairs or { name, def }
   * (or { name, fields }) objects.
   */
  static addStructs(list)
  {
    for (const entry of list)
    {
      if (Array.isArray(entry))
      {
        RawDataStore.addStruct(entry[0], entry[1]);
      }
      else
      {
        RawDataStore.addStruct(entry.name, entry.def ?? entry.fields);
      }
    }
  }

  static getStruct(name)
  {
    return RawDataStore.#structs.get(name) ?? null;
  }

  static hasStruct(name)
  {
    return RawDataStore.#structs.has(name);
  }

  static removeStruct(name)
  {
    return RawDataStore.#structs.delete(name);
  }

  static clearStructs()
  {
    RawDataStore.#structs.clear();
  }

  /**
   * Normalize a raw def: default elements to 1, resolve size-as-defaults-array,
   * require a name and encoding.
   */
  static normalizeDef(def)
  {
    return def.map(field =>
    {
      if (!field.name)
      {
        throw new Error("RawDataStore: every struct field needs a name");
      }

      if (!field.encoding)
      {
        throw new Error(`RawDataStore: field "${field.name}" needs an encoding (RawDataStore.Type.*)`);
      }

      let size = field.size;
      let defaultValue = field.default ?? null;

      if (Array.isArray(size))
      {
        defaultValue = size;
        size = size.length;
      }

      if (!Number.isInteger(size) || size <= 0)
      {
        throw new Error(`RawDataStore: field "${field.name}" needs a positive integer size`);
      }

      return {
        name: field.name,
        elements: Number.isInteger(field.elements) && field.elements > 0 ? field.elements : 1,
        size,
        encoding: field.encoding,
        default: defaultValue
      };
    });
  }

  /**
   * Build a per-engine store. `engine` may itself be a packer (have
   * ResolveLayout) or expose one via GetRawDataPacker()/rawDataPacker;
   * otherwise the tight DefaultPacker is used.
   */
  static from(engine, options = {})
  {
    const packer = typeof engine?.ResolveLayout === "function"
      ? engine
      : (engine?.GetRawDataPacker?.() ?? engine?.rawDataPacker ?? DefaultPacker);

    return new RawDataStore(packer, options);
  }
}
