import test from "node:test";
import assert from "node:assert/strict";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import { Locator } from "../npm/dist/eve/Locator.js";
import { PlacementDataWithIdentifier } from "../npm/dist/eve/PlacementDataWithIdentifier.js";
import { EveBaseDistributionMethod } from "../npm/dist/generated/eve/distribution/EveBaseDistributionMethod.js";
import { EveDistributionModifierProcessLifetime } from "../npm/dist/generated/eve/distribution/attributeModifiers/EveDistributionModifierProcessLifetime.js";
import { EveDistributionModifierScaleBySpaceObjectParent } from "../npm/dist/generated/eve/distribution/attributeModifiers/EveDistributionModifierScaleBySpaceObjectParent.js";
import { EveDistributionModifierTransformOffset } from "../npm/dist/generated/eve/distribution/attributeModifiers/EveDistributionModifierTransformOffset.js";
import { EveDistributionPlacementGeneratorLocators } from "../npm/dist/generated/eve/distribution/placement/EveDistributionPlacementGeneratorLocators.js";
import { EveDistributionSpawnModifierLifeTimeOffset } from "../npm/dist/generated/eve/distribution/spawnModifiers/EveDistributionSpawnModifierLifeTimeOffset.js";
import { EveDistributionSpawnModifierRandomOffset } from "../npm/dist/generated/eve/distribution/spawnModifiers/EveDistributionSpawnModifierRandomOffset.js";
import { EveDistributionSpawnModifierRandomRotation } from "../npm/dist/generated/eve/distribution/spawnModifiers/EveDistributionSpawnModifierRandomRotation.js";
import { EveDistributionSpawnModifierRandomScale } from "../npm/dist/generated/eve/distribution/spawnModifiers/EveDistributionSpawnModifierRandomScale.js";
import { EveDistributionSpawnerBurst } from "../npm/dist/generated/eve/distribution/spawners/EveDistributionSpawnerBurst.js";
import { EveDistributionSpawnerControllerTrigger } from "../npm/dist/generated/eve/distribution/spawners/EveDistributionSpawnerControllerTrigger.js";
import { EveDistributionSpawnerInterval } from "../npm/dist/generated/eve/distribution/spawners/EveDistributionSpawnerInterval.js";


test("locator distributions rebuild and consume Carbon placement pools", () =>
{
  const first = new Locator();
  first.position.set([10, 0, 0]);
  const second = new Locator();
  second.position.set([20, 0, 0]);

  assert.deepEqual(Array.from(first.scale), [1, 1, 1]);
  assert.equal(first.boneIndex, -1);

  const generator = new EveDistributionPlacementGeneratorLocators();
  generator.locators.push(first, second);

  const calls = [];
  const distribution = new EveBaseDistributionMethod();
  distribution.placementGenerators.push(generator);
  distribution.spawnModifiers.push({
    ProcessSpawnModifier(placement, count)
    {
      placement.initialTranslation[0] += 5;
      calls.push(["spawn", count]);
    }
  });
  distribution.lifetimeModifiers.push({
    AffectsTransform: () => false,
    ProcessDistributionModifier(placement, deltaTime)
    {
      calls.push(["lifetime", placement.initialPlacementID, deltaTime]);
      return 0;
    }
  });
  distribution.spawnTriggers.push({
    Reset: placements => calls.push(["reset", placements.length]),
    UpdateSyncronous: () => calls.push(["update"]),
    SetControllerVariable: (name, value) => calls.push(["variable", name, value])
  });

  assert.equal(distribution.Initialize(), true);
  assert.equal(distribution.GetFreePlacementCount(), 2);
  assert.equal(distribution.GetNumberOfPlacements(), 0);
  assert.equal(distribution.GetClosestFreePlacement([19, 0, 0]), 1);

  const originalRandom = Math.random;
  Math.random = () => 0;
  try
  {
    distribution.AddEntity();
  }
  finally
  {
    Math.random = originalRandom;
  }

  assert.equal(distribution.GetFreePlacementCount(), 1);
  assert.equal(distribution.entitiesSpawned, 1);
  assert.equal(distribution.GetNumberOfPlacements(), 1);
  assert.equal(distribution.placementData[0].uniqueID, 0);
  assert.equal(distribution.placementData[0].initialPlacementID, 0);
  assert.deepEqual(Array.from(distribution.placementData[0].initialTranslation), [15, 0, 0]);
  assert.equal(distribution.GetClosestFreePlacement([19, 0, 0]), 1);

  assert.equal(distribution.TriggerEntityByID(1), 0);
  assert.equal(distribution.GetFreePlacementCount(), 0);
  assert.equal(distribution.GetNumberOfPlacements(), 2);
  assert.deepEqual(Array.from(distribution.placementData[1].initialTranslation), [25, 0, 0]);
  assert.equal(distribution.TriggerEntityByID(1), -1);

  distribution.SetControllerVariable("Intensity", 0.5);
  assert.deepEqual(calls.at(-1), ["variable", "Intensity", 0.5]);
  assert.equal(distribution.GetInitialPlacementData(99), null);
  assert.equal(CjsSchema.getMethod(EveBaseDistributionMethod, "AddEntity")?.impl?.status, "implemented");
  assert.equal(CjsSchema.getMethod(EveBaseDistributionMethod, "RegeneratePlacementData")?.impl?.status, "adapted");
});

