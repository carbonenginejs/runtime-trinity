import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_killCount, _init_extra_killCount, _init_clipRadiusSq, _init_extra_clipRadiusSq, _init_clipRadius2Sq, _init_extra_clipRadius2Sq, _init_clipFactor, _init_extra_clipFactor, _init_clipFactor2, _init_extra_clipFactor2, _init_shLighting, _init_extra_shLighting;

/** IEveSpaceObject2 (eve/spaceObject) - generated from schema shapeHash 02787227.... */
let _IEveSpaceObject;
class IEveSpaceObject2 extends CjsModel {
  static {
    ({
      e: [_init_killCount, _init_extra_killCount, _init_clipRadiusSq, _init_extra_clipRadiusSq, _init_clipRadius2Sq, _init_extra_clipRadius2Sq, _init_clipFactor, _init_extra_clipFactor, _init_clipFactor2, _init_extra_clipFactor2, _init_shLighting, _init_extra_shLighting],
      c: [_IEveSpaceObject, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "IEveSpaceObject2",
      family: "eve/spaceObject"
    })], [[[type, type.uint32], 16, "killCount"], [[type, type.float32], 16, "clipRadiusSq"], [[type, type.float32], 16, "clipRadius2Sq"], [[type, type.float32], 16, "clipFactor"], [[type, type.float32], 16, "clipFactor2"], [type.objectRef("Vector4"), 0, "shLighting"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shLighting(this);
  }
  /** killCount (uint32_t) */
  killCount = _init_killCount(this, 0);

  /** clipRadiusSq (float) */
  clipRadiusSq = (_init_extra_killCount(this), _init_clipRadiusSq(this, 0));

  /** clipRadius2Sq (float) */
  clipRadius2Sq = (_init_extra_clipRadiusSq(this), _init_clipRadius2Sq(this, 0));

  /** clipFactor (float) */
  clipFactor = (_init_extra_clipRadius2Sq(this), _init_clipFactor(this, 0));

  /** clipFactor2 (float) */
  clipFactor2 = (_init_extra_clipFactor(this), _init_clipFactor2(this, 0));

  /** shLighting (const Vector4*) */
  shLighting = (_init_extra_clipFactor2(this), _init_shLighting(this, null));
  static {
    _initClass();
  }
}

export { _IEveSpaceObject as IEveSpaceObject2 };
//# sourceMappingURL=IEveSpaceObject2.js.map
