import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2LineSet as _Tr2LineSet } from './Tr2LineSet.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_maxBounds, _init_extra_maxBounds, _init_minBounds, _init_extra_minBounds;

/** Tr2BoundingLineSet (trinityCore) - generated from schema shapeHash 3456c3d7.... */
let _Tr2BoundingLineSet;
class Tr2BoundingLineSet extends _Tr2LineSet {
  static {
    ({
      e: [_init_maxBounds, _init_extra_maxBounds, _init_minBounds, _init_extra_minBounds, _initProto],
      c: [_Tr2BoundingLineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2BoundingLineSet",
      family: "trinityCore"
    })], [[[io, io.notify, io, io.persist, type, type.vec3], 16, "maxBounds"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "minBounds"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UpdateBounds"]], 0, void 0, _Tr2LineSet));
  }
  constructor(...args) {
    super(...args);
    _init_extra_minBounds(this);
  }
  /** m_maxBounds (Vector3) [READWRITE, NOTIFY, PERSIST] */
  maxBounds = (_initProto(this), _init_maxBounds(this, vec3.create()));

  /** m_minBounds (Vector3) [READWRITE, NOTIFY, PERSIST] */
  minBounds = (_init_extra_maxBounds(this), _init_minBounds(this, vec3.create()));

  /** Carbon method UpdateBounds (MAP_METHOD_AND_WRAP). */
  UpdateBounds(...args) {
    throw new Error("Tr2BoundingLineSet.UpdateBounds is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2BoundingLineSet as Tr2BoundingLineSet };
//# sourceMappingURL=Tr2BoundingLineSet.js.map
