// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EvePlaneSet.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\Sets\EvePlaneSet.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EvePlaneLight } from "./EvePlaneLight.js";


@type.define({ className: "EvePlaneSet", family: "eve/attachment/planes" })
export class EvePlaneSet extends EveEntity
{
  @io.notify
  @io.persist
  @type.uint8
  pickBufferID = 0;

  @io.persist
  @type.boolean
  hideOnLowQuality = false;

  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  @io.persist
  @type.boolean
  skinned = false;

  @io.persist
  @type.boolean
  display = true;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.list("EvePlaneSetItem")
  planes = [];

  #imageMapParameter = null;
  #layerMap1Parameter = null;
  #layerMap2Parameter = null;
  #maskMapParameter = null;
  #lights = [];
  #rebuildRevision = 0;

  @carbon.method
  @impl.adapted
  Rebuild()
  {
    // Packed vertices, bounds caches and quad registration are reconciled by
    // the renderer adapter from this authored graph.
    this.#rebuildRevision++;
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
  SetEffect(effect)
  {
    this.effect = effect ?? null;
  }

  @carbon.method
  @impl.adapted
  SetPickBufferID(pickBufferID)
  {
    this.pickBufferID = Number(pickBufferID) & 0xff;
    if (this.planes.length) this.Rebuild();
  }

  @carbon.method
  @impl.implemented
  SetIsSkinned(skinned)
  {
    this.skinned = !!skinned;
  }

  @carbon.method
  @impl.implemented
  AddPlaneItem(item)
  {
    this.planes.push(item);
  }

  @carbon.method
  @impl.implemented
  GetPlanes()
  {
    return this.planes;
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
  SetImageMapParameter(parameter)
  {
    this.#imageMapParameter = parameter ?? null;
  }

  @carbon.method
  @impl.adapted
  SetLayerMap1Parameter(parameter)
  {
    this.#layerMap1Parameter = parameter ?? null;
  }

  @carbon.method
  @impl.adapted
  SetLayerMap2Parameter(parameter)
  {
    this.#layerMap2Parameter = parameter ?? null;
  }

  @carbon.method
  @impl.adapted
  SetMaskMapParameter(parameter)
  {
    this.#maskMapParameter = parameter ?? null;
  }

  @carbon.method
  @impl.adapted
  AddLightFromSOF(light)
  {
    this.#lights.push(EvePlaneLight.FromSOF(light));
  }
}
