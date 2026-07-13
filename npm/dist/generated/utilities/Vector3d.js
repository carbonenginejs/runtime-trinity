import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_d, _init_extra_d, _init_dDiv, _init_extra_dDiv, _init_norm, _init_extra_norm, _init_xt, _init_extra_xt, _init_yt, _init_extra_yt, _init_zt, _init_extra_zt, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_f, _init_extra_f;

/** Vector3d (utilities) - generated from schema shapeHash 84b4dfee.... */
let _Vector3d;
class Vector3d extends CjsModel {
  static {
    ({
      e: [_init_d, _init_extra_d, _init_dDiv, _init_extra_dDiv, _init_norm, _init_extra_norm, _init_xt, _init_extra_xt, _init_yt, _init_extra_yt, _init_zt, _init_extra_zt, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_f, _init_extra_f],
      c: [_Vector3d, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Vector3d",
      family: "utilities"
    })], [[[type, type.unknown], 16, "d"], [[type, type.unknown], 16, "dDiv"], [[type, type.unknown], 16, "norm"], [[type, type.unknown], 16, "xt"], [[type, type.unknown], 16, "yt"], [[type, type.unknown], 16, "zt"], [[type, type.float64], 16, "x"], [[type, type.float64], 16, "y"], [[type, type.float64], 16, "z"], [[type, type.unknown], 16, "f"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_f(this);
  }
  /** d (x *=) */
  d = _init_d(this, null);

  /** dDiv (x *=) */
  dDiv = (_init_extra_d(this), _init_dDiv(this, null));

  /** norm (norm = 1.0 /) */
  norm = (_init_extra_dDiv(this), _init_norm(this, null));

  /** xt (x =) */
  xt = (_init_extra_norm(this), _init_xt(this, null));

  /** yt (y =) */
  yt = (_init_extra_xt(this), _init_yt(this, null));

  /** zt (z =) */
  zt = (_init_extra_yt(this), _init_zt(this, null));

  /** x (double) */
  x = (_init_extra_zt(this), _init_x(this, 0));

  /** y (double) */
  y = (_init_extra_x(this), _init_y(this, 0));

  /** z (double) */
  z = (_init_extra_y(this), _init_z(this, 0));

  /** f (x =) */
  f = (_init_extra_z(this), _init_f(this, null));
  static {
    _initClass();
  }
}

export { _Vector3d as Vector3d };
//# sourceMappingURL=Vector3d.js.map
