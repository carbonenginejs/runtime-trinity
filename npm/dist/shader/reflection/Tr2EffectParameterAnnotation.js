import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_type, _init_extra_type, _init_boolValue, _init_extra_boolValue, _init_intValue, _init_extra_intValue, _init_floatValue, _init_extra_floatValue, _init_stringValue, _init_extra_stringValue;

/** Tr2EffectParameterAnnotation (shader) - generated from schema shapeHash 057c1dbe.... */
let _Tr2EffectParameterAn;
class Tr2EffectParameterAnnotation extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_type, _init_extra_type, _init_boolValue, _init_extra_boolValue, _init_intValue, _init_extra_intValue, _init_floatValue, _init_extra_floatValue, _init_stringValue, _init_extra_stringValue],
      c: [_Tr2EffectParameterAn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2EffectParameterAnnotation",
      family: "shader"
    })], [[[type, type.string], 16, "name"], [[type, type.int32, void 0, schema.enum("Type")], 16, "type"], [[type, type.boolean], 16, "boolValue"], [[type, type.int32], 16, "intValue"], [[type, type.float32], 16, "floatValue"], [[type, type.string], 16, "stringValue"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_stringValue(this);
  }
  /** name (const char*) */
  name = _init_name(this, "");

  /** type (Type - enum Type) */
  type = (_init_extra_name(this), _init_type(this, 0));

  /** boolValue (bool) */
  boolValue = (_init_extra_type(this), _init_boolValue(this, false));

  /** intValue (int) */
  intValue = (_init_extra_boolValue(this), _init_intValue(this, 0));

  /** floatValue (float) */
  floatValue = (_init_extra_intValue(this), _init_floatValue(this, 0));

  /** stringValue (const char*) */
  stringValue = (_init_extra_floatValue(this), _init_stringValue(this, ""));
  static {
    _initClass();
  }
}

export { _Tr2EffectParameterAn as Tr2EffectParameterAnnotation };
//# sourceMappingURL=Tr2EffectParameterAnnotation.js.map
