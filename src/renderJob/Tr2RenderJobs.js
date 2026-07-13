// Source: E:\carbonengine\trinity\trinity\RenderJob\Tr2RenderJobs.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\Tr2RenderJobs.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Tr2RenderContext } from "../trinityCore/Tr2RenderContext.js";
import { TriRenderJob } from "./TriRenderJob.js";


@type.define({ className: "Tr2RenderJobs", family: "renderJob" })
export class Tr2RenderJobs extends CjsModel
{
  @io.persist
  @type.list("TriRenderJob")
  recurring = [];

  @io.persist
  @type.list("TriRenderJob")
  once = [];

  @io.persist
  @type.list("TriRenderJob")
  chained = [];

  @io.persist
  @type.list("TriRenderJob")
  updateRecurring = [];

  @carbon.method
  @impl.adapted
  Run(realTime, simTime, executor = null)
  {
    const context = executor || Tr2RenderContext.GetDefault();
    let batch = null;
    try
    {
      batch = Tr2RenderJobs.#beginBatch(context, this);
      for (const job of this.recurring.slice()) Tr2RenderJobs.#runJob(job, realTime, simTime, context, this);

      const continuedOnce = [];
      for (const job of this.once.slice())
      {
        const status = Tr2RenderJobs.#runJob(job, realTime, simTime, context, this);
        if (status === TriRenderJob.Status.RJ_IN_PROGRESS) continuedOnce.push(job);
      }
      this.once = continuedOnce;

      const chained = this.chained.slice();
      const continuedChained = [];
      for (let index = 0; index < chained.length; index++)
      {
        const job = chained[index];
        const status = Tr2RenderJobs.#runJob(job, realTime, simTime, context, this);
        if (status === TriRenderJob.Status.RJ_IN_PROGRESS)
        {
          continuedChained.push(...chained.slice(index));
          break;
        }
      }
      this.chained = continuedChained;
    }
    finally
    {
      if (batch) Tr2RenderJobs.#endBatch(context, this, batch);
    }
  }

  @carbon.method
  @impl.adapted
  RunUpdate(realTime, simTime, executor = null)
  {
    const context = executor || Tr2RenderContext.GetDefault();
    for (const job of this.updateRecurring.slice()) Tr2RenderJobs.#runJob(job, realTime, simTime, context, this);
  }

  static #runJob(job, realTime, simTime, executor, owner)
  {
    if (!job?.Run)
    {
      executor?.AddDiagnostic?.({ type: "invalid-render-job", owner, job });
      return TriRenderJob.Status.RJ_FAILED;
    }
    return job.Run(realTime, simTime, executor);
  }

  static #beginBatch(executor, owner)
  {
    if (executor?.BeginBatch)
    {
      executor.BeginBatch(owner);
      return { delegated: true };
    }
    let renderTargetPushed = false;
    let depthStencilPushed = false;
    try
    {
      executor?.PushRenderTarget?.(null, 0);
      renderTargetPushed = !!executor?.PushRenderTarget;
      executor?.PushDepthStencil?.(null);
      depthStencilPushed = !!executor?.PushDepthStencil;
      return { delegated: false, renderTargetPushed, depthStencilPushed };
    }
    catch (error)
    {
      if (depthStencilPushed) executor?.PopDepthStencil?.();
      if (renderTargetPushed) executor?.PopRenderTarget?.(0);
      throw error;
    }
  }

  static #endBatch(executor, owner, batch)
  {
    if (batch.delegated) return executor?.EndBatch?.(owner);
    if (batch.depthStencilPushed) executor?.PopDepthStencil?.();
    if (batch.renderTargetPushed) executor?.PopRenderTarget?.(0);
  }
}
