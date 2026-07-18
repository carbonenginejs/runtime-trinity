// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.h
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "Locator",
  family: "eve/utils"
})
export class Locator extends CjsModel
{
  @io.persist
  @type.vec3
  position = vec3.create();

  @io.persist
  @type.quat
  direction = quat.create();

  @io.persist
  @type.vec3
  scale = vec3.create();

  @io.persist
  @type.int32
  boneIndex = 0;
}
