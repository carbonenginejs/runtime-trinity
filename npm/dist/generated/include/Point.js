import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_y, _init_extra_y, _init_x, _init_extra_x;

/** Point (include) - generated from schema shapeHash 9f264888.... */
let _Point;
class Point extends CjsModel {
  static {
    ({
      e: [_init_y, _init_extra_y, _init_x, _init_extra_x],
      c: [_Point, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Point",
      family: "include"
    })], [[[type, type.int32], 16, "y"], [[type, type.int32], 16, "x"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_x(this);
  }
  /** y (int32_t) */
  y = _init_y(this, 0);

  /** x (int32_t) */
  x = (_init_extra_y(this), _init_x(this, 0));
  static {
    _initClass();
  }
}

export { _Point as Point };
//# sourceMappingURL=Point.js.map
