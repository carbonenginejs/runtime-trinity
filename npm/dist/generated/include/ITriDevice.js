import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_adapter, _init_extra_adapter;

/** ITriDevice (include) - generated from schema shapeHash 3a872fd8.... */
let _ITriDevice;
class ITriDevice extends CjsModel {
  static {
    ({
      e: [_init_adapter, _init_extra_adapter],
      c: [_ITriDevice, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITriDevice",
      family: "include"
    })], [[[type, type.uint32], 16, "adapter"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_adapter(this);
  }
  /** adapter (uint32_t) */
  adapter = _init_adapter(this, 0);
  static {
    _initClass();
  }
}

export { _ITriDevice as ITriDevice };
//# sourceMappingURL=ITriDevice.js.map
