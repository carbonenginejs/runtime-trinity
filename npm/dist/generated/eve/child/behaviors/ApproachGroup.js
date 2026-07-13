import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_visionRange, _init_extra_visionRange, _init_enabled, _init_extra_enabled, _init_framesBetweenUpdates, _init_extra_framesBetweenUpdates;

/** ApproachGroup (eve/child/behaviors) - generated from schema shapeHash 75d31816.... */
let _ApproachGroup;
class ApproachGroup extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_visionRange, _init_extra_visionRange, _init_enabled, _init_extra_enabled, _init_framesBetweenUpdates, _init_extra_framesBetweenUpdates],
      c: [_ApproachGroup, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ApproachGroup",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.persist, type, type.float32], 16, "visionRange"], [[io, io.persist, type, type.boolean], 16, "enabled"], [[io, io.persist, type, type.int32], 16, "framesBetweenUpdates"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_framesBetweenUpdates(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_behaviorPriority(this), _init_behaviorWeight(this, 60));

  /** m_visionRange (float) [READWRITE, PERSIST] */
  visionRange = (_init_extra_behaviorWeight(this), _init_visionRange(this, 150));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_visionRange(this), _init_enabled(this, true));

  /** m_framesBetweenUpdates (int32_t) [READWRITE, PERSIST] */
  framesBetweenUpdates = (_init_extra_enabled(this), _init_framesBetweenUpdates(this, 83));
  static {
    _initClass();
  }
}

export { _ApproachGroup as ApproachGroup };
//# sourceMappingURL=ApproachGroup.js.map
