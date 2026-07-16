// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EvePlaneSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EvePlaneSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { schema, type } from "@carbonenginejs/core-types/schema";
import { LightData } from "../generated/eve/lights/LightData.js";


@type.define({ className: "EvePlaneLight", family: "eve/attachment/planes" })
export class EvePlaneLight extends CjsModel
{
  static FadeType = Object.freeze({
    FT_NONE: 0,
    FT_BLINK: 1,
    FT_FADEIN: 2,
    FT_FADEOUT: 3,
    FT_FADEINOUT: 4
  });

  static FT_NONE = 0;
  static FT_BLINK = 1;
  static FT_FADEIN = 2;
  static FT_FADEOUT = 3;
  static FT_FADEINOUT = 4;

  @type.rawStruct("LightData")
  lightData = new LightData();

  @type.float32
  saturation = 1;

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.int32
  @schema.enum("FadeType")
  fadeType = EvePlaneLight.FT_NONE;

  @type.float32
  blinkPhase = 0;

  @type.float32
  blinkRate = 0;

  @type.uint32
  index = 0;

  @type.mat4
  boneMatrix = mat4.create();

  lightProfilePath = "";

  static FromSOF(value)
  {
    const result = new EvePlaneLight();
    result.lightData = LightData.from(value?.lightData ?? {});
    result.saturation = Number(value?.saturation ?? 1);
    result.lightProfile = value?.lightProfile ?? null;
    result.fadeType = Number(value?.fadeType ?? EvePlaneLight.FT_NONE) | 0;
    result.blinkPhase = Number(value?.blinkPhase ?? 0);
    result.blinkRate = Number(value?.blinkRate ?? 0);
    result.index = Number(value?.index ?? 0) >>> 0;
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
}
