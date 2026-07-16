import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_controllers, _init_extra_controllers, _init_curveSet, _init_extra_curveSet, _init_additiveEffects, _init_extra_additiveEffects, _init_decalEffects, _init_extra_decalEffects, _init_distortionEffects, _init_extra_distortionEffects, _init_opaqueEffects, _init_extra_opaqueEffects, _init_transparentEffects, _init_extra_transparentEffects, _init_update, _init_extra_update, _init_display, _init_extra_display;

/** EveMeshOverlayEffect (eve/overlays) - generated from schema shapeHash cec5dde9.... */
let _EveMeshOverlayEffect;
class EveMeshOverlayEffect extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_controllers, _init_extra_controllers, _init_curveSet, _init_extra_curveSet, _init_additiveEffects, _init_extra_additiveEffects, _init_decalEffects, _init_extra_decalEffects, _init_distortionEffects, _init_extra_distortionEffects, _init_opaqueEffects, _init_extra_opaqueEffects, _init_transparentEffects, _init_extra_transparentEffects, _init_update, _init_extra_update, _init_display, _init_extra_display],
      c: [_EveMeshOverlayEffect, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveMeshOverlayEffect",
      family: "eve/overlays"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.model("TriCurveSet")], 16, "curveSet"], [[io, io.persist, void 0, type.list("Tr2Effect")], 16, "additiveEffects"], [[io, io.persist, void 0, type.list("Tr2Effect")], 16, "decalEffects"], [[io, io.persist, void 0, type.list("Tr2Effect")], 16, "distortionEffects"], [[io, io.persist, void 0, type.list("Tr2Effect")], 16, "opaqueEffects"], [[io, io.persist, void 0, type.list("Tr2Effect")], 16, "transparentEffects"], [[io, io.readwrite, type, type.boolean], 16, "update"], [[io, io.readwrite, type, type.boolean], 16, "display"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_display(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
  controllers = (_init_extra_name(this), _init_controllers(this, []));

  /** m_curveSet (TriCurveSetPtr) [READWRITE, PERSIST] */
  curveSet = (_init_extra_controllers(this), _init_curveSet(this, null));

  /** m_additiveEffects (PTr2EffectVector) [READ, PERSIST] */
  additiveEffects = (_init_extra_curveSet(this), _init_additiveEffects(this, []));

  /** m_decalEffects (PTr2EffectVector) [READ, PERSIST] */
  decalEffects = (_init_extra_additiveEffects(this), _init_decalEffects(this, []));

  /** m_distortionEffects (PTr2EffectVector) [READ, PERSIST] */
  distortionEffects = (_init_extra_decalEffects(this), _init_distortionEffects(this, []));

  /** m_opaqueEffects (PTr2EffectVector) [READ, PERSIST] */
  opaqueEffects = (_init_extra_distortionEffects(this), _init_opaqueEffects(this, []));

  /** m_transparentEffects (PTr2EffectVector) [READ, PERSIST] */
  transparentEffects = (_init_extra_opaqueEffects(this), _init_transparentEffects(this, []));

  /** m_update (bool) [READWRITE] */
  update = (_init_extra_transparentEffects(this), _init_update(this, true));

  /** m_display (bool) [READWRITE] */
  display = (_init_extra_update(this), _init_display(this, true));
  static {
    _initClass();
  }
}

export { _EveMeshOverlayEffect as EveMeshOverlayEffect };
//# sourceMappingURL=EveMeshOverlayEffect.js.map
