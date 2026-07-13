// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCameraBehaviourVector3Base } from "./EveVirtualCameraBehaviourVector3Base.js";


@type.define({
  className: "EveVirtualCameraBehaviourVector3MoveBetween",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourVector3MoveBetween extends EveVirtualCameraBehaviourVector3Base
{
  @io.persist
  @type.vec3
  end = vec3.create();

  @io.persist
  @type.boolean
  proportional = false;

  @io.persist
  @type.boolean
  world = true;

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  interpolationCurve = null;

  @io.persist
  @type.vec3
  start = vec3.create();

  constructor()
  {
    super();
    this.interpolationCurve = EveVirtualCameraBehaviourVector3Base.createEaseCurve();
    this.SetName("Move Between");
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    super.SetName(name);
    this.interpolationCurve?.SetName?.(`${this.name} - Interpolation Curve`);
  }

  @carbon.method
  @impl.adapted
  Update(camera, _current, _deltaTime, localElapsedTime, _anchorPosition, anchorRadius, anchorForwardDirection, out = vec3.create())
  {
    const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
    if (duration === 0)
    {
      return vec3.copy(out, this.end);
    }
    const start = vec3.clone(this.start);
    const end = vec3.clone(this.end);
    if (this.proportional)
    {
      vec3.scale(start, start, anchorRadius);
      vec3.scale(end, end, anchorRadius);
    }
    if (!this.world)
    {
      EveVirtualCameraBehaviourVector3Base.rotateVectorWithAnchor(start, start, anchorForwardDirection);
      EveVirtualCameraBehaviourVector3Base.rotateVectorWithAnchor(end, end, anchorForwardDirection);
    }
    const time = localElapsedTime / duration;
    const amount = Number(this.interpolationCurve?.GetValue?.(time) ?? time);
    return vec3.lerp(out, start, end, amount);
  }
}
