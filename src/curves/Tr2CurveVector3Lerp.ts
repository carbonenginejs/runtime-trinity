// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3Lerp.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3Lerp.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import type { ITriVectorFunction, Vec3 } from "./contracts.ts";
import { Tr2CurveVector3LerpKeyInterpolation } from "./enums.ts";
import type { Tr2CurveVector3LerpKeyInterpolationValue } from "./enums.ts";

@type.define({ className: "Tr2CurveVector3Lerp", family: "curves" })
export class Tr2CurveVector3Lerp extends CjsModel
  implements ITriVectorFunction {
  @io.persist
  @type.string
  name = "";

  @io.readwrite
  @type.vec3
  initialValue: Vec3 = vec3.create();

  @io.read
  @type.vec3
  currentValue: Vec3 = vec3.create();

  @io.persist
  @type.float32
  curveStartTime = 1;

  @io.readwrite
  @type.uint32
  @schema.enum("Tr2CurveVector3LerpKeyInterpolation")
  startInterpolation: Tr2CurveVector3LerpKeyInterpolationValue =
    Tr2CurveVector3LerpKeyInterpolation.HERMITE;

  @io.persist
  @type.objectRef("ITriVectorFunction")
  curve: ITriVectorFunction | null = null;

  #curveStartValue: Vec3 = vec3.create();
  #zeroTangent: Vec3 = vec3.create();

  /**
   * Updates the cached vector value for the supplied time.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.GetValueAt(time, this.currentValue);
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
    if (!this.curve) {
      return vec3.copy(out, this.initialValue);
    }

    if (time < this.curveStartTime && this.curveStartTime > 0) {
      return this.LerpToFirstKey(out, time);
    }

    return this.curve.GetValueAt(time - this.curveStartTime, out);
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

  /**
   * Blends from the authored initial value to the child curve's first value.
   */
  LerpToFirstKey(out: Vec3, time: number): Vec3 {
    if (!this.curve) {
      return vec3.copy(out, this.initialValue);
    }

    this.curve.GetValueAt(0, this.#curveStartValue);

    if (this.curveStartTime <= 0) {
      return vec3.copy(out, this.#curveStartValue);
    }

    const ratio = time / this.curveStartTime;

    if (
      this.startInterpolation ===
        Tr2CurveVector3LerpKeyInterpolation.LINEAR
    ) {
      return vec3.lerp(
        out,
        this.initialValue,
        this.#curveStartValue,
        ratio,
      );
    }

    return vec3.hermite(
      out,
      this.initialValue,
      this.#zeroTangent,
      this.#zeroTangent,
      this.#curveStartValue,
      ratio,
    );
  }
}
