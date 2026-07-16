import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_dest, _init_extra_dest;

/** EveChildModifierStretch (eve/child/modifiers) - generated from schema shapeHash 355ae174.... */
let _EveChildModifierStre;
class EveChildModifierStretch extends CjsModel {
  static {
    ({
      e: [_init_dest, _init_extra_dest],
      c: [_EveChildModifierStre, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildModifierStretch",
      family: "eve/child/modifiers"
    })], [[[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "dest"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_dest(this);
  }
  /** m_dest (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  dest = _init_dest(this, null);
  static {
    _initClass();
  }
}

export { _EveChildModifierStre as EveChildModifierStretch };
//# sourceMappingURL=EveChildModifierStretch.js.map
