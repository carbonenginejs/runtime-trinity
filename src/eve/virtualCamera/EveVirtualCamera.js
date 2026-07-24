// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCamera.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCamera.cpp
import { mat4 } from "@carbonenginejs/runtime-utils/mat4";
import { quat } from "@carbonenginejs/runtime-utils/quat";
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { vec4 } from "@carbonenginejs/runtime-utils/vec4";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


const SCRUB_INCREMENT_DT = 1 / 60;
const SCRUB_MAX_ITERATIONS = 20;
@type.define({
  className: "EveVirtualCamera",
  family: "eve/virtualCamera"
})
export class EveVirtualCamera extends CjsModel
{
  @io.read
  @type.vec3
  position = vec3.create();

  @io.read
  @type.vec3
  pointOfInterestAnchorCenter = vec3.create();

  @io.read
  @type.vec3
  positionAnchorCenter = vec3.create();

  @io.read
  @type.list("IEveSpaceObject2")
  pointOfInterestAnchors = [];

  @io.read
  @type.list("IEveSpaceObject2")
  positionAnchors = [];

  @io.read
  @type.float32
  localElapsedTime = 0;

  @io.read
  @type.vec3
  pointOfInterest = vec3.create();

  @io.read
  @type.float32
  pointOfInterestAnchorRadius = 0;

  @io.read
  @type.float32
  positionAnchorRadius = 0;

  @io.read
  @type.vec3
  positionAnchorForwardDirection = vec3.create();

  @io.read
  @type.vec3
  pointOfInterestAnchorForwardDirection = vec3.create();

  @io.persist
  @type.list("EveVirtualCameraBehaviourFloatBase")
  fovBehaviours = [];

  @io.persist
  @type.list("EveVirtualCameraBehaviourVector3Base")
  pointOfInterestBehaviours = [];

  @io.persist
  @type.list("EveVirtualCameraBehaviourVector3Base")
  positionBehaviours = [];

  @io.persist
  @type.list("EveVirtualCameraBehaviourFloatBase")
  rollBehaviours = [];

  @io.read
  @type.float32
  roll = 0;

  @io.read
  @type.float32
  fov = 1;

  @io.persist
  @type.float32
  animationTimelineLength = 10;

  @io.persist
  @type.string
  name = "Virtual Camera";

  @io.read
  @type.boolean
  running = false;

  @carbon.method
  @impl.adapted
  GetViewMatrix(out = mat4.create())
  {
    return mat4.lookAtD3D(out, this.position, this.pointOfInterest, this.GetUpDirection());
  }

  @carbon.method
  @impl.adapted
  GetProjectionMatrix(aspectRatio, frontClip, backClip, out = mat4.create())
  {
    return mat4.perspectiveZO(out, this.fov, aspectRatio, frontClip, backClip);
  }

  @carbon.method
  @impl.adapted
  GetViewDirection(out = vec3.create())
  {
    return vec3.normalize(out, vec3.subtract(out, this.pointOfInterest, this.position));
  }

  @carbon.method
  @impl.adapted
  GetForwardDirection(out = vec3.create())
  {
    return this.GetViewDirection(out);
  }

  @carbon.method
  @impl.adapted
  GetUpDirection(out = vec3.create())
  {
    const view = this.GetForwardDirection(vec3.create());
    const right = vec3.normalize(vec3.create(), vec3.cross(vec3.create(), view, vec3.fromValues(0, 1, 0)));
    vec3.normalize(out, vec3.cross(out, right, view));
    const rotation = quat.setAxisAngle(quat.create(), view, -this.roll * Math.PI / 180);
    return vec3.normalize(out, vec3.transformQuat(out, out, rotation));
  }

  @carbon.method
  @impl.adapted
  GetRightDirection(out = vec3.create())
  {
    return vec3.normalize(out, vec3.cross(out, this.GetForwardDirection(vec3.create()), this.GetUpDirection(vec3.create())));
  }

  @carbon.method
  @impl.adapted
  Update(deltaTime)
  {
    const dt = this.running ? deltaTime : 0;
    this.localElapsedTime += dt;
    EveVirtualCamera.#updateAnchorState(this, "position");
    EveVirtualCamera.#updateAnchorState(this, "pointOfInterest");
    const position = vec3.clone(this.positionAnchorCenter);
    const pointOfInterest = vec3.clone(this.pointOfInterestAnchorCenter);
    let fov = 1;
    let roll = 0;
    EveVirtualCamera.#applyVectorBehaviours(this.positionBehaviours, this, position, dt, this.localElapsedTime, this.positionAnchorCenter, this.positionAnchorRadius, this.positionAnchorForwardDirection);
    EveVirtualCamera.#applyVectorBehaviours(this.pointOfInterestBehaviours, this, pointOfInterest, dt, this.localElapsedTime, this.pointOfInterestAnchorCenter, this.pointOfInterestAnchorRadius, this.pointOfInterestAnchorForwardDirection);
    fov = EveVirtualCamera.#applyFloatBehaviours(this.fovBehaviours, this, fov, dt, this.localElapsedTime, this.positionAnchorCenter, this.positionAnchorRadius, this.positionAnchorForwardDirection);
    roll = EveVirtualCamera.#applyFloatBehaviours(this.rollBehaviours, this, roll, dt, this.localElapsedTime, this.positionAnchorCenter, this.positionAnchorRadius, this.positionAnchorForwardDirection);
    if (this.positionBehaviours.length)
    {
      vec3.copy(this.position, position);
    }
    if (this.pointOfInterestBehaviours.length)
    {
      vec3.copy(this.pointOfInterest, pointOfInterest);
    }
    if (this.fovBehaviours.length)
    {
      this.fov = fov;
    }
    if (this.rollBehaviours.length)
    {
      this.roll = roll;
    }
  }

