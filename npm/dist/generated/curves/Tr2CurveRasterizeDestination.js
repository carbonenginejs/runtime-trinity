import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_width, _init_extra_width, _init_stride, _init_extra_stride, _init_data, _init_extra_data;

/** Tr2CurveRasterizeDestination (curves) - generated from schema shapeHash 8f44878c.... */
let _Tr2CurveRasterizeDes;
class Tr2CurveRasterizeDestination extends CjsModel {
  static {
    ({
      e: [_init_width, _init_extra_width, _init_stride, _init_extra_stride, _init_data, _init_extra_data],
      c: [_Tr2CurveRasterizeDes, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2CurveRasterizeDestination",
      family: "curves"
    })], [[[type, type.uint32], 16, "width"], [[type, type.uint32], 16, "stride"], [type.objectRef("Float_16"), 0, "data"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_data(this);
  }
  /** width (uint32_t) */
  width = _init_width(this, 0);

  /** stride (uint32_t) */
  stride = (_init_extra_width(this), _init_stride(this, 0));

  /** data (Float_16*) */
  data = (_init_extra_stride(this), _init_data(this, null));
  static {
    _initClass();
  }
}

export { _Tr2CurveRasterizeDes as Tr2CurveRasterizeDestination };
//# sourceMappingURL=Tr2CurveRasterizeDestination.js.map
