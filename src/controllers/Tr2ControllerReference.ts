// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerReference.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerReference.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { UnlinkReason } from "./enums.ts";
import type { UnlinkReasonValue } from "./enums.ts";
import type { ITr2Controller } from "./ITr2ControllerAction.ts";
import { CjsResolveControllerResource } from "./CjsControllerResourceHost.ts";

@type.define({ className: "Tr2ControllerReference", family: "controllers" })
export class Tr2ControllerReference extends CjsModel implements ITr2Controller {
  @io.read
  @type.objectRef("ITr2Controller")
  controller: ITr2Controller | null = null;

  @io.notify
  @io.persist
  @type.path
  path = "";

  #owner: object | null = null;

  /**
   * Initializes the referenced controller when it is already assigned.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.ResolveController();
    return true;
  }

  /**
   * Handles path changes. JS runtime does not own resource loading yet.
   */
  @carbon.method
  @impl.adapted
  OnModified(value: unknown = null): boolean {
    if (value === null || value === "path") {
      this.controller = null;
      this.ResolveController();
    }
    if (this.controller && this.#owner) {
      this.controller.Link?.(this.#owner);
    }
    return true;
  }

  /**
   * Links the referenced controller to the same owner.
   */
  @carbon.method
  @impl.implemented
  Link(owner: object): void {
    this.#owner = owner;
    this.controller?.Link?.(owner);
  }

  /**
   * Unlinks the referenced controller.
   */
  @carbon.method
  @impl.implemented
  Unlink(reason: UnlinkReasonValue = UnlinkReason.UNLINKING): void {
    this.controller?.Unlink?.(reason);
    this.#owner = null;
  }

  /**
   * Checks whether this reference is linked to an owner.
   */
  @carbon.method
  @impl.implemented
  IsLinked(): boolean {
    return this.#owner !== null;
  }

  /**
   * Starts the referenced controller.
   */
  @carbon.method
  @impl.implemented
  Start(): void {
    this.controller?.Start?.();
  }

  /**
   * Stops the referenced controller.
   */
  @carbon.method
  @impl.implemented
  Stop(): void {
    this.controller?.Stop?.();
  }

  /**
   * Updates the referenced controller.
   */
  @carbon.method
  @impl.implemented
  Update(normalizedUpdateFrequency = 0): void {
    this.controller?.Update?.(normalizedUpdateFrequency);
  }

  /**
   * Sets a variable on the referenced controller.
   */
  @carbon.method
  @impl.implemented
  SetVariable(name: string, value: number): void {
    this.controller?.SetVariable?.(name, value);
  }

  /**
   * Handles an event on the referenced controller.
   */
  @carbon.method
  @impl.implemented
  HandleEvent(eventName: string): void {
    this.controller?.HandleEvent?.(eventName);
  }

  /**
   * Gets the linked owner.
   */
  @carbon.method
  @impl.implemented
  GetOwner(): object | null {
    return this.#owner;
  }

  ResolveController(): void {
    if (!this.path) {
      this.controller = null;
      return;
    }

    this.controller = CjsResolveControllerResource(this.path, this.#owner);
  }
}
