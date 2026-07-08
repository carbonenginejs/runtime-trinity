// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetAttenuationScaling.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetAttenuationScaling.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  CjsRequireActionController,
  GetControllerOwner,
  HasFunction,
  ToNumber,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({
  className: "Tr2ActionSetAttenuationScaling",
  family: "controllers",
})
export class Tr2ActionSetAttenuationScaling extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  emitter = "";

  @io.persist
  @type.string
  controllerVariable = "";

  @io.persist
  @type.float32
  scalingFactor = 1;

  /**
   * Links this action to a controller for scaling-factor lookup.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#controller = controller;
  }

  /**
   * Clears the linked controller.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.#controller = null;
  }

  #controller: ITr2ActionController | null = null;

  /**
   * Applies attenuation scaling to a named emitter.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this.#controller as ITr2ActionController,
  ): void {
    const emitter = FindEmitter(GetControllerOwner(controller), this.emitter);
    const value = this.GetScalingFactor(controller);
    if (HasFunction(emitter, "SetAttenuationScalingFactor")) {
      emitter.SetAttenuationScalingFactor(value);
    }
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

  /**
   * Gets final scaling factor, including controller variable multiplier.
   */
  @carbon.method
  @impl.adapted
  GetScalingFactor(
    controller: ITr2ActionController | null = this.#controller,
  ): number {
    if (!this.controllerVariable) {
      return this.scalingFactor;
    }
    const controllerVariableValue = ToNumber(
      controller?.GetFloatVariableByName?.(this.controllerVariable),
      0,
    );
    return controllerVariableValue !== 0
      ? this.scalingFactor * controllerVariableValue
      : this.scalingFactor;
  }
}

function FindEmitter(owner: unknown, name: string): unknown {
  return CallTarget(owner, "FindSoundEmitter", name) ?? null;
}
