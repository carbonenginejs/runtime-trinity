// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCameraBehaviourVector3Base } from "./EveVirtualCameraBehaviourVector3Base.js";


@type.define({
  className: "EveVirtualCameraBehaviourVector3Orbit",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourVector3Orbit extends EveVirtualCameraBehaviourVector3Base
{
  @io.persist
  @type.objectRef("Tr2CurveScalar")
  orbitCurve = null;

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  distanceScalarCurve = null;

  @io.persist
  @type.float32
  end = 180;

  @io.persist
  @type.boolean
  proportional = true;

  @io.persist
  @type.boolean
  world = false;

  @io.notify
  @io.persist
  @type.float32
  start = 0;

  @io.persist
  @type.float32
  distance = 1;

  constructor()
  {
    super();
    this.distanceScalarCurve = EveVirtualCameraBehaviourVector3Base.createConstantCurve(1);
    this.orbitCurve = EveVirtualCameraBehaviourVector3Base.createEaseCurve();
    this.SetName("Orbit");
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    super.SetName(name);
    this.distanceScalarCurve?.SetName?.(`${this.name} - Distance Scalar Curve`);
    this.orbitCurve?.SetName?.(`${this.name} - Orbit Curve`);
  }

  @carbon.method
  @impl.adapted
  Update(camera, _current, _deltaTime, localElapsedTime, _anchorPosition, anchorRadius, anchorForwardDirection, out = vec3.create())
  {
    const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
    const time = duration !== 0 ? localElapsedTime / duration : 0;
    if (this.world)
    {
      vec3.set(out, 0, 0, 1);
    }
    else
    {
      vec3.set(out, anchorForwardDirection[0], 0, anchorForwardDirection[2]);
      if (vec3.squaredLength(out) === 0)
      {
        vec3.set(out, 0, 0, 1);
      }
      else
      {
        vec3.normalize(out, out);
      }
    }
    const amount = Number(this.orbitCurve?.GetValue?.(time) ?? time);
    const angle = (this.start + (this.end - this.start) * amount) * Math.PI / 180;
    vec3.transformQuat(out, out, quat.setAxisAngle(quat.create(), vec3.fromValues(0, 1, 0), angle));
    let range = this.distance;
    if (this.proportional)
    {
      range *= anchorRadius;
    }
    range *= Number(this.distanceScalarCurve?.GetValue?.(time) ?? 1);
    return vec3.scale(out, out, range);
  }
}
