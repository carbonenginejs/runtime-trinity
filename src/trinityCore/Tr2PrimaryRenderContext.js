// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2RenderContext.h
// Hand-maintained from Carbon source; the back buffer is backend-private state.
import { carbon, impl, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** Tr2PrimaryRenderContext (trinityCore) - generated from schema shapeHash 92b87061.... */
@type.define({ className: "Tr2PrimaryRenderContext", family: "trinityCore" })
export class Tr2PrimaryRenderContext extends CjsModel
{

  /** Carbon method GetDefaultBackBuffer -> GetBackBuffer (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDefaultBackBuffer(...args)
  {
    throw CjsModel.notImplemented("Tr2PrimaryRenderContext", "GetDefaultBackBuffer", args);
  }

  /** Carbon method GetBackBufferFormat (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetBackBufferFormat(...args)
  {
    throw CjsModel.notImplemented("Tr2PrimaryRenderContext", "GetBackBufferFormat", args);
  }

}
