// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2StateMachine.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2StateMachine.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { UnlinkReason } from "./enums.ts";
import type { UnlinkReasonValue } from "./enums.ts";
import {
  BELIST_EVENTMASK,
  BELIST_INSERTED,
  BELIST_REMOVED,
  GetControllerTimeSeconds,
  TR2_DIRTY_ALL,
} from "./contracts.ts";
import type { ITr2StateMachine, ITr2StateMachineState } from "./contracts.ts";
import type { ITr2ActionController } from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2StateMachine", family: "controllers" })
export class Tr2StateMachine extends CjsModel implements ITr2StateMachine {
  @io.persist
  @type.list("Tr2StateMachineState")
  states: ITr2StateMachineState[] = [];

  @io.read
  @type.objectRef("Tr2StateMachineState")
  currentState: ITr2StateMachineState | null = null;

  @io.notify
  @io.persist
  @type.objectRef("Tr2StateMachineState")
  startState: ITr2StateMachineState | null = null;

  @io.persist
  @type.string
  name = "";

  #controller: ITr2ActionController | null = null;
  #machineStartTime = 0;
  #stateStartTime = 0;

  /**
   * Handles Carbon list notifications for the state list.
   */
  @carbon.method
  @impl.implemented
  OnListModified(
    event: number,
    _key = 0,
    _key2 = 0,
    value: unknown = null,
    list: readonly unknown[] | null = this.states,
  ): void {
    if (list !== this.states) {
      return;
    }

    const state = asState(value);
    switch (event & BELIST_EVENTMASK) {
      case BELIST_INSERTED:
        if (this.#controller && state) {
          state.Link?.(this);
        }
        break;

      case BELIST_REMOVED:
        if (state) {
          if (state === this.currentState) {
            state.Stop?.();
          }
          this.currentState = this.startState;
          this.#stateStartTime = GetControllerTimeSeconds();
          this.currentState?.Start?.(this.#controller);
          state.Unlink?.();
        }
        break;
    }
  }

  /**
   * Relinks the start state after it is modified.
   */
  @carbon.method
  @impl.implemented
  OnModified(_value: unknown = null): boolean {
    if (this.startState && this.#controller) {
      this.startState.Link?.(this);
    }
    return true;
  }

  /**
   * Rebases runtime timestamps and action simulation time.
   */
  @carbon.method
  @impl.adapted
  OnSimClockRebase(oldTime: number, newTime: number): void {
    const diff = newTime - oldTime;
    this.#machineStartTime += diff;
    this.#stateStartTime += diff;

    for (const state of this.states) {
      state.RebaseSimTime?.(diff);
    }
  }

  /**
   * Links all states to a controller.
   */
  @carbon.method
  @impl.implemented
  Link(controller: ITr2ActionController): void {
    this.Unlink();

    this.#controller = controller;
    for (const state of this.states) {
      state.Link?.(this);
    }
  }

  /**
   * Unlinks all states from the current controller.
   */
  @carbon.method
  @impl.implemented
  Unlink(reason: UnlinkReasonValue = UnlinkReason.UNLINKING): void {
    if (!this.#controller) {
      return;
    }

    if (reason !== UnlinkReason.DELETING) {
      this.Stop();
    }
    for (const state of this.states) {
      state.Unlink?.(reason);
    }
    this.#controller = null;
  }

  /**
   * Starts at the configured start state and follows immediate transitions.
   */
  @carbon.method
  @impl.adapted
  Start(): void {
    if (this.currentState || !this.#controller) {
      return;
    }

    this.currentState = this.startState;
    const now = GetControllerTimeSeconds();
    this.#machineStartTime = now;
    this.#stateStartTime = now;
    if (!this.currentState) {
      return;
    }

    this.currentState.Start?.(this.#controller);
    this.#followTransitions(TR2_DIRTY_ALL);
  }

  /**
   * Stops the current state.
   */
  @carbon.method
  @impl.implemented
  Stop(): void {
    if (this.currentState) {
      this.currentState.Stop?.(this.#controller);
      this.currentState = null;
    }
    this.#machineStartTime = 0;
    this.#stateStartTime = 0;
  }

  /**
   * Updates the current state.
   */
  @carbon.method
  @impl.adapted
  Update(dirtyVariables: bigint | number = 0n): void {
    if (this.currentState) {
      this.#followTransitions(dirtyVariables);
    }
  }

  /**
   * Gets the linked controller.
   */
  @carbon.method
  @impl.implemented
  GetController(): ITr2ActionController | null {
    return this.#controller;
  }

  /**
   * Gets the active state.
   */
  GetCurrentState(): ITr2StateMachineState | null {
    return this.currentState;
  }

  /**
   * Gets a state by index.
   */
  GetState(index: number): ITr2StateMachineState | null {
    return this.states[index] ?? null;
  }

  /**
   * Gets a state by authored name.
   */
  @carbon.method
  @impl.implemented
  GetStateByName(name: string): ITr2StateMachineState | null {
    return this.states.find((state) => state.GetName?.() === name) ?? null;
  }

  /**
   * Gets seconds since this state machine started.
   */
  @carbon.method
  @impl.adapted
  GetMachineRunTime(): number {
    return this.#machineStartTime
      ? GetControllerTimeSeconds() - this.#machineStartTime
      : 0;
  }

  /**
   * Gets seconds since the current state started.
   */
  @carbon.method
  @impl.adapted
  GetStateRunTime(): number {
    return this.#stateStartTime
      ? GetControllerTimeSeconds() - this.#stateStartTime
      : 0;
  }

  /**
   * Gets seconds since the current state started.
   */
  GetStateTime(): number {
    return this.GetStateRunTime();
  }

  #followTransitions(dirtyVariables: bigint | number): void {
    let next = this.currentState?.Update?.(dirtyVariables) ?? null;
    if (!next) {
      return;
    }

    const seen = new Map<ITr2StateMachineState, number>();
    for (let iteration = 0; next; iteration++) {
      if (iteration > 10) {
        const count = (seen.get(next) ?? 0) + 1;
        if (count > 20) {
          return;
        }
        seen.set(next, count);
      }

      this.currentState = next;
      this.currentState.Start?.(this.#controller);
      this.#stateStartTime = GetControllerTimeSeconds();
      next = this.currentState.Update?.(TR2_DIRTY_ALL) ?? null;
    }
  }
}

function asState(value: unknown): ITr2StateMachineState | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as ITr2StateMachineState;
}
