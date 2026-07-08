// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2RuntimeTextureParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2RuntimeTextureParameter.cpp
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2RuntimeTextureParameter_Blue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "Tr2RuntimeTextureParameter", family: "shader" })
export class Tr2RuntimeTextureParameter extends CjsModel {
  @io.notify
  @io.persist
  @type.objectRef("ITr2TextureProvider")
  texture: unknown = null;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.uint32
  uavMipLevel = 0;

  #materials: unknown[] = [];

  @carbon.method
  @impl.adapted
  __init__(
    name = "",
    texture: unknown = null,
    uavMipLevel = 0,
  ): void {
    this.Create(name, texture, uavMipLevel);
  }

  @carbon.method
  @impl.implemented
  Create(name: string, texture: unknown, uavMipLevel = 0): void {
    this.name = String(name);
    this.texture = texture;
    this.uavMipLevel = uavMipLevel >>> 0;
  }

  @carbon.method
  @impl.implemented
  GetParameterName(): string {
    return this.name;
  }

  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.#invalidateResourceSets();
    return true;
  }

  @carbon.method
  @impl.adapted
  RebuildEffectHandles(_effectRes: unknown): void {
    // Carbon caches the effect resource type here for later resource-set
    // binding. Runtime-trinity leaves that realization to engine adapters.
  }

  @carbon.method
  @impl.implemented
  SetTextureProvider(texture: unknown): void {
    if (this.texture === texture) {
      return;
    }
    this.texture = texture;
    this.#invalidateResourceSets();
  }

  @carbon.method
  @impl.implemented
  GetTextureProvider(): unknown {
    return this.texture;
  }

  @carbon.method
  @impl.implemented
  SetUavMipLevel(mipLevel: number): void {
    this.uavMipLevel = mipLevel >>> 0;
  }

  @carbon.method
  @impl.implemented
  OnAddedToMaterial(material: unknown): void {
    if (!this.#materials.includes(material)) {
      this.#materials.push(material);
    }
  }

  @carbon.method
  @impl.implemented
  OnRemovedFromMaterial(material: unknown): void {
    const index = this.#materials.indexOf(material);
    if (index >= 0) {
      this.#materials.splice(index, 1);
    }
  }

  #invalidateResourceSets(): void {
    for (const material of this.#materials) {
      (material as { InvalidateResourceSets?(): void } | null)
        ?.InvalidateResourceSets?.();
    }
  }
}
