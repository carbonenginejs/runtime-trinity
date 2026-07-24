// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepRunJob.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepRunJob.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderStep } from "./TriRenderStep.js";
import { TriRenderJob } from "./TriRenderJob.js";


@type.define({ className: "TriStepRunJob", family: "renderJob" })
export class TriStepRunJob extends TriRenderStep
{
  @io.persist
  @type.objectRef("TriRenderJob")
  job = null;

  @carbon.method
  @impl.adapted
  __init__(job = null)
  {
    this.SetRenderJob(job);
  }

  @carbon.method
  @impl.adapted
  SetRenderJob(job)
  {
    this.job = job ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(realTime, simTime, executor)
  {
    if (!this.job) return TriRenderJob.StepResult.RS_OK;
    switch (this.job.Run(realTime, simTime, executor))
    {
      case TriRenderJob.Status.RJ_DONE: return TriRenderJob.StepResult.RS_OK;
      case TriRenderJob.Status.RJ_IN_PROGRESS: return TriRenderJob.StepResult.RS_IN_PROGRESS;
      case TriRenderJob.Status.RJ_FAILED: return TriRenderJob.StepResult.RS_FAILED;
      default: return TriRenderJob.StepResult.RS_FAILED;
    }
  }
}
