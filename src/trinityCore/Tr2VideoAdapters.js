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
    throw new Error("Tr2VideoAdapters.Refresh is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetCurrentDisplayMode (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetCurrentDisplayMode(...args)
  {
    throw new Error("Tr2VideoAdapters.GetCurrentDisplayMode is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDisplayMode (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDisplayMode(...args)
  {
    throw new Error("Tr2VideoAdapters.GetDisplayMode is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SupportsBackBufferFormat (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SupportsBackBufferFormat(...args)
  {
    throw new Error("Tr2VideoAdapters.SupportsBackBufferFormat is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SupportsRenderTargetFormat (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SupportsRenderTargetFormat(...args)
  {
    throw new Error("Tr2VideoAdapters.SupportsRenderTargetFormat is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetMaxTextureSize (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetMaxTextureSize(...args)
  {
    throw new Error("Tr2VideoAdapters.GetMaxTextureSize is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDisplayModeCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDisplayModeCount(...args)
  {
    throw new Error("Tr2VideoAdapters.GetDisplayModeCount is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetAdapterCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetAdapterCount(...args)
  {
    throw new Error("Tr2VideoAdapters.GetAdapterCount is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetAdapterInfo (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetAdapterInfo(...args)
  {
    throw new Error("Tr2VideoAdapters.GetAdapterInfo is not implemented in CarbonEngineJS.");
  }

}
