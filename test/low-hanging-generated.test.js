import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import {
  EveChildEffectPropagator,
  EveTurretFiringFX,
  EveUiObject,
  Tr2MaterialParameterStore,
  Tr2Mesh,
  Tr2MeshArea
} from "../npm/dist/index.js";
import { TriBatchType } from "../npm/dist/generated/trinityCore/enums.js";


test("EveTurretFiringFX reports Carbon's per-muzzle effect count", () =>
{
  const firingFX = new EveTurretFiringFX();
  firingFX.stretch.push({}, {}, {});

  assert.equal(firingFX.GetPerMuzzleEffectCount(), 3);
  assert.equal(CjsSchema.getMethod(EveTurretFiringFX, "GetPerMuzzleEffectCount")?.impl?.status, "implemented");
});

test("EveUiObject operates on Trinity mesh picking and visibility areas", () =>
{
  const uiObject = new EveUiObject();
  assert.equal(uiObject.GetNameForPickingAreaID(7), "invalid_mesh");

  const mesh = new Tr2Mesh();
  const picking = new Tr2MeshArea();
  picking.name = "button";
  picking.index = 7;
  const opaque = new Tr2MeshArea();
  opaque.name = "button";
  const unrelated = new Tr2MeshArea();
  unrelated.name = "frame";

  mesh.AddArea(TriBatchType.TRIBATCHTYPE_PICKING, picking);
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_OPAQUE, opaque);
  mesh.AddArea(TriBatchType.TRIBATCHTYPE_ADDITIVE, unrelated);
  uiObject.SetMesh(mesh);

  assert.equal(uiObject.GetNameForPickingAreaID(7), "button");
  assert.equal(uiObject.GetNameForPickingAreaID(8), "invalid_areaid");
  uiObject.SetVisibilityForArea("button", false);
  assert.equal(picking.GetDisplay(), false);
  assert.equal(opaque.GetDisplay(), false);
  assert.equal(unrelated.GetDisplay(), true);
  assert.equal(picking.GetName(), "button");
});

test("EveChildEffectPropagator.Stop resets playback and clears effect instances", () =>
{
  const propagator = new EveChildEffectPropagator();
  let clearCalls = 0;
  propagator.isPlaying = true;
  propagator.playTime = 4;
  propagator.effect = {
    instances: [{}, {}],
    ClearInstanceList()
    {
      clearCalls++;
      this.instances.length = 0;
    }
  };

  propagator.Stop();
  assert.equal(propagator.isPlaying, false);
  assert.equal(propagator.playTime, 0);
  assert.equal(clearCalls, 1);
  assert.equal(propagator.effect.instances.length, 0);

  propagator.effect = { instances: [{}, {}] };
  propagator.Stop();
  assert.equal(propagator.effect.instances.length, 0);
  assert.equal(CjsSchema.getMethod(EveChildEffectPropagator, "Stop")?.impl?.status, "adapted");
});

test("Tr2MaterialParameterStore resolves local overrides before parent values", () =>
{
  const parent = new Tr2MaterialParameterStore();
  const child = new Tr2MaterialParameterStore();
  const parentValue = { name: "Glow", value: 1 };
  const childValue = { name: "Glow", value: 2 };

  parent.parameters.set("Glow", parentValue);
  child.parent = parent;
  assert.equal(child.FindParameter("Glow"), parentValue);
  child.parameters.set("Glow", childValue);
  assert.equal(child.FindParameter("Glow"), childValue);
  assert.equal(child.FindParameter("Missing"), null);
  assert.equal(CjsSchema.getField(Tr2MaterialParameterStore, "parameters")?.type.kind, "map");
  assert.equal(CjsSchema.getField(Tr2MaterialParameterStore, "parentPath")?.type.kind, "path");
});

test("low-hanging ports replace their generated staging files", () =>
{
  const families = new Map([
    ["EveTurretFiringFX", "eve/attachment/turrets"],
    ["EveUiObject", "eve/ui"],
    ["EveChildEffectPropagator", "eve/child"],
    ["Tr2MaterialParameterStore", "trinityCore"]
  ]);
  const summary = JSON.parse(readFileSync(new URL("../src/generated/summary.json", import.meta.url), "utf8"));
  const skipped = new Map(summary.skipped.map(entry => [entry.className, entry]));

  for (const [className, family] of families)
  {
    assert.equal(existsSync(new URL(`../src/generated/${family}/${className}.js`, import.meta.url)), false, className);
    assert.equal(skipped.get(className)?.reason, "hand-maintained source exists", className);
  }
});
