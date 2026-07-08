// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionOverlay.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionOverlay.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  GetControllerOwner,
  HasFunction,
  HasProperty,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionOverlay", family: "controllers" })
export class Tr2ActionOverlay extends CjsModel implements ITr2ControllerAction {
  @io.persist
  @type.path
  path = "";

  @io.persist
  @type.string
  overlayName = "";

  @io.persist
  @type.string
  targetAnotherOwner = "";

  @io.persist
  @type.boolean
  addOnStart = true;

  @io.persist
  @type.boolean
  removeOnStop = true;

  #overlay: unknown = null;

  /**
   * Loads and starts the target overlay when Carbon would add it.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const controllerOwner = GetControllerOwner(controller);
    const resolved = this.#resolveOwner(controllerOwner);
    if (!resolved.owner) {
      return;
    }

    this.#loadOverlay(resolved.owner);
    if (resolved.rebind) {
      CallTarget(controllerOwner, "Rebind", true);
    }
  }

  /**
   * Stops or removes the target overlay.
   */
  @carbon.method
  @impl.adapted
  Stop(controller: ITr2ActionController): void {
    const overlay = this.#overlay;
    if (!overlay) {
      return;
    }

    if (this.removeOnStop) {
      const owner = this.#resolveOwner(GetControllerOwner(controller)).owner;
      if (owner) {
        CjsRemoveOverlay(owner, overlay);
      }
    }
    this.#overlay = null;
  }

  #loadOverlay(owner: object): void {
    this.#overlay = this.overlayName
      ? CallTarget(owner, "GetOverlayEffectByName", this.overlayName) ??
        CjsFindNamed(owner, "overlays", this.overlayName)
      : null;

    if (!this.#overlay && this.addOnStart && this.path) {
      const loaded = CjsLoadOverlay(owner, this.#normalizePath(owner));
      this.#overlay = loaded.overlay;
      if (this.#overlay) {
        CjsSetName(this.#overlay, this.overlayName);
        if (!loaded.added) {
          CjsAddOverlay(owner, this.#overlay);
        }
        CallTarget(this.#overlay, "StartControllers");
      }
    }
  }

  #normalizePath(owner: object): string {
    let path = this.path.toLowerCase();
    const animated = !!CallTarget(owner, "IsAnimated");
    if (animated && !path.includes("_skinned")) {
      path = path.replace(/\.red$/, "_skinned.red");
    } else if (!animated && path.includes("_skinned")) {
      path = path.replace("_skinned", "");
    }
    return path;
  }

  #resolveOwner(owner: object | null): CjsOverlayOwnerResolution {
    if (!owner) {
      return { owner: null, rebind: false };
    }
    if (CjsIsOverlayOwner(owner)) {
      return { owner, rebind: false };
    }
    if (!this.targetAnotherOwner) {
      return { owner: null, rebind: false };
    }

    const parameterOwner = CjsGetParameterOwner(owner, this.targetAnotherOwner);
    if (parameterOwner && CjsIsOverlayOwner(parameterOwner)) {
      return { owner: parameterOwner, rebind: true };
    }

    const stretchOwner = CjsGetStretchOwner(owner, this.targetAnotherOwner);
    if (stretchOwner && CjsIsOverlayOwner(stretchOwner)) {
      return { owner: stretchOwner, rebind: true };
    }
    return { owner: null, rebind: false };
  }
}

interface CjsLoadedOverlay {
  overlay: unknown;
  added: boolean;
}

interface CjsOverlayOwnerResolution {
  owner: object | null;
  rebind: boolean;
}

function CjsAddOverlay(owner: unknown, overlay: unknown): void {
  if (HasFunction(owner, "AddOverlayEffect")) {
    owner.AddOverlayEffect(overlay);
    return;
  }
  CjsAddToArray(owner, "overlays", overlay);
}

function CjsAddToArray(
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

function CjsAsObject(value: unknown): object | null {
  return value && typeof value === "object" ? value : null;
}

function CjsFindNamed(
  owner: unknown,
  listName: string,
  name: string,
): unknown {
  if (HasProperty(owner, listName) && Array.isArray(owner[listName])) {
    return owner[listName].find((item) =>
      CallTarget(item, "GetName") === name ||
      HasProperty(item, "name") && item.name === name
    ) ?? null;
  }
  return null;
}

function CjsGetParameterOwner(owner: object, name: string): object | null {
  const parameter = CallTarget(owner, "GetParameterByName", name);
  if (!parameter) {
    return null;
  }
  return CjsAsObject(
    CallTarget(parameter, "GetParameterObject") ??
      CjsGetProperty(parameter, "parameterObject") ??
      CjsGetProperty(parameter, "object"),
  );
}

function CjsGetProperty(target: unknown, propertyName: string): unknown {
  return HasProperty(target, propertyName) ? target[propertyName] : undefined;
}

function CjsGetStretchOwner(owner: object, name: string): object | null {
  if (name === "SourceSpaceObject") {
    return CjsAsObject(
      CallTarget(owner, "GetSourceSpaceObject") ??
        CjsGetProperty(owner, "sourceSpaceObject"),
    );
  }
  if (name === "DestSpaceObject") {
    return CjsAsObject(
      CallTarget(owner, "GetDestSpaceObject") ??
        CjsGetProperty(owner, "destSpaceObject"),
    );
  }
  return null;
}

function CjsIsOverlayOwner(owner: unknown): owner is object {
  return !!owner && typeof owner === "object" &&
    (HasFunction(owner, "GetOverlayEffectByName") ||
      HasFunction(owner, "AddOverlayEffect") ||
      HasFunction(owner, "RemoveOverlayEffect") ||
      HasProperty(owner, "overlays"));
}

function CjsLoadOverlay(owner: object, path: string): CjsLoadedOverlay {
  const loaded = CallTarget(owner, "LoadOverlayEffectFromPath", path) ??
    CallTarget(owner, "LoadOverlayEffect", path);
  if (loaded) {
    return { overlay: loaded, added: false };
  }

  const added = CallTarget(owner, "AddOverlayEffectFromPath", path);
  return { overlay: added, added: !!added };
}

function CjsRemoveFromArray(
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

function CjsRemoveOverlay(owner: unknown, overlay: unknown): void {
  if (HasFunction(owner, "RemoveOverlayEffect")) {
    owner.RemoveOverlayEffect(overlay);
    return;
  }
  CjsRemoveFromArray(owner, "overlays", overlay);
}

function CjsSetName(target: unknown, name: string): void {
  if (!name || !target || typeof target !== "object") {
    return;
  }
  if (HasFunction(target, "SetName")) {
    target.SetName(name);
    return;
  }
  (target as { name?: string }).name = name;
}
