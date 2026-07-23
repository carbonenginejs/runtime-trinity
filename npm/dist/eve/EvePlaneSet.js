import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EvePlaneLight as _EvePlaneLight } from './EvePlaneLight.js';

let _initProto, _initClass, _init_pickBufferID, _init_extra_pickBufferID, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_effect, _init_extra_effect, _init_skinned, _init_extra_skinned, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_planes, _init_extra_planes, _init_lights, _init_extra_lights, _init_imageMapParameter, _init_extra_imageMapParameter, _init_layerMap1Parameter, _init_extra_layerMap1Parameter, _init_layerMap2Parameter, _init_extra_layerMap2Parameter, _init_maskMapParameter, _init_extra_maskMapParameter;
let _EvePlaneSet;
class EvePlaneSet extends _EveEntity {
  static {
    ({
      e: [_init_pickBufferID, _init_extra_pickBufferID, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_effect, _init_extra_effect, _init_skinned, _init_extra_skinned, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_planes, _init_extra_planes, _init_lights, _init_extra_lights, _init_imageMapParameter, _init_extra_imageMapParameter, _init_layerMap1Parameter, _init_extra_layerMap1Parameter, _init_layerMap2Parameter, _init_extra_layerMap2Parameter, _init_maskMapParameter, _init_extra_maskMapParameter, _initProto],
      c: [_EvePlaneSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EvePlaneSet",
      family: "eve/attachment/planes"
    })], [[[void 0, io.rebuild("packedGeometry"), io, io.notify, io, io.persist, type, type.uint8], 16, "pickBufferID"], [[io, io.persist, type, type.boolean], 16, "hideOnLowQuality"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, type, type.boolean], 16, "skinned"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, void 0, type.list("EvePlaneSetItem")], 16, "planes"], [[io, io.persist, void 0, type.list("EvePlaneLight")], 16, "lights"], [[io, io.persist, void 0, type.objectRef("TriTextureParameter")], 16, "imageMapParameter"], [[io, io.persist, void 0, type.objectRef("TriTextureParameter")], 16, "layerMap1Parameter"], [[io, io.persist, void 0, type.objectRef("TriTextureParameter")], 16, "layerMap2Parameter"], [[io, io.persist, void 0, type.objectRef("TriTextureParameter")], 16, "maskMapParameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetEffect"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetPickBufferID"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetIsSkinned"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddPlaneItem"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetPlanes"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetImageMapParameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetLayerMap1Parameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetLayerMap2Parameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMaskMapParameter"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
  }
  pickBufferID = (_initProto(this), _init_pickBufferID(this, 0));
  hideOnLowQuality = (_init_extra_pickBufferID(this), _init_hideOnLowQuality(this, false));
  effect = (_init_extra_hideOnLowQuality(this), _init_effect(this, null));
  skinned = (_init_extra_effect(this), _init_skinned(this, false));
  display = (_init_extra_skinned(this), _init_display(this, true));
  name = (_init_extra_display(this), _init_name(this, ""));
  planes = (_init_extra_name(this), _init_planes(this, []));
  lights = (_init_extra_planes(this), _init_lights(this, []));

  // SOF-authored shared texture parameters; persisted so the values
  // interchange reproduces Carbon's hidden plane-set bindings.
  imageMapParameter = (_init_extra_lights(this), _init_imageMapParameter(this, null));
  layerMap1Parameter = (_init_extra_imageMapParameter(this), _init_layerMap1Parameter(this, null));
  layerMap2Parameter = (_init_extra_layerMap1Parameter(this), _init_layerMap2Parameter(this, null));
  maskMapParameter = (_init_extra_layerMap2Parameter(this), _init_maskMapParameter(this, null));
  #rebuildRevision = (_init_extra_maskMapParameter(this), 0);
  Rebuild() {
    // Packed vertices, bounds caches and quad registration are reconciled by
    // the renderer adapter from this authored graph.
    this.#rebuildRevision++;
    this.__state.rebuild.add("packedGeometry");
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
    this.imageMapParameter = parameter ?? null;
  }
  SetLayerMap1Parameter(parameter) {
    this.layerMap1Parameter = parameter ?? null;
  }
  SetLayerMap2Parameter(parameter) {
    this.layerMap2Parameter = parameter ?? null;
  }
  SetMaskMapParameter(parameter) {
    this.maskMapParameter = parameter ?? null;
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
