// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetProjection.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetProjection.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepSetProjection", family: "renderJob" })
export class TriStepSetProjection extends TriRenderStep
{
  @io.persist
  @type.objectRef("TriProjection")
  projection = null;

  @carbon.method
  @impl.adapted
  __init__(projection = null)
  {
    this.SetProjection(projection);
  }

  @carbon.method
  @impl.adapted
  SetProjection(projection)
  {
    this.projection = projection ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    if (this.projection) executor?.SetProjection?.(this.projection);
    return TriRenderJob.StepResult.RS_OK;
  }
}
