import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_dimension, _init_extra_dimension, _init_usedByGPU, _init_extra_usedByGPU, _init_usageIndex, _init_extra_usageIndex;

/** Tr2ParticleElementDeclaration (particle) - generated from schema shapeHash 272e6639.... */
let _Tr2ParticleElementDe;
class Tr2ParticleElementDeclaration extends CjsModel {
  static {
    ({
      e: [_init_dimension, _init_extra_dimension, _init_usedByGPU, _init_extra_usedByGPU, _init_usageIndex, _init_extra_usageIndex],
      c: [_Tr2ParticleElementDe, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ParticleElementDeclaration",
      family: "particle"
    })], [[[io, io.persist, type, type.uint32], 16, "dimension"], [[io, io.persist, type, type.boolean], 16, "usedByGPU"], [[io, io.persist, type, type.uint32], 16, "usageIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_usageIndex(this);
  }
  /** m_dimension (uint32_t) [READWRITE, PERSIST] */
  dimension = _init_dimension(this, 1);

  /** m_usedByGPU (bool) [READWRITE, PERSIST] */
  usedByGPU = (_init_extra_dimension(this), _init_usedByGPU(this, true));

  /** m_usageIndex (uint32_t) [READWRITE, PERSIST] */
  usageIndex = (_init_extra_usedByGPU(this), _init_usageIndex(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2ParticleElementDe as Tr2ParticleElementDeclaration };
//# sourceMappingURL=Tr2ParticleElementDeclaration.js.map
