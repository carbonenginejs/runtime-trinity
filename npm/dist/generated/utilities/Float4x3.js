import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_elements, _init_extra_elements;

/** Float4x3 (utilities) - generated from schema shapeHash 814d1ff5.... */
let _Float4x;
class Float4x3 extends CjsModel {
  static {
    ({
      e: [_init_elements, _init_extra_elements],
      c: [_Float4x, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Float4x3",
      family: "utilities"
    })], [[[type, type.float32], 16, "elements"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_elements(this);
  }
  /** elements (float) */
  elements = _init_elements(this, 0);
  static {
    _initClass();
  }
}

export { _Float4x as Float4x3 };
//# sourceMappingURL=Float4x3.js.map
