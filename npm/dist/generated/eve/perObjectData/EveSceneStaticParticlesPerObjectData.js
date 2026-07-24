import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { mat4 } from '@carbonenginejs/runtime-utils/mat4';

let _initClass, _init_data, _init_extra_data;

/** EveSceneStaticParticlesPerObjectData (eve/perObjectData) - generated from schema shapeHash 9f2925d9.... */
let _EveSceneStaticPartic;
class EveSceneStaticParticlesPerObjectData extends CjsModel {
  static {
    ({
      e: [_init_data, _init_extra_data],
      c: [_EveSceneStaticPartic, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSceneStaticParticlesPerObjectData",
      family: "eve/perObjectData"
    })], [[[type, type.mat4], 16, "data"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_data(this);
  }
  /** m_data.world (Matrix) */
  data = _init_data(this, mat4.create());
  static {
    _initClass();
  }
}

export { _EveSceneStaticPartic as EveSceneStaticParticlesPerObjectData };
//# sourceMappingURL=EveSceneStaticParticlesPerObjectData.js.map
