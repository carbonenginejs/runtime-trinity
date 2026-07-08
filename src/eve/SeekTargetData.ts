// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\SeekTarget.h

import type { Vec3 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "SeekTargetData", family: "eve" })
export class SeekTargetData extends CjsModel {
  @type.int32
  bucketId = -1;

  @type.int32
  locatorIndex = -1;

  @type.float32
  timePassed = 0;

  @type.vec3
  position: Vec3 = vec3.create();

  @type.vec3
  direction: Vec3 = vec3.create();

  @type.boolean
  arrived = true;

  @type.boolean
  hasSpawned = false;
}
