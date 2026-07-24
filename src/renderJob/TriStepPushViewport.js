import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";

// Carbon: RenderJob/TriStepPushViewport.cpp — Execute pushes the current
// viewport onto the render context's ESM stack.
@type.define({ className: "TriStepPushViewport", family: "renderJob" })
export class TriStepPushViewport extends TriRenderStep
{
  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PushViewport?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
