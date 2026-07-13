import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_startCurveSet, _init_extra_startCurveSet, _init_stopCurveSet, _init_extra_stopCurveSet, _init_stretch, _init_extra_stretch, _init_name, _init_extra_name, _init_firingPeakTime, _init_extra_firingPeakTime, _init_firingDelay, _init_extra_firingDelay, _init_firingDelay2, _init_extra_firingDelay2, _init_firingDelay3, _init_extra_firingDelay3, _init_firingDelay4, _init_extra_firingDelay4, _init_firingDelay5, _init_extra_firingDelay5, _init_firingDelay6, _init_extra_firingDelay6, _init_firingDelay7, _init_extra_firingDelay7, _init_firingDelay8, _init_extra_firingDelay8, _init_firingDelay9, _init_extra_firingDelay9, _init_firingDelay0, _init_extra_firingDelay0, _init_firingDelay1, _init_extra_firingDelay1, _init_firingDelay10, _init_extra_firingDelay10, _init_endPosition, _init_extra_endPosition, _init_firingDuration, _init_extra_firingDuration, _init_isFiring, _init_extra_isFiring, _init_destinationObserver, _init_extra_destinationObserver, _init_sourceObserver, _init_extra_sourceObserver, _init_firingDurationOverride, _init_extra_firingDurationOverride, _init_useMuzzleTransform, _init_extra_useMuzzleTransform, _init_isLoopFiring, _init_extra_isLoopFiring, _init_boneName, _init_extra_boneName, _init_display, _init_extra_display, _init_scaleEffectTarget, _init_extra_scaleEffectTarget, _init_minRadius, _init_extra_minRadius, _init_maxRadius, _init_extra_maxRadius, _init_minScale, _init_extra_minScale, _init_maxScale, _init_extra_maxScale;

/** EveTurretFiringFX (eve/attachment/turrets) - generated from schema shapeHash ae5459c6.... */
let _EveTurretFiringFX;
class EveTurretFiringFX extends _EveEntity {
  static {
    ({
      e: [_init_startCurveSet, _init_extra_startCurveSet, _init_stopCurveSet, _init_extra_stopCurveSet, _init_stretch, _init_extra_stretch, _init_name, _init_extra_name, _init_firingPeakTime, _init_extra_firingPeakTime, _init_firingDelay, _init_extra_firingDelay, _init_firingDelay2, _init_extra_firingDelay2, _init_firingDelay3, _init_extra_firingDelay3, _init_firingDelay4, _init_extra_firingDelay4, _init_firingDelay5, _init_extra_firingDelay5, _init_firingDelay6, _init_extra_firingDelay6, _init_firingDelay7, _init_extra_firingDelay7, _init_firingDelay8, _init_extra_firingDelay8, _init_firingDelay9, _init_extra_firingDelay9, _init_firingDelay0, _init_extra_firingDelay0, _init_firingDelay1, _init_extra_firingDelay1, _init_firingDelay10, _init_extra_firingDelay10, _init_endPosition, _init_extra_endPosition, _init_firingDuration, _init_extra_firingDuration, _init_isFiring, _init_extra_isFiring, _init_destinationObserver, _init_extra_destinationObserver, _init_sourceObserver, _init_extra_sourceObserver, _init_firingDurationOverride, _init_extra_firingDurationOverride, _init_useMuzzleTransform, _init_extra_useMuzzleTransform, _init_isLoopFiring, _init_extra_isLoopFiring, _init_boneName, _init_extra_boneName, _init_display, _init_extra_display, _init_scaleEffectTarget, _init_extra_scaleEffectTarget, _init_minRadius, _init_extra_minRadius, _init_maxRadius, _init_extra_maxRadius, _init_minScale, _init_extra_minScale, _init_maxScale, _init_extra_maxScale, _initProto],
      c: [_EveTurretFiringFX, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveTurretFiringFX",
      family: "eve/attachment/turrets"
    })], [[[io, io.persist, void 0, type.objectRef("TriCurveSet")], 16, "startCurveSet"], [[io, io.persist, void 0, type.objectRef("TriCurveSet")], 16, "stopCurveSet"], [[io, io.persist, void 0, type.list("IEveFiringEffectElement")], 16, "stretch"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.float32], 16, "firingPeakTime"], [[io, io.persist, type, type.float32], 16, "firingDelay1"], [[io, io.persist, type, type.float32], 16, "firingDelay10"], [[io, io.persist, type, type.float32], 16, "firingDelay11"], [[io, io.persist, type, type.float32], 16, "firingDelay12"], [[io, io.persist, type, type.float32], 16, "firingDelay2"], [[io, io.persist, type, type.float32], 16, "firingDelay3"], [[io, io.persist, type, type.float32], 16, "firingDelay4"], [[io, io.persist, type, type.float32], 16, "firingDelay5"], [[io, io.persist, type, type.float32], 16, "firingDelay6"], [[io, io.persist, type, type.float32], 16, "firingDelay7"], [[io, io.persist, type, type.float32], 16, "firingDelay8"], [[io, io.persist, type, type.float32], 16, "firingDelay9"], [[io, io.readwrite, type, type.vec3], 16, "endPosition"], [[io, io.read, type, type.float32], 16, "firingDuration"], [[io, io.read, type, type.boolean], 16, "isFiring"], [[io, io.persist, void 0, type.objectRef("TriObserverLocal")], 16, "destinationObserver"], [[io, io.persist, void 0, type.objectRef("TriObserverLocal")], 16, "sourceObserver"], [[io, io.notify, io, io.persist, type, type.float32], 16, "firingDurationOverride"], [[io, io.persist, type, type.boolean], 16, "useMuzzleTransform"], [[io, io.persist, type, type.boolean], 16, "isLoopFiring"], [[io, io.persist, type, type.string], 16, "boneName"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "scaleEffectTarget"], [[io, io.persist, type, type.float32], 16, "minRadius"], [[io, io.persist, type, type.float32], 16, "maxRadius"], [[io, io.persist, type, type.float32], 16, "minScale"], [[io, io.persist, type, type.float32], 16, "maxScale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetPerMuzzleEffectCount"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_maxScale(this);
  }
  /** m_startCurveSet (TriCurveSetPtr) [READWRITE, PERSIST] */
  startCurveSet = (_initProto(this), _init_startCurveSet(this, null));

  /** m_stopCurveSet (TriCurveSetPtr) [READWRITE, PERSIST] */
  stopCurveSet = (_init_extra_startCurveSet(this), _init_stopCurveSet(this, null));

  /** m_stretch (PIEveFiringEffectElementVector) [READ, PERSIST] */
  stretch = (_init_extra_stopCurveSet(this), _init_stretch(this, []));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_stretch(this), _init_name(this, ""));

