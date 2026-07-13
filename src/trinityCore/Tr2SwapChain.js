// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2SwapChain.h
// Hand-maintained from Carbon source; runtime-device owns the canonical JS class.
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** Tr2SwapChain (trinityCore) - generated from schema shapeHash 955529ab.... */
@type.define({ className: "Tr2SwapChain", family: "trinityCore" })
export class Tr2SwapChain extends CjsModel
{

  /** m_depthStencil (Tr2DepthStencilPtr) [READ] */
  @io.read
  @type.objectRef("Tr2DepthStencil")
  depthStencilBuffer = null;

  /** m_backBuffer (Tr2RenderTargetPtr) [READ] */
  @io.read
  @type.objectRef("Tr2RenderTarget")
  backBuffer = null;

  @io.read
  @type.int32
  width = 0;

  @io.read
  @type.int32
  height = 0;

  /** Carbon method CreateForWindow (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  CreateForWindow(...args)
  {
    throw CjsModel.notImplemented("Tr2SwapChain", "CreateForWindow", args);
  }

}
