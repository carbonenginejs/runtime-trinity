// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.h
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { carbon, impl, schema, type } from "@carbonenginejs/core-types/schema";
import { LightData } from "../../generated/eve/lights/LightData.js";


@type.define({ className: "Tr2Light", family: "eve/lights" })
export class Tr2Light extends CjsModel
{
  static LightType = Object.freeze({
    UNDEFINED_LIGHT: 0,
    POINT_LIGHT: 1,
    SPOT_LIGHT: 2,
    COUNT: 3
  });

  static UNDEFINED_LIGHT = 0;
  static POINT_LIGHT = 1;
  static SPOT_LIGHT = 2;
  static COUNT = 3;

  static BindLightDataFields(target, fieldNames)
  {
    for (const fieldName of fieldNames)
    {
      const initialValue = target[fieldName];
      target.lightData[fieldName] = initialValue;
      delete target[fieldName];
      Object.defineProperty(target, fieldName, {
        configurable: true,
        enumerable: true,
        get()
        {
          return this.lightData?.[fieldName];
        },
        set(value)
        {
          if (!this.lightData || typeof this.lightData !== "object")
          {
            this.lightData = new LightData();
          }
          const current = this.lightData[fieldName];
          if (ArrayBuffer.isView(current) && (ArrayBuffer.isView(value) || Array.isArray(value)))
          {
            current.set(value);
          }
          else
          {
            this.lightData[fieldName] = value;
          }
        }
      });
    }
  }

  @type.string
  name = "";

  @type.float64
  startTime = 0;

  @type.boolean
  isDynamic = false;

  @type.float32
  brightnessMultiplier = 1;

  @type.mat4
  boneTransform = mat4.create();

  @type.objectRef("Tr2LightProfileRes")
  lightProfile = null;

  @type.string
  lightProfilePath = "";

  @type.rawStruct("LightData")
  lightData = new LightData();

  @type.int32
  @schema.enum("LIGHT_TYPE")
  type = Tr2Light.UNDEFINED_LIGHT;

  @carbon.method
  @impl.implemented
  SetLightData(lightData)
  {
    this.lightData = lightData instanceof LightData
      ? LightData.fromValues(lightData)
      : LightData.fromValues(lightData ?? {});
  }

  @carbon.method
  @impl.implemented
  SetBrightnessMultiplier(multiplier)
  {
    this.brightnessMultiplier = Number(multiplier);
  }

  @carbon.method
  @impl.implemented
  ChangeLightColor(color)
  {
    this.lightData.color.set(color);
  }

  @carbon.method
  @impl.implemented
  GetLightData()
  {
    return this.lightData;
  }

  @carbon.method
  @impl.implemented
  GetBrightnessMultiplier()
  {
    return this.brightnessMultiplier;
  }

  @carbon.method
  @impl.adapted
  Initialize()
  {
    // Light-profile resolution is supplied by the resource/runtime adapter.
    return true;
  }
}
