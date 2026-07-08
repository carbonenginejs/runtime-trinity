// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, ITriVectorFunction, Vec3 } from "./contracts.ts";
import { Tr2CurveInterpolation, Tr2CurveTangentType } from "./enums.ts";
import type {
  Tr2CurveExtrapolationValue,
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";
import { Tr2CurveScalar } from "./Tr2CurveScalar.ts";

@type.define({ className: "Tr2CurveVector3", family: "curves" })
export class Tr2CurveVector3 extends CjsModel
  implements ITriCurveLength, ITriVectorFunction {
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  x: Tr2CurveScalar = new Tr2CurveScalar();

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  y: Tr2CurveScalar = new Tr2CurveScalar();

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  z: Tr2CurveScalar = new Tr2CurveScalar();

  @io.read
  @type.vec3
  currentValue: Vec3 = vec3.create();

  /**
   * Updates the cached vector value by updating each scalar component curve.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.currentValue[0] = this.x.Update(time);
    this.currentValue[1] = this.y.Update(time);
    this.currentValue[2] = this.z.Update(time);
  }

  /**
   * Gets the longest scalar component curve length.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return Math.max(this.x.Length(), this.y.Length(), this.z.Length());
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Vec3): Vec3 {
    return this.GetValueAt(time, out);
  }

  /**
   * Adds one vector key by adding matching scalar keys to each component curve.
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
    this.x.AddKey(
      time,
      value[0],
      interpolation,
      leftTangent?.[0] ?? 0,
      useRightTangent ? rightTangent[0] : 0,
      tangentType,
    );
    this.y.AddKey(
      time,
      value[1],
      interpolation,
      leftTangent?.[1] ?? 0,
      useRightTangent ? rightTangent[1] : 0,
      tangentType,
    );
    this.z.AddKey(
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
    this.x.SetExtrapolation(extrapolation);
    this.y.SetExtrapolation(extrapolation);
    this.z.SetExtrapolation(extrapolation);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Vec3): Vec3 {
    this.GetValueAt(time, this.currentValue);
    return vec3.copy(out, this.currentValue);
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Vec3): Vec3 {
    out[0] = this.x.GetValue(time);
    out[1] = this.y.GetValue(time);
    out[2] = this.z.GetValue(time);
    return out;
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Vec3): Vec3 {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Vec3): Vec3 {
    return out;
  }

  /**
   * Position interpolation stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  InterpolatedPosition(_time: number, out: Vec3): Vec3 {
    return out;
  }
}