test("distribution updates release timed-out locators and recompute centers", () =>
{
  const locator = new Locator();
  locator.position.set([4, 5, 6]);
  const generator = new EveDistributionPlacementGeneratorLocators();
  generator.locators.push(locator);

  const distribution = new EveBaseDistributionMethod();
  distribution.timeOutOnTriggering = 1;
  distribution.placementGenerators.push(generator);
  distribution.Initialize();
  distribution.AddEntity();

  const context = { GetDeltaT: () => 2 };
  distribution.UpdateSyncronous(context);
  assert.deepEqual(Array.from(distribution.GetPlacementDataCenter()), [4, 5, 6]);
  assert.equal(distribution.GetFreePlacementCount(), 0);

  distribution.UpdateSyncronous(context);
  assert.equal(distribution.GetFreePlacementCount(), 1);

  generator.OnStructureListModified(0, null, 0, generator.locators);
  assert.equal(generator.IsRequestingRegeneration(), true);
  distribution.UpdateSyncronous(context);
  assert.equal(generator.IsRequestingRegeneration(), false);
  assert.equal(distribution.GetNumberOfPlacements(), 0);
  assert.equal(distribution.GetFreePlacementCount(), 1);
});

test("distribution spawn modifiers reproduce Carbon placement transforms", () =>
{
  const placement = new PlacementDataWithIdentifier();
  placement.uniqueID = 7;
  placement.initialPlacementID = 3;

  const offset = new EveDistributionSpawnModifierRandomOffset();
  offset.consistentRandom = true;
  offset.minOffset.set([1, 2, 3]);
  offset.maxOffset.set([1, 2, 3]);
  offset.ProcessSpawnModifier(placement, 1);
  assert.deepEqual(Array.from(placement.initialTranslation), [1, 2, 3]);

  const scale = new EveDistributionSpawnModifierRandomScale();
  scale.consistentRandom = true;
  scale.minScale.set([2, 3, 4]);
  scale.maxScale.set([2, 3, 4]);
  scale.ProcessSpawnModifier(placement, 1);
  assert.deepEqual(Array.from(placement.initialScale), [2, 3, 4]);

  const rotation = new EveDistributionSpawnModifierRandomRotation();
  rotation.consistentRandom = true;
  rotation.overrideRotation = true;
  rotation.minRotation.set([Math.PI, 0, 0]);
  rotation.maxRotation.set([Math.PI, 0, 0]);
  rotation.ProcessSpawnModifier(placement, 1);
  assert.ok(Math.abs(placement.initialRotation[1] - 1) < 1e-6);
  assert.ok(Math.abs(placement.initialRotation[3]) < 1e-6);

  const lifetime = new EveDistributionSpawnModifierLifeTimeOffset();
  lifetime.consistentRandom = true;
  lifetime.minOffset = 2;
  lifetime.maxOffset = 2;
  lifetime.cascadingLifetimeOffset = 0.5;
  lifetime.ProcessSpawnModifier(placement, 1);
  assert.equal(placement.lifeTime, 3.5);
});

