// Source: E:\carbonengine\trinity\trinity\Lights\Tr2TexturedPointLight.h
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2TexturedPointLight.cpp
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2TexturedPointLight_Blue.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { defineCjsLightDataAccessors } from "./CjsLightData.js";
import { Tr2Light } from "./Tr2Light.js";
import { Tr2PointLight } from "./Tr2PointLight.js";


@type.define({ className: "Tr2TexturedPointLight", family: "eve/lights" })
export class Tr2TexturedPointLight extends Tr2PointLight
{
  static LightDataFields = [
    ...Tr2PointLight.LightDataFields,
    "texturePath"
  ];

  @io.read
  @type.objectRef("TriTextureRes")
  texture = null;

  isDynamic = true;
  type = Tr2Light.POINT_LIGHT;

  #saturation = 1;

  @carbon.method
  @impl.implemented
  SetSaturation(saturation)
  {
    this.#saturation = Number(saturation);
  }
}

defineCjsLightDataAccessors(Tr2TexturedPointLight, ["texturePath"]);
