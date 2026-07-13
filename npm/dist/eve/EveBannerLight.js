import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { type } from '@carbonenginejs/core-types/schema';
import { LightData as _LightData } from '../generated/eve/lights/LightData.js';

let _initClass, _init_lightData, _init_extra_lightData, _init_saturation, _init_extra_saturation, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boneMatrix, _init_extra_boneMatrix;
let _EveBannerLight;
class EveBannerLight extends CjsModel {
  static {
    ({
      e: [_init_lightData, _init_extra_lightData, _init_saturation, _init_extra_saturation, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boneMatrix, _init_extra_boneMatrix],
      c: [_EveBannerLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveBannerLight",
      family: "eve/attachment/banners"
    })], [[type.rawStruct("LightData"), 0, "lightData"], [[type, type.float32], 16, "saturation"], [type.objectRef("Tr2LightProfileRes"), 0, "lightProfile"], [[type, type.uint32], 16, "index"], [[type, type.mat4], 16, "boneMatrix"]], 0, void 0, CjsModel));
  }
  lightData = _init_lightData(this, new _LightData());
  saturation = (_init_extra_lightData(this), _init_saturation(this, 1));
  lightProfile = (_init_extra_saturation(this), _init_lightProfile(this, null));
  index = (_init_extra_lightProfile(this), _init_index(this, 0));
  boneMatrix = (_init_extra_index(this), _init_boneMatrix(this, mat4.create()));
  lightProfilePath = (_init_extra_boneMatrix(this), "");
  static FromSOF(value) {
    const result = new _EveBannerLight();
    result.lightData = _LightData.fromValues(value?.lightData ?? {});
    result.saturation = Number(value?.saturation ?? 1);
    result.lightProfile = value?.lightProfile ?? null;
    result.index = Number(value?.index ?? 0) >>> 0;
    if (value?.boneMatrix) mat4.copy(result.boneMatrix, value.boneMatrix);
    result.lightProfilePath = String(value?.lightProfilePath ?? value?.lightData?.texturePath ?? "");
    return result;
  }
  static {
    _initClass();
  }
}

export { _EveBannerLight as EveBannerLight };
//# sourceMappingURL=EveBannerLight.js.map
