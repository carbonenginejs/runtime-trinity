import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_index, _init_extra_index, _init_count, _init_extra_count, _init_reversed, _init_extra_reversed, _init_useSHLighting, _init_extra_useSHLighting, _init_effect, _init_extra_effect;
let _Tr2MeshArea;
class Tr2MeshArea extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_display, _init_extra_display, _init_index, _init_extra_index, _init_count, _init_extra_count, _init_reversed, _init_extra_reversed, _init_useSHLighting, _init_extra_useSHLighting, _init_effect, _init_extra_effect, _initProto],
      c: [_Tr2MeshArea, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2MeshArea",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[void 0, io.rebuild("batches"), io, io.persist, type, type.int32], 16, "index"], [[void 0, io.rebuild("batches"), io, io.persist, type, type.int32], 16, "count"], [[void 0, io.rebuild("batches"), io, io.persistOnly, type, type.boolean], 16, "reversed"], [[void 0, io.rebuild("batches"), io, io.persist, type, type.boolean], 16, "useSHLighting"], [[void 0, io.rebuild("batches"), io, io.notify, io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetIndex"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetIndex"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetCount"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetCount"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDisplay"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDisplay"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetReversed"], [[carbon, carbon.method, impl, impl.adapted], 18, "IsReversed"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetReversed"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetUseSHLighting"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetUseSHLighting"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMaterialInterface"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMaterial"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "IsCastingShadows"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetCastsShadows"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetGenerateDepthArea"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetGenerateDepthArea"]], 0, void 0, CjsModel));
  }
  name = (_initProto(this), _init_name(this, ""));
  display = (_init_extra_name(this), _init_display(this, true));
  index = (_init_extra_display(this), _init_index(this, 0));
  count = (_init_extra_index(this), _init_count(this, 1));
  reversed = (_init_extra_count(this), _init_reversed(this, false));
  useSHLighting = (_init_extra_reversed(this), _init_useSHLighting(this, false));
  effect = (_init_extra_useSHLighting(this), _init_effect(this, null));
  #castsShadows = (_init_extra_effect(this), true);
  #generateDepthArea = false;
  GetIndex() {
    return this.index;
  }
  SetIndex(value) {
    this.index = Number(value) | 0;
  }
  GetCount() {
    return this.count;
  }
  SetCount(value) {
    this.count = Number(value) | 0;
  }
  GetDisplay() {
    return this.display;
  }
  SetDisplay(value) {
    this.display = !!value;
  }
  GetReversed() {
    return this.reversed;
  }
  IsReversed() {
    return this.reversed;
  }
  SetReversed(value) {
    this.reversed = !!value;
  }
  GetUseSHLighting() {
    return this.useSHLighting;
  }
  SetUseSHLighting(value) {
    this.useSHLighting = !!value;
  }
  GetMaterialInterface() {
    return this.effect;
  }
  SetMaterial(value) {
    this.effect = value ?? null;
  }
  GetName() {
    return this.name;
  }
  SetName(value) {
    this.name = String(value ?? "");
  }
  IsCastingShadows() {
    return this.#castsShadows;
  }
  SetCastsShadows(value) {
    this.#castsShadows = !!value;
  }
  GetGenerateDepthArea() {
    return this.#generateDepthArea;
  }
  SetGenerateDepthArea(value) {
    this.#generateDepthArea = !!value;
  }
  static {
    _initClass();
  }
}

export { _Tr2MeshArea as Tr2MeshArea };
//# sourceMappingURL=Tr2MeshArea.js.map
