import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightBaseAttributeModifier as _EveSmartLightBaseAtt } from './EveSmartLightBaseAttributeModifier.js';

let _initClass, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves;

/** EveSmartLightAttributeModifierNoise (eve/smartLights/attributeModifiers) - generated from schema shapeHash 60b52eeb.... */
let _EveSmartLightAttribu;
class EveSmartLightAttributeModifierNoise extends _EveSmartLightBaseAtt {
  static {
    ({
      e: [_init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves],
      c: [_EveSmartLightAttribu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightAttributeModifierNoise",
      family: "eve/smartLights/attributeModifiers"
    })], [[[io, io.persist, type, type.float32], 16, "noiseAmplitude"], [[io, io.persist, type, type.float32], 16, "noiseFrequency"], [[io, io.persist, type, type.uint32], 16, "noiseOctaves"]], 0, void 0, _EveSmartLightBaseAtt));
  }
  constructor(...args) {
    super(...args);
    _init_extra_noiseOctaves(this);
  }
  /** m_noiseAmplitude (float) [READWRITE, PERSIST] */
  noiseAmplitude = _init_noiseAmplitude(this, 0);

  /** m_noiseFrequency (float) [READWRITE, PERSIST] */
  noiseFrequency = (_init_extra_noiseAmplitude(this), _init_noiseFrequency(this, 1));

  /** m_noiseOctaves (uint32_t) [READWRITE, PERSIST] */
  noiseOctaves = (_init_extra_noiseFrequency(this), _init_noiseOctaves(this, 1));
  static {
    _initClass();
  }
}

export { _EveSmartLightAttribu as EveSmartLightAttributeModifierNoise };
//# sourceMappingURL=EveSmartLightAttributeModifierNoise.js.map
