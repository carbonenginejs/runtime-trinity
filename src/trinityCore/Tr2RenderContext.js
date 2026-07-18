// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2RenderContext.h (name/role)
//   trinity/trinityal/*/Tr2RenderContext*.h (command surface, recorded as intents)
//   trinity/trinity/Tr2Renderer.cpp (view-state statics, relocated here)
// Hand-maintained amalgam of three Carbon surfaces (audited 2026-07-18):
// 1. The command surface (PushRenderTarget/Clear/SetViewport/PresentSwapChain/
//    SetRenderState/...) mirrors the backend AL context classes and RECORDS
//    INTENTS instead of executing - a deliberate stand-in until the
//    WebGL/WebGPU engine exists.
// 2. The cached view state (SetViewTransform -> GetViewTransform/
//    GetInverseViewTransform/GetViewPosition) relocates Carbon's Tr2Renderer
//    STATICS onto this context so frame consumers read it via the threaded
//    updateContext.renderContext instead of a global.
// 3. Carbon's actual Tr2RenderContext.h surface - RenderBatches family,
//    GetConstantBuffer/GetBackBuffer, and Fork/Join parallel encoding - is NOT
//    ported: batch rendering awaits the material/batch runtime; parallel
//    encoding is intentionally omitted in single-threaded JS.
import { type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { vec3 } from "@carbonenginejs/core-math/vec3";

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

  // Carbon-faithful cached view state (Tr2Renderer::SetViewTransform): the raw
  // column-major view matrix, its inverse (computed once per view change, read
  // many times per frame by camera-dependent modifiers), and the view/eye
  // position taken from the inverse-view translation row. Allocated once and
  // copied into - never reallocated per read (allocation rules E/F).
  #viewTransform = mat4.create();

  #inverseViewTransform = mat4.create();

  #viewPosition = vec3.create();

  #hasViewMatrix = false;

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
    this.#ApplyViewMatrix(view);
    this.#intents.push({ type: "set-view", ...this.#view });
    return true;
  }

  SetViewTransform(transform, source = null)
  {
    this.#view = { transform: transform ?? null, source: source ?? null };
    this.#ApplyViewMatrix(transform);
    this.#intents.push({ type: "set-view-transform", ...this.#view });
    return true;
  }

  // Mirrors Tr2Renderer::SetViewTransform: cache the view matrix, compute its
  // inverse once, and derive the view position from the inverse-view
  // translation row (Carbon reads _41.._43 -> column-major indices [12,13,14]).
  #ApplyViewMatrix(matrix)
  {
    if (!matrix || matrix.length !== 16)
    {
      return;
    }

    mat4.copy(this.#viewTransform, matrix);

    if (!mat4.invert(this.#inverseViewTransform, this.#viewTransform))
    {
      mat4.identity(this.#inverseViewTransform);
    }

    vec3.set(
      this.#viewPosition,
      this.#inverseViewTransform[12],
      this.#inverseViewTransform[13],
      this.#inverseViewTransform[14]
    );
    this.#hasViewMatrix = true;
  }

  GetView()
  {
    return this.#view ? { ...this.#view } : null;
  }

  // Raw column-major view matrix (Tr2Renderer::GetViewTransform). Live buffer -
  // callers read, never mutate.
  GetViewTransform()
  {
    return this.#viewTransform;
  }

  // Inverse of the view matrix (Tr2Renderer::GetInverseViewTransform), cached on
  // the last view change. Live buffer - callers read, never mutate.
  GetInverseViewTransform()
  {
    return this.#inverseViewTransform;
  }

  // World-space view/eye position (Tr2Renderer::GetViewPosition): the
  // inverse-view translation. Live buffer - callers read, never mutate.
  GetViewPosition()
  {
    return this.#viewPosition;
  }

  // Whether a view matrix has been set (camera-dependent modifiers fall back to
  // an unchanged transform when it has not).
  HasViewMatrix()
  {
    return this.#hasViewMatrix;
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
