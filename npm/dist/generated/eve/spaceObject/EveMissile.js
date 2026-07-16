import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveSpaceObject2 as _EveSpaceObject } from '../../../eve/spaceObject/EveSpaceObject2.js';

let _initProto, _initClass, _init_warheads, _init_extra_warheads, _init_updateWarheads, _init_extra_updateWarheads, _init_target, _init_extra_target, _init_targetRadius, _init_extra_targetRadius, _init_explosionCallback, _init_extra_explosionCallback;

/** EveMissile (eve/spaceObject) - generated from schema shapeHash 4ff000a2.... */
let _EveMissile;
class EveMissile extends _EveSpaceObject {
  static {
    ({
      e: [_init_warheads, _init_extra_warheads, _init_updateWarheads, _init_extra_updateWarheads, _init_target, _init_extra_target, _init_targetRadius, _init_extra_targetRadius, _init_explosionCallback, _init_extra_explosionCallback, _initProto],
      c: [_EveMissile, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveMissile",
      family: "eve/spaceObject"
    })], [[[io, io.persist, void 0, type.list("EveMissileWarhead")], 16, "warheads"], [[io, io.readwrite, type, type.boolean], 16, "updateWarheads"], [[io, io.readwrite, void 0, type.objectRef("ITriTargetable")], 16, "target"], [[io, io.readwrite, type, type.float32], 16, "targetRadius"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "explosionCallback"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RebuildMissileBoundingSphere"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Start"]], 0, void 0, _EveSpaceObject));
  }
  constructor(...args) {
    super(...args);
    _init_extra_explosionCallback(this);
  }
  /** m_warheads (PEveMissileWarheadVector) [READ, PERSIST] */
  warheads = (_initProto(this), _init_warheads(this, []));

  /** m_updateWarheads (bool) [READWRITE] */
  updateWarheads = (_init_extra_warheads(this), _init_updateWarheads(this, true));

  /** m_target (ITriTargetablePtr) [READWRITE] */
  target = (_init_extra_updateWarheads(this), _init_target(this, null));

  /** m_targetRadius (float) [READWRITE] */
  targetRadius = (_init_extra_target(this), _init_targetRadius(this, 0));

  /** m_callback (BlueScriptCallback) [READWRITE] */
  explosionCallback = (_init_extra_targetRadius(this), _init_explosionCallback(this, null));

  /** Carbon method RebuildMissileBoundingSphere (MAP_METHOD_AND_WRAP). */
  RebuildMissileBoundingSphere(...args) {
    throw new Error("EveMissile.RebuildMissileBoundingSphere is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Start (MAP_METHOD_AND_WRAP). */
  Start(...args) {
    throw new Error("EveMissile.Start is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveMissile as EveMissile };
//# sourceMappingURL=EveMissile.js.map
