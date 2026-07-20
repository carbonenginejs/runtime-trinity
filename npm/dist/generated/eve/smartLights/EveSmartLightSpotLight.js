import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightPointLight as _EveSmartLightPointLi } from './EveSmartLightPointLight.js';

let _initClass, _init_innerAngle, _init_extra_innerAngle, _init_outerAngle, _init_extra_outerAngle;

/** EveSmartLightSpotLight (eve/smartLights) - generated from schema shapeHash e98199f3.... */
let _EveSmartLightSpotLig;
class EveSmartLightSpotLight extends _EveSmartLightPointLi {
  static {
    ({
      e: [_init_innerAngle, _init_extra_innerAngle, _init_outerAngle, _init_extra_outerAngle],
      c: [_EveSmartLightSpotLig, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightSpotLight",
      family: "eve/smartLights"
    })], [[[io, io.persist, type, type.float32], 16, "innerAngle"], [[io, io.persist, type, type.float32], 16, "outerAngle"]], 0, void 0, _EveSmartLightPointLi));
  }
  constructor(...args) {
    super(...args);
    _init_extra_outerAngle(this);
  }
  /** m_lightGroupData.innerAngle (LightData) [READWRITE, PERSIST] */
  innerAngle = _init_innerAngle(this, 0);

  /** m_lightGroupData.outerAngle (LightData) [READWRITE, PERSIST] */
  outerAngle = (_init_extra_innerAngle(this), _init_outerAngle(this, 0));
  static {
    _initClass();
  }
}

export { _EveSmartLightSpotLig as EveSmartLightSpotLight };
//# sourceMappingURL=EveSmartLightSpotLight.js.map
