import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_trackedObjects, _init_extra_trackedObjects, _init_segments, _init_extra_segments, _init_egoBall, _init_extra_egoBall, _init_trailEffect, _init_extra_trailEffect, _init_fadeOutTime, _init_extra_fadeOutTime;

/** EveTacticalTrails (eve/ui) - generated from schema shapeHash e0ed0e70.... */
let _EveTacticalTrails;
class EveTacticalTrails extends CjsModel {
  static {
    ({
      e: [_init_trackedObjects, _init_extra_trackedObjects, _init_segments, _init_extra_segments, _init_egoBall, _init_extra_egoBall, _init_trailEffect, _init_extra_trailEffect, _init_fadeOutTime, _init_extra_fadeOutTime, _initProto],
      c: [_EveTacticalTrails, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveTacticalTrails",
      family: "eve/ui"
    })], [[type.list("EveTacticalTrailTrackedObject"), 0, "trackedObjects"], [[io, io.read, type, type.uint32], 16, "segments"], [[io, io.readwrite, void 0, type.objectRef("ITriVectorFunction")], 16, "egoBall"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "trailEffect"], [[io, io.persist, type, type.float32], 16, "fadeOutTime"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterObject"], [[carbon, carbon.method, impl, impl.adapted], 18, "UnregisterObject"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_fadeOutTime(this);
  }
  trackedObjects = (_initProto(this), _init_trackedObjects(this, []));

  /** m_segmentCount (uint32_t) [READ] */
  segments = (_init_extra_trackedObjects(this), _init_segments(this, 0));

  /** m_egoBall (ITriVectorFunctionPtr) [READWRITE] */
  egoBall = (_init_extra_segments(this), _init_egoBall(this, null));

  /** m_trailEffect (Tr2EffectPtr) [READWRITE, PERSIST] */
  trailEffect = (_init_extra_egoBall(this), _init_trailEffect(this, null));

  /** m_fadeOutTime (float) [READWRITE, PERSIST] */
  fadeOutTime = (_init_extra_trailEffect(this), _init_fadeOutTime(this, 5));

  /** Carbon method RegisterObject (MAP_METHOD_AND_WRAP). */
  RegisterObject(object) {
    if (!object) return false;
    const found = this.trackedObjects.some(entry => entry.ball?.deref?.() === object || entry.ball === object);
    if (found) return false;
    this.trackedObjects.push({
      ball: typeof WeakRef === "function" ? new WeakRef(object) : object,
      positions: []
    });
    return true;
  }

  /** Carbon method UnregisterObject (MAP_METHOD_AND_WRAP). */
  UnregisterObject(object) {
    const found = this.trackedObjects.find(entry => entry.ball?.deref?.() === object || entry.ball === object);
    if (!found) return false;
    found.ball = null;
    return true;
  }
  static {
    _initClass();
  }
}

export { _EveTacticalTrails as EveTacticalTrails };
//# sourceMappingURL=EveTacticalTrails.js.map
