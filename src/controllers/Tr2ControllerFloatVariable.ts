// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerFloatVariable.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerFloatVariable.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import {
  carbon,
  impl,
  io,
  schema,
  type,
} from "@carbonenginejs/core-types/schema";
import { Type } from "./enums.ts";
import type { TypeValue } from "./enums.ts";
import type {
  Tr2DirtyMaskDestination,
  Tr2FloatDestination,
} from "./contracts.ts";

@type.define({ className: "Tr2ControllerFloatVariable", family: "controllers" })
export class Tr2ControllerFloatVariable extends CjsModel {
  @io.persist
  @type.int32
  @schema.enum("Type")
  variableType: TypeValue = Type.FLOAT;

  @io.persist
  @type.string
  enumValues = "";

  @io.notify
  @io.readwrite
  @type.float32
  value = 0;

  @io.persist
  @type.float32
  defaultValue = 0;

  @io.persist
  @type.string
  name = "";

  #destination: Tr2FloatDestination | null = null;
  #destinationIndex = 0;
  #dirtyMaskDestination: Tr2DirtyMaskDestination | null = null;
  #dirtyMask = 0n;

  /**
   * Initializes the runtime value from the authored default.
   */
  @carbon.method
  @impl.implemented
  Initialize(): boolean {
    this.value = this.defaultValue;
    return true;
  }

  /**
   * Mirrors notified value changes to the bound destination and dirty mask.
   */
  @carbon.method
  @impl.implemented
  OnModified(_value: unknown = null): boolean {
    this.#writeDestination();
    this.#markDirty();
    return true;
  }

  /**
   * Gets the authored variable name.
   */
  @carbon.method
  @impl.implemented
  GetName(): string {
    return this.name;
  }

  /**
   * Gets the current variable value.
   */
  @carbon.method
  @impl.implemented
  GetValue(): number {
    return this.value;
  }

  /**
   * Sets the current value and mirrors it to any bound destination.
   */
  @carbon.method
  @impl.implemented
  SetValue(value: number): void {
    this.value = value;
    this.#writeDestination();
    this.#markDirty();
  }

  /**
   * Binds a destination buffer slot and immediately writes the current value.
   */
  @carbon.method
  @impl.adapted
  SetDestinationBuffer(
    buffer: Tr2FloatDestination | null,
    index = 0,
  ): void {
    this.#destination = buffer;
    this.#destinationIndex = index;
    this.#writeDestination();
  }

  /**
   * Binds a dirty-mask holder used when the variable changes.
   */
  @carbon.method
  @impl.adapted
  SetDirtyMask(
    maskDestination: Tr2DirtyMaskDestination | null,
    mask: bigint | number,
  ): void {
    this.#dirtyMaskDestination = maskDestination;
    this.#dirtyMask = BigInt(mask);
  }

  /**
   * Writes the current value to the bound destination buffer.
   */
  #writeDestination(): void {
    if (this.#destination) {
      if (typeof this.#destination === "function") {
        this.#destination(this.value);
      } else if ("value" in this.#destination) {
        this.#destination.value = this.value;
      } else {
        this.#destination[this.#destinationIndex] = this.value;
      }
    }
  }

  /**
   * ORs the configured dirty bit into the bound dirty-mask holder.
   */
  #markDirty(): void {
    const destination = this.#dirtyMaskDestination;
    if (!destination) {
      return;
    }

    if (typeof destination.value === "bigint") {
      destination.value |= this.#dirtyMask;
      return;
    }

    destination.value = Number(BigInt(destination.value) | this.#dirtyMask);
  }
}
