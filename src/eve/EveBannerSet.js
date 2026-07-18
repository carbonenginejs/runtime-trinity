// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveBannerSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EveBannerSet.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EveBannerItem } from "./EveBannerItem.js";
import { EveBannerLight } from "./EveBannerLight.js";


@type.define({ className: "EveBannerSet", family: "eve/attachment/banners" })
export class EveBannerSet extends EveEntity
{
  @io.persist
  @type.list("EveBannerItem")
  banners = [];

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  @io.persist
  @type.boolean
  isPickable = false;

  @io.readwrite
  @type.boolean
  display = true;

  @io.persist
  @type.int32
  key = 0;

  @io.persist
  @type.list("EveBannerLight")
  lights = [];

  #primaryTextureParameter = null;
  #rebuildRevision = 0;

  @carbon.method
  @impl.adapted
  Rebuild()
  {
    // Physical geometry, buffers, bounds and batches are backend work.
    this.#rebuildRevision++;
  }

  @carbon.method
  @impl.implemented
  GetReference(index)
  {
    return this.banners[index].reference;
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
  AddBanner(banner)
  {
    const copy = EveBannerSet.#copyBanner(banner);
    this.banners.push(copy);
    return copy;
  }

  @carbon.method
  @impl.implemented
  SetEffect(effect)
  {
    this.effect = effect ?? null;
  }

  @carbon.method
  @impl.implemented
  SetKey(key)
  {
    this.key = Number(key) | 0;
  }

  @carbon.method
  @impl.implemented
  GetPickingID()
  {
    return (101 + this.key) >>> 0;
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
  SetPrimaryTextureParameter(parameter)
  {
    this.#primaryTextureParameter = parameter ?? null;
  }

  @carbon.method
  @impl.adapted
  AddLightFromSOF(light)
  {
    this.lights.push(EveBannerLight.FromSOF(light));
  }

  static #copyBanner(source)
  {
    const banner = new EveBannerItem();
    if (!source) return banner;
    banner.bone = Number(source.bone ?? -1) | 0;
    vec3.copy(banner.position, source.position ?? banner.position);
    quat.copy(banner.rotation, source.rotation ?? banner.rotation);
    vec3.copy(banner.scaling, source.scaling ?? banner.scaling);
    banner.angleX = Number(source.angleX ?? 0);
    banner.angleY = Number(source.angleY ?? 0);
    banner.reference = Number(source.reference ?? 0) | 0;
    return banner;
  }

}
