import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_value, _init_extra_value;

/** Tr2ShaderOption (shader) - generated from schema shapeHash a79378fe.... */
let _Tr2ShaderOption;
class Tr2ShaderOption extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_value, _init_extra_value],
      c: [_Tr2ShaderOption, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ShaderOption",
      family: "shader"
    })], [[[type, type.string], 16, "name"], [[type, type.string], 16, "value"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_value(this);
  }
  /** name (BlueSharedString) */
  name = _init_name(this, "");

  /** value (BlueSharedString) */
  value = (_init_extra_name(this), _init_value(this, ""));
  static {
    _initClass();
  }
}

export { _Tr2ShaderOption as Tr2ShaderOption };
//# sourceMappingURL=Tr2ShaderOption.js.map
