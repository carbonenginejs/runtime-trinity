import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_scene, _init_extra_scene, _init_background, _init_extra_background;

/** Tr2RenderNodeSprite2dScene (trinityCore) - generated from schema shapeHash c7cbee77.... */
let _Tr2RenderNodeSprite;
class Tr2RenderNodeSprite2dScene extends CjsModel {
  static {
    ({
      e: [_init_scene, _init_extra_scene, _init_background, _init_extra_background],
      c: [_Tr2RenderNodeSprite, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2RenderNodeSprite2dScene",
      family: "trinityCore"
    })], [[[io, io.persist, void 0, type.objectRef("Tr2Sprite2dScene")], 16, "scene"], [[io, io.persist, void 0, type.objectRef("ITr2RenderNode")], 16, "background"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_background(this);
  }
  /** m_scene (Tr2Sprite2dScenePtr) [READWRITE, PERSIST] */
  scene = _init_scene(this, null);

  /** m_background (ITr2RenderNodePtr) [READWRITE, PERSIST] */
  background = (_init_extra_scene(this), _init_background(this, null));
  static {
    _initClass();
  }
}

export { _Tr2RenderNodeSprite as Tr2RenderNodeSprite2dScene };
//# sourceMappingURL=Tr2RenderNodeSprite2dScene.js.map
