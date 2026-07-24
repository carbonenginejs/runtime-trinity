// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\BackAndForth.h
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "BackAndForthData",
  family: "eve/child/behaviors"
})
export class BackAndForthData extends CjsModel
{
  @type.vec3
  locatorTarget = vec3.create();

  @type.vec3
  locatorDirection = vec3.create();

  @type.int32
  locatorIndex = -1;

  @type.boolean
  seek = true;

  @type.boolean
  deliver = false;

  @type.boolean
  arrived = true;

  @type.float32
  timePassed = 0;
}
