import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_aabbMax, _init_extra_aabbMax, _init_aabbMin, _init_extra_aabbMin;
let _Tr2DirectInstanceDat;
class Tr2DirectInstanceData extends CjsModel {
  static {
    ({
      e: [_init_aabbMax, _init_extra_aabbMax, _init_aabbMin, _init_extra_aabbMin, _initProto],
      c: [_Tr2DirectInstanceDat, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DirectInstanceData",
      family: "trinityCore"
    })], [[[io, io.read, type, type.vec3], 16, "aabbMax"], [[io, io.read, type, type.vec3], 16, "aabbMin"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetBoundingBox"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_aabbMin(this);
  }
  /** m_aabb.m_max (Vector3) [READ] */
  aabbMax = (_initProto(this), _init_aabbMax(this, vec3.create()));

  /** m_aabb.m_min (Vector3) [READ] */
  aabbMin = (_init_extra_aabbMax(this), _init_aabbMin(this, vec3.create()));

  /**
   * Assigns the CPU-side instance bounds without realizing a GPU buffer.
   * Accepts the JavaScript `{ min, max }` box representation; a two-vector
   * form is retained for consistency with `Tr2RuntimeInstanceData`.
   */
  SetBoundingBox(bounds, maxBounds) {
    const min = maxBounds === undefined ? bounds?.min ?? bounds?.minBounds : bounds;
    const max = maxBounds === undefined ? bounds?.max ?? bounds?.maxBounds : maxBounds;
    if (!min || !max) {
      throw new TypeError("Bounding box requires min and max vectors");
    }
    vec3.copy(this.aabbMin, min);
    vec3.copy(this.aabbMax, max);
  }
  static {
    _initClass();
  }
}

export { _Tr2DirectInstanceDat as Tr2DirectInstanceData };
//# sourceMappingURL=Tr2DirectInstanceData.js.map
