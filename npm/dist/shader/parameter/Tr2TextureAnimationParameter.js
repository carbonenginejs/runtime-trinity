import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsParameter } from './CjsParameter.js';

let _initProto, _initClass, _init_animation, _init_extra_animation, _init_channel, _init_extra_channel, _init_name, _init_extra_name;

/** Tr2TextureAnimationParameter (shader) - generated from schema shapeHash 609a4065.... */
let _Tr2TextureAnimationP;
class Tr2TextureAnimationParameter extends CjsParameter {
  static {
    ({
      e: [_init_animation, _init_extra_animation, _init_channel, _init_extra_channel, _init_name, _init_extra_name, _initProto],
      c: [_Tr2TextureAnimationP, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2TextureAnimationParameter",
      family: "shader"
    })], [[[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2TextureAnimation")], 16, "animation"], [[io, io.persist, type, type.string], 16, "channel"], [[io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyToResourceSet"], [[carbon, carbon.method, impl, impl.implemented], 18, "ApplyUav"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnAddedToMaterial"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnRemovedFromMaterial"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetTexture"]], 0, void 0, CjsParameter));
  }
  /** m_animation (Tr2TextureAnimationPtr) [READWRITE, PERSIST, NOTIFY] */
  animation = (_initProto(this), _init_animation(this, null));

  /** m_channel (BlueSharedString) [READWRITE, PERSIST] */
  channel = (_init_extra_animation(this), _init_channel(this, ""));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_channel(this), _init_name(this, ""));
  resourceType = (_init_extra_name(this), 0);
  #materials = [];
  GetParameterName() {
    return this.name;
  }
  OnModified(_options = {}) {
    for (const material of this.#materials) {
      CjsParameter.markMaterialResourcesDirty(material);
    }
    return true;
  }
  RebuildEffectHandles(effectRes) {
    const resource = this.name ? CjsParameter.getEffectResource(effectRes, this.name) : null;
    if (resource) {
      this.resourceType = resource.type ?? this.resourceType;
    }
  }
  CopyToResourceSet() {
    return false;
  }
  ApplyUav() {
    return false;
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
  GetTexture() {
    return this.animation?.GetTexture?.(this.channel) ?? this.animation?.getTexture?.(this.channel) ?? null;
  }
  static {
    _initClass();
  }
}

export { _Tr2TextureAnimationP as Tr2TextureAnimationParameter };
//# sourceMappingURL=Tr2TextureAnimationParameter.js.map
