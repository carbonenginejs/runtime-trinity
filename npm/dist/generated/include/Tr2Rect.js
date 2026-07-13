import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_top, _init_extra_top, _init_right, _init_extra_right, _init_bottom, _init_extra_bottom, _init_left, _init_extra_left;

/** Tr2Rect (include) - generated from schema shapeHash 48e5ca2a.... */
let _Tr2Rect;
class Tr2Rect extends CjsModel {
  static {
    ({
      e: [_init_top, _init_extra_top, _init_right, _init_extra_right, _init_bottom, _init_extra_bottom, _init_left, _init_extra_left],
      c: [_Tr2Rect, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Rect",
      family: "include"
    })], [[[type, type.int32], 16, "top"], [[type, type.int32], 16, "right"], [[type, type.int32], 16, "bottom"], [[type, type.int32], 16, "left"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_left(this);
  }
  /** top (int32_t) */
  top = _init_top(this, 0);

  /** right (int32_t) */
  right = (_init_extra_top(this), _init_right(this, 0));

  /** bottom (int32_t) */
  bottom = (_init_extra_right(this), _init_bottom(this, 0));

  /** left (int32_t) */
  left = (_init_extra_bottom(this), _init_left(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2Rect as Tr2Rect };
//# sourceMappingURL=Tr2Rect.js.map
