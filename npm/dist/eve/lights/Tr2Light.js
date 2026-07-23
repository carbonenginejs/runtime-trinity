import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { PerLightShadowSetting } from '../../generated/eve/lights/enums.js';
import { createCjsLightDataView, setCjsLightDataOwnerValues } from './CjsLightData.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_startTime, _init_extra_startTime, _init_isDynamic, _init_extra_isDynamic, _init_brightnessMultiplier, _init_extra_brightnessMultiplier, _init_boneTransform, _init_extra_boneTransform, _init_lightProfile, _init_extra_lightProfile, _init_lightProfilePath, _init_extra_lightProfilePath, _init_type, _init_extra_type;
let _Tr2Light;
new class extends _identity {
  static [class Tr2Light extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_startTime, _init_extra_startTime, _init_isDynamic, _init_extra_isDynamic, _init_brightnessMultiplier, _init_extra_brightnessMultiplier, _init_boneTransform, _init_extra_boneTransform, _init_lightProfile, _init_extra_lightProfile, _init_lightProfilePath, _init_extra_lightProfilePath, _init_type, _init_extra_type, _initProto],
        c: [_Tr2Light, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2Light",
        family: "eve/lights"
      })], [[[type, type.string], 16, "name"], [[type, type.float64], 16, "startTime"], [[type, type.boolean], 16, "isDynamic"], [[type, type.float32], 16, "brightnessMultiplier"], [[type, type.mat4], 16, "boneTransform"], [type.objectRef("Tr2LightProfileRes"), 0, "lightProfile"], [[type, type.string], 16, "lightProfilePath"], [[type, type.int32, void 0, schema.enum("LIGHT_TYPE")], 16, "type"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetLightData"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetBrightnessMultiplier"], [[carbon, carbon.method, impl, impl.implemented], 18, "ChangeLightColor"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLightData"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBrightnessMultiplier"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"]], 0, void 0, CjsModel));
    }
    name = (_initProto(this), _init_name(this, ""));
    startTime = (_init_extra_name(this), _init_startTime(this, 0));
    isDynamic = (_init_extra_startTime(this), _init_isDynamic(this, false));
    brightnessMultiplier = (_init_extra_isDynamic(this), _init_brightnessMultiplier(this, 1));
    boneTransform = (_init_extra_brightnessMultiplier(this), _init_boneTransform(this, mat4.create()));
    lightProfile = (_init_extra_boneTransform(this), _init_lightProfile(this, null));
    lightProfilePath = (_init_extra_lightProfile(this), _init_lightProfilePath(this, ""));
    type = (_init_extra_lightProfilePath(this), _init_type(this, _Tr2Light.UNDEFINED_LIGHT));

    // Compat view over the flattened light fields (2026-07-23 flatten
    // decision): the flat decorated fields on the concrete light classes are
    // the real storage; this keeps Carbon's GetLightData() reference surface
    // and the runtime-sof separate-node hydration shape working.
    #lightDataView = (_init_extra_type(this), null);
    get lightData() {
      this.#lightDataView ??= createCjsLightDataView(this, this.constructor.LightDataFields);
      return this.#lightDataView;
    }
    SetValues(values = {}, options = {}) {
      return setCjsLightDataOwnerValues(this, values, options, (ownerValues, ownerOptions) => super.SetValues(ownerValues, ownerOptions), this.constructor.LightDataFields);
    }
    SetLightData(lightData) {
      return this.SetValues({
        lightData
      });
    }
    SetBrightnessMultiplier(multiplier) {
      this.SetValues({
        brightnessMultiplier: Number(multiplier)
      });
    }
    ChangeLightColor(color) {
      return this.SetValues({
        color
      }, {
        returnBoolean: true
      });
    }
    GetLightData() {
      return this.lightData;
    }
    GetBrightnessMultiplier() {
      return this.brightnessMultiplier;
    }
    Initialize() {
      // Light-profile resolution is supplied by the resource/runtime adapter.
      return true;
    }
  }];
  LightDataFields = [];
  LightType = Object.freeze({
    UNDEFINED_LIGHT: 0,
    POINT_LIGHT: 1,
    SPOT_LIGHT: 2,
    COUNT: 3
  });
  UNDEFINED_LIGHT = 0;
  POINT_LIGHT = 1;
  SPOT_LIGHT = 2;
  COUNT = 3;
  LIGHT_TYPE = _Tr2Light.LightType;
  PerLightShadowSetting = PerLightShadowSetting;
  constructor() {
    super(_Tr2Light), _initClass();
  }
}();

export { _Tr2Light as Tr2Light };
//# sourceMappingURL=Tr2Light.js.map
