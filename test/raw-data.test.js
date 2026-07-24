// RawData / RawDataStore: the GPU-free constant-data system.
// Design: runtime-trinity/agents/PER-OBJECT-DATA-DESIGN-2026-07-24.md
import test from "node:test";
import assert from "node:assert/strict";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { RawData, RawDataStore, DefaultPacker } from "../npm/dist/index.js";


const EPSILON = 1e-6;
const Type = RawDataStore.Type;

function assertClose(actual, expected, message)
{
  assert.ok(Math.abs(actual - expected) <= EPSILON, `${message}: expected ${expected}, got ${actual}`);
}

// A rotating + translating matrix so transpose is detectable (an identity or
// pure-translation matrix cannot catch an orientation error).
function MakeWorld()
{
  const m = mat4.create();
  mat4.translate(m, m, [10, 20, 30]);
  mat4.rotateY(m, m, 0.7);
  mat4.scale(m, m, [2, 3, 4]);
  return m;
}

test.beforeEach(() => RawDataStore.clearStructs());

test("DefaultPacker resolves tight offsets and stride", () =>
{
  const def = RawDataStore.normalizeDef([
    { name: "world",     size: 16, encoding: Type.MATRIX },
    { name: "shipData",  size: 4,  encoding: Type.VECTOR },
    { name: "masks",     size: 16, elements: 2, encoding: Type.MATRIX }
  ]);
  const layout = DefaultPacker.ResolveLayout(def);

  assert.equal(layout.fields.world.offset, 0, "world at 0");
  assert.equal(layout.fields.shipData.offset, 16, "shipData after world");
  assert.equal(layout.fields.masks.offset, 20, "masks after shipData");
  assert.equal(layout.stride, 52, "16 + 4 + 32");
});

test("Set(MATRIX) stores the TRANSPOSE (translation moves to [3],[7],[11])", () =>
{
  RawDataStore.addStruct("VS", [{ name: "world", size: 16, encoding: Type.MATRIX }]);
  const vs = new RawDataStore().Alloc("VS");
  const world = MakeWorld();

  vs.Set("world", world);
  const packed = vs.GetData();
  const expected = mat4.transpose(mat4.create(), world);

  for (let i = 0; i < 16; i++)
  {
    assertClose(packed[i], expected[i], `packed[${i}]`);
  }
  // Logical translation lives at [12],[13],[14]; transposed it lands at
  // [3],[7],[11] - the column that catches an orientation error.
  assertClose(packed[3], world[12], "translation x transposed to [3]");
  assertClose(packed[7], world[13], "translation y transposed to [7]");
  assertClose(packed[11], world[14], "translation z transposed to [11]");
  // An asymmetric off-diagonal basis element must differ from the logical
  // value ([2]/[8] carry rotateY's +/-sin scaled by the non-uniform scale).
  assert.notEqual(packed[2], world[2], "off-diagonal basis element transposed");
  assertClose(packed[2], world[8], "packed[2] == logical[8]");
});

test("SetRaw writes GPU-form bytes with NO encoding (the worldInverse idiom)", () =>
{
  RawDataStore.addStruct("VS", [
    { name: "world",        size: 16, encoding: Type.MATRIX },
    { name: "worldInverse", size: 16, encoding: Type.MATRIX }
  ]);
  const vs = new RawDataStore().Alloc("VS");
  const world = MakeWorld();

  vs.Set("world", world);
  // Carbon: Inverse(data->m_worldInverse, data->m_world) - invert the already
  // packed (transposed) world and store it raw. == Transpose(Inverse(world)).
  const packedWorld = mat4.clone(vs.GetData().subarray(0, 16));
  const rawInverse = mat4.invert(mat4.create(), packedWorld);
  vs.SetRaw("worldInverse", rawInverse);

  const expected = mat4.transpose(mat4.create(), mat4.invert(mat4.create(), world));
  const stored = vs.GetData().subarray(16, 32);

  for (let i = 0; i < 16; i++)
  {
    assertClose(stored[i], expected[i], `worldInverse[${i}]`);
  }
});

