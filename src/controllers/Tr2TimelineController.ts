// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2TimelineController.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2TimelineController.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  GetControllerActualTimeSeconds,
  GetControllerFrameTimeSeconds,
} from "./contracts.ts";
import type {
  Tr2ControllerCallback,
  Tr2ControllerVariableInfo,
} from "./contracts.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
  ITr2Updateable,
  Tr2BindingPathRoot,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";
import { CjsEveThrottleableState } from "../eve/CjsEveThrottleable.ts";
import type { Tr2ControllerEventHandler } from "./Tr2ControllerEventHandler.ts";
import type { Tr2ControllerFloatVariable } from "./Tr2ControllerFloatVariable.ts";
import { Tr2TimelineEntry } from "./Tr2TimelineEntry.ts";
import { UnlinkReason } from "./enums.ts";
import type { UnlinkReasonValue } from "./enums.ts";

@type.define({ className: "Tr2TimelineController", family: "controllers" })
export class Tr2TimelineController extends CjsModel
  implements ITr2ActionController {
  @io.persistOnly
  @type.list("ITr2ControllerAction")
  actions: ITr2ControllerAction[] = [];

  @io.persistOnly
  @type.list("Tr2TimelineEntry")
  entries: Tr2TimelineEntry[] = [];

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.list("Tr2ControllerFloatVariable")
  variables: Tr2ControllerFloatVariable[] = [];

  @io.persist
  @type.list("Tr2ControllerEventHandler")
  eventHandlers: Tr2ControllerEventHandler[] = [];

  @io.persist
  @type.float32
  timeScale = 1;

  @io.read
  @type.boolean
  isPlaying = false;

  @io.read
  @type.boolean
  isPaused = false;

  currentUpdateFrequency = 10;

  updateThrottle = true;

  maxUpdateFrequency = 20;

  minUpdateFrequency = 2;

  #throttle = new CjsEveThrottleableState();
  #owner: object | null = null;
  #time = 0;
  #lastUpdateTime = 0;
  #callbacks: { name: string; callback: Tr2ControllerCallback }[] = [];
  #updateables = new Set<ITr2Updateable>();
  #disabledTracks = new Set<number>();
  #variableView: Tr2ControllerVariableInfo[] = [];
  #variableData = new Float32Array(0);
  #tempArena = new ArrayBuffer(0);
  #bindingPathRoots: Tr2BindingPathRoot[] = [];


  /**
   * Links actions, variables, and event handlers to an owner.
   */
  @carbon.method
  @impl.adapted
  Link(owner: object): void {
    this.Unlink();
    this.#owner = owner;
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
      variable.SetDirtyMask(null, 0);
    }

    for (const action of this.actions) {
      action.Link?.(this);
    }
    for (const handler of this.eventHandlers) {
      handler.Link(this);
    }
  }

  /**
   * Unlinks runtime children and clears owner state.
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
    for (const action of this.actions) {
      action.Unlink?.();
    }
    for (const handler of this.eventHandlers) {
      handler.Unlink();
    }
    this.#bindingPathRoots = [];
    this.#owner = null;
  }

  /**
   * Checks whether this timeline is linked.
   */
  @carbon.method
  @impl.implemented
  IsLinked(): boolean {
    return this.#owner !== null;
  }

  /**
   * Starts actions already active at the current time.
   */
  @carbon.method
  @impl.adapted
  Start(): void {
    if (this.isPlaying) {
      this.Stop();
    }

    this.isPlaying = true;
    this.#lastUpdateTime = GetControllerFrameTimeSeconds();
    for (let i = 0; i < this.actions.length; i++) {
      const entry = this.#entryAt(i);
      if (entry && this.IsActionEnabled(i) && InRange(this.#time, entry)) {
        this.actions[i].Start?.(this);
      }
    }
  }

  /**
   * Stops currently active actions and resets timeline time.
   */
  @carbon.method
  @impl.adapted
  Stop(): void {
    if (!this.isPlaying) {
      return;
    }
    for (let i = 0; i < this.actions.length; i++) {
      const entry = this.#entryAt(i);
      if (entry && this.IsActionEnabled(i) && InRange(this.#time, entry)) {
        this.actions[i].Stop?.(this);
      }
    }
    this.isPlaying = false;
    this.#time = 0;
  }

  /**
   * Advances the timeline and toggles action activity.
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

    const frameTime = GetControllerFrameTimeSeconds();
    const dt = (frameTime - this.#lastUpdateTime) * this.timeScale;
    this.#lastUpdateTime = frameTime;

    if (!this.isPaused) {
      this.#setTime(this.#time + dt, true);
    }

    for (const updateable of this.#updateables) {
      updateable.Update?.(actualTime, frameTime);
    }
  }

  /**
   * Sets a named variable.
   */
  @carbon.method
  @impl.implemented
  SetVariable(name: string, value: number): void {
    this.variables.find((variable) => variable.GetName() === name)?.SetValue(
      value,
    );
  }

  /**
   * Handles a named event.
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
   * Invokes callbacks registered for a name.
   */
  @carbon.method
  @impl.adapted
  Callback(callbackName: string): boolean {
    if (!this.isPlaying) {
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
   * Gets named roots for controller binding paths.
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
   * Gets a float variable by name.
   */
  @carbon.method
  @impl.implemented
  GetFloatVariableByName(name: string): number | undefined {
    return this.variables.find((variable) => variable.GetName() === name)
      ?.GetValue();
  }

  /**
   * Appends expression metadata for variables.
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
   * Gets expression variable metadata.
   */
  @carbon.method
  @impl.implemented
  GetVariableView(): readonly Tr2ControllerVariableInfo[] {
    return this.#variableView;
  }

  /**
   * Gets expression variable data.
   */
  @carbon.method
  @impl.implemented
  GetVariableBuffer(): Float32Array {
    return this.#variableData;
  }

  /**
   * Ensures the expression temporary arena is large enough.
   */
  @carbon.method
  @impl.implemented
  EnsureTempArenaSize(size: number): void {
    if (this.#tempArena.byteLength < size) {
      this.#tempArena = new ArrayBuffer(size);
    }
  }

  /**
   * Gets the expression temporary arena.
   */
  @carbon.method
  @impl.implemented
  GetTempArena(): ArrayBuffer {
    return this.#tempArena;
  }

  /**
   * Rebases action sim time.
   */
  @carbon.method
  @impl.adapted
  OnSimClockRebase(oldTime: number, newTime: number): void {
    const diff = newTime - oldTime;
    this.#lastUpdateTime += diff;
    for (const action of this.actions) {
      action.RebaseSimTime?.(diff);
    }
  }

  /**
   * Gets action count.
   */
  @carbon.method
  @impl.implemented
  GetActionCount(): number {
    return this.actions.length;
  }

  /**
   * Gets an action by index.
   */
  @carbon.method
  @impl.adapted
  GetAction(index: number): ITr2ControllerAction | null {
    return this.actions[index] ?? null;
  }

  @carbon.method
  @impl.implemented
  GetActionStartTime(index: number): number {
    return this.#entryAt(index)?.startTime ?? 0;
  }

  @carbon.method
  @impl.implemented
  GetActionEndTime(index: number): number {
    return this.#entryAt(index)?.endTime ?? 0;
  }

  @carbon.method
  @impl.implemented
  GetActionTrackID(index: number): number {
    return this.#entryAt(index)?.trackID ?? 0;
  }

  @carbon.method
  @impl.adapted
  SetActionStartTime(index: number, startTime: number): boolean {
    if (index < 0 || index >= this.actions.length) {
      return false;
    }

    const entry = this.#entryAt(index);
    if (!entry) {
      return false;
    }
    if (this.isPlaying && this.IsActionEnabled(index)) {
      const wasActive = InRange(this.#time, entry);
      const isActive = InRange(this.#time, {
        startTime,
        endTime: entry.endTime,
      });
      if (wasActive && !isActive) {
        this.actions[index].Stop?.(this);
      } else if (!wasActive && isActive) {
        this.actions[index].Start?.(this);
      }
    }

    entry.startTime = startTime;
    return true;
  }

  @carbon.method
  @impl.adapted
  SetActionEndTime(index: number, endTime: number): boolean {
    if (index < 0 || index >= this.actions.length) {
      return false;
    }

    const entry = this.#entryAt(index);
    if (!entry) {
      return false;
    }
    if (this.isPlaying && this.IsActionEnabled(index)) {
      const wasActive = InRange(this.#time, entry);
      const isActive = InRange(this.#time, {
        startTime: entry.startTime,
        endTime,
      });
      if (wasActive && !isActive) {
        this.actions[index].Stop?.(this);
      } else if (!wasActive && isActive) {
        this.actions[index].Start?.(this);
      }
    }

    entry.endTime = endTime;
    return true;
  }

  @carbon.method
  @impl.adapted
  SetActionTrackID(index: number, trackID: number): boolean {
    if (index < 0 || index >= this.actions.length) {
      return false;
    }

    const wasEnabled = this.IsActionEnabled(index);
    const entry = this.#entryAt(index);
    if (!entry) {
      return false;
    }
    entry.trackID = trackID;
    const isEnabled = this.IsActionEnabled(index);

    if (this.isPlaying && wasEnabled !== isEnabled && InRange(this.#time, entry)) {
      if (isEnabled) {
        this.actions[index].Start?.(this);
      } else {
        this.actions[index].Stop?.(this);
      }
    }
    return true;
  }

  /**
   * Adds an action and entry.
   */
  @carbon.method
  @impl.adapted
  AddAction(
    action: ITr2ControllerAction | null,
    startTime: number,
    endTime: number,
    trackID = 0,
  ): void {
    if (!action) {
      return;
    }

    this.actions.push(action);
    const entry = new Tr2TimelineEntry();
    entry.startTime = startTime;
    entry.endTime = endTime;
    entry.trackID = trackID;
    this.entries.push(entry);
    if (this.#owner) {
      action.Link?.(this);
    }
    if (
      this.isPlaying && this.IsActionEnabled(this.actions.length - 1) &&
      InRange(this.#time, entry)
    ) {
      action.Start?.(this);
    }
  }

  /**
   * Removes an action by index.
   */
  @carbon.method
  @impl.adapted
  RemoveAction(index: number): boolean {
    if (index < 0 || index >= this.actions.length) {
      return false;
    }
    const action = this.actions[index];
    const entry = this.#entryAt(index);
    if (
      entry && this.isPlaying && this.IsActionEnabled(index) &&
      InRange(this.#time, entry)
    ) {
      action.Stop?.(this);
    }
    if (this.#owner) {
      action.Unlink?.();
    }
    this.actions.splice(index, 1);
    this.entries.splice(index, 1);
    return true;
  }

  /**
   * Checks whether the action's track is enabled.
   */
  @carbon.method
  @impl.implemented
  IsActionEnabled(index: number): boolean {
    const entry = this.#entryAt(index);
    return !!entry && !this.#disabledTracks.has(entry.trackID);
  }

  /**
   * Checks whether a track is enabled.
   */
  @carbon.method
  @impl.implemented
  IsTrackEnabled(trackID: number): boolean {
    return !this.#disabledTracks.has(trackID);
  }

  /**
   * Enables or disables a track.
   */
  @carbon.method
  @impl.adapted
  EnableTrack(trackID: number, enable: boolean): void {
    const wasEnabled = this.IsTrackEnabled(trackID);
    if (enable) {
      this.#disabledTracks.delete(trackID);
    } else {
      this.#disabledTracks.add(trackID);
    }
    if (this.isPlaying && wasEnabled !== enable) {
      for (let i = 0; i < this.actions.length; i++) {
        const entry = this.#entryAt(i);
        if (entry && entry.trackID === trackID && InRange(this.#time, entry)) {
          if (enable) {
            this.actions[i].Start?.(this);
          } else {
            this.actions[i].Stop?.(this);
          }
        }
      }
    }
  }

  /**
   * Registers a callback.
   */
  @carbon.method
  @impl.adapted
  RegisterCallback(name: string, callback: Tr2ControllerCallback): void {
    this.#callbacks.push({ name, callback });
  }

  /**
   * Clears callbacks.
   */
  @carbon.method
  @impl.implemented
  ClearCallbacks(): void {
    this.#callbacks = [];
  }

  /**
   * Gets current timeline time.
   */
  @carbon.method
  @impl.implemented
  GetTime(): number {
    return this.#time;
  }

  /**
   * Gets the current frame simulation time for JS action adapters.
   */
  CjsGetCurrentFrameTime(): number {
    return this.#lastUpdateTime || GetControllerFrameTimeSeconds();
  }

  /**
   * Sets current timeline time and toggles action activity.
   */
  @carbon.method
  @impl.adapted
  SetTime(time: number): void {
    if (!this.isPlaying || time === this.#time) {
      return;
    }

    this.#setTime(time, false);
  }

  #setTime(time: number, includePassedActions: boolean): void {
    const oldTime = this.#time;
    this.#time = time;

    for (let i = 0; i < this.actions.length; i++) {
      if (!this.IsActionEnabled(i)) {
        continue;
      }
      const entry = this.#entryAt(i);
      if (!entry) {
        continue;
      }
      const wasActive = InRange(oldTime, entry);
      const isActive = InRange(this.#time, entry);
      if (wasActive && !isActive) {
        this.actions[i].Stop?.(this);
      } else if (!wasActive && isActive) {
        this.actions[i].Start?.(this);
      } else if (includePassedActions && CrossedRange(oldTime, this.#time, entry)) {
        this.actions[i].Start?.(this);
        this.actions[i].Stop?.(this);
      }
    }
  }

  /**
   * Pauses time progression.
   */
  @carbon.method
  @impl.implemented
  Pause(): void {
    this.isPaused = true;
  }

  /**
   * Resumes time progression.
   */
  @carbon.method
  @impl.implemented
  Resume(): void {
    this.isPaused = false;
  }

  /**
   * Relinks to the current owner.
   */
  @carbon.method
  @impl.implemented
  ReLink(): void {
    const owner = this.#owner;
    if (owner) {
      this.Link(owner);
    }
  }

  #entryAt(index: number): Tr2TimelineEntry | null {
    return this.entries[index] ?? null;
  }

}

interface TimelineRange {
  startTime: number;
  endTime: number;
}

function InRange(time: number, entry: TimelineRange): boolean {
  return time >= entry.startTime && time < entry.endTime;
}

function CrossedRange(
  oldTime: number,
  newTime: number,
  entry: TimelineRange,
): boolean {
  const updateRange = {
    startTime: oldTime,
    endTime: newTime,
  };
  return InRange(entry.startTime, updateRange) &&
    InRange(entry.endTime, updateRange);
}
