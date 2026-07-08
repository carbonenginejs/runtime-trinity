// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSpawnParticles.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSpawnParticles.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { ITr2GenericEmitter as Tr2GenericEmitterUpdateArguments } from "../generated/particle/ITr2GenericEmitter.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";
import { HasFunction } from "./CjsControllerActionHelpers.ts";

@type.define({ className: "Tr2ActionSpawnParticles", family: "controllers" })
export class Tr2ActionSpawnParticles extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.objectRef("Tr2DynamicEmitter")
  emitter: unknown = null;

  @io.persist
  @type.float32
  rate = 1;

  #updateArguments = CreateEmitterUpdateArguments();

  /**
   * Spawns particles on the configured emitter.
   */
  @carbon.method
  @impl.adapted
  Start(_controller?: ITr2ActionController): void {
    if (!HasFunction(this.emitter, "SpawnParticles")) {
      return;
    }
    this.emitter.SpawnParticles(this.#updateArguments, null, null, this.rate);
  }
}

function CreateEmitterUpdateArguments(): Tr2GenericEmitterUpdateArguments {
  const args = new Tr2GenericEmitterUpdateArguments();
  args.emitCountFactor = 1;
  return args;
}
