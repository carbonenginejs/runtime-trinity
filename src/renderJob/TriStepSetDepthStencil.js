// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetDepthStencil.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetDepthStencil.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepSetDepthStencil", family: "renderJob" })
export class TriStepSetDepthStencil extends TriRenderStep
{
  @io.readwrite
  @type.objectRef("Tr2DepthStencil")
  depthStencil = null;

  @carbon.method
  @impl.adapted
  __init__(depthStencil = null)
  {
    this.depthStencil = depthStencil ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    const accepted = executor?.SetDepthStencil?.(this.depthStencil);
    return accepted === false ? TriRenderJob.StepResult.RS_FAILED : TriRenderJob.StepResult.RS_OK;
  }
}
