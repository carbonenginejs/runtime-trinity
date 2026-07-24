// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2RuntimeTextureParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2RuntimeTextureParameter.cpp
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2RuntimeTextureParameter_Blue.cpp
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { CjsParameter } from "./CjsParameter.js";


@type.define({
  className: "Tr2RuntimeTextureParameter",
  family: "shader"
})
export class Tr2RuntimeTextureParameter extends CjsParameter
{
  @io.notify
  @io.persist
  @type.objectRef("ITr2TextureProvider")
  texture = null;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.uint32
  uavMipLevel = 0;

  #materials = [];

  @carbon.method
  @impl.adapted
  __init__(name = "", texture = null, uavMipLevel = 0)
  {
    this.Create(name, texture, uavMipLevel);
  }
  @carbon.method
  @impl.implemented
  Create(name, texture, uavMipLevel = 0)
  {
    const nextName = String(name);
    const nextMipLevel = uavMipLevel >>> 0;
    const changed = this.name !== nextName || this.texture !== texture || this.uavMipLevel !== nextMipLevel;
    if (!changed)
    {
      return false;
    }
    this.name = nextName;
    this.texture = texture;
    this.uavMipLevel = nextMipLevel;
    this.UpdateValues({ property: "texture", source: this });
    return true;
  }
  @carbon.method
  @impl.implemented
  GetParameterName()
  {
    return this.name;
  }

  /** Content hash: the texture provider's identity (Carbon hashes its pointer). */
  @carbon.method
  @impl.adapted
  GetHashValue(startingHash = CjsParameter.FNV1_INITIAL)
  {
    return CjsParameter.hashFnv1Identity(this.texture, startingHash);
  }
  @carbon.method
  @impl.adapted
  OnModified(_options = {})
  {
    this.#invalidateResourceSets();
    return true;
  }
  @carbon.method
  @impl.adapted
  RebuildEffectHandles(_effectRes)
  {

    // Carbon caches the effect resource type here for later resource-set
    // binding. Runtime-trinity leaves that realization to engine adapters.
  }
  @carbon.method
  @impl.implemented
  SetTextureProvider(texture)
  {
    if (this.texture === texture)
    {
      return false;
    }
    this.texture = texture;
    this.UpdateValues({ property: "texture", source: this });
    return true;
  }
  @carbon.method
  @impl.implemented
  GetTextureProvider()
  {
    return this.texture;
  }
  @carbon.method
  @impl.implemented
  SetUavMipLevel(mipLevel)
  {
    this.uavMipLevel = mipLevel >>> 0;
  }
  @carbon.method
  @impl.implemented
  OnAddedToMaterial(material)
  {
    if (!this.#materials.includes(material))
    {
      this.#materials.push(material);
    }
  }
  @carbon.method
  @impl.implemented
  OnRemovedFromMaterial(material)
  {
    const index = this.#materials.indexOf(material);
    if (index >= 0)
    {
      this.#materials.splice(index, 1);
    }
  }
  #invalidateResourceSets()
  {
    for (const material of this.#materials)
    {
      material?.InvalidateResourceSets?.();
    }
  }
}
