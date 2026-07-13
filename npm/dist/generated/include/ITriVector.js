import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_const, _init_extra_const;

/** ITriVector (include) - generated from schema shapeHash 0d9037bc.... */
let _ITriVector;
class ITriVector extends CjsModel {
  static {
    ({
      e: [_init_const, _init_extra_const],
      c: [_ITriVector, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITriVector",
      family: "include"
    })], [[[type, type.unknown], 16, "const"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_const(this);
  }
  /** const (Vector3 * in )) */
  const = _init_const(this, 0);
  static {
    _initClass();
  }
}

export { _ITriVector as ITriVector };
//# sourceMappingURL=ITriVector.js.map
