// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriTextureParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriTextureParameter.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { CjsShaderParameter } from "./CjsShaderParameter.js";


@type.define({
  className: "TriTextureParameter",
  family: "shader"
})
export class TriTextureParameter extends CjsShaderParameter
{
  @io.flag("resource")
  @io.notify
  @io.persist
  @type.path
  resourcePath = "";

  @io.persist
  @type.uint32
  uavMipLevel = 0;

  @io.read
  @type.float32
  positionScale = 0;

  @io.read
  @type.objectRef("ITr2TextureProvider")
  resource = null;

  @io.read
  @type.boolean
  usedByCurrentTechnique = false;

  @io.read
  @type.boolean
  usedByCurrentEffect = false;

  @io.flag("effectHandles")
  @io.notify
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.float32
  uvDensityScale0 = 0;

  @io.read
  @type.float32
  uvDensityScale1 = 0;

  @io.read
  @type.float32
  uvDensityScale2 = 0;

  @io.read
  @type.float32
  uvDensityScale3 = 0;

  #cachedEffect = null;

  #lowResResource = null;

  #materials = [];

  #textureLodEnabled = false;

  @carbon.method
  @impl.implemented
  GetParameterName()
  {
    return this.name;
  }
  @carbon.method
  @impl.adapted
  SetParameterName(name)
  {
    return this.SetValues({ name: String(name) }, { source: this, returnBoolean: true });
  }
  @carbon.method
  @impl.adapted
  GetResourcePath()
  {
    const resource = this.GetResource();
    return resource?.GetPath?.() ?? resource?.path ?? resource?.resourcePath ?? this.resourcePath;
  }
  @carbon.method
  @impl.adapted
  SetResourcePath(resourcePath)
  {
    this.SetValues({ resourcePath: String(resourcePath) }, { source: this });
  }
  @carbon.method
  @impl.adapted
  SetResource(resource)
  {
    if (this.resource !== resource)
    {
      this.resource = resource;
    }
    this.#lowResResource = null;
    this.RebuildEffectHandles(this.#cachedEffect);
    this.OnTextureChanged();
  }
  @carbon.method
  @impl.adapted
  GetResource()
  {
    return this.#lowResResource ?? this.resource;
  }
  @carbon.method
  @impl.implemented
  SupportsDirtyNotification()
  {
    return true;
  }
  @carbon.method
  @impl.adapted
  EnableTextureLoding(uvDensityScale)
  {
    this.#textureLodEnabled = true;
    this.positionScale = Number(uvDensityScale[0] ?? 0);
    this.uvDensityScale0 = Number(uvDensityScale[1] ?? 0);
    this.uvDensityScale1 = Number(uvDensityScale[2] ?? 0);
    this.uvDensityScale2 = Number(uvDensityScale[3] ?? 0);
    this.uvDensityScale3 = Number(uvDensityScale[4] ?? 0);
  }
  @carbon.method
  @impl.implemented
  DisableTextureLoding()
  {
    this.#textureLodEnabled = false;
  }
  @carbon.method
  @impl.adapted
  UsedWithScreenSize(screenSize, worldRadius, uvDensities = [])
  {
    if (!this.#textureLodEnabled)
    {
      this.#requestResourceResolution(0);
      return 0;
    }
    let resolution = 0;
    const positionDensity = worldRadius * Number(this.positionScale ?? 0);
    if (positionDensity > 0)
    {
      resolution = Math.max(resolution, screenSize / positionDensity);
    }
    const scales = [Number(this.uvDensityScale0 ?? 0), Number(this.uvDensityScale1 ?? 0), Number(this.uvDensityScale2 ?? 0), Number(this.uvDensityScale3 ?? 0)];
    for (let i = 0; i < Math.min(uvDensities.length, scales.length); i++)
    {
      const density = Number(uvDensities[i]) * scales[i];
      if (density > 0)
      {
        resolution = Math.max(resolution, screenSize / density);
      }
    }
    let requestedLod = 0;
    const resource = this.GetResource();
    const original = resource?.GetOriginalResolutionAsFloat?.() ?? 0;
    if (resolution > 0 && original > 0)
    {
      const requestedResolution = Math.max(1, resolution);
      const resolutionChange = Math.floor(original / requestedResolution);
      if (resolutionChange > 0)
      {
        requestedLod = Math.floor(Math.log2(resolutionChange));
      }
    }
    this.#requestResourceResolution(requestedLod);
    return requestedLod;
  }
  @carbon.method
  @impl.adapted
  OnModified(_options = {})
  {
    const flags = this.__state.flags;
    if (flags.delete("resource"))
    {
      this.resource = null;
      this.#lowResResource = null;
      this.Initialize();
    }
    if (flags.delete("effectHandles"))
    {
      this.RebuildEffectHandles(this.#cachedEffect);
    }
    return true;
  }
  @carbon.method
  @impl.adapted
  Initialize()
  {
    return true;
  }
  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes)
  {
    this.#cachedEffect = effectRes;
    const used = !!this.name && (CjsShaderParameter.hasEffectResource(effectRes, this.name) || CjsShaderParameter.hasEffectConstant(effectRes, this.name));
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
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
  @carbon.method
  @impl.adapted
  OnTextureChanged()
  {
    for (const material of this.#materials)
    {
      const target = material;
      target?.ResourceChanged?.();
      target?.MarkConstantBuffersDirty?.();
    }
  }
  #requestResourceResolution(lod)
  {
    const target = this.GetResource();
    target?.RequestResolution?.(lod);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value)
  {
    return typeof value === "string";
  }

}
