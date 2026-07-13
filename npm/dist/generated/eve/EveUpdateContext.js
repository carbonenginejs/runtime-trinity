import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_originNow, _init_extra_originNow, _init_taskGroup, _init_extra_taskGroup, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_highDetailThreshold, _init_extra_highDetailThreshold, _init_mediumDetailThreshold, _init_extra_mediumDetailThreshold, _init_lowDetailThreshold, _init_extra_lowDetailThreshold, _init_lodFactor, _init_extra_lodFactor, _init_frustum, _init_extra_frustum, _init_currentTime, _init_extra_currentTime, _init_lastTime, _init_extra_lastTime, _init_dataTextureManager, _init_extra_dataTextureManager, _init_gpuParticleSystem, _init_extra_gpuParticleSystem, _init_ballpark, _init_extra_ballpark, _init_origin, _init_extra_origin, _init_originShift, _init_extra_originShift, _init_originShiftRemainder, _init_extra_originShiftRemainder, _init_invLodFactor, _init_extra_invLodFactor, _init_time, _init_extra_time, _init_manager, _init_extra_manager, _init_ps, _init_extra_ps, _init_deltaT, _init_extra_deltaT, _init_raytracingEnabled, _init_extra_raytracingEnabled, _init_originDelta, _init_extra_originDelta;

/** EveUpdateContext (eve) - generated from schema shapeHash 227e2060.... */
let _EveUpdateContext;
class EveUpdateContext extends CjsModel {
  static {
    ({
      e: [_init_originNow, _init_extra_originNow, _init_taskGroup, _init_extra_taskGroup, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_highDetailThreshold, _init_extra_highDetailThreshold, _init_mediumDetailThreshold, _init_extra_mediumDetailThreshold, _init_lowDetailThreshold, _init_extra_lowDetailThreshold, _init_lodFactor, _init_extra_lodFactor, _init_frustum, _init_extra_frustum, _init_currentTime, _init_extra_currentTime, _init_lastTime, _init_extra_lastTime, _init_dataTextureManager, _init_extra_dataTextureManager, _init_gpuParticleSystem, _init_extra_gpuParticleSystem, _init_ballpark, _init_extra_ballpark, _init_origin, _init_extra_origin, _init_originShift, _init_extra_originShift, _init_originShiftRemainder, _init_extra_originShiftRemainder, _init_invLodFactor, _init_extra_invLodFactor, _init_time, _init_extra_time, _init_manager, _init_extra_manager, _init_ps, _init_extra_ps, _init_deltaT, _init_extra_deltaT, _init_raytracingEnabled, _init_extra_raytracingEnabled, _init_originDelta, _init_extra_originDelta],
      c: [_EveUpdateContext, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveUpdateContext",
      family: "eve"
    })], [[[type, type.unknown], 16, "originNow"], [[type, type.unknown], 16, "taskGroup"], [[type, type.unknown], 16, "visibilityThreshold"], [[type, type.unknown], 16, "highDetailThreshold"], [[type, type.unknown], 16, "mediumDetailThreshold"], [[type, type.unknown], 16, "lowDetailThreshold"], [[type, type.unknown], 16, "lodFactor"], [[type, type.unknown], 16, "frustum"], [[type, type.float64], 16, "currentTime"], [[type, type.float64], 16, "lastTime"], [type.objectRef("Tr2DataTextureManager"), 0, "dataTextureManager"], [type.objectRef("Tr2GpuParticleSystem"), 0, "gpuParticleSystem"], [type.objectRef("IEveBallpark"), 0, "ballpark"], [type.rawStruct("Vector3d"), 0, "origin"], [[type, type.vec3], 16, "originShift"], [type.rawStruct("Vector3d"), 0, "originShiftRemainder"], [[type, type.float32], 16, "invLodFactor"], [[type, type.unknown], 16, "time"], [[type, type.unknown], 16, "manager"], [[type, type.unknown], 16, "ps"], [[type, type.float32], 16, "deltaT"], [[type, type.boolean], 16, "raytracingEnabled"], [type.rawStruct("Vector3d"), 0, "originDelta"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_originDelta(this);
  }
  /** originNow (m_origin =) */
  originNow = _init_originNow(this, null);

  /** taskGroup (m_taskGroup =) */
  taskGroup = (_init_extra_originNow(this), _init_taskGroup(this, null));

  /** visibilityThreshold (m_visibilityThreshold =) */
  visibilityThreshold = (_init_extra_taskGroup(this), _init_visibilityThreshold(this, null));

  /** highDetailThreshold (m_highDetailThreshold =) */
  highDetailThreshold = (_init_extra_visibilityThreshold(this), _init_highDetailThreshold(this, null));

  /** mediumDetailThreshold (m_mediumDetailThreshold =) */
  mediumDetailThreshold = (_init_extra_highDetailThreshold(this), _init_mediumDetailThreshold(this, null));

  /** lowDetailThreshold (m_lowDetailThreshold =) */
  lowDetailThreshold = (_init_extra_mediumDetailThreshold(this), _init_lowDetailThreshold(this, null));

  /** lodFactor (m_lodFactor =) */
  lodFactor = (_init_extra_lowDetailThreshold(this), _init_lodFactor(this, null));

  /** frustum (m_frustum =) */
  frustum = (_init_extra_lodFactor(this), _init_frustum(this, null));

  /** m_currentTime (Be::Time) */
  currentTime = (_init_extra_frustum(this), _init_currentTime(this, 0));

  /** m_lastTime (Be::Time) */
  lastTime = (_init_extra_currentTime(this), _init_lastTime(this, 0));

  /** m_dataTextureManager (Tr2DataTextureManagerPtr) */
  dataTextureManager = (_init_extra_lastTime(this), _init_dataTextureManager(this, null));

  /** m_gpuParticleSystem (Tr2GpuParticleSystemPtr) */
  gpuParticleSystem = (_init_extra_dataTextureManager(this), _init_gpuParticleSystem(this, null));

  /** m_ballpark (IEveBallparkPtr) */
  ballpark = (_init_extra_gpuParticleSystem(this), _init_ballpark(this, null));

  /** m_origin (Vector3d) */
  origin = (_init_extra_ballpark(this), _init_origin(this, null));

  /** m_originShift (Vector3) */
  originShift = (_init_extra_origin(this), _init_originShift(this, vec3.create()));

  /** m_originShiftRemainder (Vector3d) */
  originShiftRemainder = (_init_extra_originShift(this), _init_originShiftRemainder(this, null));

  /** m_invLodFactor (float) */
  invLodFactor = (_init_extra_originShiftRemainder(this), _init_invLodFactor(this, 0));

  /** time (m_currentTime =) */
  time = (_init_extra_invLodFactor(this), _init_time(this, null));

  /** manager (m_dataTextureManager =) */
  manager = (_init_extra_time(this), _init_manager(this, null));

  /** ps (m_gpuParticleSystem =) */
  ps = (_init_extra_manager(this), _init_ps(this, null));

  /** deltaT (float) */
  deltaT = (_init_extra_ps(this), _init_deltaT(this, 0));

  /** m_raytracingEnabled (bool) */
  raytracingEnabled = (_init_extra_deltaT(this), _init_raytracingEnabled(this, false));

  /** originDelta (Vector3d) */
  originDelta = (_init_extra_raytracingEnabled(this), _init_originDelta(this, null));
  static {
    _initClass();
  }
}

export { _EveUpdateContext as EveUpdateContext };
//# sourceMappingURL=EveUpdateContext.js.map
