import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EveSpriteSetItem as _EveSpriteSetItem } from '../generated/eve/attachment/sprites/EveSpriteSetItem.js';
import { EveSpriteLight as _EveSpriteLight } from './EveSpriteLight.js';

let _initProto, _initClass, _init_sprites, _init_extra_sprites, _init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_skinned, _init_extra_skinned, _init_intensity, _init_extra_intensity, _init_display, _init_extra_display, _init_lights, _init_extra_lights;
let _EveSpriteSet;
class EveSpriteSet extends _EveEntity {
  static {
    ({
      e: [_init_sprites, _init_extra_sprites, _init_name, _init_extra_name, _init_effect, _init_extra_effect, _init_skinned, _init_extra_skinned, _init_intensity, _init_extra_intensity, _init_display, _init_extra_display, _init_lights, _init_extra_lights, _initProto],
      c: [_EveSpriteSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpriteSet",
      family: "eve/attachment/sprites"
    })], [[[void 0, io.rebuild("packedGeometry"), io, io.notify, io, io.persist, void 0, type.list("EveSpriteSetItem")], 16, "sprites"], [[io, io.persist, type, type.string], 16, "name"], [[void 0, io.rebuild("packedGeometry"), io, io.notify, io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, type, type.boolean], 16, "skinned"], [[io, io.persist, type, type.float32], 16, "intensity"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, void 0, type.list("EveSpriteLight")], 16, "lights"], [[carbon, carbon.method, impl, impl.implemented], 18, "Clear"], [[carbon, carbon.method, impl, impl.adapted], 18, "Add"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetSprites"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSkinned"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
  }
  sprites = (_initProto(this), _init_sprites(this, []));
  name = (_init_extra_sprites(this), _init_name(this, ""));
  effect = (_init_extra_name(this), _init_effect(this, null));
  skinned = (_init_extra_effect(this), _init_skinned(this, false));
  intensity = (_init_extra_skinned(this), _init_intensity(this, 1));
  display = (_init_extra_intensity(this), _init_display(this, true));
  lights = (_init_extra_display(this), _init_lights(this, []));
  #rebuildRevision = (_init_extra_lights(this), 0);
  Clear() {
    this.sprites.length = 0;
    this.lights.length = 0;
  }
  Add(positionOrItem, ...args) {
    if (positionOrItem && !ArrayBuffer.isView(positionOrItem) && !Array.isArray(positionOrItem) && args.length === 0) {
      this.sprites.push(positionOrItem);
      return positionOrItem;
    }
    const item = new _EveSpriteSetItem();
    vec3.copy(item.position, positionOrItem ?? vec3.create());
    if (args.length === 3) {
      const [scale, color, warpColor] = args;
      item.blinkRate = 0;
      item.blinkPhase = 0;
      item.minScale = Number(scale);
      item.maxScale = Number(scale);
      item.falloff = 0;
      vec4.copy(item.color, color);
      vec4.copy(item.warpColor, warpColor);
    } else {
      const [blinkRate = 0, blinkPhase = 0, minScale = 1, maxScale = 1, falloff = 0, color = [1, 1, 1, 1], warpColor = [1, 1, 1, 1]] = args;
      item.blinkRate = Number(blinkRate);
      item.blinkPhase = Number(blinkPhase);
      item.minScale = Number(minScale);
      item.maxScale = Number(maxScale);
      item.falloff = Number(falloff);
      vec4.copy(item.color, color);
      vec4.copy(item.warpColor, warpColor);
    }
    item.boneIndex = 0;
    this.sprites.push(item);
    return item;
  }
  GetSprites() {
    return this.sprites;
  }
  GetName() {
    return this.name;
  }
  SetName(name) {
    this.name = String(name ?? "");
  }
  GetEffect() {
    return this.effect;
  }
  SetEffect(effect) {
    this.effect = effect ?? null;
  }
  SetSkinned(skinned) {
    this.skinned = !!skinned;
  }
  Rebuild() {
    this.#rebuildRevision++;
  }
  Initialize() {
    this.Rebuild();
    return true;
  }
  AddLightFromSOF(light) {
    this.lights.push(_EveSpriteLight.FromSOF(light));
  }
  static {
    _initClass();
  }
}

export { _EveSpriteSet as EveSpriteSet };
//# sourceMappingURL=EveSpriteSet.js.map
