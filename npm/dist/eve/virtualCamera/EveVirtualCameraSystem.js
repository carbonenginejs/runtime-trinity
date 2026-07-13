import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { EveVirtualCamera as _EveVirtualCamera } from './EveVirtualCamera.js';
import { EveVirtualCameraTransitionCut as _EveVirtualCameraTran } from './transition/EveVirtualCameraTransitionCut.js';
import { EveVirtualCameraTransitionLerp as _EveVirtualCameraTran$1 } from './transition/EveVirtualCameraTransitionLerp.js';

let _initProto, _initClass, _init_externalCamera, _init_extra_externalCamera, _init_cameras, _init_extra_cameras, _init_mainCamera, _init_extra_mainCamera, _init_transition, _init_extra_transition;
let _EveVirtualCameraSyst;
class EveVirtualCameraSystem extends CjsModel {
  static {
    ({
      e: [_init_externalCamera, _init_extra_externalCamera, _init_cameras, _init_extra_cameras, _init_mainCamera, _init_extra_mainCamera, _init_transition, _init_extra_transition, _initProto],
      c: [_EveVirtualCameraSyst, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveVirtualCameraSystem",
      family: "eve/virtualCamera"
    })], [[[io, io.persist, void 0, type.objectRef("EveVirtualCamera")], 16, "externalCamera"], [[io, io.persist, void 0, type.list("EveVirtualCamera")], 16, "cameras"], [[io, io.persist, void 0, type.objectRef("EveVirtualCamera")], 16, "mainCamera"], [[io, io.read, void 0, type.objectRef("EveVirtualCameraTransitionBase")], 16, "transition"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCurrentCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetMainCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCameraByName"], [[carbon, carbon.method, impl, impl.implemented], 18, "CutToCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "LerpToCamera"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsExternallyControlled"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"]], 0, void 0, CjsModel));
  }
  externalCamera = (_initProto(this), _init_externalCamera(this, null));
  cameras = (_init_extra_externalCamera(this), _init_cameras(this, []));
  mainCamera = (_init_extra_cameras(this), _init_mainCamera(this, null));
  transition = (_init_extra_mainCamera(this), _init_transition(this, null));
  #lastUpdate = (_init_extra_transition(this), 0);
  constructor() {
    super();
    this.externalCamera = new _EveVirtualCamera();
    this.externalCamera.SetName("externalCamera");
    this.externalCamera.SetAnimationTimelineLength(0);
    this.mainCamera = this.externalCamera;
  }
  Initialize() {
    return true;
  }
  GetCurrentCamera() {
    return this.transition ? this.transition.GetCamera() : this.GetMainCamera();
  }
  AddCamera(camera) {
    if (camera === this.externalCamera || this.cameras.includes(camera)) {
      return false;
    }
    this.cameras.push(camera);
    return true;
  }
  GetMainCamera() {
    return this.mainCamera;
  }
  GetCameraByName(name) {
    if (name === this.externalCamera?.GetName()) {
      return this.externalCamera;
    }
    return this.cameras.find(camera => camera?.GetName?.() === name) ?? null;
  }
  CutToCamera(camera) {
    if (camera && camera !== this.GetMainCamera()) {
      this.#setMainCameraWithTransition(camera, new _EveVirtualCameraTran());
    }
  }
  LerpToCamera(camera, transitionTime = 1) {
    if (camera && camera !== this.GetMainCamera()) {
      const transition = new _EveVirtualCameraTran$1();
      transition.SetTransitionTime(transitionTime);
      this.#setMainCameraWithTransition(camera, transition);
    }
  }
  IsExternallyControlled() {
    return this.GetCurrentCamera() === this.externalCamera;
  }
  Update(simTime) {
    const time = Number(simTime) || 0;
    if (this.#lastUpdate === 0) {
      this.#lastUpdate = time;
    }
    const deltaTime = time - this.#lastUpdate;
    this.#lastUpdate = time;
    for (const camera of this.cameras) {
      camera?.Update?.(deltaTime);
    }
    this.externalCamera?.Update?.(deltaTime);
    if (this.transition) {
      this.transition.Update(deltaTime);
      if (this.transition.IsComplete()) {
        this.transition = null;
      }
    }
  }
  #setMainCamera(camera) {
    this.transition = null;
    this.mainCamera = camera;
    this.AddCamera(camera);
  }
  #setMainCameraWithTransition(camera, transition) {
    const current = this.GetMainCamera();
    this.#setMainCamera(camera);
    transition.SetSource(current);
    transition.SetTarget(this.GetMainCamera());
    transition.Play();
    this.transition = transition;
  }
  static {
    _initClass();
  }
}

export { _EveVirtualCameraSyst as EveVirtualCameraSystem };
//# sourceMappingURL=EveVirtualCameraSystem.js.map
