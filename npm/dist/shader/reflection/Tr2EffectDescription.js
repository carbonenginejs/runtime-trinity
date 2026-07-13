import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_techniques, _init_extra_techniques, _init_annotations, _init_extra_annotations;

/** Tr2EffectDescription (shader) - generated from schema shapeHash 67ae7d21.... */
let _Tr2EffectDescription;
class Tr2EffectDescription extends CjsModel {
  static {
    ({
      e: [_init_techniques, _init_extra_techniques, _init_annotations, _init_extra_annotations],
      c: [_Tr2EffectDescription, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2EffectDescription",
      family: "shader"
    })], [[type.list("Tr2EffectTechnique"), 0, "techniques"], [type.map("Tr2EffectParameterAnnotationMap"), 0, "annotations"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_annotations(this);
  }
  /** techniques (TrackableStdVector<Tr2EffectTechnique>) */
  techniques = _init_techniques(this, []);

  /** annotations (Tr2EffectAnnotationMap) */
  annotations = (_init_extra_techniques(this), _init_annotations(this, new Map()));
  static {
    _initClass();
  }
}

export { _Tr2EffectDescription as Tr2EffectDescription };
//# sourceMappingURL=Tr2EffectDescription.js.map
