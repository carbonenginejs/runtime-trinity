import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EveSpotlightLight as _EveSpotlightLight } from './EveSpotlightLight.js';

let _initProto, _initClass, _init_spotlightItems, _init_extra_spotlightItems, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_coneEffect, _init_extra_coneEffect, _init_glowEffect, _init_extra_glowEffect, _init_skinned, _init_extra_skinned, _init_intensity, _init_extra_intensity, _init_lights, _init_extra_lights;
let _EveSpotlightSet;
class EveSpotlightSet extends _EveEntity {
  static {
    ({
      e: [_init_spotlightItems, _init_extra_spotlightItems, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_coneEffect, _init_extra_coneEffect, _init_glowEffect, _init_extra_glowEffect, _init_skinned, _init_extra_skinned, _init_intensity, _init_extra_intensity, _init_lights, _init_extra_lights, _initProto],
      c: [_EveSpotlightSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpotlightSet",
      family: "eve/attachment/spotlights"
    })], [[[io, io.persist, void 0, type.list("EveSpotlightSetItem")], 16, "spotlightItems"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "coneEffect"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "glowEffect"], [[io, io.persist, type, type.boolean], 16, "skinned"], [[io, io.persist, type, type.float32], 16, "intensity"], [[io, io.persist, void 0, type.list("EveSpotlightLight")], 16, "lights"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetConeEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetConeEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetGlowEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetGlowEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSkinned"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetSpotlightItems"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddSpotlightItem"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
  }
  spotlightItems = (_initProto(this), _init_spotlightItems(this, []));
  name = (_init_extra_spotlightItems(this), _init_name(this, ""));
  display = (_init_extra_name(this), _init_display(this, true));
  coneEffect = (_init_extra_display(this), _init_coneEffect(this, null));
  glowEffect = (_init_extra_coneEffect(this), _init_glowEffect(this, null));
  skinned = (_init_extra_glowEffect(this), _init_skinned(this, false));
  intensity = (_init_extra_skinned(this), _init_intensity(this, 1));
  lights = (_init_extra_intensity(this), _init_lights(this, []));
  #rebuildRevision = (_init_extra_lights(this), 0);
  Rebuild() {
    // Packed cone/glow vertices, bounds caches, effect hashes and quad
    // registration are reconciled by the concrete renderer adapter.
    this.#rebuildRevision++;
  }
  Initialize() {
    this.Rebuild();
    return true;
  }
  GetConeEffect() {
    return this.coneEffect;
  }
  SetConeEffect(effect) {
    this.coneEffect = effect ?? null;
  }
  GetGlowEffect() {
    return this.glowEffect;
  }
  SetGlowEffect(effect) {
    this.glowEffect = effect ?? null;
  }
  SetSkinned(skinned) {
    this.skinned = !!skinned;
  }
  GetName() {
    return this.name;
  }
  SetName(name) {
    this.name = String(name ?? "");
  }
  GetSpotlightItems() {
    return this.spotlightItems;
  }
  AddSpotlightItem(item) {
    this.spotlightItems.push(item);
  }
  SetShaderOption(name, value) {
    if (this.coneEffect && typeof this.coneEffect.SetOption === "function") {
      this.coneEffect.SetOption(name, value);
    }
    if (this.glowEffect && typeof this.glowEffect.SetOption === "function") {
      this.glowEffect.SetOption(name, value);
    }
  }
  AddLightFromSOF(light) {
    this.lights.push(_EveSpotlightLight.FromSOF(light));
  }
  static {
    _initClass();
  }
}

export { _EveSpotlightSet as EveSpotlightSet };
//# sourceMappingURL=EveSpotlightSet.js.map
