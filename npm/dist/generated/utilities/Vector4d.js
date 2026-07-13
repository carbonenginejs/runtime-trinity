import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_d, _init_extra_d, _init_dDiv, _init_extra_dDiv, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_w, _init_extra_w, _init_f, _init_extra_f;

/** Vector4d (utilities) - generated from schema shapeHash 733e0427.... */
let _Vector4d;
class Vector4d extends CjsModel {
  static {
    ({
      e: [_init_d, _init_extra_d, _init_dDiv, _init_extra_dDiv, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_w, _init_extra_w, _init_f, _init_extra_f],
      c: [_Vector4d, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Vector4d",
      family: "utilities"
    })], [[[type, type.unknown], 16, "d"], [[type, type.unknown], 16, "dDiv"], [[type, type.float64], 16, "x"], [[type, type.float64], 16, "y"], [[type, type.float64], 16, "z"], [[type, type.float64], 16, "w"], [[type, type.unknown], 16, "f"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_f(this);
  }
  /** d (x *=) */
  d = _init_d(this, null);

  /** dDiv (x *=) */
  dDiv = (_init_extra_d(this), _init_dDiv(this, null));

  /** x (double) */
  x = (_init_extra_dDiv(this), _init_x(this, 0));

  /** y (double) */
  y = (_init_extra_x(this), _init_y(this, 0));

  /** z (double) */
  z = (_init_extra_y(this), _init_z(this, 0));

  /** w (double) */
  w = (_init_extra_z(this), _init_w(this, 0));

  /** f (x =) */
  f = (_init_extra_w(this), _init_f(this, null));
  static {
    _initClass();
  }
}

export { _Vector4d as Vector4d };
//# sourceMappingURL=Vector4d.js.map
