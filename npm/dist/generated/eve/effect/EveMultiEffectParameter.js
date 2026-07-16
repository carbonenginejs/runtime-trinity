import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_type, _init_extra_type, _init_name, _init_extra_name, _init_object, _init_extra_object;

/** EveMultiEffectParameter (eve/effect) - generated from schema shapeHash 4538307e.... */
let _EveMultiEffectParame;
new class extends _identity {
  static [class EveMultiEffectParameter extends CjsModel {
    static {
      ({
        e: [_init_type, _init_extra_type, _init_name, _init_extra_name, _init_object, _init_extra_object],
        c: [_EveMultiEffectParame, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveMultiEffectParameter",
        family: "eve/effect"
      })], [[[io, io.readwrite, type, type.int32, void 0, schema.enum("ParameterType")], 16, "type"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.readwrite, void 0, type.objectRef("IRoot")], 16, "object"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_object(this);
    }
    /** m_type (ParameterType - enum ParameterType) [READWRITE, ENUM] */
    type = _init_type(this, 3);

    /** m_name (BlueSharedString) [READWRITE, PERSIST] */
    name = (_init_extra_type(this), _init_name(this, ""));

    /** m_object (IRootPtr) [READWRITE, NOTIFY] */
    object = (_init_extra_name(this), _init_object(this, null));
  }];
  ParameterType = Object.freeze({
    TYPE_EVESPACEOBJECT: 0,
    TYPE_EVEEFFECTROOT: 1,
    TYPE_ANYTHING: 2,
    TYPE_UNDEFINED: 3
  });
  constructor() {
    super(_EveMultiEffectParame), _initClass();
  }
}();

export { _EveMultiEffectParame as EveMultiEffectParameter };
//# sourceMappingURL=EveMultiEffectParameter.js.map
