// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpriteLineSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveSpriteLineSet.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EveSpriteLight } from "./EveSpriteLight.js";


@type.define({ className: "EveSpriteLineSet", family: "eve/attachment/sprites" })
export class EveSpriteLineSet extends EveEntity
{
  @io.rebuild("packedGeometry")
  @io.persist
  @type.list("EveSpriteLineSetItem")
  spriteLines = [];

  @io.rebuild("packedGeometry")
  @io.persist
  @type.boolean
  skinned = false;

  @io.read
  @type.uint32
  effectHash = 0;

  @io.rebuild("packedGeometry")
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  @io.readwrite
  @type.boolean
  display = true;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.list("EveSpriteLight")
  lights = [];

  #rebuildRevision = 0;

  @carbon.method
  @impl.adapted
  Rebuild()
  {
    // Position expansion is available on each item, but packed quad data,
    // effect hashes, bounds caches and registration belong to the adapter.
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
  Setup(effect, isSkinned)
  {
    this.effect = effect ?? null;
    this.skinned = !!isSkinned;
  }

  @carbon.method
  @impl.implemented
  Add(item)
  {
    this.spriteLines.push(item);
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
    this.lights.push(EveSpriteLight.FromSOF(light));
  }
}
