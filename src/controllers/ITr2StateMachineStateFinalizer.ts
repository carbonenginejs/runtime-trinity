// Source: E:\carbonengine\trinity\trinity\Controllers\Finalizers\ITr2StateMachineStateFinalizer.h
import type { ITr2ActionController } from "./ITr2ControllerAction.ts";

export interface ITr2StateMachineStateFinalizer {
  /**
   * Links the finalizer to a controller.
   */
  Link?(controller: ITr2ActionController): void;

  /**
   * Unlinks the finalizer.
   */
  Unlink?(): void;

  /**
   * Checks whether the state can finish transitioning.
   */
  CanTransition(controller: ITr2ActionController): boolean;
}
