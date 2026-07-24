// Test stand-in for the engine's per-object-data layout. In production the
// engine registers these structs on the store from its shader reflection
// (fields, sizes, encodings, offsets) and supplies the packer. There is no
// packer or struct def in runtime-trinity src - tests provide both here.
import { RawDataStore } from "../../npm/dist/index.js";


const Type = RawDataStore.Type;

// The per-object struct shapes (logical), as an engine's reflection would yield
// them. Grouping mirrors Carbon's per-object structs; grows as payloads migrate.
export const TEST_PER_OBJECT_STRUCTS = {
  EveBasicPerObjectData: [
    { name: "world",        size: 16, encoding: Type.MATRIX },
    { name: "worldLast",    size: 16, encoding: Type.MATRIX },
    { name: "worldInverse", size: 16, encoding: Type.MATRIX }
  ]
};

// A trivial tight packer (no padding) standing in for the engine's physical
// layout. Lives only in tests - src ships no packer.
export const TightPacker = {
  ResolveLayout(_structName, def)
  {
    const fields = {};
    let offset = 0;

    for (const field of def)
    {
      fields[field.name] = { offset, size: field.size, elements: field.elements, encoding: field.encoding };
      offset += field.size * field.elements;
    }

    return { fields, stride: offset };
  }
};

/** A store with the test structs registered against the tight packer. */
export function makePerObjectStore(options)
{
  return new RawDataStore(TightPacker, options).Register(TEST_PER_OBJECT_STRUCTS);
}

/** A render-context stand-in that carries the per-object store. */
export function makeRenderContextWithStore(store = makePerObjectStore())
{
  return { GetRawDataStore: () => store };
}
