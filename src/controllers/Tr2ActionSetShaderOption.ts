// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetShaderOption.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetShaderOption.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  GetControllerOwner,
  HasFunction,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionSetShaderOption", family: "controllers" })
export class Tr2ActionSetShaderOption extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  key = "";

  @io.persist
  @type.string
  value = "";

  /**
   * Sets a shader option on the controller owner when supported.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const owner = GetControllerOwner(controller);
    if (!HasFunction(owner, "SetShaderOption")) {
      return;
    }
    owner.SetShaderOption(this.key, this.value);
  }
}
