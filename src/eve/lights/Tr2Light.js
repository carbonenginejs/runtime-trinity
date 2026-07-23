// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.h
// Source: E:\carbonengine\trinity\trinity\Lights\Tr2Light.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { vec3 } from "@carbonenginejs/core-math/vec3";
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

  /** Carbon Tr2Light::GetLight (Tr2Light.cpp:152-163): position and radius
   * straight from the light data, color = authored rgb * brightness. Carbon's
   * three reference out-params become one out record (JS out-params go last
   * and are returned). The color is the rgb triple - the alpha channel is
   * unused by every Carbon consumer of this method (EveChildCloud2's light
   * block takes GetXYZ). */
  @carbon.method
  @impl.adapted
  @impl.reason("The Perlin noise flicker (cpp:157-161) reads the global frame clock (BeOS GetCurrentFrameTime) - an engine seam; the base brightness is used until it lands.")
  GetLight(out = { position: vec3.create(), radius: 0, color: vec3.create() })
  {
    const lightData = this.lightData;
    const position = lightData.position;
    if (position)
    {
      vec3.copy(out.position, position);
    }
    out.radius = lightData.radius ?? 0;
    const brightness = lightData.brightness ?? 0;
    const color = lightData.color;
    out.color[0] = (color?.[0] ?? 0) * brightness;
    out.color[1] = (color?.[1] ?? 0) * brightness;
    out.color[2] = (color?.[2] ?? 0) * brightness;
    return out;
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
