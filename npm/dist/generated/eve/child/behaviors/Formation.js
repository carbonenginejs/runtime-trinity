import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_inFormation, _init_extra_inFormation, _init_maxFormationVelocityScaler, _init_extra_maxFormationVelocityScaler, _init_stubbornness, _init_extra_stubbornness, _init_enabled, _init_extra_enabled, _init_framesBetweenUpdates, _init_extra_framesBetweenUpdates;

/** Formation (eve/child/behaviors) - generated from schema shapeHash dd236194.... */
let _Formation;
class Formation extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_inFormation, _init_extra_inFormation, _init_maxFormationVelocityScaler, _init_extra_maxFormationVelocityScaler, _init_stubbornness, _init_extra_stubbornness, _init_enabled, _init_extra_enabled, _init_framesBetweenUpdates, _init_extra_framesBetweenUpdates],
      c: [_Formation, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Formation",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.read, type, type.boolean], 16, "inFormation"], [[io, io.persist, type, type.float32], 16, "maxFormationVelocityScaler"], [[io, io.persist, type, type.int32], 16, "stubbornness"], [[io, io.persist, type, type.boolean], 16, "enabled"], [[io, io.persist, type, type.int32], 16, "framesBetweenUpdates"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_framesBetweenUpdates(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_behaviorPriority(this), _init_behaviorWeight(this, 300));

  /** m_inFormation (bool) [READ] */
  inFormation = (_init_extra_behaviorWeight(this), _init_inFormation(this, false));

  /** m_maxFormationVelocityScaler (float) [READWRITE, PERSIST] */
  maxFormationVelocityScaler = (_init_extra_inFormation(this), _init_maxFormationVelocityScaler(this, 0.85));

  /** m_stubbornness (int32_t) [READWRITE, PERSIST] */
  stubbornness = (_init_extra_maxFormationVelocityScaler(this), _init_stubbornness(this, 3));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_stubbornness(this), _init_enabled(this, true));

  /** m_framesBetweenUpdates (int32_t) [READWRITE, PERSIST] */
  framesBetweenUpdates = (_init_extra_enabled(this), _init_framesBetweenUpdates(this, 15));
  static {
    _initClass();
  }
}

export { _Formation as Formation };
//# sourceMappingURL=Formation.js.map
