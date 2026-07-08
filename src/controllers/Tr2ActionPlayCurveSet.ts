// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPlayCurveSet.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPlayCurveSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { GetControllerTimeSeconds } from "./contracts.ts";
import {
  CallTarget,
  GetControllerTime,
  GetControllerOwner,
  HasFunction,
  ToNumber,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
  ITr2Updateable,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionPlayCurveSet", family: "controllers" })
export class Tr2ActionPlayCurveSet extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  curveSetName = "";

  @io.persist
  @type.string
  rangeName = "";

  @io.persist
  @type.boolean
  syncToRange = false;

  #controller: ITr2ActionController | null = null;
  #startTime = 0;
  #prevTime = 0;
  #duration = 0;

  /**
   * Plays the configured curve set.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const owner = GetControllerOwner(controller);
    this.#controller = controller;
    this.#duration = 0;
    if (!this.#play(owner)) {
      return;
    }

    if (this.syncToRange && this.rangeName) {
      this.#duration = this.#getRangeDuration(owner);
      this.#startTime = GetControllerTime(controller, GetControllerTimeSeconds());
      this.#prevTime = this.#startTime;
      controller.RegisterUpdateable?.(this as unknown as ITr2Updateable);
    }
  }

  /**
   * Stops the configured curve set.
   */
  @carbon.method
  @impl.adapted
  Stop(controller: ITr2ActionController): void {
    const owner = GetControllerOwner(controller);
    controller.UnRegisterUpdateable?.(this as unknown as ITr2Updateable);
    if (this.#controller === controller) {
      this.#controller = null;
    }
    if (HasFunction(owner, "StopCurveSet")) {
      owner.StopCurveSet(this.curveSetName);
    }
  }

  /**
   * Rebases the sync-to-range time cursor.
   */
  @carbon.method
  @impl.implemented
  RebaseSimTime(diff: number): void {
    this.#startTime += diff;
    this.#prevTime += diff;
  }

  /**
   * Prevents transition until a synced range iteration has completed.
   */
  @carbon.method
  @impl.adapted
  CanTransition(): boolean {
    if (!this.syncToRange || this.#duration <= 0) {
      return true;
    }

    const now = GetControllerTimeSeconds();
    if (now === this.#startTime) {
      return true;
    }

    const previous = Math.floor(
      (this.#prevTime - this.#startTime) / this.#duration,
    );
    const current = Math.floor((now - this.#startTime) / this.#duration);
    return previous !== current;
  }

  /**
   * Stores the last update time for synced transitions.
   */
  @carbon.method
  @impl.implemented
  Update(_realTime: number, simTime: number): void {
    this.#prevTime = simTime;
  }

  #play(owner: unknown): boolean {
    if (HasFunction(owner, "PlayCurveSet")) {
      owner.PlayCurveSet(this.curveSetName, this.rangeName);
      return true;
    }

    return false;
  }

  #getRangeDuration(owner: unknown): number {
    const ownerDuration = CallTarget(
      owner,
      "GetRangeDuration",
      this.curveSetName,
      this.rangeName,
    );
    if (ownerDuration !== undefined) {
      return ToNumber(ownerDuration);
    }

    return 0;
  }
}
