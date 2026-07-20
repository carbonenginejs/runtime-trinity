// Source: E:\carbonengine\trinity\trinity\Lights\Tr2SpotLight.cpp
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2SpotLight_Blue.cpp
import { io, type } from "@carbonenginejs/core-types/schema";
import { defineCjsLightDataAccessors } from "./CjsLightData.js";
import { Tr2Light } from "./Tr2Light.js";


@type.define({ className: "Tr2SpotLight", family: "eve/lights" })
export class Tr2SpotLight extends Tr2Light
{
  static LightDataFields = [
    "flags", "position", "rotation", "boneIndex", "radius", "innerRadius",
    "innerAngle", "outerAngle", "color", "brightness", "noiseAmplitude",
    "noiseFrequency", "noiseOctaves", "castsShadows", "isVolumetric"
  ];

  @io.persist
  @type.string
  name = "";

  @io.notify
  @io.persist
  @type.string
  lightProfilePath = "";

  @io.read
  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  type = Tr2Light.SPOT_LIGHT;

}

defineCjsLightDataAccessors(Tr2SpotLight, Tr2SpotLight.LightDataFields);
