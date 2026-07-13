import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_mDIK, _init_extra_mDIK, _init_mName, _init_extra_mName, _init_mDescription, _init_extra_mDescription;

/** UIScancode (ui) - generated from schema shapeHash 9120ce77.... */
let _UIScancode;
class UIScancode extends CjsModel {
  static {
    ({
      e: [_init_mDIK, _init_extra_mDIK, _init_mName, _init_extra_mName, _init_mDescription, _init_extra_mDescription],
      c: [_UIScancode, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "UIScancode",
      family: "ui"
    })], [[[type, type.uint8], 16, "mDIK"], [type.objectRef("char"), 0, "mName"], [type.objectRef("char"), 0, "mDescription"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_mDescription(this);
  }
  /** mDIK (unsigned char) */
  mDIK = _init_mDIK(this, 0);

  /** mName (const char*) */
  mName = (_init_extra_mDIK(this), _init_mName(this, null));

  /** mDescription (const char*) */
  mDescription = (_init_extra_mName(this), _init_mDescription(this, null));
  static {
    _initClass();
  }
}

export { _UIScancode as UIScancode };
//# sourceMappingURL=UIScancode.js.map
