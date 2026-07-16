import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_firingEffect, _init_extra_firingEffect, _init_generatedFiringEffects, _init_extra_generatedFiringEffects, _init_sec, _init_extra_sec, _init_enabled, _init_extra_enabled;

/** PlayFX (eve/child/behaviors) - generated from schema shapeHash 06aaa1da.... */
let _PlayFX;
class PlayFX extends _EveEntity {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_firingEffect, _init_extra_firingEffect, _init_generatedFiringEffects, _init_extra_generatedFiringEffects, _init_sec, _init_extra_sec, _init_enabled, _init_extra_enabled],
      c: [_PlayFX, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "PlayFX",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.persist, void 0, type.model("IEveFiringEffectElement")], 16, "firingEffect"], [[io, io.read, void 0, type.list("IEveFiringEffectElement")], 16, "generatedFiringEffects"], [[io, io.persist, type, type.int32], 16, "sec"], [[io, io.persist, type, type.boolean], 16, "enabled"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_enabled(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_behaviorPriority(this), _init_behaviorWeight(this, 20));

  /** m_firingEffect (IEveFiringEffectElementPtr) [READWRITE, PERSIST] */
  firingEffect = (_init_extra_behaviorWeight(this), _init_firingEffect(this, null));

  /** m_firingEffects (PIEveFiringEffectElementVector) [READ] */
  generatedFiringEffects = (_init_extra_firingEffect(this), _init_generatedFiringEffects(this, []));

  /** m_sec (int32_t) [READWRITE, PERSIST] */
  sec = (_init_extra_generatedFiringEffects(this), _init_sec(this, 1));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_sec(this), _init_enabled(this, true));
  static {
    _initClass();
  }
}

export { _PlayFX as PlayFX };
//# sourceMappingURL=PlayFX.js.map
