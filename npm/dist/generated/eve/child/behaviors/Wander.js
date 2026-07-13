import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_rand, _init_extra_rand, _init_rand2, _init_extra_rand2, _init_rand3, _init_extra_rand3, _init_freq, _init_extra_freq, _init_weightWander, _init_extra_weightWander, _init_enabled, _init_extra_enabled;

/** Wander (eve/child/behaviors) - generated from schema shapeHash 03401388.... */
let _Wander;
class Wander extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_rand, _init_extra_rand, _init_rand2, _init_extra_rand2, _init_rand3, _init_extra_rand3, _init_freq, _init_extra_freq, _init_weightWander, _init_extra_weightWander, _init_enabled, _init_extra_enabled],
      c: [_Wander, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Wander",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.float32], 16, "rand1"], [[io, io.persist, type, type.float32], 16, "rand2"], [[io, io.persist, type, type.float32], 16, "rand3"], [[io, io.persist, type, type.float32], 16, "freq"], [[io, io.persist, type, type.float32], 16, "weightWander"], [[io, io.persist, type, type.boolean], 16, "enabled"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_enabled(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** rand1 (float) [READWRITE, PERSIST] */
  rand1 = (_init_extra_behaviorPriority(this), _init_rand(this, 0.2));

  /** rand2 (float) [READWRITE, PERSIST] */
  rand2 = (_init_extra_rand(this), _init_rand2(this, 0.8));

  /** rand3 (float) [READWRITE, PERSIST] */
  rand3 = (_init_extra_rand2(this), _init_rand3(this, 1.2));

  /** m_freq (float) [READWRITE, PERSIST] */
  freq = (_init_extra_rand3(this), _init_freq(this, 2));

  /** m_weightWander (float) [READWRITE, PERSIST] */
  weightWander = (_init_extra_freq(this), _init_weightWander(this, 240));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_weightWander(this), _init_enabled(this, true));
  static {
    _initClass();
  }
}

export { _Wander as Wander };
//# sourceMappingURL=Wander.js.map
