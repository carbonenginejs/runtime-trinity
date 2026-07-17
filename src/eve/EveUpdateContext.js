// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/EveUpdateContext.h
//
// Hand-maintained (NOT generated). Promoted out of src/generated because this
// per-frame context carries two runtime-only composition references -
// renderContext (Tr2RenderContext) and device (TriDevice) - that do not exist
// in the Carbon schema and would be dropped on every regeneration. The schema
// scan of EveUpdateContext.h also emitted assignment-statement artifacts
// (time / manager / ps) and left every scalar as @type.unknown; both are fixed
// here. regenerate_generated.js skips this class automatically once a
// hand-maintained source with the same name exists (see handSymbols).
//
// Field types verified against Carbon EveUpdateContext.h. Per the engine field
// rules: only reference fields (objectRef) default to null; scalars default to
// 0 / false and fixed vectors to a zero vector.
import { carbon, impl, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { vec3 } from "@carbonenginejs/core-math/vec3";

/** EveUpdateContext (eve) - hand-maintained from schema shapeHash 227e2060.... */
@type.define({ className: "EveUpdateContext", family: "eve" })
export class EveUpdateContext extends CjsModel
{

  /** m_currentTime (Be::Time) */
  @type.float64
  currentTime = 0;

  /** m_lastTime (Be::Time) */
  @type.float64
  lastTime = 0;

  /** m_deltaT (float) */
  @type.float32
  deltaT = 0;

  /** m_visibilityThreshold (float) */
  @type.float32
  visibilityThreshold = 0;

  /** m_highDetailThreshold (float) */
  @type.float32
  highDetailThreshold = 0;

  /** m_mediumDetailThreshold (float) */
  @type.float32
  mediumDetailThreshold = 0;

  /** m_lowDetailThreshold (float) */
  @type.float32
  lowDetailThreshold = 0;

  /** m_lodFactor (float) */
  @type.float32
  lodFactor = 0;

  /** m_invLodFactor (float) */
  @type.float32
  invLodFactor = 0;

  /** m_raytracingEnabled (bool) */
  @type.boolean
  raytracingEnabled = false;

  /** m_dataTextureManager (Tr2DataTextureManagerPtr) */
  @type.objectRef("Tr2DataTextureManager")
  dataTextureManager = null;

  /** m_gpuParticleSystem (Tr2GpuParticleSystemPtr) */
  @type.objectRef("Tr2GpuParticleSystem")
  gpuParticleSystem = null;

  /** m_ballpark (IEveBallparkPtr) */
  @type.objectRef("IEveBallpark")
  ballpark = null;

  /** m_taskGroup (Tr2ParallelTaskGroup*) */
  @type.objectRef("Tr2ParallelTaskGroup")
  taskGroup = null;

  /** m_frustum (TriFrustum) - swappable per-frame reference, null until stamped. */
  @type.objectRef("TriFrustum")
  frustum = null;

  /** m_origin (Vector3d) - double-precision world origin for camera-relative rebasing. */
  @type.rawStruct("Vector3d")
  origin = new Float64Array(3);

  /** m_originShift (Vector3) */
  @type.vec3
  originShift = vec3.create();

  /** m_originShiftRemainder (Vector3d) */
  @type.rawStruct("Vector3d")
  originShiftRemainder = new Float64Array(3);

  /** originNow (Vector3d) - this frame's raw origin before shifting. */
  @type.rawStruct("Vector3d")
  originNow = new Float64Array(3);

  /** originDelta (Vector3d) = originNow - m_origin + m_originShiftRemainder. */
  @type.rawStruct("Vector3d")
  originDelta = new Float64Array(3);

  // --- Runtime composition (NOT in the Carbon schema) ---------------------
  // Carbon's modifiers read view state from Tr2Renderer statics; we thread it
  // explicitly instead. camera/view -> Tr2RenderContext, device -> TriDevice.
  // Both are swappable per pass; reference fields, default null.

  /** renderContext (Tr2RenderContext) - camera/view sub-context, swapped per pass. */
  @type.objectRef("Tr2RenderContext")
  renderContext = null;

  /** device (TriDevice) - GPU managers + command surface, duck-typed. */
  @type.objectRef("TriDevice")
  device = null;

  /**
   * Current frame time (Carbon EveUpdateContext::GetTime).
   * @returns {Number}
   */
  @carbon.method
  @impl.implemented
  GetTime()
  {
    return this.currentTime;
  }

  /**
   * Seconds elapsed since the previous frame (Carbon EveUpdateContext::GetDeltaT).
   * @returns {Number}
   */
  @carbon.method
  @impl.implemented
  GetDeltaT()
  {
    return this.deltaT;
  }
}
