// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotation.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotation.cpp
import { fromYawPitchRoll, quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type {
  ITriCurveLength,
  ITriQuaternionFunction,
  Quat,
  Vec3,
} from "./contracts.ts";
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

@CjsSchema.type.define({ className: "Tr2CurveEulerRotation" })
export class Tr2CurveEulerRotation
  implements ITriCurveLength, ITriQuaternionFunction
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  yaw: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  pitch: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  roll: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.quat
  currentValue: Quat = quat.create();

  /**
   * Updates the cached quaternion value by updating each scalar component curve.
   */
  UpdateValue(time: number): void
  {
    const
      yaw = this.yaw.Update(time),
      pitch = this.pitch.Update(time),
      roll = this.roll.Update(time);

    fromYawPitchRoll(this.currentValue, yaw, pitch, roll);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  Update(out: Quat, time: number): Quat
  {
    this.currentValue = this.GetValue(time);
    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  GetValueAt(out: Quat, time: number): Quat
  {
    return quat.copy(out, this.GetValue(time));
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  GetValueDotAt(out: Quat, _time: number): Quat
  {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  GetValueDoubleDotAt(out: Quat, _time: number): Quat
  {
    return out;
  }

  /**
   * Gets the longest scalar component curve length.
   */
  Length(): number
  {
    return Math.max(this.yaw.Length(), this.pitch.Length(), this.roll.Length());
  }

  /**
   * Gets a new quaternion containing the value at the supplied time.
   */
  GetValue(time: number): Quat
  {
    return fromYawPitchRoll(
      quat.create(),
      this.yaw.GetValue(time),
      this.pitch.GetValue(time),
      this.roll.GetValue(time),
    );
  }

  /**
   * Adds one Euler key by adding matching scalar keys to each component curve.
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

    this.yaw.AddKey(time, value[0], interpolation, lt[0], rt[0], tangentType);
    this.pitch.AddKey(time, value[1], interpolation, lt[1], rt[1], tangentType);
    this.roll.AddKey(time, value[2], interpolation, lt[2], rt[2], tangentType);
  }

  /**
   * Sets extrapolation on all scalar component curves.
   */
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void
  {
    this.yaw.SetExtrapolation(extrapolation);
    this.pitch.SetExtrapolation(extrapolation);
    this.roll.SetExtrapolation(extrapolation);
  }

}
