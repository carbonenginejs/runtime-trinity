import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_stride, _init_extra_stride, _init_offset, _init_extra_offset, _init_data, _init_extra_data;

/** Tr2ParticleStreamIterator (particle) - generated from schema shapeHash 85a64726.... */
let _Tr2ParticleStreamIte;
class Tr2ParticleStreamIterator extends CjsModel {
  static {
    ({
      e: [_init_stride, _init_extra_stride, _init_offset, _init_extra_offset, _init_data, _init_extra_data],
      c: [_Tr2ParticleStreamIte, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ParticleStreamIterator",
      family: "particle"
    })], [[[type, type.unknown], 16, "stride"], [type.objectRef("m_data += m_stride"), 0, "offset"], [type.objectRef("float"), 0, "data"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_data(this);
  }
  /** m_stride (m_data +=) */
  stride = _init_stride(this, null);

  /** offset (m_data += m_stride *) */
  offset = (_init_extra_stride(this), _init_offset(this, null));

  /** m_data (float*) */
  data = (_init_extra_offset(this), _init_data(this, null));
  static {
    _initClass();
  }
}

export { _Tr2ParticleStreamIte as Tr2ParticleStreamIterator };
//# sourceMappingURL=Tr2ParticleStreamIterator.js.map
