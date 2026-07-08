// Source: E:\carbonengine\trinity\trinity\Curves\Tr2FollowCurve.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2FollowCurve.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Tr2FollowCurveKeyInterpolation } from "./enums.ts";
import type {
  ITr2FollowCurveKey,
  ITriVectorFunction,
  Vec3,
} from "./contracts.ts";

@type.define({ className: "Tr2FollowCurve", family: "curves" })
export class Tr2FollowCurve extends CjsModel implements ITriVectorFunction {
  @io.read
  @type.vec3
  currentValue: Vec3 = vec3.create();

  @io.persist
  @type.list("ITr2FollowCurveKey")
  keys: ITr2FollowCurveKey[] = [];

  @io.persist
  @type.string
  name = "";

  #keyValue0: Vec3 = vec3.create();
  #keyValue1: Vec3 = vec3.create();
  #leftTangent: Vec3 = vec3.create();
  #rightTangent: Vec3 = vec3.create();
  #inTangent: Vec3 = vec3.create();
  #outTangent: Vec3 = vec3.create();

  /**
   * Updates the cached vector value for the supplied time.
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
  Update(time: number, out: Vec3): Vec3 {
    this.UpdateValue(time);
    return vec3.copy(out, this.currentValue);
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Vec3): Vec3 {
    let currentKey: ITr2FollowCurveKey | null = null;
    let nextKey: ITr2FollowCurveKey | null = null;

    for (const key of this.keys) {
      if (time < key.GetTime()) {
        nextKey = key;
        break;
      }
      currentKey = key;
    }

    if (nextKey && currentKey) {
      return this.GetSegmentValue(out, time, currentKey, nextKey);
    }

    if (currentKey) {
      return currentKey.GetValue(out);
    }

    return vec3.zero(out);
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
   * Gets the vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Vec3): Vec3 {
    return this.GetValueAt(time, out);
  }

  /**
   * Sorts keys by authored time after list edits.
   */
  Sort(): void {
    this.keys = this.keys
      .map((key, index) => ({ key, index }))
      .sort((a, b) => a.key.GetTime() - b.key.GetTime() || a.index - b.index)
      .map((entry) => entry.key);
  }

  /**
   * Handles a Carbon list-modified notification.
   */
  @carbon.method
  @impl.adapted
  OnListModified(): void {
    this.Sort();
  }

  /**
   * Evaluates a key segment into `out`.
   */
  GetSegmentValue(
    out: Vec3,
    time: number,
    k0: ITr2FollowCurveKey,
    k1: ITr2FollowCurveKey,
  ): Vec3 {
    switch (k0.GetInterpolationType()) {
      case Tr2FollowCurveKeyInterpolation.CONSTANT:
        return time === k1.GetTime() ? k1.GetValue(out) : k0.GetValue(out);

      case Tr2FollowCurveKeyInterpolation.LINEAR:
        if (k1.GetTime() === k0.GetTime()) {
          return k1.GetValue(out);
        }
        return vec3.lerp(
          out,
          k0.GetValue(this.#keyValue0),
          k1.GetValue(this.#keyValue1),
          (time - k0.GetTime()) / (k1.GetTime() - k0.GetTime()),
        );

      case Tr2FollowCurveKeyInterpolation.HERMITE:
        return this.GetHermiteSegmentValue(out, time, k0, k1);

      default:
        return vec3.zero(out);
    }
  }

  /**
   * Evaluates a Hermite segment into `out`.
   */
  GetHermiteSegmentValue(
    out: Vec3,
    time: number,
    k0: ITr2FollowCurveKey,
    k1: ITr2FollowCurveKey,
  ): Vec3 {
    const length = k1.GetTime() - k0.GetTime();
    if (length === 0) {
      return k1.GetValue(out);
    }

    vec3.scale(this.#inTangent, k0.GetRightTangent(this.#rightTangent), length);
    vec3.scale(this.#outTangent, k1.GetLeftTangent(this.#leftTangent), length);

    return vec3.hermite(
      out,
      k0.GetValue(this.#keyValue0),
      this.#inTangent,
      this.#outTangent,
      k1.GetValue(this.#keyValue1),
      (time - k0.GetTime()) / length,
    );
  }
}
