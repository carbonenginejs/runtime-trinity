import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_fixed, _init_extra_fixed;

/** EveChildModifierBillboard3D (eve/child/modifiers) - generated from schema shapeHash 0c67fb28.... */
let _EveChildModifierBill;
class EveChildModifierBillboard3D extends CjsModel {
  static {
    ({
      e: [_init_fixed, _init_extra_fixed],
      c: [_EveChildModifierBill, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildModifierBillboard3D",
      family: "eve/child/modifiers"
    })], [[[io, io.persist, type, type.boolean], 16, "fixed"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_fixed(this);
  }
  /** m_fixed (bool) [READWRITE, PERSIST] */
  fixed = _init_fixed(this, false);
  static {
    _initClass();
  }
}

export { _EveChildModifierBill as EveChildModifierBillboard3D };
//# sourceMappingURL=EveChildModifierBillboard3D.js.map
