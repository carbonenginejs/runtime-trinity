import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_lightData, _init_extra_lightData, _init_mirrorToWorldMatrix, _init_extra_mirrorToWorldMatrix, _init_shadowMatrix, _init_extra_shadowMatrix, _init_shadowRect, _init_extra_shadowRect, _init_shadowInfluence, _init_extra_shadowInfluence, _init_boundingBox, _init_extra_boundingBox, _init_additionalParameters, _init_extra_additionalParameters;

/** Tr2InteriorPerLightPSData (interior) - generated from schema shapeHash 88416470.... */
let _Tr2InteriorPerLightP;
class Tr2InteriorPerLightPSData extends CjsModel {
  static {
    ({
      e: [_init_lightData, _init_extra_lightData, _init_mirrorToWorldMatrix, _init_extra_mirrorToWorldMatrix, _init_shadowMatrix, _init_extra_shadowMatrix, _init_shadowRect, _init_extra_shadowRect, _init_shadowInfluence, _init_extra_shadowInfluence, _init_boundingBox, _init_extra_boundingBox, _init_additionalParameters, _init_extra_additionalParameters],
      c: [_Tr2InteriorPerLightP, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2InteriorPerLightPSData",
      family: "interior"
    })], [[type.rawStruct("Tr2InteriorPerObjectLightData"), 0, "lightData"], [[type, type.mat4], 16, "mirrorToWorldMatrix"], [[type, type.mat4], 16, "shadowMatrix"], [[type, type.vec4], 16, "shadowRect"], [[type, type.vec4], 16, "shadowInfluence"], [[type, type.mat4], 16, "boundingBox"], [[type, type.vec4], 16, "additionalParameters"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_additionalParameters(this);
  }
  /** lightData (Tr2InteriorPerObjectLightData) */
  lightData = _init_lightData(this, null);

  /** mirrorToWorldMatrix (Matrix) */
  mirrorToWorldMatrix = (_init_extra_lightData(this), _init_mirrorToWorldMatrix(this, mat4.create()));

  /** shadowMatrix (Matrix) */
  shadowMatrix = (_init_extra_mirrorToWorldMatrix(this), _init_shadowMatrix(this, mat4.create()));

  /** shadowRect (Vector4) */
  shadowRect = (_init_extra_shadowMatrix(this), _init_shadowRect(this, vec4.create()));

  /** shadowInfluence (Vector4) */
  shadowInfluence = (_init_extra_shadowRect(this), _init_shadowInfluence(this, vec4.create()));

  /** boundingBox (Matrix) */
  boundingBox = (_init_extra_shadowInfluence(this), _init_boundingBox(this, mat4.create()));

  /** additionalParameters (Vector4) */
  additionalParameters = (_init_extra_boundingBox(this), _init_additionalParameters(this, vec4.create()));
  static {
    _initClass();
  }
}

export { _Tr2InteriorPerLightP as Tr2InteriorPerLightPSData };
//# sourceMappingURL=Tr2InteriorPerLightPSData.js.map
