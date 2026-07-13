import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightBaseAttributeModifier as _EveSmartLightBaseAtt } from './EveSmartLightBaseAttributeModifier.js';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_factionColor, _init_extra_factionColor, _init_blendValue, _init_extra_blendValue, _init_useFactionColor, _init_extra_useFactionColor, _init_blendColor, _init_extra_blendColor, _init_brightnessMultiplier, _init_extra_brightnessMultiplier, _init_saturationMultiplier, _init_extra_saturationMultiplier;

/** EveSmartLightAttributeModifierColor (eve/smartLights/attributeModifiers) - generated from schema shapeHash 1d22dfd5.... */
let _EveSmartLightAttribu;
class EveSmartLightAttributeModifierColor extends _EveSmartLightBaseAtt {
  static {
    ({
      e: [_init_factionColor, _init_extra_factionColor, _init_blendValue, _init_extra_blendValue, _init_useFactionColor, _init_extra_useFactionColor, _init_blendColor, _init_extra_blendColor, _init_brightnessMultiplier, _init_extra_brightnessMultiplier, _init_saturationMultiplier, _init_extra_saturationMultiplier],
      c: [_EveSmartLightAttribu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightAttributeModifierColor",
      family: "eve/smartLights/attributeModifiers"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "factionColor"], [[io, io.persist, type, type.float32], 16, "blendValue"], [[io, io.persist, type, type.boolean], 16, "useFactionColor"], [[io, io.persist, type, type.color], 16, "blendColor"], [[io, io.persist, type, type.float32], 16, "brightnessMultiplier"], [[io, io.persist, type, type.float32], 16, "saturationMultiplier"]], 0, void 0, _EveSmartLightBaseAtt));
  }
  constructor(...args) {
    super(...args);
    _init_extra_saturationMultiplier(this);
  }
  /** m_selectedColor (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  factionColor = _init_factionColor(this, -1);

  /** m_blendValue (float) [READWRITE, PERSIST] */
  blendValue = (_init_extra_factionColor(this), _init_blendValue(this, 1));

  /** m_useFactionColor (bool) [READWRITE, PERSIST] */
  useFactionColor = (_init_extra_blendValue(this), _init_useFactionColor(this, false));

  /** m_blendColor (Color) [READWRITE, PERSIST] */
  blendColor = (_init_extra_useFactionColor(this), _init_blendColor(this, vec4.createLinear()));

  /** m_brightnessMultiplier (float) [READWRITE, PERSIST] */
  brightnessMultiplier = (_init_extra_blendColor(this), _init_brightnessMultiplier(this, 1));

  /** m_saturationMultiplier (float) [READWRITE, PERSIST] */
  saturationMultiplier = (_init_extra_brightnessMultiplier(this), _init_saturationMultiplier(this, 1));
  static {
    _initClass();
  }
}

export { _EveSmartLightAttribu as EveSmartLightAttributeModifierColor };
//# sourceMappingURL=EveSmartLightAttributeModifierColor.js.map
