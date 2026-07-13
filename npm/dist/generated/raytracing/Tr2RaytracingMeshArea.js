import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_areaIndex, _init_extra_areaIndex, _init_blas, _init_extra_blas, _init_blasOutdated, _init_extra_blasOutdated, _init_true, _init_extra_true;

/** Tr2RaytracingMeshArea (raytracing) - generated from schema shapeHash 42a64c2d.... */
let _Tr2RaytracingMeshAre;
class Tr2RaytracingMeshArea extends CjsModel {
  static {
    ({
      e: [_init_areaIndex, _init_extra_areaIndex, _init_blas, _init_extra_blas, _init_blasOutdated, _init_extra_blasOutdated, _init_true, _init_extra_true],
      c: [_Tr2RaytracingMeshAre, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2RaytracingMeshArea",
      family: "raytracing"
    })], [[[type, type.uint32], 16, "areaIndex"], [type.rawStruct("Tr2RtBottomLevelAccelerationStructureAL"), 0, "blas"], [[type, type.boolean], 16, "blasOutdated"], [[type, type.unknown], 16, "true"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_true(this);
  }
  /** m_areaIndex (uint32_t) */
  areaIndex = _init_areaIndex(this, 0);

  /** m_blas (Tr2RtBottomLevelAccelerationStructureAL) */
  blas = (_init_extra_areaIndex(this), _init_blas(this, null));

  /** m_blasOutdated (bool) */
  blasOutdated = (_init_extra_blas(this), _init_blasOutdated(this, false));

  /** true (m_blasOutdated =) */
  true = (_init_extra_blasOutdated(this), _init_true(this, null));
  static {
    _initClass();
  }
}

export { _Tr2RaytracingMeshAre as Tr2RaytracingMeshArea };
//# sourceMappingURL=Tr2RaytracingMeshArea.js.map
