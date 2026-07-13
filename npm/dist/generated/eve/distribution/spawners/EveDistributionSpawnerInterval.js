import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_delayBetweenRepeats, _init_extra_delayBetweenRepeats, _init_numberOfRepeats, _init_extra_numberOfRepeats, _init_useRandomStartOffset, _init_extra_useRandomStartOffset, _init_maxRandomizedIntervalDelta, _init_extra_maxRandomizedIntervalDelta, _init_delayBeforeInitialSpawn, _init_extra_delayBeforeInitialSpawn;

/** EveDistributionSpawnerInterval (eve/distribution/spawners) - generated from schema shapeHash b44c191b.... */
let _EveDistributionSpawn;
class EveDistributionSpawnerInterval extends CjsModel {
  static {
    ({
      e: [_init_delayBetweenRepeats, _init_extra_delayBetweenRepeats, _init_numberOfRepeats, _init_extra_numberOfRepeats, _init_useRandomStartOffset, _init_extra_useRandomStartOffset, _init_maxRandomizedIntervalDelta, _init_extra_maxRandomizedIntervalDelta, _init_delayBeforeInitialSpawn, _init_extra_delayBeforeInitialSpawn],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnerInterval",
      family: "eve/distribution/spawners"
    })], [[[io, io.persist, type, type.float32], 16, "delayBetweenRepeats"], [[io, io.persist, type, type.uint32], 16, "numberOfRepeats"], [[io, io.persist, type, type.boolean], 16, "useRandomStartOffset"], [[io, io.persist, type, type.float32], 16, "maxRandomizedIntervalDelta"], [[io, io.persist, type, type.float32], 16, "delayBeforeInitialSpawn"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_delayBeforeInitialSpawn(this);
  }
  /** m_delayBetweenRepeats (float) [READWRITE, PERSIST] */
  delayBetweenRepeats = _init_delayBetweenRepeats(this, 1);

  /** m_numberOfTriggers (uint32_t) [READWRITE, PERSIST] */
  numberOfRepeats = (_init_extra_delayBetweenRepeats(this), _init_numberOfRepeats(this, 0));

  /** m_useRandomStartOffset (bool) [READWRITE, PERSIST] */
  useRandomStartOffset = (_init_extra_numberOfRepeats(this), _init_useRandomStartOffset(this, true));

  /** m_maxRandomizedIntervalDelta (float) [READWRITE, PERSIST] */
  maxRandomizedIntervalDelta = (_init_extra_useRandomStartOffset(this), _init_maxRandomizedIntervalDelta(this, 0));

  /** m_delayBeforeInitialSpawn (float) [READWRITE, PERSIST] */
  delayBeforeInitialSpawn = (_init_extra_maxRandomizedIntervalDelta(this), _init_delayBeforeInitialSpawn(this, 0));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnerInterval };
//# sourceMappingURL=EveDistributionSpawnerInterval.js.map
