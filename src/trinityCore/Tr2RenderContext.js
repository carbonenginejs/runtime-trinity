// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2RenderContext.h
// Hand-maintained from Carbon source; backend-private parallel state is omitted.
import { type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** Tr2RenderContext (trinityCore) - generated from schema shapeHash 73e2a4e7.... */
@type.define({ className: "Tr2RenderContext", family: "trinityCore" })
export class Tr2RenderContext extends CjsModel
{
  #renderTargetStacks = new Map();

  #depthStencilStack = [];

  #diagnostics = [];

  #stepExecutor = null;

  #intents = [];

  #renderTargets = new Map();

  #depthStencil = null;

  #viewport = null;

  #view = null;

  #projection = null;

  static TextureFilter = Object.freeze({
    TF_NONE: 0,
    TF_POINT: 1,
    TF_LINEAR: 2,
    TF_ANISOTROPIC: 3,
    TF_COMPARISON: 0x80
  });

  static TextureAddressMode = Object.freeze({
    TA_WRAP: 1,
    TA_MIRROR: 2,
    TA_CLAMP: 3,
    TA_BORDER: 4,
    TA_MIRROR_ONCE: 5
  });

  SetStepExecutor(executor)
  {
    this.#stepExecutor = executor ?? null;
    return this;
  }

  BeginStep(step, realTime, simTime, job)
  {
    if (this.#stepExecutor?.BeginStep)
    {
      return this.#stepExecutor.BeginStep(step, realTime, simTime, job, this);
    }
    return step?.BeginExecute?.(this);
  }

  ExecuteStep(step, realTime, simTime, job)
  {
    if (this.#stepExecutor?.ExecuteStep)
    {
      return this.#stepExecutor.ExecuteStep(step, realTime, simTime, job, this);
    }
    return step?.Execute?.(realTime, simTime, this);
  }

  EndStep(step, realTime, simTime, job)
  {
    if (this.#stepExecutor?.EndStep)
    {
      return this.#stepExecutor.EndStep(step, realTime, simTime, job, this);
    }
    return step?.EndExecute?.(this);
  }

  PushRenderTarget(renderTarget = null, slot = 0)
  {
    const index = Number(slot) >>> 0;
    let stack = this.#renderTargetStacks.get(index);
    if (!stack)
    {
      stack = [];
      this.#renderTargetStacks.set(index, stack);
    }
    stack.push(renderTarget);
    return true;
  }

  PopRenderTarget(slot = 0)
  {
    const stack = this.#renderTargetStacks.get(Number(slot) >>> 0);
    return stack?.length ? stack.pop() : null;
  }

  GetStackSizeRT(slot = 0)
  {
    return this.#renderTargetStacks.get(Number(slot) >>> 0)?.length ?? 0;
  }

  PushDepthStencil(depthStencil = null)
  {
    this.#depthStencilStack.push(depthStencil);
    return true;
  }

  PopDepthStencil()
  {
    return this.#depthStencilStack.length ? this.#depthStencilStack.pop() : null;
  }

  GetStackSizeDS()
  {
    return this.#depthStencilStack.length;
  }

  SetRenderTarget(slot, renderTarget)
  {
    const index = Number(slot) >>> 0;
    this.#renderTargets.set(index, renderTarget ?? null);
    this.#intents.push({ type: "set-render-target", slot: index, renderTarget: renderTarget ?? null });
    return true;
  }

  GetRenderTarget(slot = 0)
  {
    return this.#renderTargets.get(Number(slot) >>> 0) ?? null;
  }

  SetDepthStencil(depthStencil)
  {
    this.#depthStencil = depthStencil ?? null;
    this.#intents.push({ type: "set-depth-stencil", depthStencil: this.#depthStencil });
    return true;
  }

  GetDepthStencil()
  {
    return this.#depthStencil;
  }

  Clear(options)
  {
    const intent = {
      type: "clear",
      color: options?.color ? Array.from(options.color) : null,
      depth: options?.depth ?? null,
      stencil: options?.stencil ?? null,
      clearColor: !!options?.clearColor,
      clearDepth: !!options?.clearDepth,
      clearStencil: !!options?.clearStencil
    };
    this.#intents.push(intent);
    return true;
  }

  IsRenderTargetValid(renderTarget)
  {
    return renderTarget != null;
  }

  ResolveRenderTarget(source, destination)
  {
    this.#intents.push({ type: "resolve-render-target", source, destination });
    return true;
  }

  CopyRenderTarget(intent)
  {
    this.#intents.push({ type: "copy-render-target", ...intent });
    return true;
  }

  GenerateMipMaps(renderTarget)
  {
    this.#intents.push({ type: "generate-mipmaps", renderTarget });
    return true;
  }

  PresentSwapChain(swapChain)
  {
    this.#intents.push({ type: "present-swap-chain", swapChain });
    return true;
  }

  SetViewport(viewport)
  {
    this.#viewport = viewport ?? null;
    this.#intents.push({ type: "set-viewport", viewport: this.#viewport });
    return true;
  }

  SetFullScreenViewport()
  {
    this.#viewport = null;
    this.#intents.push({ type: "set-fullscreen-viewport" });
    return true;
  }

  GetViewport()
  {
    return this.#viewport;
  }

  SetView(view, camera = null, simTime = 0)
  {
    this.#view = { view: view ?? null, camera: camera ?? null, simTime };
    this.#intents.push({ type: "set-view", ...this.#view });
    return true;
  }

  SetViewTransform(transform, source = null)
  {
    this.#view = { transform: transform ?? null, source: source ?? null };
    this.#intents.push({ type: "set-view-transform", ...this.#view });
    return true;
  }

  GetView()
  {
    return this.#view ? { ...this.#view } : null;
  }

  SetProjection(projection)
  {
    this.#projection = projection ?? null;
    this.#intents.push({ type: "set-projection", projection: this.#projection });
    return true;
  }

  SetRenderState(state, value)
  {
    this.#intents.push({ type: "set-render-state", state: Number(state) >>> 0, value: Number(value) >>> 0 });
    return true;
  }

  ApplyStandardStates(renderingMode)
  {
    this.#intents.push({ type: "apply-standard-states", renderingMode: Number(renderingMode) >>> 0 });
    return true;
  }

  SetWireframeRendering(enabled)
  {
    this.#intents.push({ type: "set-wireframe-rendering", enabled: !!enabled });
    return true;
  }

  GetProjection()
  {
    return this.#projection;
  }

  GetIntents()
  {
    return this.#intents.slice();
  }

  ClearIntents()
  {
    this.#intents.length = 0;
  }

  AddDiagnostic(diagnostic)
  {
    this.#diagnostics.push(diagnostic);
  }

  GetDiagnostics()
  {
    return this.#diagnostics.slice();
  }

  ClearDiagnostics()
  {
    this.#diagnostics.length = 0;
  }

  static GetDefault()
  {
    return Tr2RenderContext.#defaultContext;
  }

  static #defaultContext = new Tr2RenderContext();
}
