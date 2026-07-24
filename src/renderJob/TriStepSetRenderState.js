// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetRenderState.cpp
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepSetRenderState_Blue.cpp
import { carbon, impl, io, schema, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";
import { RenderState } from "@carbonenginejs/runtime-utils/render-context";


@type.define({ className: "TriStepSetRenderState", family: "renderJob" })
export class TriStepSetRenderState extends TriRenderStep
{
  @io.persist
  @type.int32
  @schema.enum("RenderState")
  state = 0;

  @io.persist
  @type.uint32
  value = 0;

  @carbon.method
  @impl.adapted
  __init__(state, value)
  {
    const hasState = arguments.length > 0 && state !== undefined;
    const hasValue = arguments.length > 1 && value !== undefined;
    if (hasState !== hasValue)
    {
      throw new Error("You must set both the state and the value.");
    }
    if (hasState)
    {
      this.SetStateAndValue(state, value);
    }
  }

  SetStateAndValue(state, value)
  {
    this.state = Number(state) >>> 0;
    this.value = Number(value) >>> 0;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.SetRenderState?.(this.state, this.value);
    return TriRenderJob.StepResult.RS_OK;
  }

  static RenderState = RenderState;

}
