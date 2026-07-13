import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_value, _init_extra_value, _init_valueExposure, _init_extra_valueExposure, _init_externalParameters, _init_extra_externalParameters, _init_defaults, _init_extra_defaults;

/** EveSocketParameterString (eve/socket) - generated from schema shapeHash d055ced5.... */
let _EveSocketParameterSt;
class EveSocketParameterString extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_value, _init_extra_value, _init_valueExposure, _init_extra_valueExposure, _init_externalParameters, _init_extra_externalParameters, _init_defaults, _init_extra_defaults],
      c: [_EveSocketParameterSt, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSocketParameterString",
      family: "eve/socket"
    })], [[[type, type.string], 16, "name"], [[type, type.string], 16, "value"], [type.objectRef("Tr2ExternalParameter"), 0, "valueExposure"], [type.list("Tr2ExternalParameter"), 0, "externalParameters"], [type.list("std::string"), 0, "defaults"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_defaults(this);
  }
  /** m_name (std::string) */
  name = _init_name(this, "");

  /** m_value (std::string) */
  value = (_init_extra_name(this), _init_value(this, ""));

  /** m_valueExposure (Tr2ExternalParameterPtr) */
  valueExposure = (_init_extra_value(this), _init_valueExposure(this, null));

  /** m_externalParameters (PTr2ExternalParameterVector) */
  externalParameters = (_init_extra_valueExposure(this), _init_externalParameters(this, []));

  /** m_defaults (std::vector<std::string>) */
  defaults = (_init_extra_externalParameters(this), _init_defaults(this, []));
  static {
    _initClass();
  }
}

export { _EveSocketParameterSt as EveSocketParameterString };
//# sourceMappingURL=EveSocketParameterString.js.map