  @carbon.method
  @impl.implemented
  Play()
  {
    this.running = true;
  }

  @carbon.method
  @impl.implemented
  Pause()
  {
    this.running = false;
  }

  @carbon.method
  @impl.implemented
  Stop()
  {
    this.Reset();
    this.running = false;
  }

  @carbon.method
  @impl.implemented
  Reset()
  {
    this.localElapsedTime = 0;
  }

  @carbon.method
  @impl.adapted
  UpdateToLocalTime(time)
  {
    const diff = time - this.localElapsedTime;
    let dt = SCRUB_INCREMENT_DT;
    let iterations = Math.floor(Math.abs(diff / dt));
    if (iterations > SCRUB_MAX_ITERATIONS)
    {
      iterations = SCRUB_MAX_ITERATIONS;
      dt = diff / SCRUB_MAX_ITERATIONS;
    }
    iterations -= 1;
    const wasRunning = this.running;
    this.Play();
    for (let i = 0; i < iterations; i++)
    {
      this.Update(dt);
    }
    this.Update(time - this.localElapsedTime);
    if (!wasRunning)
    {
      this.Pause();
    }
  }

  @carbon.method
  @impl.implemented
  CopyTransform(source)
  {
    this.fov = source.fov;
    this.roll = source.roll;
    vec3.copy(this.position, source.position);
    vec3.copy(this.pointOfInterest, source.pointOfInterest);
  }

  @carbon.method
  @impl.adapted
  UpdateExternal(position, pointOfInterest, fov, roll)
  {
    vec3.copy(this.position, position);
    vec3.copy(this.pointOfInterest, pointOfInterest);
    this.fov = fov;
    this.roll = roll;
  }

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name);
  }

  @carbon.method
  @impl.implemented
  GetAnimationTimelineLength()
  {
    return this.animationTimelineLength;
  }

  @carbon.method
  @impl.implemented
  SetAnimationTimelineLength(value)
  {
    this.animationTimelineLength = value;
  }

  @carbon.method
  @impl.implemented
  GetFov()
  {
    return this.fov;
  }

  @carbon.method
  @impl.implemented
  SetFov(value)
  {
    this.fov = value;
  }

  @carbon.method
  @impl.implemented
  GetRoll()
  {
    return this.roll;
  }

  @carbon.method
  @impl.implemented
  SetRoll(value)
  {
    this.roll = value;
  }

  @carbon.method
  @impl.adapted
  GetPosition(out = vec3.create())
  {
    return vec3.copy(out, this.position);
  }

  @carbon.method
  @impl.adapted
  SetPosition(value)
  {
    vec3.copy(this.position, value);
  }

  @carbon.method
  @impl.adapted
  GetPointOfInterest(out = vec3.create())
  {
    return vec3.copy(out, this.pointOfInterest);
  }

  @carbon.method
  @impl.adapted
  SetPointOfInterest(value)
  {
    vec3.copy(this.pointOfInterest, value);
  }

  @carbon.method
  @impl.implemented
  AddPositionBehaviour(behaviour)
  {
    this.positionBehaviours.push(behaviour);
  }

  @carbon.method
  @impl.implemented
  AddPointOfInterestBehaviour(behaviour)
  {
    this.pointOfInterestBehaviours.push(behaviour);
  }

  @carbon.method
  @impl.implemented
  AddFOVBehaviour(behaviour)
  {
    this.fovBehaviours.push(behaviour);
  }

  @carbon.method
  @impl.implemented
  AddRollBehaviour(behaviour)
  {
    this.rollBehaviours.push(behaviour);
  }

  static #applyVectorBehaviours(behaviours, camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward)
  {
    for (const behaviour of behaviours)
    {
      if ((behaviour?.IsActive?.() ?? behaviour?.active !== false) && typeof behaviour?.Update === "function")
      {
        const offset = behaviour.Update(camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward);
        if (offset)
        {
          vec3.add(value, value, offset);
        }
      }
    }
  }

  static #applyFloatBehaviours(behaviours, camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward)
  {
    for (const behaviour of behaviours)
    {
      if ((behaviour?.IsActive?.() ?? behaviour?.active !== false) && typeof behaviour?.Update === "function")
      {
        value += Number(behaviour.Update(camera, value, deltaTime, localTime, anchorCenter, anchorRadius, anchorForward)) || 0;
      }
    }
    return value;
  }

  static #updateAnchorState(camera, prefix)
  {
    const anchors = camera[`${prefix}Anchors`];
    const center = camera[`${prefix}AnchorCenter`];
    const forward = camera[`${prefix}AnchorForwardDirection`];
    vec3.zero(center);
    if (!anchors.length)
    {
      vec3.set(forward, 0, 0, 1);
      camera[`${prefix}AnchorRadius`] = 1000;
      return;
    }
    for (const anchor of anchors)
    {
      const value = vec3.create();
      const result = anchor?.GetModelCenterWorldPosition?.(value);
      vec3.add(center, center, result?.length >= 3 ? result : value);
    }
    vec3.scale(center, center, 1 / anchors.length);
    vec3.set(forward, 0, 0, 1);
    let radius = 0;
    for (const anchor of anchors)
    {
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
}
