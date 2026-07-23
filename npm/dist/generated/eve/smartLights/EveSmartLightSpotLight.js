import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { defineCjsLightDataAccessors } from '../../../eve/lights/CjsLightData.js';
import { Tr2Light as _Tr2Light } from '../../../eve/lights/Tr2Light.js';
import { EveSmartLightPointLight as _EveSmartLightPointLi } from './EveSmartLightPointLight.js';

let _initProto, _initClass;

/** EveSmartLightSpotLight (eve/smartLights) - generated from schema shapeHash e98199f3.... */
let _EveSmartLightSpotLig;
new class extends _identity {
  static [class EveSmartLightSpotLight extends _EveSmartLightPointLi {
    static {
      ({
        e: [_initProto],
        c: [_EveSmartLightSpotLig, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveSmartLightSpotLight",
        family: "eve/smartLights"
      })], [[[carbon, carbon.method, impl, impl.notImplemented], 18, "RenderDebugInfo"]], 0, void 0, _EveSmartLightPointLi));
    }
    /** m_lightType override - the constructor's only job (EveSmartLightSpotLight.cpp:7-11). */
    lightType = (_initProto(this), _Tr2Light.SPOT_LIGHT);

    /** Carbon method RenderDebugInfo (EveSmartLightSpotLight.cpp:13-56). */
    RenderDebugInfo(..._args) {
      throw new Error("EveSmartLightSpotLight.RenderDebugInfo is not implemented in CarbonEngineJS.");
    }
  }];
  LightDataFields = [..._EveSmartLightPointLi.LightDataFields, "innerAngle", "outerAngle"];
  constructor() {
    super(_EveSmartLightSpotLig), _initClass();
  }
}();
defineCjsLightDataAccessors(_EveSmartLightSpotLig, ["innerAngle", "outerAngle"]);

export { _EveSmartLightSpotLig as EveSmartLightSpotLight };
//# sourceMappingURL=EveSmartLightSpotLight.js.map
