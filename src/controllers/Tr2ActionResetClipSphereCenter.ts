// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionResetClipSphereCenter.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionResetClipSphereCenter.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { isArrayLike } from "@carbonenginejs/core-math/is";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import type { Vec3 } from "@carbonenginejs/core-math/types";
import { ResetBehavior } from "./enums.ts";
import type { ResetBehaviorValue } from "./enums.ts";
import {
  CallTarget,
  GetControllerOwner,
  HasFunction,
  HasProperty,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({
  className: "Tr2ActionResetClipSphereCenter",
  family: "controllers",
})
export class Tr2ActionResetClipSphereCenter extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.int32
  @schema.enum("ResetBehavior")
  resetBehavior: ResetBehaviorValue = ResetBehavior.OBJECT_CENTER;

  @io.persist
  @type.int32
  locatorIndex = -1;

  @io.persist
  @type.string
  locatorSetName = "";

  /**
   * Resets the owner clip-sphere center from object or locator data.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const owner = GetControllerOwner(controller);

    if (this.resetBehavior === ResetBehavior.OBJECT_CENTER) {
      if (HasFunction(owner, "ResetClipSphereCenter")) {
        owner.ResetClipSphereCenter();
        return;
      }
      const value = CallTarget(owner, "GetBoundingSphereCenter") ??
        (HasProperty(owner, "boundingSphereCenter")
          ? owner.boundingSphereCenter
          : null);
      if (
        isArrayLike(value, 3) &&
        HasProperty(owner, "clipSphereCenter") &&
        isArrayLike(owner.clipSphereCenter, 3)
      ) {
        vec3.copy(owner.clipSphereCenter as Vec3, value as Vec3);
        return;
      }
      return;
    }

    const locatorSetName = this.resetBehavior === ResetBehavior.LAST_DAMAGELOCATOR_HIT
      ? "damage"
      : this.locatorSetName;
    const locatorIndex = this.resetBehavior === ResetBehavior.LAST_DAMAGELOCATOR_HIT
      ? ToIndex(CallTarget(owner, "GetLastDamageLocatorHit"), -1)
      : this.locatorIndex;

    const center = ResolveLocatorPosition(owner, locatorSetName, locatorIndex);
    if (!center) {
      return;
    }
    if (HasFunction(owner, "ResetClipSphereCenterToPos")) {
      owner.ResetClipSphereCenterToPos(center);
      return;
    }
    if (
      HasProperty(owner, "clipSphereCenter") &&
      isArrayLike(owner.clipSphereCenter, 3)
    ) {
      vec3.copy(owner.clipSphereCenter as Vec3, center);
      return;
    }
    if (HasFunction(owner, "ResetClipSphereCenter")) {
      owner.ResetClipSphereCenter(center);
    }
  }
}

function ResolveLocatorPosition(
  owner: unknown,
  setName: string,
  index: number,
): Vec3 | null {
  const locators = CallTarget(owner, "GetLocatorsForSet", setName) ??
    (HasProperty(owner, "locatorSets") && Array.isArray(owner.locatorSets)
      ? owner.locatorSets.find((set) =>
        HasProperty(set, "name") && set.name === setName
      )
        ?.locators
      : null);
  if (!Array.isArray(locators) || !locators.length) {
    return null;
  }
  const resolvedIndex = index < 0
    ? Math.floor(Math.random() * locators.length)
    : index;
  const locator = locators[resolvedIndex] ?? null;
  if (isArrayLike(locator, 3)) {
    return locator as Vec3;
  }
  if (
    HasProperty(locator, "position") &&
    isArrayLike((locator as { position: unknown }).position, 3)
  ) {
    return (locator as { position: Vec3 }).position;
  }
  return null;
}

function ToIndex(value: unknown, fallback: number): number {
  const number = Number(value);
  return Number.isFinite(number) ? number | 0 : fallback;
}
