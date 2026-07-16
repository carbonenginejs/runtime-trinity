import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_translationCurve, _init_extra_translationCurve, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_isAggressive, _init_extra_isAggressive, _init_showVelocity, _init_extra_showVelocity;

/** EveTacticalOverlayTrackObject (eve/ui) - generated from schema shapeHash 8fb0bf1b.... */
let _EveTacticalOverlayTr;
class EveTacticalOverlayTrackObject extends CjsModel {
  static {
    ({
      e: [_init_translationCurve, _init_extra_translationCurve, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_isAggressive, _init_extra_isAggressive, _init_showVelocity, _init_extra_showVelocity],
      c: [_EveTacticalOverlayTr, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveTacticalOverlayTrackObject",
      family: "eve/ui"
    })], [[[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "translationCurve"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.persist, type, type.boolean], 16, "isAggressive"], [[io, io.persist, type, type.boolean], 16, "showVelocity"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_showVelocity(this);
  }
  /** m_positionCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = _init_translationCurve(this, null);

  /** m_position (Vector3) [READWRITE, PERSIST] */
  position = (_init_extra_translationCurve(this), _init_position(this, vec3.create()));

  /** m_radius (float) [READWRITE, PERSIST] */
  radius = (_init_extra_position(this), _init_radius(this, 0));

  /** m_aggressive (bool) [READWRITE, PERSIST] */
  isAggressive = (_init_extra_radius(this), _init_isAggressive(this, false));

  /** m_showVelocity (bool) [READWRITE, PERSIST] */
  showVelocity = (_init_extra_isAggressive(this), _init_showVelocity(this, true));
  static {
    _initClass();
  }
}

export { _EveTacticalOverlayTr as EveTacticalOverlayTrackObject };
//# sourceMappingURL=EveTacticalOverlayTrackObject.js.map
