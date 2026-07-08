// Source: E:\carbonengine\blueexposure\include\IList.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerFloatVariable.h
import type { UnlinkReasonValue } from "./enums.ts";
import type { ITr2ActionController } from "./ITr2ControllerAction.ts";

export const BELIST_INSERTED = 0x08;
export const BELIST_REMOVED = 0x09;
export const BELIST_EVENTMASK = 0x0f;
export const TR2_DIRTY_ALL = (1n << 64n) - 1n;

export type Tr2FloatDestination =
  | Float32Array
  | number[]
  | { value: number }
  | ((value: number) => void);

export interface Tr2DirtyMaskDestination {
  value: bigint | number;
}

export interface Tr2ControllerVariableInfo {
  name: string;
  index: number;
  offset: number;
}

export type Tr2ControllerCallback = () => void;

export interface ITr2StateMachine {
  /**
   * Links the state machine to an action controller.
   */
  Link?(controller: ITr2ActionController): void;

  /**
   * Unlinks the state machine from its controller.
   */
  Unlink?(reason?: UnlinkReasonValue): void;

  /**
   * Starts the state machine.
   */
  Start?(): void;

  /**
   * Stops the state machine.
   */
  Stop?(): void;

  /**
   * Updates the state machine using a dirty variable mask.
   */
  Update?(dirtyVariables?: bigint | number): void;

  /**
   * Gets the linked controller.
   */
  GetController?(): ITr2ActionController | null;

  /**
   * Gets a state by name.
   */
  GetStateByName?(name: string): ITr2StateMachineState | null;
}

export interface ITr2StateMachineState {
  /**
   * Links the state to a state machine.
   */
  Link?(stateMachine: ITr2StateMachine): void;

  /**
   * Unlinks the state from its state machine.
   */
  Unlink?(reason?: UnlinkReasonValue): void;

  /**
   * Starts the state.
   */
  Start?(controller?: ITr2ActionController | null): void;

  /**
   * Stops the state.
   */
  Stop?(controller?: ITr2ActionController | null): void;

  /**
   * Updates the state and optionally returns the next state.
   */
  Update?(dirtyVariables?: bigint | number): ITr2StateMachineState | null;

  /**
   * Rebases action simulation time.
   */
  RebaseSimTime?(diff: number): void;

  /**
   * Gets the state name.
   */
  GetName?(): string;

  /**
   * Gets the linked state machine.
   */
  GetStateMachine?(): ITr2StateMachine | null;

  /**
   * Recomputes the transition variable mask.
   */
  UpdateVariableMask?(): void;
}

export interface ITr2StateMachineTransition {
  /**
   * Links the transition to its source state.
   */
  Link?(state: ITr2StateMachineState): void;

  /**
   * Unlinks the transition.
   */
  Unlink?(): void;

  /**
   * Checks whether the transition can activate for the supplied variable mask.
   */
  CanActivate?(variableDirtyMask?: bigint | number): boolean;

  /**
   * Gets the destination state.
   */
  GetDestination?(): ITr2StateMachineState | null;

  /**
   * Gets the variable mask used by the transition condition.
   */
  GetVariableMask?(): bigint | number;
}

export function GetControllerActualTimeSeconds(): number {
  return GetClockSeconds();
}

export function GetControllerFrameTimeSeconds(): number {
  return GetClockSeconds();
}

export function GetControllerTimeSeconds(): number {
  return GetControllerFrameTimeSeconds();
}

function GetClockSeconds(): number {
  if (typeof performance !== "undefined") {
    return performance.now() / 1000;
  }
  return Date.now() / 1000;
}

export function ToDirtyMask(value: bigint | number): bigint {
  return typeof value === "bigint" ? value : BigInt(value);
}
