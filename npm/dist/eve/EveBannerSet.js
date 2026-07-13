import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EveBannerItem as _EveBannerItem } from './EveBannerItem.js';
import { EveBannerLight as _EveBannerLight } from './EveBannerLight.js';

let _initProto, _initClass, _init_banners, _init_extra_banners, _init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_isPickable, _init_extra_isPickable, _init_display, _init_extra_display, _init_key, _init_extra_key;
let _EveBannerSet;
new class extends _identity {
  static [class EveBannerSet extends _EveEntity {
    static {
      ({
        e: [_init_banners, _init_extra_banners, _init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_isPickable, _init_extra_isPickable, _init_display, _init_extra_display, _init_key, _init_extra_key, _initProto],
        c: [_EveBannerSet, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveBannerSet",
        family: "eve/attachment/banners"
      })], [[[io, io.persist, void 0, type.list("EveBannerItem")], 16, "banners"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.boolean], 16, "isPickable"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.persist, type, type.int32], 16, "key"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetReference"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddBanner"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetKey"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetPickingID"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetPrimaryTextureParameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
    }
    banners = (_initProto(this), _init_banners(this, []));
    name = (_init_extra_banners(this), _init_name(this, ""));
    effect = (_init_extra_name(this), _init_effect(this, null));
    isPickable = (_init_extra_effect(this), _init_isPickable(this, false));
    display = (_init_extra_isPickable(this), _init_display(this, true));
    key = (_init_extra_display(this), _init_key(this, 0));
    #lights = (_init_extra_key(this), []);
    #primaryTextureParameter = null;
    #rebuildRevision = 0;
    Rebuild() {
      // Physical geometry, buffers, bounds and batches are backend work.
      this.#rebuildRevision++;
    }
    GetReference(index) {
      return this.banners[index].reference;
    }
    Initialize() {
      this.Rebuild();
      return true;
    }
    AddBanner(banner) {
      const copy = _EveBannerSet.#copyBanner(banner);
      this.banners.push(copy);
      return copy;
    }
    SetEffect(effect) {
      this.effect = effect ?? null;
    }
    SetKey(key) {
      this.key = Number(key) | 0;
    }
    GetPickingID() {
      return 101 + this.key >>> 0;
    }
    SetShaderOption(name, value) {
      if (this.effect && typeof this.effect.SetOption === "function") {
        this.effect.SetOption(name, value);
      }
    }
    SetPrimaryTextureParameter(parameter) {
      this.#primaryTextureParameter = parameter ?? null;
    }
    AddLightFromSOF(light) {
      this.#lights.push(_EveBannerLight.FromSOF(light));
    }
  }];
  #copyBanner(source) {
    const banner = new _EveBannerItem();
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
  constructor() {
    super(_EveBannerSet), _initClass();
  }
}();

export { _EveBannerSet as EveBannerSet };
//# sourceMappingURL=EveBannerSet.js.map
