import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_value, _init_extra_value, _init_name, _init_extra_name;

/** _className (eve/socket) - generated from schema shapeHash a683016c.... */
let _className2;
class _className extends CjsModel {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_name, _init_extra_name, _initProto],
      c: [_className2, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "_className",
      family: "eve/socket"
    })], [[[io, io.persist, type, type.unknown], 16, "value"], [[io, io.persist, type, type.unknown], 16, "name"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Used"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetValueToDefault"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_value (unknown) [READWRITE, PERSIST] */
  value = (_initProto(this), _init_value(this, null));

  /** m_name (unknown) [READWRITE, PERSIST] */
  name = (_init_extra_value(this), _init_name(this, null));

  /** Carbon method Used (MAP_METHOD_AND_WRAP). */
  Used(...args) {
    throw new Error("_className.Used is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetValueToDefault -> \ SetValueToDefault (MAP_METHOD_AND_WRAP). */
  SetValueToDefault(...args) {
    throw new Error("_className.SetValueToDefault is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _className2 as _className };
//# sourceMappingURL=_className.js.map
