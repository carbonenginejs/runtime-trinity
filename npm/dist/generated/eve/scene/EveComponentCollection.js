import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_bit, _init_extra_bit, _init_collection, _init_extra_collection;

/** EveComponentCollection (eve/scene) - generated from schema shapeHash 8a69309e.... */
let _EveComponentCollecti;
class EveComponentCollection extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_bit, _init_extra_bit, _init_collection, _init_extra_collection],
      c: [_EveComponentCollecti, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveComponentCollection",
      family: "eve/scene"
    })], [[type.objectRef("char"), 0, "name"], [[type, type.uint32], 16, "bit"], [type.list("T"), 0, "collection"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_collection(this);
  }
  /** m_name (const char*) */
  name = _init_name(this, null);

  /** m_bit (uint32_t) */
  bit = (_init_extra_name(this), _init_bit(this, 0));

  /** m_collection (std::vector<T*>) */
  collection = (_init_extra_bit(this), _init_collection(this, []));
  static {
    _initClass();
  }
}

export { _EveComponentCollecti as EveComponentCollection };
//# sourceMappingURL=EveComponentCollection.js.map
