// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPushDepthStencil.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepPushDepthStencil.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";


@type.define({ className: "TriStepPushDepthStencil", family: "renderJob" })
export class TriStepPushDepthStencil extends TriRenderStep
{
  @io.readwrite
  @type.boolean
  pushCurrent = false;

  @io.readwrite
  @type.objectRef("Tr2DepthStencil")
  depthStencil = null;

  @carbon.method
  @impl.adapted
  __init__(depthStencil)
  {
    this.pushCurrent = arguments.length === 0;
    this.depthStencil = this.pushCurrent ? null : depthStencil ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    const accepted = executor?.PushDepthStencil?.(this.pushCurrent ? undefined : this.depthStencil);
    return accepted === false ? TriRenderJob.StepResult.RS_FAILED : TriRenderJob.StepResult.RS_OK;
  }
}
