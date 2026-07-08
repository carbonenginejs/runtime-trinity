// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2Controller.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2Controller.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { UnlinkReason } from "./enums.ts";
import type { UnlinkReasonValue } from "./enums.ts";
import {
  BELIST_EVENTMASK,
  BELIST_INSERTED,
  BELIST_REMOVED,
  GetControllerActualTimeSeconds,
  GetControllerFrameTimeSeconds,
  GetControllerTimeSeconds,
  TR2_DIRTY_ALL,
} from "./contracts.ts";
import type {
  ITr2StateMachine,
  Tr2ControllerCallback,
  Tr2ControllerVariableInfo,
  Tr2DirtyMaskDestination,
} from "./contracts.ts";
import type {
  ITr2ActionController,
  ITr2Updateable,
  Tr2BindingPathRoot,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";
import { CjsEveThrottleableState } from "../eve/CjsEveThrottleable.ts";
import { Tr2ControllerEventHandler } from "./Tr2ControllerEventHandler.ts";
import type { Tr2ControllerFloatVariable } from "./Tr2ControllerFloatVariable.ts";

@type.define({ className: "Tr2Controller", family: "controllers" })
export class Tr2Controller extends CjsModel implements ITr2ActionController {
  @io.persist
  @type.list("Tr2StateMachine")
  stateMachines: ITr2StateMachine[] = [];

  @io.persist
  @type.list("Tr2ControllerFloatVariable")
  variables: Tr2ControllerFloatVariable[] = [];

  @io.persist
  @type.list("Tr2ControllerEventHandler")
  eventHandlers: Tr2ControllerEventHandler[] = [];

  @io.read
  @type.boolean
  isPlaying = false;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.boolean
  isShared = false;

  currentUpdateFrequency = 10;

  updateThrottle = true;

  maxUpdateFrequency = 20;

  minUpdateFrequency = 2;

  #throttle = new CjsEveThrottleableState();
  #updateables = new Set<ITr2Updateable>();
  #callbacks: { name: string; callback: Tr2ControllerCallback }[] = [];
  #variableView: Tr2ControllerVariableInfo[] = [];
  #variableData = new Float32Array(0);
  #tempArena = new ArrayBuffer(0);
  #dirtyVariables: Tr2DirtyMaskDestination = { value: TR2_DIRTY_ALL };
  #bindingPathRoots: Tr2BindingPathRoot[] = [];
  #owner: object | null = null;
  #time = 0;
  #currentFrameTime = 0;

  #callbackCount = 0;

  get callbackCount(): number {
    return this.#callbackCount;
  }
  set callbackCount(value: number) {
    this.#callbackCount = value;
  }

  /**
   * Handles Carbon list notifications for controller child lists.
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
    if (list === this.stateMachines) {
      this.#onStateMachineListModified(event, value);
    } else if (list === this.eventHandlers) {
      this.#onEventHandlerListModified(event, value);
    } else if (list === this.variables) {
      this.#onVariableListModified(event);
    }
  }

  /**
   * Links the controller to an owner and prepares the variable buffer.
   */
  @carbon.method
  @impl.implemented
  Link(owner: object): void {
    this.Unlink();

    this.#variableView = [];
    this.#variableData = new Float32Array(this.variables.length);

    for (let i = 0; i < this.variables.length; i++) {
      const variable = this.variables[i];
      this.#variableView.push({
        name: variable.GetName(),
        index: i,
        offset: i * Float32Array.BYTES_PER_ELEMENT,
      });
      variable.SetDestinationBuffer(this.#variableData, i);
      if (i < 64) {
        variable.SetDirtyMask(this.#dirtyVariables, 1n << BigInt(i));
      } else {
        variable.SetDirtyMask(null, 0);
      }
    }

    this.#owner = owner;
    for (const stateMachine of this.stateMachines) {
      stateMachine.Link?.(this);
    }
    for (const handler of this.eventHandlers) {
      handler.Link(this);
    }
  }

  /**
   * Unlinks from the owner and clears runtime bindings.
   */
  @carbon.method
  @impl.implemented
  Unlink(reason: UnlinkReasonValue = UnlinkReason.UNLINKING): void {
    if (!this.#owner) {
      return;
    }

    if (reason !== UnlinkReason.DELETING) {
      this.Stop();
    }

    for (const variable of this.variables) {
      variable.SetDestinationBuffer(null);
      variable.SetDirtyMask(null, 0);
    }
    for (const stateMachine of this.stateMachines) {
      stateMachine.Unlink?.(reason);
    }
    for (const handler of this.eventHandlers) {
      handler.Unlink();
    }

    this.#bindingPathRoots = [];
    this.#owner = null;
  }

  /**
   * Relinks the controller to its current owner.
   */
  @carbon.method
  @impl.implemented
  ReLink(): void {
    const owner = this.#owner;
    if (owner) {
      this.Link(owner);
    }
  }

  /**
   * Checks whether this controller is linked to an owner.
   */
  @carbon.method
  @impl.implemented
  IsLinked(): boolean {
    return this.#owner !== null;
  }

  /**
   * Starts all state machines.
   */
  @carbon.method
  @impl.implemented
  Start(): void {
    if (this.isPlaying) {
      this.Stop();
    }

    this.#dirtyVariables.value = TR2_DIRTY_ALL;
    this.#currentFrameTime = GetControllerFrameTimeSeconds();
    for (const stateMachine of this.stateMachines) {
      stateMachine.Start?.();
    }
    this.isPlaying = true;
  }

  /**
   * Stops all active state machines.
   */
  @carbon.method
  @impl.implemented
  Stop(): void {
    if (!this.isPlaying) {
      return;
    }

    for (const stateMachine of this.stateMachines) {
      stateMachine.Stop?.();
    }
    this.isPlaying = false;
  }

  /**
   * Updates state machines and registered updateables.
   */
  @carbon.method
  @impl.adapted
  Update(normalizedUpdateFrequency = 0.5): void {
    if (!this.isPlaying) {
      return;
    }

    const actualTime = GetControllerActualTimeSeconds();
    if (this.#throttle.ShouldSkipUpdate(
      this,
      normalizedUpdateFrequency,
      actualTime,
    )) {
      return;
    }

    this.#currentFrameTime = GetControllerFrameTimeSeconds();
    this.#time = this.#currentFrameTime;
    const dirtyVariables = this.#dirtyVariables.value;
    this.#dirtyVariables.value = 0n;

    for (const stateMachine of this.stateMachines) {
      stateMachine.Update?.(dirtyVariables);
    }

    if (this.#updateables.size) {
      for (const updateable of this.#updateables) {
        updateable.Update?.(actualTime, this.#currentFrameTime);
      }
    }
  }

  /**
   * Sets a named float variable.
   */
  @carbon.method
  @impl.implemented
  SetVariable(name: string, value: number): void {
    this.SetVariableValue(name, value);
  }

  /**
   * Executes event handlers matching a named event.
   */
  @carbon.method
  @impl.implemented
  HandleEvent(eventName: string): void {
    if (!this.isPlaying) {
      return;
    }

    for (const handler of this.eventHandlers) {
      if (handler.GetName() === eventName) {
        handler.Execute(this);
      }
    }
  }

  /**
   * Gets the linked owner.
   */
  @carbon.method
  @impl.implemented
  GetOwner(): object | null {
    return this.#owner;
  }

  /**
   * Gets elapsed controller time in seconds.
   */
  GetTime(): number {
    return this.#time;
  }

  /**
   * Gets the current frame simulation time for JS action adapters.
   */
  CjsGetCurrentFrameTime(): number {
    return this.#currentFrameTime || GetControllerTimeSeconds();
  }

  /**
   * Gets a controller variable by name.
   */
  @carbon.method
  @impl.implemented
  GetVariableByName(name: string): Tr2ControllerFloatVariable | null {
    return this.variables.find((variable) => variable.GetName() === name) ??
      null;
  }

  /**
   * Gets a named float variable value.
   */
  @carbon.method
  @impl.implemented
  GetFloatVariableByName(name: string): number | undefined {
    return this.GetVariableByName(name)?.GetValue();
  }

  /**
   * Gets a named variable value, or a fallback when absent.
   */
  GetVariableValue(name: string, fallback = 0): number | undefined {
    return this.GetVariableByName(name)?.GetValue() ?? fallback;
  }

  /**
   * Sets a named variable value.
   */
  SetVariableValue(name: string, value: number): boolean {
    const variable = this.GetVariableByName(name);
    if (!variable) {
      return false;
    }

    variable.SetValue(value);
    return true;
  }

  /**
   * Appends expression metadata for controller variables.
   */
  @carbon.method
  @impl.implemented
  GetExpressionTermInfo(out: Tr2ExpressionTermInfoLike[]): void {
    for (const variable of this.variables) {
      out.push({
        group: "Variables",
        name: variable.GetName(),
        description: "controller variable",
        kind: "variable",
      });
    }
  }

  /**
   * Gets the controller variable list.
   */
  @carbon.method
  @impl.implemented
  GetVariables(): Tr2ControllerFloatVariable[] {
    return this.variables;
  }

  /**
   * Gets parser-facing variable metadata.
   */
  @carbon.method
  @impl.implemented
  GetVariableView(): readonly Tr2ControllerVariableInfo[] {
    return this.#variableView;
  }

  /**
   * Gets the parser-facing variable buffer.
   */
  @carbon.method
  @impl.implemented
  GetVariableBuffer(): Float32Array {
    return this.#variableData;
  }

  /**
   * Ensures the temporary expression arena has at least the supplied byte size.
   */
  @carbon.method
  @impl.implemented
  EnsureTempArenaSize(size: number): void {
    if (this.#tempArena.byteLength < size) {
      this.#tempArena = new ArrayBuffer(size);
    }
  }

  /**
   * Gets the temporary expression arena.
   */
  @carbon.method
  @impl.implemented
  GetTempArena(): ArrayBuffer {
    return this.#tempArena;
  }

  /**
   * Gets dynamic binding path roots.
   */
  @carbon.method
  @impl.adapted
  GetBindingPathRoots(): readonly Tr2BindingPathRoot[] {
    if (!this.#bindingPathRoots.length) {
      if (this.#owner) {
        this.#bindingPathRoots.push(["Owner", this.#owner]);
      }
      for (const variable of this.variables) {
        this.#bindingPathRoots.push([variable.GetName(), variable]);
      }
    }
    return this.#bindingPathRoots;
  }

  /**
   * Registers an updateable object.
   */
  @carbon.method
  @impl.implemented
  RegisterUpdateable(updateable: ITr2Updateable): void {
    this.#updateables.add(updateable);
  }

  /**
   * Unregisters an updateable object.
   */
  @carbon.method
  @impl.implemented
  UnRegisterUpdateable(updateable: ITr2Updateable): void {
    this.#updateables.delete(updateable);
  }

  /**
   * Runs callbacks registered for a named callback.
   */
  @carbon.method
  @impl.adapted
  Callback(callbackName: string): boolean {
    if (!this.isPlaying || !this.#callbacks.length) {
      return false;
    }

    let called = false;
    for (const entry of this.#callbacks) {
      if (entry.name === callbackName) {
        entry.callback();
        called = true;
      }
    }
    return called;
  }

  /**
   * Registers a named callback.
   */
  @carbon.method
  @impl.adapted
  RegisterCallback(
    callbackName: string,
    callback: Tr2ControllerCallback,
  ): boolean {
    if (!callbackName) {
      return false;
    }
    this.#callbacks.push({ name: callbackName, callback });
    this.callbackCount = this.#callbacks.length;
    return true;
  }

  /**
   * Clears all registered callbacks.
   */
  @carbon.method
  @impl.implemented
  ClearCallbacks(): void {
    this.#callbacks = [];
    this.callbackCount = 0;
  }

  /**
   * Gets expression evaluation context.
   */
  GetExpressionContext(
    owner: object | null = this.#owner,
    stateMachine: object | null = null,
    extra: Record<string, unknown> = {},
  ): Record<string, unknown> {
    return {
      ...extra,
      controller: this,
      owner,
      stateMachine,
      time: this.#time,
    };
  }

  #onStateMachineListModified(event: number, value: unknown): void {
    const stateMachine = asStateMachine(value);
    switch (event & BELIST_EVENTMASK) {
      case BELIST_INSERTED:
        if (this.#owner && stateMachine) {
          stateMachine.Link?.(this);
          if (this.isPlaying) {
            stateMachine.Start?.();
          }
        }
        break;

      case BELIST_REMOVED:
        if (stateMachine) {
          if (this.isPlaying) {
            stateMachine.Stop?.();
          }
          stateMachine.Unlink?.();
        }
        break;
    }
  }

  #onEventHandlerListModified(event: number, value: unknown): void {
    const handler = value instanceof Tr2ControllerEventHandler ? value : null;
    switch (event & BELIST_EVENTMASK) {
      case BELIST_INSERTED:
        if (this.#owner && handler) {
          handler.Link(this);
        }
        break;

      case BELIST_REMOVED:
        handler?.Unlink();
        break;
    }
  }

  #onVariableListModified(event: number): void {
    const maskedEvent = event & BELIST_EVENTMASK;
    if (
      maskedEvent !== BELIST_INSERTED &&
      maskedEvent !== BELIST_REMOVED
    ) {
      return;
    }

    const owner = this.#owner;
    if (owner) {
      this.Unlink();
      this.Link(owner);
    }
  }
}

function asStateMachine(value: unknown): ITr2StateMachine | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as ITr2StateMachine;
}
