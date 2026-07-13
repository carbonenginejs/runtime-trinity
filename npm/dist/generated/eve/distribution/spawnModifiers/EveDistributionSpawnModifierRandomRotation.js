import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_minRotation, _init_extra_minRotation, _init_maxRotation, _init_extra_maxRotation, _init_consistentRandom, _init_extra_consistentRandom, _init_overrideRotation, _init_extra_overrideRotation;

/** EveDistributionSpawnModifierRandomRotation (eve/distribution/spawnModifiers) - generated from schema shapeHash 18d6f646.... */
let _EveDistributionSpawn;
class EveDistributionSpawnModifierRandomRotation extends CjsModel {
  static {
    ({
      e: [_init_minRotation, _init_extra_minRotation, _init_maxRotation, _init_extra_maxRotation, _init_consistentRandom, _init_extra_consistentRandom, _init_overrideRotation, _init_extra_overrideRotation],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnModifierRandomRotation",
      family: "eve/distribution/spawnModifiers"
    })], [[[io, io.persist, type, type.vec3], 16, "minRotation"], [[io, io.persist, type, type.vec3], 16, "maxRotation"], [[io, io.persist, type, type.boolean], 16, "consistentRandom"], [[io, io.persist, type, type.boolean], 16, "overrideRotation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_overrideRotation(this);
  }
  /** m_minRotation (Vector3) [READWRITE, PERSIST] */
  minRotation = _init_minRotation(this, vec3.create());

  /** m_maxRotation (Vector3) [READWRITE, PERSIST] */
  maxRotation = (_init_extra_minRotation(this), _init_maxRotation(this, vec3.create()));

  /** m_consistentRandom (bool) [READWRITE, PERSIST] */
  consistentRandom = (_init_extra_maxRotation(this), _init_consistentRandom(this, false));

  /** m_overrideRotation (bool) [READWRITE, PERSIST] */
  overrideRotation = (_init_extra_consistentRandom(this), _init_overrideRotation(this, false));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnModifierRandomRotation };
//# sourceMappingURL=EveDistributionSpawnModifierRandomRotation.js.map
