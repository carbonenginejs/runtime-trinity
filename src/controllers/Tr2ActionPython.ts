// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPython.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPython.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  GetControllerActualTimeSeconds,
  GetControllerFrameTimeSeconds,
} from "./contracts.ts";
import {
  CjsActionPythonStateToBytes,
  CjsCreateActionPythonInstance,
} from "./CjsActionPythonHost.ts";
import type { CjsActionPythonInstance } from "./CjsActionPythonHost.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
  ITr2Updateable,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionPython", family: "controllers" })
export class Tr2ActionPython extends CjsModel implements ITr2ControllerAction {
  @io.notify
  @io.persist
  @type.string
  module = "";

  @io.notify
  @io.persist
  @type.string
  className = "";

  @io.persistOnly
  @type.typedArray("Uint8Array")
  state: Uint8Array | null = null;

  #controller: ITr2ActionController | null = null;
  #instance: CjsActionPythonInstance | null = null;
  #loadedState: Uint8Array | null = null;
  #isPlaying = false;
  #prevRealTime = 0;
  #prevSimTime = 0;

  /**
   * Initializes the host-provided action instance.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.#ensureInstance();
    return true;
  }

  /**
   * Recreates the action instance when authoring fields change.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    const controller = this.#controller;
    const wasPlaying = this.#isPlaying;

    if (controller) {
      if (wasPlaying) {
        this.Stop(controller);
      }
      this.Unlink();
    }

    this.#instance = null;
    this.#loadedState = null;
    this.#ensureInstance();

    if (controller) {
      this.Link(controller);
      if (wasPlaying) {
        this.Start(controller);
      }
    }

    return true;
  }

  /**
   * Links this action to a controller and notifies the host instance.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#controller = controller;
    const instance = this.#ensureInstance();
    instance?.OnLink?.(controller.GetOwner?.() ?? null, controller);
  }

  /**
   * Unlinks this action and notifies the host instance.
   */
  @carbon.method
  @impl.adapted
  Unlink(): void {
    this.#controller = null;
    this.#instance?.OnUnlink?.();
  }

  /**
   * Starts the action and registers for updates when the host instance supports them.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this
      .#controller as ITr2ActionController,
  ): void {
    if (!controller) {
      return;
    }

    this.#controller = controller;
    this.#isPlaying = true;

    const instance = this.#ensureInstance();
    if (instance?.OnUpdate) {
      controller.RegisterUpdateable?.(this as unknown as ITr2Updateable);
    }

    instance?.OnStart?.(controller.GetOwner?.() ?? null, controller);
    this.#prevRealTime = GetControllerActualTimeSeconds();
    this.#prevSimTime = GetControllerFrameTimeSeconds();
  }

  /**
   * Stops the action and unregisters updates.
   */
  @carbon.method
  @impl.adapted
  Stop(
    controller: ITr2ActionController = this
      .#controller as ITr2ActionController,
  ): void {
    if (!controller) {
      return;
    }

    this.#isPlaying = false;
    controller.UnRegisterUpdateable?.(this as unknown as ITr2Updateable);
    this.#instance?.OnStop?.(controller.GetOwner?.() ?? null, controller);
  }

  /**
   * Updates the host instance with Carbon-style real and simulation deltas.
   */
  @carbon.method
  @impl.adapted
  Update(realTime: number, simTime: number): void {
    const controller = this.#controller;
    const instance = this.#instance;
    if (!controller || !instance?.OnUpdate) {
      return;
    }

    const realDt = realTime - this.#prevRealTime;
    const simDt = simTime - this.#prevSimTime;
    instance.OnUpdate(controller.GetOwner?.() ?? null, controller, realDt, simDt);
    this.#prevRealTime = realTime;
    this.#prevSimTime = simTime;
  }

  /**
   * Gets the cached JS-side host instance.
   */
  @carbon.method
  @impl.adapted
  GetInstance(): CjsActionPythonInstance | null {
    return this.#instance;
  }

  /**
   * Gets custom persisted host state.
   */
  @carbon.method
  @impl.adapted
  GetWriteBufferAndSize(_memberName = "state"): Uint8Array | null {
    const bytes = CjsActionPythonStateToBytes(this.#instance?.OnSave?.());
    if (bytes) {
      this.state = bytes;
    }
    return bytes;
  }

  /**
   * Releases a custom persistence buffer.
   */
  @carbon.method
  @impl.adapted
  ReleaseWriteBuffer(_buffer: Uint8Array | null): void {
  }

  /**
   * Allocates a custom persistence read buffer.
   */
  @carbon.method
  @impl.adapted
  AllocateReadBuffer(_memberName: string, bufferSize: number): Uint8Array {
    return new Uint8Array(bufferSize);
  }

  /**
   * Applies custom persisted host state.
   */
  @carbon.method
  @impl.adapted
  SetBufferAndSize(
    _memberName: string,
    buffer: Uint8Array,
    bufferSize = buffer.byteLength,
  ): void {
    this.state = buffer.slice(0, bufferSize);
    this.#loadedState = null;
    this.#ensureInstance();
  }

  #ensureInstance(): CjsActionPythonInstance | null {
    if (!this.#instance) {
      this.#instance = CjsCreateActionPythonInstance(
        this.module,
        this.className,
        this,
      );
    }

    if (
      this.#instance &&
      this.state &&
      this.state !== this.#loadedState
    ) {
      this.#instance.OnLoad?.(this.state);
      this.#loadedState = this.state;
    }

    return this.#instance;
  }
}
