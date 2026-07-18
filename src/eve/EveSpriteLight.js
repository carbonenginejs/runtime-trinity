// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpriteSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpriteSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { type } from "@carbonenginejs/core-types/schema";
import { LightData } from "../generated/eve/lights/LightData.js";


@type.define({ className: "EveSpriteLight", family: "eve/attachment/sprites" })
export class EveSpriteLight extends CjsModel
{
  @type.rawStruct("LightData")
  lightData = new LightData();

  @type.float32
  blinkPhase = 0;

  @type.float32
  blinkRate = 0;

  @type.float32
  minScale = 0;

  @type.float32
  maxScale = 0;

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.uint32
  index = 0;

  @type.mat4
  boneMatrix = mat4.create();

  @type.string
  lightProfilePath = "";

  static FromSOF(value)
  {
    const result = new EveSpriteLight();
    result.lightData = LightData.from(value?.lightData ?? {});
    result.blinkPhase = Number(value?.blinkPhase ?? 0);
    result.blinkRate = Number(value?.blinkRate ?? 0);
    result.minScale = Number(value?.minScale ?? 0);
    result.maxScale = Number(value?.maxScale ?? 0);
    result.lightProfile = value?.lightProfile ?? null;
    result.index = Number(value?.index ?? 0) >>> 0;
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
}