test("distribution lifetime modifiers update Carbon transform and kill state", () =>
{
  const placement = new PlacementDataWithIdentifier();
  const transform = new EveDistributionModifierTransformOffset();
  transform.translation.set([1, 2, 3]);
  transform.scaling.set([2, 3, 4]);
  assert.equal(transform.AffectsTransform(), true);
  assert.equal(transform.ProcessDistributionModifier(placement, 0, {}), 0);
  assert.deepEqual(Array.from(placement.additionalTranslation), [1, 2, 3]);
  assert.deepEqual(Array.from(placement.additionalScale), [2, 3, 4]);

  const parentScale = new EveDistributionModifierScaleBySpaceObjectParent();
  const params = {
    spaceObjectParent: {
      GetBoundingSphere(out)
      {
        out.set([0, 0, 0, 2000]);
        return true;
      }
    }
  };
  parentScale.authoredForBoundingRadius = 1000;
  parentScale.scaleFactor = 1;
  assert.equal(parentScale.ProcessDistributionModifier(placement, 0, params), 0);
  assert.deepEqual(Array.from(placement.additionalScale), [4, 6, 8]);

  const lifetime = new EveDistributionModifierProcessLifetime();
  lifetime.lifetimeDuration = 2;
  placement.lifeTime = 3;
  assert.equal(lifetime.AffectsTransform(), false);
  assert.equal(
    lifetime.ProcessDistributionModifier(placement, 0, {}),
    EveDistributionModifierProcessLifetime.DistributionEntityLifeTimeEvent.KILL_ENTITY
  );
});

test("burst and interval spawners drive Carbon distribution owners", () =>
{
  const generator = new EveDistributionPlacementGeneratorLocators();
  for (let i = 0; i < 4; i++)
  {
    const locator = new Locator();
    locator.position[0] = i;
    generator.locators.push(locator);
  }

  const burst = new EveDistributionSpawnerBurst();
  burst.completeness = 0.5;
  burst.additionalTriggersPerBurst = 1;
  const distribution = new EveBaseDistributionMethod();
  distribution.placementGenerators.push(generator);
  distribution.spawnTriggers.push(burst);
  distribution.Initialize();
  distribution.UpdateSyncronous({ GetDeltaT: () => 0 });
  assert.equal(distribution.GetNumberOfPlacements(), 3);
  distribution.UpdateSyncronous({ GetDeltaT: () => 10 });
  assert.equal(distribution.GetNumberOfPlacements(), 3);

  const additions = [];
  const interval = new EveDistributionSpawnerInterval();
  interval.useRandomStartOffset = false;
  interval.delayBetweenRepeats = 1;
  interval.numberOfRepeats = 2;
  interval.Restart();
  const owner = { AddEntities: count => additions.push(count) };
  interval.UpdateSyncronous({ GetDeltaT: () => 1 }, {}, owner);
  interval.UpdateSyncronous({ GetDeltaT: () => 0.1 }, {}, owner);
  interval.UpdateSyncronous({ GetDeltaT: () => 1.1 }, {}, owner);
  interval.UpdateSyncronous({ GetDeltaT: () => 10 }, {}, owner);
  assert.deepEqual(additions, [1, 1]);
});

test("controller trigger spawners gate and restart their Carbon children", () =>
{
  const calls = [];
  const child = {
    Restart: () => calls.push("restart"),
    UpdateSyncronous: () => calls.push("update")
  };
  const trigger = new EveDistributionSpawnerControllerTrigger();
  trigger.variableName = "Active";
  trigger.restartOnReceivingValue = true;
  trigger.spawners.push(child);

  trigger.UpdateSyncronous({}, {}, {});
  assert.deepEqual(calls, []);
  trigger.SetControllerVariable("Other", 1);
  assert.deepEqual(calls, []);
  trigger.SetControllerVariable("Active", 1);
  assert.equal(trigger.isActive, true);
  trigger.UpdateSyncronous({}, {}, {});
  assert.deepEqual(calls, ["restart", "update"]);

  trigger.invertTrigger = true;
  trigger.SetControllerVariable("Active", 1);
  assert.equal(trigger.isActive, false);
});
