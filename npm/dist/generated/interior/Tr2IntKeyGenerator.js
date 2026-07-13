import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_ALLOW_GDPR, _init_extra_ALLOW_GDPR;

/** Tr2IntKeyGenerator (interior) - generated from schema shapeHash 22c2dcb4.... */
let _Tr2IntKeyGenerator;
class Tr2IntKeyGenerator extends CjsModel {
  static {
    ({
      e: [_init_ALLOW_GDPR, _init_extra_ALLOW_GDPR],
      c: [_Tr2IntKeyGenerator, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2IntKeyGenerator",
      family: "interior"
    })], [[[type, type.unknown], 16, "ALLOW_GDPR"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_ALLOW_GDPR(this);
  }
  /** ALLOW_GDPR (static constexpr bool) */
  ALLOW_GDPR = _init_ALLOW_GDPR(this, false);
  static {
    _initClass();
  }
}

export { _Tr2IntKeyGenerator as Tr2IntKeyGenerator };
//# sourceMappingURL=Tr2IntKeyGenerator.js.map