test("Set(UINT) bit-casts into the uint lanes; Set(VECTOR) copies", () =>
{
  RawDataStore.addStruct("VS", [
    { name: "shipData",    size: 4, encoding: Type.VECTOR },
    { name: "boneOffsets", size: 4, encoding: Type.UINT }
  ]);
  const vs = new RawDataStore().Alloc("VS");

  vs.Set("shipData", [0.5, 1.5, 2.5, 3.5]);
  vs.Set("boneOffsets", [7, 0xdeadbeef, 0, 42]);

  const floats = vs.GetData();
  assertClose(floats[0], 0.5, "vector copied straight");
  assertClose(floats[3], 3.5, "vector copied straight");

  const uints = new Uint32Array(floats.buffer, floats.byteOffset, floats.length);
  assert.equal(uints[4], 7, "uint bit-cast");
  assert.equal(uints[5], 0xdeadbeef, "uint bit-cast preserves high bit");
  assert.equal(uints[7], 42, "uint bit-cast");
});

test("Set(MATRIX_3X4) packs a mat4 column-stride into 12 floats (gotcha 7)", () =>
{
  RawDataStore.addStruct("VS", [{ name: "bone", size: 12, encoding: Type.MATRIX_3X4 }]);
  const vs = new RawDataStore().Alloc("VS");
  // A recognizable mat4 (flat index == value) to check the stride mapping.
  const m = Float32Array.from({ length: 16 }, (_, i) => i);

  vs.Set("bone", m);
  const packed = vs.GetData();
  // rows: (v0,v4,v8,v12) / (v1,v5,v9,v13) / (v2,v6,v10,v14)
  assert.deepEqual(Array.from(packed.subarray(0, 12)), [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14]);
});

test("Copy writes OUT into a caller buffer and is NOT a live reference", () =>
{
  RawDataStore.addStruct("VS", [{ name: "shipData", size: 4, encoding: Type.VECTOR }]);
  const vs = new RawDataStore().Alloc("VS");
  vs.Set("shipData", [1, 2, 3, 4]);

  const out = new Float32Array(4);
  vs.Copy("shipData", out);
  assert.deepEqual(Array.from(out), [1, 2, 3, 4], "copied out");

  out[0] = 999;
  assertClose(vs.GetData()[0], 1, "mutating the copy does not touch the payload");
});

test("defaults are applied on Alloc; unwritten non-default fields are arena garbage", () =>
{
  RawDataStore.addStruct("VS", [
    { name: "shipData", size: [0, 1, 0, 1], encoding: Type.VECTOR }, // size-as-defaults
    { name: "extra",    size: 4, encoding: Type.VECTOR }
  ]);
  const store = new RawDataStore();

  const a = store.Alloc("VS");
  assert.deepEqual(Array.from(a.GetData().subarray(0, 4)), [0, 1, 0, 1], "defaults applied");
  a.Set("extra", [5, 6, 7, 8]);

  // Reuse the same arena region: reset, alloc again. shipData re-defaults;
  // `extra` still shows the previous tenant's bytes UNLESS rewritten (the
  // Carbon "unwritten = garbage" contract).
  store.Reset();
  const b = store.Alloc("VS");
  assert.deepEqual(Array.from(b.GetData().subarray(0, 4)), [0, 1, 0, 1], "defaults re-applied on realloc");
  assert.deepEqual(Array.from(b.GetData().subarray(4, 8)), [5, 6, 7, 8], "unwritten field keeps stale bytes");
});

test("arena: consecutive Allocs get non-overlapping slots; Reset rewinds and reuses", () =>
{
  RawDataStore.addStruct("VS", [{ name: "v", size: 4, encoding: Type.VECTOR }]);
  const store = new RawDataStore();

  const a = store.Alloc("VS");
  const b = store.Alloc("VS");
  a.Set("v", [1, 1, 1, 1]);
  b.Set("v", [2, 2, 2, 2]);
  assertClose(a.GetData()[0], 1, "a untouched by b");
  assertClose(b.GetData()[0], 2, "b distinct from a");

  store.Reset();
  const c = store.Alloc("VS");
  // c reuses a's slot (same backing bytes) - proves the buffer is RETAINED,
  // not reallocated.
  assert.equal(c.GetData().buffer, a.GetData().buffer, "same backing ArrayBuffer after reset");
  assert.equal(c.GetData().byteOffset, a.GetData().byteOffset, "c reuses a's slot");
});

