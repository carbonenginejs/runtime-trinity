import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { EveVirtualCameraTransitionBase as _EveVirtualCameraTran$1 } from './EveVirtualCameraTransitionBase.js';

let _initProto, _initClass;
let _EveVirtualCameraTran;
class EveVirtualCameraTransitionCut extends _EveVirtualCameraTran$1 {
  static {
    ({
      e: [_initProto],
      c: [_EveVirtualCameraTran, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraTransitionCut",
      family: "eve/virtualCamera/transition"
    })], [[[carbon, carbon.method, impl, impl.implemented], 18, "IsComplete"], [[carbon, carbon.method, impl, impl.implemented], 18, "Update"]], 0, void 0, _EveVirtualCameraTran$1));
  }
  constructor(...args) {
    super(...args);
    _initProto(this);
  }
  IsComplete() {
    return true;
  }
  Update(deltaTime) {
    super.Update(deltaTime);
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraTran as EveVirtualCameraTransitionCut };
//# sourceMappingURL=EveVirtualCameraTransitionCut.js.map
