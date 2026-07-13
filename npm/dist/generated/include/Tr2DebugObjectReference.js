import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_object, _init_extra_object, _init_area, _init_extra_area;

/** Tr2DebugObjectReference (include) - generated from schema shapeHash e3a83946.... */
let _Tr2DebugObjectRefere;
class Tr2DebugObjectReference extends CjsModel {
  static {
    ({
      e: [_init_object, _init_extra_object, _init_area, _init_extra_area],
      c: [_Tr2DebugObjectRefere, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DebugObjectReference",
      family: "include"
    })], [[type.objectRef("IRoot"), 0, "object"], [[type, type.uint32], 16, "area"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_area(this);
  }
  /** m_object (IRootPtr) */
  object = _init_object(this, null);

  /** m_area (uint32_t) */
  area = (_init_extra_object(this), _init_area(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2DebugObjectRefere as Tr2DebugObjectReference };
//# sourceMappingURL=Tr2DebugObjectReference.js.map
