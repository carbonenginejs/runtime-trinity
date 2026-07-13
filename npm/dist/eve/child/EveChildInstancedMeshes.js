import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../generated/eve/EveEntity.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_worldTransform, _init_extra_worldTransform, _init_hasUpdated, _init_extra_hasUpdated;
let _EveChildInstancedMes;
new class extends _identity {
  static [class EveChildInstancedMeshes extends _EveEntity {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_worldTransform, _init_extra_worldTransform, _init_hasUpdated, _init_extra_hasUpdated, _initProto],
        c: [_EveChildInstancedMes, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildInstancedMeshes",
        family: "eve/child"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.mat4], 16, "worldTransform"], [[io, io.read, type, type.boolean], 16, "hasUpdated"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateVisibility"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRenderables"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateSyncronous"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateAsyncronous"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalToWorldTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.implemented], 18, "ChangeLOD"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetOrigin"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsAlwaysOn"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddMesh"], [[carbon, carbon.method, impl, impl.adapted], 18, "Clear"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetSofSourceLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetMeshCount"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMeshInfo"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetAreaInfo"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMeshDisplay"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMeshDisplay"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetGeometryResource"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMeshData"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRevision"]], 0, void 0, _EveEntity));
    }
    name = (_initProto(this), _init_name(this, ""));
    worldTransform = (_init_extra_name(this), _init_worldTransform(this, mat4.create()));
    hasUpdated = (_init_extra_worldTransform(this), _init_hasUpdated(this, false));
    #meshes = (_init_extra_hasUpdated(this), []);
    #revision = 0;
    GetName() {
      return this.name;
    }
    SetName(name) {
      this.name = String(name ?? "");
    }
    UpdateVisibility() {}
    GetRenderables(renderables = []) {
      return renderables;
    }
    GetBoundingSphere() {
      return false;
    }
    UpdateSyncronous(_updateContext, params) {
      if (params?.localToWorldTransform?.length === 16) {
        mat4.copy(this.worldTransform, params.localToWorldTransform);
      }
    }
    UpdateAsyncronous() {
      this.hasUpdated = true;
    }
    GetLocalToWorldTransform(out = null) {
      if (out) {
        return mat4.copy(out, this.worldTransform);
      }
      return this.worldTransform;
    }
    Setup() {}
    ChangeLOD() {}
    SetOrigin() {}
    IsAlwaysOn() {
      return false;
    }
    SetShaderOption(name, value) {
      for (const mesh of this.#meshes) {
        for (const area of mesh.areas) {
          area.effect?.SetOption?.(name, value);
          area.effectHash = _EveChildInstancedMes.#GetEffectHash(area.effect);
        }
      }
      this.#revision++;
    }
    AddMesh(geometryPath, castsShadow, reflectionMode, meshIndex, areas, instanceTransforms, sofHullName = "", sofLocatorSetName = "") {
      const sourceAreas = Array.from(areas ?? []);
      const sourceTransforms = Array.from(instanceTransforms ?? []);
      if (!sourceAreas.length || !sourceTransforms.length) {
        return false;
      }
      const normalizedAreas = sourceAreas.map(area => _EveChildInstancedMes.#CreateArea(area));
      const instances = sourceTransforms.map((transform, sphereIndex) => {
        if (!transform || transform.length !== 16) {
          throw new TypeError("EveChildInstancedMeshes instance transforms must contain 16 values");
        }
        return {
          transform: mat4.clone(transform),
          sphereIndex
        };
      });
      this.#meshes.push({
        geometryPath: String(geometryPath ?? ""),
        geometry: null,
        castsShadow: !!castsShadow,
        reflectionMode: reflectionMode === undefined ? 3 : Number(reflectionMode) | 0,
        meshIndex: Number(meshIndex) >>> 0,
        areas: normalizedAreas,
        instances,
        sofHullName: String(sofHullName ?? ""),
        sofLocatorSetName: String(sofLocatorSetName ?? ""),
        display: true
      });
      this.#revision++;
      return true;
    }
    Clear() {
      this.#meshes.length = 0;
      this.hasUpdated = false;
      this.#revision++;
    }
    GetSofSourceLocator(areaId) {
      const value = Number(areaId) >>> 0;
      const mesh = this.#meshes[value >>> 16];
      if (!mesh || !mesh.sofHullName) {
        return null;
      }
      return [mesh.sofHullName, mesh.sofLocatorSetName, value & 0xffff];
    }
    GetMeshCount() {
      return this.#meshes.length;
    }
    GetMeshInfo(meshId) {
      const mesh = _EveChildInstancedMes.#GetMesh(this.#meshes, meshId);
      return [mesh.geometryPath, mesh.geometry, mesh.meshIndex, mesh.castsShadow, mesh.reflectionMode, mesh.areas.length, mesh.instances.length];
    }
    GetAreaInfo(meshId, areaId) {
      const mesh = _EveChildInstancedMes.#GetMesh(this.#meshes, meshId);
      const index = Number(areaId) >>> 0;
      if (index >= mesh.areas.length) {
        throw new RangeError(`EveChildInstancedMeshes area index ${index} is out of range`);
      }
      const area = mesh.areas[index];
      return [area.effect, area.batchType, area.areaIndex, area.areaCount];
    }
    GetMeshDisplay(meshId) {
      return _EveChildInstancedMes.#GetMesh(this.#meshes, meshId).display;
    }
    SetMeshDisplay(meshId, display) {
      const mesh = _EveChildInstancedMes.#GetMesh(this.#meshes, meshId);
      const next = !!display;
      if (mesh.display !== next) {
        mesh.display = next;
        this.#revision++;
      }
    }
    SetGeometryResource(meshId, geometry) {
      const mesh = _EveChildInstancedMes.#GetMesh(this.#meshes, meshId);
      if (mesh.geometry !== geometry) {
        mesh.geometry = geometry ?? null;
        this.#revision++;
      }
    }
    GetMeshData(meshId) {
      const mesh = _EveChildInstancedMes.#GetMesh(this.#meshes, meshId);
      return _EveChildInstancedMes.#CloneMesh(mesh);
    }
    GetRevision() {
      return this.#revision;
    }
  }];
  #GetMesh(meshes, meshId) {
    const index = Number(meshId) >>> 0;
    if (index >= meshes.length) {
      throw new RangeError(`EveChildInstancedMeshes mesh index ${index} is out of range`);
    }
    return meshes[index];
  }
  #CreateArea(area) {
    const source = area ?? {};
    const effect = source.effect ?? null;
    return {
      effect,
      batchType: Number(source.batchType) >>> 0,
      areaIndex: Number(source.areaIndex) >>> 0,
      areaCount: source.areaCount === undefined ? 1 : Number(source.areaCount) >>> 0,
      effectHash: _EveChildInstancedMes.#GetEffectHash(effect)
    };
  }
  #CloneMesh(mesh) {
    return {
      geometryPath: mesh.geometryPath,
      geometry: mesh.geometry,
      castsShadow: mesh.castsShadow,
      reflectionMode: mesh.reflectionMode,
      meshIndex: mesh.meshIndex,
      areas: mesh.areas.map(area => ({
        ...area
      })),
      instances: mesh.instances.map(instance => ({
        transform: mat4.clone(instance.transform),
        sphereIndex: instance.sphereIndex
      })),
      sofHullName: mesh.sofHullName,
      sofLocatorSetName: mesh.sofLocatorSetName,
      display: mesh.display
    };
  }
  #GetEffectHash(effect) {
    const hash = effect?.GetHashValue?.() ?? effect?.hash ?? 0;
    return Number(hash) || 0;
  }
  constructor() {
    super(_EveChildInstancedMes), _initClass();
  }
}();

export { _EveChildInstancedMes as EveChildInstancedMeshes };
//# sourceMappingURL=EveChildInstancedMeshes.js.map
