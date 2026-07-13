import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_const, _init_extra_const;

/** ITriColor (include) - generated from schema shapeHash 30191a6b.... */
let _ITriColor;
class ITriColor extends CjsModel {
  static {
    ({
      e: [_init_const, _init_extra_const],
      c: [_ITriColor, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITriColor",
      family: "include"
    })], [[type.rawStruct("::Color in )"), 0, "const"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_const(this);
  }
  /** const (::Color * in )) */
  const = _init_const(this, 0);
  static {
    _initClass();
  }
}

export { _ITriColor as ITriColor };
//# sourceMappingURL=ITriColor.js.map
