// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveConstant.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveConstant.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type {
  Color,
  ITriColorFunction,
  ITriQuaternionFunction,
  ITriScalarFunction,
  ITriVectorFunction,
  Quat,
  Vec3,
  Vec4,
} from "./contracts.ts";

@CjsSchema.type.define({ className: "Tr2CurveConstant" })
export class Tr2CurveConstant
  implements
    ITriScalarFunction,
    ITriVectorFunction,
    ITriQuaternionFunction,
    ITriColorFunction
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.vec4
  value: Vec4 = vec4.create();

  @CjsSchema.type.vec4
  currentValue: Vec4 = this.value;

  /**
   * Carbon no-op retained for function interface compatibility.
   */
  UpdateValue(_time: number): void
  {
  }

  /**
   * Evaluates the constant scalar value.
   */
  Update(time: number): number;
  /**
   * Copies the constant vector value into `out`.
   */
  Update(out: Vec3, time: number): Vec3;
  /**
   * Copies the constant quaternion value into `out`.
   */
  Update(out: Quat, time: number): Quat;
  /**
   * Copies the constant color value into `out`.
   */
  Update(out: Color, time: number): Color;
  Update(outOrTime: number | Vec3 | Quat | Color, _time?: number)
    : number | Vec3 | Quat | Color
  {
    if (typeof outOrTime === "number")
    {
      return this.value[0];
    }

    return copyValue(outOrTime, this.value);
  }

  /**
   * Gets the constant scalar value.
   */
  GetValueAt(time: number): number;
  /**
   * Copies the constant vector value into `out`.
   */
  GetValueAt(out: Vec3, time: number): Vec3;
  /**
   * Copies the constant quaternion value into `out`.
   */
  GetValueAt(out: Quat, time: number): Quat;
  /**
   * Copies the constant color value into `out`.
   */
  GetValueAt(out: Color, time: number): Color;
  GetValueAt(outOrTime: number | Vec3 | Quat | Color, _time?: number)
    : number | Vec3 | Quat | Color
  {
    if (typeof outOrTime === "number")
    {
      return this.value[0];
    }

    return copyValue(outOrTime, this.value);
  }

  /**
   * Carbon no-op retained for scalar function interface compatibility.
   */
  ScaleTime(_scale: number): void
  {
  }

  /**
   * Gets the first derivative vector or quaternion for the supplied time.
   */
  GetValueDotAt(out: Vec3, time: number): Vec3;
  /**
   * Gets the first derivative vector or quaternion for the supplied time.
   */
  GetValueDotAt(out: Quat, time: number): Quat;
  GetValueDotAt(out: Vec3 | Quat, _time: number): Vec3 | Quat
  {
    return setDerivative(out);
  }

  /**
   * Gets the second derivative vector or quaternion for the supplied time.
   */
  GetValueDoubleDotAt(out: Vec3, time: number): Vec3;
  /**
   * Gets the second derivative vector or quaternion for the supplied time.
   */
  GetValueDoubleDotAt(out: Quat, time: number): Quat;
  GetValueDoubleDotAt(out: Vec3 | Quat, _time: number): Vec3 | Quat
  {
    return setDerivative(out);
  }

  /**
   * Copies the constant vector value into `out`.
   */
  InterpolatedPosition(out: Vec3, _time: number): Vec3
  {
    out[0] = this.value[0];
    out[1] = this.value[1];
    out[2] = this.value[2];
    return out;
  }

}

/**
 * Copies the stored Vector4 value into vector-like outputs.
 */
function copyValue<T extends Vec3 | Vec4>(out: T, value: Vec4): T
{
  out[0] = value[0];
  out[1] = value[1];
  out[2] = value[2];

  if (out.length > 3)
  {
    out[3] = value[3];
  }

  return out;
}

/**
 * Sets the Carbon derivative default for vector and quaternion outputs.
 */
function setDerivative<T extends Vec3 | Quat>(out: T): T
{
  if (out.length > 3)
  {
    return quat.identity(out) as T;
  }

  return vec3.zero(out) as T;
}
