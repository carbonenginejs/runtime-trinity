// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotation.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotation.cpp
import { fromYawPitchRoll, quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type {
  ITriCurveLength,
  ITriQuaternionFunction,
  Quat,
  Vec3,
} from "./contracts.ts";
import { Tr2CurveInterpolation, Tr2CurveTangentType } from "./enums.ts";
import type {
  Tr2CurveExtrapolationValue,
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";
import { Tr2CurveScalar } from "./Tr2CurveScalar.ts";

@type.define({ className: "Tr2CurveEulerRotation", family: "curves" })
export class Tr2CurveEulerRotation extends CjsModel
  implements ITriCurveLength, ITriQuaternionFunction {
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  yaw: Tr2CurveScalar = new Tr2CurveScalar();

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  pitch: Tr2CurveScalar = new Tr2CurveScalar();

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  roll: Tr2CurveScalar = new Tr2CurveScalar();

  @io.read
  @type.quat
  currentValue: Quat = quat.create();

  /**
   * Updates the cached quaternion value by updating each scalar component curve.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    const yaw = this.yaw.Update(time),
      pitch = this.pitch.Update(time),
      roll = this.roll.Update(time);

    fromYawPitchRoll(this.currentValue, yaw, pitch, roll);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Quat): Quat {
    this.GetValueAt(time, this.currentValue);
    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Quat): Quat {
    return fromYawPitchRoll(
      out,
      this.yaw.GetValue(time),
      this.pitch.GetValue(time),
      this.roll.GetValue(time),
    );
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Quat): Quat {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Quat): Quat {
    return out;
  }

  /**
   * Gets the longest scalar component curve length.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return Math.max(this.yaw.Length(), this.pitch.Length(), this.roll.Length());
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Quat): Quat {
    return this.GetValueAt(time, out);
  }

  /**
   * Adds one Euler key by adding matching scalar keys to each component curve.
   */
  @carbon.method
  @impl.adapted
  AddKey(
    time: number,
    value: Vec3,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent?: Vec3,
    rightTangent?: Vec3,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void {
    const useRightTangent = !!leftTangent && !!rightTangent;
    this.yaw.AddKey(
      time,
      value[0],
      interpolation,
      leftTangent?.[0] ?? 0,
      useRightTangent ? rightTangent[0] : 0,
      tangentType,
    );
    this.pitch.AddKey(
      time,
      value[1],
      interpolation,
      leftTangent?.[1] ?? 0,
      useRightTangent ? rightTangent[1] : 0,
      tangentType,
    );
    this.roll.AddKey(
      time,
      value[2],
      interpolation,
      leftTangent?.[2] ?? 0,
      useRightTangent ? rightTangent[2] : 0,
      tangentType,
    );
  }

  /**
   * Sets extrapolation on all scalar component curves.
   */
  @carbon.method
  @impl.implemented
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void {
    this.yaw.SetExtrapolation(extrapolation);
    this.pitch.SetExtrapolation(extrapolation);
    this.roll.SetExtrapolation(extrapolation);
  }
}
