import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_shadow, _init_extra_shadow, _init_shadowMapSize, _init_extra_shadowMapSize, _init_sunDir, _init_extra_sunDir;

/** TriShadowOrthoFrustum (eve/scene) - generated from schema shapeHash 7a23f56b.... */
let _TriShadowOrthoFrustu;
class TriShadowOrthoFrustum extends CjsModel {
  static {
    ({
      e: [_init_shadow, _init_extra_shadow, _init_shadowMapSize, _init_extra_shadowMapSize, _init_sunDir, _init_extra_sunDir],
      c: [_TriShadowOrthoFrustu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriShadowOrthoFrustum",
      family: "eve/scene"
    })], [[type.rawStruct("TriFrustumOrtho"), 0, "shadow"], [[type, type.uint32], 16, "shadowMapSize"], [[type, type.vec3], 16, "sunDir"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_sunDir(this);
  }
  /** m_shadow (TriFrustumOrtho) */
  shadow = _init_shadow(this, null);

  /** m_shadowMapSize (uint32_t) */
  shadowMapSize = (_init_extra_shadow(this), _init_shadowMapSize(this, 0));

  /** m_sunDir (Vector3) */
  sunDir = (_init_extra_shadowMapSize(this), _init_sunDir(this, vec3.create()));
  static {
    _initClass();
  }
}

export { _TriShadowOrthoFrustu as TriShadowOrthoFrustum };
//# sourceMappingURL=TriShadowOrthoFrustum.js.map
