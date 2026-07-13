import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_minInertiaWeight, _init_extra_minInertiaWeight, _init_maxRotationSpeed, _init_extra_maxRotationSpeed, _init_maxAcceleration, _init_extra_maxAcceleration, _init_enabled, _init_extra_enabled;

/** Inertia (eve/child/behaviors) - generated from schema shapeHash 80109d01.... */
let _Inertia;
class Inertia extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_minInertiaWeight, _init_extra_minInertiaWeight, _init_maxRotationSpeed, _init_extra_maxRotationSpeed, _init_maxAcceleration, _init_extra_maxAcceleration, _init_enabled, _init_extra_enabled],
      c: [_Inertia, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Inertia",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.float32], 16, "minInertiaWeight"], [[io, io.persist, type, type.float32], 16, "maxRotationSpeed"], [[io, io.persist, type, type.float32], 16, "maxAcceleration"], [[io, io.persist, type, type.boolean], 16, "enabled"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_enabled(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_minInertiaWeight (float) [READWRITE, PERSIST] */
  minInertiaWeight = (_init_extra_behaviorPriority(this), _init_minInertiaWeight(this, 0.1));

  /** m_maxRotationSpeed (float) [READWRITE, PERSIST] */
  maxRotationSpeed = (_init_extra_minInertiaWeight(this), _init_maxRotationSpeed(this, 3.14));

  /** m_maxAcceleration (float) [READWRITE, PERSIST] */
  maxAcceleration = (_init_extra_maxRotationSpeed(this), _init_maxAcceleration(this, 60));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_maxAcceleration(this), _init_enabled(this, true));
  static {
    _initClass();
  }
}

export { _Inertia as Inertia };
//# sourceMappingURL=Inertia.js.map
