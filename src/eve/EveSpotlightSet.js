// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpotlightSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpotlightSet.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EveSpotlightLight } from "./EveSpotlightLight.js";
import { EveComponentType } from "./EveComponentTypes.js";


@type.define({ className: "EveSpotlightSet", family: "eve/attachment/spotlights" })
export class EveSpotlightSet extends EveEntity
{
  @io.rebuild("packedGeometry")
  @io.persist
  @type.list("EveSpotlightSetItem")
  spotlightItems = [];

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.boolean
  display = true;

  @io.rebuild("packedGeometry")
  @io.persist
  @type.objectRef("Tr2Effect")
  coneEffect = null;

  @io.rebuild("packedGeometry")
  @io.persist
  @type.objectRef("Tr2Effect")
  glowEffect = null;

  @io.rebuild("packedGeometry")
  @io.persist
  @type.boolean
  skinned = false;

  @io.persist
  @type.float32
  intensity = 1;

  @io.persist
  @type.list("EveSpotlightLight")
  lights = [];

  #rebuildRevision = 0;

  @carbon.method
  @impl.adapted
  Rebuild()
  {
    // Packed cone/glow vertices, bounds caches, effect hashes and quad
    // registration are reconciled by the concrete renderer adapter.
    this.#rebuildRevision++;
    this.__state.rebuild.add("packedGeometry");
  }

  @carbon.method
  @impl.adapted
  Initialize()
  {
    this.Rebuild();
    return true;
  }

  @carbon.method
  @impl.implemented
  GetConeEffect()
  {
    return this.coneEffect;
  }

  @carbon.method
  @impl.implemented
  SetConeEffect(effect)
  {
    this.coneEffect = effect ?? null;
  }

  @carbon.method
  @impl.implemented
  GetGlowEffect()
  {
    return this.glowEffect;
  }

  @carbon.method
  @impl.implemented
  SetGlowEffect(effect)
  {
    this.glowEffect = effect ?? null;
  }

  @carbon.method
  @impl.implemented
  SetSkinned(skinned)
  {
    this.skinned = !!skinned;
  }

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name ?? "");
  }

  @carbon.method
  @impl.implemented
  GetSpotlightItems()
  {
    return this.spotlightItems;
  }

  @carbon.method
  @impl.implemented
  AddSpotlightItem(item)
  {
    this.spotlightItems.push(item);
  }

  @carbon.method
  @impl.adapted
  SetShaderOption(name, value)
  {
    if (this.coneEffect && typeof this.coneEffect.SetOption === "function")
    {
      this.coneEffect.SetOption(name, value);
    }
    if (this.glowEffect && typeof this.glowEffect.SetOption === "function")
    {
      this.glowEffect.SetOption(name, value);
    }
  }

  @carbon.method
  @impl.adapted
  AddLightFromSOF(light)
  {
    this.lights.push(EveSpotlightLight.FromSOF(light));
  }

  /** Carbon EveSpotlightSet::RegisterComponents (cpp:527-534): LightOwner
   * when lights are authored. */
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

  /** Carbon EveSpotlightSet::GetLights (cpp:536-556): per-light submission.
   * Awaits the LightOwner consumption pass (Tr2LightManager submission is
   * unported); presence satisfies the "LightOwner" duck contract. */
  @carbon.method
  @impl.notImplemented
  GetLights(..._args)
  {
    throw new Error("EveSpotlightSet.GetLights is not implemented in CarbonEngineJS.");
  }
}
