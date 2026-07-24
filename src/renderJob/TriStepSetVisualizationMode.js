// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetVisualizationMode.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepSetVisualizationMode", family: "renderJob" })
export class TriStepSetVisualizationMode extends TriRenderStep
{
  @io.readwrite
  @type.objectRef("ITr2VisualizationModeRenderer")
  object = null;

  @io.readwrite
  @type.int32
  mode = 0;

  @carbon.method
  @impl.adapted
  __init__(object = null, mode = 0)
  {
    this.SetObject(object);
    this.SetVisualizationMode(mode);
  }

  SetObject(object)
  {
    this.object = object ?? null;
  }

  SetVisualizationMode(mode)
  {
    this.mode = Number(mode) | 0;
  }

  @carbon.method
  @impl.implemented
  Execute()
  {
    this.object?.SetVisualizationMode?.(this.mode);
    return TriRenderJob.StepResult.RS_OK;
  }
}