  /** m_firingPeakTime (float) [READWRITE, PERSIST] */
  firingPeakTime = (_init_extra_name(this), _init_firingPeakTime(this, 0));

  /** m_perMuzzleData[0].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay1 = (_init_extra_firingPeakTime(this), _init_firingDelay(this, 0));

  /** m_perMuzzleData[9].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay10 = (_init_extra_firingDelay(this), _init_firingDelay2(this, 0));

  /** m_perMuzzleData[10].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay11 = (_init_extra_firingDelay2(this), _init_firingDelay3(this, 0));

  /** m_perMuzzleData[11].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay12 = (_init_extra_firingDelay3(this), _init_firingDelay4(this, 0));

  /** m_perMuzzleData[1].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay2 = (_init_extra_firingDelay4(this), _init_firingDelay5(this, 0));

  /** m_perMuzzleData[2].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay3 = (_init_extra_firingDelay5(this), _init_firingDelay6(this, 0));

  /** m_perMuzzleData[3].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay4 = (_init_extra_firingDelay6(this), _init_firingDelay7(this, 0));

  /** m_perMuzzleData[4].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay5 = (_init_extra_firingDelay7(this), _init_firingDelay8(this, 0));

  /** m_perMuzzleData[5].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay6 = (_init_extra_firingDelay8(this), _init_firingDelay9(this, 0));

  /** m_perMuzzleData[6].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay7 = (_init_extra_firingDelay9(this), _init_firingDelay0(this, 0));

  /** m_perMuzzleData[7].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay8 = (_init_extra_firingDelay0(this), _init_firingDelay1(this, 0));

  /** m_perMuzzleData[8].constantDelay (float) [READWRITE, PERSIST] */
  firingDelay9 = (_init_extra_firingDelay1(this), _init_firingDelay10(this, 0));

  /** m_endPosition (Vector3) [READWRITE] */
  endPosition = (_init_extra_firingDelay10(this), _init_endPosition(this, vec3.create()));

  /** m_firingDuration (float) [READ] */
  firingDuration = (_init_extra_endPosition(this), _init_firingDuration(this, 1000));

  /** m_isFiring (bool) [READ] */
  isFiring = (_init_extra_firingDuration(this), _init_isFiring(this, false));

  /** m_destinationObserver (TriObserverLocalPtr) [READWRITE, PERSIST] */
  destinationObserver = (_init_extra_isFiring(this), _init_destinationObserver(this, null));

  /** m_sourceObserver (TriObserverLocalPtr) [READWRITE, PERSIST] */
  sourceObserver = (_init_extra_destinationObserver(this), _init_sourceObserver(this, null));

  /** m_firingDurationOverride (float) [READWRITE, NOTIFY, PERSIST] */
  firingDurationOverride = (_init_extra_sourceObserver(this), _init_firingDurationOverride(this, -1));

  /** m_useMuzzleTransform (bool) [READWRITE, PERSIST] */
  useMuzzleTransform = (_init_extra_firingDurationOverride(this), _init_useMuzzleTransform(this, false));

  /** m_isLoopFiring (bool) [READWRITE, PERSIST] */
  isLoopFiring = (_init_extra_useMuzzleTransform(this), _init_isLoopFiring(this, false));

  /** m_boneName (BlueSharedString) [READWRITE, PERSIST] */
  boneName = (_init_extra_isLoopFiring(this), _init_boneName(this, "Pos_Fire"));

  /** m_display (bool) [READWRITE, NOTIFY] */
  display = (_init_extra_boneName(this), _init_display(this, true));

  /** m_scaleEffectTarget (bool) [READWRITE, PERSIST] */
  scaleEffectTarget = (_init_extra_display(this), _init_scaleEffectTarget(this, false));

  /** m_minRadius (float) [READWRITE, PERSIST] */
  minRadius = (_init_extra_scaleEffectTarget(this), _init_minRadius(this, 30));

  /** m_maxRadius (float) [READWRITE, PERSIST] */
  maxRadius = (_init_extra_minRadius(this), _init_maxRadius(this, 3000));

  /** m_minScale (float) [READWRITE, PERSIST] */
  minScale = (_init_extra_maxRadius(this), _init_minScale(this, 1));

  /** m_maxScale (float) [READWRITE, PERSIST] */
  maxScale = (_init_extra_minScale(this), _init_maxScale(this, 10));

  /** Carbon method GetPerMuzzleEffectCount (MAP_METHOD_AND_WRAP). */
  GetPerMuzzleEffectCount(...args) {
    throw _EveEntity.notImplemented("EveTurretFiringFX", "GetPerMuzzleEffectCount", args);
  }
  static {
    _initClass();
  }
}

export { _EveTurretFiringFX as EveTurretFiringFX };
//# sourceMappingURL=EveTurretFiringFX.js.map
