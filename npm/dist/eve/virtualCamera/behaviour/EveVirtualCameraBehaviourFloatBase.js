import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_active, _init_extra_active, _init_name, _init_extra_name;
let _EveVirtualCameraBeha;
class EveVirtualCameraBehaviourFloatBase extends CjsModel {
  static {
    ({
      e: [_init_active, _init_extra_active, _init_name, _init_extra_name, _initProto],
      c: [_EveVirtualCameraBeha, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraBehaviourFloatBase",
      family: "eve/virtualCamera/behaviour"
    })], [[[io, io.persist, type, type.boolean], 16, "active"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsActive"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  active = (_initProto(this), _init_active(this, true));
  name = (_init_extra_active(this), _init_name(this, ""));
  GetName() {
    return this.name;
  }
  SetName(name) {
    this.name = String(name);
  }
  OnModified(_options = {}) {
    this.SetName(this.name);
    return true;
  }
  IsActive() {
    return this.active;
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraBeha as EveVirtualCameraBehaviourFloatBase };
//# sourceMappingURL=EveVirtualCameraBehaviourFloatBase.js.map
