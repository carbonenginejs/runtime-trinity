import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { Tr2SpriteObjectBase as _Tr2SpriteObjectBase } from './Tr2SpriteObjectBase.js';

let _initClass, _init_background, _init_extra_background, _init_children, _init_extra_children, _init_opacity, _init_extra_opacity;

/** Tr2Sprite2dContainerBase (sprite2d) - generated from schema shapeHash f6454fb5.... */
let _Tr2Sprite2dContainer;
class Tr2Sprite2dContainerBase extends _Tr2SpriteObjectBase {
  static {
    ({
      e: [_init_background, _init_extra_background, _init_children, _init_extra_children, _init_opacity, _init_extra_opacity],
      c: [_Tr2Sprite2dContainer, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Sprite2dContainerBase",
      family: "sprite2d"
    })], [[[io, io.read, void 0, type.list("ITr2SpriteObject")], 16, "background"], [[io, io.read, void 0, type.list("ITr2SpriteObject")], 16, "children"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "opacity"]], 0, void 0, _Tr2SpriteObjectBase));
  }
  constructor(...args) {
    super(...args);
    _init_extra_opacity(this);
  }
  /** m_background (PITr2SpriteObjectVector) [READ] */
  background = _init_background(this, []);

  /** m_children (PITr2SpriteObjectVector) [READ] */
  children = (_init_extra_background(this), _init_children(this, []));

  /** m_opacity (float) [READWRITE, NOTIFY] */
  opacity = (_init_extra_children(this), _init_opacity(this, 1));
  static {
    _initClass();
  }
}

export { _Tr2Sprite2dContainer as Tr2Sprite2dContainerBase };
//# sourceMappingURL=Tr2Sprite2dContainerBase.js.map
