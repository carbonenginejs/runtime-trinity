import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_completeness, _init_extra_completeness, _init_additionalTriggersPerBurst, _init_extra_additionalTriggersPerBurst, _init_delayBeforeInitialBurst, _init_extra_delayBeforeInitialBurst;

/** EveDistributionSpawnerBurst (eve/distribution/spawners) - generated from schema shapeHash 690e01c9.... */
let _EveDistributionSpawn;
class EveDistributionSpawnerBurst extends CjsModel {
  static {
    ({
      e: [_init_completeness, _init_extra_completeness, _init_additionalTriggersPerBurst, _init_extra_additionalTriggersPerBurst, _init_delayBeforeInitialBurst, _init_extra_delayBeforeInitialBurst],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnerBurst",
      family: "eve/distribution/spawners"
    })], [[[io, io.persist, type, type.float32], 16, "completeness"], [[io, io.persist, type, type.uint32], 16, "additionalTriggersPerBurst"], [[io, io.persist, type, type.float32], 16, "delayBeforeInitialBurst"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_delayBeforeInitialBurst(this);
  }
  /** m_completeness (float) [READWRITE, PERSIST] */
  completeness = _init_completeness(this, 1);

  /** m_additionalTriggersPerBurst (uint32_t) [READWRITE, PERSIST] */
  additionalTriggersPerBurst = (_init_extra_completeness(this), _init_additionalTriggersPerBurst(this, 0));

  /** m_delayBeforeInitialBurst (float) [READWRITE, PERSIST] */
  delayBeforeInitialBurst = (_init_extra_additionalTriggersPerBurst(this), _init_delayBeforeInitialBurst(this, 0));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnerBurst };
//# sourceMappingURL=EveDistributionSpawnerBurst.js.map
