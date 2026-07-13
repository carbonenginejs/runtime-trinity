// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveBannerSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveBannerSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "EveBannerItem", family: "eve/attachment/banners" })
export class EveBannerItem extends CjsModel
{
  @type.int32
  bone = -1;

  @type.vec3
  position = vec3.create();

  @type.quat
  rotation = quat.create();

  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @type.float32
  angleX = 0;

  @type.float32
  angleY = 0;

  // Private Carbon structure metadata; deliberately absent from schema/wire.
  reference = 0;
}
