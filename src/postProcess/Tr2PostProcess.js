// Source: E:\carbonengine\trinity\trinity\Tr2PostProcess.h
// Source: E:\carbonengine\trinity\trinity\Tr2PostProcess.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "Tr2PostProcess", family: "postProcess" })
export class Tr2PostProcess extends CjsModel
{
  @io.persist
  @type.list("Tr2Effect")
  stages = [];

  /**
   * Accepts the authored stage graph; Carbon performs no additional setup.
   */
  @carbon.method
  @impl.implemented
  Initialize()
  {
    return true;
  }

}
