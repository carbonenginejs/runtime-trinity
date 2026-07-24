// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { EveVirtualCameraBehaviourFloatBase } from "./EveVirtualCameraBehaviourFloatBase.js";


@type.define({
  className: "EveVirtualCameraBehaviourFloatDamping",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourFloatDamping extends EveVirtualCameraBehaviourFloatBase
{
  @io.persist
  @type.float32
  dampingFactor = 1;

  #lastValue = 0;

  constructor()
  {
    super();
    this.name = "Damping";
  }

  @carbon.method
  @impl.implemented
  Update(_camera, current, _deltaTime, localElapsedTime)
  {
    if (localElapsedTime <= 0)
    {
      this.#lastValue = current;
      return 0;
    }
    this.#lastValue += (current - this.#lastValue) * this.dampingFactor;
    return this.#lastValue - current;
  }
}
