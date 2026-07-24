// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\Inertia.h
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "InertiaData",
  family: "eve/child/behaviors"
})
export class InertiaData extends CjsModel
{
  @type.vec3
  agentAccel = vec3.create();

  @type.float32
  inertiaWeight = 0;
}
