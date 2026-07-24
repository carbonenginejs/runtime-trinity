import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";

// Carbon: RenderJob/TriStepPushViewTransform.cpp — Execute pushes the current
// view transform (Tr2Renderer::PushViewTransform).
@type.define({ className: "TriStepPushViewTransform", family: "renderJob" })
export class TriStepPushViewTransform extends TriRenderStep
{
  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PushViewTransform?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
