import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_center, _init_extra_center, _init_sizes, _init_extra_sizes;

/** Obb (utilities) - generated from schema shapeHash c2a1639f.... */
let _Obb;
class Obb extends CjsModel {
  static {
    ({
      e: [_init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_center, _init_extra_center, _init_sizes, _init_extra_sizes],
      c: [_Obb, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Obb",
      family: "utilities"
    })], [[[type, type.vec3], 16, "x"], [[type, type.vec3], 16, "y"], [[type, type.vec3], 16, "z"], [[type, type.vec3], 16, "center"], [[type, type.vec3], 16, "sizes"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_sizes(this);
  }
  /** x (Vector3) */
  x = _init_x(this, vec3.create());

  /** y (Vector3) */
  y = (_init_extra_x(this), _init_y(this, vec3.create()));

  /** z (Vector3) */
  z = (_init_extra_y(this), _init_z(this, vec3.create()));

  /** center (Vector3) */
  center = (_init_extra_z(this), _init_center(this, vec3.create()));

  /** sizes (Vector3) */
  sizes = (_init_extra_center(this), _init_sizes(this, vec3.create()));
  static {
    _initClass();
  }
}

export { _Obb as Obb };
//# sourceMappingURL=Obb.js.map
