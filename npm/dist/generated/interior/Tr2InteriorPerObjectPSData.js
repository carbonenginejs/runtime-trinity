import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_lightCount, _init_extra_lightCount, _init_padding, _init_extra_padding, _init_pointLights, _init_extra_pointLights, _init_shadowCaster, _init_extra_shadowCaster, _init_shadowCaster2, _init_extra_shadowCaster2, _init_spotLights, _init_extra_spotLights;

/** Tr2InteriorPerObjectPSData (interior) - generated from schema shapeHash 774698be.... */
let _Tr2InteriorPerObject;
class Tr2InteriorPerObjectPSData extends CjsModel {
  static {
    ({
      e: [_init_lightCount, _init_extra_lightCount, _init_padding, _init_extra_padding, _init_pointLights, _init_extra_pointLights, _init_shadowCaster, _init_extra_shadowCaster, _init_shadowCaster2, _init_extra_shadowCaster2, _init_spotLights, _init_extra_spotLights],
      c: [_Tr2InteriorPerObject, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2InteriorPerObjectPSData",
      family: "interior"
    })], [[[type, type.int32], 16, "lightCount"], [[type, type.int32], 16, "padding"], [type.rawStruct("Tr2InteriorPerObjectLightData"), 0, "pointLights"], [[type, type.vec4], 16, "shadowCaster0"], [[type, type.vec4], 16, "shadowCaster1"], [[type, type.mat4], 16, "spotLights"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_spotLights(this);
  }
  /** lightCount (int32_t) */
  lightCount = _init_lightCount(this, 0);

  /** padding (int32_t) */
  padding = (_init_extra_lightCount(this), _init_padding(this, 0));

  /** pointLights (Tr2InteriorPerObjectLightData) */
  pointLights = (_init_extra_padding(this), _init_pointLights(this, null));

  /** shadowCaster0 (Vector4) */
  shadowCaster0 = (_init_extra_pointLights(this), _init_shadowCaster(this, vec4.create()));

  /** shadowCaster1 (Vector4) */
  shadowCaster1 = (_init_extra_shadowCaster(this), _init_shadowCaster2(this, vec4.create()));

  /** spotLights (Matrix) */
  spotLights = (_init_extra_shadowCaster2(this), _init_spotLights(this, mat4.create()));
  static {
    _initClass();
  }
}

export { _Tr2InteriorPerObject as Tr2InteriorPerObjectPSData };
//# sourceMappingURL=Tr2InteriorPerObjectPSData.js.map
