import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_UV_SET_MAX_COUNT, _init_extra_UV_SET_MAX_COUNT;

/** ITriEffectTextureParameter (include) - generated from schema shapeHash 8e6f7285.... */
let _ITriEffectTexturePar;
class ITriEffectTextureParameter extends CjsModel {
  static {
    ({
      e: [_init_UV_SET_MAX_COUNT, _init_extra_UV_SET_MAX_COUNT],
      c: [_ITriEffectTexturePar, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITriEffectTextureParameter",
      family: "include"
    })], [[[type, type.unknown], 16, "UV_SET_MAX_COUNT"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_UV_SET_MAX_COUNT(this);
  }
  /** UV_SET_MAX_COUNT (static const size_t) */
  UV_SET_MAX_COUNT = _init_UV_SET_MAX_COUNT(this, 8);
  static {
    _initClass();
  }
}

export { _ITriEffectTexturePar as ITriEffectTextureParameter };
//# sourceMappingURL=ITriEffectTextureParameter.js.map
