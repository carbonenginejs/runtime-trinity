import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { type } from '@carbonenginejs/core-types/schema';
import { LightData as _LightData } from '../generated/eve/lights/LightData.js';

let _initClass, _init_lightData, _init_extra_lightData, _init_blinkPhase, _init_extra_blinkPhase, _init_blinkRate, _init_extra_blinkRate, _init_minScale, _init_extra_minScale, _init_maxScale, _init_extra_maxScale, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boneMatrix, _init_extra_boneMatrix;
let _EveSpriteLight;
class EveSpriteLight extends CjsModel {
  static {
    ({
      e: [_init_lightData, _init_extra_lightData, _init_blinkPhase, _init_extra_blinkPhase, _init_blinkRate, _init_extra_blinkRate, _init_minScale, _init_extra_minScale, _init_maxScale, _init_extra_maxScale, _init_lightProfile, _init_extra_lightProfile, _init_index, _init_extra_index, _init_boneMatrix, _init_extra_boneMatrix],
      c: [_EveSpriteLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpriteLight",
      family: "eve/attachment/sprites"
    })], [[type.rawStruct("LightData"), 0, "lightData"], [[type, type.float32], 16, "blinkPhase"], [[type, type.float32], 16, "blinkRate"], [[type, type.float32], 16, "minScale"], [[type, type.float32], 16, "maxScale"], [type.objectRef("Tr2LightProfileRes"), 0, "lightProfile"], [[type, type.uint32], 16, "index"], [[type, type.mat4], 16, "boneMatrix"]], 0, void 0, CjsModel));
  }
  lightData = _init_lightData(this, new _LightData());
  blinkPhase = (_init_extra_lightData(this), _init_blinkPhase(this, 0));
  blinkRate = (_init_extra_blinkPhase(this), _init_blinkRate(this, 0));
  minScale = (_init_extra_blinkRate(this), _init_minScale(this, 0));
  maxScale = (_init_extra_minScale(this), _init_maxScale(this, 0));
  lightProfile = (_init_extra_maxScale(this), _init_lightProfile(this, null));
  index = (_init_extra_lightProfile(this), _init_index(this, 0));
  boneMatrix = (_init_extra_index(this), _init_boneMatrix(this, mat4.create()));

  // Constructor input consumed by Carbon's resource manager. It remains
  // nonserialized adapter intent until a resource runtime resolves the profile.
  lightProfilePath = (_init_extra_boneMatrix(this), "");
  static FromSOF(value) {
    const result = new _EveSpriteLight();
    result.lightData = _LightData.fromValues(value?.lightData ?? {});
    result.blinkPhase = Number(value?.blinkPhase ?? 0);
    result.blinkRate = Number(value?.blinkRate ?? 0);
    result.minScale = Number(value?.minScale ?? 0);
    result.maxScale = Number(value?.maxScale ?? 0);
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

export { _EveSpriteLight as EveSpriteLight };
//# sourceMappingURL=EveSpriteLight.js.map
