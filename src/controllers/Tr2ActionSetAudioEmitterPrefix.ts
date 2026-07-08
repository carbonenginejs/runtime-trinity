// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetAudioEmitterPrefix.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetAudioEmitterPrefix.cpp
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

@type.define({
  className: "Tr2ActionSetAudioEmitterPrefix",
  family: "controllers",
})
export class Tr2ActionSetAudioEmitterPrefix extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  emitter = "";

  @io.persist
  @type.string
  prefix = "";

  /**
   * Sets the prefix on a named audio emitter.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const emitter = FindEmitter(GetControllerOwner(controller), this.emitter);
    if (!HasFunction(emitter, "SetPrefix")) {
      return;
    }
    emitter.SetPrefix(this.prefix);
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
