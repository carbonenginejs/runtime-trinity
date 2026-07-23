import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EveSpriteLight as _EveSpriteLight } from './EveSpriteLight.js';

let _initProto, _initClass, _init_spriteLines, _init_extra_spriteLines, _init_skinned, _init_extra_skinned, _init_effectHash, _init_extra_effectHash, _init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_lights, _init_extra_lights;
let _EveSpriteLineSet;
class EveSpriteLineSet extends _EveEntity {
  static {
    ({
      e: [_init_spriteLines, _init_extra_spriteLines, _init_skinned, _init_extra_skinned, _init_effectHash, _init_extra_effectHash, _init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_lights, _init_extra_lights, _initProto],
      c: [_EveSpriteLineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpriteLineSet",
      family: "eve/attachment/sprites"
    })], [[[void 0, io.rebuild("packedGeometry"), io, io.persist, void 0, type.list("EveSpriteLineSetItem")], 16, "spriteLines"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, type, type.boolean], 16, "skinned"], [[io, io.read, type, type.uint32], 16, "effectHash"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("EveSpriteLight")], 16, "lights"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.implemented], 18, "Add"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
  }
  spriteLines = (_initProto(this), _init_spriteLines(this, []));
  skinned = (_init_extra_spriteLines(this), _init_skinned(this, false));
  effectHash = (_init_extra_skinned(this), _init_effectHash(this, 0));
  effect = (_init_extra_effectHash(this), _init_effect(this, null));
  display = (_init_extra_effect(this), _init_display(this, true));
  name = (_init_extra_display(this), _init_name(this, ""));
  lights = (_init_extra_name(this), _init_lights(this, []));
  #rebuildRevision = (_init_extra_lights(this), 0);
  Rebuild() {
    // Position expansion is available on each item, but packed quad data,
    // effect hashes, bounds caches and registration belong to the adapter.
    this.#rebuildRevision++;
    this.__state.rebuild.add("packedGeometry");
  }
  Initialize() {
    this.Rebuild();
    return true;
  }
  Setup(effect, isSkinned) {
    this.effect = effect ?? null;
    this.skinned = !!isSkinned;
  }
  Add(item) {
    this.spriteLines.push(item);
  }
  SetShaderOption(name, value) {
    if (this.effect && typeof this.effect.SetOption === "function") {
      this.effect.SetOption(name, value);
    }
  }
  AddLightFromSOF(light) {
    this.lights.push(_EveSpriteLight.FromSOF(light));
  }
  static {
    _initClass();
  }
}

export { _EveSpriteLineSet as EveSpriteLineSet };
//# sourceMappingURL=EveSpriteLineSet.js.map
