import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_position, _init_extra_position, _init_pointOfInterestAnchorCenter, _init_extra_pointOfInterestAnchorCenter, _init_positionAnchorCenter, _init_extra_positionAnchorCenter, _init_pointOfInterestAnchors, _init_extra_pointOfInterestAnchors, _init_positionAnchors, _init_extra_positionAnchors, _init_localElapsedTime, _init_extra_localElapsedTime, _init_pointOfInterest, _init_extra_pointOfInterest, _init_pointOfInterestAnchorRadius, _init_extra_pointOfInterestAnchorRadius, _init_positionAnchorRadius, _init_extra_positionAnchorRadius, _init_positionAnchorForwardDirection, _init_extra_positionAnchorForwardDirection, _init_pointOfInterestAnchorForwardDirection, _init_extra_pointOfInterestAnchorForwardDirection, _init_fovBehaviours, _init_extra_fovBehaviours, _init_pointOfInterestBehaviours, _init_extra_pointOfInterestBehaviours, _init_positionBehaviours, _init_extra_positionBehaviours, _init_rollBehaviours, _init_extra_rollBehaviours, _init_roll, _init_extra_roll, _init_fov, _init_extra_fov, _init_animationTimelineLength, _init_extra_animationTimelineLength, _init_name, _init_extra_name, _init_running, _init_extra_running;
const SCRUB_INCREMENT_DT = 1 / 60;
const SCRUB_MAX_ITERATIONS = 20;
let _EveVirtualCamera;
new class extends _identity {
  static [class EveVirtualCamera extends CjsModel {
    static {
      ({
        e: [_init_position, _init_extra_position, _init_pointOfInterestAnchorCenter, _init_extra_pointOfInterestAnchorCenter, _init_positionAnchorCenter, _init_extra_positionAnchorCenter, _init_pointOfInterestAnchors, _init_extra_pointOfInterestAnchors, _init_positionAnchors, _init_extra_positionAnchors, _init_localElapsedTime, _init_extra_localElapsedTime, _init_pointOfInterest, _init_extra_pointOfInterest, _init_pointOfInterestAnchorRadius, _init_extra_pointOfInterestAnchorRadius, _init_positionAnchorRadius, _init_extra_positionAnchorRadius, _init_positionAnchorForwardDirection, _init_extra_positionAnchorForwardDirection, _init_pointOfInterestAnchorForwardDirection, _init_extra_pointOfInterestAnchorForwardDirection, _init_fovBehaviours, _init_extra_fovBehaviours, _init_pointOfInterestBehaviours, _init_extra_pointOfInterestBehaviours, _init_positionBehaviours, _init_extra_positionBehaviours, _init_rollBehaviours, _init_extra_rollBehaviours, _init_roll, _init_extra_roll, _init_fov, _init_extra_fov, _init_animationTimelineLength, _init_extra_animationTimelineLength, _init_name, _init_extra_name, _init_running, _init_extra_running, _initProto],
        c: [_EveVirtualCamera, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveVirtualCamera",
        family: "eve/virtualCamera"
      })], [[[io, io.read, type, type.vec3], 16, "position"], [[io, io.read, type, type.vec3], 16, "pointOfInterestAnchorCenter"], [[io, io.read, type, type.vec3], 16, "positionAnchorCenter"], [[io, io.read, void 0, type.list("IEveSpaceObject2")], 16, "pointOfInterestAnchors"], [[io, io.read, void 0, type.list("IEveSpaceObject2")], 16, "positionAnchors"], [[io, io.read, type, type.float32], 16, "localElapsedTime"], [[io, io.read, type, type.vec3], 16, "pointOfInterest"], [[io, io.read, type, type.float32], 16, "pointOfInterestAnchorRadius"], [[io, io.read, type, type.float32], 16, "positionAnchorRadius"], [[io, io.read, type, type.vec3], 16, "positionAnchorForwardDirection"], [[io, io.read, type, type.vec3], 16, "pointOfInterestAnchorForwardDirection"], [[io, io.persist, void 0, type.list("EveVirtualCameraBehaviourFloatBase")], 16, "fovBehaviours"], [[io, io.persist, void 0, type.list("EveVirtualCameraBehaviourVector3Base")], 16, "pointOfInterestBehaviours"], [[io, io.persist, void 0, type.list("EveVirtualCameraBehaviourVector3Base")], 16, "positionBehaviours"], [[io, io.persist, void 0, type.list("EveVirtualCameraBehaviourFloatBase")], 16, "rollBehaviours"], [[io, io.read, type, type.float32], 16, "roll"], [[io, io.read, type, type.float32], 16, "fov"], [[io, io.persist, type, type.float32], 16, "animationTimelineLength"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.boolean], 16, "running"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetViewMatrix"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetProjectionMatrix"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetViewDirection"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetForwardDirection"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetUpDirection"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetRightDirection"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"], [[carbon, carbon.method, impl, impl.implemented], 18, "Play"], [[carbon, carbon.method, impl, impl.implemented], 18, "Pause"], [[carbon, carbon.method, impl, impl.implemented], 18, "Stop"], [[carbon, carbon.method, impl, impl.implemented], 18, "Reset"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateToLocalTime"], [[carbon, carbon.method, impl, impl.implemented], 18, "CopyTransform"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateExternal"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetAnimationTimelineLength"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetAnimationTimelineLength"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetFov"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetFov"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRoll"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetRoll"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetPosition"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetPosition"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetPointOfInterest"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetPointOfInterest"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddPositionBehaviour"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddPointOfInterestBehaviour"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddFOVBehaviour"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddRollBehaviour"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_running(this);
    }
    position = (_initProto(this), _init_position(this, vec3.create()));
    pointOfInterestAnchorCenter = (_init_extra_position(this), _init_pointOfInterestAnchorCenter(this, vec3.create()));
    positionAnchorCenter = (_init_extra_pointOfInterestAnchorCenter(this), _init_positionAnchorCenter(this, vec3.create()));
    pointOfInterestAnchors = (_init_extra_positionAnchorCenter(this), _init_pointOfInterestAnchors(this, []));
    positionAnchors = (_init_extra_pointOfInterestAnchors(this), _init_positionAnchors(this, []));
    localElapsedTime = (_init_extra_positionAnchors(this), _init_localElapsedTime(this, 0));
    pointOfInterest = (_init_extra_localElapsedTime(this), _init_pointOfInterest(this, vec3.create()));
    pointOfInterestAnchorRadius = (_init_extra_pointOfInterest(this), _init_pointOfInterestAnchorRadius(this, 0));
    positionAnchorRadius = (_init_extra_pointOfInterestAnchorRadius(this), _init_positionAnchorRadius(this, 0));
    positionAnchorForwardDirection = (_init_extra_positionAnchorRadius(this), _init_positionAnchorForwardDirection(this, vec3.create()));
    pointOfInterestAnchorForwardDirection = (_init_extra_positionAnchorForwardDirection(this), _init_pointOfInterestAnchorForwardDirection(this, vec3.create()));
    fovBehaviours = (_init_extra_pointOfInterestAnchorForwardDirection(this), _init_fovBehaviours(this, []));
    pointOfInterestBehaviours = (_init_extra_fovBehaviours(this), _init_pointOfInterestBehaviours(this, []));
    positionBehaviours = (_init_extra_pointOfInterestBehaviours(this), _init_positionBehaviours(this, []));
    rollBehaviours = (_init_extra_positionBehaviours(this), _init_rollBehaviours(this, []));
    roll = (_init_extra_rollBehaviours(this), _init_roll(this, 0));
    fov = (_init_extra_roll(this), _init_fov(this, 1));
    animationTimelineLength = (_init_extra_fov(this), _init_animationTimelineLength(this, 10));
    name = (_init_extra_animationTimelineLength(this), _init_name(this, "Virtual Camera"));
    running = (_init_extra_name(this), _init_running(this, false));
    GetViewMatrix(out = mat4.create()) {
      return mat4.lookAtD3D(out, this.position, this.pointOfInterest, this.GetUpDirection());
    }
    GetProjectionMatrix(aspectRatio, frontClip, backClip, out = mat4.create()) {
      return mat4.perspectiveZO(out, this.fov, aspectRatio, frontClip, backClip);
    }
    GetViewDirection(out = vec3.create()) {
      return vec3.normalize(out, vec3.subtract(out, this.pointOfInterest, this.position));
    }
    GetForwardDirection(out = vec3.create()) {
      return this.GetViewDirection(out);
    }
    GetUpDirection(out = vec3.create()) {
      const view = this.GetForwardDirection(vec3.create());
      const right = vec3.normalize(vec3.create(), vec3.cross(vec3.create(), view, vec3.fromValues(0, 1, 0)));
      vec3.normalize(out, vec3.cross(out, right, view));
      const rotation = quat.setAxisAngle(quat.create(), view, -this.roll * Math.PI / 180);
      return vec3.normalize(out, vec3.transformQuat(out, out, rotation));
    }
    GetRightDirection(out = vec3.create()) {
      return vec3.normalize(out, vec3.cross(out, this.GetForwardDirection(vec3.create()), this.GetUpDirection(vec3.create())));
    }
    Update(deltaTime) {
      const dt = this.running ? deltaTime : 0;
      this.localElapsedTime += dt;
      _EveVirtualCamera.#updateAnchorState(this, "position");
      _EveVirtualCamera.#updateAnchorState(this, "pointOfInterest");
      const position = vec3.clone(this.positionAnchorCenter);
      const pointOfInterest = vec3.clone(this.pointOfInterestAnchorCenter);
      let fov = 1;
      let roll = 0;
      _EveVirtualCamera.#applyVectorBehaviours(this.positionBehaviours, this, position, dt, this.localElapsedTime, this.positionAnchorCenter, this.positionAnchorRadius, this.positionAnchorForwardDirection);
      _EveVirtualCamera.#applyVectorBehaviours(this.pointOfInterestBehaviours, this, pointOfInterest, dt, this.localElapsedTime, this.pointOfInterestAnchorCenter, this.pointOfInterestAnchorRadius, this.pointOfInterestAnchorForwardDirection);
      fov = _EveVirtualCamera.#applyFloatBehaviours(this.fovBehaviours, this, fov, dt, this.localElapsedTime, this.positionAnchorCenter, this.positionAnchorRadius, this.positionAnchorForwardDirection);
      roll = _EveVirtualCamera.#applyFloatBehaviours(this.rollBehaviours, this, roll, dt, this.localElapsedTime, this.positionAnchorCenter, this.positionAnchorRadius, this.positionAnchorForwardDirection);
      if (this.positionBehaviours.length) {
        vec3.copy(this.position, position);
      }
      if (this.pointOfInterestBehaviours.length) {
        vec3.copy(this.pointOfInterest, pointOfInterest);
      }
      if (this.fovBehaviours.length) {
        this.fov = fov;
      }
      if (this.rollBehaviours.length) {
        this.roll = roll;
      }
    }
    Play() {
      this.running = true;
    }
    Pause() {
      this.running = false;
    }
    Stop() {
      this.Reset();
      this.running = false;
    }
    Reset() {
      this.localElapsedTime = 0;
    }
    UpdateToLocalTime(time) {
      const diff = time - this.localElapsedTime;
      let dt = SCRUB_INCREMENT_DT;
      let iterations = Math.floor(Math.abs(diff / dt));
      if (iterations > SCRUB_MAX_ITERATIONS) {
        iterations = SCRUB_MAX_ITERATIONS;
        dt = diff / SCRUB_MAX_ITERATIONS;
      }
      iterations -= 1;
      const wasRunning = this.running;
      this.Play();
      for (let i = 0; i < iterations; i++) {
        this.Update(dt);
      }
      this.Update(time - this.localElapsedTime);
      if (!wasRunning) {
        this.Pause();
      }
    }
    CopyTransform(source) {
      this.fov = source.fov;
      this.roll = source.roll;
      vec3.copy(this.position, source.position);
      vec3.copy(this.pointOfInterest, source.pointOfInterest);
    }
    UpdateExternal(position, pointOfInterest, fov, roll) {
      vec3.copy(this.position, position);
      vec3.copy(this.pointOfInterest, pointOfInterest);
      this.fov = fov;
      this.roll = roll;
    }
    GetName() {
      return this.name;
    }
    SetName(name) {
      this.name = String(name);
    }
    GetAnimationTimelineLength() {
      return this.animationTimelineLength;
    }
    SetAnimationTimelineLength(value) {
      this.animationTimelineLength = value;
    }
    GetFov() {
      return this.fov;
    }
    SetFov(value) {
      this.fov = value;
    }
    GetRoll() {
      return this.roll;
    }
    SetRoll(value) {
      this.roll = value;
    }
    GetPosition(out = vec3.create()) {
      return vec3.copy(out, this.position);
    }
    SetPosition(value) {
      vec3.copy(this.position, value);
    }
    GetPointOfInterest(out = vec3.create()) {
      return vec3.copy(out, this.pointOfInterest);
    }
    SetPointOfInterest(value) {
      vec3.copy(this.pointOfInterest, value);
    }
    AddPositionBehaviour(behaviour) {
      this.positionBehaviours.push(behaviour);
    }
    AddPointOfInterestBehaviour(behaviour) {
      this.pointOfInterestBehaviours.push(behaviour);
    }
    AddFOVBehaviour(behaviour) {
      this.fovBehaviours.push(behaviour);
    }
    AddRollBehaviour(behaviour) {
      this.rollBehaviours.push(behaviour);
    }
  }];
  #applyVectorBehaviours(behaviours, camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward) {
    for (const behaviour of behaviours) {
      if ((behaviour?.IsActive?.() ?? behaviour?.active !== false) && typeof behaviour?.Update === "function") {
        const offset = behaviour.Update(camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward);
        if (offset) {
          vec3.add(value, value, offset);
        }
      }
    }
  }
  #applyFloatBehaviours(behaviours, camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward) {
    for (const behaviour of behaviours) {
      if ((behaviour?.IsActive?.() ?? behaviour?.active !== false) && typeof behaviour?.Update === "function") {
        value += Number(behaviour.Update(camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward)) || 0;
      }
    }
    return value;
  }
  #updateAnchorState(camera, prefix) {
    const anchors = camera[`${prefix}Anchors`];
    const center = camera[`${prefix}AnchorCenter`];
    const forward = camera[`${prefix}AnchorForwardDirection`];
    vec3.zero(center);
    if (!anchors.length) {
      vec3.set(forward, 0, 0, 1);
      camera[`${prefix}AnchorRadius`] = 1000;
      return;
    }
    for (const anchor of anchors) {
      const value = vec3.create();
      const result = anchor?.GetModelCenterWorldPosition?.(value);
      vec3.add(center, center, result?.length >= 3 ? result : value);
    }
    vec3.scale(center, center, 1 / anchors.length);
    vec3.set(forward, 0, 0, 1);
    let radius = 0;
    for (const anchor of anchors) {
      const sphere = vec4.create();
      const result = anchor?.GetBoundingSphere?.(sphere);
      const centerValue = vec3.create();
      const centerResult = anchor?.GetModelCenterWorldPosition?.(centerValue);
      const anchorCenter = centerResult?.length >= 3 ? centerResult : centerValue;
      const sphereRadius = result?.radius ?? result?.[3] ?? sphere[3] ?? 0;
      radius = Math.max(radius, vec3.distance(anchorCenter, center) + sphereRadius);
    }
    camera[`${prefix}AnchorRadius`] = radius || 1000;
  }
  constructor() {
    super(_EveVirtualCamera), _initClass();
  }
}();

export { _EveVirtualCamera as EveVirtualCamera };
//# sourceMappingURL=EveVirtualCamera.js.map
