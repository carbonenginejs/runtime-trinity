// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionChildEffect.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionChildEffect.cpp
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { ITr2ControllerAction } from "./ITr2ControllerAction.js";


@type.define({
  className: "Tr2ActionChildEffect",
  family: "controllers"
})
export class Tr2ActionChildEffect extends CjsModel
{
  static #resourcePrefetcher = null;

  /** Registers the runtime-owned child-effect prefetch callback. */
  static registerResourcePrefetcher(prefetcher)
  {
    const previous = this.#resourcePrefetcher;
    this.#resourcePrefetcher = prefetcher;
    return previous;
  }

  /** Clears the runtime-owned child-effect prefetch callback. */
  static clearResourcePrefetcher()
  {
    this.#resourcePrefetcher = null;
  }

  /** Requests prefetch without taking ownership of the resource lifecycle. */
  static prefetchResource(path, owner = null)
  {
    if (path && this.#resourcePrefetcher)
    {
      this.#resourcePrefetcher(path, owner);
    }
  }

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

  #child = null;

  /**
   * Carbon prefetches the resource here; JS keeps this as an explicit no-op.
   */
  @carbon.method
  @impl.noop
  Link(controller)
  {
    const owner = ITr2ControllerAction.getOwner(controller);
    Tr2ActionChildEffect.prefetchResource(this.path, owner);
  }

  /**
   * Adds the target child effect when Carbon would load it on action start.
   */
  @carbon.method
  @impl.adapted
  Start(controller)
  {
    const controllerOwner = ITr2ControllerAction.getOwner(controller);
    const resolved = this.#resolveOwner(controllerOwner);
    const owner = resolved.owner;
    if (!owner)
    {
      return;
    }
    this.#child = this.FindChild(owner);
    if (this.#child || !this.addOnStart || !this.path)
    {
      return;
    }
    this.#child = this.CreateChild(owner);
    if (!this.#child)
    {
      return;
    }
    ITr2ControllerAction.callTarget(this.#child, "StartControllers");
    if (resolved.rebind)
    {
      ITr2ControllerAction.callTarget(controllerOwner, "Rebind", true);
    }
  }

  /**
   * Stops or removes the target child effect.
   */
  @carbon.method
  @impl.adapted
  Stop(controller)
  {
    const child = this.#child;
    if (!child)
    {
      return;
    }
    if (this.removeOnStop)
    {
      const owner = this.#resolveOwner(ITr2ControllerAction.getOwner(controller)).owner;
      if (owner)
      {
        Tr2ActionChildEffect.#removeChildFromOwner(owner, child);
      }
    }
    this.#child = null;
  }
  ResolveOwner(owner)
  {
    return this.#resolveOwner(owner).owner;
  }
  FindChild(owner)
  {
    return (this.childName ? ITr2ControllerAction.callTarget(owner, "GetEffectChildByName", this.childName) ?? Tr2ActionChildEffect.#findNamed(owner, this.childName) : null) ?? null;
  }
  CreateChild(owner)
  {
    const childFromOwner = ITr2ControllerAction.callTarget(owner, "AddChildFromPath", this.path, this.childName);
    if (childFromOwner)
    {
      Tr2ActionChildEffect.#setChildName(childFromOwner, this.childName);
      return childFromOwner;
    }
    const child = {
      name: this.childName,
      path: this.path
    };
    Tr2ActionChildEffect.#setChildName(child, this.childName);
    Tr2ActionChildEffect.#addChildToOwner(owner, child);
    return child;
  }
  #resolveOwner(owner)
  {
    if (!owner || !this.targetAnotherOwner)
    {
      return {
        owner,
        rebind: false
      };
    }
    const childOwner = ITr2ControllerAction.asObject(ITr2ControllerAction.callTarget(owner, "GetEffectChildByName", this.targetAnotherOwner) ?? Tr2ActionChildEffect.#findNamed(owner, this.targetAnotherOwner));
    if (childOwner)
    {
      return {
        owner: childOwner,
        rebind: false
      };
    }
    const parameterOwner = ITr2ControllerAction.getParameterOwner(owner, this.targetAnotherOwner);
    if (parameterOwner)
    {
      return {
        owner: parameterOwner,
        rebind: true
      };
    }
    const stretchOwner = Tr2ActionChildEffect.#getStretchOwner(owner, this.targetAnotherOwner);
    return {
      owner: stretchOwner,
      rebind: !!stretchOwner
    };
  }

  static #addChildToOwner(owner, child)
  {
    if (ITr2ControllerAction.hasFunction(owner, "AddToEffectChildrenList"))
    {
      owner.AddToEffectChildrenList(child);
      return;
    }
    if (ITr2ControllerAction.hasFunction(owner, "AddChild"))
    {
      owner.AddChild(child);
      return;
    }
    this.#addToArray(owner, "effectChildren", child);
    this.#addToArray(owner, "children", child);
  }

  static #findNamed(owner, name)
  {
    for (const listName of ["effectChildren", "children", "items"])
    {
      if (ITr2ControllerAction.hasProperty(owner, listName) && Array.isArray(owner[listName]))
      {
        const found = owner[listName].find(item => ITr2ControllerAction.callTarget(item, "GetName") === name || ITr2ControllerAction.hasProperty(item, "name") && item.name === name);
        if (found)
        {
          return found;
        }
      }
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

  static #removeChildFromOwner(owner, child)
  {
    if (ITr2ControllerAction.hasFunction(owner, "RemoveFromEffectChildrenList"))
    {
      owner.RemoveFromEffectChildrenList(child);
      return;
    }
    if (ITr2ControllerAction.hasFunction(owner, "RemoveChild"))
    {
      owner.RemoveChild(child);
      return;
    }
    this.#removeFromArray(owner, "effectChildren", child);
    this.#removeFromArray(owner, "children", child);
  }

  static #setChildName(child, name)
  {
    if (!name || !child || typeof child !== "object")
    {
      return;
    }
    if (ITr2ControllerAction.hasFunction(child, "SetName"))
    {
      child.SetName(name);
      return;
    }
    child.name = name;
  }

  static #addToArray(owner, listName, value)
  {
    if (ITr2ControllerAction.hasProperty(owner, listName) && Array.isArray(owner[listName]) && !owner[listName].includes(value))
    {
      owner[listName].push(value);
    }
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
}
