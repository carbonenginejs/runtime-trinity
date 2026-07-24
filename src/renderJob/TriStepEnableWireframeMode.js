// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepEnableWireframeMode.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepEnableWireframeMode", family: "renderJob" })
export class TriStepEnableWireframeMode extends TriRenderStep
{
  @io.readwrite
  @type.boolean
  enableWireframe = false;

  @carbon.method
  @impl.adapted
  __init__(value = false)
  {
    this.enableWireframe = !!value;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.SetWireframeRendering?.(this.enableWireframe);
    return TriRenderJob.StepResult.RS_OK;
  }
}
