import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_minScreenSize, _init_extra_minScreenSize, _init_brightness, _init_extra_brightness, _init_color, _init_extra_color, _init_viewRotation, _init_extra_viewRotation, _init_currentScreenSize, _init_extra_currentScreenSize, _init_display, _init_extra_display, _init_editMode, _init_extra_editMode;

/** EveChildQuad (eve/child) - generated from schema shapeHash efab3f9c.... */
let _EveChildQuad;
class EveChildQuad extends _EveChildTransform {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_minScreenSize, _init_extra_minScreenSize, _init_brightness, _init_extra_brightness, _init_color, _init_extra_color, _init_viewRotation, _init_extra_viewRotation, _init_currentScreenSize, _init_extra_currentScreenSize, _init_display, _init_extra_display, _init_editMode, _init_extra_editMode],
      c: [_EveChildQuad, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildQuad",
      family: "eve/child"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.float32], 16, "minScreenSize"], [[io, io.persist, type, type.float32], 16, "brightness"], [[io, io.persist, type, type.color], 16, "color"], [[io, io.persist, type, type.float32], 16, "viewRotation"], [[io, io.read, type, type.float32], 16, "currentScreenSize"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.readwrite, type, type.boolean], 16, "editMode"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_editMode(this);
  }
  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  effect = (_init_extra_name(this), _init_effect(this, null));

  /** m_minScreenSize (float) [READWRITE, PERSIST] */
  minScreenSize = (_init_extra_effect(this), _init_minScreenSize(this, 0));

  /** m_brightness (float) [READWRITE, PERSIST] */
  brightness = (_init_extra_minScreenSize(this), _init_brightness(this, 1));

  /** m_color (Color) [READWRITE, PERSIST] */
  color = (_init_extra_brightness(this), _init_color(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_viewRotation (float) [READWRITE, PERSIST] */
  viewRotation = (_init_extra_color(this), _init_viewRotation(this, 0));

  /** m_currentScreenSize (mutable float) [READ] */
  currentScreenSize = (_init_extra_viewRotation(this), _init_currentScreenSize(this, -1));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_currentScreenSize(this), _init_display(this, true));

  /** m_editMode (bool) [READWRITE] */
  editMode = (_init_extra_display(this), _init_editMode(this, false));
  static {
    _initClass();
  }
}

export { _EveChildQuad as EveChildQuad };
//# sourceMappingURL=EveChildQuad.js.map
