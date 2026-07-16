import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_name, _init_extra_name, _init_destinationObject, _init_extra_destinationObject, _init_destinationAttribute, _init_extra_destinationAttribute, _init_valid, _init_extra_valid;

/** Tr2ExternalParameter (trinityCore) - generated from schema shapeHash 03b24e53.... */
let _Tr2ExternalParameter;
class Tr2ExternalParameter extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_destinationObject, _init_extra_destinationObject, _init_destinationAttribute, _init_extra_destinationAttribute, _init_valid, _init_extra_valid, _initProto],
      c: [_Tr2ExternalParameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ExternalParameter",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, void 0, type.model("IRoot")], 16, "destinationObject"], [[io, io.notify, io, io.persist, type, type.string], 16, "destinationAttribute"], [[io, io.read, type, type.boolean], 16, "valid"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetValue"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetValue"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_valid(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

  /** m_destinationObject (IRootPtr) [READWRITE, PERSIST, NOTIFY] */
  destinationObject = (_init_extra_name(this), _init_destinationObject(this, null));

  /** m_destinationAttribute (std::string) [READWRITE, PERSIST, NOTIFY] */
  destinationAttribute = (_init_extra_destinationObject(this), _init_destinationAttribute(this, ""));

  /** m_valid (bool) [READ] */
  valid = (_init_extra_destinationAttribute(this), _init_valid(this, false));

  /** Carbon method GetValue (MAP_METHOD_AND_WRAP). */
  GetValue(...args) {
    throw new Error("Tr2ExternalParameter.GetValue is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetValue (MAP_METHOD_AND_WRAP). */
  SetValue(...args) {
    throw new Error("Tr2ExternalParameter.SetValue is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2ExternalParameter as Tr2ExternalParameter };
//# sourceMappingURL=Tr2ExternalParameter.js.map
