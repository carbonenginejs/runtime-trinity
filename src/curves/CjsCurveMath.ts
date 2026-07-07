// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.cpp
import { num } from "@carbonenginejs/core-math/num";
import { Tr2CurveExtrapolation, Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveScalarKey } from "./Tr2CurveScalarKey.ts";

/**
 * Computes Carbon's blended automatic scalar tangent for a middle key.
 */
export function GetAutoTangent(
  prevTime: number,
  prevValue: number,
  time: number,
  value: number,
  nextTime: number,
  nextValue: number,
): number
{
  let left = 0;
  if (time - prevTime > num.EPSILON)
  {
    left = (value - prevValue) / (time - prevTime);
  }

  let right = 0;
  if (nextTime - time > num.EPSILON)
  {
    right = (nextValue - value) / (nextTime - time);
  }

  const x = (time - prevTime) / (nextTime - prevTime);
  return left * (1 - x) + right * x;
}

/**
 * Computes Carbon's slope-limited automatic tangent for local extrema.
 */
export function GetAutoClampedTangent(
  prevTime: number,
  prevValue: number,
  _time: number,
  value: number,
  nextTime: number,
  nextValue: number,
): number
{
  if (
    (value < prevValue && value < nextValue) ||
    (value > prevValue && value > nextValue)
  )
  {
    return 0;
  }

  const valueDiff = Math.abs(prevValue - nextValue);
  if (valueDiff === 0)
  {
    return 0;
  }

  let keyDistance = Math.abs(value - prevValue) / valueDiff;
  keyDistance = num.min(1, num.min(keyDistance, 1 - keyDistance) * 6);

  const autoTangent = (nextValue - prevValue) / (nextTime - prevTime);
  return autoTangent * keyDistance;
}

/**
 * Evaluates the scalar value inside a key segment using the segment interpolation mode.
 */
export function GetScalarSegmentValue(
  time: number,
  k0: Tr2CurveScalarKey,
  k1: Tr2CurveScalarKey,
): number
{
  switch (k0.interpolation)
  {
    case Tr2CurveInterpolation.CONSTANT:
      return time === k1.time ? k1.value : k0.value;

    case Tr2CurveInterpolation.LINEAR:
      if (k1.time === k0.time)
      {
        return k1.value;
      }
      return k0.value + (k1.value - k0.value) * (time - k0.time) /
          (k1.time - k0.time);

    case Tr2CurveInterpolation.HERMITE:
    {
      const length = k1.time - k0.time;
      if (length === 0)
      {
        return k1.value;
      }

      const inTangent = k0.rightTangent * length;
      const outTangent = k1.leftTangent * length;
      const s = (time - k0.time) / length;
      const s2 = s * s;
      const s3 = s2 * s;

      const c2 = -2 * s3 + 3 * s2;
      const c1 = 1 - c2;
      const c4 = s3 - s2;
      const c3 = s + c4 - s2;

      return k0.value * c1 + k1.value * c2 + inTangent * c3 +
        outTangent * c4;
    }

    default:
      return 0;
  }
}

/**
 * Evaluates the scalar derivative inside a key segment using the segment interpolation mode.
 */
export function GetScalarSegmentTangent(
  time: number,
  k0: Tr2CurveScalarKey,
  k1: Tr2CurveScalarKey,
): number
{
  switch (k0.interpolation)
  {
    case Tr2CurveInterpolation.CONSTANT:
      return 0;

    case Tr2CurveInterpolation.LINEAR:
      return (k1.value - k0.value) / (k1.time - k0.time);

    case Tr2CurveInterpolation.HERMITE:
    {
      const length = k1.time - k0.time;
      if (length === 0)
      {
        return k1.rightTangent;
      }

      const inTangent = k0.rightTangent * length;
      const outTangent = k1.leftTangent * length;
      const s = (time - k0.time) / length;
      const s2 = s * s;
      const m2s = 2 * s;

      const c1 = 6 * s2 - 6 * s;
      const c2 = -c1;
      const c4 = 3 * s2 - m2s;
      const c3 = c4 - m2s + 1;

      return (k0.value * c1 + k1.value * c2 + inTangent * c3 +
        outTangent * c4) / length;
    }

    default:
      return 0;
  }
}

/**
 * Maps scaled time into the authored key range using Carbon extrapolation rules.
 */
export function GetWrappedLocalTime(
  scaledTime: number,
  first: number,
  last: number,
  extrapolationBefore: number,
  extrapolationAfter: number,
): number
{
  const length = last - first;
  if (length === 0)
  {
    return first;
  }

  if (scaledTime < first)
  {
    const quotient = -(scaledTime - first) / length;
    const intPart = num.roundToZero(quotient);
    let fracPart = quotient - intPart;

    if (extrapolationBefore === Tr2CurveExtrapolation.CYCLE)
    {
      fracPart = 1 - fracPart;
    }
    else if (intPart % 2 !== 0)
    {
      fracPart = 1 - fracPart;
    }

    return fracPart * length + first;
  }

  if (scaledTime <= last)
  {
    return scaledTime;
  }

  const quotient = (scaledTime - first) / length;
  const intPart = num.roundToZero(quotient);
  let fracPart = quotient - intPart;

  if (
    extrapolationAfter === Tr2CurveExtrapolation.MIRROR &&
    intPart % 2 !== 0
  )
  {
    fracPart = 1 - fracPart;
  }

  return fracPart * length + first;
}
