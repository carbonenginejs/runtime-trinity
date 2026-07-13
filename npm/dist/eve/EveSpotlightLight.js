import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { type } from '@carbonenginejs/core-types/schema';
import { LightData as _LightData } from '../generated/eve/lights/LightData.js';

let _initClass, _init_lightData, _init_extra_lightData, _init_boneMatrix, _init_extra_boneMatrix, _init_lightProfile, _init_extra_lightProfile, _init_boosterGainInfluence, _init_extra_boosterGainInfluence, _init_index, _init_extra_index;
let _EveSpotlightLight;
class EveSpotlightLight extends CjsModel {
  static {
    ({
      e: [_init_lightData, _init_extra_lightData, _init_boneMatrix, _init_extra_boneMatrix, _init_lightProfile, _init_extra_lightProfile, _init_boosterGainInfluence, _init_extra_boosterGainInfluence, _init_index, _init_extra_index],
      c: [_EveSpotlightLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpotlightLight",
      family: "eve/attachment/spotlights"
    })], [[type.rawStruct("LightData"), 0, "lightData"], [[type, type.mat4], 16, "boneMatrix"], [type.objectRef("Tr2LightProfileRes"), 0, "lightProfile"], [[type, type.boolean], 16, "boosterGainInfluence"], [[type, type.uint32], 16, "index"]], 0, void 0, CjsModel));
  }
  lightData = _init_lightData(this, new _LightData());
  boneMatrix = (_init_extra_lightData(this), _init_boneMatrix(this, mat4.create()));
  lightProfile = (_init_extra_boneMatrix(this), _init_lightProfile(this, null));
  boosterGainInfluence = (_init_extra_lightProfile(this), _init_boosterGainInfluence(this, false));
  index = (_init_extra_boosterGainInfluence(this), _init_index(this, 0));

  // Carbon consumes this constructor input while resolving lightProfile. Keep
  // the authored path as private adapter intent until a resource runtime owns it.
  lightProfilePath = (_init_extra_index(this), "");
  static FromSOF(value) {
    const result = new _EveSpotlightLight();
    result.lightData = _LightData.fromValues(value?.lightData ?? {});
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfile = value?.lightProfile ?? null;
    result.boosterGainInfluence = value?.boosterGainInfluence === true;
    result.index = Number(value?.index ?? 0) >>> 0;
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
  static {
    _initClass();
  }
}

export { _EveSpotlightLight as EveSpotlightLight };
//# sourceMappingURL=EveSpotlightLight.js.map
