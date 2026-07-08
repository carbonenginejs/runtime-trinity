// Source: E:\carbonengine\trinity\trinity\Curves\Tr2FollowCurveKey.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2FollowCurveKey.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import type { Vec3 } from "@carbonenginejs/core-math/types";
import { CjsModel } from "@carbonenginejs/core-types/model";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import type { ITr2FollowCurveKey } from "./contracts.ts";
import type { Tr2FollowCurveKeyInterpolationValue } from "./enums.ts";
import { Tr2FollowCurveKeyInterpolation } from "./enums.ts";

@type.define({ className: "Tr2CameraFollowCurveKey", family: "curves" })
export class Tr2CameraFollowCurveKey extends CjsModel
  implements ITr2FollowCurveKey {
  @io.persist
  @type.int32
  @schema.enum("Tr2FollowCurveKeyInterpolation")
  interpolation: Tr2FollowCurveKeyInterpolationValue =
    Tr2FollowCurveKeyInterpolation.LINEAR;

  @io.notify
  @io.persist
  @type.float32
  fovMultiplication = 0.5;

  @io.persist
  @type.vec3
  offset: Vec3 = vec3.create();

  @io.notify
  @io.readwrite
  @type.boolean
  enabled = true;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.float32
  angleZero = Math.PI / 2;

  @io.persist
  @type.float32
  angle = 0;

  @io.readwrite
  @type.vec3
  objectBounds: Vec3 = vec3.create();

  @io.persist
  @type.vec3
  leftTangent: Vec3 = vec3.create();

  @io.read
  @type.vec3
  boxPosition: Vec3 = vec3.create();

  @io.persist
  @type.vec3
  rightTangent: Vec3 = vec3.create();

  @io.read
  @type.vec3
  rotatedLeftTangent: Vec3 = vec3.create();

  @io.read
  @type.vec3
  rotatedRightTangent: Vec3 = vec3.create();

  @io.persist
  @type.float32
  time = 0;

  /**
   * Initializes derived camera-box values.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.CalculateBoxPosition();
    return true;
  }

  /**
   * Recalculates derived values after modification.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.fovMultiplication = Math.min(
      0.999,
      Math.max(0.001, this.fovMultiplication),
    );
    this.CalculateBoxPosition();
    return true;
  }

  /**
   * Updates camera box/tangent positions.
   */
  @carbon.method
  @impl.adapted
  CalculateBoxPosition(): void {
    vec3.copy(this.boxPosition, this.offset);
    vec3.copy(this.rotatedLeftTangent, this.leftTangent);
    vec3.copy(this.rotatedRightTangent, this.rightTangent);
  }

  /**
   * Gets key value.
   */
  @carbon.method
  @impl.adapted
  GetValue(out: Vec3): Vec3 {
    this.CalculateBoxPosition();
    return vec3.copy(out, this.boxPosition);
  }

  /**
   * Gets key time.
   */
  @carbon.method
  @impl.implemented
  GetTime(): number {
    return this.time;
  }

  /**
   * Gets key interpolation.
   */
  @carbon.method
  @impl.implemented
  GetInterpolationType(): Tr2FollowCurveKeyInterpolationValue {
    return this.interpolation;
  }

  /**
   * Gets left tangent.
   */
  @carbon.method
  @impl.adapted
  GetLeftTangent(out: Vec3): Vec3 {
    return vec3.copy(out, this.rotatedLeftTangent);
  }

  /**
   * Gets right tangent.
   */
  @carbon.method
  @impl.adapted
  GetRightTangent(out: Vec3): Vec3 {
    return vec3.copy(out, this.rotatedRightTangent);
  }
}
