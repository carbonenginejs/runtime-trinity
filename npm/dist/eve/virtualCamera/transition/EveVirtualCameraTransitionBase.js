import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { EveVirtualCamera as _EveVirtualCamera } from '../EveVirtualCamera.js';

let _initProto, _initClass, _init_sourceCamera, _init_extra_sourceCamera, _init_targetCamera, _init_extra_targetCamera, _init_transitionCamera, _init_extra_transitionCamera;
let _EveVirtualCameraTran;
class EveVirtualCameraTransitionBase extends CjsModel {
  static {
    ({
      e: [_init_sourceCamera, _init_extra_sourceCamera, _init_targetCamera, _init_extra_targetCamera, _init_transitionCamera, _init_extra_transitionCamera, _initProto],
      c: [_EveVirtualCameraTran, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraTransitionBase",
      family: "eve/virtualCamera/transition"
    })], [[type.objectRef("EveVirtualCamera"), 0, "sourceCamera"], [type.objectRef("EveVirtualCamera"), 0, "targetCamera"], [type.objectRef("EveVirtualCamera"), 0, "transitionCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSource"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetTarget"], [[carbon, carbon.method, impl, impl.implemented], 18, "Play"], [[carbon, carbon.method, impl, impl.implemented], 18, "Stop"], [[carbon, carbon.method, impl, impl.implemented], 18, "Update"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_transitionCamera(this);
  }
  sourceCamera = (_initProto(this), _init_sourceCamera(this, null));
  targetCamera = (_init_extra_sourceCamera(this), _init_targetCamera(this, null));
  transitionCamera = (_init_extra_targetCamera(this), _init_transitionCamera(this, null));
  GetCamera() {
    return this.IsComplete() ? this.targetCamera : this.transitionCamera;
  }
  SetSource(camera) {
    this.sourceCamera = camera;
  }
  SetTarget(camera) {
    this.targetCamera = camera;
  }
  Play() {
    this.transitionCamera = new _EveVirtualCamera();
    this.transitionCamera.SetName("transitionCamera");
    if (this.sourceCamera) {
      this.transitionCamera.CopyTransform(this.sourceCamera);
    }
    this.targetCamera?.Reset();
    this.transitionCamera.Play();
  }
  Stop() {
    this.targetCamera?.Play();
    this.sourceCamera?.Pause();
    this.transitionCamera?.Pause();
  }
  Update(deltaTime) {
    this.transitionCamera?.Update(deltaTime);
    if (this.IsComplete()) {
      this.Stop();
    }
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraTran as EveVirtualCameraTransitionBase };
//# sourceMappingURL=EveVirtualCameraTransitionBase.js.map
