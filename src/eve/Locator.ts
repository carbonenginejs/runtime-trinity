// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.h

import type { Quat, Vec3 } from "@carbonenginejs/core-math/types";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "Locator", family: "eve" })
export class Locator extends CjsModel
{
  @type.vec3
  position: Vec3 = vec3.create();

  @type.quat
  direction: Quat = quat.create();

  @type.vec3
  scale: Vec3 = vec3.create();

  @type.int32
  boneIndex = 0;
}

export interface LocatorLike
{
  position: Vec3;
  direction: Quat;
  scale?: Vec3;
  boneIndex?: number;
}

export function CopyLocatorValues(target: Locator, source: LocatorLike): Locator
{
  vec3.copy(target.position, source.position);
  quat.copy(target.direction, source.direction);
  if (source.scale) {
    vec3.copy(target.scale, source.scale);
  } else {
    vec3.zero(target.scale);
  }
  target.boneIndex = source.boneIndex ?? 0;
  return target;
}

export function CloneLocator(source: LocatorLike): Locator
{
  return CopyLocatorValues(new Locator(), source);
}
