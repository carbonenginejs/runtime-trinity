import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveSpaceObject2 as _EveSpaceObject } from '../../../eve/spaceObject/EveSpaceObject2.js';

let _initProto, _initClass, _init_turretSets, _init_extra_turretSets, _init_ActiveTurretCount, _init_extra_ActiveTurretCount;

/** EveMobile (eve/spaceObject) - generated from schema shapeHash d7418a57.... */
let _EveMobile;
class EveMobile extends _EveSpaceObject {
  static {
    ({
      e: [_init_turretSets, _init_extra_turretSets, _init_ActiveTurretCount, _init_extra_ActiveTurretCount, _initProto],
      c: [_EveMobile, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveMobile",
      family: "eve/spaceObject"
    })], [[[io, io.notify, io, io.persist, void 0, type.list("EveTurretSet")], 16, "turretSets"], [[io, io.read, type, type.uint32], 16, "ActiveTurretCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTurretLocatorIndex"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RebuildTurretPositions"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTurretLocatorCount"]], 0, void 0, _EveSpaceObject));
  }
  constructor(...args) {
    super(...args);
    _init_extra_ActiveTurretCount(this);
  }
  /** m_turretSets (PEveTurretSetVector) [READ, PERSIST, NOTIFY] */
  turretSets = (_initProto(this), _init_turretSets(this, []));

  /** m_activeTurretCount (unsigned int) [READ] */
  ActiveTurretCount = (_init_extra_turretSets(this), _init_ActiveTurretCount(this, 0));

  /** Carbon method GetTurretLocatorIndex (MAP_METHOD_AND_WRAP). */
  GetTurretLocatorIndex(...args) {
    throw new Error("EveMobile.GetTurretLocatorIndex is not implemented in CarbonEngineJS.");
  }

  /** Carbon method RebuildTurretPositions (MAP_METHOD_AND_WRAP). */
  RebuildTurretPositions(...args) {
    throw new Error("EveMobile.RebuildTurretPositions is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetTurretLocatorCount (MAP_METHOD_AND_WRAP). */
  GetTurretLocatorCount(...args) {
    throw new Error("EveMobile.GetTurretLocatorCount is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveMobile as EveMobile };
//# sourceMappingURL=EveMobile.js.map
