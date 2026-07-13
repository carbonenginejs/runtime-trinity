// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepCopyRenderTarget.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepCopyRenderTarget.cpp
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriStepCopyRenderTarget_Blue.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { TriRenderJob } from "./TriRenderJob.js";
import { TriRenderStep } from "./TriRenderStep.js";


@type.define({ className: "TriStepCopyRenderTarget", family: "renderJob" })
export class TriStepCopyRenderTarget extends TriRenderStep
{
  @io.readwrite
  @type.objectRef("Tr2RenderTarget")
  Destination = null;

  @io.readwrite
  @type.objectRef("TriTextureRes")
  destinationTexture = null;

  @io.readwrite
  @type.objectRef("Tr2RenderTarget")
  Source = null;

  @io.readwrite
  @type.objectRef("TriViewport")
  sourceViewport = null;

  @io.readwrite
  @type.objectRef("TriViewport")
  destinationViewport = null;

  get destination()
  {
    return this.Destination;
  }

  set destination(value)
  {
    this.Destination = value ?? null;
  }

  get source()
  {
    return this.Source;
  }

  set source(value)
  {
    this.Source = value ?? null;
  }

  @carbon.method
  @impl.adapted
  __init__(destination = null, source = null, destinationViewport = null, sourceViewport = null)
  {
    if (destination)
    {
      if (TriStepCopyRenderTarget.#isTextureResource(destination)) this.destinationTexture = destination;
      else this.Destination = destination;
    }
    this.Source = source ?? null;
    this.destinationViewport = destinationViewport ?? null;
    this.sourceViewport = sourceViewport ?? null;
  }

  @carbon.method
  @impl.implemented
  Execute(_realTime, _simTime, executor)
  {
    const intent = this.GetCopyIntent();
    if (!intent) return TriRenderJob.StepResult.RS_OK;
    const copied = executor?.CopyRenderTarget?.(intent);
    return copied === false ? TriRenderJob.StepResult.RS_FAILED : TriRenderJob.StepResult.RS_OK;
  }

  @carbon.method
  @impl.adapted
  GetCopyIntent()
  {
    if (!this.Source || (!this.Destination && !this.destinationTexture)) return null;
    const destX = Number(this.destinationViewport?.x) || 0;
    const destY = Number(this.destinationViewport?.y) || 0;
    if (this.Destination)
    {
      return TriStepCopyRenderTarget.#renderTargetIntent(
        this.Source,
        this.Destination,
        this.sourceViewport,
        destX,
        destY
      );
    }
    return {
      source: this.Source,
      destination: this.destinationTexture,
      destinationType: "texture",
      destinationPoint: { x: destX, y: destY },
      sourceRect: this.sourceViewport ? TriStepCopyRenderTarget.#viewportRect(this.sourceViewport) : null
    };
  }

  static #renderTargetIntent(source, destination, sourceViewport, destX, destY)
  {
    let x = destX;
    let y = destY;
    let sourceRect;
    if (sourceViewport)
    {
      if (Number(sourceViewport.width) <= 0 || Number(sourceViewport.height) <= 0) return null;
      sourceRect = TriStepCopyRenderTarget.#viewportRect(sourceViewport);
      if (x < 0)
      {
        sourceRect.right -= -x;
        x = 0;
      }
      if (y < 0)
      {
        sourceRect.bottom -= -y;
        y = 0;
      }
    }
    else
    {
      sourceRect = {
        left: 0,
        top: 0,
        right: TriStepCopyRenderTarget.#dimension(source, "Width", "width"),
        bottom: TriStepCopyRenderTarget.#dimension(source, "Height", "height")
      };
      if (x < 0)
      {
        sourceRect.right += x;
        x = 0;
      }
      if (y < 0)
      {
        sourceRect.bottom += y;
        y = 0;
      }
    }
    return {
      source,
      destination,
      destinationType: "renderTarget",
      sourceRect,
      destinationRect: {
        left: x,
        top: y,
        right: x + sourceRect.right - sourceRect.left,
        bottom: y + sourceRect.bottom - sourceRect.top
      }
    };
  }

  static #viewportRect(viewport)
  {
    const left = Number(viewport.x) || 0;
    const top = Number(viewport.y) || 0;
    return {
      left,
      top,
      right: left + (Number(viewport.width) || 0),
      bottom: top + (Number(viewport.height) || 0)
    };
  }

  static #dimension(value, method, property)
  {
    return Number(value?.[`Get${method}`]?.() ?? value?.[property]) || 0;
  }

  static #isTextureResource(value)
  {
    const name = value?.constructor?.name || "";
    return name === "TriTextureRes" || /TextureRes$/.test(name) || typeof value?.GetTexture === "function";
  }
}
