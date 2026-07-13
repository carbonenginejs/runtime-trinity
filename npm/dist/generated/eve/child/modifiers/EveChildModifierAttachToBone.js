import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_boneIndex, _init_extra_boneIndex;

/** EveChildModifierAttachToBone (eve/child/modifiers) - generated from schema shapeHash d34ec52c.... */
let _EveChildModifierAtta;
class EveChildModifierAttachToBone extends CjsModel {
  static {
    ({
      e: [_init_boneIndex, _init_extra_boneIndex],
      c: [_EveChildModifierAtta, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildModifierAttachToBone",
      family: "eve/child/modifiers"
    })], [[[io, io.persist, type, type.int32], 16, "boneIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boneIndex(this);
  }
  /** m_boneIndex (int32_t) [READWRITE, PERSIST] */
  boneIndex = _init_boneIndex(this, -1);
  static {
    _initClass();
  }
}

export { _EveChildModifierAtta as EveChildModifierAttachToBone };
//# sourceMappingURL=EveChildModifierAttachToBone.js.map
