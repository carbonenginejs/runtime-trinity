import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_inclusionVolumes, _init_extra_inclusionVolumes, _init_behaviorWeight, _init_extra_behaviorWeight, _init_enabled, _init_extra_enabled, _init_framesBetweenUpdates, _init_extra_framesBetweenUpdates;

/** InclusionVolume (eve/child/behaviors) - generated from schema shapeHash 19708e2d.... */
let _InclusionVolume;
class InclusionVolume extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_inclusionVolumes, _init_extra_inclusionVolumes, _init_behaviorWeight, _init_extra_behaviorWeight, _init_enabled, _init_extra_enabled, _init_framesBetweenUpdates, _init_extra_framesBetweenUpdates],
      c: [_InclusionVolume, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "InclusionVolume",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "inclusionVolumes"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.persist, type, type.boolean], 16, "enabled"], [[io, io.persist, type, type.int32], 16, "framesBetweenUpdates"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_framesBetweenUpdates(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_inclusionVolumes (PIEveVolumeVector) [READ, PERSIST] */
  inclusionVolumes = (_init_extra_behaviorPriority(this), _init_inclusionVolumes(this, []));

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_inclusionVolumes(this), _init_behaviorWeight(this, 60));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_behaviorWeight(this), _init_enabled(this, true));

  /** m_framesBetweenUpdates (int32_t) [READWRITE, PERSIST] */
  framesBetweenUpdates = (_init_extra_enabled(this), _init_framesBetweenUpdates(this, 11));
  static {
    _initClass();
  }
}

export { _InclusionVolume as InclusionVolume };
//# sourceMappingURL=InclusionVolume.js.map
