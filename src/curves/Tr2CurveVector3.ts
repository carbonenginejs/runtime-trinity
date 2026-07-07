// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, ITriVectorFunction, Vec3 } from "./contracts.ts";
import {
  Tr2CurveInterpolation,
  Tr2CurveTangentType,
} from "./enums.ts";
import type {
  Tr2CurveExtrapolationValue,
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";
import { Tr2CurveScalar } from "./Tr2CurveScalar.ts";

@CjsSchema.type.define({ className: "Tr2CurveVector3" })
export class Tr2CurveVector3 implements ITriCurveLength, ITriVectorFunction
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  x: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  y: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  z: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.vec3
  currentValue: Vec3 = vec3.create();

  /**
   * Updates the cached vector value by updating each scalar component curve.
   */
  UpdateValue(time: number): void
  {
    this.currentValue[0] = this.x.Update(time);
    this.currentValue[1] = this.y.Update(time);
    this.currentValue[2] = this.z.Update(time);
  }

  /**
   * Gets the longest scalar component curve length.
   */
  Length(): number
  {
    return Math.max(this.x.Length(), this.y.Length(), this.z.Length());
  }

  /**
   * Gets a new vector containing the value at the supplied time.
   */
  GetValue(time: number): Vec3
  {
    const out: Vec3 = vec3.create();
    return this.GetValueAt(out, time);
  }

  /**
   * Adds one vector key by adding matching scalar keys to each component curve.
   */
  AddKey(
    time: number,
    value: Vec3,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent?: Vec3,
    rightTangent?: Vec3,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void
  {
    const lt = leftTangent ?? vec3.create();
    const rt = rightTangent ?? vec3.create();

    this.x.AddKey(time, value[0], interpolation, lt[0], rt[0], tangentType);
    this.y.AddKey(time, value[1], interpolation, lt[1], rt[1], tangentType);
    this.z.AddKey(time, value[2], interpolation, lt[2], rt[2], tangentType);
  }

  /**
   * Sets extrapolation on all scalar component curves.
   */
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void
  {
    this.x.SetExtrapolation(extrapolation);
    this.y.SetExtrapolation(extrapolation);
    this.z.SetExtrapolation(extrapolation);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  Update(out: Vec3, time: number): Vec3
  {
    this.currentValue = this.GetValue(time);
    return vec3.copy(out, this.currentValue);
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  GetValueAt(out: Vec3, time: number): Vec3
  {
    out[0] = this.x.GetValue(time);
    out[1] = this.y.GetValue(time);
    out[2] = this.z.GetValue(time);
    return out;
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  GetValueDotAt(out: Vec3, _time: number): Vec3
  {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  GetValueDoubleDotAt(out: Vec3, _time: number): Vec3
  {
    return out;
  }

  /**
   * Position interpolation stub retained for Carbon interface compatibility.
   */
  InterpolatedPosition(out: Vec3, _time: number): Vec3
  {
    return out;
  }

}
