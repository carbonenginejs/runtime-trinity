// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2VideoAdapters.h
// Hand-maintained from Carbon source; runtime-device owns the canonical JS class.
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** Tr2VideoAdapters (trinityCore) - generated from schema shapeHash 1c079d44.... */
@type.define({ className: "Tr2VideoAdapters", family: "trinityCore" })
export class Tr2VideoAdapters extends CjsModel
{

  static DEFAULT_ADAPTER = 0;

  /** DEFAULT_ADAPTER (const unsigned) [READ] */
  @io.read
  @type.uint32
  DEFAULT_ADAPTER = 0;

  /** Carbon method Refresh -> RefreshData (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  Refresh(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "Refresh", args);
  }

  /** Carbon method GetCurrentDisplayMode (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetCurrentDisplayMode(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "GetCurrentDisplayMode", args);
  }

  /** Carbon method GetDisplayMode (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDisplayMode(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "GetDisplayMode", args);
  }

  /** Carbon method SupportsBackBufferFormat (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SupportsBackBufferFormat(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "SupportsBackBufferFormat", args);
  }

  /** Carbon method SupportsRenderTargetFormat (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SupportsRenderTargetFormat(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "SupportsRenderTargetFormat", args);
  }

  /** Carbon method GetMaxTextureSize (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetMaxTextureSize(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "GetMaxTextureSize", args);
  }

  /** Carbon method GetDisplayModeCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDisplayModeCount(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "GetDisplayModeCount", args);
  }

  /** Carbon method GetAdapterCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetAdapterCount(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "GetAdapterCount", args);
  }

  /** Carbon method GetAdapterInfo (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetAdapterInfo(...args)
  {
    throw CjsModel.notImplemented("Tr2VideoAdapters", "GetAdapterInfo", args);
  }

}
