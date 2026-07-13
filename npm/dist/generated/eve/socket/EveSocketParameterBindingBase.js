import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_bindings, _init_extra_bindings;

/** EveSocketParameterBindingBase (eve/socket) - generated from schema shapeHash d75356dd.... */
let _EveSocketParameterBi;
class EveSocketParameterBindingBase extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_bindings, _init_extra_bindings],
      c: [_EveSocketParameterBi, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSocketParameterBindingBase",
      family: "eve/socket"
    })], [[[type, type.unknown], 16, "name"], [type.list("ITr2ValueBinding"), 0, "bindings"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_bindings(this);
  }
  /** name (m_name =) */
  name = _init_name(this, null);

  /** m_bindings (PITr2ValueBindingVector) */
  bindings = (_init_extra_name(this), _init_bindings(this, []));
  static {
    _initClass();
  }
}

export { _EveSocketParameterBi as EveSocketParameterBindingBase };
//# sourceMappingURL=EveSocketParameterBindingBase.js.map
