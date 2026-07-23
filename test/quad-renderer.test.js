// Tr2QuadRenderer CPU half: register/accumulate/merge/emit (batch-plan P5).
import test from "node:test";
import assert from "node:assert/strict";
import {
  Tr2QuadRenderer,
  TriRenderBatchAccumulator
} from "../npm/dist/index.js";

const OPAQUE = Tr2QuadRenderer.TriBatchType.TRIBATCHTYPE_OPAQUE;
const ADDITIVE = Tr2QuadRenderer.TriBatchType.TRIBATCHTYPE_ADDITIVE;

test("Tr2QuadRenderer merges per-effect instances and emits instanced batches", () =>
{
  const renderer = new Tr2QuadRenderer();
  const effect = { GetShaderStateInterface: () => ({ GetSortValue: () => 1 }) };

  // Two effects: 8-byte (2 floats) opaque instances and 16-byte additive.
  renderer.RegisterEffect("a", OPAQUE, 8, 1, null, effect);
  renderer.RegisterEffect("b", ADDITIVE, 16, 2, null, effect);
  renderer.RegisterEffect("a", ADDITIVE, 4, 1, null, effect); // duplicate key ignored

  renderer.AddQuads("a", [1, 2], 1);
  renderer.AddQuads("a", [3, 4, 5, 6], 2);
  renderer.AddQuads("b", [7, 8, 9, 10], 1);
  renderer.AddQuads("missing", [0], 1); // unknown key ignored
  assert.equal(renderer.bufferSize, 8 * 3 + 16);

  const quadCount = renderer.BeginRendering();
  assert.equal(quadCount, 2, "largest live quadCount");
  assert.equal(renderer.lastInstanceDataSize, 40);

  const records = renderer.GetEffectRecords();
  assert.equal(records.get("a").count, 3);
  assert.equal(records.get("b").count, 1);
  const merged = renderer.GetMergedData();
  assert.equal(merged[0], 1);
  assert.equal(merged[records.get("b").bufferOffset / 4], 7, "aligned record offset");

  const accumulator = new TriRenderBatchAccumulator();
  assert.equal(renderer.GetBatches(OPAQUE, accumulator), true);
  assert.equal(renderer.GetBatches(OPAQUE, accumulator), true);
  assert.equal(accumulator.GetBatchCount(), 2);
  const batch = accumulator.GetBatches()[0];
  assert.equal(batch.instanceCount, 3, "instances for the opaque record");
  assert.equal(batch.indexCountPerInstance, 6, "6 indices x quadCount 1");

  // Only matching batch types emit.
  const additive = new TriRenderBatchAccumulator();
  assert.equal(renderer.GetBatches(ADDITIVE, additive), true);
  assert.equal(additive.GetBatchCount(), 1);
  assert.equal(additive.GetBatches()[0].indexCountPerInstance, 12, "6 x quadCount 2");

  renderer.DoneRendering();
  assert.equal(renderer.bufferSize, 0, "frame reset");

  assert.equal(Tr2QuadRenderer.Instance(), Tr2QuadRenderer.Instance(), "singleton");
});
