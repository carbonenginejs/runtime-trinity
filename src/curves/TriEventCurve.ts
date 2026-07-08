// Source: E:\carbonengine\trinity\trinity\Curves\TriEventCurve.h
// Source: E:\carbonengine\trinity\trinity\Curves\TriEventCurve.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import { TRIEXTRAPOLATION } from "./enums.ts";
import type {
  IBlueEventListener,
  ITriCurveLength,
  ITriFunction,
} from "./contracts.ts";
import { CjsQueuePostUpdateCallback } from "./CjsPostUpdateQueue.ts";
import { TriEventKey } from "./TriEventKey.ts";
import type { TriEventCallable } from "./TriEventKey.ts";
import type { TRIEXTRAPOLATIONValue } from "./enums.ts";

type TriEventListener = IBlueEventListener | null;

@type.define({ className: "TriEventCurve", family: "curves" })
export class TriEventCurve extends CjsModel
  implements ITriFunction, ITriCurveLength {
  @io.persist
  @type.int32
  @schema.enum("TRIEXTRAPOLATION")
  extrapolation: TRIEXTRAPOLATIONValue = TRIEXTRAPOLATION.NONE;

  @io.persist
  @type.string
  name = "";

  @io.readwrite
  @type.objectRef("IBlueEventListener")
  eventListener: TriEventListener = null;

  @io.read
  @type.float64
  time = 0;

  @io.read
  @type.unknown
  length = 0;

  @io.read
  @type.float32
  localTime = 0;

  @io.persist
  @type.string
  value = "";

  @io.persistOnly
  @type.list("TriEventKey")
  keys: TriEventKey[] = [];

  #currentKeyIndex = 0;

  /**
   * Updates the curve time and fires newly-crossed event keys.
   */
  @carbon.method
  @impl.adapted
  UpdateValue(time: number): void {
    if (this.length === 0) {
      return;
    }

    const before = this.time;
    this.time = time;

    if (this.time < before) {
      this.#currentKeyIndex = 0;
      return;
    }

    if (this.extrapolation === TRIEXTRAPOLATION.CYCLE) {
      const localNow = this.time % this.length;
      if (localNow < this.localTime) {
        this.#currentKeyIndex = 0;
      }
      this.localTime = localNow;
    } else {
      this.localTime = this.time;
    }

    while (
      this.#currentKeyIndex < this.keys.length &&
      this.localTime >= this.keys[this.#currentKeyIndex].time
    ) {
      this.FireKey(this.keys[this.#currentKeyIndex]);
      this.#currentKeyIndex++;
    }
  }

  /**
   * Sorts keys after hydration.
   */
  @carbon.method
  @impl.implemented
  Initialize(): boolean {
    this.Sort();
    return true;
  }

  /**
   * Gets the curve length.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return this.length;
  }

  /**
   * Sorts keys stably by time and resets the event cursor.
   */
  @carbon.method
  @impl.implemented
  Sort(): void {
    this.keys = this.keys
      .map((key, index) => ({ key: ensureEventKey(key), index }))
      .sort((a, b) => a.key.time - b.key.time || a.index - b.index)
      .map((entry) => entry.key);

    this.#currentKeyIndex = 0;
    this.length = this.keys.length ? this.keys[this.keys.length - 1].time : 0;
  }

  /**
   * Adds a string event key.
   */
  @carbon.method
  @impl.implemented
  AddKey(time: number, eventName: string): void {
    const key = new TriEventKey();
    key.time = time;
    key.value = eventName;
    this.InsertKey(key);
  }

  /**
   * Adds a callable event key.
   */
  @carbon.method
  @impl.adapted
  AddCallableKey(
    time: number,
    callable: TriEventCallable,
    args?: unknown[] | unknown,
  ): void {
    const key = new TriEventKey();
    key.time = time;
    key.callable = callable;
    key.callableArgs = args === undefined ? [] : args;
    this.InsertKey(key);
  }

  /**
   * Inserts an event key and refreshes key ordering.
   */
  @carbon.method
  @impl.implemented
  InsertKey(key: TriEventKey): void {
    this.keys.push(ensureEventKey(key));
    this.Sort();
  }

  /**
   * Removes an event key by index.
   */
  @carbon.method
  @impl.adapted
  RemoveKey(index: number): void {
    if (index >= 0 && index < this.keys.length) {
      this.keys.splice(index, 1);
      this.Sort();
    }
  }

  /**
   * Gets the number of event keys.
   */
  @carbon.method
  @impl.implemented
  GetKeyCount(): number {
    return this.keys.length;
  }

  /**
   * Gets a key time by index, or zero when out of range.
   */
  @carbon.method
  @impl.implemented
  GetKeyTime(index: number): number {
    return this.keys[index]?.time ?? 0;
  }

  /**
   * Gets a key string value by index, or an empty string when out of range.
   */
  @carbon.method
  @impl.implemented
  GetKeyValue(index: number): string {
    return this.keys[index]?.value ?? "";
  }

  /**
   * Sets a key time and refreshes key ordering.
   */
  @carbon.method
  @impl.implemented
  SetKeyTime(index: number, time: number): void {
    if (this.keys[index]) {
      this.keys[index].time = time;
      this.Sort();
    }
  }

  /**
   * Sets a key string value.
   */
  @carbon.method
  @impl.implemented
  SetKeyValue(index: number, value: string): void {
    if (this.keys[index]) {
      this.keys[index].value = value ?? "";
    }
  }

  /**
   * Gets a callable key by index.
   */
  @carbon.method
  @impl.adapted
  GetCallableKeyValue(index: number): TriEventCallable | null {
    return this.keys[index]?.callable ?? null;
  }

  /**
   * Gets callable arguments by index.
   */
  @carbon.method
  @impl.adapted
  GetCallableKeyArgs(index: number): unknown[] | unknown | null {
    return this.keys[index]?.callableArgs ?? null;
  }

  /**
   * Fires one event key.
   */
  FireKey(key: TriEventKey): void {
    this.value = key.value || "";

    if (typeof key.callable === "function") {
      const callable = key.callable;
      const args = normalizeCallableArgs(key.callableArgs);
      CjsQueuePostUpdateCallback(() => callable(...args));
      return;
    }

    if (this.eventListener && this.value) {
      this.eventListener.HandleEvent(this.value);
    }
  }
}

function ensureEventKey(key: TriEventKey): TriEventKey {
  return key instanceof TriEventKey
    ? key
    : Object.assign(new TriEventKey(), key);
}

function normalizeCallableArgs(args: unknown[] | unknown | null): unknown[] {
  if (args === null || args === undefined) {
    return [];
  }

  return Array.isArray(args) ? args : [args];
}
