import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec2 } from '@carbonenginejs/core-math/vec2';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_color, _init_extra_color, _init_icon, _init_extra_icon, _init_display, _init_extra_display, _init_translation, _init_extra_translation;

/** EveSprite2dBracket (trinityCore) - generated from schema shapeHash 33d90425.... */
let _EveSprite2dBracket;
class EveSprite2dBracket extends CjsModel {
  static {
    ({
      e: [_init_color, _init_extra_color, _init_icon, _init_extra_icon, _init_display, _init_extra_display, _init_translation, _init_extra_translation],
      c: [_EveSprite2dBracket, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSprite2dBracket",
      family: "trinityCore"
    })], [[[io, io.readwrite, type, type.color], 16, "color"], [[io, io.readwrite, void 0, type.objectRef("Tr2AtlasTexture")], 16, "icon"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.readwrite, type, type.vec2], 16, "translation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_translation(this);
  }
  /** m_color (Color) [READWRITE] */
  color = _init_color(this, vec4.fromValues(1, 1, 1, 1));

  /** m_icon (Tr2AtlasTexturePtr) [READWRITE] */
  icon = (_init_extra_color(this), _init_icon(this, null));

  /** m_display (bool) [READWRITE] */
  display = (_init_extra_icon(this), _init_display(this, true));

  /** m_translation (Vector2) [READWRITE] */
  translation = (_init_extra_display(this), _init_translation(this, vec2.create()));
  static {
    _initClass();
  }
}

export { _EveSprite2dBracket as EveSprite2dBracket };
//# sourceMappingURL=EveSprite2dBracket.js.map
