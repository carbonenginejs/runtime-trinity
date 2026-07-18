import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import '@carbonenginejs/core-types/model';
import { CjsShaderParameter } from './CjsShaderParameter.js';

let _initProto, _initClass, _init_resourcePath, _init_extra_resourcePath, _init_uavMipLevel, _init_extra_uavMipLevel, _init_positionScale, _init_extra_positionScale, _init_resource, _init_extra_resource, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name, _init_uvDensityScale, _init_extra_uvDensityScale, _init_uvDensityScale2, _init_extra_uvDensityScale2, _init_uvDensityScale3, _init_extra_uvDensityScale3, _init_uvDensityScale4, _init_extra_uvDensityScale4;
let _TriTextureParameter;
class TriTextureParameter extends CjsShaderParameter {
  static {
    ({
      e: [_init_resourcePath, _init_extra_resourcePath, _init_uavMipLevel, _init_extra_uavMipLevel, _init_positionScale, _init_extra_positionScale, _init_resource, _init_extra_resource, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name, _init_uvDensityScale, _init_extra_uvDensityScale, _init_uvDensityScale2, _init_extra_uvDensityScale2, _init_uvDensityScale3, _init_extra_uvDensityScale3, _init_uvDensityScale4, _init_extra_uvDensityScale4, _initProto],
      c: [_TriTextureParameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriTextureParameter",
      family: "shader"
    })], [[[void 0, io.flag("resource"), io, io.notify, io, io.persist, type, type.path], 16, "resourcePath"], [[io, io.persist, type, type.uint32], 16, "uavMipLevel"], [[io, io.read, type, type.float32], 16, "positionScale"], [[io, io.read, void 0, type.objectRef("ITr2TextureProvider")], 16, "resource"], [[io, io.read, type, type.boolean], 16, "usedByCurrentTechnique"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[void 0, io.flag("effectHandles"), io, io.notify, io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.float32], 16, "uvDensityScale0"], [[io, io.read, type, type.float32], 16, "uvDensityScale1"], [[io, io.read, type, type.float32], 16, "uvDensityScale2"], [[io, io.read, type, type.float32], 16, "uvDensityScale3"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetParameterName"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetResourcePath"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetResourcePath"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetResource"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetResource"], [[carbon, carbon.method, impl, impl.implemented], 18, "SupportsDirtyNotification"], [[carbon, carbon.method, impl, impl.adapted], 18, "EnableTextureLoding"], [[carbon, carbon.method, impl, impl.implemented], 18, "DisableTextureLoding"], [[carbon, carbon.method, impl, impl.adapted], 18, "UsedWithScreenSize"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnAddedToMaterial"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnRemovedFromMaterial"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnTextureChanged"]], 0, void 0, CjsShaderParameter));
  }
  resourcePath = (_initProto(this), _init_resourcePath(this, ""));
  uavMipLevel = (_init_extra_resourcePath(this), _init_uavMipLevel(this, 0));
  positionScale = (_init_extra_uavMipLevel(this), _init_positionScale(this, 0));
  resource = (_init_extra_positionScale(this), _init_resource(this, null));
  usedByCurrentTechnique = (_init_extra_resource(this), _init_usedByCurrentTechnique(this, false));
  usedByCurrentEffect = (_init_extra_usedByCurrentTechnique(this), _init_usedByCurrentEffect(this, false));
  name = (_init_extra_usedByCurrentEffect(this), _init_name(this, ""));
  uvDensityScale0 = (_init_extra_name(this), _init_uvDensityScale(this, 0));
  uvDensityScale1 = (_init_extra_uvDensityScale(this), _init_uvDensityScale2(this, 0));
  uvDensityScale2 = (_init_extra_uvDensityScale2(this), _init_uvDensityScale3(this, 0));
  uvDensityScale3 = (_init_extra_uvDensityScale3(this), _init_uvDensityScale4(this, 0));
  #cachedEffect = (_init_extra_uvDensityScale4(this), null);
  #lowResResource = null;
  #materials = [];
  #textureLodEnabled = false;
  GetParameterName() {
    return this.name;
  }
  SetParameterName(name) {
    return this.SetValues({
      name: String(name)
    }, {
      source: this,
      returnBoolean: true
    });
  }
  GetResourcePath() {
    const resource = this.GetResource();
    return resource?.GetPath?.() ?? resource?.path ?? resource?.resourcePath ?? this.resourcePath;
  }
  SetResourcePath(resourcePath) {
    this.SetValues({
      resourcePath: String(resourcePath)
    }, {
      source: this
    });
  }
  SetResource(resource) {
    if (this.resource !== resource) {
      this.resource = resource;
    }
    this.#lowResResource = null;
    this.RebuildEffectHandles(this.#cachedEffect);
    this.OnTextureChanged();
  }
  GetResource() {
    return this.#lowResResource ?? this.resource;
  }
  SupportsDirtyNotification() {
    return true;
  }
  EnableTextureLoding(uvDensityScale) {
    this.#textureLodEnabled = true;
    this.positionScale = Number(uvDensityScale[0] ?? 0);
    this.uvDensityScale0 = Number(uvDensityScale[1] ?? 0);
    this.uvDensityScale1 = Number(uvDensityScale[2] ?? 0);
    this.uvDensityScale2 = Number(uvDensityScale[3] ?? 0);
    this.uvDensityScale3 = Number(uvDensityScale[4] ?? 0);
  }
  DisableTextureLoding() {
    this.#textureLodEnabled = false;
  }
  UsedWithScreenSize(screenSize, worldRadius, uvDensities = []) {
    if (!this.#textureLodEnabled) {
      this.#requestResourceResolution(0);
      return 0;
    }
    let resolution = 0;
    const positionDensity = worldRadius * Number(this.positionScale ?? 0);
    if (positionDensity > 0) {
      resolution = Math.max(resolution, screenSize / positionDensity);
    }
    const scales = [Number(this.uvDensityScale0 ?? 0), Number(this.uvDensityScale1 ?? 0), Number(this.uvDensityScale2 ?? 0), Number(this.uvDensityScale3 ?? 0)];
    for (let i = 0; i < Math.min(uvDensities.length, scales.length); i++) {
      const density = Number(uvDensities[i]) * scales[i];
      if (density > 0) {
        resolution = Math.max(resolution, screenSize / density);
      }
    }
    let requestedLod = 0;
    const resource = this.GetResource();
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
  OnModified(_options = {}) {
    const flags = this.__state.flags;
    if (flags.delete("resource")) {
      this.resource = null;
      this.#lowResResource = null;
      this.Initialize();
    }
    if (flags.delete("effectHandles")) {
      this.RebuildEffectHandles(this.#cachedEffect);
    }
    return true;
  }
  Initialize() {
    return true;
  }
  RebuildEffectHandles(effectRes) {
    this.#cachedEffect = effectRes;
    const used = !!this.name && (CjsShaderParameter.hasEffectResource(effectRes, this.name) || CjsShaderParameter.hasEffectConstant(effectRes, this.name));
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }
  OnAddedToMaterial(material) {
    if (!this.#materials.includes(material)) {
      this.#materials.push(material);
    }
  }
  OnRemovedFromMaterial(material) {
    const index = this.#materials.indexOf(material);
    if (index >= 0) {
      this.#materials.splice(index, 1);
    }
  }
  OnTextureChanged() {
    for (const material of this.#materials) {
      const target = material;
      target?.ResourceChanged?.();
      target?.MarkConstantBuffersDirty?.();
    }
  }
  #requestResourceResolution(lod) {
    const target = this.GetResource();
    target?.RequestResolution?.(lod);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value) {
    return typeof value === "string";
  }
  static {
    _initClass();
  }
}

export { _TriTextureParameter as TriTextureParameter };
//# sourceMappingURL=TriTextureParameter.js.map
