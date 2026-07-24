import assert from "node:assert/strict";
import { test } from "node:test";

import {
  Tr2MeshBase,
  Tr2MeshArea,
  TriRenderBatchAccumulator,
  Tr2PerObjectData
} from "../npm/dist/trinityCore/index.js";

import { TriBatchType } from "@carbonenginejs/runtime-utils/graphics";

function area(effect, { index = 0, count = 1, reversed = false, display = true } = {})
{
  const meshArea = new Tr2MeshArea();
  meshArea.SetMaterial(effect);
  meshArea.SetIndex(index);
  meshArea.SetCount(count);
  meshArea.SetReversed(reversed);
  meshArea.SetDisplay(display);
  return meshArea;
}

test("GetBatches emits one descriptor batch per displayed, materialled area", () =>
{
  const mesh = new Tr2MeshBase();
  mesh.meshIndex = 3;
  const effect = { id: "fx" };

  mesh.AddArea(TriBatchType.TRIBATCHTYPE_OPAQUE, area(effect, { index: 2, count: 4 }));
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_OPAQUE, area(effect, { index: 6, count: 2 }));
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_OPAQUE, area(effect, { display: false }));
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_OPAQUE, area(null));

  const accumulator = new TriRenderBatchAccumulator();
  const perObjectData = new Tr2PerObjectData();
  perObjectData.SetUserData(7);

  mesh.GetBatches(accumulator, TriBatchType.TRIBATCHTYPE_OPAQUE, perObjectData);

  const batches = accumulator.GetBatches();
  assert.equal(batches.length, 2, "hidden and material-less areas are skipped");

  const [ first ] = batches;
  assert.equal(first.material, effect);
  assert.equal(first.shader, effect, "the effect stands in as the shader key");
  assert.equal(first.objectData, perObjectData);
  assert.equal(first.pickingData, (3 << 8) | 2);
  assert.deepEqual(
    {
      meshIndex: first.geometrySource.meshIndex,
      areaIndex: first.geometrySource.areaIndex,
      count: first.geometrySource.count
    },
    { meshIndex: 3, areaIndex: 2, count: 4 }
  );
});

test("GetBatches routes by TriBatchType through GetAreas", () =>
{
  const mesh = new Tr2MeshBase();
  const effect = {};
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_TRANSPARENT, area(effect));

  const opaque = new TriRenderBatchAccumulator();
  mesh.GetBatches(opaque, TriBatchType.TRIBATCHTYPE_OPAQUE, null);
  assert.equal(opaque.GetBatchCount(), 0, "no opaque areas");

  const transparent = new TriRenderBatchAccumulator();
  mesh.GetBatches(transparent, TriBatchType.TRIBATCHTYPE_TRANSPARENT, null);
  assert.equal(transparent.GetBatchCount(), 1);
});

test("GetBatches accepts an already-resolved area list", () =>
{
  const mesh = new Tr2MeshBase();
  const effect = {};
  const accumulator = new TriRenderBatchAccumulator();
  mesh.GetBatches(accumulator, [ area(effect), area(effect) ], null);
  assert.equal(accumulator.GetBatchCount(), 2);
});

test("a hidden mesh emits nothing", () =>
{
  const mesh = new Tr2MeshBase();
  mesh.display = false;
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_OPAQUE, area({}));

  const accumulator = new TriRenderBatchAccumulator();
  mesh.GetBatches(accumulator, TriBatchType.TRIBATCHTYPE_OPAQUE, null);
  assert.equal(accumulator.GetBatchCount(), 0);
});
