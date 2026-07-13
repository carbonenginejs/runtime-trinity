import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveVirtualCameraBehaviourVector3Base as _EveVirtualCameraBeha$1 } from './EveVirtualCameraBehaviourVector3Base.js';

let _initProto, _initClass, _init_scaleCurve, _init_extra_scaleCurve, _init_proportional, _init_extra_proportional, _init_value, _init_extra_value;
let _EveVirtualCameraBeha;
class EveVirtualCameraBehaviourVector3MoveForward extends _EveVirtualCameraBeha$1 {
  static {
    ({
      e: [_init_scaleCurve, _init_extra_scaleCurve, _init_proportional, _init_extra_proportional, _init_value, _init_extra_value, _initProto],
      c: [_EveVirtualCameraBeha, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraBehaviourVector3MoveForward",
      family: "eve/virtualCamera/behaviour"
    })], [[[io, io.persist, void 0, type.objectRef("Tr2CurveScalar")], 16, "scaleCurve"], [[io, io.persist, type, type.boolean], 16, "proportional"], [[io, io.persist, type, type.float32], 16, "value"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"]], 0, void 0, _EveVirtualCameraBeha$1));
  }
  scaleCurve = (_initProto(this), _init_scaleCurve(this, null));
  proportional = (_init_extra_scaleCurve(this), _init_proportional(this, true));
  value = (_init_extra_proportional(this), _init_value(this, 0));
  constructor(name = "Move Forward") {
    super(), _init_extra_value(this);
    this.scaleCurve = _EveVirtualCameraBeha$1.createConstantCurve(1);
    this.SetName(name);
  }
  SetName(name) {
    super.SetName(name);
    this.scaleCurve?.SetName?.(`${this.name} - Scale Curve`);
  }
  Update(camera, _current, _deltaTime, localElapsedTime, _anchorPosition, anchorRadius, _anchorForwardDirection, out = vec3.create()) {
    return vec3.scale(out, camera.GetForwardDirection(out), this.GetCurrentValue(camera, localElapsedTime, anchorRadius));
  }
  GetCurrentValue(camera, localElapsedTime, anchorRadius) {
    const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
    const time = duration !== 0 ? localElapsedTime / duration : 0;
    let value = this.value * Number(this.scaleCurve?.GetValue?.(time) ?? 1);
    if (this.proportional) {
      value *= anchorRadius;
    }
    return value;
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraBeha as EveVirtualCameraBehaviourVector3MoveForward };
//# sourceMappingURL=EveVirtualCameraBehaviourVector3MoveForward.js.map
