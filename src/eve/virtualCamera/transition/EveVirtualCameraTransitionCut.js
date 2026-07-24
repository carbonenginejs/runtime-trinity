// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraTransition.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraTransition.cpp
import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { EveVirtualCameraTransitionBase } from "./EveVirtualCameraTransitionBase.js";


@type.define({
  className: "EveVirtualCameraTransitionCut",
  family: "eve/virtualCamera/transition"
})
export class EveVirtualCameraTransitionCut extends EveVirtualCameraTransitionBase
{
  @carbon.method
  @impl.implemented
  IsComplete()
  {
    return true;
  }

  @carbon.method
  @impl.implemented
  Update(deltaTime)
  {
    super.Update(deltaTime);
  }
}
