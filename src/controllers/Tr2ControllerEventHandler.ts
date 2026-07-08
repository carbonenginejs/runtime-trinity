// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerEventHandler.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerEventHandler.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  BELIST_EVENTMASK,
  BELIST_INSERTED,
  BELIST_REMOVED,
} from "./contracts.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ControllerEventHandler", family: "controllers" })
export class Tr2ControllerEventHandler extends CjsModel {
  @io.persist
  @type.list("ITr2ControllerAction")
  actions: ITr2ControllerAction[] = [];

  @io.persist
  @type.string
  name = "";

  #controller: ITr2ActionController | null = null;

  /**
   * Handles Carbon list notifications for inserted and removed actions.
   */
  @carbon.method
  @impl.implemented
  OnListModified(
    event: number,
    _key = 0,
    _key2 = 0,
    value: unknown = null,
    list: readonly ITr2ControllerAction[] | null = this.actions,
  ): void {
    if (list !== this.actions) {
      return;
    }

    const action = asControllerAction(value);
    switch (event & BELIST_EVENTMASK) {
      case BELIST_INSERTED:
        if (this.#controller && action) {
          action.Link?.(this.#controller);
        }
        break;

      case BELIST_REMOVED:
        action?.Unlink?.();
        break;
    }
  }

  /**
   * Links all actions to the supplied action controller.
   */
  @carbon.method
  @impl.implemented
  Link(controller: ITr2ActionController): void {
    this.Unlink();
    this.#controller = controller;
    for (const action of this.actions) {
      action.Link?.(controller);
    }
  }

  /**
   * Unlinks all actions from the current controller.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    if (!this.#controller) {
      return;
    }

    for (const action of this.actions) {
      action.Unlink?.();
    }
  }

  /**
   * Gets the authored handler name.
   */
  @carbon.method
  @impl.implemented
  GetName(): string {
    return this.name;
  }

  /**
   * Executes all actions by starting them first, then stopping them.
   */
  @carbon.method
  @impl.implemented
  Execute(controller: ITr2ActionController): void {
    for (const action of this.actions) {
      action.Start?.(controller);
    }

    for (const action of this.actions) {
      action.Stop?.(controller);
    }
  }
}

function asControllerAction(value: unknown): ITr2ControllerAction | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as ITr2ControllerAction;
}
