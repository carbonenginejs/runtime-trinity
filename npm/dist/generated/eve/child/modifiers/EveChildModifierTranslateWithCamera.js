import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_attachedToCamera, _init_extra_attachedToCamera;

/** EveChildModifierTranslateWithCamera (eve/child/modifiers) - generated from schema shapeHash 6c9f1348.... */
let _EveChildModifierTran;
class EveChildModifierTranslateWithCamera extends CjsModel {
  static {
    ({
      e: [_init_attachedToCamera, _init_extra_attachedToCamera],
      c: [_EveChildModifierTran, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildModifierTranslateWithCamera",
      family: "eve/child/modifiers"
    })], [[[io, io.persist, type, type.boolean], 16, "attachedToCamera"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_attachedToCamera(this);
  }
  /** m_attachedToCamera (bool) [READWRITE, PERSIST] */
  attachedToCamera = _init_attachedToCamera(this, false);
  static {
    _initClass();
  }
}

export { _EveChildModifierTran as EveChildModifierTranslateWithCamera };
//# sourceMappingURL=EveChildModifierTranslateWithCamera.js.map
