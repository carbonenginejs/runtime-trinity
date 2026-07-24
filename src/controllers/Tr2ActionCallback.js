// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionCallback.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionCallback.cpp
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "Tr2ActionCallback",
  family: "controllers"
})
export class Tr2ActionCallback extends CjsModel
{
  @io.persist
  @type.string
  callbackName = "";

  /**
   * Notifies the linked controller callback registry.
   */
  @carbon.method
  @impl.implemented
  Start(controller)
  {
    if (this.callbackName)
    {
      controller.Callback?.(this.callbackName);
    }
  }
}
