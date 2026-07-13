import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_vertexBuffer, _init_extra_vertexBuffer, _init_indexBuffer, _init_extra_indexBuffer, _init_buffers, _init_extra_buffers;

/** DecalMeshCache (eve/attachment/decal) - generated from schema shapeHash 1a839484.... */
let _DecalMeshCache;
class DecalMeshCache extends CjsModel {
  static {
    ({
      e: [_init_vertexBuffer, _init_extra_vertexBuffer, _init_indexBuffer, _init_extra_indexBuffer, _init_buffers, _init_extra_buffers],
      c: [_DecalMeshCache, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "DecalMeshCache",
      family: "eve/attachment/decal"
    })], [[type.rawStruct("uint8_t[]"), 0, "vertexBuffer"], [type.rawStruct("uint8_t[]"), 0, "indexBuffer"], [type.list("MeshBuffers"), 0, "buffers"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_buffers(this);
  }
  /** vertexBuffer (std::unique_ptr<uint8_t[]>) */
  vertexBuffer = _init_vertexBuffer(this, null);

  /** indexBuffer (std::unique_ptr<uint8_t[]>) */
  indexBuffer = (_init_extra_vertexBuffer(this), _init_indexBuffer(this, null));

  /** buffers (std::vector<MeshBuffers>) */
  buffers = (_init_extra_indexBuffer(this), _init_buffers(this, []));
  static {
    _initClass();
  }
}

export { _DecalMeshCache as DecalMeshCache };
//# sourceMappingURL=DecalMeshCache.js.map
