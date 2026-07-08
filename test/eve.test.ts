import {
  BackAndForthData,
  CjsEveThrottleableState,
  DecalVSPerObjectData,
  EveBasicPerObjectData,
  EveChildSpherePinPerObjectData,
  EveChildUpdateParams,
  EveLineData,
  EveLocator2,
  EveLocatorSets,
  EvePerObjectPSData,
  EvePerObjectVSData,
  EveRemotePositionCurve,
  EveSpaceObjectPSData,
  EveSpaceObjectVSData,
  EveSpacePerObjectData,
  EveSpherePinPerObjectData,
  EveThrottleable,
  FollowASplineData,
  FormationData,
  InertiaData,
  type ITriVectorFunction,
  Locator,
  LocatorData,
  PlacementDataWithIdentifier,
  PlayFXData,
  ProcessLifetimeData,
  SeekTargetData,
  type Vec3,
} from "../src/index.ts";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsSchema } from "@carbonenginejs/core-types/schema";

function assert(
  condition: unknown,
  message = "assertion failed",
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEquals<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new Error(
      message || `expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

function assertAlmostEquals(
  actual: number,
  expected: number,
  epsilon = 1e-6,
): void {
  if (Math.abs(actual - expected) > epsilon) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

Deno.test("promoted Eve data classes expose source-backed metadata and defaults", async () => {
  const backAndForth = new BackAndForthData();
  const params = new EveChildUpdateParams();
  const decalVS = new DecalVSPerObjectData();
  const childSpherePin = new EveChildSpherePinPerObjectData();
  new EvePerObjectVSData();
  new EvePerObjectPSData();
  new EveRemotePositionCurve();
  new EveSpaceObjectPSData();
  new EveSpaceObjectVSData();
  new EveSpacePerObjectData();
  const spherePin = new EveSpherePinPerObjectData();
  const line = new EveLineData();
  const followSpline = new FollowASplineData();
  const formation = new FormationData();
  const inertia = new InertiaData();
  new EveThrottleable();
  new EveLocator2();
  new EveLocatorSets();
  new Locator();
  new LocatorData();
  const placement = new PlacementDataWithIdentifier();
  const playFx = new PlayFXData();
  const lifetime = new ProcessLifetimeData();
  const seekTarget = new SeekTargetData();

  assertEquals(CjsSchema.getClass("BackAndForthData"), BackAndForthData);
  assertEquals(
    CjsSchema.getClass("EveChildUpdateParams"),
    EveChildUpdateParams,
  );
  assertEquals(
    CjsSchema.getClass("DecalVSPerObjectData"),
    DecalVSPerObjectData,
  );
  assertEquals(
    CjsSchema.getClass("EveChildSpherePinPerObjectData"),
    EveChildSpherePinPerObjectData,
  );
  assertEquals(CjsSchema.getClass("EveLineData"), EveLineData);
  assertEquals(
    CjsSchema.getClass("EveBasicPerObjectData"),
    EveBasicPerObjectData,
  );
  assertEquals(CjsSchema.getClass("EvePerObjectVSData"), EvePerObjectVSData);
  assertEquals(CjsSchema.getClass("EvePerObjectPSData"), EvePerObjectPSData);
  assertEquals(
    CjsSchema.getClass("EveRemotePositionCurve"),
    EveRemotePositionCurve,
  );
  assertEquals(
    CjsSchema.getClass("EveSpaceObjectPSData"),
    EveSpaceObjectPSData,
  );
  assertEquals(
    CjsSchema.getClass("EveSpaceObjectVSData"),
    EveSpaceObjectVSData,
  );
  assertEquals(
    CjsSchema.getClass("EveSpacePerObjectData"),
    EveSpacePerObjectData,
  );
  assertEquals(
    CjsSchema.getClass("EveSpherePinPerObjectData"),
    EveSpherePinPerObjectData,
  );
  assertEquals(CjsSchema.getClass("EveThrottleable"), EveThrottleable);
  assertEquals(CjsSchema.getClass("FollowASplineData"), FollowASplineData);
  assertEquals(CjsSchema.getClass("FormationData"), FormationData);
  assertEquals(CjsSchema.getClass("InertiaData"), InertiaData);
  assertEquals(CjsSchema.getClass("EveLocator2"), EveLocator2);
  assertEquals(CjsSchema.getClass("EveLocatorSets"), EveLocatorSets);
  assertEquals(CjsSchema.getClass("Locator"), Locator);
  assertEquals(CjsSchema.getClass("LocatorData"), LocatorData);
  assertEquals(
    CjsSchema.getClass("PlacementDataWithIdentifier"),
    PlacementDataWithIdentifier,
  );
  assertEquals(CjsSchema.getClass("PlayFXData"), PlayFXData);
  assertEquals(CjsSchema.getClass("ProcessLifetimeData"), ProcessLifetimeData);
  assertEquals(CjsSchema.getClass("SeekTargetData"), SeekTargetData);
  assertEquals(CjsSchema.getClass("CjsEveThrottleableState"), null);

  assertEquals(backAndForth.locatorIndex, -1);
  assertEquals(backAndForth.seek, true);
  assertEquals(backAndForth.arrived, true);
  assertEquals(params.activationStrength, 1);
  assertEquals(params.controllerUpdateFrequency, 0.5);
  assertEquals(params.isVisible, true);
  assertVec3(params.worldVelocity, [0, 0, 0]);
  assertMat4(params.localToWorldTransform, mat4.create());

  const perObject = new EveBasicPerObjectData();
  assertMat4(perObject.world, mat4.create());
  assertMat4(perObject.worldLast, mat4.create());
  assertMat4(perObject.worldInverse, mat4.create());
  assertMat4(decalVS.worldMatrix, mat4.create());
  assertMat4(decalVS.invWorldMatrix, mat4.create());
  assertMat4(decalVS.parentBoneMatrix, mat4.create());
  assertMat4(childSpherePin.worldMatrix, mat4.create());
  assertQuat(childSpherePin.pinRotation, [0, 0, 0, 1]);
  assertMat4(spherePin.worldMatrix, mat4.create());
  assertQuat(spherePin.pinRotation, [0, 0, 0, 1]);
  assertVec3(line.position1, [0, 0, 0]);
  assertVec3(line.position2, [0, 0, 0]);
  assertEquals(followSpline.tunnelLock, -1);
  assertEquals(followSpline.tunnelPoint, 0);
  assertEquals(formation.assignedSlot, -1);
  assertVec3(inertia.agentAccel, [0, 0, 0]);
  assertVec3(placement.initialTranslation, [0, 0, 0]);
  assertQuat(placement.initialRotation, [0, 0, 0, 1]);
  assertVec3(placement.initialScale, [1, 1, 1]);
  assertVec3(placement.additionalTranslation, [0, 0, 0]);
  assertQuat(placement.additionalRotation, [0, 0, 0, 1]);
  assertVec3(placement.additionalScale, [1, 1, 1]);
  assertEquals(placement.boneIndex, -1);
  assertEquals(placement.initialPlacementID, -1);
  assertEquals(playFx.effectPlaying, false);
  assertVec3(playFx.oldTarget, [0, 0, 0]);
  assertEquals(lifetime.hasUsedEntryTunnel, false);
  assertEquals(lifetime.hasUsedExitTunnel, false);
  assertEquals(lifetime.assignedLifeTimeTunnel, 0);
  assertEquals(lifetime.tunnelPoint, 0);
  assertEquals(lifetime.hasSpawned, false);
  assertEquals(seekTarget.bucketId, -1);
  assertEquals(seekTarget.locatorIndex, -1);
  assertEquals(seekTarget.arrived, true);

  assertEquals(
    CjsSchema.getField(BackAndForthData, "timePassed")?.type.kind,
    "float32",
  );
  assertEquals(
    CjsSchema.getField(EveChildUpdateParams, "localToWorldTransform")?.type
      .kind,
    "mat4",
  );
  assertEquals(
    CjsSchema.getField(DecalVSPerObjectData, "inverseDecalMatrix")?.type.kind,
    "mat4",
  );
  assertEquals(
    CjsSchema.getField(EveChildSpherePinPerObjectData, "pinColor")?.type.kind,
    "color",
  );
  assertEquals(
    CjsSchema.getField(EveRemotePositionCurve, "startPositionCurve")?.type
      .className,
    "ITriVectorFunction",
  );
  assertEquals(
    CjsSchema.getField(EveSpaceObjectVSData, "worldTransform")?.type.kind,
    "mat4",
  );
  assertEquals(
    CjsSchema.getField(EveSpaceObjectVSData, "activeMorphTargetsCount")?.type
      .kind,
    "uint32",
  );
  assertEquals(
    CjsSchema.getField(EveSpaceObjectPSData, "clipSphereCenter")?.type.kind,
    "vec3",
  );
  assertEquals(
    CjsSchema.getField(EveSpacePerObjectData, "clipRadiusSq")?.type.kind,
    "float32",
  );
  assertEquals(
    CjsSchema.getField(EveSpherePinPerObjectData, "pinUV")?.type.kind,
    "vec4",
  );
  assertEquals(
    CjsSchema.getField(EveLineData, "color1")?.type.kind,
    "color",
  );
  assertEquals(
    CjsSchema.getField(EveLocator2, "transform")?.type.kind,
    "mat4",
  );
  assertEquals(
    CjsSchema.getField(PlacementDataWithIdentifier, "uniqueID")?.type.kind,
    "uint32",
  );
  assertEquals(
    CjsSchema.getField(PlacementDataWithIdentifier, "boneIndex")?.type.kind,
    "int32",
  );
  assertEquals(
    CjsSchema.getField(ProcessLifetimeData, "hasSpawned")?.type.kind,
    "boolean",
  );
  assertEquals(
    CjsSchema.getField(ProcessLifetimeData, "tunnelPoint")?.type.kind,
    "int32",
  );
  assertEquals(
    CjsSchema.getField(SeekTargetData, "position")?.type.kind,
    "vec3",
  );

  const summary = JSON.parse(
    await Deno.readTextFile("src/generated/summary.json"),
  ) as { skipped?: Array<{ family: string; className: string }> };
  const skipped = new Set(
    (summary.skipped || []).map((item) => `${item.family}/${item.className}`),
  );
  for (
    const className of [
      "BackAndForthData",
      "EveBasicPerObjectData",
      "DecalVSPerObjectData",
      "EveChildSpherePinPerObjectData",
      "EveChildUpdateParams",
      "EveLineData",
      "EvePerObjectPSData",
      "EvePerObjectVSData",
      "EveRemotePositionCurve",
      "EveSpaceObjectPSData",
      "EveSpaceObjectVSData",
      "EveSpacePerObjectData",
      "EveSpherePinPerObjectData",
      "EveThrottleable",
      "FollowASplineData",
      "FormationData",
      "InertiaData",
      "EveLocator2",
      "EveLocatorSets",
      "Locator",
      "LocatorData",
      "PlacementDataWithIdentifier",
      "PlayFXData",
      "ProcessLifetimeData",
      "SeekTargetData",
    ]
  ) {
    assert(
      skipped.has(`eve/${className}`),
      `${className} should be skipped by generated output`,
    );
  }
});

Deno.test("EveLocator2 exposes Carbon name and transform helpers", () => {
  const locator = new EveLocator2();
  assertEquals(locator.GetName(), "");
  assertMat4(locator.GetTransform(), mat4.create());

  locator.SetName("locator_turret_01");
  assertEquals(locator.GetName(), "locator_turret_01");

  const transform = mat4.create();
  mat4.setTranslationFromValues(transform, 4, 5, 6);
  locator.SetTransform(transform);
  assertMat4(locator.GetTransform(), transform);

  transform[12] = 99;
  assertAlmostEquals(locator.GetTransform()[12], 4);
});

Deno.test("EveLocatorSets translates and copies locator lists", () => {
  const set = new EveLocatorSets();
  const first = makeLocator([1, 2, 3], [0, 0, 0, 1], [1, 1, 1], 7);
  const second = makeLocator([4, 5, 6], [0, 0, 1, 0], [2, 2, 2], 8);

  set.Set("damage", [first]);
  assertEquals(set.GetName(), "damage");
  assert(set.HasName("damage"));
  assertEquals(set.GetLocators().length, 1);
  assertVec3(set.GetLocators()[0].position, [1, 2, 3]);
  assertEquals(set.GetLocators()[0].boneIndex, 7);

  first.position[0] = 99;
  assertVec3(set.GetLocators()[0].position, [1, 2, 3]);

  set.Append([second]);
  assertEquals(set.GetLocators().length, 2);
  assertVec3(set.GetLocators()[1].position, [4, 5, 6]);

  const zero = vec3.create();
  set.Translate(zero);
  assertVec3(set.GetLocators()[0].position, [1, 2, 3]);

  set.Translate(vec3.fromValues(10, 20, 30));
  assertVec3(set.GetLocators()[0].position, [11, 22, 33]);
  assertVec3(set.GetLocators()[1].position, [14, 25, 36]);
});

Deno.test("EveThrottleable mirrors Carbon update skipping", () => {
  const host = {
    updateThrottle: true,
    minUpdateFrequency: 2,
    maxUpdateFrequency: 20,
    currentUpdateFrequency: 10,
  };
  const throttle = new CjsEveThrottleableState();

  assertEquals(throttle.ShouldSkipUpdate(host, 1, 100), false);
  assertEquals(host.currentUpdateFrequency, 20);
  assertEquals(throttle.ShouldSkipUpdate(host, 0, 100.01), true);
  assertEquals(host.currentUpdateFrequency, 20);
  assertEquals(throttle.ShouldSkipUpdate(host, 0, 100.06), false);
  assertEquals(host.currentUpdateFrequency, 2);

  host.maxUpdateFrequency = -10;
  host.minUpdateFrequency = -20;
  assertEquals(throttle.ShouldSkipUpdate(host, 0.5, 101), false);
  assertEquals(host.currentUpdateFrequency, 0.1);

  host.updateThrottle = false;
  assertEquals(throttle.ShouldSkipUpdate(host, 1, 101.01), false);
});

Deno.test("EveThrottleable exposes the source-backed class wrapper", () => {
  const throttle = new EveThrottleable();
  assertEquals(throttle.currentUpdateFrequency, 10);
  assertEquals(throttle.minUpdateFrequency, 2);
  assertEquals(throttle.maxUpdateFrequency, 20);
  assertEquals(throttle.updateThrottle, true);

  assertEquals(throttle.ShouldSkipUpdate(1, 5), false);
  assertEquals(throttle.currentUpdateFrequency, 20);
  assertEquals(throttle.ShouldSkipUpdate(0.5, 5.01), true);
});

Deno.test("EveRemotePositionCurve caches Carbon remote sweep values", () => {
  const curve = new EveRemotePositionCurve();
  curve.startPositionCurve = makeVectorFunction((time, out) => {
    out[0] = time;
    out[1] = time * 2;
    out[2] = time * 3;
    return out;
  });
  curve.offsetDir1[0] = 1;
  curve.offsetDir1[1] = 2;
  curve.offsetDir1[2] = 3;
  curve.offsetDir2[0] = 5;
  curve.offsetDir2[1] = 6;
  curve.offsetDir2[2] = 7;
  curve.delayTime = 1;
  curve.sweepTime = 4;

  const out = vec3.create();
  curve.Update(10, out);
  assertVec3(out, [11, 22, 33]);
  assertVec3(curve.value, [11, 22, 33]);

  curve.Update(13, out);
  assertVec3(out, [16, 30, 44]);
  assertVec3(curve.value, [16, 30, 44]);

  const cached = vec3.create();
  curve.GetValueAt(999, cached);
  assertVec3(cached, [16, 30, 44]);
});

Deno.test("EveRemotePositionCurve preserves Carbon no-start and derivative behavior", () => {
  const curve = new EveRemotePositionCurve();
  curve.value[0] = 9;
  curve.value[1] = 8;
  curve.value[2] = 7;
  const out = vec3.fromValues(1, 1, 1);

  curve.Update(3, out);
  assertVec3(out, [0, 0, 0]);
  assertVec3(curve.value, [9, 8, 7]);

  curve.GetValueDotAt(3, out);
  assertVec3(out, [0, 0, 0]);
  out[0] = 4;
  out[1] = 5;
  out[2] = 6;
  curve.GetValueDoubleDotAt(3, out);
  assertVec3(out, [4, 5, 6]);
});

Deno.test("promoted Eve graph files do not import backend APIs", async () => {
  const files: string[] = [];
  for await (const entry of Deno.readDir("src/eve")) {
    if (entry.isFile && entry.name.endsWith(".ts")) {
      files.push(`src/eve/${entry.name}`);
    }
  }

  for (const file of files) {
    const source = await Deno.readTextFile(file);
    assert(
      !/(WebGPU|WebGL|GPUDevice|GPUTexture|GPUBuffer|navigator\.gpu)/.test(
        source,
      ),
      `${file} should remain runtime graph code, not engine backend code`,
    );
  }
});

function makeVectorFunction(
  getValueAt: (time: number, out: Vec3) => Vec3,
): ITriVectorFunction {
  return {
    Update(time: number, out: Vec3): Vec3 {
      return getValueAt(time, out);
    },
    GetValueAt(time: number, out: Vec3): Vec3 {
      return getValueAt(time, out);
    },
    GetValueDotAt(_time: number, out: Vec3): Vec3 {
      return vec3.zero(out);
    },
    GetValueDoubleDotAt(_time: number, out: Vec3): Vec3 {
      return vec3.zero(out);
    },
  };
}

function makeLocator(
  position: readonly [number, number, number],
  direction: readonly [number, number, number, number],
  scale: readonly [number, number, number],
  boneIndex: number,
): Locator {
  const locator = new Locator();
  locator.position = vec3.fromValues(position[0], position[1], position[2]);
  locator.direction = quat.fromValues(
    direction[0],
    direction[1],
    direction[2],
    direction[3],
  );
  locator.scale = vec3.fromValues(scale[0], scale[1], scale[2]);
  locator.boneIndex = boneIndex;
  return locator;
}

function assertVec3(
  actual: Vec3,
  expected: readonly [number, number, number],
): void {
  assertAlmostEquals(actual[0], expected[0]);
  assertAlmostEquals(actual[1], expected[1]);
  assertAlmostEquals(actual[2], expected[2]);
}

function assertQuat(
  actual: Float32Array,
  expected: readonly [number, number, number, number],
): void {
  assertAlmostEquals(actual[0], expected[0]);
  assertAlmostEquals(actual[1], expected[1]);
  assertAlmostEquals(actual[2], expected[2]);
  assertAlmostEquals(actual[3], expected[3]);
}

function assertMat4(actual: Float32Array, expected: Float32Array): void {
  for (let i = 0; i < 16; i++) {
    assertAlmostEquals(actual[i], expected[i]);
  }
}
