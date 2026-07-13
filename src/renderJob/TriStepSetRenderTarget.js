// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetRenderTarget.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetRenderTarget.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepSetRenderTarget", family: "renderJob" })
export class TriStepSetRenderTarget extends TriRenderStep
{
  @io.persist
  @type.objectRef("Tr2RenderTarget")
  renderTarget = null;

  @carbon.method
  @impl.adapted
  __init__(renderTarget = null)
  {
    this.renderTarget = renderTarget ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    if (this.renderTarget) executor?.SetRenderTarget?.(0, this.renderTarget);
    return TriRenderJob.StepResult.RS_OK;
  }
}
