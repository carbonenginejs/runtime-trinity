// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetViewport.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetViewport.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepSetViewport", family: "renderJob" })
export class TriStepSetViewport extends TriRenderStep
{
  @io.persist
  @type.objectRef("TriViewport")
  viewport = null;

  @carbon.method
  @impl.adapted
  __init__(viewport = null)
  {
    this.SetViewport(viewport);
  }

  @carbon.method
  @impl.adapted
  SetViewport(viewport)
  {
    this.viewport = viewport ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    if (this.viewport) executor?.SetViewport?.(this.viewport);
    else executor?.SetFullScreenViewport?.();
    return TriRenderJob.StepResult.RS_OK;
  }
}
