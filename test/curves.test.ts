import {
  Tr2CurveCombiner,
  Tr2CurveExtrapolation,
  Tr2CurveInterpolation,
  Tr2CurveQuaternionKey,
  Tr2CurveScalar,
  Tr2CurveScalarKey,
  Tr2CurveSetRange,
  Tr2ScalarFader,
  type Vec3,
} from "../src/index.ts";
import { CjsSchema } from "@carbonenginejs/core-types/schema";

function assert(
  condition: unknown,
  message = "assertion failed",
): asserts condition {
  if (!condition) throw new Error(message);
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

Deno.test("Tr2CurveScalarKey defaults match Carbon", () => {
  const key = new Tr2CurveScalarKey();

  assertEquals(key.time, 0);
  assertEquals(key.value, 0);
  assertEquals(key.leftTangent, 0);
  assertEquals(key.rightTangent, 0);
  assertEquals(key.id, 0);
  assertEquals(key.interpolation, Tr2CurveInterpolation.HERMITE);
  assertEquals(key.tangentType, 0);

  assertEquals(
    CjsSchema.getField(Tr2CurveScalarKey, "id")?.type.kind,
    "uint16",
  );
  assertEquals(
    CjsSchema.getField(Tr2CurveScalarKey, "interpolation")?.type.kind,
    "uint8",
  );
});

Deno.test("Tr2CurveQuaternionKey defaults match Carbon", () => {
  const key = new Tr2CurveQuaternionKey();

  assertEquals(key.time, 0);
  assertEquals(key.value[0], 0);
  assertEquals(key.value[1], 0);
  assertEquals(key.value[2], 0);
  assertEquals(key.value[3], 1);
  assertEquals(key.id, 0);
  assertEquals(key.interpolation, Tr2CurveInterpolation.LINEAR);
  assertEquals(
    CjsSchema.getField(Tr2CurveQuaternionKey, "interpolation")?.type.kind,
    "uint16",
  );
});

Deno.test("Tr2CurveScalar evaluates linear, clamp, and linear extrapolation", () => {
  const curve = new Tr2CurveScalar();
  curve.AddKey(0, 1, Tr2CurveInterpolation.LINEAR);
  curve.AddKey(2, 5, Tr2CurveInterpolation.LINEAR);

  assertAlmostEquals(curve.GetValue(1), 3);
  assertAlmostEquals(curve.GetValue(-1), 1);
  assertAlmostEquals(curve.GetValue(3), 5);

  curve.keys[0].leftTangent = 2;
  curve.keys[1].rightTangent = 4;
  curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);

  assertAlmostEquals(curve.GetValue(-1), -1);
  assertAlmostEquals(curve.GetValue(3), 9);
  assertAlmostEquals(curve.GetTangentAt(3), 4);
});

Deno.test("Tr2CurveScalar keeps stable sorted keys and computes hermite", () => {
  const curve = new Tr2CurveScalar();
  const a = new Tr2CurveScalarKey();
  a.time = 1;
  a.value = 2;
  a.interpolation = Tr2CurveInterpolation.HERMITE;
  a.tangentType = 3;
  const b = new Tr2CurveScalarKey();
  b.time = 0;
  b.value = 0;
  b.interpolation = Tr2CurveInterpolation.HERMITE;
  b.tangentType = 3;
  const c = new Tr2CurveScalarKey();
  c.time = 2;
  c.value = 0;
  c.interpolation = Tr2CurveInterpolation.HERMITE;
  c.tangentType = 3;

  curve.keys = [a, b, c];
  curve.OnKeysChanged();

  assertEquals(curve.keys[0], b);
  assertEquals(curve.keys[1], a);
  assertEquals(curve.keys[2], c);
  assertAlmostEquals(curve.GetValue(1), 2);
});

Deno.test("Tr2CurveCombiner sums vector functions and reports max length", () => {
  const combiner = new Tr2CurveCombiner();
  combiner.curves = [
    makeVectorCurve([1, 2, 3], 2),
    makeVectorCurve([4, 5, 6], 9),
  ];

  const out: Vec3 = [0, 0, 0];
  combiner.Update(out, 1);

  assertEquals(out[0], 5);
  assertEquals(out[1], 7);
  assertEquals(out[2], 9);
  assertEquals(combiner.Length(), 9);
});

Deno.test("Tr2ScalarFader matches fade and kick-in behavior", () => {
  const fader = new Tr2ScalarFader();

  assert(fader.IsZero());
  fader.StartFade(true, 2);
  fader.Update({ GetDeltaT: () => 0.5 });

  assertAlmostEquals(fader.GetFaderValue(), 0.25);
  assert(!fader.IsKickInZero());
  assert(fader.GetKickInValue() > 0);

  fader.Update({ GetDeltaT: () => 3 });
  assertEquals(fader.GetFaderValue(), 1);
  assertEquals(CjsSchema.getField(Tr2ScalarFader, "kickInLength"), null);
});

Deno.test("Tr2CurveSetRange defaults match Carbon", () => {
  const range = new Tr2CurveSetRange();

  assertEquals(range.name, "");
  assertEquals(range.startTime, 0);
  assertEquals(range.endTime, 1);
  assertEquals(range.looped, false);
});

function makeVectorCurve(value: Vec3, length: number) {
  return {
    Length() {
      return length;
    },
    Update(out: Vec3, _time: number) {
      out[0] = value[0];
      out[1] = value[1];
      out[2] = value[2];
      return out;
    },
    GetValueAt(out: Vec3, _time: number) {
      out[0] = value[0];
      out[1] = value[1];
      out[2] = value[2];
      return out;
    },
    GetValueDotAt(out: Vec3, _time: number) {
      return out;
    },
    GetValueDoubleDotAt(out: Vec3, _time: number) {
      return out;
    },
  };
}
