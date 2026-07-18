// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveHazeSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveHazeSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { type } from "@carbonenginejs/core-types/schema";
import { LightData } from "../generated/eve/lights/LightData.js";


@type.define({ className: "EveHazeSetLight", family: "eve/attachment/haze" })
export class EveHazeSetLight extends CjsModel
{
  @type.rawStruct("LightData")
  lightData = new LightData();

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.uint32
  index = 0;

  @type.boolean
  boosterGainInfluence = false;

  @type.mat4
  boneMatrix = mat4.create();

  @type.string
  lightProfilePath = "";

  static FromSOF(value)
  {
    const result = new EveHazeSetLight();
    result.lightData = LightData.from(value?.lightData ?? {});
    result.lightProfile = value?.lightProfile ?? null;
    result.index = Number(value?.index ?? 0) >>> 0;
    result.boosterGainInfluence = value?.boosterGainInfluence === true;
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
}
