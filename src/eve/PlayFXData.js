// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\PlayFX.h
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "PlayFXData",
  family: "eve/child/behaviors"
})
export class PlayFXData extends CjsModel
{
  @type.boolean
  effectPlaying = false;

  @type.boolean
  droneArrived = false;

  @type.vec3
  oldTarget = vec3.create();
}
