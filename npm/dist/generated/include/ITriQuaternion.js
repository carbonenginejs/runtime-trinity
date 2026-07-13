import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_const, _init_extra_const;

/** ITriQuaternion (include) - generated from schema shapeHash bde34c69.... */
let _ITriQuaternion;
class ITriQuaternion extends CjsModel {
  static {
    ({
      e: [_init_const, _init_extra_const],
      c: [_ITriQuaternion, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITriQuaternion",
      family: "include"
    })], [[[type, type.unknown], 16, "const"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_const(this);
  }
  /** const (Quaternion * in )) */
  const = _init_const(this, 0);
  static {
    _initClass();
  }
}

export { _ITriQuaternion as ITriQuaternion };
//# sourceMappingURL=ITriQuaternion.js.map
