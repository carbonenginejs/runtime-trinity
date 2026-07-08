// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriTextureParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriTextureParameter.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { HasEffectConstant, HasEffectResource } from "./CjsShaderParameter.ts";

@type.define({ className: "TriTextureParameter", family: "shader" })
export class TriTextureParameter extends CjsModel
{
  @io.notify
  @io.persist
  @type.path
  resourcePath = "";

  @io.persist
  @type.uint32
  uavMipLevel = 0;

  @io.read
  @type.unknown
  positionScale: number | null = null;

  @io.read
  @type.objectRef("ITr2TextureProvider")
  resource: unknown = null;

  @io.read
  @type.boolean
  usedByCurrentTechnique = false;

  @io.read
  @type.boolean
  usedByCurrentEffect = false;

  @io.notify
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.unknown
  uvDensityScale0: number | null = null;

  @io.read
  @type.unknown
  uvDensityScale1: number | null = null;

  @io.read
  @type.unknown
  uvDensityScale2: number | null = null;

  @io.read
  @type.unknown
  uvDensityScale3: number | null = null;

  #cachedEffect: unknown = null;
  #lowResResource: unknown = null;
  #materials: unknown[] = [];
  #textureLodEnabled = false;

  @carbon.method
  @impl.implemented
  GetParameterName(): string
  {
    return this.name;
  }

  @carbon.method
  @impl.adapted
  SetParameterName(name: string): void
  {
    this.name = String(name);
  }

  @carbon.method
  @impl.adapted
  GetResourcePath(): string
  {
    const resource = this.GetResource() as
      | { GetPath?(): string; path?: string; resourcePath?: string }
      | null;
    return resource?.GetPath?.() ?? resource?.path ?? resource?.resourcePath ??
      this.resourcePath;
  }

  @carbon.method
  @impl.adapted
  SetResourcePath(resourcePath: string): void
  {
    if (this.resourcePath !== resourcePath) {
      this.resourcePath = String(resourcePath);
      this.OnModified(this.resourcePath);
    }
  }

  @carbon.method
  @impl.adapted
  SetResource(resource: unknown): void
  {
    if (this.resource !== resource) {
      this.resource = resource;
    }
    this.#lowResResource = null;
    this.RebuildEffectHandles(this.#cachedEffect);
    this.OnTextureChanged();
  }

  @carbon.method
  @impl.adapted
  GetResource(): unknown
  {
    return this.#lowResResource ?? this.resource;
  }

  @carbon.method
  @impl.implemented
  SupportsDirtyNotification(): boolean
  {
    return true;
  }

  @carbon.method
  @impl.adapted
  EnableTextureLoding(uvDensityScale: ArrayLike<number>): void
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
  DisableTextureLoding(): void
  {
    this.#textureLodEnabled = false;
  }

  @carbon.method
  @impl.adapted
  UsedWithScreenSize(
    screenSize: number,
    worldRadius: number,
    uvDensities: ArrayLike<number> = [],
  ): number
  {
    if (!this.#textureLodEnabled) {
      this.#requestResourceResolution(0);
      return 0;
    }

    let resolution = 0;
    const positionDensity = worldRadius * Number(this.positionScale ?? 0);
    if (positionDensity > 0) {
      resolution = Math.max(resolution, screenSize / positionDensity);
    }

    const scales = [
      Number(this.uvDensityScale0 ?? 0),
      Number(this.uvDensityScale1 ?? 0),
      Number(this.uvDensityScale2 ?? 0),
      Number(this.uvDensityScale3 ?? 0),
    ];
    for (let i = 0; i < Math.min(uvDensities.length, scales.length); i++) {
      const density = Number(uvDensities[i]) * scales[i];
      if (density > 0) {
        resolution = Math.max(resolution, screenSize / density);
      }
    }

    let requestedLod = 0;
    const resource = this.GetResource() as
      | { GetOriginalResolutionAsFloat?(): number }
      | null;
    const original = resource?.GetOriginalResolutionAsFloat?.() ?? 0;
    if (resolution > 0 && original > 0) {
      const requestedResolution = Math.max(1, resolution);
      const resolutionChange = Math.floor(original / requestedResolution);
      if (resolutionChange > 0) {
        requestedLod = Math.floor(Math.log2(resolutionChange));
      }
    }

    this.#requestResourceResolution(requestedLod);
    return requestedLod;
  }

  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean
  {
    this.resource = null;
    this.#lowResResource = null;
    this.Initialize();
    this.RebuildEffectHandles(this.#cachedEffect);
    return true;
  }

  @carbon.method
  @impl.adapted
  Initialize(): boolean
  {
    return true;
  }

  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes: unknown): void
  {
    this.#cachedEffect = effectRes;
    const used = !!this.name &&
      (HasEffectResource(effectRes, this.name) ||
        HasEffectConstant(effectRes, this.name));
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }

  @carbon.method
  @impl.implemented
  OnAddedToMaterial(material: unknown): void
  {
    if (!this.#materials.includes(material)) {
      this.#materials.push(material);
    }
  }

  @carbon.method
  @impl.implemented
  OnRemovedFromMaterial(material: unknown): void
  {
    const index = this.#materials.indexOf(material);
    if (index >= 0) {
      this.#materials.splice(index, 1);
    }
  }

  @carbon.method
  @impl.adapted
  OnTextureChanged(): void
  {
    for (const material of this.#materials) {
      const target = material as
        | { ResourceChanged?(): void; MarkConstantBuffersDirty?(): void }
        | null;
      target?.ResourceChanged?.();
      target?.MarkConstantBuffersDirty?.();
    }
  }

  #requestResourceResolution(lod: number): void
  {
    const target = this.GetResource() as
      | { RequestResolution?(lod: number): void }
      | null;
    target?.RequestResolution?.(lod);
  }
}
