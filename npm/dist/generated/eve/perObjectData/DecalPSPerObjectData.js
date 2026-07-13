import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_displayData, _init_extra_displayData, _init_shipData, _init_extra_shipData, _init_clipData, _init_extra_clipData, _init_clipRadius2Sq, _init_extra_clipRadius2Sq, _init_unused, _init_extra_unused, _init_shLightingCoefficients, _init_extra_shLightingCoefficients;

/** DecalPSPerObjectData (eve/perObjectData) - generated from schema shapeHash f9ea110d.... */
let _DecalPSPerObjectData;
class DecalPSPerObjectData extends CjsModel {
  static {
    ({
      e: [_init_displayData, _init_extra_displayData, _init_shipData, _init_extra_shipData, _init_clipData, _init_extra_clipData, _init_clipRadius2Sq, _init_extra_clipRadius2Sq, _init_unused, _init_extra_unused, _init_shLightingCoefficients, _init_extra_shLightingCoefficients],
      c: [_DecalPSPerObjectData, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "DecalPSPerObjectData",
      family: "eve/perObjectData"
    })], [[[type, type.vec4], 16, "displayData"], [[type, type.vec4], 16, "shipData"], [[type, type.vec4], 16, "clipData"], [[type, type.float32], 16, "clipRadius2Sq"], [[type, type.vec3], 16, "unused"], [[type, type.vec4], 16, "shLightingCoefficients"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shLightingCoefficients(this);
  }
  /** m_displayData (Vector4) */
  displayData = _init_displayData(this, vec4.create());

  /** m_shipData (Vector4) */
  shipData = (_init_extra_displayData(this), _init_shipData(this, vec4.create()));

  /** m_clipData (Vector4) */
  clipData = (_init_extra_shipData(this), _init_clipData(this, vec4.create()));

  /** m_clipRadius2Sq (float) */
  clipRadius2Sq = (_init_extra_clipData(this), _init_clipRadius2Sq(this, 0));

  /** m_unused (Vector3) */
  unused = (_init_extra_clipRadius2Sq(this), _init_unused(this, vec3.create()));

  /** m_shLightingCoefficients (Vector4) */
  shLightingCoefficients = (_init_extra_unused(this), _init_shLightingCoefficients(this, vec4.create()));
  static {
    _initClass();
  }
}

export { _DecalPSPerObjectData as DecalPSPerObjectData };
//# sourceMappingURL=DecalPSPerObjectData.js.map
