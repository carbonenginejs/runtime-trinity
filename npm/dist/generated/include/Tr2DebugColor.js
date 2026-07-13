import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_color, _init_extra_color, _init_zFailColor, _init_extra_zFailColor, _init_colorSelected, _init_extra_colorSelected, _init_zFailColorSelected, _init_extra_zFailColorSelected;

/** Tr2DebugColor (include) - generated from schema shapeHash 9ab855e5.... */
let _Tr2DebugColor;
class Tr2DebugColor extends CjsModel {
  static {
    ({
      e: [_init_color, _init_extra_color, _init_zFailColor, _init_extra_zFailColor, _init_colorSelected, _init_extra_colorSelected, _init_zFailColorSelected, _init_extra_zFailColorSelected],
      c: [_Tr2DebugColor, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DebugColor",
      family: "include"
    })], [[[type, type.uint32], 16, "color"], [[type, type.uint32], 16, "zFailColor"], [[type, type.uint32], 16, "colorSelected"], [[type, type.uint32], 16, "zFailColorSelected"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_zFailColorSelected(this);
  }
  /** m_color (uint32_t) */
  color = _init_color(this, 0);

  /** m_zFailColor (uint32_t) */
  zFailColor = (_init_extra_color(this), _init_zFailColor(this, 0));

  /** m_colorSelected (uint32_t) */
  colorSelected = (_init_extra_zFailColor(this), _init_colorSelected(this, 0));

  /** m_zFailColorSelected (uint32_t) */
  zFailColorSelected = (_init_extra_colorSelected(this), _init_zFailColorSelected(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2DebugColor as Tr2DebugColor };
//# sourceMappingURL=Tr2DebugColor.js.map
