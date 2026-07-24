import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/runtime-utils/mat4';
import { vec4 } from '@carbonenginejs/runtime-utils/vec4';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { type } from '@carbonenginejs/runtime-utils/schema';

let _initClass, _init_world, _init_extra_world, _init_missileSize, _init_extra_missileSize;
let _EveMissileWarheadPer;
class EveMissileWarheadPerObjectData extends CjsModel {
  static {
    ({
      e: [_init_world, _init_extra_world, _init_missileSize, _init_extra_missileSize],
      c: [_EveMissileWarheadPer, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveMissileWarheadPerObjectData",
      family: "eve/perObjectData"
    })], [[[type, type.mat4], 16, "world"], [[type, type.vec4], 16, "missileSize"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_missileSize(this);
  }
  world = _init_world(this, mat4.create());
  missileSize = (_init_extra_world(this), _init_missileSize(this, vec4.create()));
  static {
    _initClass();
  }
}

export { _EveMissileWarheadPer as EveMissileWarheadPerObjectData };
//# sourceMappingURL=EveMissileWarheadPerObjectData.js.map
