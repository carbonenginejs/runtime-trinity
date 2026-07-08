// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\ITr2ControllerAction.h
// Source: E:\carbonengine\trinity\trinity\Controllers\ITr2Controller.h
import type { UnlinkReasonValue } from "./enums.ts";

export interface ITr2Controller {
  /**
   * Links the controller to its owning root object.
   */
  Link?(owner: object): void;

  /**
   * Unlinks the controller from its owning root object.
   */
  Unlink?(reason?: UnlinkReasonValue): void;

  /**
   * Checks whether the controller is linked to its owner.
   */
  IsLinked?(): boolean;

  /**
   * Starts controlling the owner.
   */
  Start?(): void;

  /**
   * Stops controlling the owner.
   */
  Stop?(): void;

  /**
   * Updates the controller with a normalized update frequency.
   */
  Update?(normalizedUpdateFrequency: number): void;

  /**
   * Sets a named controller variable.
   */
  SetVariable?(name: string, value: number): void;

  /**
   * Handles an instantaneous named event.
   */
  HandleEvent?(eventName: string): void;
}

export interface ITr2Updateable {
  /**
   * Updates an object registered with an action controller.
   */
  Update?(realTime: number, simTime: number): void;
}

export interface Tr2ExpressionTermInfoLike {
  group?: string;
  name?: string;
  description?: string;
  kind?: string;
}

export type Tr2BindingPathRoot = readonly [string, object | null];

export interface ITr2ActionController extends ITr2Controller {
  /**
   * Gets the owner that actions operate on.
   */
  GetOwner?(): object | null;

  /**
   * Notifies the controller of a named callback event.
   */
  Callback?(callbackName: string): void;

  /**
   * Registers an updateable object.
   */
  RegisterUpdateable?(updateable: ITr2Updateable): void;

  /**
   * Unregisters an updateable object.
   */
  UnRegisterUpdateable?(updateable: ITr2Updateable): void;

  /**
   * Gets named root objects for dynamic binding paths.
   */
  GetBindingPathRoots?(): readonly Tr2BindingPathRoot[];

  /**
   * Gets a float variable value by name, when available.
   */
  GetFloatVariableByName?(name: string): number | undefined;

  /**
   * Appends expression term metadata exposed by the controller.
   */
  GetExpressionTermInfo?(out: Tr2ExpressionTermInfoLike[]): void;

  /**
   * Gets the expression variable view exposed by the controller.
   */
  GetVariableView?(): unknown;

  /**
   * Gets the controller's variable buffer.
   */
  GetVariableBuffer?(): unknown;

  /**
   * Ensures the temporary expression arena has at least the supplied byte size.
   */
  EnsureTempArenaSize?(size: number): void;

  /**
   * Gets the temporary expression arena.
   */
  GetTempArena?(): unknown;
}

export interface ITr2ControllerAction {
  /**
   * Links the action to an action-capable controller.
   */
  Link?(controller: ITr2ActionController): void;

  /**
   * Unlinks the action from its controller.
   */
  Unlink?(): void;

  /**
   * Starts the action.
   */
  Start?(controller: ITr2ActionController): void;

  /**
   * Stops the action.
   */
  Stop?(controller: ITr2ActionController): void;

  /**
   * Rebases action simulation time.
   */
  RebaseSimTime?(diff: number): void;

  /**
   * Checks whether the action allows a transition.
   */
  CanTransition?(): boolean;
}
