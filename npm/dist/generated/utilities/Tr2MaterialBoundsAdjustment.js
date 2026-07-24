import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_maxLocalDisplacement, _init_extra_maxLocalDisplacement, _init_maxLocalScale, _init_extra_maxLocalScale, _init_rotatesVertices, _init_extra_rotatesVertices;

/** Tr2MaterialBoundsAdjustment (utilities) - generated from schema shapeHash b08a73ac.... */
let _Tr2MaterialBoundsAdj;
class Tr2MaterialBoundsAdjustment extends CjsModel {
  static {
    ({
      e: [_init_maxLocalDisplacement, _init_extra_maxLocalDisplacement, _init_maxLocalScale, _init_extra_maxLocalScale, _init_rotatesVertices, _init_extra_rotatesVertices],
      c: [_Tr2MaterialBoundsAdj, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2MaterialBoundsAdjustment",
      family: "utilities"
    })], [[[type, type.float32], 16, "maxLocalDisplacement"], [[type, type.float32], 16, "maxLocalScale"], [[type, type.boolean], 16, "rotatesVertices"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_rotatesVertices(this);
  }
  /** maxLocalDisplacement (float) */
  maxLocalDisplacement = _init_maxLocalDisplacement(this, 0);

  /** maxLocalScale (float) */
  maxLocalScale = (_init_extra_maxLocalDisplacement(this), _init_maxLocalScale(this, 1));

  /** rotatesVertices (bool) */
  rotatesVertices = (_init_extra_maxLocalScale(this), _init_rotatesVertices(this, false));
  static {
    _initClass();
  }
}

export { _Tr2MaterialBoundsAdj as Tr2MaterialBoundsAdjustment };
//# sourceMappingURL=Tr2MaterialBoundsAdjustment.js.map
