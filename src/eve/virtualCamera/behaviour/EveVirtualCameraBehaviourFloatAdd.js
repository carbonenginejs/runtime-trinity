// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCameraBehaviourFloatBase } from "./EveVirtualCameraBehaviourFloatBase.js";


@type.define({
  className: "EveVirtualCameraBehaviourFloatAdd",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourFloatAdd extends EveVirtualCameraBehaviourFloatBase
{
  @io.persist
  @type.objectRef("Tr2CurveScalar")
  scaleCurve = null;

  @io.persist
  @type.float32
  value = 0;

  constructor()
  {
    super();
    this.name = "Add";
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
  Update(camera, _current, _deltaTime, localElapsedTime)
  {
    if (!this.scaleCurve)
    {
      return this.value;
    }
    const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
    const time = duration !== 0 ? localElapsedTime / duration : 0;
    return this.value * Number(this.scaleCurve.GetValue?.(time) ?? 1);
  }
}
