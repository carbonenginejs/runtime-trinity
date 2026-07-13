// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.h
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "Locator",
  family: "eve/utils"
})
export class Locator extends CjsModel
{
  @type.vec3
  position = vec3.create();

  @type.quat
  direction = quat.create();

  @type.vec3
  scale = vec3.create();

  @type.int32
  boneIndex = 0;

  static CopyValues(target, source)
  {
    vec3.copy(target.position, source.position);
    quat.copy(target.direction, source.direction);
    if (source.scale)
    {
      vec3.copy(target.scale, source.scale);
    }
    else
    {
      vec3.zero(target.scale);
    }
    target.boneIndex = source.boneIndex ?? 0;
    return target;
  }

  static Clone(source)
  {
    return this.CopyValues(new Locator(), source);
  }
}
