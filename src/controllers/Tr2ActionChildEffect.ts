// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionChildEffect.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionChildEffect.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  GetControllerOwner,
  HasFunction,
  HasProperty,
} from "./CjsControllerActionHelpers.ts";
import { CjsPrefetchControllerResource } from "./CjsControllerResourceHost.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionChildEffect", family: "controllers" })
export class Tr2ActionChildEffect extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.boolean
  addOnStart = true;

  @io.persist
  @type.string
  targetAnotherOwner = "";

  @io.persist
  @type.string
  childName = "";

  @io.persist
  @type.path
  path = "";

  @io.persist
  @type.boolean
  removeOnStop = true;

  #child: unknown = null;

  /**
   * Carbon prefetches the resource here; JS keeps this as an explicit no-op.
   */
  @carbon.method
  @impl.noop
  Link(controller: ITr2ActionController): void {
    const owner = GetControllerOwner(controller);
    CjsPrefetchControllerResource(this.path, owner);
  }

  /**
   * Adds the target child effect when Carbon would load it on action start.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const controllerOwner = GetControllerOwner(controller);
    const resolved = this.#resolveOwner(controllerOwner);
    const owner = resolved.owner;
    if (!owner) {
      return;
    }

    this.#child = this.FindChild(owner);
    if (this.#child || !this.addOnStart || !this.path) {
      return;
    }

    this.#child = this.CreateChild(owner);
    if (!this.#child) {
      return;
    }
    CallTarget(this.#child, "StartControllers");
    if (resolved.rebind) {
      CallTarget(controllerOwner, "Rebind", true);
    }
  }

  /**
   * Stops or removes the target child effect.
   */
  @carbon.method
  @impl.adapted
  Stop(controller: ITr2ActionController): void {
    const child = this.#child;
    if (!child) {
      return;
    }

    if (this.removeOnStop) {
      const owner = this.#resolveOwner(GetControllerOwner(controller)).owner;
      if (owner) {
        RemoveChildFromOwner(owner, child);
      }
    }
    this.#child = null;
  }

  ResolveOwner(owner: object | null): object | null {
    return this.#resolveOwner(owner).owner;
  }

  FindChild(owner: object): unknown {
    return (this.childName
      ? CallTarget(owner, "GetEffectChildByName", this.childName) ??
        FindNamed(owner, this.childName)
      : null) ?? null;
  }

  CreateChild(owner: object): unknown {
    const childFromOwner = CallTarget(
      owner,
      "AddChildFromPath",
      this.path,
      this.childName,
    );
    if (childFromOwner) {
      SetChildName(childFromOwner, this.childName);
      return childFromOwner;
    }

    const child = { name: this.childName, path: this.path };
    SetChildName(child, this.childName);
    AddChildToOwner(owner, child);
    return child;
  }

  #resolveOwner(owner: object | null): CjsChildOwnerResolution {
    if (!owner || !this.targetAnotherOwner) {
      return { owner, rebind: false };
    }

    const childOwner = AsObject(CallTarget(
      owner,
      "GetEffectChildByName",
      this.targetAnotherOwner,
    ) ?? FindNamed(owner, this.targetAnotherOwner));
    if (childOwner) {
      return { owner: childOwner, rebind: false };
    }

    const parameterOwner = GetParameterOwner(owner, this.targetAnotherOwner);
    if (parameterOwner) {
      return { owner: parameterOwner, rebind: true };
    }

    const stretchOwner = GetStretchOwner(owner, this.targetAnotherOwner);
    return { owner: stretchOwner, rebind: !!stretchOwner };
  }
}

interface CjsChildOwnerResolution {
  owner: object | null;
  rebind: boolean;
}

function AsObject(value: unknown): object | null {
  return value && typeof value === "object" ? value : null;
}

function AddChildToOwner(owner: unknown, child: unknown): void {
  if (HasFunction(owner, "AddToEffectChildrenList")) {
    owner.AddToEffectChildrenList(child);
    return;
  }
  if (HasFunction(owner, "AddChild")) {
    owner.AddChild(child);
    return;
  }
  AddToArray(owner, "effectChildren", child);
  AddToArray(owner, "children", child);
}

function FindNamed(owner: unknown, name: string): unknown {
  for (const listName of ["effectChildren", "children", "items"]) {
    if (HasProperty(owner, listName) && Array.isArray(owner[listName])) {
      const found = owner[listName].find((item) =>
        CallTarget(item, "GetName") === name ||
        HasProperty(item, "name") && item.name === name
      );
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function GetParameterOwner(owner: object, name: string): object | null {
  const parameter = CallTarget(owner, "GetParameterByName", name);
  if (!parameter) {
    return null;
  }

  return AsObject(
    CallTarget(parameter, "GetParameterObject") ??
      GetProperty(parameter, "parameterObject") ??
      GetProperty(parameter, "object"),
  );
}

function GetProperty(target: unknown, propertyName: string): unknown {
  return HasProperty(target, propertyName) ? target[propertyName] : undefined;
}

function GetStretchOwner(owner: object, name: string): object | null {
  if (name === "SourceSpaceObject") {
    return AsObject(
      CallTarget(owner, "GetSourceSpaceObject") ??
        GetProperty(owner, "sourceSpaceObject"),
    );
  }
  if (name === "DestSpaceObject") {
    return AsObject(
      CallTarget(owner, "GetDestSpaceObject") ??
        GetProperty(owner, "destSpaceObject"),
    );
  }
  return null;
}

function RemoveChildFromOwner(owner: unknown, child: unknown): void {
  if (HasFunction(owner, "RemoveFromEffectChildrenList")) {
    owner.RemoveFromEffectChildrenList(child);
    return;
  }
  if (HasFunction(owner, "RemoveChild")) {
    owner.RemoveChild(child);
    return;
  }
  RemoveFromArray(owner, "effectChildren", child);
  RemoveFromArray(owner, "children", child);
}

function SetChildName(child: unknown, name: string): void {
  if (!name || !child || typeof child !== "object") {
    return;
  }
  if (HasFunction(child, "SetName")) {
    child.SetName(name);
    return;
  }
  (child as { name?: string }).name = name;
}

function AddToArray(
  owner: unknown,
  listName: string,
  value: unknown,
): void {
  if (HasProperty(owner, listName) && Array.isArray(owner[listName])) {
    if (!owner[listName].includes(value)) {
      owner[listName].push(value);
    }
  }
}

function RemoveFromArray(
  owner: unknown,
  listName: string,
  value: unknown,
): void {
  if (HasProperty(owner, listName) && Array.isArray(owner[listName])) {
    const index = owner[listName].indexOf(value);
    if (index !== -1) {
      owner[listName].splice(index, 1);
    }
  }
}
