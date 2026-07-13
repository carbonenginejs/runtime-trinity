import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2MeshBase as _Tr2MeshBase } from './Tr2MeshBase.js';

let _initProto, _initClass, _init_geometryResPath, _init_extra_geometryResPath, _init_serializedMorphAnimations, _init_extra_serializedMorphAnimations, _init_deferGeometryLoad, _init_extra_deferGeometryLoad, _init_geometry, _init_extra_geometry;
let _Tr2Mesh;
class Tr2Mesh extends _Tr2MeshBase {
  static {
    ({
      e: [_init_geometryResPath, _init_extra_geometryResPath, _init_serializedMorphAnimations, _init_extra_serializedMorphAnimations, _init_deferGeometryLoad, _init_extra_deferGeometryLoad, _init_geometry, _init_extra_geometry, _initProto],
      c: [_Tr2Mesh, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Mesh",
      family: "trinityCore"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "geometryResPath"], [[io, io.persistOnly, void 0, type.list("Tr2SerializedMorphAnimation")], 16, "serializedMorphAnimations"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "deferGeometryLoad"], [[io, io.read, void 0, type.objectRef("TriGeometryRes")], 16, "geometry"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMeshResPath"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetGeometryRes"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetGeometryResource"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetGeometryResPath"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetAreasCount"]], 0, void 0, _Tr2MeshBase));
  }
  constructor(...args) {
    super(...args);
    _init_extra_geometry(this);
  }
  geometryResPath = (_initProto(this), _init_geometryResPath(this, ""));
  serializedMorphAnimations = (_init_extra_geometryResPath(this), _init_serializedMorphAnimations(this, []));
  deferGeometryLoad = (_init_extra_serializedMorphAnimations(this), _init_deferGeometryLoad(this, false));
  geometry = (_init_extra_deferGeometryLoad(this), _init_geometry(this, null));
  get isLoading() {
    return this.geometry?.IsLoading?.() ?? false;
  }
  Initialize() {
    return true;
  }
  OnModified() {
    return true;
  }
  SetMeshResPath(path) {
    this.geometryResPath = String(path ?? "");
  }
  SetGeometryRes(resource) {
    this.geometryResPath = "";
    this.geometry = resource ?? null;
  }
  GetGeometryResource() {
    return this.geometry;
  }
  GetGeometryResPath() {
    return this.geometry?.GetPath?.() ?? this.geometryResPath;
  }
  GetAreasCount() {
    return 14;
  }
  static {
    _initClass();
  }
}

export { _Tr2Mesh as Tr2Mesh };
//# sourceMappingURL=Tr2Mesh.js.map
