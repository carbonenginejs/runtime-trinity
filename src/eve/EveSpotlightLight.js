// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpotlightSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpotlightSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { type } from "@carbonenginejs/core-types/schema";
import { LightData } from "../generated/eve/lights/LightData.js";


@type.define({ className: "EveSpotlightLight", family: "eve/attachment/spotlights" })
export class EveSpotlightLight extends CjsModel
{
  @type.rawStruct("LightData")
  lightData = new LightData();

  @type.mat4
  boneMatrix = mat4.create();

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.boolean
  boosterGainInfluence = false;

  @type.uint32
  index = 0;

  // Carbon consumes this constructor input while resolving lightProfile. Keep
  // the authored path as private adapter intent until a resource runtime owns it.
  lightProfilePath = "";

  static FromSOF(value)
  {
    const result = new EveSpotlightLight();
    result.lightData = LightData.fromValues(value?.lightData ?? {});
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfile = value?.lightProfile ?? null;
    result.boosterGainInfluence = value?.boosterGainInfluence === true;
    result.index = Number(value?.index ?? 0) >>> 0;
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
}
