import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";

// Carbon: RenderJob/TriStepPopViewport.cpp — Execute pops the viewport off the
// render context's ESM stack.
@type.define({ className: "TriStepPopViewport", family: "renderJob" })
export class TriStepPopViewport extends TriRenderStep
{
  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PopViewport?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
