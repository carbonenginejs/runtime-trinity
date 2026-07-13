import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_factionColor, _init_extra_factionColor, _init_useFactionColor, _init_extra_useFactionColor, _init_attributeModifiers, _init_extra_attributeModifiers, _init_customColor, _init_extra_customColor;

/** EveSmartLightBaseGroup (eve/smartLights) - generated from schema shapeHash 8eec2ba5.... */
let _EveSmartLightBaseGro;
class EveSmartLightBaseGroup extends CjsModel {
  static {
    ({
      e: [_init_factionColor, _init_extra_factionColor, _init_useFactionColor, _init_extra_useFactionColor, _init_attributeModifiers, _init_extra_attributeModifiers, _init_customColor, _init_extra_customColor],
      c: [_EveSmartLightBaseGro, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightBaseGroup",
      family: "eve/smartLights"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "factionColor"], [[io, io.persist, type, type.boolean], 16, "useFactionColor"], [[io, io.persist, void 0, type.list("IEveSmartLightGroupAttributeModifier")], 16, "attributeModifiers"], [[io, io.persist, type, type.color], 16, "customColor"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_customColor(this);
  }
  /** m_selectedColor (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  factionColor = _init_factionColor(this, -1);

  /** m_useFactionColor (bool) [READWRITE, PERSIST] */
  useFactionColor = (_init_extra_factionColor(this), _init_useFactionColor(this, false));

  /** m_attributeModifiers (PIEveSmartLightGroupAttributeModifierVector) [READ, PERSIST] */
  attributeModifiers = (_init_extra_useFactionColor(this), _init_attributeModifiers(this, []));

  /** m_color (Color) [READWRITE, PERSIST] */
  customColor = (_init_extra_attributeModifiers(this), _init_customColor(this, vec4.createLinear()));
  static {
    _initClass();
  }
}

export { _EveSmartLightBaseGro as EveSmartLightBaseGroup };
//# sourceMappingURL=EveSmartLightBaseGroup.js.map
