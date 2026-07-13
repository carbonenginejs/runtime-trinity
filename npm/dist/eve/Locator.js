import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { type } from '@carbonenginejs/core-types/schema';

let _initClass, _init_position, _init_extra_position, _init_direction, _init_extra_direction, _init_scale, _init_extra_scale, _init_boneIndex, _init_extra_boneIndex;
let _Locator;
class Locator extends CjsModel {
  static {
    ({
      e: [_init_position, _init_extra_position, _init_direction, _init_extra_direction, _init_scale, _init_extra_scale, _init_boneIndex, _init_extra_boneIndex],
      c: [_Locator, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Locator",
      family: "eve/utils"
    })], [[[type, type.vec3], 16, "position"], [[type, type.quat], 16, "direction"], [[type, type.vec3], 16, "scale"], [[type, type.int32], 16, "boneIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boneIndex(this);
  }
  position = _init_position(this, vec3.create());
  direction = (_init_extra_position(this), _init_direction(this, quat.create()));
  scale = (_init_extra_direction(this), _init_scale(this, vec3.create()));
  boneIndex = (_init_extra_scale(this), _init_boneIndex(this, 0));
  static CopyValues(target, source) {
    vec3.copy(target.position, source.position);
    quat.copy(target.direction, source.direction);
    if (source.scale) {
      vec3.copy(target.scale, source.scale);
    } else {
      vec3.zero(target.scale);
    }
    target.boneIndex = source.boneIndex ?? 0;
    return target;
  }
  static Clone(source) {
    return this.CopyValues(new _Locator(), source);
  }
  static {
    _initClass();
  }
}

export { _Locator as Locator };
//# sourceMappingURL=Locator.js.map
