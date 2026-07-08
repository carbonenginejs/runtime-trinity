// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2BindingPoint.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2BindingPoint.cpp
import {
  copyArrayLike,
  fillArrayLike,
} from "@carbonenginejs/core-math/utils";
import { isArrayLike } from "@carbonenginejs/core-math/is";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type {
  ITr2ActionController,
  Tr2BindingPathRoot,
} from "./ITr2ControllerAction.ts";

const SWIZZLE_OFFSETS: Record<string, number> = {
  x: 0,
  r: 0,
  y: 1,
  g: 1,
  z: 2,
  b: 2,
  w: 3,
  a: 3,
};

@type.define({ className: "Tr2BindingPoint", family: "controllers" })
export class Tr2BindingPoint extends CjsModel {
  @io.notify
  @io.persist
  @type.string
  path = "";

  @io.notify
  @io.persist
  @type.objectRef("IRoot")
  object: object | null = null;

  @io.notify
  @io.persist
  @type.string
  attribute = "";

  @type.unknown
  resolvedObject: object | null = null;

  @type.unknown
  notifyPtr: unknown = null;

  @type.objectRef("Be::VarEntry")
  entry: unknown = null;

  @type.objectRef("Be::Var")
  destination: unknown = null;

  @type.int32
  entryOffset = -1;

  @type.int32
  arraySize = 0;

  #target: Record<string, unknown> | null = null;
  #attributeName = "";

  /**
   * Resolves and links this binding against named root objects.
   */
  @carbon.method
  @impl.adapted
  Link(
    roots:
      | readonly Tr2BindingPathRoot[]
      | Record<string, unknown>
      | ITr2ActionController
      | null = null,
    owner: object | null = null,
  ): boolean {
    this.Unlink();

    const target = this.path
      ? ResolveBindingPath(this.path, GetLinkRoots(roots, owner))
      : this.object ?? owner;
    return this.SetDestination(target, this.attribute);
  }

  /**
   * Clears the resolved binding target.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.resolvedObject = null;
    this.notifyPtr = null;
    this.entry = null;
    this.destination = null;
    this.entryOffset = -1;
    this.arraySize = 0;
    this.#target = null;
    this.#attributeName = "";
  }

  /**
   * Checks whether this binding has resolved to a writable target.
   */
  @carbon.method
  @impl.implemented
  IsValid(): boolean {
    return !!this.#target && !!this.#attributeName;
  }

