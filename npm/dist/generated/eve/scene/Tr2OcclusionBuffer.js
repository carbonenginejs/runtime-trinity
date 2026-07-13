import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_management, _init_extra_management, _init_buffer, _init_extra_buffer, _init_free, _init_extra_free, _init_clear, _init_extra_clear, _init_size, _init_extra_size, _init_ELEMENT_SIZE, _init_extra_ELEMENT_SIZE;

/** Tr2OcclusionBuffer (eve/scene) - generated from schema shapeHash 8bb43a7a.... */
let _Tr2OcclusionBuffer;
class Tr2OcclusionBuffer extends CjsModel {
  static {
    ({
      e: [_init_management, _init_extra_management, _init_buffer, _init_extra_buffer, _init_free, _init_extra_free, _init_clear, _init_extra_clear, _init_size, _init_extra_size, _init_ELEMENT_SIZE, _init_extra_ELEMENT_SIZE],
      c: [_Tr2OcclusionBuffer, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2OcclusionBuffer",
      family: "eve/scene"
    })], [[type.objectRef("Tr2Effect"), 0, "management"], [type.objectRef("Tr2GpuBuffer"), 0, "buffer"], [type.list("uint32_t"), 0, "free"], [type.list("uint32_t"), 0, "clear"], [[type, type.uint32], 16, "size"], [[type, type.unknown], 16, "ELEMENT_SIZE"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_ELEMENT_SIZE(this);
  }
  /** m_management (Tr2EffectPtr) */
  management = _init_management(this, null);

  /** m_buffer (Tr2GpuBufferPtr) */
  buffer = (_init_extra_management(this), _init_buffer(this, null));

  /** m_free (std::vector<uint32_t>) */
  free = (_init_extra_buffer(this), _init_free(this, []));

  /** m_clear (std::vector<uint32_t>) */
  clear = (_init_extra_free(this), _init_clear(this, []));

  /** m_size (uint32_t) */
  size = (_init_extra_clear(this), _init_size(this, 0));

  /** ELEMENT_SIZE (static const uint32_t) */
  ELEMENT_SIZE = (_init_extra_size(this), _init_ELEMENT_SIZE(this, 13));
  static {
    _initClass();
  }
}

export { _Tr2OcclusionBuffer as Tr2OcclusionBuffer };
//# sourceMappingURL=Tr2OcclusionBuffer.js.map
