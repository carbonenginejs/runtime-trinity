// Ported/adapted from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/RenderJob/TriStepRemoteSync.h
//   trinity/trinity/RenderJob/TriStepRemoteSync.cpp
import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepRemoteSync", family: "renderJob" })
export class TriStepRemoteSync extends TriRenderStep
{
  #id = -1;

  @carbon.method
  @impl.adapted
  __init__(id = -1)
  {
    this.SetId(id);
  }

  GetId()
  {
    return this.#id;
  }

  SetId(id)
  {
    if (!Number.isInteger(id))
    {
      throw new TypeError("TriStepRemoteSync id must be an integer");
    }
    this.#id = id;
  }

  @impl.adapted
  Execute(_realTime, _simTime, _renderContext)
  {
    // Carbon implements this class only on Windows with named HANDLE events.
    // Browsers cannot open those process-wide primitives, so the step fails
    // explicitly instead of claiming synchronization occurred.
    return TriRenderStep.RS_FAILED;
  }
}
