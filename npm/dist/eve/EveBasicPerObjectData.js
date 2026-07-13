import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { type } from '@carbonenginejs/core-types/schema';

let _initClass, _init_world, _init_extra_world, _init_worldLast, _init_extra_worldLast, _init_worldInverse, _init_extra_worldInverse;
let _EveBasicPerObjectDat;
class EveBasicPerObjectData extends CjsModel {
  static {
    ({
      e: [_init_world, _init_extra_world, _init_worldLast, _init_extra_worldLast, _init_worldInverse, _init_extra_worldInverse],
      c: [_EveBasicPerObjectDat, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveBasicPerObjectData",
      family: "eve/perObjectData"
    })], [[[type, type.mat4], 16, "world"], [[type, type.mat4], 16, "worldLast"], [[type, type.mat4], 16, "worldInverse"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_worldInverse(this);
  }
  world = _init_world(this, mat4.create());
  worldLast = (_init_extra_world(this), _init_worldLast(this, mat4.create()));
  worldInverse = (_init_extra_worldLast(this), _init_worldInverse(this, mat4.create()));
  static {
    _initClass();
  }
}

export { _EveBasicPerObjectDat as EveBasicPerObjectData };
//# sourceMappingURL=EveBasicPerObjectData.js.map
