// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\PlayFX.h

import type { Vec3 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "PlayFXData", family: "eve" })
export class PlayFXData extends CjsModel {
  @type.boolean
  effectPlaying = false;

  @type.boolean
  droneArrived = false;

  @type.vec3
  oldTarget: Vec3 = vec3.create();
}
