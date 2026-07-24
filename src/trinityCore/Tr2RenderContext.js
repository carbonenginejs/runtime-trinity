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
import { type } from "@carbonenginejs/runtime-utils/schema";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { mat4 } from "@carbonenginejs/runtime-utils/mat4";
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { Tr2VariableStore } from "./Tr2VariableStore.js";

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

  #viewportStack = [];

  #projectionStack = [];

  #viewTransformStack = [];

  #intentCursor = 0;

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

  RenderObject(renderable, options = {})
  {
    this.#intents.push({ type: "render-object", renderable, ...options });
    return true;
  }

  DrawEffect(effect, shaderBuffer = null, tlTexCoord = null, brTexCoord = null)
  {
    this.#intents.push({
      type: "draw-effect",
      effect,
      shaderBuffer,
      tlTexCoord: tlTexCoord ? Array.from(tlTexCoord) : null,
      brTexCoord: brTexCoord ? Array.from(brTexCoord) : null
    });
    return true;
  }

  DrawLineSet(lineSet)
  {
    this.#intents.push({ type: "draw-line-set", lineSet });
    return true;
  }

  ClearUav(buffer, value, clearWithFloat = false)
  {
    this.#intents.push({ type: "clear-uav", buffer, value: Array.from(value), clearWithFloat: !!clearWithFloat });
    return true;
  }

  RenderAtlas(step)
  {
    this.#intents.push({ type: "render-atlas", step });
    return true;
  }

  RenderLineGraphs(step)
  {
    this.#intents.push({ type: "render-line-graphs", step });
    return true;
  }

  RenderTexture(source, options = {})
  {
    this.#intents.push({ type: "render-texture", source, ...options });
    return true;
  }

  RenderDebug(debugStep)
  {
    this.#intents.push({
      type: "render-debug",
      vertices: debugStep.lineSet.vertices.map(vertex => ({ position: Array.from(vertex.position), color: vertex.color })),
      text2d: debugStep.text2d.map(entry => ({ ...entry })),
      text3d: debugStep.text3d.map(entry => ({ ...entry, position: Array.from(entry.position) }))
    });
    return true;
  }

  RunComputeShader(effect, groupDimX = 1, groupDimY = 1, groupDimZ = 1)
  {
    this.#intents.push({ type: "run-compute-shader", effect, groupDimX, groupDimY, groupDimZ });
    return true;
  }

  RunComputeShaderIndirect(effect, indirectionBuffer, offsetForArgs = 0)
  {
    this.#intents.push({ type: "run-compute-shader-indirect", effect, indirectionBuffer, offsetForArgs });
    return true;
  }

  SetUpscalingContextID(upscalingContextID)
  {
    this.#intents.push({ type: "set-upscaling-context-id", upscalingContextID: Number(upscalingContextID) >>> 0 });
    return true;
  }

  SetDebugRenderer(renderer)
  {
    this.#intents.push({ type: "set-debug-renderer", renderer: renderer ?? null });
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

  // Save/restore stack for the current viewport (Carbon Push/PopViewport). The
  // step calls these with no argument: push saves the current viewport, pop
  // restores it and re-records the set-viewport intent so realization sees the
  // restored value. Independent of the RT/DS balance-guard stacks.
  PushViewport()
  {
    this.#viewportStack.push(this.#viewport);
    return true;
  }

  PopViewport()
  {
    if (!this.#viewportStack.length) return false;
    this.#viewport = this.#viewportStack.pop();
    this.#intents.push({ type: "set-viewport", viewport: this.#viewport });
    return true;
  }

  GetStackSizeViewport()
  {
    return this.#viewportStack.length;
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

  // Save/restore stack for the cached view transform (Carbon Push/PopViewTransform).
  // Push snapshots the current view object, its matrix, and the has-matrix flag;
  // pop restores them and re-derives the inverse/eye-position via ApplyViewMatrix.
  PushViewTransform()
  {
    this.#viewTransformStack.push({
      view: this.#view,
      hasViewMatrix: this.#hasViewMatrix,
      transform: this.#hasViewMatrix ? mat4.copy(mat4.create(), this.#viewTransform) : null
    });
    return true;
  }

  PopViewTransform()
  {
    if (!this.#viewTransformStack.length) return false;

    const saved = this.#viewTransformStack.pop();
    this.#view = saved.view;
    if (saved.transform)
    {
      this.#ApplyViewMatrix(saved.transform);
    }
    else
    {
      mat4.identity(this.#viewTransform);
      mat4.identity(this.#inverseViewTransform);
      vec3.set(this.#viewPosition, 0, 0, 0);
      this.#hasViewMatrix = false;
    }
    this.#intents.push({ type: "set-view-transform", ...(this.#view ?? {}) });
    return true;
  }

  GetStackSizeViewTransform()
  {
    return this.#viewTransformStack.length;
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

  // Save/restore stack for the current projection (Carbon Push/PopProjection).
  PushProjection()
  {
    this.#projectionStack.push(this.#projection);
    return true;
  }

  PopProjection()
  {
    if (!this.#projectionStack.length) return false;
    this.#projection = this.#projectionStack.pop();
    this.#intents.push({ type: "set-projection", projection: this.#projection });
    return true;
  }

  GetStackSizeProjection()
  {
    return this.#projectionStack.length;
  }

  GetIntents()
  {
    return this.#intents.slice();
  }

  // Incremental exactly-once consumption for a per-step/per-batch executor:
  // returns the intents recorded since the previous TakeIntents/ClearIntents and
  // advances the cursor. Unlike GetIntents (a full copy), the same intent is
  // never returned twice, so nested jobs cannot realize an intent more than once.
  TakeIntents()
  {
    const taken = this.#intents.slice(this.#intentCursor);
    this.#intentCursor = this.#intents.length;
    return taken;
  }

  // Peek at the intents since the cursor without advancing it.
  PeekIntents()
  {
    return this.#intents.slice(this.#intentCursor);
  }

  GetIntentCursor()
  {
    return this.#intentCursor;
  }

  ClearIntents()
  {
    this.#intents.length = 0;
    this.#intentCursor = 0;
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

  /**
   * The global "objectId" TriVariable Carbon registers at context
   * construction and stamps per batch during picking. Registered lazily
   * here so contexts that never pick pay nothing.
   */
  GetObjectIdVariable()
  {
    if (!this.#objectIdVariable)
    {
      this.#objectIdVariable = Tr2VariableStore.GlobalStore().RegisterVariable("objectId", 0.0);
    }
    return this.#objectIdVariable;
  }

  #objectIdVariable = null;

  /**
   * True when any batch's shader implements the technique with at least one
   * pass - Carbon's cheap "can this pass be skipped entirely" pre-check.
   * Consecutive batches sharing a shader are tested once.
   */
  static TechniqueInBatch(batches, techniqueName)
  {
    let prevShader = null;
    for (const batch of batches)
    {
      const shader = batch?.shader;
      if (!shader || shader === prevShader)
      {
        continue;
      }
      prevShader = shader;
      const technique = shader.GetTechniqueIndex?.(techniqueName);
      if (technique === undefined || technique === null || technique < 0)
      {
        continue;
      }
      if ((shader.GetPassCount?.(technique) ?? 0) > 0)
      {
        return true;
      }
    }
    return false;
  }

  static #defaultContext = new Tr2RenderContext();
}
