// Source: E:\carbonengine\trinity\trinity\Curves\Tr2RotationAdapter.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2RotationAdapter.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriQuaternionFunction, Quat } from "./contracts.ts";

@type.define({ className: "Tr2RotationAdapter", family: "curves" })
export class Tr2RotationAdapter extends CjsModel
  implements ITriQuaternionFunction {
  @io.persist
  @type.quat
  value: Quat = quat.create();

  @io.persist
  @type.objectRef("ITriQuaternionFunction")
  curve: ITriQuaternionFunction | null = null;

  @io.read
  @type.quat
  currentValue: Quat = quat.create();

  #start = 0;
  #offset = 0;
  #timeScale = 1;

  /**
   * Updates the cached quaternion value when a child curve is attached.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    if (this.curve) {
      this.curve.Update(this.GetLocalTime(time), this.currentValue);
    }
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Quat): Quat {
    if (this.curve) {
      this.curve.Update(this.GetLocalTime(time), this.currentValue);
    } else {
      quat.copy(this.currentValue, this.value);
    }

    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Quat): Quat {
    if (this.curve) {
      return this.curve.GetValueAt(this.GetLocalTime(time), out);
    }

    return quat.copy(out, this.value);
  }

  /**
   * Gets the first derivative quaternion at the supplied time.
   */
  @carbon.method
  @impl.adapted
  GetValueDotAt(_time: number, out: Quat): Quat {
    return quat.identity(out);
  }

  /**
   * Gets the second derivative quaternion at the supplied time.
   */
  @carbon.method
  @impl.adapted
  GetValueDoubleDotAt(_time: number, out: Quat): Quat {
    return quat.identity(out);
  }

  /**
   * Shifts the local curve start by a random offset inside `[-range, range]`.
   */
  @carbon.method
  @impl.adapted
  RandomizeStart(range = 60): void {
    const radius = range || 60;
    this.#offset = (Math.random() * 2 - 1) * radius;
  }

  /**
   * Scales local curve time.
   */
  @carbon.method
  @impl.implemented
  ScaleTime(scale: number): void {
    this.#timeScale = scale;
  }

  /**
   * Resets the local start time offset.
   */
  @carbon.method
  @impl.implemented
  ResetStart(): void {
    this.#start = 0;
  }

  /**
   * Converts caller time into local child-curve time.
   */
  GetLocalTime(time: number): number {
    return time / this.#timeScale;
  }

  /**
   * Converts a runtime numeric-seconds `Be::Time` value into start-aware local time.
   */
  GetStartAwareLocalTime(time: number): number {
    if (this.#start === 0) {
      this.#start = time;
    }

    return (time - this.#start + this.#offset) / this.#timeScale;
  }
}
