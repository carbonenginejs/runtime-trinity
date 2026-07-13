// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EvePlaneSetItem.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EvePlaneSetItem.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "EvePlaneSetItem", family: "eve/attachment/planes" })
export class EvePlaneSetItem extends CjsModel
{
  @io.persist
  @type.color
  color = vec4.fromValues(1, 1, 1, 1);

  @io.persist
  @type.vec4
  layer1Transform = vec4.fromValues(1, 1, 0, 0);

  @io.persist
  @type.vec4
  layer2Transform = vec4.fromValues(1, 1, 0, 0);

  @io.persist
  @type.vec4
  layer1Scroll = vec4.create();

  @io.persist
  @type.vec4
  layer2Scroll = vec4.create();

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.uint32
  maskAtlasID = 0;

  @io.persist
  @type.int32
  boneIndex = 0;

  @io.persist
  @type.vec3
  position = vec3.create();

  // Carbon uses this SOF-authored value while packing physical plane vertices,
  // but does not expose it through Blue serialization.
  blinkData = vec4.fromValues(1, 0, 1, 0);
}
