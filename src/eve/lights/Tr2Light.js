// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.h
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { carbon, impl, schema, type } from "@carbonenginejs/core-types/schema";
import { PerLightShadowSetting } from "../../generated/eve/lights/enums.js";
import { createCjsLightDataView, setCjsLightDataOwnerValues } from "./CjsLightData.js";


@type.define({ className: "Tr2Light", family: "eve/lights" })
export class Tr2Light extends CjsModel
{
  static LightDataFields = [];

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

  @type.int32
  @schema.enum("LIGHT_TYPE")
  type = Tr2Light.UNDEFINED_LIGHT;

  // Compat view over the flattened light fields (2026-07-23 flatten
  // decision): the flat decorated fields on the concrete light classes are
  // the real storage; this keeps Carbon's GetLightData() reference surface
  // and the runtime-sof separate-node hydration shape working.
  #lightDataView = null;

  get lightData()
  {
    this.#lightDataView ??= createCjsLightDataView(this, this.constructor.LightDataFields);
    return this.#lightDataView;
  }

  SetValues(values = {}, options = {})
  {
    return setCjsLightDataOwnerValues(
      this,
      values,
      options,
      (ownerValues, ownerOptions) => super.SetValues(ownerValues, ownerOptions),
      this.constructor.LightDataFields
    );
  }

  @carbon.method
  @impl.implemented
  SetLightData(lightData)
  {
    return this.SetValues({ lightData });
  }

  @carbon.method
  @impl.implemented
  SetBrightnessMultiplier(multiplier)
  {
    this.SetValues({ brightnessMultiplier: Number(multiplier) });
  }

  @carbon.method
  @impl.implemented
  ChangeLightColor(color)
  {
    return this.SetValues({ color }, { returnBoolean: true });
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

  static LIGHT_TYPE = Tr2Light.LightType;

  static PerLightShadowSetting = PerLightShadowSetting;

}
