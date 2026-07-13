// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepResolve.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepResolve.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepResolve", family: "renderJob" })
export class TriStepResolve extends TriRenderStep
{
  @io.readwrite
  @type.boolean
  generateMipmap = false;

  @io.readwrite
  @type.objectRef("Tr2RenderTarget")
  source = null;

  @io.readwrite
  @type.objectRef("Tr2RenderTarget")
  destination = null;

  @carbon.method
  @impl.adapted
  __init__(destination = null, source = null)
  {
    this.destination = destination ?? null;
    this.source = source ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    if (!this.source || !this.destination) return TriRenderJob.StepResult.RS_OK;
    if (executor?.IsRenderTargetValid)
    {
      if (!executor.IsRenderTargetValid(this.source) || !executor.IsRenderTargetValid(this.destination))
      {
        return TriRenderJob.StepResult.RS_OK;
      }
    }
    const resolved = executor?.ResolveRenderTarget?.(this.source, this.destination);
    if (resolved === false) return TriRenderJob.StepResult.RS_FAILED;
    if (this.generateMipmap) executor?.GenerateMipMaps?.(this.destination);
    return TriRenderJob.StepResult.RS_OK;
  }
}
