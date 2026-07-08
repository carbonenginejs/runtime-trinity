// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.h

import type { Color, Quat, Vec2, Vec3, Vec4 } from "@carbonenginejs/core-math/types";
import type { Tr2FollowCurveKeyInterpolationValue } from "./enums.ts";

export type { Color, Quat, Vec2, Vec3, Vec4 };

export interface ITriCurveLength
{
  /**
   * Gets the authored duration for this curve-like object.
   */
  Length(): number;
}

export interface ITriFunction
{
  /**
   * Evaluates and caches the current value for the supplied time.
   */
  UpdateValue(time: number): void;

  /**
   * Resets any per-play cursor state before a curve set starts.
   */
  Reset?(): void;
}

export interface ICurveSetDriver
{
  /**
   * Gets the driver-provided curve-set time.
   */
  GetCurveSetTime(time: number): number;
}

export interface ITr2ValueBinding
{
  /**
   * Copies the source curve value into the binding target.
   */
  CopyValue(): void;
}

export interface IBlueEventListener
{
  /**
   * Handles a named event emitted by a Carbon event curve.
   */
  HandleEvent(value: string): void;
}

export interface ITriScalarFunction
{
  /**
   * Evaluates and caches the scalar value for the supplied time.
   */
  Update(time: number): number;

  /**
   * Gets the scalar value at the supplied time without requiring a cache read.
   */
  GetValueAt(time: number): number;
}

export interface ITriVectorFunction
{
  /**
   * Evaluates the vector value for the supplied time into `out`.
   */
  Update(time: number, out: Vec3): Vec3;

  /**
   * Gets the vector value at the supplied time into `out`.
   */
  GetValueAt(time: number, out: Vec3): Vec3;

  /**
   * Gets the first derivative vector at the supplied time into `out`.
   */
  GetValueDotAt(time: number, out: Vec3): Vec3;

  /**
   * Gets the second derivative vector at the supplied time into `out`.
   */
  GetValueDoubleDotAt(time: number, out: Vec3): Vec3;
}

export interface ITr2FollowCurveKey
{
  /**
   * Gets the key value into `out`.
   */
  GetValue(out: Vec3): Vec3;

  /**
   * Gets the key time.
   */
  GetTime(): number;

  /**
   * Gets the segment interpolation mode starting at this key.
   */
  GetInterpolationType(): Tr2FollowCurveKeyInterpolationValue;

  /**
   * Gets the key's left tangent into `out`.
   */
  GetLeftTangent(out: Vec3): Vec3;

  /**
   * Gets the key's right tangent into `out`.
   */
  GetRightTangent(out: Vec3): Vec3;
}

export interface ITr2Locator
{
  position: Vec3;
  direction: Quat;
}

export interface ITr2LocatorSet
{
  name: string;
  locators: readonly ITr2Locator[];
}

export interface ITr2ObjectFollowTarget
{
  GetWorldPosition?(): Vec3;
  GetWorldRotation?(): Quat;
  GetLocatorsForSet?(name: string): readonly ITr2Locator[] | null | undefined;
  worldPosition?: Vec3;
  worldRotation?: Quat;
  locatorSets?: readonly ITr2LocatorSet[];
}

export interface ITriQuaternionFunction
{
  /**
   * Evaluates the quaternion value for the supplied time into `out`.
   */
  Update(time: number, out: Quat): Quat;

  /**
   * Gets the quaternion value at the supplied time into `out`.
   */
  GetValueAt(time: number, out: Quat): Quat;

  /**
   * Gets the first derivative quaternion at the supplied time into `out`.
   */
  GetValueDotAt(time: number, out: Quat): Quat;

  /**
   * Gets the second derivative quaternion at the supplied time into `out`.
   */
  GetValueDoubleDotAt(time: number, out: Quat): Quat;
}

export interface ITriColorFunction
{
  /**
   * Evaluates the color value for the supplied time into `out`.
   */
  Update(time: number, out: Color): Color;

  /**
   * Gets the color value at the supplied time into `out`.
   */
  GetValueAt(time: number, out: Color): Color;
}
