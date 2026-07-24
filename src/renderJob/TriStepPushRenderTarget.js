// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPushRenderTarget.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPushRenderTarget.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";


@type.define({ className: "TriStepPushRenderTarget", family: "renderJob" })
export class TriStepPushRenderTarget extends TriRenderStep
{
  @io.readwrite
  @type.uint32
  slot = 0;

  @io.readwrite
  @type.objectRef("Tr2RenderTarget")
  renderTarget = null;

  @carbon.method
  @impl.adapted
  __init__(renderTarget = null, slot = 0)
  {
    this.renderTarget = renderTarget ?? null;
    this.slot = Number(slot) >>> 0;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.PushRenderTarget?.(this.renderTarget, this.slot);
    return TriRenderJob.StepResult.RS_OK;
  }
}
