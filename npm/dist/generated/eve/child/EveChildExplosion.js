import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildContainer as _EveChildContainer } from '../../../eve/child/EveChildContainer.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_generatedGlobalExplosions, _init_extra_generatedGlobalExplosions, _init_localScaling, _init_extra_localScaling, _init_globalScaling, _init_extra_globalScaling, _init_globalExplosion, _init_extra_globalExplosion, _init_localExplosion, _init_extra_localExplosion, _init_localExplosionShared, _init_extra_localExplosionShared, _init_globalExplosions, _init_extra_globalExplosions, _init_localExplosionIntervalFactor, _init_extra_localExplosionIntervalFactor, _init_localExplosionDelay, _init_extra_localExplosionDelay, _init_globalExplosionDelay, _init_extra_globalExplosionDelay, _init_totalDuration, _init_extra_totalDuration, _init_globalDuration, _init_extra_globalDuration, _init_isPlaying, _init_extra_isPlaying, _init_localExplosions, _init_extra_localExplosions, _init_localExplosionInterval, _init_extra_localExplosionInterval, _init_globalExplosionTime, _init_extra_globalExplosionTime, _init_wreckSwitchTime, _init_extra_wreckSwitchTime, _init_wreckSwitchOffsetFromGlobalStart, _init_extra_wreckSwitchOffsetFromGlobalStart, _init_playTime, _init_extra_playTime, _init_localDuration, _init_extra_localDuration;

/** EveChildExplosion (eve/child) - generated from schema shapeHash e55548ba.... */
let _EveChildExplosion;
class EveChildExplosion extends _EveChildContainer {
  static {
    ({
      e: [_init_generatedGlobalExplosions, _init_extra_generatedGlobalExplosions, _init_localScaling, _init_extra_localScaling, _init_globalScaling, _init_extra_globalScaling, _init_globalExplosion, _init_extra_globalExplosion, _init_localExplosion, _init_extra_localExplosion, _init_localExplosionShared, _init_extra_localExplosionShared, _init_globalExplosions, _init_extra_globalExplosions, _init_localExplosionIntervalFactor, _init_extra_localExplosionIntervalFactor, _init_localExplosionDelay, _init_extra_localExplosionDelay, _init_globalExplosionDelay, _init_extra_globalExplosionDelay, _init_totalDuration, _init_extra_totalDuration, _init_globalDuration, _init_extra_globalDuration, _init_isPlaying, _init_extra_isPlaying, _init_localExplosions, _init_extra_localExplosions, _init_localExplosionInterval, _init_extra_localExplosionInterval, _init_globalExplosionTime, _init_extra_globalExplosionTime, _init_wreckSwitchTime, _init_extra_wreckSwitchTime, _init_wreckSwitchOffsetFromGlobalStart, _init_extra_wreckSwitchOffsetFromGlobalStart, _init_playTime, _init_extra_playTime, _init_localDuration, _init_extra_localDuration, _initProto],
      c: [_EveChildExplosion, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildExplosion",
      family: "eve/child"
    })], [[[io, io.read, void 0, type.objectRef("EveChildContainer")], 16, "generatedGlobalExplosions"], [[io, io.persist, type, type.vec3], 16, "localScaling"], [[io, io.persist, type, type.vec3], 16, "globalScaling"], [[io, io.persist, void 0, type.model("IEveSpaceObjectChild")], 16, "globalExplosion"], [[io, io.persist, void 0, type.model("IEveSpaceObjectChild")], 16, "localExplosion"], [[io, io.persist, void 0, type.model("IEveSpaceObjectChild")], 16, "localExplosionShared"], [[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "globalExplosions"], [[io, io.persist, type, type.float32], 16, "localExplosionIntervalFactor"], [[io, io.persist, type, type.float32], 16, "localExplosionDelay"], [[io, io.persist, type, type.float32], 16, "globalExplosionDelay"], [[io, io.read, type, type.float32], 16, "totalDuration"], [[io, io.persist, type, type.float32], 16, "globalDuration"], [[io, io.read, type, type.boolean], 16, "isPlaying"], [[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "localExplosions"], [[io, io.persist, type, type.float32], 16, "localExplosionInterval"], [[io, io.read, type, type.float32], 16, "globalExplosionTime"], [[io, io.read, type, type.float32], 16, "wreckSwitchTime"], [[io, io.readwrite, type, type.float32], 16, "wreckSwitchOffsetFromGlobalStart"], [[io, io.read, type, type.float32], 16, "playTime"], [[io, io.persist, type, type.float32], 16, "localDuration"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetLocalExplosionTransforms"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetGlobalExplosionOffset"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Play"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Stop"]], 0, void 0, _EveChildContainer));
  }
  constructor(...args) {
    super(...args);
    _init_extra_localDuration(this);
  }
  /** m_globalExplosionContainer (EveChildContainerPtr) [READ] */
  generatedGlobalExplosions = (_initProto(this), _init_generatedGlobalExplosions(this, null));

