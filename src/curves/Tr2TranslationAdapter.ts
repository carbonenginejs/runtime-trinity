// Source: E:\carbonengine\trinity\trinity\Curves\Tr2TranslationAdapter.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2TranslationAdapter.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriVectorFunction, Quat, Vec3 } from "./contracts.ts";

@type.define({ className: "Tr2TranslationAdapter", family: "curves" })
export class Tr2TranslationAdapter extends CjsModel
  implements ITriVectorFunction {
  @io.persist
  @type.vec3
  value: Vec3 = vec3.create();

  @io.persist
  @type.objectRef("ITriVectorFunction")
  curve: ITriVectorFunction | null = null;

  @io.persist
  @type.quat
  rotationOffset: Quat = quat.create();

  @io.read
  @type.vec3
  currentValue: Vec3 = vec3.create();

  #start = 0;
  #offset = 0;
  #timeScale = 1;
  #dotValue0: Vec3 = vec3.create();
  #dotValue1: Vec3 = vec3.create();

  /**
   * Updates the cached vector value when a child curve is attached.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    if (this.curve) {
      this.curve.Update(this.GetLocalTime(time), this.currentValue);
    }
  }

  /**
   * Updates the cached value, applies the rotation offset, and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Vec3): Vec3 {
    if (this.curve) {
      this.curve.Update(this.GetLocalTime(time), this.currentValue);
    } else {
      vec3.copy(this.currentValue, this.value);
    }

    vec3.transformQuat(
      this.currentValue,
      this.currentValue,
      this.rotationOffset,
    );
    return vec3.copy(out, this.currentValue);
  }

  /**
   * Gets the vector value at `time` into `out` without applying rotation offset.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Vec3): Vec3 {
    if (this.curve) {
      return this.curve.GetValueAt(this.GetLocalTime(time), out);
    }

    return vec3.copy(out, this.value);
  }

  /**
   * Gets Carbon's backward finite-difference vector derivative.
   */
  @carbon.method
  @impl.adapted
  GetValueDotAt(time: number, out: Vec3): Vec3 {
    if (!this.curve) {
      return vec3.zero(out);
    }

    const localTime = this.GetLocalTime(time);
    this.curve.GetValueAt(localTime, this.#dotValue0);
    this.curve.GetValueAt(localTime - 0.1, this.#dotValue1);
    vec3.subtract(out, this.#dotValue1, this.#dotValue0);
    return vec3.scale(out, out, 10);
  }

  /**
   * Gets the second derivative vector at the supplied time.
   */
  @carbon.method
  @impl.adapted
  GetValueDoubleDotAt(_time: number, out: Vec3): Vec3 {
    return vec3.zero(out);
  }

  /**
   * Copies the last cached value into `out`.
   */
  @carbon.method
  @impl.adapted
  InterpolatedPosition(_time: number, out: Vec3): Vec3 {
    return vec3.copy(out, this.currentValue);
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
