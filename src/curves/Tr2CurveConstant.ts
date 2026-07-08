// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveConstant.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveConstant.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { copyArrayLike } from "@carbonenginejs/core-math/utils";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
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

@type.define({ className: "Tr2CurveConstant", family: "curves" })
export class Tr2CurveConstant extends CjsModel
  implements
    ITriScalarFunction,
    ITriVectorFunction,
    ITriQuaternionFunction,
    ITriColorFunction {
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.vec4
  value: Vec4 = vec4.create();

  @io.read
  @type.vec4
  currentValue: Vec4 = this.value;

  /**
   * Carbon no-op retained for function interface compatibility.
   */
  @carbon.method
  @impl.noop
  UpdateValue(_time: number): void {
  }

  /**
   * Evaluates the constant scalar value.
   */
  Update(time: number): number;
  /**
   * Copies the constant vector value into `out`.
   */
  Update(time: number, out: Vec3): Vec3;
  /**
   * Copies the constant quaternion value into `out`.
   */
  Update(time: number, out: Quat): Quat;
  /**
   * Copies the constant color value into `out`.
   */
  Update(time: number, out: Color): Color;
  @carbon.method
  @impl.adapted
  Update(
    time: number,
    out?: Vec3 | Quat | Color,
  ): number | Vec3 | Quat | Color {
    if (out === undefined) {
      return this.value[0];
    }

    void time;
    return copyValue(out, this.value);
  }

  /**
   * Gets the constant scalar value.
   */
  GetValueAt(time: number): number;
  /**
   * Copies the constant vector value into `out`.
   */
  GetValueAt(time: number, out: Vec3): Vec3;
  /**
   * Copies the constant quaternion value into `out`.
   */
  GetValueAt(time: number, out: Quat): Quat;
  /**
   * Copies the constant color value into `out`.
   */
  GetValueAt(time: number, out: Color): Color;
  @carbon.method
  @impl.adapted
  GetValueAt(
    time: number,
    out?: Vec3 | Quat | Color,
  ): number | Vec3 | Quat | Color {
    if (out === undefined) {
      return this.value[0];
    }

    void time;
    return copyValue(out, this.value);
  }

  /**
   * Carbon no-op retained for scalar function interface compatibility.
   */
  @carbon.method
  @impl.noop
  ScaleTime(_scale: number): void {
  }

  /**
   * Gets the first derivative vector or quaternion for the supplied time.
   */
  GetValueDotAt(time: number, out: Vec3): Vec3;
  /**
   * Gets the first derivative vector or quaternion for the supplied time.
   */
  GetValueDotAt(time: number, out: Quat): Quat;
  @carbon.method
  @impl.implemented
  GetValueDotAt(_time: number, out: Vec3 | Quat): Vec3 | Quat {
    return setDerivative(out);
  }

  /**
   * Gets the second derivative vector or quaternion for the supplied time.
   */
  GetValueDoubleDotAt(time: number, out: Vec3): Vec3;
  /**
   * Gets the second derivative vector or quaternion for the supplied time.
   */
  GetValueDoubleDotAt(time: number, out: Quat): Quat;
  @carbon.method
  @impl.implemented
  GetValueDoubleDotAt(_time: number, out: Vec3 | Quat): Vec3 | Quat {
    return setDerivative(out);
  }

  /**
   * Copies the constant vector value into `out`.
   */
  @carbon.method
  @impl.adapted
  InterpolatedPosition(_time: number, out: Vec3): Vec3 {
    return vec3.copy(out, this.value);
  }
}

/**
 * Copies the stored Vector4 value into vector-like outputs.
 */
function copyValue<T extends Vec3 | Vec4>(out: T, value: Vec4): T {
  return copyArrayLike(out, value) as T;
}

/**
 * Sets the Carbon derivative default for vector and quaternion outputs.
 */
function setDerivative<T extends Vec3 | Quat>(out: T): T {
  if (out.length > 3) {
    return quat.identity(out) as T;
  }

  return vec3.zero(out) as T;
}
