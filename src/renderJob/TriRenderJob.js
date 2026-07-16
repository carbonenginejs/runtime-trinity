// Source: E:\carbonengine\trinity\trinity\RenderJob\TriRenderJob.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriRenderJob.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { Tr2RenderContext } from "../trinityCore/Tr2RenderContext.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriRenderJob", family: "renderJob" })
export class TriRenderJob extends CjsModel
{
  static Status = Object.freeze({
    RJ_INIT: 0,
    RJ_IN_PROGRESS: 1,
    RJ_DONE: 2,
    RJ_FAILED: 3
  });

  static RJ_INIT = 0;
  static RJ_IN_PROGRESS = 1;
  static RJ_DONE = 2;
  static RJ_FAILED = 3;

  static StepResult = TriRenderStep.Result;

  @io.persist
  @type.int32
  @schema.enum("TriRenderJobStatus")
  status = TriRenderJob.Status.RJ_INIT;

  @io.persist
  @type.boolean
  stackGuard = true;

  @io.persist
  @type.boolean
  enabled = true;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.list("TriRenderStep")
  steps = [];

  #currentStep = 0;

  @carbon.method
  @impl.adapted
  Run(realTime, simTime, executor = null)
  {
    if (!this.enabled) return TriRenderJob.Status.RJ_DONE;

    const context = executor || Tr2RenderContext.GetDefault();
    const snapshot = this.steps.slice();
    if (this.status !== TriRenderJob.Status.RJ_IN_PROGRESS || this.#currentStep >= snapshot.length)
    {
      this.#currentStep = 0;
    }

    const preRT = TriRenderJob.#stackSize(context, "GetStackSizeRT");
    const preDS = TriRenderJob.#stackSize(context, "GetStackSizeDS");
    let result = TriRenderJob.StepResult.RS_OK;
    let runError = null;

    try
    {
      while (this.#currentStep < snapshot.length)
      {
        const step = snapshot[this.#currentStep];
        if (!step || !TriRenderJob.#isStepEnabled(step))
        {
          this.#currentStep++;
          continue;
        }

        let began = false;
        let stepError = null;
        try
        {
          TriRenderJob.#beginStep(context, step, realTime, simTime, this);
          began = true;
          result = TriRenderJob.#executeStep(context, step, realTime, simTime, this);
        }
        catch (error)
        {
          stepError = error;
        }
        finally
        {
          if (began)
          {
            try
            {
              TriRenderJob.#endStep(context, step, realTime, simTime, this);
            }
            catch (error)
            {
              if (!stepError) stepError = error;
              else TriRenderJob.#diagnose(context, "step-cleanup-error", { job: this, step, error });
            }
          }
        }
        if (stepError) throw stepError;

        if (this.stackGuard)
        {
          TriRenderJob.#diagnoseUnderflow(context, preRT, preDS, this, step);
        }
        if (result !== TriRenderJob.StepResult.RS_OK || !this.enabled) break;
        this.#currentStep++;
      }
    }
    catch (error)
    {
      runError = error;
      result = TriRenderJob.StepResult.RS_FAILED;
    }
    finally
    {
      if (this.stackGuard)
      {
        TriRenderJob.#diagnoseUnderflow(context, preRT, preDS, this, null);
        TriRenderJob.#unwind(context, "GetStackSizeRT", "PopRenderTarget", preRT, this, "render-target");
        TriRenderJob.#unwind(context, "GetStackSizeDS", "PopDepthStencil", preDS, this, "depth-stencil");
      }
    }

    if (runError)
    {
      this.status = TriRenderJob.Status.RJ_FAILED;
      throw runError;
    }
    if (!this.enabled) return TriRenderJob.Status.RJ_DONE;

    switch (result)
    {
      case TriRenderJob.StepResult.RS_OK:
      case TriRenderJob.StepResult.RS_TERMINATE:
        this.status = TriRenderJob.Status.RJ_DONE;
        break;
      case TriRenderJob.StepResult.RS_FAILED:
        this.status = TriRenderJob.Status.RJ_FAILED;
        break;
      case TriRenderJob.StepResult.RS_IN_PROGRESS:
        this.status = TriRenderJob.Status.RJ_IN_PROGRESS;
        break;
      default:
        this.status = TriRenderJob.Status.RJ_FAILED;
        TriRenderJob.#diagnose(context, "invalid-step-result", { job: this, result });
        break;
    }
    return this.status;
  }

  static #isStepEnabled(step)
  {
    return step.IsEnabled?.() ?? step.enabled !== false;
  }

  static #beginStep(executor, step, realTime, simTime, job)
  {
    if (executor?.BeginStep) return executor.BeginStep(step, realTime, simTime, job);
    return step.BeginExecute?.(executor);
  }

  static #executeStep(executor, step, realTime, simTime, job)
  {
    if (executor?.ExecuteStep) return executor.ExecuteStep(step, realTime, simTime, job);
    return step.Execute?.(realTime, simTime, executor);
  }

  static #endStep(executor, step, realTime, simTime, job)
  {
    if (executor?.EndStep) return executor.EndStep(step, realTime, simTime, job);
    return step.EndExecute?.(executor);
  }

  static #stackSize(executor, method)
  {
    const value = executor?.[method]?.();
    return Number.isFinite(value) && value >= 0 ? Math.trunc(value) : 0;
  }

  static #diagnoseUnderflow(executor, preRT, preDS, job, step)
  {
    const rt = TriRenderJob.#stackSize(executor, "GetStackSizeRT");
    const ds = TriRenderJob.#stackSize(executor, "GetStackSizeDS");
    if (rt < preRT) TriRenderJob.#diagnose(executor, "stack-underflow", { stack: "render-target", job, step, expected: preRT, actual: rt });
    if (ds < preDS) TriRenderJob.#diagnose(executor, "stack-underflow", { stack: "depth-stencil", job, step, expected: preDS, actual: ds });
  }

  static #unwind(executor, sizeMethod, popMethod, baseline, job, stack)
  {
    let size = TriRenderJob.#stackSize(executor, sizeMethod);
    if (size > baseline) TriRenderJob.#diagnose(executor, "stack-repair", { stack, job, expected: baseline, actual: size });
    while (size > baseline)
    {
      if (!executor?.[popMethod]) break;
      executor[popMethod]();
      const next = TriRenderJob.#stackSize(executor, sizeMethod);
      if (next >= size) break;
      size = next;
    }
  }

  static #diagnose(executor, type, detail)
  {
    executor?.AddDiagnostic?.({ type, ...detail });
  }

  static TriRenderJobStatus = TriRenderJob.Status;

}
