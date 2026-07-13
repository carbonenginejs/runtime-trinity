// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPopRenderTarget.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPopRenderTarget.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";


@type.define({ className: "TriStepPopRenderTarget", family: "renderJob" })
export class TriStepPopRenderTarget extends TriRenderStep
{
  @io.readwrite
  @type.uint32
  slot = 0;

  @carbon.method
  @impl.adapted
  __init__(slot = 0)
  {
    this.slot = Number(slot) >>> 0;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PopRenderTarget?.(this.slot);
    return TriRenderJob.StepResult.RS_OK;
  }
}
