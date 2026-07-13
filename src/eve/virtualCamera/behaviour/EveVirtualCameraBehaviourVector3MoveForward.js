// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCameraBehaviourVector3Base } from "./EveVirtualCameraBehaviourVector3Base.js";


@type.define({
  className: "EveVirtualCameraBehaviourVector3MoveForward",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourVector3MoveForward extends EveVirtualCameraBehaviourVector3Base
{
  @io.persist
  @type.objectRef("Tr2CurveScalar")
  scaleCurve = null;

  @io.persist
  @type.boolean
  proportional = true;

  @io.persist
  @type.float32
  value = 0;

  constructor(name = "Move Forward")
  {
    super();
    this.scaleCurve = EveVirtualCameraBehaviourVector3Base.createConstantCurve(1);
    this.SetName(name);
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    super.SetName(name);
    this.scaleCurve?.SetName?.(`${this.name} - Scale Curve`);
  }

  @carbon.method
  @impl.adapted
  Update(camera, _current, _deltaTime, localElapsedTime, _anchorPosition, anchorRadius, _anchorForwardDirection, out = vec3.create())
  {
    return vec3.scale(out, camera.GetForwardDirection(out), this.GetCurrentValue(camera, localElapsedTime, anchorRadius));
  }

  GetCurrentValue(camera, localElapsedTime, anchorRadius)
  {
    const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
    const time = duration !== 0 ? localElapsedTime / duration : 0;
    let value = this.value * Number(this.scaleCurve?.GetValue?.(time) ?? 1);
    if (this.proportional)
    {
      value *= anchorRadius;
    }
    return value;
  }
}
