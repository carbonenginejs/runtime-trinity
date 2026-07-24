// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepClear.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepClear.cpp
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepClear_Blue.cpp
import { vec4 } from "@carbonenginejs/runtime-utils/vec4";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepClear", family: "renderJob" })
export class TriStepClear extends TriRenderStep
{
  @io.persist
  @type.color
  color = vec4.fromValues(0, 0, 0, 1);

  @io.persist
  @type.float32
  depth = 1;

  @io.persist
  @type.uint32
  stencil = 0;

  @io.persist
  @type.boolean
  isColorCleared = true;

  @io.persist
  @type.boolean
  isDepthCleared = true;

  @io.persist
  @type.boolean
  isStencilCleared = false;

  @carbon.method
  @impl.adapted
  __init__(color, depth, stencil)
  {
    this.isColorCleared = arguments.length >= 1 && color != null;
    this.isDepthCleared = arguments.length >= 2 && depth != null;
    this.isStencilCleared = arguments.length >= 3 && stencil != null;
    if (this.isColorCleared) vec4.copy(this.color, color);
    if (this.isDepthCleared) this.depth = Number(depth) || 0;
    if (this.isStencilCleared) this.stencil = Number(stencil) >>> 0;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    executor?.Clear?.({
      color: Array.from(this.color, TriStepClear.#clampColor),
      depth: this.depth,
      stencil: this.stencil,
      clearColor: this.isColorCleared,
      clearDepth: this.isDepthCleared,
      clearStencil: this.isStencilCleared
    });
    return TriRenderJob.StepResult.RS_OK;
  }

  static #clampColor(value)
  {
    return Math.max(0, Math.min(1, Number(value) || 0));
  }
}
