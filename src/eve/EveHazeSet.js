// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveHazeSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveHazeSet.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EveHazeSetLight } from "./EveHazeSetLight.js";
import { EveComponentType } from "./EveComponentTypes.js";


@type.define({ className: "EveHazeSet", family: "eve/attachment/haze" })
export class EveHazeSet extends EveEntity
{
  @io.rebuild("packedGeometry")
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  @io.persist
  @type.boolean
  display = true;

  @io.persist
  @type.string
  name = "";

  @io.rebuild("packedGeometry")
  @io.persist
  @type.list("EveHazeSetItem")
  hazes = [];

  @io.persist
  @type.list("EveHazeSetLight")
  lights = [];

  #rebuildRevision = 0;

  @carbon.method
  @impl.implemented
  Setup(effect)
  {
    this.effect = effect ?? null;
  }

  @carbon.method
  @impl.adapted
  Initialize()
  {
    this.Rebuild();
    return true;
  }

  @carbon.method
  @impl.adapted
  Rebuild()
  {
    // Carbon rebuilds packed haze vertices and static bounds here. The
    // backend-neutral runtime keeps the authored graph and invalidates the
    // renderer-facing revision without allocating device resources.
    this.#rebuildRevision++;
    this.__state.rebuild.add("packedGeometry");
  }

  @carbon.method
  @impl.implemented
  AddHazeItem(item)
  {
    this.hazes.push(item);
  }

  @carbon.method
  @impl.adapted
  SetShaderOption(name, value)
  {
    if (this.effect && typeof this.effect.SetOption === "function")
    {
      this.effect.SetOption(name, value);
    }
  }

  @carbon.method
  @impl.adapted
  AddLightFromSOF(light)
  {
    this.lights.push(EveHazeSetLight.FromSOF(light));
  }

  /** Carbon EveHazeSet::RegisterComponents (cpp:394-401): LightOwner when
   * lights are authored. */
  @carbon.method
  @impl.implemented
  RegisterComponents()
  {
    const registry = this.GetComponentRegistry();
    if (registry && this.lights.length)
    {
      registry.RegisterComponent(EveComponentType.LightOwner, this);
    }
  }

  /** Carbon EveHazeSet::GetLights (cpp:403-424): per-light submission.
   * Awaits the LightOwner consumption pass (Tr2LightManager submission is
   * unported); presence satisfies the "LightOwner" duck contract. */
  @carbon.method
  @impl.notImplemented
  GetLights(..._args)
  {
    throw new Error("EveHazeSet.GetLights is not implemented in CarbonEngineJS.");
  }
}
