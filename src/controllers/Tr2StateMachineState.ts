// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2StateMachineState.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2StateMachineState.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { UnlinkReason } from "./enums.ts";
import type { UnlinkReasonValue } from "./enums.ts";
import {
  BELIST_EVENTMASK,
  BELIST_INSERTED,
  BELIST_REMOVED,
  TR2_DIRTY_ALL,
} from "./contracts.ts";
import type {
  ITr2StateMachine,
  ITr2StateMachineState,
  ITr2StateMachineTransition,
} from "./contracts.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";
import type { ITr2StateMachineStateFinalizer } from "./ITr2StateMachineStateFinalizer.ts";

@type.define({ className: "Tr2StateMachineState", family: "controllers" })
export class Tr2StateMachineState extends CjsModel
  implements ITr2StateMachineState {
  @io.persist
  @type.list("ITr2ControllerAction")
  actions: ITr2ControllerAction[] = [];

  @io.persist
  @type.list("Tr2StateMachineTransition")
  transitions: ITr2StateMachineTransition[] = [];

  @io.notify
  @io.persist
  @type.objectRef("ITr2StateMachineStateFinalizer")
  finalizer: ITr2StateMachineStateFinalizer | null = null;

  @io.persist
  @type.string
  name = "";

  #stateMachine: ITr2StateMachine | null = null;
  #isActive = false;
  #isFinalizing = false;
  #hasBeenVetoed = false;
  #transitionVariableMask = 0n;

  /**
   * Relinks the finalizer after it is modified.
   */
  @carbon.method
  @impl.implemented
  OnModified(_value: unknown = null): boolean {
    const controller = this.#stateMachine?.GetController?.() ?? null;
    if (this.finalizer && controller) {
      this.finalizer.Link?.(controller);
    }
    return true;
  }

  /**
   * Handles Carbon list notifications for action and transition lists.
   */
  @carbon.method
  @impl.implemented
  OnListModified(
    event: number,
    _key = 0,
    _key2 = 0,
    value: unknown = null,
    list: readonly unknown[] | null = null,
  ): void {
    if (list === this.actions) {
      this.#onActionListModified(event, value);
    } else if (list === this.transitions) {
      this.#onTransitionListModified(event, value);
    }
  }

  /**
   * Links transitions, actions, and the finalizer to a state machine.
   */
  @carbon.method
  @impl.adapted
  Link(stateMachine: ITr2StateMachine): void {
    this.Unlink();

    this.#stateMachine = stateMachine;
    this.UpdateVariableMask();

    for (const transition of this.transitions) {
      transition.Link?.(this);
    }
    this.UpdateVariableMask();

    const controller = this.#getController();
    if (controller) {
      for (const action of this.actions) {
        action.Link?.(controller);
      }
      this.finalizer?.Link?.(controller);
    }
  }

  /**
   * Recomputes the combined transition variable mask.
   */
  @carbon.method
  @impl.implemented
  UpdateVariableMask(): void {
    this.#transitionVariableMask = 0n;
    let hasMask = true;
    for (const transition of this.transitions) {
      const mask = ToBigIntMask(transition.GetVariableMask?.() ?? 0n);
      if (mask === 0n) {
        hasMask = false;
      } else {
        this.#transitionVariableMask |= mask;
      }
    }
    if (!hasMask) {
      this.#transitionVariableMask = 0n;
    }
  }

  /**
   * Unlinks transitions, actions, and the finalizer.
   */
  @carbon.method
  @impl.implemented
  Unlink(reason: UnlinkReasonValue = UnlinkReason.UNLINKING): void {
    if (!this.#stateMachine) {
      return;
    }

    if (reason !== UnlinkReason.DELETING) {
      this.Stop();
    }

    this.#stateMachine = null;
    for (const transition of this.transitions) {
      transition.Unlink?.();
    }
    for (const action of this.actions) {
      action.Unlink?.();
    }
    this.finalizer?.Unlink?.();
  }

  /**
   * Starts all actions.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController | null = this.#getController()): void {
    if (this.#isActive) {
      return;
    }

    if (!controller) {
      return;
    }

    for (const action of this.actions) {
      action.Start?.(controller);
    }
    this.#isActive = true;
    this.#isFinalizing = false;
    this.#hasBeenVetoed = false;
  }

  /**
   * Stops all actions.
   */
  @carbon.method
  @impl.adapted
  Stop(controller: ITr2ActionController | null = this.#getController()): void {
    if (!this.#isActive || this.#isFinalizing) {
      return;
    }

    if (controller) {
      for (const action of this.actions) {
        action.Stop?.(controller);
      }
    }

    if (
      this.finalizer &&
      controller &&
      !this.finalizer.CanTransition(controller)
    ) {
      this.#isFinalizing = true;
      return;
    }

    this.#isActive = false;
  }

  /**
   * Updates transitions and returns the next state when one activates.
   */
  @carbon.method
  @impl.adapted
  Update(dirtyVariables: bigint | number = 0n): ITr2StateMachineState | null {
    if (!this.#isActive) {
      return null;
    }

    const controller = this.#getController();
    if (!controller) {
      return null;
    }

    if (this.#isFinalizing) {
      const next = this.#getNextState();
      if (!next) {
        this.#isActive = false;
        this.Start(controller);
      }
      if (!this.finalizer || this.finalizer.CanTransition(controller)) {
        return next;
      }
      return null;
    }

    if (this.#hasBeenVetoed) {
      dirtyVariables = TR2_DIRTY_ALL;
    }
    if (
      this.#transitionVariableMask !== 0n &&
      !DirtyMaskMatches(this.#transitionVariableMask, dirtyVariables)
    ) {
      return null;
    }

    for (const transition of this.transitions) {
      const destination = transition.GetDestination?.() ?? null;
      const canTransition = transition.CanActivate?.(dirtyVariables) ?? false;

      if (canTransition && destination) {
        for (const action of this.actions) {
          if (
            action.CanTransition &&
            !action.CanTransition()
          ) {
            this.#hasBeenVetoed = true;
            return null;
          }
        }

        this.Stop(controller);
        if (this.#isFinalizing) {
          return null;
        }
        return destination;
      }
    }

    return null;
  }

  /**
   * Rebases action simulation time.
   */
  @carbon.method
  @impl.implemented
  RebaseSimTime(diff: number): void {
    for (const action of this.actions) {
      action.RebaseSimTime?.(diff);
    }
  }

  /**
   * Gets the linked state machine.
   */
  @carbon.method
  @impl.implemented
  GetStateMachine(): ITr2StateMachine | null {
    return this.#stateMachine;
  }

  /**
   * Gets the authored state name.
   */
  @carbon.method
  @impl.implemented
  GetName(): string {
    return this.name;
  }

  /**
   * Checks whether actions and the finalizer allow transition.
   */
  CanTransition(
    controller: ITr2ActionController | null = this.#getController(),
  ): boolean {
    for (const action of this.actions) {
      if (
        action.CanTransition &&
        !action.CanTransition()
      ) {
        this.#hasBeenVetoed = true;
        return false;
      }
    }

    return !this.finalizer ||
      !controller ||
      this.finalizer.CanTransition(controller);
  }

  #getNextState(): ITr2StateMachineState | null {
    for (const transition of this.transitions) {
      const destination = transition.GetDestination?.() ?? null;
      if (transition.CanActivate?.(TR2_DIRTY_ALL) && destination) {
        return destination;
      }
    }
    return null;
  }

  #getController(): ITr2ActionController | null {
    return this.#stateMachine?.GetController?.() ?? null;
  }

  #onActionListModified(event: number, value: unknown): void {
    const action = asAction(value);
    const controller = this.#getController();
    switch (event & BELIST_EVENTMASK) {
      case BELIST_INSERTED:
        if (controller && action) {
          action.Link?.(controller);
          if (this.#isActive) {
            action.Start?.(controller);
          }
        }
        break;

      case BELIST_REMOVED:
        if (action) {
          if (controller && this.#isActive) {
            action.Stop?.(controller);
          }
          action.Unlink?.();
        }
        break;
    }
  }

  #onTransitionListModified(event: number, value: unknown): void {
    const transition = asTransition(value);
    switch (event & BELIST_EVENTMASK) {
      case BELIST_INSERTED:
        if (this.#stateMachine && transition) {
          transition.Link?.(this);
          this.UpdateVariableMask();
        }
        break;

      case BELIST_REMOVED:
        if (transition) {
          transition.Unlink?.();
          this.UpdateVariableMask();
        }
        break;
    }
  }
}

function asAction(value: unknown): ITr2ControllerAction | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as ITr2ControllerAction;
}

function asTransition(value: unknown): ITr2StateMachineTransition | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as ITr2StateMachineTransition;
}

function ToBigIntMask(value: bigint | number): bigint {
  return typeof value === "bigint" ? value : BigInt(value);
}

function DirtyMaskMatches(
  mask: bigint,
  dirtyVariables: bigint | number,
): boolean {
  return (mask & ToBigIntMask(dirtyVariables)) !== 0n;
}
