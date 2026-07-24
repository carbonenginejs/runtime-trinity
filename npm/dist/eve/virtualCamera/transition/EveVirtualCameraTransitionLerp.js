import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { Tr2CurveScalar as _Tr2CurveScalar } from '../../../curves/Tr2CurveScalar.js';
import { EveVirtualCameraTransitionBase as _EveVirtualCameraTran$1 } from './EveVirtualCameraTransitionBase.js';

let _initProto, _initClass, _init_tansitionTime, _init_extra_tansitionTime;
let _EveVirtualCameraTran;
class EveVirtualCameraTransitionLerp extends _EveVirtualCameraTran$1 {
  static {
    ({
      e: [_init_tansitionTime, _init_extra_tansitionTime, _initProto],
      c: [_EveVirtualCameraTran, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraTransitionLerp",
      family: "eve/virtualCamera/transition"
    })], [[[io, io.persist, type, type.float32], 16, "tansitionTime"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsComplete"], [[carbon, carbon.method, impl, impl.implemented], 18, "Play"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTransitionTime"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetTransitionTime"]], 0, void 0, _EveVirtualCameraTran$1));
  }
  tansitionTime = (_initProto(this), _init_tansitionTime(this, 1));
  #localTime = (_init_extra_tansitionTime(this), 0);
  #transitionCurve = new _Tr2CurveScalar();
  constructor() {
    super();
    this.#transitionCurve.AddKey(0, 0);
    this.#transitionCurve.AddKey(1, 1);
  }
  IsComplete() {
    return this.#localTime > this.tansitionTime;
  }
  Play() {
    this.#localTime = 0;
    super.Play();
    if (this.targetCamera) {
      this.targetCamera.UpdateToLocalTime(-this.tansitionTime);
      this.targetCamera.Play();
    }
  }
  Update(deltaTime) {
    this.#localTime += deltaTime;
    if (this.transitionCamera && this.sourceCamera && this.targetCamera) {
      let amount = 1;
      if (this.tansitionTime > 0) {
        amount = Math.max(0, Math.min(1, this.#transitionCurve.GetValue(this.#localTime / this.tansitionTime)));
      }
      this.transitionCamera.UpdateExternal(vec3.lerp(vec3.create(), this.sourceCamera.GetPosition(), this.targetCamera.GetPosition(), amount), vec3.lerp(vec3.create(), this.sourceCamera.GetPointOfInterest(), this.targetCamera.GetPointOfInterest(), amount), this.sourceCamera.GetFov() + (this.targetCamera.GetFov() - this.sourceCamera.GetFov()) * amount, this.sourceCamera.GetRoll() + (this.targetCamera.GetRoll() - this.sourceCamera.GetRoll()) * amount);
    }
    super.Update(deltaTime);
  }
  GetTransitionTime() {
    return this.tansitionTime;
  }
  SetTransitionTime(value) {
    this.tansitionTime = value;
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraTran as EveVirtualCameraTransitionLerp };
//# sourceMappingURL=EveVirtualCameraTransitionLerp.js.map
