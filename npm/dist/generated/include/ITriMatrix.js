import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init__, _init_extra__, _init_const, _init_extra_const;

/** ITriMatrix (include) - generated from schema shapeHash ced99aa4.... */
let _ITriMatrix;
class ITriMatrix extends CjsModel {
  static {
    ({
      e: [_init__, _init_extra__, _init_const, _init_extra_const],
      c: [_ITriMatrix, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITriMatrix",
      family: "include"
    })], [[[type, type.float32], 16, "_11"], [[type, type.unknown], 16, "const"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_const(this);
  }
  /** _11 (float) */
  _11 = _init__(this, 0);

  /** const (Matrix * in )) */
  const = (_init_extra__(this), _init_const(this, 0));
  static {
    _initClass();
  }
}

export { _ITriMatrix as ITriMatrix };
//# sourceMappingURL=ITriMatrix.js.map
