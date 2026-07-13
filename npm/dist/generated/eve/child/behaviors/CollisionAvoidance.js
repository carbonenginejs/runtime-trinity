import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_exclusionVolumes, _init_extra_exclusionVolumes, _init_avoidanceScalar, _init_extra_avoidanceScalar, _init_enabled, _init_extra_enabled;

/** CollisionAvoidance (eve/child/behaviors) - generated from schema shapeHash f88cfab2.... */
let _CollisionAvoidance;
class CollisionAvoidance extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_exclusionVolumes, _init_extra_exclusionVolumes, _init_avoidanceScalar, _init_extra_avoidanceScalar, _init_enabled, _init_extra_enabled],
      c: [_CollisionAvoidance, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "CollisionAvoidance",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "exclusionVolumes"], [[io, io.persist, type, type.float32], 16, "avoidanceScalar"], [[io, io.persist, type, type.boolean], 16, "enabled"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_enabled(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_exclusionVolumes (PIEveVolumeVector) [READ, PERSIST] */
  exclusionVolumes = (_init_extra_behaviorPriority(this), _init_exclusionVolumes(this, []));

  /** m_collisionAvoidanceScalar (float) [READWRITE, PERSIST] */
  avoidanceScalar = (_init_extra_exclusionVolumes(this), _init_avoidanceScalar(this, 12));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_avoidanceScalar(this), _init_enabled(this, true));
  static {
    _initClass();
  }
}

export { _CollisionAvoidance as CollisionAvoidance };
//# sourceMappingURL=CollisionAvoidance.js.map
