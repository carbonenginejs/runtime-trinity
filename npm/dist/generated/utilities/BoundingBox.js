import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_min, _init_extra_min, _init_max, _init_extra_max;

/** BoundingBox (utilities) - generated from schema shapeHash a1f4788e.... */
let _BoundingBox;
class BoundingBox extends CjsModel {
  static {
    ({
      e: [_init_min, _init_extra_min, _init_max, _init_extra_max],
      c: [_BoundingBox, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "BoundingBox",
      family: "utilities"
    })], [[[type, type.unknown], 16, "min"], [[type, type.unknown], 16, "max"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_max(this);
  }
  /** min (granny_real32) */
  min = _init_min(this, null);

  /** max (granny_real32) */
  max = (_init_extra_min(this), _init_max(this, null));
  static {
    _initClass();
  }
}

export { _BoundingBox as BoundingBox };
//# sourceMappingURL=BoundingBox.js.map
