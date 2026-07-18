import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EvePlaneLight as _EvePlaneLight } from './EvePlaneLight.js';

let _initProto, _initClass, _init_pickBufferID, _init_extra_pickBufferID, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_effect, _init_extra_effect, _init_skinned, _init_extra_skinned, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_planes, _init_extra_planes, _init_lights, _init_extra_lights;
let _EvePlaneSet;
class EvePlaneSet extends _EveEntity {
  static {
    ({
      e: [_init_pickBufferID, _init_extra_pickBufferID, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_effect, _init_extra_effect, _init_skinned, _init_extra_skinned, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_planes, _init_extra_planes, _init_lights, _init_extra_lights, _initProto],
      c: [_EvePlaneSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EvePlaneSet",
      family: "eve/attachment/planes"
    })], [[[io, io.notify, io, io.persist, type, type.uint8], 16, "pickBufferID"], [[io, io.persist, type, type.boolean], 16, "hideOnLowQuality"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.boolean], 16, "skinned"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("EvePlaneSetItem")], 16, "planes"], [[io, io.persist, void 0, type.list("EvePlaneLight")], 16, "lights"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetEffect"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetPickBufferID"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetIsSkinned"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddPlaneItem"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetPlanes"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetImageMapParameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetLayerMap1Parameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetLayerMap2Parameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMaskMapParameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
  }
  pickBufferID = (_initProto(this), _init_pickBufferID(this, 0));
  hideOnLowQuality = (_init_extra_pickBufferID(this), _init_hideOnLowQuality(this, false));
  effect = (_init_extra_hideOnLowQuality(this), _init_effect(this, null));
  skinned = (_init_extra_effect(this), _init_skinned(this, false));
  display = (_init_extra_skinned(this), _init_display(this, true));
  name = (_init_extra_display(this), _init_name(this, ""));
  planes = (_init_extra_name(this), _init_planes(this, []));
  lights = (_init_extra_planes(this), _init_lights(this, []));
  #imageMapParameter = (_init_extra_lights(this), null);
  #layerMap1Parameter = null;
  #layerMap2Parameter = null;
  #maskMapParameter = null;
  #rebuildRevision = 0;
  Rebuild() {
    // Packed vertices, bounds caches and quad registration are reconciled by
    // the renderer adapter from this authored graph.
    this.#rebuildRevision++;
  }
  Initialize() {
    this.Rebuild();
    return true;
  }
  SetEffect(effect) {
    this.effect = effect ?? null;
  }
  SetPickBufferID(pickBufferID) {
    this.pickBufferID = Number(pickBufferID) & 0xff;
    if (this.planes.length) this.Rebuild();
  }
  SetIsSkinned(skinned) {
    this.skinned = !!skinned;
  }
  AddPlaneItem(item) {
    this.planes.push(item);
  }
  GetPlanes() {
    return this.planes;
  }
  SetShaderOption(name, value) {
    if (this.effect && typeof this.effect.SetOption === "function") {
      this.effect.SetOption(name, value);
    }
  }
  SetImageMapParameter(parameter) {
    this.#imageMapParameter = parameter ?? null;
  }
  SetLayerMap1Parameter(parameter) {
    this.#layerMap1Parameter = parameter ?? null;
  }
  SetLayerMap2Parameter(parameter) {
    this.#layerMap2Parameter = parameter ?? null;
  }
  SetMaskMapParameter(parameter) {
    this.#maskMapParameter = parameter ?? null;
  }
  AddLightFromSOF(light) {
    this.lights.push(_EvePlaneLight.FromSOF(light));
  }
  static {
    _initClass();
  }
}

export { _EvePlaneSet as EvePlaneSet };
//# sourceMappingURL=EvePlaneSet.js.map
