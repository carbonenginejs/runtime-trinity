// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import { Tr2CurveExtrapolation, Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveExtrapolationValue } from "./enums.ts";
import type {
  ITriCurveLength,
  ITriQuaternionFunction,
  Quat,
} from "./contracts.ts";
import { Tr2CurveQuaternionKey } from "./Tr2CurveQuaternionKey.ts";

@type.define({ className: "Tr2CurveQuaternion", family: "curves" })
export class Tr2CurveQuaternion extends CjsModel
  implements ITriQuaternionFunction, ITriCurveLength {
  @io.persist
  @type.array({ kind: "struct", className: "Tr2CurveQuaternionKey" })
  keys: Tr2CurveQuaternionKey[] = [];

  @io.persist
  @type.string
  name = "";

  @io.read
  @type.quat
  currentValue: Quat = quat.create();

  @io.persist
  @type.uint32
  @schema.enum("Tr2CurveExtrapolation")
  extrapolationBefore: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  @io.persist
  @type.uint32
  @schema.enum("Tr2CurveExtrapolation")
  extrapolationAfter: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  #lastSegment = 0;

  /**
   * Updates the cached quaternion value for the supplied time.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.GetValueAt(time, this.currentValue);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Quat): Quat {
    this.UpdateValue(time);
    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Quat): Quat {
    return this.Evaluate(out, time);
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.implemented
  GetValueDotAt(_time: number, out: Quat): Quat {
    return quat.identity(out);
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.implemented
  GetValueDoubleDotAt(_time: number, out: Quat): Quat {
    return quat.identity(out);
  }

  /**
   * Gets the last authored key time, or zero for an empty curve.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return this.keys.length ? this.keys[this.keys.length - 1].time : 0;
  }

  /**
   * Gets the authored curve name.
   */
  GetName(): string {
    return this.name;
  }

  /**
   * Sets the authored curve name.
   */
  SetName(name: string): void {
    this.name = name;
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Quat): Quat {
    return this.Evaluate(out, time);
  }

  /**
   * Gets the last cached value.
   */
  @carbon.method
  @impl.implemented
  GetCurrentValue(): Quat {
    return this.currentValue;
  }

  /**
   * Sorts keys by authored time after key edits.
   */
  @carbon.method
  @impl.adapted
  OnKeysChanged(): void {
    this.keys = this.keys
      .map((key, index) => ({ key, index }))
      .sort((a, b) => a.key.time - b.key.time || a.index - b.index)
      .map((entry) => entry.key);

    this.#lastSegment = 0;
  }

  /**
   * Adds a quaternion key and refreshes key ordering.
   */
  @carbon.method
  @impl.adapted
  AddKey(
    time: number,
    value: Quat,
    interpolation = Tr2CurveInterpolation.LINEAR,
  ): void {
    const key = new Tr2CurveQuaternionKey();
    key.time = time;
    quat.copy(key.value, value);
    key.interpolation = interpolation;
    key.id = 0;
    this.keys.push(key);
    this.OnKeysChanged();
  }

  /**
   * Sets both before and after extrapolation modes.
   */
  @carbon.method
  @impl.implemented
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void {
    this.extrapolationAfter = extrapolation;
    this.extrapolationBefore = extrapolation;
  }

  /**
   * Converts caller time into the authored key range according to extrapolation.
   */
  GetLocalTime(time: number): number {
    if (!this.keys.length) {
      return 0;
    }

    const first = this.keys[0].time;
    const last = this.keys[this.keys.length - 1].time;
    const length = last - first;
    if (length === 0) {
      return first;
    }

    if (time < first) {
      const quotient = -(time - first) / length;
      const intPart = Math.trunc(quotient);
      let fracPart = quotient - intPart;

      if (this.extrapolationBefore === Tr2CurveExtrapolation.CYCLE) {
        fracPart = 1 - fracPart;
      } else if (intPart % 2 !== 0) {
        fracPart = 1 - fracPart;
      }
      return fracPart * length + first;
    }

    if (time < last) {
      return time;
    }

    const quotient = (time - first) / length;
    const intPart = Math.trunc(quotient);
    let fracPart = quotient - intPart;

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.MIRROR &&
      intPart % 2 !== 0
    ) {
      fracPart = 1 - fracPart;
    }
    return fracPart * length + first;
  }

  /**
   * Finds the key segment containing local time, updating the segment cache.
   */
  FindSegment(time: number): number {
    const count = this.keys.length;

    if (this.#lastSegment + 1 < count) {
      let k0 = this.keys[this.#lastSegment];
      let k1 = this.keys[this.#lastSegment + 1];
      if (time >= k0.time && time < k1.time) {
        return this.#lastSegment;
      }

      if (this.#lastSegment + 2 < count) {
        k0 = this.keys[this.#lastSegment + 1];
        k1 = this.keys[this.#lastSegment + 2];
        if (time >= k0.time && time < k1.time) {
          this.#lastSegment++;
          return this.#lastSegment;
        }
      }

      if (this.#lastSegment > 1) {
        k0 = this.keys[this.#lastSegment - 1];
        k1 = this.keys[this.#lastSegment];
        if (time >= k0.time && time < k1.time) {
          this.#lastSegment--;
          return this.#lastSegment;
        }
      }
    }

    for (let i = 0; i + 1 < count; i++) {
      const k0 = this.keys[i];
      const k1 = this.keys[i + 1];
      if (time >= k0.time && time < k1.time) {
        this.#lastSegment = i;
        return this.#lastSegment;
      }
    }

    this.#lastSegment = count - 2;
    return this.#lastSegment;
  }

  /**
   * Evaluates the quaternion curve with Carbon extrapolation and interpolation rules.
   */
  Evaluate(out: Quat, time: number): Quat {
    const count = this.keys.length;
    if (!count) {
      return quat.identity(out);
    }

    const firstKey = this.keys[0];
    const lastKey = this.keys[count - 1];

    if (count === 1) {
      return quat.copy(out, firstKey.value);
    }

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.CLAMP &&
      time <= firstKey.time
    ) {
      return quat.copy(out, firstKey.value);
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.CLAMP &&
      time >= lastKey.time
    ) {
      return quat.copy(out, lastKey.value);
    }

    const localTime = this.GetLocalTime(time);
    const segment = this.FindSegment(localTime);
    return this.GetSegmentValue(
      out,
      localTime,
      this.keys[segment],
      this.keys[segment + 1],
    );
  }

  /**
   * Evaluates the value inside a key segment using the segment interpolation mode.
   */
  GetSegmentValue(
    out: Quat,
    time: number,
    k0: Tr2CurveQuaternionKey,
    k1: Tr2CurveQuaternionKey,
  ): Quat {
    if (k0.interpolation === Tr2CurveInterpolation.CONSTANT) {
      return quat.copy(out, time === k1.time ? k1.value : k0.value);
    }

    const length = k1.time - k0.time;
    if (length === 0) {
      return quat.copy(out, k1.value);
    }

    return quat.slerp(out, k0.value, k1.value, (time - k0.time) / length);
  }
}
