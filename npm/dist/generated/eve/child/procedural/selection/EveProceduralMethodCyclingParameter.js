import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_child, _init_extra_child, _init_name, _init_extra_name, _init_playDuration, _init_extra_playDuration, _init_reloadRequired, _init_extra_reloadRequired, _init_restartRequired, _init_extra_restartRequired;

/** EveProceduralMethodCyclingParameter (eve/child/procedural/selection) - generated from schema shapeHash 90bcbbe1.... */
let _EveProceduralMethodC;
class EveProceduralMethodCyclingParameter extends CjsModel {
  static {
    ({
      e: [_init_child, _init_extra_child, _init_name, _init_extra_name, _init_playDuration, _init_extra_playDuration, _init_reloadRequired, _init_extra_reloadRequired, _init_restartRequired, _init_extra_restartRequired],
      c: [_EveProceduralMethodC, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodCyclingParameter",
      family: "eve/child/procedural/selection"
    })], [[[io, io.notify, io, io.persist, void 0, type.objectRef("EveChild")], 16, "child"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.float32], 16, "playDuration"], [[io, io.persist, type, type.boolean], 16, "reloadRequired"], [[io, io.persist, type, type.boolean], 16, "restartRequired"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_restartRequired(this);
  }
  /** m_child (EveChildRefPtr) [READWRITE, PERSIST, NOTIFY] */
  child = _init_child(this, null);

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_child(this), _init_name(this, ""));

  /** m_playDuration (float) [READWRITE, PERSIST] */
  playDuration = (_init_extra_name(this), _init_playDuration(this, 1));

  /** m_reloadRequired (bool) [READWRITE, PERSIST] */
  reloadRequired = (_init_extra_playDuration(this), _init_reloadRequired(this, false));

  /** m_restartRequired (bool) [READWRITE, PERSIST] */
  restartRequired = (_init_extra_reloadRequired(this), _init_restartRequired(this, true));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodC as EveProceduralMethodCyclingParameter };
//# sourceMappingURL=EveProceduralMethodCyclingParameter.js.map
