// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionOverlay.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionOverlay.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { ITr2ControllerAction } from "./ITr2ControllerAction.js";


@type.define({
  className: "Tr2ActionOverlay",
  family: "controllers"
})
export class Tr2ActionOverlay extends CjsModel
{
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

  #overlay = null;

  /**
   * Loads and starts the target overlay when Carbon would add it.
   */
  @carbon.method
  @impl.adapted
  Start(controller)
  {
    const controllerOwner = ITr2ControllerAction.getOwner(controller);
    const resolved = this.#resolveOwner(controllerOwner);
    if (!resolved.owner)
    {
      return;
    }
    this.#loadOverlay(resolved.owner);
    if (resolved.rebind)
    {
      ITr2ControllerAction.callTarget(controllerOwner, "Rebind", true);
    }
  }

  /**
   * Stops or removes the target overlay.
   */
  @carbon.method
  @impl.adapted
  Stop(controller)
  {
    const overlay = this.#overlay;
    if (!overlay)
    {
      return;
    }
    if (this.removeOnStop)
    {
      const owner = this.#resolveOwner(ITr2ControllerAction.getOwner(controller)).owner;
      if (owner)
      {
        Tr2ActionOverlay.#removeOverlay(owner, overlay);
      }
    }
    this.#overlay = null;
  }
  #loadOverlay(owner)
  {
    this.#overlay = this.overlayName ? ITr2ControllerAction.callTarget(owner, "GetOverlayEffectByName", this.overlayName) ?? Tr2ActionOverlay.#findNamed(owner, "overlays", this.overlayName) : null;
    if (!this.#overlay && this.addOnStart && this.path)
    {
      const loaded = Tr2ActionOverlay.#loadOverlayResource(owner, this.#normalizePath(owner));
      this.#overlay = loaded.overlay;
      if (this.#overlay)
      {
        Tr2ActionOverlay.#setName(this.#overlay, this.overlayName);
        if (!loaded.added)
        {
          Tr2ActionOverlay.#addOverlay(owner, this.#overlay);
        }
        ITr2ControllerAction.callTarget(this.#overlay, "StartControllers");
      }
    }
  }
  #normalizePath(owner)
  {
    let path = this.path.toLowerCase();
    const animated = !!ITr2ControllerAction.callTarget(owner, "IsAnimated");
    if (animated && !path.includes("_skinned"))
    {
      path = path.replace(/\.red$/, "_skinned.red");
    }
    else if (!animated && path.includes("_skinned"))
    {
      path = path.replace("_skinned", "");
    }
    return path;
  }
  #resolveOwner(owner)
  {
    if (!owner)
    {
      return {
        owner: null,
        rebind: false
      };
    }
    if (Tr2ActionOverlay.#isOverlayOwner(owner))
    {
      return {
        owner,
        rebind: false
      };
    }
    if (!this.targetAnotherOwner)
    {
      return {
        owner: null,
        rebind: false
      };
    }
    const parameterOwner = ITr2ControllerAction.getParameterOwner(owner, this.targetAnotherOwner);
    if (parameterOwner && Tr2ActionOverlay.#isOverlayOwner(parameterOwner))
    {
      return {
        owner: parameterOwner,
        rebind: true
      };
    }
    const stretchOwner = Tr2ActionOverlay.#getStretchOwner(owner, this.targetAnotherOwner);
    if (stretchOwner && Tr2ActionOverlay.#isOverlayOwner(stretchOwner))
    {
      return {
        owner: stretchOwner,
        rebind: true
      };
    }
    return {
      owner: null,
      rebind: false
    };
  }

  static #addOverlay(owner, overlay)
  {
    if (ITr2ControllerAction.hasFunction(owner, "AddOverlayEffect"))
    {
      owner.AddOverlayEffect(overlay);
      return;
    }
    this.#addToArray(owner, "overlays", overlay);
  }

  static #addToArray(owner, listName, value)
  {
    if (ITr2ControllerAction.hasProperty(owner, listName) && Array.isArray(owner[listName]) && !owner[listName].includes(value))
    {
      owner[listName].push(value);
    }
  }

  static #findNamed(owner, listName, name)
  {
    if (ITr2ControllerAction.hasProperty(owner, listName) && Array.isArray(owner[listName]))
    {
      return owner[listName].find(item => ITr2ControllerAction.callTarget(item, "GetName") === name || ITr2ControllerAction.hasProperty(item, "name") && item.name === name) ?? null;
    }
    return null;
  }

  static #getStretchOwner(owner, name)
  {
    if (name === "SourceSpaceObject")
    {
      return ITr2ControllerAction.asObject(ITr2ControllerAction.callTarget(owner, "GetSourceSpaceObject") ?? ITr2ControllerAction.getProperty(owner, "sourceSpaceObject"));
    }
    if (name === "DestSpaceObject")
    {
      return ITr2ControllerAction.asObject(ITr2ControllerAction.callTarget(owner, "GetDestSpaceObject") ?? ITr2ControllerAction.getProperty(owner, "destSpaceObject"));
    }
    return null;
  }

  static #isOverlayOwner(owner)
  {
    return !!owner && typeof owner === "object" && (ITr2ControllerAction.hasFunction(owner, "GetOverlayEffectByName") || ITr2ControllerAction.hasFunction(owner, "AddOverlayEffect") || ITr2ControllerAction.hasFunction(owner, "RemoveOverlayEffect") || ITr2ControllerAction.hasProperty(owner, "overlays"));
  }

  static #loadOverlayResource(owner, path)
  {
    const loaded = ITr2ControllerAction.callTarget(owner, "LoadOverlayEffectFromPath", path) ?? ITr2ControllerAction.callTarget(owner, "LoadOverlayEffect", path);
    if (loaded)
    {
      return { overlay: loaded, added: false };
    }
    const added = ITr2ControllerAction.callTarget(owner, "AddOverlayEffectFromPath", path);
    return { overlay: added, added: !!added };
  }

  static #removeFromArray(owner, listName, value)
  {
    if (ITr2ControllerAction.hasProperty(owner, listName) && Array.isArray(owner[listName]))
    {
      const index = owner[listName].indexOf(value);
      if (index !== -1)
      {
        owner[listName].splice(index, 1);
      }
    }
  }

  static #removeOverlay(owner, overlay)
  {
    if (ITr2ControllerAction.hasFunction(owner, "RemoveOverlayEffect"))
    {
      owner.RemoveOverlayEffect(overlay);
      return;
    }
    this.#removeFromArray(owner, "overlays", overlay);
  }

  static #setName(target, name)
  {
    if (!name || !target || typeof target !== "object")
    {
      return;
    }
    if (ITr2ControllerAction.hasFunction(target, "SetName"))
    {
      target.SetName(name);
      return;
    }
    target.name = name;
  }
}
