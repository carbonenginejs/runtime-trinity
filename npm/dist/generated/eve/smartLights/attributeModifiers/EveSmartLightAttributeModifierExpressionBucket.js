import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightAttributeModifierBucket as _EveSmartLightAttribu$1 } from './EveSmartLightAttributeModifierBucket.js';

let _initClass, _init_expression, _init_extra_expression, _init_name, _init_extra_name, _init_expressionInputs, _init_extra_expressionInputs;

/** EveSmartLightAttributeModifierExpressionBucket (eve/smartLights/attributeModifiers) - generated from schema shapeHash 02cc58c3.... */
let _EveSmartLightAttribu;
class EveSmartLightAttributeModifierExpressionBucket extends _EveSmartLightAttribu$1 {
  static {
    ({
      e: [_init_expression, _init_extra_expression, _init_name, _init_extra_name, _init_expressionInputs, _init_extra_expressionInputs],
      c: [_EveSmartLightAttribu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightAttributeModifierExpressionBucket",
      family: "eve/smartLights/attributeModifiers"
    })], [[[io, io.persistOnly, type, type.expression], 16, "expression"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("ITriScalarFunction")], 16, "expressionInputs"]], 0, void 0, _EveSmartLightAttribu$1));
  }
  constructor(...args) {
    super(...args);
    _init_extra_expressionInputs(this);
  }
  /** m_expression (std::string) [PERSISTONLY] */
  expression = _init_expression(this, "");

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_expression(this), _init_name(this, "bucket"));

  /** m_inputs (PITriScalarFunctionVector) [READ, PERSIST] */
  expressionInputs = (_init_extra_name(this), _init_expressionInputs(this, []));
  static {
    _initClass();
  }
}

export { _EveSmartLightAttribu as EveSmartLightAttributeModifierExpressionBucket };
//# sourceMappingURL=EveSmartLightAttributeModifierExpressionBucket.js.map
