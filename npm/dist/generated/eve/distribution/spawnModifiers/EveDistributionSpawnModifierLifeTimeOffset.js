import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_minOffset, _init_extra_minOffset, _init_maxOffset, _init_extra_maxOffset, _init_consistentRandom, _init_extra_consistentRandom, _init_cascadingLifetimeOffset, _init_extra_cascadingLifetimeOffset, _init_normalizeOffsets, _init_extra_normalizeOffsets;

/** EveDistributionSpawnModifierLifeTimeOffset (eve/distribution/spawnModifiers) - generated from schema shapeHash 6a58acb7.... */
let _EveDistributionSpawn;
class EveDistributionSpawnModifierLifeTimeOffset extends CjsModel {
  static {
    ({
      e: [_init_minOffset, _init_extra_minOffset, _init_maxOffset, _init_extra_maxOffset, _init_consistentRandom, _init_extra_consistentRandom, _init_cascadingLifetimeOffset, _init_extra_cascadingLifetimeOffset, _init_normalizeOffsets, _init_extra_normalizeOffsets],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnModifierLifeTimeOffset",
      family: "eve/distribution/spawnModifiers"
    })], [[[io, io.persist, type, type.float32], 16, "minOffset"], [[io, io.persist, type, type.float32], 16, "maxOffset"], [[io, io.persist, type, type.boolean], 16, "consistentRandom"], [[io, io.persist, type, type.float32], 16, "cascadingLifetimeOffset"], [[io, io.persist, type, type.boolean], 16, "normalizeOffsets"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_normalizeOffsets(this);
  }
  /** m_minOffset (float) [READWRITE, PERSIST] */
  minOffset = _init_minOffset(this, 0);

  /** m_maxOffset (float) [READWRITE, PERSIST] */
  maxOffset = (_init_extra_minOffset(this), _init_maxOffset(this, 0));

  /** m_consistentRandom (bool) [READWRITE, PERSIST] */
  consistentRandom = (_init_extra_maxOffset(this), _init_consistentRandom(this, false));

  /** m_cascadingLifetimeOffset (float) [READWRITE, PERSIST] */
  cascadingLifetimeOffset = (_init_extra_consistentRandom(this), _init_cascadingLifetimeOffset(this, 0));

  /** m_normalizeOffsets (bool) [READWRITE, PERSIST] */
  normalizeOffsets = (_init_extra_cascadingLifetimeOffset(this), _init_normalizeOffsets(this, false));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnModifierLifeTimeOffset };
//# sourceMappingURL=EveDistributionSpawnModifierLifeTimeOffset.js.map
