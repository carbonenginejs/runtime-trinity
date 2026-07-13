import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_bounds, _init_extra_bounds, _init_vertexCount, _init_extra_vertexCount;

/** AreaBoundsInfo (utilities) - generated from schema shapeHash 45ca4425.... */
let _AreaBoundsInfo;
class AreaBoundsInfo extends CjsModel {
  static {
    ({
      e: [_init_bounds, _init_extra_bounds, _init_vertexCount, _init_extra_vertexCount],
      c: [_AreaBoundsInfo, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "AreaBoundsInfo",
      family: "utilities"
    })], [[type.rawStruct("BoundingBox"), 0, "bounds"], [[type, type.unknown], 16, "vertexCount"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_vertexCount(this);
  }
  /** bounds (BoundingBox) */
  bounds = _init_bounds(this, null);

  /** vertexCount (granny_int32) */
  vertexCount = (_init_extra_bounds(this), _init_vertexCount(this, null));
  static {
    _initClass();
  }
}

export { _AreaBoundsInfo as AreaBoundsInfo };
//# sourceMappingURL=AreaBoundsInfo.js.map
