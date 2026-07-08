// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\SeekTarget.h

import type { Quat, Vec3 } from "@carbonenginejs/core-math/types";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "LocatorData", family: "eve" })
export class LocatorData extends CjsModel
{
  @type.vec3
  position: Vec3 = vec3.create();

  @type.quat
  direction: Quat = quat.create();
}
