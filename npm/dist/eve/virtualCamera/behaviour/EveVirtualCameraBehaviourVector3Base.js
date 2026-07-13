import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2CurveScalar as _Tr2CurveScalar } from '../../../curves/Tr2CurveScalar.js';
import { Tr2CurveExtrapolation } from '../../../curves/enums.js';

let _initProto, _initClass, _init_active, _init_extra_active, _init_name, _init_extra_name;
let _EveVirtualCameraBeha;
class EveVirtualCameraBehaviourVector3Base extends CjsModel {
  static {
    ({
      e: [_init_active, _init_extra_active, _init_name, _init_extra_name, _initProto],
      c: [_EveVirtualCameraBeha, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraBehaviourVector3Base",
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
  OnModified(value = null) {
    if (!value || CjsModel.hasModifiedProperty(value, "name")) {
      this.SetName(this.name);
    }
    return true;
  }
  IsActive() {
    return this.active;
  }
  static createConstantCurve(value = 1) {
    const curve = new _Tr2CurveScalar();
    curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);
    curve.AddKey(0, value);
    curve.AddKey(1, value);
    return curve;
  }
  static createEaseCurve() {
    const curve = new _Tr2CurveScalar();
    curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);
    curve.AddKey(0, 0);
    curve.AddKey(1, 1);
    return curve;
  }
  static rotateVectorWithAnchor(out, value, anchorForwardDirection) {
    const horizontal = vec3.fromValues(anchorForwardDirection[0], 0, anchorForwardDirection[2]);
    if (vec3.squaredLength(horizontal) === 0) {
      return vec3.copy(out, value);
    }
    vec3.normalize(horizontal, horizontal);
    const yaw = Math.atan2(horizontal[0], horizontal[2]);
    const rotation = quat.setAxisAngle(quat.create(), vec3.fromValues(0, 1, 0), yaw);
    return vec3.transformQuat(out, value, rotation);
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraBeha as EveVirtualCameraBehaviourVector3Base };
//# sourceMappingURL=EveVirtualCameraBehaviourVector3Base.js.map
