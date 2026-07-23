// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpriteSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpriteSet.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EveSpriteSetItem } from "../generated/eve/attachment/sprites/EveSpriteSetItem.js";
import { EveSpriteLight } from "./EveSpriteLight.js";
import { EveComponentType } from "./EveComponentTypes.js";


@type.define({ className: "EveSpriteSet", family: "eve/attachment/sprites" })
export class EveSpriteSet extends EveEntity
{
  @io.rebuild("packedGeometry")
  @io.notify
  @io.persist
  @type.list("EveSpriteSetItem")
  sprites = [];

  @io.persist
  @type.string
  name = "";

  @io.rebuild("packedGeometry")
  @io.notify
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  @io.rebuild("packedGeometry")
  @io.persist
  @type.boolean
  skinned = false;

  @io.persist
  @type.float32
  intensity = 1;

  @io.persist
  @type.boolean
  display = true;

  @io.persist
  @type.list("EveSpriteLight")
  lights = [];

  #rebuildRevision = 0;

  @carbon.method
  @impl.implemented
  Clear()
  {
    this.sprites.length = 0;
    this.lights.length = 0;
  }

  @carbon.method
  @impl.adapted
  Add(positionOrItem, ...args)
  {
    if (positionOrItem && !ArrayBuffer.isView(positionOrItem) && !Array.isArray(positionOrItem) && args.length === 0)
    {
      this.sprites.push(positionOrItem);
      return positionOrItem;
    }

    const item = new EveSpriteSetItem();
    vec3.copy(item.position, positionOrItem ?? vec3.create());
    if (args.length === 3)
    {
      const [scale, color, warpColor] = args;
      item.blinkRate = 0;
      item.blinkPhase = 0;
      item.minScale = Number(scale);
      item.maxScale = Number(scale);
      item.falloff = 0;
      vec4.copy(item.color, color);
      vec4.copy(item.warpColor, warpColor);
    }
    else
    {
      const [blinkRate = 0, blinkPhase = 0, minScale = 1, maxScale = 1, falloff = 0, color = [1, 1, 1, 1], warpColor = [1, 1, 1, 1]] = args;
      item.blinkRate = Number(blinkRate);
      item.blinkPhase = Number(blinkPhase);
      item.minScale = Number(minScale);
      item.maxScale = Number(maxScale);
      item.falloff = Number(falloff);
      vec4.copy(item.color, color);
      vec4.copy(item.warpColor, warpColor);
    }
    item.boneIndex = 0;
    this.sprites.push(item);
    return item;
  }

  @carbon.method
  @impl.implemented
  GetSprites()
  {
    return this.sprites;
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
  GetEffect()
  {
    return this.effect;
  }

  @carbon.method
  @impl.implemented
  SetEffect(effect)
  {
    this.effect = effect ?? null;
  }

  @carbon.method
  @impl.implemented
  SetSkinned(skinned)
  {
    this.skinned = !!skinned;
  }

  @carbon.method
  @impl.adapted
  Rebuild()
  {
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
  @impl.adapted
  AddLightFromSOF(light)
  {
    this.lights.push(EveSpriteLight.FromSOF(light));
  }

  /** Carbon EveSpriteSet::RegisterComponents (cpp:445-452): LightOwner when
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

  /** Carbon EveSpriteSet::GetLights (cpp:454-471): per-light submission.
   * Awaits the LightOwner consumption pass (Tr2LightManager submission is
   * unported); presence satisfies the "LightOwner" duck contract. */
  @carbon.method
  @impl.notImplemented
  GetLights(..._args)
  {
    throw new Error("EveSpriteSet.GetLights is not implemented in CarbonEngineJS.");
  }
}
