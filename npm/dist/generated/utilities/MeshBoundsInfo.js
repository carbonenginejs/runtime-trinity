import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_typeName, _init_extra_typeName, _init_bounds, _init_extra_bounds, _init_areaCount, _init_extra_areaCount, _init_areaInfos, _init_extra_areaInfos, _init_sourceMeshIndex, _init_extra_sourceMeshIndex, _init_maxScreenSize, _init_extra_maxScreenSize, _init_uvDensityCount, _init_extra_uvDensityCount, _init_uvDensities, _init_extra_uvDensities;

/** MeshBoundsInfo (utilities) - generated from schema shapeHash 23a28ef4.... */
let _MeshBoundsInfo;
class MeshBoundsInfo extends CjsModel {
  static {
    ({
      e: [_init_typeName, _init_extra_typeName, _init_bounds, _init_extra_bounds, _init_areaCount, _init_extra_areaCount, _init_areaInfos, _init_extra_areaInfos, _init_sourceMeshIndex, _init_extra_sourceMeshIndex, _init_maxScreenSize, _init_extra_maxScreenSize, _init_uvDensityCount, _init_extra_uvDensityCount, _init_uvDensities, _init_extra_uvDensities],
      c: [_MeshBoundsInfo, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "MeshBoundsInfo",
      family: "utilities"
    })], [[type.objectRef("char"), 0, "typeName"], [type.rawStruct("BoundingBox"), 0, "bounds"], [[type, type.unknown], 16, "areaCount"], [type.objectRef("AreaBoundsInfo"), 0, "areaInfos"], [[type, type.unknown], 16, "sourceMeshIndex"], [[type, type.unknown], 16, "maxScreenSize"], [[type, type.unknown], 16, "uvDensityCount"], [type.objectRef("granny_real32"), 0, "uvDensities"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_uvDensities(this);
  }
  /** typeName (const char*) */
  typeName = _init_typeName(this, null);

  /** bounds (BoundingBox) */
  bounds = (_init_extra_typeName(this), _init_bounds(this, null));

  /** areaCount (granny_int32) */
  areaCount = (_init_extra_bounds(this), _init_areaCount(this, null));

  /** areaInfos (AreaBoundsInfo*) */
  areaInfos = (_init_extra_areaCount(this), _init_areaInfos(this, null));

  /** sourceMeshIndex (granny_int32) */
  sourceMeshIndex = (_init_extra_areaInfos(this), _init_sourceMeshIndex(this, null));

  /** maxScreenSize (granny_int32) */
  maxScreenSize = (_init_extra_sourceMeshIndex(this), _init_maxScreenSize(this, null));

  /** uvDensityCount (granny_int32) */
  uvDensityCount = (_init_extra_maxScreenSize(this), _init_uvDensityCount(this, null));

  /** uvDensities (granny_real32*) */
  uvDensities = (_init_extra_uvDensityCount(this), _init_uvDensities(this, null));
  static {
    _initClass();
  }
}

export { _MeshBoundsInfo as MeshBoundsInfo };
//# sourceMappingURL=MeshBoundsInfo.js.map
