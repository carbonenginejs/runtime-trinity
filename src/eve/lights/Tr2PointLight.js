// Source: E:\carbonengine\trinity\trinity\Lights\Tr2PointLight.cpp
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2PointLight_Blue.cpp
import { io, type } from "@carbonenginejs/core-types/schema";
import { defineCjsLightDataAccessors } from "./CjsLightData.js";
import { Tr2Light } from "./Tr2Light.js";


@type.define({ className: "Tr2PointLight", family: "eve/lights" })
export class Tr2PointLight extends Tr2Light
{
  static LightDataFields = [
    "flags", "position", "rotation", "boneIndex", "radius", "innerRadius",
    "color", "brightness", "noiseAmplitude", "noiseFrequency",
    "noiseOctaves", "castsShadows", "isVolumetric"
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

  type = Tr2Light.POINT_LIGHT;

}

defineCjsLightDataAccessors(Tr2PointLight, Tr2PointLight.LightDataFields);
