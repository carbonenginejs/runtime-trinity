import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_isVisible, _init_extra_isVisible;

/** EveCurveLineSet (eve/ui) - generated from schema shapeHash 682d53a4.... */
let _EveCurveLineSet;
class EveCurveLineSet extends CjsModel {
  static {
    ({
      e: [_init_isVisible, _init_extra_isVisible],
      c: [_EveCurveLineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveCurveLineSet",
      family: "eve/ui"
    })], [[[type, type.boolean], 16, "isVisible"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isVisible(this);
  }
  /** m_isVisible (bool) */
  isVisible = _init_isVisible(this, false);
  static {
    _initClass();
  }
}

export { _EveCurveLineSet as EveCurveLineSet };
//# sourceMappingURL=EveCurveLineSet.js.map
