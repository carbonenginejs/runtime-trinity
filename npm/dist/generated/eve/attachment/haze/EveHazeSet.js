import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';

let _initProto, _initClass, _init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_hazes, _init_extra_hazes;

/** EveHazeSet (eve/attachment/haze) - generated from schema shapeHash d0cd110a.... */
let _EveHazeSet;
class EveHazeSet extends _EveEntity {
  static {
    ({
      e: [_init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_hazes, _init_extra_hazes, _initProto],
      c: [_EveHazeSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveHazeSet",
      family: "eve/attachment/haze"
    })], [[[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("EveHazeSetItem")], 16, "hazes"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Rebuild"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_hazes(this);
  }
  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  effect = (_initProto(this), _init_effect(this, null));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_effect(this), _init_display(this, true));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_hazes (PEveHazeSetItemVector) [READ, PERSIST] */
  hazes = (_init_extra_name(this), _init_hazes(this, []));

  /** Carbon method Rebuild (MAP_METHOD_AND_WRAP). */
  Rebuild(...args) {
    throw _EveEntity.notImplemented("EveHazeSet", "Rebuild", args);
  }
  static {
    _initClass();
  }
}

export { _EveHazeSet as EveHazeSet };
//# sourceMappingURL=EveHazeSet.js.map
