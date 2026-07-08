// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionCallback.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionCallback.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionCallback", family: "controllers" })
export class Tr2ActionCallback extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  callbackName = "";

  /**
   * Notifies the linked controller callback registry.
   */
  @carbon.method
  @impl.implemented
  Start(controller: ITr2ActionController): void {
    if (this.callbackName) {
      controller.Callback?.(this.callbackName);
    }
  }
}
