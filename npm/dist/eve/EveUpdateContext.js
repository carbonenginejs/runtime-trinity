import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_currentTime, _init_extra_currentTime, _init_lastTime, _init_extra_lastTime, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_highDetailThreshold, _init_extra_highDetailThreshold, _init_mediumDetailThreshold, _init_extra_mediumDetailThreshold, _init_lowDetailThreshold, _init_extra_lowDetailThreshold, _init_lodFactor, _init_extra_lodFactor, _init_invLodFactor, _init_extra_invLodFactor, _init_raytracingEnabled, _init_extra_raytracingEnabled, _init_dataTextureManager, _init_extra_dataTextureManager, _init_gpuParticleSystem, _init_extra_gpuParticleSystem, _init_ballpark, _init_extra_ballpark, _init_taskGroup, _init_extra_taskGroup, _init_frustum, _init_extra_frustum, _init_origin, _init_extra_origin, _init_originShift, _init_extra_originShift, _init_originShiftRemainder, _init_extra_originShiftRemainder, _init_renderContext, _init_extra_renderContext, _init_device, _init_extra_device;

/** EveUpdateContext (eve) - hand-maintained from schema shapeHash 227e2060.... */
let _EveUpdateContext;
new class extends _identity {
  static [class EveUpdateContext extends CjsModel {
    static {
      ({
        e: [_init_currentTime, _init_extra_currentTime, _init_lastTime, _init_extra_lastTime, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_highDetailThreshold, _init_extra_highDetailThreshold, _init_mediumDetailThreshold, _init_extra_mediumDetailThreshold, _init_lowDetailThreshold, _init_extra_lowDetailThreshold, _init_lodFactor, _init_extra_lodFactor, _init_invLodFactor, _init_extra_invLodFactor, _init_raytracingEnabled, _init_extra_raytracingEnabled, _init_dataTextureManager, _init_extra_dataTextureManager, _init_gpuParticleSystem, _init_extra_gpuParticleSystem, _init_ballpark, _init_extra_ballpark, _init_taskGroup, _init_extra_taskGroup, _init_frustum, _init_extra_frustum, _init_origin, _init_extra_origin, _init_originShift, _init_extra_originShift, _init_originShiftRemainder, _init_extra_originShiftRemainder, _init_renderContext, _init_extra_renderContext, _init_device, _init_extra_device, _initProto],
        c: [_EveUpdateContext, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveUpdateContext",
        family: "eve"
      })], [[[type, type.float64], 16, "currentTime"], [[type, type.float64], 16, "lastTime"], [[type, type.float32], 16, "visibilityThreshold"], [[type, type.float32], 16, "highDetailThreshold"], [[type, type.float32], 16, "mediumDetailThreshold"], [[type, type.float32], 16, "lowDetailThreshold"], [[type, type.float32], 16, "lodFactor"], [[type, type.float32], 16, "invLodFactor"], [[type, type.boolean], 16, "raytracingEnabled"], [type.objectRef("Tr2DataTextureManager"), 0, "dataTextureManager"], [type.objectRef("Tr2GpuParticleSystem"), 0, "gpuParticleSystem"], [type.objectRef("IEveBallpark"), 0, "ballpark"], [type.objectRef("Tr2ParallelTaskGroup"), 0, "taskGroup"], [type.objectRef("TriFrustum"), 0, "frustum"], [type.rawStruct("Vector3d"), 0, "origin"], [[type, type.vec3], 16, "originShift"], [type.rawStruct("Vector3d"), 0, "originShiftRemainder"], [type.objectRef("Tr2RenderContext"), 0, "renderContext"], [type.objectRef("TriDevice"), 0, "device"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTime"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetTime"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetDeltaT"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateOrigin"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetOrigin"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetOriginShift"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_device(this);
    }
    /** m_currentTime (Be::Time) */
    currentTime = (_initProto(this), _init_currentTime(this, 0));

    /** m_lastTime (Be::Time) */
    lastTime = (_init_extra_currentTime(this), _init_lastTime(this, 0));

    /** m_visibilityThreshold (float) */
    visibilityThreshold = (_init_extra_lastTime(this), _init_visibilityThreshold(this, 0));

    /** m_highDetailThreshold (float) */
    highDetailThreshold = (_init_extra_visibilityThreshold(this), _init_highDetailThreshold(this, 0));

    /** m_mediumDetailThreshold (float) */
    mediumDetailThreshold = (_init_extra_highDetailThreshold(this), _init_mediumDetailThreshold(this, 0));

    /** m_lowDetailThreshold (float) */
    lowDetailThreshold = (_init_extra_mediumDetailThreshold(this), _init_lowDetailThreshold(this, 0));

    /** m_lodFactor (float) */
    lodFactor = (_init_extra_lowDetailThreshold(this), _init_lodFactor(this, 0));

    /** m_invLodFactor (float) */
    invLodFactor = (_init_extra_lodFactor(this), _init_invLodFactor(this, 0));

    /** m_raytracingEnabled (bool) */
    raytracingEnabled = (_init_extra_invLodFactor(this), _init_raytracingEnabled(this, false));

    /** m_dataTextureManager (Tr2DataTextureManagerPtr) */
    dataTextureManager = (_init_extra_raytracingEnabled(this), _init_dataTextureManager(this, null));

    /** m_gpuParticleSystem (Tr2GpuParticleSystemPtr) */
    gpuParticleSystem = (_init_extra_dataTextureManager(this), _init_gpuParticleSystem(this, null));

    /** m_ballpark (IEveBallparkPtr) */
    ballpark = (_init_extra_gpuParticleSystem(this), _init_ballpark(this, null));

    /** m_taskGroup (Tr2ParallelTaskGroup*) */
    taskGroup = (_init_extra_ballpark(this), _init_taskGroup(this, null));

    /** m_frustum (TriFrustum) - swappable per-frame reference, null until stamped. */
    frustum = (_init_extra_taskGroup(this), _init_frustum(this, null));

    /** m_origin (Vector3d) - double-precision world origin for camera-relative
     * rebasing. Carbon initializes it to UNINITIALIZED_ORIGIN (Infinity sentinel)
     * so the first UpdateOrigin produces no shift. */
    origin = (_init_extra_frustum(this), _init_origin(this, new Float64Array(3).fill(Infinity)));

    /** m_originShift (Vector3) */
    originShift = (_init_extra_origin(this), _init_originShift(this, vec3.create()));

    /** m_originShiftRemainder (Vector3d) */
    originShiftRemainder = (_init_extra_originShift(this), _init_originShiftRemainder(this, new Float64Array(3)));

    // --- Runtime composition (NOT in the Carbon schema) ---------------------
    // Carbon's modifiers read view state from Tr2Renderer statics; we thread it
    // explicitly instead. camera/view -> Tr2RenderContext, device -> TriDevice.
    // Both are swappable per pass; reference fields, default null.

    /** renderContext (Tr2RenderContext) - camera/view sub-context, swapped per pass. */
    renderContext = (_init_extra_originShiftRemainder(this), _init_renderContext(this, null));

    /** device (TriDevice) - GPU managers + command surface, duck-typed. */
    device = (_init_extra_renderContext(this), _init_device(this, null));

    /**
     * Current frame time (Carbon EveUpdateContext::GetTime).
     * @returns {Number}
     */
    GetTime() {
      return this.currentTime;
    }

    /**
     * Shifts the current time into lastTime and stores the new frame time
     * (Carbon EveUpdateContext::SetTime).
     * @param {Number} time
     */
    SetTime(time) {
      this.lastTime = this.currentTime;
      this.currentTime = time;
    }

    /**
     * Seconds elapsed since the previous frame, computed on demand as Carbon does
     * (EveUpdateContext::GetDeltaT): 0 until a second SetTime has run.
     * @returns {Number}
     */
    GetDeltaT() {
      return this.lastTime !== 0 ? this.currentTime - this.lastTime : 0;
    }

    /**
     * Tracks the world origin from the ballpark's reference point and computes the
     * per-frame origin shift (Carbon EveUpdateContext::UpdateOrigin): the
     * double-precision delta is split into a float32 shift plus a double residual
     * carried into the next frame; no shift is produced on the first stamped frame
     * (origin still at the Infinity sentinel). The ballpark is duck-typed; per our
     * out-last convention its reference-point read is
     * GetReferencePoint(time, outVector3d) (Carbon passes the out pointer first).
     * @param {Object|null} ballpark
     */
    UpdateOrigin(ballpark) {
      this.ballpark = ballpark ?? null;
      if (!ballpark?.GetReferencePoint) {
        return;
      }
      const originNow = _EveUpdateContext.#originScratch;
      ballpark.GetReferencePoint(this.currentTime, originNow);
      if (this.origin[0] !== Infinity) {
        // originDelta = originNow - m_origin + m_originShiftRemainder (double),
        // then split into float32 (originShift, negated) + double residual.
        for (let axis = 0; axis < 3; axis++) {
          const delta = originNow[axis] - this.origin[axis] + this.originShiftRemainder[axis];
          const deltaF = Math.fround(delta);
          this.originShiftRemainder[axis] = delta - deltaF;
          this.originShift[axis] = -deltaF;
        }
      }
      this.origin.set(originNow);
    }

    /**
     * World origin, or (0,0,0) while still uninitialized (Carbon
     * EveUpdateContext::GetOrigin).
     * @returns {Float64Array}
     */
    GetOrigin() {
      return this.origin[0] !== Infinity ? this.origin : _EveUpdateContext.#zeroOrigin;
    }

    /**
     * Float32 origin shift for the current frame (Carbon
     * EveUpdateContext::GetOriginShift).
     * @returns {Float32Array}
     */
    GetOriginShift() {
      return this.originShift;
    }
  }];
  #originScratch = new Float64Array(3);
  #zeroOrigin = new Float64Array(3);
  constructor() {
    super(_EveUpdateContext), _initClass();
  }
}();

export { _EveUpdateContext as EveUpdateContext };
//# sourceMappingURL=EveUpdateContext.js.map