  /**
   * Writes a value into the bound destination.
   */
  @carbon.method
  @impl.adapted
  SetValue(
    value: unknown,
    roots:
      | readonly Tr2BindingPathRoot[]
      | Record<string, unknown>
      | ITr2ActionController
      | null = null,
    owner: object | null = null,
  ): boolean {
    if (!this.IsValid()) {
      this.Link(roots, owner);
    }

    if (!this.#target || !this.#attributeName) {
      return false;
    }

    const current = this.#target[this.#attributeName];
    if (this.entryOffset === -1) {
      if (ArrayBuffer.isView(current) && isArrayLike(value)) {
        (current as unknown as { set(values: ArrayLike<number>): void }).set(
          value as ArrayLike<number>,
        );
      } else if (Array.isArray(current) && isArrayLike(value)) {
        copyArrayLike(current, value);
      } else if (
        isArrayLike(current) &&
        typeof current !== "string" &&
        typeof value === "number"
      ) {
        fillArrayLike(current, value);
      } else {
        this.#target[this.#attributeName] = value;
      }
    } else if (isArrayLike(current)) {
      (current as unknown as { [index: number]: number })[this.entryOffset] =
        Number(value);
    } else {
      return false;
    }

    NotifyValueChanged(this.#target, this.#attributeName, value, this);
    return true;
  }

  /**
   * Reads a numeric value from the bound destination.
   */
  @carbon.method
  @impl.adapted
  GetValue(
    roots:
      | readonly Tr2BindingPathRoot[]
      | Record<string, unknown>
      | ITr2ActionController
      | null = null,
    owner: object | null = null,
    fallback = 0,
  ): number {
    if (!this.IsValid()) {
      this.Link(roots, owner);
    }

    if (!this.#target || !this.#attributeName) {
      return fallback;
    }

    const value = this.#target[this.#attributeName];
    if (this.entryOffset !== -1) {
      return isArrayLike(value) && value.length > this.entryOffset
        ? Number(value[this.entryOffset])
        : fallback;
    }

    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  /**
   * Gets the resolved object, or the authored direct object.
   */
  @carbon.method
  @impl.implemented
  GetBoundObject(
    roots:
      | readonly Tr2BindingPathRoot[]
      | Record<string, unknown>
      | ITr2ActionController
      | null = null,
    owner: object | null = null,
  ): object | null {
    if (!this.IsValid()) {
      this.Link(roots, owner);
    }
    return this.resolvedObject ?? this.object;
  }

  /**
   * Sets the resolved destination object and attribute swizzle.
   */
  @carbon.method
  @impl.adapted
  SetDestination(target: unknown, attribute: string): boolean {
    this.Unlink();

    const parsed = ParseAttribute(attribute);
    if (!IsObjectRecord(target) || !parsed || !parsed.name) {
      return false;
    }
    if (!(parsed.name in target)) {
      return false;
    }

    const current = target[parsed.name];
    if (
      parsed.offset !== -1 &&
      (!isArrayLike(current) || parsed.offset >= current.length)
    ) {
      return false;
    }

    this.resolvedObject = target;
    this.destination = current;
    this.entry = parsed.name;
    this.entryOffset = parsed.offset;
    this.arraySize = isArrayLike(current) ? current.length : 0;
    this.#target = target;
    this.#attributeName = parsed.name;
    return true;
  }
}

export function ResolveBindingPath(
  path: string,
  roots: readonly Tr2BindingPathRoot[],
): object | null {
  if (!path) {
    return null;
  }

  const root = ReadIdentifier(path, 0);
  if (!root) {
    return null;
  }

  let object: unknown = null;
  for (const [name, value] of roots) {
    if (name === root.value) {
      object = value;
      break;
    }
  }

  let index = root.next;
  while (object && index < path.length) {
    if (path[index] === ".") {
      const property = ReadIdentifier(path, index + 1);
      if (!property || !IsObjectRecord(object)) {
        return null;
      }
      object = object[property.value];
      index = property.next;
      continue;
    }

    const selector = ReadIndex(path, index);
    if (!selector) {
      return null;
    }
    object = GetListElement(object, selector.value);
    index = selector.next;
  }

  return IsObjectRecord(object) ? object : null;
}

function GetLinkRoots(
  roots:
    | readonly Tr2BindingPathRoot[]
    | Record<string, unknown>
    | ITr2ActionController
    | null,
  owner: object | null,
): Tr2BindingPathRoot[] {
  if (Array.isArray(roots)) {
    return roots.slice();
  }

  if (IsPlainRootMap(roots)) {
    return Object.entries(roots).map(([name, value]) => [
      name,
      value && typeof value === "object" ? value : null,
    ]);
  }

  const controller = roots as ITr2ActionController | null;
  const out: Tr2BindingPathRoot[] = [];
  const controllerOwner = owner ?? controller?.GetOwner?.() ?? null;
  if (controllerOwner) {
    out.push(["Owner", controllerOwner]);
  }
  if (controller) {
    out.push(...(controller.GetBindingPathRoots?.() ?? []));
  }
  return out;
}

function ParseAttribute(
  attribute: string,
): { name: string; offset: number } | null {
  const dot = attribute.indexOf(".");
  if (dot === -1) {
    return { name: attribute, offset: -1 };
  }

  const swizzle = attribute.slice(dot + 1);
  if (swizzle.length !== 1 || SWIZZLE_OFFSETS[swizzle] === undefined) {
    return null;
  }

  return {
    name: attribute.slice(0, dot),
    offset: SWIZZLE_OFFSETS[swizzle],
  };
}

function ReadIdentifier(
  path: string,
  index: number,
): { value: string; next: number } | null {
  const match = /^[A-Za-z_][A-Za-z0-9_]*/.exec(path.slice(index));
  return match ? { value: match[0], next: index + match[0].length } : null;
}

function ReadIndex(
  path: string,
  index: number,
): { value: string | number; next: number } | null {
  if (path[index] !== "[") {
    return null;
  }

  const end = path.indexOf("]", index + 1);
  if (end === -1) {
    return null;
  }

  const body = path.slice(index + 1, end);
  if (/^-?\d+$/.test(body)) {
    return { value: Number(body), next: end + 1 };
  }

  if (body.length >= 2 && body[0] === '"' && body[body.length - 1] === '"') {
    return { value: body.slice(1, -1), next: end + 1 };
  }

  return null;
}

function GetListElement(object: unknown, selector: string | number): unknown {
  if (!object) {
    return null;
  }

  if (typeof selector === "number") {
    const list = Array.isArray(object)
      ? object
      : IsObjectRecord(object)
      ? FindListProperty(object)
      : null;
    if (!list) {
      return null;
    }
    const index = selector < 0 ? list.length + selector : selector;
    return index >= 0 && index < list.length ? list[index] : null;
  }

  const list = Array.isArray(object)
    ? object
    : IsObjectRecord(object)
    ? FindListProperty(object)
    : null;
  if (!list) {
    return null;
  }
  return list.find((item) => IsObjectRecord(item) && item.name === selector) ??
    null;
}

function FindListProperty(object: Record<string, unknown>): unknown[] | null {
  for (
    const name of ["items", "children", "curveSets", "controllers", "actions"]
  ) {
    if (Array.isArray(object[name])) {
      return object[name] as unknown[];
    }
  }
  return null;
}

function NotifyValueChanged(
  target: Record<string, unknown>,
  attribute: string,
  value: unknown,
  source: Tr2BindingPoint,
): void {
  if (HasFunction(target, "OnValueChanged")) {
    target.OnValueChanged(attribute, value, source);
  } else if (HasFunction(target, "OnModified")) {
    target.OnModified(attribute, value, source);
  } else if (IsObjectRecord(target._dirty)) {
    target._dirty[attribute] = true;
  }
}

function IsPlainRootMap(value: unknown): value is Record<string, unknown> {
  return IsObjectRecord(value) &&
    !HasFunction(value, "GetOwner") &&
    !HasFunction(value, "GetBindingPathRoots");
}

function IsObjectRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object";
}

function HasFunction<K extends string>(
  value: unknown,
  key: K,
): value is Record<K, (...args: unknown[]) => unknown> {
  return IsObjectRecord(value) && typeof value[key] === "function";
}
