import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";

// Carbon: RenderJob/TriStepPushProjection.cpp — Execute pushes the current
// projection (Tr2Renderer::PushProjection).
@type.define({ className: "TriStepPushProjection", family: "renderJob" })
export class TriStepPushProjection extends TriRenderStep
{
  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PushProjection?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
