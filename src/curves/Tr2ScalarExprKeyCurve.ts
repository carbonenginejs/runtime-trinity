// Source: E:\carbonengine\trinity\trinity\Curves\Tr2ScalarExprKeyCurve.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2ScalarExprKeyCurve.cpp
import { num } from "@carbonenginejs/core-math/num";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, ITriScalarFunction } from "./contracts.ts";
import { Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveInterpolationValue } from "./enums.ts";
import { Tr2ScalarExprKey } from "./Tr2ScalarExprKey.ts";

@type.define({ className: "Tr2ScalarExprKeyCurve", family: "curves" })
export class Tr2ScalarExprKeyCurve extends CjsModel
  implements ITriCurveLength, ITriScalarFunction {
  @io.persist
  @type.uint32
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.LINEAR;

  @io.read
  @type.float32
  currentValue = 0;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.boolean
  cycle = false;

  @io.persist
  @type.boolean
  reversed = false;

  @io.persist
  @type.float32
  timeOffset = 0;

  @io.persist
  @type.float32
  timeScale = 1;

  @io.persist
  @type.list("Tr2ScalarExprKey")
  keys: Tr2ScalarExprKey[] = [];

  startTangent = 0;
  endTangent = 0;

  /**
   * Initializes and sorts keys.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.#reEvaluateKeys();
    return true;
  }

  /**
   * Gets authored duration.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    if (!this.keys.length) {
      return 0;
    }
    return Number(this.keys[this.keys.length - 1].time) -
      Number(this.keys[0].time);
  }

  /**
   * Updates cached value.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.currentValue = this.GetValueAt(time);
  }

  /**
   * Updates and returns value.
   */
  Update(time: number): number {
    this.currentValue = this.GetValueAt(time);
    return this.currentValue;
  }

  /**
   * Gets value at a time.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number): number {
    if (!this.keys.length) {
      return 0;
    }
    this.#reEvaluateKeys();
    const length = this.Length();
    time = time / this.timeScale - this.timeOffset;

    if (length <= 0 || time <= 0) {
      return Number(this.keys[0].value);
    }

    const first = this.keys[0];
    const last = this.keys[this.keys.length - 1];

    if (time > length + Number(first.time)) {
      if (this.cycle) {
        time = Number(first.value) + ((time - Number(first.value)) % length);
      } else {
        return Number(this.reversed ? first.value : last.value);
      }
    }

    if (this.reversed) {
      time = Number(first.value) + (length - (time - Number(first.value)));
    }

    if (time <= Number(first.time)) {
      return this.#interpolate(time, null, first);
    }

    if (time >= Number(last.time)) {
      return this.#interpolate(time, last, null);
    }

    let endKey = first;
    for (let i = 1; i < this.keys.length; i++) {
      const startKey = endKey;
      endKey = this.keys[i];
      if (Number(endKey.time) > time) {
        return this.#interpolate(time, startKey, endKey);
      }
    }

    return Number(last.value);
  }

  /**
   * Gets a key time.
   */
  @carbon.method
  @impl.implemented
  GetKeyTime(index: number): number {
    return Number(this.keys[index]?.time ?? 0);
  }

  /**
   * Sets a key time.
   */
  @carbon.method
  @impl.implemented
  SetKeyTime(index: number, time: number): void {
    if (this.keys[index]) {
      this.keys[index].time = time;
    }
  }

  /**
   * Gets a key value.
   */
  @carbon.method
  @impl.implemented
  GetKeyValue(index: number): number {
    return Number(this.keys[index]?.value ?? 0);
  }

  /**
   * Sets a key value.
   */
  @carbon.method
  @impl.implemented
  SetKeyValue(index: number, value: number): void {
    if (this.keys[index]) {
      this.keys[index].value = value;
    }
  }

  /**
   * Gets the number of keys.
   */
  @carbon.method
  @impl.implemented
  GetKeyCount(): number {
    return this.keys.length;
  }

  /**
   * Gets a key interpolation value.
   */
  @carbon.method
  @impl.implemented
  GetKeyInterpolation(index: number): number {
    return Number(this.keys[index]?.interpolation ?? 0);
  }

  /**
   * Sets a key interpolation value.
   */
  @carbon.method
  @impl.implemented
  SetKeyInterpolation(index: number, interpolation: number): void {
    if (this.keys[index]) {
      this.keys[index].interpolation = interpolation as Tr2CurveInterpolationValue;
    }
  }

  /**
   * Gets a key left tangent.
   */
  @carbon.method
  @impl.implemented
  GetKeyLeftTangent(index: number): number {
    const key = this.keys[index];
    return key ? key.left : this.startTangent;
  }

  /**
   * Sets a key left tangent.
   */
  @carbon.method
  @impl.implemented
  SetKeyLeftTangent(index: number, tangent: number): void {
    if (this.keys[index]) {
      this.keys[index].left = tangent;
    }
  }

  /**
   * Gets a key right tangent.
   */
  @carbon.method
  @impl.implemented
  GetKeyRightTangent(index: number): number {
    const key = this.keys[index];
    return key ? key.right : this.endTangent;
  }

  /**
   * Sets a key right tangent.
   */
  @carbon.method
  @impl.implemented
  SetKeyRightTangent(index: number, tangent: number): void {
    if (this.keys[index]) {
      this.keys[index].right = tangent;
    }
  }

  /**
   * JS convenience tangent accessor.
   */
  GetKeyTangent(index: number, left = false): number {
    return left
      ? this.GetKeyLeftTangent(index)
      : this.GetKeyRightTangent(index);
  }

  /**
   * JS convenience tangent setter.
   */
  SetKeyTangent(index: number, value: number, left = false): void {
    if (left) this.SetKeyLeftTangent(index, value);
    else this.SetKeyRightTangent(index, value);
  }

  /**
   * Adds a key.
   */
  @carbon.method
  @impl.adapted
  AddKey(
    time: number,
    value: number,
    leftTangent = 0,
    rightTangent = 0,
    interpolation: Tr2CurveInterpolationValue = this.interpolation,
  ): number {
    let index = 0;
    while (index < this.keys.length && Number(this.keys[index].time) <= time) {
      index++;
    }

    const key = new Tr2ScalarExprKey();
    key.time = time;
    key.value = value;
    key.left = leftTangent;
    key.right = rightTangent;
    key.interpolation = interpolation;
    this.keys.splice(index, 0, key);
    return index;
  }

  /**
   * Removes a key.
   */
  @carbon.method
  @impl.implemented
  RemoveKey(index: number): void {
    this.keys.splice(index, 1);
  }

  /**
   * Sorts and re-evaluates keys.
   */
  @carbon.method
  @impl.adapted
  Sort(): void {
    this.#reEvaluateKeys();
  }

  #reEvaluateKeys(): void {
    let previousKey: Tr2ScalarExprKey | null = null;
    for (const key of this.keys) {
      key.UpdateValues(previousKey);
      previousKey = key;
    }
  }

  GetLocalTime(time: number): number {
    const length = this.Length();
    let localTime = time / this.timeScale - this.timeOffset;
    if (this.reversed) {
      localTime = length - localTime;
    }
    if (this.cycle && length > 0) {
      localTime %= length;
      if (localTime < 0) {
        localTime += length;
      }
    }
    return localTime;
  }

  #interpolate(
    time: number,
    lastKey: Tr2ScalarExprKey | null,
    nextKey: Tr2ScalarExprKey | null,
  ): number {
    let deltaTime = this.Length();
    let startValue = Number(this.keys[0].value);
    let endValue = Number(this.keys[this.keys.length - 1].value);
    let interpolation: number = this.interpolation;

    if (lastKey) {
      interpolation = Number(lastKey.interpolation);
      time -= Number(lastKey.time);
    }

    switch (interpolation) {
      case Tr2CurveInterpolation.LINEAR:
        if (lastKey && nextKey) {
          startValue = Number(lastKey.value);
          endValue = Number(nextKey.value);
          deltaTime = Number(nextKey.time) - Number(lastKey.time);
        } else if (!lastKey && nextKey) {
          startValue = Number(nextKey.value);
          endValue = Number(nextKey.value);
          deltaTime = Number(nextKey.time);
        } else if (lastKey && !nextKey) {
          startValue = Number(lastKey.value);
          endValue = Number(lastKey.value);
          deltaTime = this.Length() - Number(lastKey.time);
        }
        return startValue + (endValue - startValue) * (time / deltaTime);

      case Tr2CurveInterpolation.HERMITE:
      {
        let inTangent = 0;
        let outTangent = 0;
        if (lastKey && nextKey) {
          startValue = Number(lastKey.value);
          inTangent = Number(lastKey.right);
          endValue = Number(nextKey.value);
          outTangent = Number(nextKey.left);
          deltaTime = Number(nextKey.time) - Number(lastKey.time);
        } else if (!lastKey && nextKey) {
          startValue = Number(nextKey.value);
          endValue = Number(nextKey.value);
          outTangent = Number(nextKey.left);
          deltaTime = Number(nextKey.time);
        } else if (lastKey && !nextKey) {
          startValue = Number(lastKey.value);
          endValue = Number(lastKey.value);
          inTangent = Number(lastKey.right);
          deltaTime = this.Length() - Number(lastKey.time);
        }

        return num.hermite(
          startValue,
          inTangent,
          outTangent,
          endValue,
          time / deltaTime,
        );
      }

      default:
        return Number(this.keys[0].value);
    }
  }
}