  /** m_localExplosionScaling (Vector3) [READWRITE, PERSIST] */
  localScaling = (_init_extra_generatedGlobalExplosions(this), _init_localScaling(this, vec3.fromValues(1, 1, 1)));

  /** m_globalExplosionScaling (Vector3) [READWRITE, PERSIST] */
  globalScaling = (_init_extra_localScaling(this), _init_globalScaling(this, vec3.fromValues(1, 1, 1)));

  /** m_globalExplosion (IEveSpaceObjectChildPtr) [READWRITE, PERSIST] */
  globalExplosion = (_init_extra_globalScaling(this), _init_globalExplosion(this, null));

  /** m_localExplosion (IEveSpaceObjectChildPtr) [READWRITE, PERSIST] */
  localExplosion = (_init_extra_globalExplosion(this), _init_localExplosion(this, null));

  /** m_localExplosionShared (IEveSpaceObjectChildPtr) [READWRITE, PERSIST] */
  localExplosionShared = (_init_extra_localExplosion(this), _init_localExplosionShared(this, null));

  /** m_globalExplosions (PIEveSpaceObjectChildVector) [READ, PERSIST] */
  globalExplosions = (_init_extra_localExplosionShared(this), _init_globalExplosions(this, []));

  /** m_localExplosionIntervalFactor (float) [READWRITE, PERSIST] */
  localExplosionIntervalFactor = (_init_extra_globalExplosions(this), _init_localExplosionIntervalFactor(this, 1));

  /** m_localExplosionDelay (float) [READWRITE, PERSIST] */
  localExplosionDelay = (_init_extra_localExplosionIntervalFactor(this), _init_localExplosionDelay(this, 0));

  /** m_globalExplosionDelay (float) [READWRITE, PERSIST] */
  globalExplosionDelay = (_init_extra_localExplosionDelay(this), _init_globalExplosionDelay(this, 0));

  /** m_totalDuration (float) [READ] */
  totalDuration = (_init_extra_globalExplosionDelay(this), _init_totalDuration(this, 0));

  /** m_globalDuration (float) [READWRITE, PERSIST] */
  globalDuration = (_init_extra_totalDuration(this), _init_globalDuration(this, 0));

  /** m_isPlaying (bool) [READ] */
  isPlaying = (_init_extra_globalDuration(this), _init_isPlaying(this, false));

  /** m_localExplosions (PIEveSpaceObjectChildVector) [READ, PERSIST] */
  localExplosions = (_init_extra_isPlaying(this), _init_localExplosions(this, []));

  /** m_localExplosionInterval (float) [READWRITE, PERSIST] */
  localExplosionInterval = (_init_extra_localExplosions(this), _init_localExplosionInterval(this, 1));

  /** m_globalExplosionTime (float) [READ] */
  globalExplosionTime = (_init_extra_localExplosionInterval(this), _init_globalExplosionTime(this, 0));

  /** m_wreckSwitchTime (float) [READ] */
  wreckSwitchTime = (_init_extra_globalExplosionTime(this), _init_wreckSwitchTime(this, 0));

  /** m_wreckSwitchOffsetFromGlobalStart (float) [READWRITE] */
  wreckSwitchOffsetFromGlobalStart = (_init_extra_wreckSwitchTime(this), _init_wreckSwitchOffsetFromGlobalStart(this, 0));

  /** m_playTime (float) [READ] */
  playTime = (_init_extra_wreckSwitchOffsetFromGlobalStart(this), _init_playTime(this, 0));

  /** m_localDuration (float) [READWRITE, PERSIST] */
  localDuration = (_init_extra_playTime(this), _init_localDuration(this, 0));

  /** Carbon method SetLocalExplosionTransforms (MAP_METHOD_AND_WRAP). */
  SetLocalExplosionTransforms(...args) {
    throw new Error("EveChildExplosion.SetLocalExplosionTransforms is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetGlobalExplosionOffset (MAP_METHOD_AND_WRAP). */
  SetGlobalExplosionOffset(...args) {
    throw new Error("EveChildExplosion.SetGlobalExplosionOffset is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Play (MAP_METHOD_AND_WRAP). */
  Play(...args) {
    throw new Error("EveChildExplosion.Play is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Stop (MAP_METHOD_AND_WRAP). */
  Stop(...args) {
    throw new Error("EveChildExplosion.Stop is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildExplosion as EveChildExplosion };
//# sourceMappingURL=EveChildExplosion.js.map
