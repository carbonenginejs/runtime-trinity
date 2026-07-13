import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';

let _initClass, _init_lightData, _init_extra_lightData, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boosterGainInfluence, _init_extra_boosterGainInfluence, _init_boneMatrix, _init_extra_boneMatrix;

/** EveHazeSetLight (eve/attachment/haze) - generated from schema shapeHash d9a8a66a.... */
let _EveHazeSetLight;
class EveHazeSetLight extends CjsModel {
  static {
    ({
      e: [_init_lightData, _init_extra_lightData, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boosterGainInfluence, _init_extra_boosterGainInfluence, _init_boneMatrix, _init_extra_boneMatrix],
      c: [_EveHazeSetLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveHazeSetLight",
      family: "eve/attachment/haze"
    })], [[type.rawStruct("LightData"), 0, "lightData"], [type.objectRef("Tr2LightProfileRes"), 0, "lightProfile"], [[type, type.uint32], 16, "index"], [[type, type.boolean], 16, "boosterGainInfluence"], [[type, type.mat4], 16, "boneMatrix"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boneMatrix(this);
  }
  /** lightData (LightData) */
  lightData = _init_lightData(this, null);

  /** lightProfile (Tr2LightProfileResPtr) */
  lightProfile = (_init_extra_lightData(this), _init_lightProfile(this, null));

  /** index (uint32_t) */
  index = (_init_extra_lightProfile(this), _init_index(this, 0));

  /** boosterGainInfluence (bool) */
  boosterGainInfluence = (_init_extra_index(this), _init_boosterGainInfluence(this, false));

  /** boneMatrix (Matrix) */
  boneMatrix = (_init_extra_boosterGainInfluence(this), _init_boneMatrix(this, mat4.create()));
  static {
    _initClass();
  }
}

export { _EveHazeSetLight as EveHazeSetLight };
//# sourceMappingURL=EveHazeSetLight.js.map
