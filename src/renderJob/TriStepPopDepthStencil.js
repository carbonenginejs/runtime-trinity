// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPopDepthStencil.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPopDepthStencil.cpp
import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";


@type.define({ className: "TriStepPopDepthStencil", family: "renderJob" })
export class TriStepPopDepthStencil extends TriRenderStep
{
  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PopDepthStencil?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
