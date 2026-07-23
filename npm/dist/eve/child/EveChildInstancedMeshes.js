import { applyDecs2311 as _applyDecs2311, identity as _identity } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../generated/eve/EveEntity.js';
import { EveComponentType } from '../EveComponentTypes.js';

let _initClass, _init_effect, _init_extra_effect, _init_batchType, _init_extra_batchType, _init_areaIndex, _init_extra_areaIndex, _init_areaCount, _init_extra_areaCount, _init_effectHash, _init_extra_effectHash, _initClass2, _init_transform, _init_extra_transform, _init_sphereIndex, _init_extra_sphereIndex, _initClass3, _init_geometryPath, _init_extra_geometryPath, _init_castsShadow, _init_extra_castsShadow, _init_reflectionMode, _init_extra_reflectionMode, _init_meshIndex, _init_extra_meshIndex, _init_areas, _init_extra_areas, _init_instances, _init_extra_instances, _init_sofHullName, _init_extra_sofHullName, _init_sofLocatorSetName, _init_extra_sofLocatorSetName, _init_display, _init_extra_display, _initProto, _initClass4, _init_name, _init_extra_name, _init_worldTransform, _init_extra_worldTransform, _init_hasUpdated, _init_extra_hasUpdated, _init_meshes, _init_extra_meshes;
let _EveChildInstancedMes;
class EveChildInstancedMeshArea extends CjsModel {
  static {
    ({
      e: [_init_effect, _init_extra_effect, _init_batchType, _init_extra_batchType, _init_areaIndex, _init_extra_areaIndex, _init_areaCount, _init_extra_areaCount, _init_effectHash, _init_extra_effectHash],
      c: [_EveChildInstancedMes, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildInstancedMeshArea",
      family: "eve/child"
    })], [[[void 0, io.rebuild("instanceBuffer"), io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[void 0, io.rebuild("instanceBuffer"), io, io.persist, type, type.uint32], 16, "batchType"], [[void 0, io.rebuild("instanceBuffer"), io, io.persist, type, type.uint32], 16, "areaIndex"], [[void 0, io.rebuild("instanceBuffer"), io, io.persist, type, type.uint32], 16, "areaCount"], [[io, io.read, type, type.float32], 16, "effectHash"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_effectHash(this);
  }
  effect = _init_effect(this, null);
  batchType = (_init_extra_effect(this), _init_batchType(this, 0));
  areaIndex = (_init_extra_batchType(this), _init_areaIndex(this, 0));
  areaCount = (_init_extra_areaIndex(this), _init_areaCount(this, 1));
  effectHash = (_init_extra_areaCount(this), _init_effectHash(this, 0));
  static {
    _initClass();
  }
}
let _EveChildInstancedMes2;
class EveChildInstancedMeshInstance extends CjsModel {
  static {
    ({
      e: [_init_transform, _init_extra_transform, _init_sphereIndex, _init_extra_sphereIndex],
      c: [_EveChildInstancedMes2, _initClass2]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildInstancedMeshInstance",
      family: "eve/child"
    })], [[[void 0, io.rebuild("instanceBuffer"), io, io.persist, type, type.mat4], 16, "transform"], [[void 0, io.rebuild("instanceBuffer"), io, io.persist, type, type.uint32], 16, "sphereIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_sphereIndex(this);
  }
  transform = _init_transform(this, mat4.create());
  sphereIndex = (_init_extra_transform(this), _init_sphereIndex(this, 0));
  static {
    _initClass2();
  }
}
let _EveChildInstancedMes3;
class EveChildInstancedMesh extends CjsModel {
  static {
    ({
      e: [_init_geometryPath, _init_extra_geometryPath, _init_castsShadow, _init_extra_castsShadow, _init_reflectionMode, _init_extra_reflectionMode, _init_meshIndex, _init_extra_meshIndex, _init_areas, _init_extra_areas, _init_instances, _init_extra_instances, _init_sofHullName, _init_extra_sofHullName, _init_sofLocatorSetName, _init_extra_sofLocatorSetName, _init_display, _init_extra_display],
      c: [_EveChildInstancedMes3, _initClass3]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildInstancedMesh",
      family: "eve/child"
    })], [[[io, io.persist, type, type.string], 16, "geometryPath"], [[io, io.persist, type, type.boolean], 16, "castsShadow"], [[io, io.persist, type, type.int32], 16, "reflectionMode"], [[io, io.persist, type, type.uint32], 16, "meshIndex"], [[io, io.persist, void 0, type.list("EveChildInstancedMeshArea")], 16, "areas"], [[io, io.persist, void 0, type.list("EveChildInstancedMeshInstance")], 16, "instances"], [[io, io.persist, type, type.string], 16, "sofHullName"], [[io, io.persist, type, type.string], 16, "sofLocatorSetName"], [[io, io.persist, type, type.boolean], 16, "display"]], 0, void 0, CjsModel));
  }
  geometryPath = _init_geometryPath(this, "");
  castsShadow = (_init_extra_geometryPath(this), _init_castsShadow(this, false));
  reflectionMode = (_init_extra_castsShadow(this), _init_reflectionMode(this, 3));
  meshIndex = (_init_extra_reflectionMode(this), _init_meshIndex(this, 0));
  areas = (_init_extra_meshIndex(this), _init_areas(this, []));
  instances = (_init_extra_areas(this), _init_instances(this, []));
  sofHullName = (_init_extra_instances(this), _init_sofHullName(this, ""));
  sofLocatorSetName = (_init_extra_sofHullName(this), _init_sofLocatorSetName(this, ""));
  display = (_init_extra_sofLocatorSetName(this), _init_display(this, true));
  #geometry = (_init_extra_display(this), null);
  GetGeometryResource() {
    return this.#geometry;
  }
  SetGeometryResource(resource) {
    this.#geometry = resource ?? null;
  }
  static {
    _initClass3();
  }
}
let _EveChildInstancedMes4;
new class extends _identity {
  static [class EveChildInstancedMeshes extends _EveEntity {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_worldTransform, _init_extra_worldTransform, _init_hasUpdated, _init_extra_hasUpdated, _init_meshes, _init_extra_meshes, _initProto],
        c: [_EveChildInstancedMes4, _initClass4]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildInstancedMeshes",
        family: "eve/child"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.mat4], 16, "worldTransform"], [[io, io.read, type, type.boolean], 16, "hasUpdated"], [[io, io.persist, void 0, type.list("EveChildInstancedMesh")], 16, "meshes"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateVisibility"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRenderables"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateSyncronous"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateAsyncronous"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalToWorldTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.implemented], 18, "ChangeLOD"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetOrigin"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsAlwaysOn"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddMesh"], [[carbon, carbon.method, impl, impl.adapted], 18, "Clear"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetSofSourceLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetMeshCount"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMeshInfo"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetAreaInfo"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMeshDisplay"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMeshDisplay"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetGeometryResource"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMeshData"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRevision"], [[carbon, carbon.method, impl, impl.implemented], 18, "RegisterComponents"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("UnregisterFromMeshManager releases GPU mesh-group/sphere/per-object handles owned by the engine's EveInstancedMeshManager.")], 18, "UnRegisterComponents"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddMeshesToManager"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsCastingShadow"], [[carbon, carbon.method, impl, impl.noop], 18, "GetShadowBatches"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetShadowPerObjectData"]], 0, void 0, _EveEntity));
    }
    name = (_initProto(this), _init_name(this, ""));
    worldTransform = (_init_extra_name(this), _init_worldTransform(this, mat4.create()));
    hasUpdated = (_init_extra_worldTransform(this), _init_hasUpdated(this, false));
    meshes = (_init_extra_hasUpdated(this), _init_meshes(this, []));
    #revision = (_init_extra_meshes(this), 0);
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
      for (const mesh of this.meshes) {
        for (const area of mesh.areas) {
          area.effect?.SetOption?.(name, value);
          area.effectHash = _EveChildInstancedMes4.#GetEffectHash(area.effect);
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
      const normalizedAreas = sourceAreas.map(area => _EveChildInstancedMes4.#CreateArea(area));
      const instances = sourceTransforms.map((transform, sphereIndex) => {
        if (!transform || transform.length !== 16) {
          throw new TypeError("EveChildInstancedMeshes instance transforms must contain 16 values");
        }
        const instance = new _EveChildInstancedMes2();
        mat4.copy(instance.transform, transform);
        instance.sphereIndex = sphereIndex;
        return instance;
      });
      const mesh = new _EveChildInstancedMes3();
      mesh.geometryPath = String(geometryPath ?? "");
      mesh.castsShadow = !!castsShadow;
      mesh.reflectionMode = reflectionMode === undefined ? 3 : Number(reflectionMode) | 0;
      mesh.meshIndex = Number(meshIndex) >>> 0;
      mesh.areas = normalizedAreas;
      mesh.instances = instances;
      mesh.sofHullName = String(sofHullName ?? "");
      mesh.sofLocatorSetName = String(sofLocatorSetName ?? "");
      this.meshes.push(mesh);
      this.#revision++;
      return true;
    }
    Clear() {
      this.meshes.length = 0;
      this.hasUpdated = false;
      this.#revision++;
    }
    GetSofSourceLocator(areaId) {
      const value = Number(areaId) >>> 0;
      const mesh = this.meshes[value >>> 16];
      if (!mesh || !mesh.sofHullName) {
        return null;
      }
      return [mesh.sofHullName, mesh.sofLocatorSetName, value & 0xffff];
    }
    GetMeshCount() {
      return this.meshes.length;
    }
    GetMeshInfo(meshId) {
      const mesh = _EveChildInstancedMes4.#GetMesh(this.meshes, meshId);
      return [mesh.geometryPath, mesh.GetGeometryResource(), mesh.meshIndex, mesh.castsShadow, mesh.reflectionMode, mesh.areas.length, mesh.instances.length];
    }
    GetAreaInfo(meshId, areaId) {
      const mesh = _EveChildInstancedMes4.#GetMesh(this.meshes, meshId);
      const index = Number(areaId) >>> 0;
      if (index >= mesh.areas.length) {
        throw new RangeError(`EveChildInstancedMeshes area index ${index} is out of range`);
      }
      const area = mesh.areas[index];
      return [area.effect, area.batchType, area.areaIndex, area.areaCount];
    }
    GetMeshDisplay(meshId) {
      return _EveChildInstancedMes4.#GetMesh(this.meshes, meshId).display;
    }
    SetMeshDisplay(meshId, display) {
      const mesh = _EveChildInstancedMes4.#GetMesh(this.meshes, meshId);
      const next = !!display;
      if (mesh.display !== next) {
        mesh.display = next;
        this.#revision++;
      }
    }
    SetGeometryResource(meshId, geometry) {
      const mesh = _EveChildInstancedMes4.#GetMesh(this.meshes, meshId);
      if (mesh.GetGeometryResource() !== geometry) {
        mesh.SetGeometryResource(geometry);
        this.#revision++;
      }
    }
    GetMeshData(meshId) {
      const mesh = _EveChildInstancedMes4.#GetMesh(this.meshes, meshId);
      return _EveChildInstancedMes4.#CloneMesh(mesh);
    }
    GetRevision() {
      return this.#revision;
    }

    /** Carbon EveChildInstancedMeshes::RegisterComponents (cpp:36-43):
     * unconditional InstancedMeshProvider + ShadowCaster leaf
     * self-registration. */
    RegisterComponents() {
      const registry = this.GetComponentRegistry();
      if (registry) {
        registry.RegisterComponent(EveComponentType.InstancedMeshProvider, this);
        registry.RegisterComponent(EveComponentType.ShadowCaster, this);
      }
    }

    /** Carbon EveChildInstancedMeshes::UnRegisterComponents (cpp:45-48) only
     * calls UnregisterFromMeshManager (GPU mesh-manager handle cleanup,
     * unported); own components were already removed by EveEntity::UnRegister
     * (EveEntity.cpp:90). */
    UnRegisterComponents() {}

    /** Carbon EveChildInstancedMeshes::AddMeshesToManager (cpp:472-535)
     * uploads instance data to the engine-owned EveInstancedMeshManager;
     * presence satisfies the "InstancedMeshProvider" duck contract. */
    AddMeshesToManager(..._args) {
      throw new Error("EveChildInstancedMeshes.AddMeshesToManager is not implemented in CarbonEngineJS.");
    }

    /** Carbon EveChildInstancedMeshes::IsCastingShadow (cpp:73-76) always
     * returns false (instanced shadows cull per instance group); presence
     * satisfies the "ShadowCaster" duck contract. */
    IsCastingShadow(..._args) {
      return false;
    }

    /** Carbon EveChildInstancedMeshes::GetShadowBatches (cpp:78-80) is an
     * intentional no-op (the instanced mesh manager emits the batches). */
    GetShadowBatches(..._args) {}

    /** Carbon EveChildInstancedMeshes::GetShadowPerObjectData (cpp:82-85)
     * returns null (per-object data flows through the mesh manager). */
    GetShadowPerObjectData(..._args) {
      return null;
    }
  }];
  #GetMesh(meshes, meshId) {
    const index = Number(meshId) >>> 0;
    if (index >= meshes.length) {
      throw new RangeError(`EveChildInstancedMeshes mesh index ${index} is out of range`);
    }
    return meshes[index];
  }
  #CreateArea(value) {
    const source = value ?? {};
    const area = new _EveChildInstancedMes();
    area.effect = source.effect ?? null;
    area.batchType = Number(source.batchType) >>> 0;
    area.areaIndex = Number(source.areaIndex) >>> 0;
    area.areaCount = source.areaCount === undefined ? 1 : Number(source.areaCount) >>> 0;
    area.effectHash = _EveChildInstancedMes4.#GetEffectHash(area.effect);
    return area;
  }
  #CloneMesh(mesh) {
    return {
      geometryPath: mesh.geometryPath,
      geometry: mesh.GetGeometryResource(),
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
    super(_EveChildInstancedMes4), _initClass4();
  }
}();

export { _EveChildInstancedMes3 as EveChildInstancedMesh, _EveChildInstancedMes as EveChildInstancedMeshArea, _EveChildInstancedMes2 as EveChildInstancedMeshInstance, _EveChildInstancedMes4 as EveChildInstancedMeshes };
//# sourceMappingURL=EveChildInstancedMeshes.js.map
