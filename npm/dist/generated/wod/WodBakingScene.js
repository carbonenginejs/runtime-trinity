import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_visualizeMethod, _init_extra_visualizeMethod, _init_Avatar, _init_extra_Avatar;

/** WodBakingScene (wod) - generated from schema shapeHash 3b77adad.... */
let _WodBakingScene;
class WodBakingScene extends CjsModel {
  static {
    ({
      e: [_init_visualizeMethod, _init_extra_visualizeMethod, _init_Avatar, _init_extra_Avatar],
      c: [_WodBakingScene, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "WodBakingScene",
      family: "wod"
    })], [[[io, io.notify, io, io.readwrite, type, type.int32, void 0, schema.enum("VisualizeMethod")], 16, "visualizeMethod"], [[io, io.readwrite, void 0, type.objectRef("Tr2SkinnedObject")], 16, "Avatar"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_Avatar(this);
  }
  /** m_visualizeMethod (VisualizeMethod - enum VisualizeMethod) [READWRITE, ENUM, NOTIFY] */
  visualizeMethod = _init_visualizeMethod(this, 0);

  /** m_skinnedObject (Tr2SkinnedObjectPtr) [READWRITE] */
  Avatar = (_init_extra_visualizeMethod(this), _init_Avatar(this, null));
  static {
    _initClass();
  }
}

export { _WodBakingScene as WodBakingScene };
//# sourceMappingURL=WodBakingScene.js.map
