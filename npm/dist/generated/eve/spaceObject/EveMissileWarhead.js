import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveTransform as _EveTransform } from './EveTransform.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_pathOffsetNoiseScale, _init_extra_pathOffsetNoiseScale, _init_pathOffsetNoiseSpeed, _init_extra_pathOffsetNoiseSpeed, _init_startDataValid, _init_extra_startDataValid, _init_pathOffset, _init_extra_pathOffset, _init_maxExplosionDistance, _init_extra_maxExplosionDistance, _init_impactDuration, _init_extra_impactDuration, _init_explosionPosition, _init_extra_explosionPosition, _init_impactSize, _init_extra_impactSize, _init_spriteSet, _init_extra_spriteSet, _init_targetLocatorID, _init_extra_targetLocatorID, _init_durationEjectPhase, _init_extra_durationEjectPhase, _init_doSpread, _init_extra_doSpread, _init_acceleration, _init_extra_acceleration, _init_id, _init_extra_id, _init_startEjectVelocity, _init_extra_startEjectVelocity, _init_warheadLength, _init_extra_warheadLength, _init_warheadRadius, _init_extra_warheadRadius;

/** EveMissileWarhead (eve/spaceObject) - generated from schema shapeHash 3502a67f.... */
let _EveMissileWarhead;
class EveMissileWarhead extends _EveTransform {
  static {
    ({
      e: [_init_pathOffsetNoiseScale, _init_extra_pathOffsetNoiseScale, _init_pathOffsetNoiseSpeed, _init_extra_pathOffsetNoiseSpeed, _init_startDataValid, _init_extra_startDataValid, _init_pathOffset, _init_extra_pathOffset, _init_maxExplosionDistance, _init_extra_maxExplosionDistance, _init_impactDuration, _init_extra_impactDuration, _init_explosionPosition, _init_extra_explosionPosition, _init_impactSize, _init_extra_impactSize, _init_spriteSet, _init_extra_spriteSet, _init_targetLocatorID, _init_extra_targetLocatorID, _init_durationEjectPhase, _init_extra_durationEjectPhase, _init_doSpread, _init_extra_doSpread, _init_acceleration, _init_extra_acceleration, _init_id, _init_extra_id, _init_startEjectVelocity, _init_extra_startEjectVelocity, _init_warheadLength, _init_extra_warheadLength, _init_warheadRadius, _init_extra_warheadRadius, _initProto],
      c: [_EveMissileWarhead, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveMissileWarhead",
      family: "eve/spaceObject"
    })], [[[io, io.persist, type, type.float32], 16, "pathOffsetNoiseScale"], [[io, io.persist, type, type.float32], 16, "pathOffsetNoiseSpeed"], [[io, io.readwrite, type, type.boolean], 16, "startDataValid"], [[io, io.readwrite, type, type.vec3], 16, "pathOffset"], [[io, io.persist, type, type.float32], 16, "maxExplosionDistance"], [[io, io.persist, type, type.float32], 16, "impactDuration"], [[io, io.read, type, type.vec3], 16, "explosionPosition"], [[io, io.persist, type, type.float32], 16, "impactSize"], [[io, io.persist, void 0, type.model("EveSpriteSet")], 16, "spriteSet"], [[io, io.read, type, type.int32], 16, "targetLocatorID"], [[io, io.persist, type, type.float32], 16, "durationEjectPhase"], [[io, io.readwrite, type, type.boolean], 16, "doSpread"], [[io, io.persist, type, type.float32], 16, "acceleration"], [[io, io.readwrite, type, type.int32], 16, "id"], [[io, io.persist, type, type.float32], 16, "startEjectVelocity"], [[io, io.persist, type, type.float32], 16, "warheadLength"], [[io, io.persist, type, type.float32], 16, "warheadRadius"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PrepareLaunch"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Launch"]], 0, void 0, _EveTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_warheadRadius(this);
  }
  /** m_pathOffsetNoiseScale (float) [READWRITE, PERSIST] */
  pathOffsetNoiseScale = (_initProto(this), _init_pathOffsetNoiseScale(this, 0));

  /** m_pathOffsetNoiseSpeed (float) [READWRITE, PERSIST] */
  pathOffsetNoiseSpeed = (_init_extra_pathOffsetNoiseScale(this), _init_pathOffsetNoiseSpeed(this, 1));

  /** m_startDataValid (bool) [READWRITE] */
  startDataValid = (_init_extra_pathOffsetNoiseSpeed(this), _init_startDataValid(this, false));

  /** m_pathOffset (Vector3) [READWRITE] */
  pathOffset = (_init_extra_startDataValid(this), _init_pathOffset(this, vec3.create()));

  /** m_maxExplosionDistance (float) [READWRITE, PERSIST] */
  maxExplosionDistance = (_init_extra_pathOffset(this), _init_maxExplosionDistance(this, 40));

  /** m_impactDuration (float) [READWRITE, PERSIST] */
  impactDuration = (_init_extra_maxExplosionDistance(this), _init_impactDuration(this, 0.6));

  /** m_explosionPosition (Vector3) [READ] */
  explosionPosition = (_init_extra_impactDuration(this), _init_explosionPosition(this, vec3.create()));

  /** m_impactSize (float) [READWRITE, PERSIST] */
  impactSize = (_init_extra_explosionPosition(this), _init_impactSize(this, 0));

  /** m_spriteSet (EveSpriteSetPtr) [READWRITE, PERSIST] */
  spriteSet = (_init_extra_impactSize(this), _init_spriteSet(this, null));

  /** m_targetLocator (int) [READ] */
  targetLocatorID = (_init_extra_spriteSet(this), _init_targetLocatorID(this, -1));

  /** m_durationEjectPhase (float) [READWRITE, PERSIST] */
  durationEjectPhase = (_init_extra_targetLocatorID(this), _init_durationEjectPhase(this, 0));

  /** m_doSpread (bool) [READWRITE] */
  doSpread = (_init_extra_durationEjectPhase(this), _init_doSpread(this, true));

  /** m_acceleration (float) [READWRITE, PERSIST] */
  acceleration = (_init_extra_doSpread(this), _init_acceleration(this, 1));

  /** m_id (int) [READWRITE] */
  id = (_init_extra_acceleration(this), _init_id(this, -1));

  /** m_startEjectVelocity (float) [READWRITE, PERSIST] */
  startEjectVelocity = (_init_extra_id(this), _init_startEjectVelocity(this, 0));

  /** m_warheadLength (float) [READWRITE, PERSIST] */
  warheadLength = (_init_extra_startEjectVelocity(this), _init_warheadLength(this, 1));

  /** m_warheadRadius (float) [READWRITE, PERSIST] */
  warheadRadius = (_init_extra_warheadLength(this), _init_warheadRadius(this, 1));

  /** Carbon method PrepareLaunch (MAP_METHOD_AND_WRAP). */
  PrepareLaunch(...args) {
    throw new Error("EveMissileWarhead.PrepareLaunch is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Launch (MAP_METHOD_AND_WRAP). */
  Launch(...args) {
    throw new Error("EveMissileWarhead.Launch is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveMissileWarhead as EveMissileWarhead };
//# sourceMappingURL=EveMissileWarhead.js.map
