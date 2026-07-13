import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightAttributeModifierBucket as _EveSmartLightAttribu$1 } from './EveSmartLightAttributeModifierBucket.js';

let _initClass, _init_variableName, _init_extra_variableName, _init_value, _init_extra_value, _init_invertReceivedValue, _init_extra_invertReceivedValue, _init_defaultValue, _init_extra_defaultValue;

/** EveSmartLightAttributeModifierControllerVariableListener (eve/smartLights/attributeModifiers) - generated from schema shapeHash 8438774e.... */
let _EveSmartLightAttribu;
class EveSmartLightAttributeModifierControllerVariableListener extends _EveSmartLightAttribu$1 {
  static {
    ({
      e: [_init_variableName, _init_extra_variableName, _init_value, _init_extra_value, _init_invertReceivedValue, _init_extra_invertReceivedValue, _init_defaultValue, _init_extra_defaultValue],
      c: [_EveSmartLightAttribu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightAttributeModifierControllerVariableListener",
      family: "eve/smartLights/attributeModifiers"
    })], [[[io, io.persist, type, type.string], 16, "variableName"], [[io, io.notify, io, io.persist, type, type.float32], 16, "value"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "invertReceivedValue"], [[io, io.persist, type, type.float32], 16, "defaultValue"]], 0, void 0, _EveSmartLightAttribu$1));
  }
  constructor(...args) {
    super(...args);
    _init_extra_defaultValue(this);
  }
  /** m_variableName (std::string) [READWRITE, PERSIST] */
  variableName = _init_variableName(this, "");

  /** m_value (float) [READWRITE, PERSIST, NOTIFY] */
  value = (_init_extra_variableName(this), _init_value(this, 0));

  /** m_invertReceivedValue (bool) [READWRITE, PERSIST, NOTIFY] */
  invertReceivedValue = (_init_extra_value(this), _init_invertReceivedValue(this, false));

  /** m_defaultValue (float) [READWRITE, PERSIST] */
  defaultValue = (_init_extra_invertReceivedValue(this), _init_defaultValue(this, 0));
  static {
    _initClass();
  }
}

export { _EveSmartLightAttribu as EveSmartLightAttributeModifierControllerVariableListener };
//# sourceMappingURL=EveSmartLightAttributeModifierControllerVariableListener.js.map
