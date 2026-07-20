// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpotlightSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpotlightSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { io, type } from "@carbonenginejs/core-types/schema";
import { CjsLightData } from "./lights/CjsLightData.js";


@type.define({ className: "EveSpotlightLight", family: "eve/attachment/spotlights" })
export class EveSpotlightLight extends CjsModel
{
  @io.owned
  @type.struct("CjsLightData")
  lightData = new CjsLightData();

  @type.mat4
  boneMatrix = mat4.create();

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.boolean
  boosterGainInfluence = false;

  @type.uint32
  index = 0;

  @type.string
  lightProfilePath = "";

  static FromSOF(value)
  {
    const values = value ?? {};
    return EveSpotlightLight.from({
      ...values,
      lightProfilePath: String(values.lightProfilePath ?? values.lightData?.texturePath ?? "")
    });
  }
}
