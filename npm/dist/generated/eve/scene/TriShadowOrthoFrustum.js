import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { PlaneDotNormal, PlaneDotCoord } from '../../../trinityCore/TriFrustum.js';
import { TriFrustumTestResult } from '../../trinityCore/enums.js';

let _initProto, _initClass, _init_shadow, _init_extra_shadow, _init_shadowMapSize, _init_extra_shadowMapSize, _init_sunDir, _init_extra_sunDir;

/** TriShadowOrthoFrustum (eve/scene) - generated from schema shapeHash 7a23f56b.... */
let _TriShadowOrthoFrustu;
new class extends _identity {
  static [class TriShadowOrthoFrustum extends CjsModel {
    static {
      ({
        e: [_init_shadow, _init_extra_shadow, _init_shadowMapSize, _init_extra_shadowMapSize, _init_sunDir, _init_extra_sunDir, _initProto],
        c: [_TriShadowOrthoFrustu, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriShadowOrthoFrustum",
        family: "eve/scene"
      })], [[type.rawStruct("TriFrustumOrtho"), 0, "shadow"], [[type, type.uint32], 16, "shadowMapSize"], [[type, type.vec3], 16, "sunDir"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsVisible"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetSizeInShadow"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetEyePos"], [[carbon, carbon.method, impl, impl.implemented], 18, "SphereTest"]], 0, void 0, CjsModel));
    }
    /** m_shadow (TriFrustumOrtho) */
    shadow = (_initProto(this), _init_shadow(this, null));

    /** m_shadowMapSize (uint32_t) */
    shadowMapSize = (_init_extra_shadow(this), _init_shadowMapSize(this, 0));

    /** m_sunDir (Vector3) */
    sunDir = (_init_extra_shadowMapSize(this), _init_sunDir(this, vec3.create()));

    /**
     * Carbon's argument constructor (h:42-47); all arguments optional to keep
     * the default-constructible shell contract (h:35-40).
     * @param {Object|null} [shadow] - TriFrustumOrtho
     * @param {Number} [shadowMapSize]
     * @param {Float32Array|null} [sunDir]
     */
    constructor(shadow = null, shadowMapSize = 0, sunDir = null) {
      super(), _init_extra_sunDir(this);
      this.shadow = shadow ?? null;
      this.shadowMapSize = Number(shadowMapSize) >>> 0;
      if (sunDir) {
        vec3.copy(this.sunDir, sunDir);
      }
    }

    /**
     * Carbon TriShadowOrthoFrustum::IsVisible (h:48-69): the sphere must be
     * visible in the ortho shadow frustum (far plane ignored), and for every
     * camera plane facing away from the sun (DotNormal(plane, sunDir) < 0) the
     * sphere must not be entirely behind that plane. (Carbon's unused local
     * `val` on the negated center is dead code and is omitted.)
     * @param {Object} camera - TriFrustum duck ({ planes })
     * @param {Float32Array} boundingSphere - packed (x, y, z, radius)
     * @returns {Boolean}
     */
    IsVisible(camera, boundingSphere) {
      if (!this.shadow) {
        return false;
      }
      const sphereIsVisible = this.shadow.IsSphereVisibleIgnoreFarPlane(boundingSphere, boundingSphere[3]);
      if (sphereIsVisible) {
        const planes = camera?.planes ?? [];
        for (let j = 0; j < 6; ++j) {
          // first check if sun direction is perpendicular of the plane
          const d = PlaneDotNormal(planes[j], this.sunDir);
          // if it's not perpendicular then check if the object is "behind" the plane
          if (d < 0) {
            if (PlaneDotCoord(planes[j], boundingSphere) < -boundingSphere[3]) {
              return false;
            }
          }
        }
      }
      return sphereIsVisible;
    }

    /**
     * Carbon TriShadowOrthoFrustum::GetSizeInShadow (h:70-73) - shadow-map pixel
     * coverage via TriFrustumOrtho.GetPixelSize.
     * @param {Float32Array} boundingSphere - packed (x, y, z, radius)
     * @returns {Number}
     */
    GetSizeInShadow(boundingSphere) {
      return this.shadow ? this.shadow.GetPixelSize(boundingSphere, this.shadowMapSize) : 0;
    }

    /**
     * Carbon TriShadowOrthoFrustum::GetEyePos (h:74-77).
     * @returns {Float32Array}
     */
    GetEyePos() {
      return this.shadow ? this.shadow.GetEyePos() : _TriShadowOrthoFrustu.#zeroEyePos;
    }

    /**
     * Carbon TriShadowOrthoFrustum::SphereTest (h:79-104): the ortho
     * classification (far plane ignored), demoted per sun-facing camera plane -
     * Outside when fully behind one, Intersect when straddling one.
     * @param {Object} camera - TriFrustum duck ({ planes })
     * @param {Object|Float32Array} sphere - { center, radius } or packed vec4
     * @returns {Number} TriFrustumTestResult
     */
    SphereTest(camera, sphere) {
      if (!this.shadow) {
        return TriFrustumTestResult.Outside;
      }
      let orthoResult = this.shadow.SphereTestIgnoreFarPlane(sphere);
      if (orthoResult !== TriFrustumTestResult.Outside) {
        const packed = typeof sphere?.length === "number" && sphere.length >= 4;
        const center = packed ? sphere : sphere.center;
        const radius = packed ? sphere[3] : sphere.radius;
        const planes = camera?.planes ?? [];
        for (let j = 0; j < 6; ++j) {
          // first check if sun direction is perpendicular of the plane
          const d = PlaneDotNormal(planes[j], this.sunDir);
          // if it's not perpendicular then check if the object is "behind" the plane
          if (d < 0) {
            const val = PlaneDotCoord(planes[j], center);
            if (val < -radius) {
              return TriFrustumTestResult.Outside;
            }
            if (val < radius) {
              orthoResult = TriFrustumTestResult.Intersect;
            }
          }
        }
      }
      return orthoResult;
    }
  }];
  #zeroEyePos = vec3.create();
  constructor() {
    super(_TriShadowOrthoFrustu), _initClass();
  }
}();

export { _TriShadowOrthoFrustu as TriShadowOrthoFrustum };
//# sourceMappingURL=TriShadowOrthoFrustum.js.map
