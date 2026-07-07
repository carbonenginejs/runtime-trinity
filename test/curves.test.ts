import {
  Tr2CurveCombiner,
  Tr2CurveColor,
  Tr2CurveColorMixer,
  Tr2CurveConstant,
  Tr2CurveEulerRotation,
  Tr2CurveExtrapolation,
  Tr2CurveInterpolation,
  Tr2CurveQuaternion,
  Tr2CurveQuaternionKey,
  Tr2CurveScalar,
  Tr2CurveScalarKey,
  Tr2CurveSetRange,
  Tr2CurveVector2,
  Tr2CurveVector3,
  Tr2ScalarFader,
  type Color,
  type Quat,
  type Vec2,
  type Vec3,
} from "../src/index.ts";
import { quat } from "@carbonenginejs/core-math/quat";
import { num } from "@carbonenginejs/core-math/num";
import { vec2 } from "@carbonenginejs/core-math/vec2";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsSchema } from "@carbonenginejs/core-types/schema";

function assert(
  condition: unknown,
  message = "assertion failed",
): asserts condition
{
  if (!condition)
  {
    throw new Error(message);
  }
}

function assertEquals<T>(actual: T, expected: T, message?: string): void
{
  if (actual !== expected)
  {
    throw new Error(
      message || `expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

function assertAlmostEquals(
  actual: number,
  expected: number,
  epsilon = 1e-6,
): void
{
  if (Math.abs(actual - expected) > epsilon)
  {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

Deno.test("Tr2CurveScalarKey defaults match Carbon", () =>
{
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

Deno.test("Tr2CurveQuaternionKey defaults match Carbon", () =>
{
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

Deno.test("Tr2CurveQuaternion evaluates constant, slerp, and cycle wrapping", () =>
{
  const curve = new Tr2CurveQuaternion();
  const identity: Quat = quat.create();
  const halfTurn: Quat = quat.fromValues(0, 0, 1, 0);

  curve.AddKey(0, identity, Tr2CurveInterpolation.LINEAR);
  curve.AddKey(2, halfTurn, Tr2CurveInterpolation.LINEAR);

  const middle = curve.GetValue(1);
  assertAlmostEquals(middle[0], 0);
  assertAlmostEquals(middle[1], 0);
  assertAlmostEquals(middle[2], Math.SQRT1_2);
  assertAlmostEquals(middle[3], Math.SQRT1_2);

  curve.keys[0].interpolation = Tr2CurveInterpolation.CONSTANT;
  const constant = curve.GetValue(1);
  assertAlmostEquals(constant[2], 0);
  assertAlmostEquals(constant[3], 1);

  curve.keys[0].interpolation = Tr2CurveInterpolation.LINEAR;
  curve.SetExtrapolation(Tr2CurveExtrapolation.CYCLE);
  const cycled = curve.GetValue(3);
  assertAlmostEquals(cycled[2], Math.SQRT1_2);
  assertAlmostEquals(cycled[3], Math.SQRT1_2);

  const out: Quat = quat.create();
  curve.Update(out, 1);
  assertAlmostEquals(out[2], Math.SQRT1_2);
  assertAlmostEquals(curve.currentValue[2], Math.SQRT1_2);
  assertEquals(CjsSchema.getField(Tr2CurveQuaternion, "keys")?.type.kind, "array");
  assertEquals(
    CjsSchema.getField(Tr2CurveQuaternion, "currentValue")?.type.kind,
    "quat",
  );
});

Deno.test("Tr2CurveScalar evaluates linear, clamp, and linear extrapolation", () =>
{
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
  assertEquals(CjsSchema.getField(Tr2CurveScalar, "keys")?.type.kind, "array");
});

Deno.test("Tr2CurveScalar keeps stable sorted keys and computes hermite", () =>
{
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

Deno.test("Tr2CurveVector2 composes scalar component curves", () =>
{
  const curve = new Tr2CurveVector2();
  curve.AddKey(0, vec2.fromValues(1, 2), Tr2CurveInterpolation.LINEAR);
  curve.AddKey(2, vec2.fromValues(5, 6), Tr2CurveInterpolation.LINEAR);

  const value = curve.GetValue(1);
  assertAlmostEquals(value[0], 3);
  assertAlmostEquals(value[1], 4);
  assertEquals(curve.Length(), 2);

  const out: Vec2 = vec2.create();
  curve.GetValueAt(out, 1);
  assertAlmostEquals(out[0], 3);
  assertAlmostEquals(out[1], 4);
  assertEquals(CjsSchema.getField(Tr2CurveVector2, "x")?.type.kind, "objectRef");
  assertEquals(
    CjsSchema.getField(Tr2CurveVector2, "currentValue")?.type.kind,
    "vec2",
  );
});

Deno.test("Tr2CurveVector3 composes scalar component curves", () =>
{
  const curve = new Tr2CurveVector3();
  curve.AddKey(0, vec3.fromValues(1, 2, 3), Tr2CurveInterpolation.LINEAR);
  curve.AddKey(2, vec3.fromValues(5, 6, 7), Tr2CurveInterpolation.LINEAR);

  const value = curve.GetValue(1);
  assertAlmostEquals(value[0], 3);
  assertAlmostEquals(value[1], 4);
  assertAlmostEquals(value[2], 5);
  assertEquals(curve.Length(), 2);

  const out: Vec3 = vec3.create();
  curve.Update(out, 1);
  assertAlmostEquals(out[0], 3);
  assertAlmostEquals(curve.currentValue[2], 5);
  assertEquals(CjsSchema.getField(Tr2CurveVector3, "x")?.type.kind, "objectRef");
  assertEquals(
    CjsSchema.getField(Tr2CurveVector3, "currentValue")?.type.kind,
    "vec3",
  );
});

Deno.test("Tr2CurveColor composes scalar component curves and gamma output", () =>
{
  const curve = new Tr2CurveColor();
  curve.AddKey(0, vec4.fromValues(0.25, 0.5, 0.75, 1), Tr2CurveInterpolation.LINEAR);
  curve.AddKey(2, vec4.fromValues(0.5, 1, 0.25, 0.5), Tr2CurveInterpolation.LINEAR);

  const value = curve.GetValue(1);
  assertAlmostEquals(value[0], 0.375);
  assertAlmostEquals(value[1], 0.75);
  assertAlmostEquals(value[2], 0.5);
  assertAlmostEquals(value[3], 0.75);
  assertEquals(curve.Length(), 2);

  curve.srgbOutput = true;
  const gamma = curve.GetValue(1);
  assertAlmostEquals(gamma[0], Math.pow(0.375, 0.454545));
  assertAlmostEquals(gamma[3], 0.75);

  const noAlpha = new Tr2CurveColor();
  noAlpha.r.AddKey(0, 0.2, Tr2CurveInterpolation.LINEAR);
  const noAlphaValue = noAlpha.GetValue(0);
  assertAlmostEquals(noAlphaValue[3], 1);

  const out: Color = vec4.create();
  curve.Update(out, 1);
  assertAlmostEquals(out[3], 0.75);
  assertEquals(CjsSchema.getField(Tr2CurveColor, "r")?.type.kind, "objectRef");
  assertEquals(CjsSchema.getField(Tr2CurveColor, "currentValue")?.type.kind, "color");
});

Deno.test("Tr2CurveEulerRotation composes scalar curves with Carbon rotation order", () =>
{
  const curve = new Tr2CurveEulerRotation();
  curve.AddKey(0, vec3.fromValues(0.5, 0.6, 0.7), Tr2CurveInterpolation.LINEAR);
  curve.AddKey(2, vec3.fromValues(0, 0, 0), Tr2CurveInterpolation.LINEAR);

  const value = curve.GetValue(0);
  assertAlmostEquals(value[0], 0.350018859);
  assertAlmostEquals(value[1], 0.123841502);
  assertAlmostEquals(value[2], 0.248718783);
  assertAlmostEquals(value[3], 0.894588768);
  assertEquals(curve.Length(), 2);

  const out: Quat = quat.create();
  curve.Update(out, 0);
  assertAlmostEquals(out[0], 0.350018859);
  assertAlmostEquals(curve.currentValue[3], 0.894588768);
  assertEquals(CjsSchema.getField(Tr2CurveEulerRotation, "yaw")?.type.kind, "objectRef");
  assertEquals(
    CjsSchema.getField(Tr2CurveEulerRotation, "currentValue")?.type.kind,
    "quat",
  );
});

Deno.test("Tr2CurveConstant serves scalar, vector, quaternion, and color functions", () =>
{
  const curve = new Tr2CurveConstant();
  vec4.set(curve.value, 1, 2, 3, 4);

  assertEquals(curve.Update(0), 1);
  assertEquals(curve.GetValueAt(3), 1);

  const vectorOut: Vec3 = vec3.create();
  curve.Update(vectorOut, 5);
  assertEquals(vectorOut[0], 1);
  assertEquals(vectorOut[1], 2);
  assertEquals(vectorOut[2], 3);

  const quatOut: Quat = quat.create();
  curve.GetValueAt(quatOut, 5);
  assertEquals(quatOut[3], 4);
  curve.GetValueDotAt(quatOut, 5);
  assertEquals(quatOut[3], 1);

  const colorOut: Color = vec4.create();
  curve.GetValueAt(colorOut, 5);
  assertEquals(colorOut[3], 4);

  const derivativeOut: Vec3 = vec3.fromValues(1, 1, 1);
  curve.GetValueDoubleDotAt(derivativeOut, 5);
  assertEquals(derivativeOut[0], 0);
  assertEquals(CjsSchema.getField(Tr2CurveConstant, "value")?.type.kind, "vec4");
  assertEquals(
    CjsSchema.getField(Tr2CurveConstant, "currentValue")?.type.kind,
    "vec4",
  );
});

Deno.test("Tr2CurveColorMixer blends, saturates, brightens, and converts color", () =>
{
  const curve = new Tr2CurveColorMixer();
  vec4.copy(curve.color1, vec4.fromValues(1, 0, 0, 1));
  vec4.copy(curve.color2, vec4.fromValues(0, 0, 1, 0.5));
  curve.lerpValue = 0.5;
  curve.saturation = 0;
  curve.brightness = 2;

  const value = curve.GetValue(10);
  const intensity = 0.5 * 0.299 + 0 * 0.587 + 0.5 * 0.114;
  assertAlmostEquals(value[0], intensity * 2);
  assertAlmostEquals(value[1], intensity * 2);
  assertAlmostEquals(value[2], intensity * 2);
  assertAlmostEquals(value[3], intensity * 2);
  assertEquals(curve.Length(), 0);

  const out: Color = vec4.create();
  curve.Update(out, 10);
  assertAlmostEquals(curve.currentValue[0], intensity * 2);

  curve.UpdateValue(10);
  assertAlmostEquals(
    curve.convertedLinearValue[0],
    num.linearFromSRGB(intensity * 2),
  );
  assertAlmostEquals(curve.convertedLinearValue[3], 1);
  assertEquals(CjsSchema.getField(Tr2CurveColorMixer, "color1")?.type.kind, "color");
  assertEquals(
    CjsSchema.getField(Tr2CurveColorMixer, "convertedLinearValue")?.type.kind,
    "color",
  );
});

Deno.test("Tr2CurveCombiner sums vector functions and reports max length", () =>
{
  const combiner = new Tr2CurveCombiner();
  combiner.curves = [
    makeVectorCurve(vec3.fromValues(1, 2, 3), 2),
    makeVectorCurve(vec3.fromValues(4, 5, 6), 9),
  ];

  const out: Vec3 = vec3.create();
  combiner.Update(out, 1);

  assertEquals(out[0], 5);
  assertEquals(out[1], 7);
  assertEquals(out[2], 9);
  assertEquals(combiner.Length(), 9);
  assertEquals(
    CjsSchema.getField(Tr2CurveCombiner, "currentValue")?.type.kind,
    "vec3",
  );
});

Deno.test("Tr2ScalarFader matches fade and kick-in behavior", () =>
{
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

Deno.test("Tr2CurveSetRange defaults match Carbon", () =>
{
  const range = new Tr2CurveSetRange();

  assertEquals(range.name, "");
  assertEquals(range.startTime, 0);
  assertEquals(range.endTime, 1);
  assertEquals(range.looped, false);
  assertEquals(
    CjsSchema.getField(Tr2CurveSetRange, "looped")?.type.kind,
    "boolean",
  );
});

function makeVectorCurve(value: Vec3, length: number)
{
  return {
    Length()
    {
      return length;
    },
    Update(out: Vec3, _time: number)
    {
      out[0] = value[0];
      out[1] = value[1];
      out[2] = value[2];
      return out;
    },
    GetValueAt(out: Vec3, _time: number)
    {
      out[0] = value[0];
      out[1] = value[1];
      out[2] = value[2];
      return out;
    },
    GetValueDotAt(out: Vec3, _time: number)
    {
      return out;
    },
    GetValueDoubleDotAt(out: Vec3, _time: number)
    {
      return out;
    },
  };
}
