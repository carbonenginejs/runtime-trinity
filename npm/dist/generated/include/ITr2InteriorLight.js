import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_lightSource, _init_extra_lightSource, _init_importance, _init_extra_importance, _init_shadowMapIndex, _init_extra_shadowMapIndex;

/** ITr2InteriorLight (include) - generated from schema shapeHash b3e24b73.... */
let _ITr2InteriorLight;
class ITr2InteriorLight extends CjsModel {
  static {
    ({
      e: [_init_lightSource, _init_extra_lightSource, _init_importance, _init_extra_importance, _init_shadowMapIndex, _init_extra_shadowMapIndex],
      c: [_ITr2InteriorLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITr2InteriorLight",
      family: "include"
    })], [[type.objectRef("ITr2InteriorLight"), 0, "lightSource"], [[type, type.float32], 16, "importance"], [[type, type.uint32], 16, "shadowMapIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shadowMapIndex(this);
  }
  /** lightSource (ITr2InteriorLight*) */
  lightSource = _init_lightSource(this, null);

  /** importance (float) */
  importance = (_init_extra_lightSource(this), _init_importance(this, 0));

  /** shadowMapIndex (unsigned int) */
  shadowMapIndex = (_init_extra_importance(this), _init_shadowMapIndex(this, 0));
  static {
    _initClass();
  }
}

export { _ITr2InteriorLight as ITr2InteriorLight };
//# sourceMappingURL=ITr2InteriorLight.js.map
