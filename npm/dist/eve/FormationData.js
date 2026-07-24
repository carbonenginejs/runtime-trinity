import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { type } from '@carbonenginejs/runtime-utils/schema';

let _initClass, _init_assignedSlot, _init_extra_assignedSlot;
let _FormationData;
class FormationData extends CjsModel {
  static {
    ({
      e: [_init_assignedSlot, _init_extra_assignedSlot],
      c: [_FormationData, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "FormationData",
      family: "eve/child/behaviors"
    })], [[[type, type.int32], 16, "assignedSlot"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_assignedSlot(this);
  }
  assignedSlot = _init_assignedSlot(this, -1);
  static {
    _initClass();
  }
}

export { _FormationData as FormationData };
//# sourceMappingURL=FormationData.js.map
