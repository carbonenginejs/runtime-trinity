import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_meshIndex, _init_extra_meshIndex, _init_opaqueAreas, _init_extra_opaqueAreas, _init_decalAreas, _init_extra_decalAreas, _init_depthAreas, _init_extra_depthAreas, _init_transparentAreas, _init_extra_transparentAreas, _init_additiveAreas, _init_extra_additiveAreas, _init_pickableAreas, _init_extra_pickableAreas, _init_mirrorAreas, _init_extra_mirrorAreas, _init_decalNormalAreas, _init_extra_decalNormalAreas, _init_depthNormalAreas, _init_extra_depthNormalAreas, _init_opaquePrepassAreas, _init_extra_opaquePrepassAreas, _init_decalPrepassAreas, _init_extra_decalPrepassAreas, _init_geometryEraserAreas, _init_extra_geometryEraserAreas, _init_distortionAreas, _init_extra_distortionAreas, _init_maxVertexScale, _init_extra_maxVertexScale, _init_maxVertexDisplacement, _init_extra_maxVertexDisplacement, _init_rotatesVertices, _init_extra_rotatesVertices;
let _Tr2MeshBase;
new class extends _identity {
  static [class Tr2MeshBase extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_display, _init_extra_display, _init_meshIndex, _init_extra_meshIndex, _init_opaqueAreas, _init_extra_opaqueAreas, _init_decalAreas, _init_extra_decalAreas, _init_depthAreas, _init_extra_depthAreas, _init_transparentAreas, _init_extra_transparentAreas, _init_additiveAreas, _init_extra_additiveAreas, _init_pickableAreas, _init_extra_pickableAreas, _init_mirrorAreas, _init_extra_mirrorAreas, _init_decalNormalAreas, _init_extra_decalNormalAreas, _init_depthNormalAreas, _init_extra_depthNormalAreas, _init_opaquePrepassAreas, _init_extra_opaquePrepassAreas, _init_decalPrepassAreas, _init_extra_decalPrepassAreas, _init_geometryEraserAreas, _init_extra_geometryEraserAreas, _init_distortionAreas, _init_extra_distortionAreas, _init_maxVertexScale, _init_extra_maxVertexScale, _init_maxVertexDisplacement, _init_extra_maxVertexDisplacement, _init_rotatesVertices, _init_extra_rotatesVertices, _initProto],
        c: [_Tr2MeshBase, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2MeshBase",
        family: "trinityCore"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.notify, io, io.persist, type, type.int32], 16, "meshIndex"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "opaqueAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "decalAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "depthAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "transparentAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "additiveAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "pickableAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "mirrorAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "decalNormalAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "depthNormalAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "opaquePrepassAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "decalPrepassAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "geometryEraserAreas"], [[io, io.persist, void 0, type.list("Tr2MeshArea")], 16, "distortionAreas"], [[io, io.read, io, io.persist, type, type.float32], 16, "maxVertexScale"], [[io, io.read, io, io.persist, type, type.float32], 16, "maxVertexDisplacement"], [[io, io.read, io, io.persist, type, type.boolean], 16, "rotatesVertices"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetAreas"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddArea"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetAllAreas"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMaterialBoundsAdjustment"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMaterialBoundsAdjustment"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetGeometryResPath"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_rotatesVertices(this);
    }
    name = (_initProto(this), _init_name(this, ""));
    display = (_init_extra_name(this), _init_display(this, true));
    meshIndex = (_init_extra_display(this), _init_meshIndex(this, 0));
    opaqueAreas = (_init_extra_meshIndex(this), _init_opaqueAreas(this, []));
    decalAreas = (_init_extra_opaqueAreas(this), _init_decalAreas(this, []));
    depthAreas = (_init_extra_decalAreas(this), _init_depthAreas(this, []));
    transparentAreas = (_init_extra_depthAreas(this), _init_transparentAreas(this, []));
    additiveAreas = (_init_extra_transparentAreas(this), _init_additiveAreas(this, []));
    pickableAreas = (_init_extra_additiveAreas(this), _init_pickableAreas(this, []));
    mirrorAreas = (_init_extra_pickableAreas(this), _init_mirrorAreas(this, []));
    decalNormalAreas = (_init_extra_mirrorAreas(this), _init_decalNormalAreas(this, []));
    depthNormalAreas = (_init_extra_decalNormalAreas(this), _init_depthNormalAreas(this, []));
    opaquePrepassAreas = (_init_extra_depthNormalAreas(this), _init_opaquePrepassAreas(this, []));
    decalPrepassAreas = (_init_extra_opaquePrepassAreas(this), _init_decalPrepassAreas(this, []));
    geometryEraserAreas = (_init_extra_decalPrepassAreas(this), _init_geometryEraserAreas(this, []));
    distortionAreas = (_init_extra_geometryEraserAreas(this), _init_distortionAreas(this, []));

    // Carbon routes TRIBATCHTYPE_FLARE but does not expose this list to Blue.
    flareAreas = (_init_extra_distortionAreas(this), []);
    maxVertexScale = _init_maxVertexScale(this, 1);
    maxVertexDisplacement = (_init_extra_maxVertexScale(this), _init_maxVertexDisplacement(this, 0));
    rotatesVertices = (_init_extra_maxVertexDisplacement(this), _init_rotatesVertices(this, false));
    GetAreas(areaType) {
      if (!Number.isInteger(areaType)) return null;
      const property = _Tr2MeshBase.#areaProperties[areaType];
      return property ? this[property] : null;
    }
    AddArea(areaType, area) {
      const areas = this.GetAreas(areaType);
      if (!areas) return false;
      areas.push(area);
      return true;
    }
    GetAllAreas() {
      return _Tr2MeshBase.#areaProperties.flatMap(property => this[property]);
    }
    SetShaderOption(name, value) {
      let updated = false;
      for (const area of this.GetAllAreas()) {
        if (!area?.effect?.SetOption) continue;
        area.effect.SetOption(name, value);
        updated = true;
      }
      return updated;
    }
    GetMaterialBoundsAdjustment() {
      return {
        maxLocalScale: this.maxVertexScale,
        maxLocalDisplacement: this.maxVertexDisplacement,
        rotatesVertices: this.rotatesVertices
      };
    }
    SetMaterialBoundsAdjustment(value) {
      const source = value || {};
      this.maxVertexScale = Number(source.maxLocalScale) || 0;
      this.maxVertexDisplacement = Number(source.maxLocalDisplacement) || 0;
      this.rotatesVertices = !!source.rotatesVertices;
      return true;
    }
    GetGeometryResPath() {
      return "";
    }
  }];
  #areaProperties = Object.freeze(["opaqueAreas", "decalAreas", "transparentAreas", "depthAreas", "additiveAreas", "pickableAreas", "mirrorAreas", "decalNormalAreas", "depthNormalAreas", "opaquePrepassAreas", "decalPrepassAreas", "geometryEraserAreas", "flareAreas", "distortionAreas"]);
  constructor() {
    super(_Tr2MeshBase), _initClass();
  }
}();

export { _Tr2MeshBase as Tr2MeshBase };
//# sourceMappingURL=Tr2MeshBase.js.map
