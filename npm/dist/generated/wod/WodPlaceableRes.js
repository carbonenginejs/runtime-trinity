import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_visualModel, _init_extra_visualModel, _init_farFadeDistance, _init_extra_farFadeDistance, _init_nearFadeDistance, _init_extra_nearFadeDistance, _init_curveSets, _init_extra_curveSets, _init_isShadowCaster, _init_extra_isShadowCaster;

/** WodPlaceableRes (wod) - generated from schema shapeHash fc56ca8e.... */
let _WodPlaceableRes;
class WodPlaceableRes extends CjsModel {
  static {
    ({
      e: [_init_visualModel, _init_extra_visualModel, _init_farFadeDistance, _init_extra_farFadeDistance, _init_nearFadeDistance, _init_extra_nearFadeDistance, _init_curveSets, _init_extra_curveSets, _init_isShadowCaster, _init_extra_isShadowCaster],
      c: [_WodPlaceableRes, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "WodPlaceableRes",
      family: "wod"
    })], [[[io, io.persist, void 0, type.objectRef("Tr2Model")], 16, "visualModel"], [[io, io.persist, type, type.float32], 16, "farFadeDistance"], [[io, io.persist, type, type.float32], 16, "nearFadeDistance"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, type, type.boolean], 16, "isShadowCaster"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isShadowCaster(this);
  }
  /** m_visualModel (Tr2ModelPtr) [READWRITE, PERSIST] */
  visualModel = _init_visualModel(this, null);

  /** m_farFadeDistance (float) [READWRITE, PERSIST] */
  farFadeDistance = (_init_extra_visualModel(this), _init_farFadeDistance(this, 10000));

  /** m_nearFadeDistance (float) [READWRITE, PERSIST] */
  nearFadeDistance = (_init_extra_farFadeDistance(this), _init_nearFadeDistance(this, 2500));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_nearFadeDistance(this), _init_curveSets(this, []));

  /** m_isShadowCaster (bool) [READWRITE, PERSIST] */
  isShadowCaster = (_init_extra_curveSets(this), _init_isShadowCaster(this, true));
  static {
    _initClass();
  }
}

export { _WodPlaceableRes as WodPlaceableRes };
//# sourceMappingURL=WodPlaceableRes.js.map
