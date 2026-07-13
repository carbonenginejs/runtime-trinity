import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { type } from '@carbonenginejs/core-types/schema';

let _initClass, _init_agentAccel, _init_extra_agentAccel, _init_inertiaWeight, _init_extra_inertiaWeight;
let _InertiaData;
class InertiaData extends CjsModel {
  static {
    ({
      e: [_init_agentAccel, _init_extra_agentAccel, _init_inertiaWeight, _init_extra_inertiaWeight],
      c: [_InertiaData, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "InertiaData",
      family: "eve/child/behaviors"
    })], [[[type, type.vec3], 16, "agentAccel"], [[type, type.float32], 16, "inertiaWeight"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_inertiaWeight(this);
  }
  agentAccel = _init_agentAccel(this, vec3.create());
  inertiaWeight = (_init_extra_agentAccel(this), _init_inertiaWeight(this, 0));
  static {
    _initClass();
  }
}

export { _InertiaData as InertiaData };
//# sourceMappingURL=InertiaData.js.map
