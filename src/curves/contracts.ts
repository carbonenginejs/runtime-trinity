// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.h

export type Vec2 = Float32Array;
export type Vec3 = Float32Array;
export type Vec4 = Float32Array;
export type Quat = Float32Array;
export type Color = Vec4;

export interface ITriCurveLength
{
  /**
   * Gets the authored duration for this curve-like object.
   */
  Length(): number;
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
  Update(out: Vec3, time: number): Vec3;

  /**
   * Gets the vector value at the supplied time into `out`.
   */
  GetValueAt(out: Vec3, time: number): Vec3;

  /**
   * Gets the first derivative vector at the supplied time into `out`.
   */
  GetValueDotAt(out: Vec3, time: number): Vec3;

  /**
   * Gets the second derivative vector at the supplied time into `out`.
   */
  GetValueDoubleDotAt(out: Vec3, time: number): Vec3;
}

export interface ITriQuaternionFunction
{
  /**
   * Evaluates the quaternion value for the supplied time into `out`.
   */
  Update(out: Quat, time: number): Quat;

  /**
   * Gets the quaternion value at the supplied time into `out`.
   */
  GetValueAt(out: Quat, time: number): Quat;

  /**
   * Gets the first derivative quaternion at the supplied time into `out`.
   */
  GetValueDotAt(out: Quat, time: number): Quat;

  /**
   * Gets the second derivative quaternion at the supplied time into `out`.
   */
  GetValueDoubleDotAt(out: Quat, time: number): Quat;
}

export interface ITriColorFunction
{
  /**
   * Evaluates the color value for the supplied time into `out`.
   */
  Update(out: Color, time: number): Color;

  /**
   * Gets the color value at the supplied time into `out`.
   */
  GetValueAt(out: Color, time: number): Color;
}