test("arena grows into new chunks without invalidating earlier views", () =>
{
  RawDataStore.addStruct("Big", [{ name: "v", size: 4, encoding: Type.VECTOR }]);
  const store = new RawDataStore(DefaultPacker, { chunkFloats: 8 }); // 2 slots per chunk

  const a = store.Alloc("Big");
  a.Set("v", [1, 2, 3, 4]);
  store.Alloc("Big");           // fills chunk 0
  const c = store.Alloc("Big"); // spills into chunk 1
  c.Set("v", [9, 9, 9, 9]);

  assert.notEqual(a.GetData().buffer, c.GetData().buffer, "c is in a new chunk");
  assert.deepEqual(Array.from(a.GetData()), [1, 2, 3, 4], "earlier view still valid across growth");
});

test("Alloc throws for an unregistered struct; Has reflects the layout", () =>
{
  assert.throws(() => new RawDataStore().Alloc("Nope"), /unknown struct/);

  RawDataStore.addStruct("VS", [{ name: "world", size: 16, encoding: Type.MATRIX }]);
  const vs = new RawDataStore().Alloc("VS");
  assert.equal(vs.Has("world"), true);
  assert.equal(vs.Has("missing"), false);
  assert.throws(() => vs.Set("missing", [0]), /unknown field/);
});

test("engine contract: a custom packer supplies offsets/padding; Set honours them", () =>
{
  RawDataStore.addStruct("VS", [
    { name: "a", size: 4, encoding: Type.VECTOR },
    { name: "b", size: 4, encoding: Type.VECTOR }
  ]);
  // A std140-ish packer that pads every field up to an 8-float boundary.
  const paddingPacker = {
    ResolveLayout(def)
    {
      const fields = {};
      let offset = 0;

      for (const field of def)
      {
        fields[field.name] = { offset, size: field.size, elements: field.elements, encoding: field.encoding };
        offset += Math.ceil((field.size * field.elements) / 8) * 8;
      }

      return { fields, stride: offset };
    }
  };
  const store = RawDataStore.from(paddingPacker);
  const vs = store.Alloc("VS");

  vs.Set("a", [1, 1, 1, 1]);
  vs.Set("b", [2, 2, 2, 2]);
  // b lands at the engine-supplied padded offset 8, not the tight offset 4.
  assertClose(vs.GetData()[8], 2, "b written at the packer's padded offset");
  assertClose(vs.GetData()[4], 0, "the pad gap is untouched");
  assert.equal(vs.GetLayout().stride, 16, "padded stride");
});

test("SetPacker overrides one struct's layout on a store", () =>
{
  RawDataStore.addStruct("VS", [{ name: "a", size: 4, encoding: Type.VECTOR }]);
  const store = new RawDataStore();
  store.SetPacker("VS", {
    ResolveLayout()
    {
      return { fields: { a: { offset: 4, size: 4, elements: 1, encoding: Type.VECTOR } }, stride: 8 };
    }
  });

  const vs = store.Alloc("VS");
  vs.Set("a", [7, 7, 7, 7]);
  assertClose(vs.GetData()[4], 7, "override offset used");
  assert.equal(vs.GetData().length, 8, "override stride used");
});

test("direct construction: a persistent (self-owned) payload bypasses the arena", () =>
{
  // Static-placeable path: an object owns its buffer, never Alloc'd/Reset.
  const layout = DefaultPacker.ResolveLayout(RawDataStore.normalizeDef([
    { name: "world", size: 16, encoding: Type.MATRIX }
  ]));
  layout.defaults = [];
  const floats = new Float32Array(layout.stride);
  const uints = new Uint32Array(floats.buffer);
  const payload = new RawData(layout, floats, uints);

  payload.Set("world", MakeWorld());
  assertClose(payload.GetData()[3], 10, "self-owned payload encodes identically");
});
