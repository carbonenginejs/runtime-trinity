// Source: E:\carbonengine\trinity\trinity\Curves\Tr2QuaternionLerpCurve.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2QuaternionLerpCurve.cpp
import { num } from "@carbonenginejs/core-math/num";
import { quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type {
  ITriCurveLength,
  ITriQuaternionFunction,
  Quat,
} from "./contracts.ts";

@type.define({ className: "Tr2QuaternionLerpCurve", family: "curves" })
export class Tr2QuaternionLerpCurve extends CjsModel
  implements ITriQuaternionFunction, ITriCurveLength {
  @io.persist
  @type.float64
  start = 0;

  @io.persist
  @type.float32
  length = 0;

  @io.persist
  @type.quat
  value: Quat = quat.create();

  @io.persist
  @type.objectRef("ITriQuaternionFunction")
  startCurve: ITriQuaternionFunction | null = null;

  @io.persist
  @type.objectRef("ITriQuaternionFunction")
  endCurve: ITriQuaternionFunction | null = null;

  #startValue: Quat = quat.create();
  #endValue: Quat = quat.create();

  /**
   * Updates the cached quaternion value for the supplied time.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.Update(time, this.value);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Quat): Quat {
    this.GetValueAt(time, this.value);
    return quat.copy(out, this.value);
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Quat): Quat {
    if (!this.startCurve || !this.endCurve || this.length <= 0) {
      return out;
    }

    const ratio = num.clamp((time - this.start) / this.length, 0, 1);
    const start = this.startCurve.GetValueAt(time, this.#startValue);
    const end = this.endCurve.GetValueAt(time, this.#endValue);
    return quat.slerp(out, start, end, ratio);
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
   * Gets the authored blend duration.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return this.length;
  }
}
