import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_brightness, _init_extra_brightness, _init_display, _init_extra_display, _init_staticQuadScale, _init_extra_staticQuadScale, _init_staticOffsetTranslation, _init_extra_staticOffsetTranslation, _init_editMode, _init_extra_editMode, _init_softQuad, _init_extra_softQuad;

/** EveSmartLightQuad (eve/smartLights) - generated from schema shapeHash 6f1930f0.... */
let _EveSmartLightQuad;
class EveSmartLightQuad extends _EveChildTransform {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_brightness, _init_extra_brightness, _init_display, _init_extra_display, _init_staticQuadScale, _init_extra_staticQuadScale, _init_staticOffsetTranslation, _init_extra_staticOffsetTranslation, _init_editMode, _init_extra_editMode, _init_softQuad, _init_extra_softQuad],
      c: [_EveSmartLightQuad, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightQuad",
      family: "eve/smartLights"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, void 0, type.struct("Float_16")], 16, "brightness"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.vec3], 16, "staticQuadScale"], [[io, io.persist, type, type.vec3], 16, "staticOffsetTranslation"], [[io, io.readwrite, type, type.boolean], 16, "editMode"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "softQuad"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_softQuad(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  effect = (_init_extra_name(this), _init_effect(this, null));

  /** m_brightness (Float_16) [READWRITE, PERSIST] */
  brightness = (_init_extra_effect(this), _init_brightness(this, 1));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_brightness(this), _init_display(this, true));

  /** m_staticQuadScale (Vector3) [READWRITE, PERSIST] */
  staticQuadScale = (_init_extra_display(this), _init_staticQuadScale(this, vec3.fromValues(1, 1, 1)));

  /** m_staticOffsetTranslation (Vector3) [READWRITE, PERSIST] */
  staticOffsetTranslation = (_init_extra_staticQuadScale(this), _init_staticOffsetTranslation(this, vec3.create()));

  /** m_editMode (bool) [READWRITE] */
  editMode = (_init_extra_staticOffsetTranslation(this), _init_editMode(this, false));

  /** m_softQuad (bool) [READWRITE, PERSIST, NOTIFY] */
  softQuad = (_init_extra_editMode(this), _init_softQuad(this, false));
  static {
    _initClass();
  }
}

export { _EveSmartLightQuad as EveSmartLightQuad };
//# sourceMappingURL=EveSmartLightQuad.js.map
