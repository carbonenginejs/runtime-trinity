import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_minOffset, _init_extra_minOffset, _init_maxOffset, _init_extra_maxOffset, _init_consistentRandom, _init_extra_consistentRandom, _init_uniformOffset, _init_extra_uniformOffset;

/** EveDistributionSpawnModifierRandomOffset (eve/distribution/spawnModifiers) - generated from schema shapeHash 65d2580b.... */
let _EveDistributionSpawn;
class EveDistributionSpawnModifierRandomOffset extends CjsModel {
  static {
    ({
      e: [_init_minOffset, _init_extra_minOffset, _init_maxOffset, _init_extra_maxOffset, _init_consistentRandom, _init_extra_consistentRandom, _init_uniformOffset, _init_extra_uniformOffset],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnModifierRandomOffset",
      family: "eve/distribution/spawnModifiers"
    })], [[[io, io.persist, type, type.vec3], 16, "minOffset"], [[io, io.persist, type, type.vec3], 16, "maxOffset"], [[io, io.persist, type, type.boolean], 16, "consistentRandom"], [[io, io.persist, type, type.boolean], 16, "uniformOffset"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_uniformOffset(this);
  }
  /** m_minOffset (Vector3) [READWRITE, PERSIST] */
  minOffset = _init_minOffset(this, vec3.create());

  /** m_maxOffset (Vector3) [READWRITE, PERSIST] */
  maxOffset = (_init_extra_minOffset(this), _init_maxOffset(this, vec3.create()));

  /** m_consistentRandom (bool) [READWRITE, PERSIST] */
  consistentRandom = (_init_extra_maxOffset(this), _init_consistentRandom(this, false));

  /** m_uniformOffset (bool) [READWRITE, PERSIST] */
  uniformOffset = (_init_extra_consistentRandom(this), _init_uniformOffset(this, false));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnModifierRandomOffset };
//# sourceMappingURL=EveDistributionSpawnModifierRandomOffset.js.map
