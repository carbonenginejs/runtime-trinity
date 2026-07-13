import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass;

/** Tr2PrimaryRenderContext (trinityCore) - generated from schema shapeHash 92b87061.... */
let _Tr2PrimaryRenderCont;
class Tr2PrimaryRenderContext extends CjsModel {
  static {
    ({
      e: [_initProto],
      c: [_Tr2PrimaryRenderCont, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2PrimaryRenderContext",
      family: "trinityCore"
    })], [[[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDefaultBackBuffer"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBackBufferFormat"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _initProto(this);
  }
  /** Carbon method GetDefaultBackBuffer -> GetBackBuffer (MAP_METHOD_AND_WRAP). */
  GetDefaultBackBuffer(...args) {
    throw CjsModel.notImplemented("Tr2PrimaryRenderContext", "GetDefaultBackBuffer", args);
  }

  /** Carbon method GetBackBufferFormat (MAP_METHOD_AND_WRAP). */
  GetBackBufferFormat(...args) {
    throw CjsModel.notImplemented("Tr2PrimaryRenderContext", "GetBackBufferFormat", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2PrimaryRenderCont as Tr2PrimaryRenderContext };
//# sourceMappingURL=Tr2PrimaryRenderContext.js.map
