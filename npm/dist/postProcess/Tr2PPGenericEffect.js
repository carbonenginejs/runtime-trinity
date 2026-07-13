import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { Tr2PPEffect as _Tr2PPEffect } from '../generated/postProcess/Tr2PPEffect.js';

let _initClass, _init_quality, _init_extra_quality, _init_effect, _init_extra_effect;
let _Tr2PPGenericEffect;
class Tr2PPGenericEffect extends _Tr2PPEffect {
  static {
    ({
      e: [_init_quality, _init_extra_quality, _init_effect, _init_extra_effect],
      c: [_Tr2PPGenericEffect, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2PPGenericEffect",
      family: "postProcess"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("Quality")], 16, "quality"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"]], 0, void 0, _Tr2PPEffect));
  }
  constructor(...args) {
    super(...args);
    _init_extra_effect(this);
  }
  quality = _init_quality(this, 1);
  effect = (_init_extra_quality(this), _init_effect(this, null));
  GetEffect() {
    return this.effect;
  }
  static {
    _initClass();
  }
}

export { _Tr2PPGenericEffect as Tr2PPGenericEffect };
//# sourceMappingURL=Tr2PPGenericEffect.js.map
