import { carbon, impl, type } from "@carbonenginejs/core-types/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";

// Carbon: RenderJob/TriStepPopProjection.cpp — Execute pops the projection
// (Tr2Renderer::PopProjection).
@type.define({ className: "TriStepPopProjection", family: "renderJob" })
export class TriStepPopProjection extends TriRenderStep
{
  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PopProjection?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
