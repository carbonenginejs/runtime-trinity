import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_time, _init_extra_time, _init_system, _init_extra_system, _init_parentTransform, _init_extra_parentTransform, _init_originShift, _init_extra_originShift, _init_emitCountFactor, _init_extra_emitCountFactor, _init_rateModifier, _init_extra_rateModifier;

/** ITr2GenericEmitter (particle) - generated from schema shapeHash 164a42e6.... */
let _ITr2GenericEmitter;
class ITr2GenericEmitter extends CjsModel {
  static {
    ({
      e: [_init_time, _init_extra_time, _init_system, _init_extra_system, _init_parentTransform, _init_extra_parentTransform, _init_originShift, _init_extra_originShift, _init_emitCountFactor, _init_extra_emitCountFactor, _init_rateModifier, _init_extra_rateModifier],
      c: [_ITr2GenericEmitter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ITr2GenericEmitter",
      family: "particle"
    })], [[[type, type.float64], 16, "time"], [type.objectRef("Tr2GpuParticleSystem"), 0, "system"], [[type, type.mat4], 16, "parentTransform"], [[type, type.vec3], 16, "originShift"], [[type, type.float32], 16, "emitCountFactor"], [[type, type.float32], 16, "rateModifier"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_rateModifier(this);
  }
  /** time (Be::Time) */
  time = _init_time(this, 0);

  /** system (Tr2GpuParticleSystem*) */
  system = (_init_extra_time(this), _init_system(this, null));

  /** parentTransform (Matrix) */
  parentTransform = (_init_extra_system(this), _init_parentTransform(this, mat4.create()));

  /** originShift (Vector3) */
  originShift = (_init_extra_parentTransform(this), _init_originShift(this, vec3.create()));

  /** emitCountFactor (float) */
  emitCountFactor = (_init_extra_originShift(this), _init_emitCountFactor(this, 1));

  /** rateModifier (float) */
  rateModifier = (_init_extra_emitCountFactor(this), _init_rateModifier(this, 0));
  static {
    _initClass();
  }
}

export { _ITr2GenericEmitter as ITr2GenericEmitter };
//# sourceMappingURL=ITr2GenericEmitter.js.map
