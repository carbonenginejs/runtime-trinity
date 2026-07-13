import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_shadow, _init_extra_shadow;

/** TriShadowFrustum (eve/scene) - generated from schema shapeHash 2d9400b5.... */
let _TriShadowFrustum;
class TriShadowFrustum extends CjsModel {
  static {
    ({
      e: [_init_shadow, _init_extra_shadow],
      c: [_TriShadowFrustum, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriShadowFrustum",
      family: "eve/scene"
    })], [[type.rawStruct("TriFrustum"), 0, "shadow"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shadow(this);
  }
  /** m_shadow (TriFrustum) */
  shadow = _init_shadow(this, null);
  static {
    _initClass();
  }
}

export { _TriShadowFrustum as TriShadowFrustum };
//# sourceMappingURL=TriShadowFrustum.js.map
