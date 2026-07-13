import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightBaseAttributeModifier as _EveSmartLightBaseAtt } from './EveSmartLightBaseAttributeModifier.js';

let _initClass, _init_attributeModifiers, _init_extra_attributeModifiers, _init_name, _init_extra_name;

/** EveSmartLightAttributeModifierBucket (eve/smartLights/attributeModifiers) - generated from schema shapeHash cade668b.... */
let _EveSmartLightAttribu;
class EveSmartLightAttributeModifierBucket extends _EveSmartLightBaseAtt {
  static {
    ({
      e: [_init_attributeModifiers, _init_extra_attributeModifiers, _init_name, _init_extra_name],
      c: [_EveSmartLightAttribu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightAttributeModifierBucket",
      family: "eve/smartLights/attributeModifiers"
    })], [[[io, io.notify, io, io.persist, void 0, type.list("IEveSmartLightGroupAttributeModifier")], 16, "attributeModifiers"], [[io, io.persist, type, type.string], 16, "name"]], 0, void 0, _EveSmartLightBaseAtt));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_attributeModifiers (PIEveSmartLightGroupAttributeModifierVector) [READ, PERSIST, NOTIFY] */
  attributeModifiers = _init_attributeModifiers(this, []);

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_attributeModifiers(this), _init_name(this, "bucket"));
  static {
    _initClass();
  }
}

export { _EveSmartLightAttribu as EveSmartLightAttributeModifierBucket };
//# sourceMappingURL=EveSmartLightAttributeModifierBucket.js.map
