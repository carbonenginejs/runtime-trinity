// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetExternalControllerVariable.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetExternalControllerVariable.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  GetControllerOwner,
  HasFunction,
  HasProperty,
  ToNumber,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({
  className: "Tr2ActionSetExternalControllerVariable",
  family: "controllers",
})
export class Tr2ActionSetExternalControllerVariable extends CjsModel
  implements ITr2ControllerAction {
  @io.read
  @type.unknown
  destination: unknown = null;

  @io.notify
  @io.persist
  @type.string
  destinationOwner = "";

  @io.persist
  @type.string
  variable = "";

  @io.persist
  @type.float32
  value = 0;

  @io.persist
  @type.string
  sourceVariable = "";

  @io.persist
  @type.boolean
  startControllers = false;

  #controller: ITr2ActionController | null = null;

  /**
   * Links to the destination owner.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#controller = controller;
    this.#linkToDestinationOwner();
  }

  /**
   * Clears the destination owner.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.destination = null;
    this.#controller = null;
  }

  /**
   * Sets the external controller variable.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this.#controller as ITr2ActionController,
  ): void {
    if (!controller) {
      return;
    }
    this.#controller = controller;
    if (!this.destination) {
      this.#linkToDestinationOwner();
    }

    const value = this.sourceVariable
      ? ToNumber(
        this.#controller?.GetFloatVariableByName?.(this.sourceVariable),
        this.value,
      )
      : this.value;
    if (!this.IsDestinationValid()) {
      return;
    }
    if (this.startControllers) {
      CallTarget(this.destination, "StartControllers");
    }
    SetControllerVariable(
      this.destination,
      this.variable,
      value,
    );
  }

  /**
   * Relinks the destination when authored fields change.
   */
  @carbon.method
  @impl.adapted
  OnModified(value: unknown = null): boolean {
    if (
      value === null || value === "destinationOwner" ||
      value === this.destinationOwner
    ) {
      this.#linkToDestinationOwner();
    }
    return true;
  }

  /**
   * Checks whether the destination owner resolved.
   */
  @carbon.method
  @impl.implemented
  IsDestinationValid(): boolean {
    return !!this.destination;
  }

  /**
   * Checks whether a target variable name is authored.
   */
  IsVariableValid(): boolean {
    return !!this.variable;
  }

  #linkToDestinationOwner(): void {
    this.destination = null;
    if (!this.#controller) {
      return;
    }

    const owner = GetControllerOwner(this.#controller);
    const roots = GetBindingRoots(owner);
    const destinationOwner = this.destinationOwner.toLowerCase();
    if (!destinationOwner) {
      return;
    }

    for (const [name, value] of roots) {
      if (name.toLowerCase() === destinationOwner) {
        this.destination = value;
        return;
      }
    }
  }
}

function SetControllerVariable(
  destination: unknown,
  variable: string,
  value: number,
): boolean {
  if (!destination || !variable) {
    return false;
  }
  if (HasFunction(destination, "SetControllerVariable")) {
    destination.SetControllerVariable(variable, value);
    return true;
  }
  return false;
}

function GetBindingRoots(owner: unknown): Array<[string, unknown]> {
  const roots = CallTarget(owner, "GetBindingRoots");
  if (Array.isArray(roots)) {
    return roots.map((entry): [string, unknown] => [
      String(entry[0] ?? ""),
      entry[1],
    ]);
  }
  if (roots instanceof Map) {
    return Array.from(roots.entries()).map(([name, value]) => [
      String(name),
      value,
    ]);
  }
  if (HasProperty(owner, "bindingRoots")) {
    return Object.entries(owner.bindingRoots as Record<string, unknown>);
  }
  if (roots && typeof roots === "object") {
    return Object.entries(roots as Record<string, unknown>);
  }
  return [];
}
