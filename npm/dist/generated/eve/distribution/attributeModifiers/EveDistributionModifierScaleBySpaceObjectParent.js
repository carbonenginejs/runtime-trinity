import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_scaleFactor, _init_extra_scaleFactor, _init_authoredForBoundingRadius, _init_extra_authoredForBoundingRadius, _init_scaleCurve, _init_extra_scaleCurve;

/** EveDistributionModifierScaleBySpaceObjectParent (eve/distribution/attributeModifiers) - generated from schema shapeHash c3114e37.... */
let _EveDistributionModif;
class EveDistributionModifierScaleBySpaceObjectParent extends CjsModel {
  static {
    ({
      e: [_init_scaleFactor, _init_extra_scaleFactor, _init_authoredForBoundingRadius, _init_extra_authoredForBoundingRadius, _init_scaleCurve, _init_extra_scaleCurve],
      c: [_EveDistributionModif, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionModifierScaleBySpaceObjectParent",
      family: "eve/distribution/attributeModifiers"
    })], [[[io, io.persist, type, type.float32], 16, "scaleFactor"], [[io, io.persist, type, type.float32], 16, "authoredForBoundingRadius"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "scaleCurve"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_scaleCurve(this);
  }
  /** m_scaleFactor (float) [READWRITE, PERSIST] */
  scaleFactor = _init_scaleFactor(this, 1);

  /** m_authoredForBoundingRadius (float) [READWRITE, PERSIST] */
  authoredForBoundingRadius = (_init_extra_scaleFactor(this), _init_authoredForBoundingRadius(this, 1000));

  /** m_scaleCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  scaleCurve = (_init_extra_authoredForBoundingRadius(this), _init_scaleCurve(this, null));
  static {
    _initClass();
  }
}

export { _EveDistributionModif as EveDistributionModifierScaleBySpaceObjectParent };
//# sourceMappingURL=EveDistributionModifierScaleBySpaceObjectParent.js.map
