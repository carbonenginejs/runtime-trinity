// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCameraBehaviourFloatBase } from "./EveVirtualCameraBehaviourFloatBase.js";


@type.define({
  className: "EveVirtualCameraBehaviourFloatSet",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourFloatSet extends EveVirtualCameraBehaviourFloatBase
{
  @io.persist
  @type.float32
  value = 0;

  constructor()
  {
    super();
    this.name = "Set";
  }

  @carbon.method
  @impl.implemented
  Update(_camera, current)
  {
    return this.value - current;
  }
}
