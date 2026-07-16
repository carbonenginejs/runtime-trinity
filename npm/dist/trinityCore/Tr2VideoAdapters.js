import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_DEFAULT_ADAPTER, _init_extra_DEFAULT_ADAPTER;

/** Tr2VideoAdapters (trinityCore) - generated from schema shapeHash 1c079d44.... */
let _Tr2VideoAdapters;
new class extends _identity {
  static [class Tr2VideoAdapters extends CjsModel {
    static {
      ({
        e: [_init_DEFAULT_ADAPTER, _init_extra_DEFAULT_ADAPTER, _initProto],
        c: [_Tr2VideoAdapters, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2VideoAdapters",
        family: "trinityCore"
      })], [[[io, io.read, type, type.uint32], 16, "DEFAULT_ADAPTER"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Refresh"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetCurrentDisplayMode"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDisplayMode"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SupportsBackBufferFormat"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SupportsRenderTargetFormat"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetMaxTextureSize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDisplayModeCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAdapterCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAdapterInfo"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_DEFAULT_ADAPTER(this);
    }
    /** DEFAULT_ADAPTER (const unsigned) [READ] */
    DEFAULT_ADAPTER = (_initProto(this), _init_DEFAULT_ADAPTER(this, 0));

    /** Carbon method Refresh -> RefreshData (MAP_METHOD_AND_WRAP). */
    Refresh(...args) {
      throw new Error("Tr2VideoAdapters.Refresh is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetCurrentDisplayMode (MAP_METHOD_AND_WRAP). */
    GetCurrentDisplayMode(...args) {
      throw new Error("Tr2VideoAdapters.GetCurrentDisplayMode is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetDisplayMode (MAP_METHOD_AND_WRAP). */
    GetDisplayMode(...args) {
      throw new Error("Tr2VideoAdapters.GetDisplayMode is not implemented in CarbonEngineJS.");
    }

    /** Carbon method SupportsBackBufferFormat (MAP_METHOD_AND_WRAP). */
    SupportsBackBufferFormat(...args) {
      throw new Error("Tr2VideoAdapters.SupportsBackBufferFormat is not implemented in CarbonEngineJS.");
    }

    /** Carbon method SupportsRenderTargetFormat (MAP_METHOD_AND_WRAP). */
    SupportsRenderTargetFormat(...args) {
      throw new Error("Tr2VideoAdapters.SupportsRenderTargetFormat is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetMaxTextureSize (MAP_METHOD_AND_WRAP). */
    GetMaxTextureSize(...args) {
      throw new Error("Tr2VideoAdapters.GetMaxTextureSize is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetDisplayModeCount (MAP_METHOD_AND_WRAP). */
    GetDisplayModeCount(...args) {
      throw new Error("Tr2VideoAdapters.GetDisplayModeCount is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetAdapterCount (MAP_METHOD_AND_WRAP). */
    GetAdapterCount(...args) {
      throw new Error("Tr2VideoAdapters.GetAdapterCount is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetAdapterInfo (MAP_METHOD_AND_WRAP). */
    GetAdapterInfo(...args) {
      throw new Error("Tr2VideoAdapters.GetAdapterInfo is not implemented in CarbonEngineJS.");
    }
  }];
  DEFAULT_ADAPTER = 0;
  constructor() {
    super(_Tr2VideoAdapters), _initClass();
  }
}();

export { _Tr2VideoAdapters as Tr2VideoAdapters };
//# sourceMappingURL=Tr2VideoAdapters.js.map
