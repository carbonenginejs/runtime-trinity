import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveMobile as _EveMobile } from './EveMobile.js';

let _initProto, _initClass, _init_boosters, _init_extra_boosters, _init_displayKillCounterValue, _init_extra_displayKillCounterValue, _init_speed, _init_extra_speed;

/** EveShip2 (eve/spaceObject) - generated from schema shapeHash 6adb2554.... */
let _EveShip;
class EveShip2 extends _EveMobile {
  static {
    ({
      e: [_init_boosters, _init_extra_boosters, _init_displayKillCounterValue, _init_extra_displayKillCounterValue, _init_speed, _init_extra_speed, _initProto],
      c: [_EveShip, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveShip2",
      family: "eve/spaceObject"
    })], [[[io, io.persistOnly, void 0, type.objectRef("EveBoosterSet2")], 16, "boosters"], [[io, io.readwrite, type, type.uint32], 16, "displayKillCounterValue"], [[io, io.read, void 0, type.objectRef("TriFloat")], 16, "speed"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RebuildBoosterSet"]], 0, void 0, _EveMobile));
  }
  constructor(...args) {
    super(...args);
    _init_extra_speed(this);
  }
  /** m_boosters (EveBoosterSet2Ptr) [PERSISTONLY] */
  boosters = (_initProto(this), _init_boosters(this, null));

  /** m_displayKillCounterValue (uint32_t) [READWRITE] */
  displayKillCounterValue = (_init_extra_boosters(this), _init_displayKillCounterValue(this, 0));

  /** m_speed (TriFloatPtr) [READ] */
  speed = (_init_extra_displayKillCounterValue(this), _init_speed(this, null));

  /** Carbon method RebuildBoosterSet (MAP_METHOD_AND_WRAP). */
  RebuildBoosterSet(...args) {
    throw _EveMobile.notImplemented("EveShip2", "RebuildBoosterSet", args);
  }
  static {
    _initClass();
  }
}

export { _EveShip as EveShip2 };
//# sourceMappingURL=EveShip2.js.map
