import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass;

/** Tr2PlatformInfo (trinityCore) - generated from schema shapeHash b35dbf63.... */
let _Tr2PlatformInfo;
class Tr2PlatformInfo extends CjsModel {
  static {
    ({
      e: [_initProto],
      c: [_Tr2PlatformInfo, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2PlatformInfo",
      family: "trinityCore"
    })], [[[carbon, carbon.method, impl, impl.notImplemented], 18, "GetStaticCap"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _initProto(this);
  }
  /** Carbon method GetStaticCap (MAP_METHOD_AND_WRAP). */
  GetStaticCap(...args) {
    throw new Error("Tr2PlatformInfo.GetStaticCap is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2PlatformInfo as Tr2PlatformInfo };
//# sourceMappingURL=Tr2PlatformInfo.js.map
