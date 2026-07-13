// Source: E:\carbonengine\trinity\trinity\Lights\Tr2TexturedPointLight.h
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2TexturedPointLight.cpp
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2TexturedPointLight_Blue.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { Tr2Light } from "./Tr2Light.js";
import { Tr2PointLight } from "./Tr2PointLight.js";


@type.define({ className: "Tr2TexturedPointLight", family: "eve/lights" })
export class Tr2TexturedPointLight extends Tr2PointLight
{
  static LightDataFields = Object.freeze([
    ...Tr2PointLight.LightDataFields,
    "texturePath"
  ]);

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.uint16
  flags = 1;

  @io.persist
  @type.vec3
  position = vec3.create();

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.notify
  @io.persist
  @type.int32
  boneIndex = -1;

  @io.persist
  @type.float32
  radius = 0;

  @io.persist
  @type.float32
  innerRadius = 0;

  @io.notify
  @io.persist
  @type.color
  color = vec4.createLinear();

  @io.notify
  @io.persist
  @type.float32
  brightness = 1;

  @io.persist
  @type.float32
  noiseAmplitude = 0;

  @io.persist
  @type.float32
  noiseFrequency = 1;

  @io.persist
  @type.uint32
  noiseOctaves = 1;

  @io.notify
  @io.persist
  @type.string
  texturePath = "";

  @io.read
  @type.objectRef("TriTextureRes")
  texture = null;

  @io.notify
  @io.persist
  @type.int32
  @schema.enum("PerLightShadowSetting")
  castsShadows = 0;

  @io.notify
  @io.persist
  @type.boolean
  isVolumetric = false;

  @io.notify
  @io.persist
  @type.string
  lightProfilePath = "";

  @io.read
  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  isDynamic = true;
  type = Tr2Light.POINT_LIGHT;

  #saturation = 1;

  constructor(...args)
  {
    super(...args);
    Tr2Light.BindLightDataFields(this, Tr2TexturedPointLight.LightDataFields);
  }

  @carbon.method
  @impl.implemented
  SetSaturation(saturation)
  {
    this.#saturation = Number(saturation);
  }
}
