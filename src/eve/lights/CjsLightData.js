// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.h
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { schema, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "CjsLightData",
  sourceClass: "LightData",
  aliases: ["LightData"],
  family: "eve/lights"
})
export class CjsLightData extends CjsModel
{
  static Fields = [
    "position", "color", "brightness", "noiseAmplitude", "noiseFrequency",
    "noiseOctaves", "radius", "innerRadius", "rotation", "outerAngle",
    "innerAngle", "texturePath", "boneIndex", "flags", "startTime",
    "castsShadows", "isVolumetric"
  ];

  @type.vec3
  position = vec3.create();

  @type.color
  color = vec4.createLinear();

  @type.float32
  brightness = 1;

  @type.float32
  noiseAmplitude = 0;

  @type.float32
  noiseFrequency = 1;

  @type.uint32
  noiseOctaves = 1;

  @type.float32
  radius = 0;

  @type.float32
  innerRadius = 0;

  @type.quat
  rotation = quat.create();

  @type.float32
  outerAngle = 0;

  @type.float32
  innerAngle = 0;

  @type.string
  texturePath = "";

  @type.int32
  boneIndex = -1;

  @type.uint16
  flags = 1;

  @type.float64
  startTime = 0;

  @type.int32
  @schema.enum("PerLightShadowSetting")
  castsShadows = 0;

  @type.boolean
  isVolumetric = false;

  static PerLightShadowSetting = Object.freeze({
    DISABLED: 0,
    ENABLED_ONLY_ON_HIGH_QUALITY: 1,
    ALWAYS_ENABLED: 2
  });
}

export function defineCjsLightDataAccessors(Constructor, fieldNames)
{
  const descriptors = {};
  for (const fieldName of fieldNames)
  {
    descriptors[fieldName] = {
      configurable: true,
      get()
      {
        return this.lightData[fieldName];
      },
      set(value)
      {
        this.lightData.SetValues({ [fieldName]: value });
      }
    };
  }
  Object.defineProperties(Constructor.prototype, descriptors);
}

export function setCjsLightDataOwnerValues(owner, values, options, setOwnerValues, fieldNames)
{
  if (!values || typeof values !== "object") return setOwnerValues(values, options);

  const fieldSet = new Set(fieldNames);
  const ownerValues = {};
  const lightValues = {};
  let hasLightValues = false;

  for (const [key, value] of Object.entries(values))
  {
    if (key === "lightData") continue;
    if (fieldSet.has(key))
    {
      lightValues[key] = value;
      hasLightValues = true;
    }
    else
    {
      ownerValues[key] = value;
    }
  }

  if (Object.prototype.hasOwnProperty.call(values, "lightData"))
  {
    const nested = values.lightData?.GetValues?.() ?? values.lightData;
    if (nested && typeof nested === "object")
    {
      for (const fieldName of CjsLightData.Fields)
      {
        if (Object.prototype.hasOwnProperty.call(nested, fieldName))
        {
          lightValues[fieldName] = nested[fieldName];
          hasLightValues = true;
        }
      }
    }
  }

  const ownerChanged = setOwnerValues(ownerValues, options);
  const lightChanged = hasLightValues ? owner.lightData.SetValues(lightValues, options) : false;

  if (options?.returnBoolean === true) return ownerChanged === true || lightChanged === true;

  const changed = new Set();
  if (ownerChanged instanceof Set)
  {
    for (const fieldName of ownerChanged) changed.add(fieldName);
  }
  if (lightChanged) changed.add("lightData");
  return changed.size ? changed : false;
}
