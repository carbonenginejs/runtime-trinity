// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveBannerSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveBannerSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { type } from "@carbonenginejs/core-types/schema";
import { LightData } from "../generated/eve/lights/LightData.js";


@type.define({ className: "EveBannerLight", family: "eve/attachment/banners" })
export class EveBannerLight extends CjsModel
{
  @type.rawStruct("LightData")
  lightData = new LightData();

  @type.float32
  saturation = 1;

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.uint32
  index = 0;

  @type.mat4
  boneMatrix = mat4.create();

  lightProfilePath = "";

  static FromSOF(value)
  {
    const result = new EveBannerLight();
    result.lightData = LightData.fromValues(value?.lightData ?? {});
    result.saturation = Number(value?.saturation ?? 1);
    result.lightProfile = value?.lightProfile ?? null;
    result.index = Number(value?.index ?? 0) >>> 0;
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
}
