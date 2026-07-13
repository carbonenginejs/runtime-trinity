import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_const, _init_extra_const, _init_const2, _init_extra_const2;

/** CASConstants (postProcess) - generated from schema shapeHash af13b248.... */
let _CASConstants;
class CASConstants extends CjsModel {
  static {
    ({
      e: [_init_const, _init_extra_const, _init_const2, _init_extra_const2],
      c: [_CASConstants, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "CASConstants",
      family: "postProcess"
    })], [[[type, type.unknown], 16, "const0"], [[type, type.unknown], 16, "const1"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_const2(this);
  }
  /** const0 (uintfloat4) */
  const0 = _init_const(this, null);

  /** const1 (uintfloat4) */
  const1 = (_init_extra_const(this), _init_const2(this, null));
  static {
    _initClass();
  }
}

export { _CASConstants as CASConstants };
//# sourceMappingURL=CASConstants.js.map
