import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_name, _init_extra_name, _init_sampler, _init_extra_sampler;

/** Tr2SamplerSetup (shader) - generated from schema shapeHash 0d58dc07.... */
let _Tr2SamplerSetup;
class Tr2SamplerSetup extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_sampler, _init_extra_sampler],
      c: [_Tr2SamplerSetup, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2SamplerSetup",
      family: "shader"
    })], [[type.objectRef("char"), 0, "name"], [type.rawStruct("Tr2SamplerStateAL"), 0, "sampler"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_sampler(this);
  }
  /** name (const char*) */
  name = _init_name(this, null);

  /** sampler (Tr2SamplerStateAL) */
  sampler = (_init_extra_name(this), _init_sampler(this, null));
  static {
    _initClass();
  }
}

export { _Tr2SamplerSetup as Tr2SamplerSetup };
//# sourceMappingURL=Tr2SamplerSetup.js.map
