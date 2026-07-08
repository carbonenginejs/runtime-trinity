// Source: E:\carbonengine\trinity\trinity\Curves\Tr2FollowCurveKey.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2FollowCurveKey.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import {
  Tr2FollowCurveKeyInterpolation,
  RotationSetting,
} from "./enums.ts";
import type {
  ITr2FollowCurveKey,
  ITr2Locator,
  ITr2ObjectFollowTarget,
  Quat,
  Vec3,
} from "./contracts.ts";
import type {
  Tr2FollowCurveKeyInterpolationValue,
  RotationSettingValue,
} from "./enums.ts";

@type.define({ className: "Tr2ObjectFollowCurveKey", family: "curves" })
export class Tr2ObjectFollowCurveKey extends CjsModel
  implements ITr2FollowCurveKey {
  @io.persist
  @type.string
  name = "";

  @io.notify
  @io.readwrite
  @type.objectRef("IRoot")
  object: ITr2ObjectFollowTarget | null = null;

  @io.persist
  @type.float32
  time = 0;

  @io.persist
  @type.int32
  @schema.enum("Tr2FollowCurveKeyInterpolation")
  interpolation: Tr2FollowCurveKeyInterpolationValue =
    Tr2FollowCurveKeyInterpolation.LINEAR;

  @io.persist
  @type.vec3
  leftTangent: Vec3 = vec3.create();

  @io.persist
  @type.vec3
  rightTangent: Vec3 = vec3.create();

  @io.read
  @type.vec3
  rotatedLeftTangent: Vec3 = vec3.create();

  @io.read
  @type.vec3
  rotatedRightTangent: Vec3 = vec3.create();

  @io.notify
  @io.persist
  @type.string
  offsetLocatorName = "";

  @io.persist
  @type.vec3
  offset: Vec3 = vec3.create();

  @io.persist
  @type.int32
  @schema.enum("RotationSetting")
  rotationSetting: RotationSettingValue =
    RotationSetting.NO_ROTATION;

  #locator: ITr2Locator | null = null;
  #offset: Vec3 = vec3.create();
  #rotation: Quat = quat.create();

  /**
   * Resolves the current locator cache.
   */
  @carbon.method
  @impl.implemented
  Initialize(): boolean {
    this.#locator = this.GetLocator();
    return true;
  }

  /**
   * Re-resolves the locator after object or locator-name changes.
   */
  @carbon.method
  @impl.adapted
  OnModified(): boolean {
    this.#locator = this.GetLocator();
    return true;
  }

  /**
   * Gets the key time.
   */
  @carbon.method
  @impl.implemented
  GetTime(): number {
    return this.time;
  }

  /**
   * Gets the segment interpolation mode starting at this key.
   */
  @carbon.method
  @impl.implemented
  GetInterpolationType(): Tr2FollowCurveKeyInterpolationValue {
    return this.interpolation;
  }

  /**
   * Gets the rotated left tangent into `out`.
   */
  @carbon.method
  @impl.adapted
  GetLeftTangent(out: Vec3): Vec3 {
    return vec3.copy(out, this.rotatedLeftTangent);
  }

  /**
   * Gets the rotated right tangent into `out`.
   */
  @carbon.method
  @impl.adapted
  GetRightTangent(out: Vec3): Vec3 {
    return vec3.copy(out, this.rotatedRightTangent);
  }

  /**
   * Gets the followed object position plus local offset into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(out: Vec3): Vec3 {
    if (!this.object) {
      return vec3.copy(out, this.offset);
    }

    vec3.copy(this.#offset, this.offset);
    if (this.#locator) {
      vec3.add(this.#offset, this.#offset, this.#locator.position);
    }

    const rotation = this.GetRotation();
    this.TransformByRotation(
      this.rotatedLeftTangent,
      this.leftTangent,
      rotation,
    );
    this.TransformByRotation(
      this.rotatedRightTangent,
      this.rightTangent,
      rotation,
    );
    this.TransformByRotation(out, this.#offset, rotation);

    const worldPosition = this.GetWorldPosition();
    if (worldPosition) {
      vec3.add(out, worldPosition, out);
    }

    return out;
  }

  /**
   * Finds the first locator in the requested Carbon locator set.
   */
  GetLocator(): ITr2Locator | null {
    const object = this.object;
    if (!object || this.offsetLocatorName === "") {
      return null;
    }

    const methodLocators = object.GetLocatorsForSet?.(this.offsetLocatorName);
    if (methodLocators && methodLocators.length > 0) {
      return methodLocators[0] ?? null;
    }

    const set = object.locatorSets?.find((entry) =>
      entry.name === this.offsetLocatorName
    );
    return set?.locators[0] ?? null;
  }

  /**
   * Gets the active rotation as a normalized quaternion, when any applies.
   */
  GetRotation(): Quat | null {
    switch (this.rotationSetting) {
      case RotationSetting.LOCATOR_ROTATION:
        if (this.#locator) {
          return quat.normalize(this.#rotation, this.#locator.direction);
        }
        break;

      case RotationSetting.MODEL_ROTATION: {
        const rotation = this.object?.GetWorldRotation?.() ??
          this.object?.worldRotation;
        if (rotation) {
          return quat.normalize(this.#rotation, rotation);
        }
        break;
      }
    }

    return null;
  }

  /**
   * Gets the followed object's world position, if it exposes one.
   */
  GetWorldPosition(): Vec3 | null {
    return this.object?.GetWorldPosition?.() ??
      this.object?.worldPosition ??
      null;
  }

  /**
   * Applies a pure rotation transform, or copies unchanged for identity.
   */
  TransformByRotation(out: Vec3, value: Vec3, rotation: Quat | null): Vec3 {
    if (!rotation) {
      return vec3.copy(out, value);
    }

    return vec3.transformQuat(out, value, rotation);
  }
}
