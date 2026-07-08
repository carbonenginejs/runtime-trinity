// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\Inertia.h

import type { Vec3 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "InertiaData", family: "eve" })
export class InertiaData extends CjsModel {
  @type.vec3
  agentAccel: Vec3 = vec3.create();

  @type.float32
  inertiaWeight = 0;
}
