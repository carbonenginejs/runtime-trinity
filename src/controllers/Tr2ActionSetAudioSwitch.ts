// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetAudioSwitch.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetAudioSwitch.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  CjsRequireActionController,
  GetControllerOwner,
  HasFunction,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionSetAudioSwitch", family: "controllers" })
export class Tr2ActionSetAudioSwitch extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  emitter = "";

  @io.persist
  @type.string
  switchGroup = "";

  @io.persist
  @type.string
  switchState = "";

  /**
   * Sets a Wwise-style switch on a named emitter.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const emitter = FindEmitter(GetControllerOwner(controller), this.emitter);
    if (!HasFunction(emitter, "SetSwitch")) {
      return;
    }
    emitter.SetSwitch(this.switchGroup, this.switchState);
  }

  /**
   * Starts manually with an explicit controller.
   */
  @carbon.method
  @impl.implemented
  StartWithController(controller: ITr2ActionController | null): void {
    this.Start(CjsRequireActionController(
      controller,
      "StartWithController",
    ));
  }
}

function FindEmitter(owner: unknown, name: string): unknown {
  return CallTarget(owner, "FindSoundEmitter", name) ?? null;
}
