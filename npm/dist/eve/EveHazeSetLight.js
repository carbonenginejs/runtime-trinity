import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { type } from '@carbonenginejs/core-types/schema';
import { LightData as _LightData } from '../generated/eve/lights/LightData.js';

let _initClass, _init_lightData, _init_extra_lightData, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boosterGainInfluence, _init_extra_boosterGainInfluence, _init_boneMatrix, _init_extra_boneMatrix, _init_lightProfilePath, _init_extra_lightProfilePath;
let _EveHazeSetLight;
class EveHazeSetLight extends CjsModel {
  static {
    ({
      e: [_init_lightData, _init_extra_lightData, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boosterGainInfluence, _init_extra_boosterGainInfluence, _init_boneMatrix, _init_extra_boneMatrix, _init_lightProfilePath, _init_extra_lightProfilePath],
      c: [_EveHazeSetLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveHazeSetLight",
      family: "eve/attachment/haze"
    })], [[type.rawStruct("LightData"), 0, "lightData"], [type.objectRef("Tr2LightProfileRes"), 0, "lightProfile"], [[type, type.uint32], 16, "index"], [[type, type.boolean], 16, "boosterGainInfluence"], [[type, type.mat4], 16, "boneMatrix"], [[type, type.string], 16, "lightProfilePath"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_lightProfilePath(this);
  }
  lightData = _init_lightData(this, new _LightData());
  lightProfile = (_init_extra_lightData(this), _init_lightProfile(this, null));
  index = (_init_extra_lightProfile(this), _init_index(this, 0));
  boosterGainInfluence = (_init_extra_index(this), _init_boosterGainInfluence(this, false));
  boneMatrix = (_init_extra_boosterGainInfluence(this), _init_boneMatrix(this, mat4.create()));
  lightProfilePath = (_init_extra_boneMatrix(this), _init_lightProfilePath(this, ""));
  static FromSOF(value) {
    const result = new _EveHazeSetLight();
    result.lightData = _LightData.from(value?.lightData ?? {});
    result.lightProfile = value?.lightProfile ?? null;
    result.index = Number(value?.index ?? 0) >>> 0;
    result.boosterGainInfluence = value?.boosterGainInfluence === true;
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
  static {
    _initClass();
  }
}

export { _EveHazeSetLight as EveHazeSetLight };
//# sourceMappingURL=EveHazeSetLight.js.map
