import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { TriFrustumTestResult } from '../../trinityCore/enums.js';

let _initProto, _initClass, _init_shadow, _init_extra_shadow;

/** TriShadowFrustum (eve/scene) - generated from schema shapeHash 2d9400b5.... */
let _TriShadowFrustum;
new class extends _identity {
  static [class TriShadowFrustum extends CjsModel {
    static {
      ({
        e: [_init_shadow, _init_extra_shadow, _initProto],
        c: [_TriShadowFrustum, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriShadowFrustum",
        family: "eve/scene"
      })], [[type.rawStruct("TriFrustum"), 0, "shadow"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsVisible"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetSizeInShadow"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetEyePos"], [[carbon, carbon.method, impl, impl.implemented], 18, "SphereTest"]], 0, void 0, CjsModel));
    }
    /** m_shadow (TriFrustum) */
    shadow = (_initProto(this), _init_shadow(this, null));

    /**
     * Carbon's constructor (h:112-115); optional to keep the shell
     * default-constructible.
     * @param {Object|null} [shadow] - TriFrustum
     */
    constructor(shadow = null) {
      super(), _init_extra_shadow(this);
      this.shadow = shadow ?? null;
    }

    /**
     * Carbon TriShadowFrustum::IsVisible (h:116-121) - the shadow frustum's own
     * sphere test; Carbon leaves camera-based culling as a TODO ("do something
     * smart to cull the shadowcasting sphere using the camera frustum").
     * @param {Object} _camera - TriFrustum duck (unused, Carbon parity)
     * @param {Float32Array} boundingSphere - packed (x, y, z, radius)
     * @returns {Boolean}
     */
    IsVisible(_camera, boundingSphere) {
      return !!this.shadow?.IsSphereVisible(boundingSphere);
    }

    /**
     * Carbon TriShadowFrustum::GetSizeInShadow (h:122-125).
     * @param {Float32Array} boundingSphere - packed (x, y, z, radius)
     * @returns {Number}
     */
    GetSizeInShadow(boundingSphere) {
      return this.shadow ? this.shadow.GetPixelSizeAccross(boundingSphere) : 0;
    }

    /**
     * Carbon TriShadowFrustum::GetEyePos (h:126-129) - the shadow frustum's
     * m_viewPos.
     * @returns {Float32Array}
     */
    GetEyePos() {
      return this.shadow ? this.shadow.viewPos : _TriShadowFrustum.#zeroEyePos;
    }

    /**
     * Carbon TriShadowFrustum::SphereTest (h:131-134) - delegates to the shadow
     * frustum's six-plane classification (camera unused, Carbon parity).
     * @param {Object} _camera - TriFrustum duck (unused)
     * @param {Object|Float32Array} sphere - { center, radius } or packed vec4
     * @returns {Number} TriFrustumTestResult
     */
    SphereTest(_camera, sphere) {
      return this.shadow ? this.shadow.SphereTest(sphere) : TriFrustumTestResult.Outside;
    }
  }];
  #zeroEyePos = vec3.create();
  constructor() {
    super(_TriShadowFrustum), _initClass();
  }
}();

export { _TriShadowFrustum as TriShadowFrustum };
//# sourceMappingURL=TriShadowFrustum.js.map
