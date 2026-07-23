// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInstancedMeshes.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInstancedMeshes.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInstancedMeshes_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../../generated/eve/EveEntity.js";
import { EveComponentType } from "../EveComponentTypes.js";


@type.define({ className: "EveChildInstancedMeshArea", family: "eve/child" })
export class EveChildInstancedMeshArea extends CjsModel
{
  @io.rebuild("instanceBuffer")
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  @io.rebuild("instanceBuffer")
  @io.persist
  @type.uint32
  batchType = 0;

  @io.rebuild("instanceBuffer")
  @io.persist
  @type.uint32
  areaIndex = 0;

  @io.rebuild("instanceBuffer")
  @io.persist
  @type.uint32
  areaCount = 1;

  @io.read
  @type.float32
  effectHash = 0;
}


@type.define({ className: "EveChildInstancedMeshInstance", family: "eve/child" })
export class EveChildInstancedMeshInstance extends CjsModel
{
  @io.rebuild("instanceBuffer")
  @io.persist
  @type.mat4
  transform = mat4.create();

  @io.rebuild("instanceBuffer")
  @io.persist
  @type.uint32
  sphereIndex = 0;
}


@type.define({ className: "EveChildInstancedMesh", family: "eve/child" })
export class EveChildInstancedMesh extends CjsModel
{
  @io.persist
  @type.string
  geometryPath = "";

  @io.persist
  @type.boolean
  castsShadow = false;

  @io.persist
  @type.int32
  reflectionMode = 3;

  @io.persist
  @type.uint32
  meshIndex = 0;

  @io.persist
  @type.list("EveChildInstancedMeshArea")
  areas = [];

  @io.persist
  @type.list("EveChildInstancedMeshInstance")
  instances = [];

  @io.persist
  @type.string
  sofHullName = "";

  @io.persist
  @type.string
  sofLocatorSetName = "";

  @io.persist
  @type.boolean
  display = true;

  #geometry = null;

  GetGeometryResource()
  {
    return this.#geometry;
  }

  SetGeometryResource(resource)
  {
    this.#geometry = resource ?? null;
  }
}


@type.define({ className: "EveChildInstancedMeshes", family: "eve/child" })
export class EveChildInstancedMeshes extends EveEntity
{
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.mat4
  worldTransform = mat4.create();

  @io.read
  @type.boolean
  hasUpdated = false;

  @io.persist
  @type.list("EveChildInstancedMesh")
  meshes = [];

  #revision = 0;

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name ?? "");
  }

  @carbon.method
  @impl.adapted
  UpdateVisibility()
  {
  }

  @carbon.method
  @impl.implemented
  GetRenderables(renderables = [])
  {
    return renderables;
  }

  @carbon.method
  @impl.implemented
  GetBoundingSphere()
  {
    return false;
  }

  @carbon.method
  @impl.implemented
  UpdateSyncronous(_updateContext, params)
  {
    if (params?.localToWorldTransform?.length === 16)
    {
      mat4.copy(this.worldTransform, params.localToWorldTransform);
    }
  }

  @carbon.method
  @impl.adapted
  UpdateAsyncronous()
  {
    this.hasUpdated = true;
  }

  @carbon.method
  @impl.implemented
  GetLocalToWorldTransform(out = null)
  {
    if (out)
    {
      return mat4.copy(out, this.worldTransform);
    }
    return this.worldTransform;
  }

  @carbon.method
  @impl.implemented
  Setup()
  {
  }

  @carbon.method
  @impl.implemented
  ChangeLOD()
  {
  }

  @carbon.method
  @impl.adapted
  SetOrigin()
  {
  }

  @carbon.method
  @impl.implemented
  IsAlwaysOn()
  {
    return false;
  }

  @carbon.method
  @impl.adapted
  SetShaderOption(name, value)
  {
    for (const mesh of this.meshes)
    {
      for (const area of mesh.areas)
      {
        area.effect?.SetOption?.(name, value);
        area.effectHash = EveChildInstancedMeshes.#GetEffectHash(area.effect);
      }
    }
    this.#revision++;
  }

  @carbon.method
  @impl.adapted
  AddMesh(
    geometryPath,
    castsShadow,
    reflectionMode,
    meshIndex,
    areas,
    instanceTransforms,
    sofHullName = "",
    sofLocatorSetName = ""
  )
  {
    const sourceAreas = Array.from(areas ?? []);
    const sourceTransforms = Array.from(instanceTransforms ?? []);
    if (!sourceAreas.length || !sourceTransforms.length)
    {
      return false;
    }

    const normalizedAreas = sourceAreas.map(area => EveChildInstancedMeshes.#CreateArea(area));
    const instances = sourceTransforms.map((transform, sphereIndex) =>
    {
      if (!transform || transform.length !== 16)
      {
        throw new TypeError("EveChildInstancedMeshes instance transforms must contain 16 values");
      }
      const instance = new EveChildInstancedMeshInstance();
      mat4.copy(instance.transform, transform);
      instance.sphereIndex = sphereIndex;
      return instance;
    });

    const mesh = new EveChildInstancedMesh();
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

  @carbon.method
  @impl.adapted
  Clear()
  {
    this.meshes.length = 0;
    this.hasUpdated = false;
    this.#revision++;
  }

  @carbon.method
  @impl.implemented
  GetSofSourceLocator(areaId)
  {
    const value = Number(areaId) >>> 0;
    const mesh = this.meshes[value >>> 16];
    if (!mesh || !mesh.sofHullName)
    {
      return null;
    }
    return [mesh.sofHullName, mesh.sofLocatorSetName, value & 0xffff];
  }

  @carbon.method
  @impl.implemented
  GetMeshCount()
  {
    return this.meshes.length;
  }

  @carbon.method
  @impl.adapted
  GetMeshInfo(meshId)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.meshes, meshId);
    return [
      mesh.geometryPath,
      mesh.GetGeometryResource(),
      mesh.meshIndex,
      mesh.castsShadow,
      mesh.reflectionMode,
      mesh.areas.length,
      mesh.instances.length
    ];
  }

  @carbon.method
  @impl.adapted
  GetAreaInfo(meshId, areaId)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.meshes, meshId);
    const index = Number(areaId) >>> 0;
    if (index >= mesh.areas.length)
    {
      throw new RangeError(`EveChildInstancedMeshes area index ${index} is out of range`);
    }
    const area = mesh.areas[index];
    return [area.effect, area.batchType, area.areaIndex, area.areaCount];
  }

  @carbon.method
  @impl.adapted
  GetMeshDisplay(meshId)
  {
    return EveChildInstancedMeshes.#GetMesh(this.meshes, meshId).display;
  }

  @carbon.method
  @impl.adapted
  SetMeshDisplay(meshId, display)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.meshes, meshId);
    const next = !!display;
    if (mesh.display !== next)
    {
      mesh.display = next;
      this.#revision++;
    }
  }

  @carbon.method
  @impl.adapted
  SetGeometryResource(meshId, geometry)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.meshes, meshId);
    if (mesh.GetGeometryResource() !== geometry)
    {
      mesh.SetGeometryResource(geometry);
      this.#revision++;
    }
  }

  @carbon.method
  @impl.adapted
  GetMeshData(meshId)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.meshes, meshId);
    return EveChildInstancedMeshes.#CloneMesh(mesh);
  }

  @carbon.method
  @impl.implemented
  GetRevision()
  {
    return this.#revision;
  }

  /** Carbon EveChildInstancedMeshes::RegisterComponents (cpp:36-43):
   * unconditional InstancedMeshProvider + ShadowCaster leaf
   * self-registration. */
  @carbon.method
  @impl.implemented
  RegisterComponents()
  {
    const registry = this.GetComponentRegistry();
    if (registry)
    {
      registry.RegisterComponent(EveComponentType.InstancedMeshProvider, this);
      registry.RegisterComponent(EveComponentType.ShadowCaster, this);
    }
  }

  /** Carbon EveChildInstancedMeshes::UnRegisterComponents (cpp:45-48) only
   * calls UnregisterFromMeshManager (GPU mesh-manager handle cleanup,
   * unported); own components were already removed by EveEntity::UnRegister
   * (EveEntity.cpp:90). */
  @carbon.method
  @impl.adapted
  @impl.reason("UnregisterFromMeshManager releases GPU mesh-group/sphere/per-object handles owned by the engine's EveInstancedMeshManager.")
  UnRegisterComponents()
  {
  }

  /** Carbon EveChildInstancedMeshes::AddMeshesToManager (cpp:472-535)
   * uploads instance data to the engine-owned EveInstancedMeshManager;
   * presence satisfies the "InstancedMeshProvider" duck contract. */
  @carbon.method
  @impl.notImplemented
  AddMeshesToManager(..._args)
  {
    throw new Error("EveChildInstancedMeshes.AddMeshesToManager is not implemented in CarbonEngineJS.");
  }

  /** Carbon EveChildInstancedMeshes::IsCastingShadow (cpp:73-76) always
   * returns false (instanced shadows cull per instance group); presence
   * satisfies the "ShadowCaster" duck contract. */
  @carbon.method
  @impl.implemented
  IsCastingShadow(..._args)
  {
    return false;
  }

  /** Carbon EveChildInstancedMeshes::GetShadowBatches (cpp:78-80) is an
   * intentional no-op (the instanced mesh manager emits the batches). */
  @carbon.method
  @impl.noop
  GetShadowBatches(..._args)
  {
  }

  /** Carbon EveChildInstancedMeshes::GetShadowPerObjectData (cpp:82-85)
   * returns null (per-object data flows through the mesh manager). */
  @carbon.method
  @impl.implemented
  GetShadowPerObjectData(..._args)
  {
    return null;
  }

  static #GetMesh(meshes, meshId)
  {
    const index = Number(meshId) >>> 0;
    if (index >= meshes.length)
    {
      throw new RangeError(`EveChildInstancedMeshes mesh index ${index} is out of range`);
    }
    return meshes[index];
  }

  static #CreateArea(value)
  {
    const source = value ?? {};
    const area = new EveChildInstancedMeshArea();
    area.effect = source.effect ?? null;
    area.batchType = Number(source.batchType) >>> 0;
    area.areaIndex = Number(source.areaIndex) >>> 0;
    area.areaCount = source.areaCount === undefined ? 1 : Number(source.areaCount) >>> 0;
    area.effectHash = EveChildInstancedMeshes.#GetEffectHash(area.effect);
    return area;
  }

  static #CloneMesh(mesh)
  {
    return {
      geometryPath: mesh.geometryPath,
      geometry: mesh.GetGeometryResource(),
      castsShadow: mesh.castsShadow,
      reflectionMode: mesh.reflectionMode,
      meshIndex: mesh.meshIndex,
      areas: mesh.areas.map(area => ({ ...area })),
      instances: mesh.instances.map(instance => ({
        transform: mat4.clone(instance.transform),
        sphereIndex: instance.sphereIndex
      })),
      sofHullName: mesh.sofHullName,
      sofLocatorSetName: mesh.sofLocatorSetName,
      display: mesh.display
    };
  }

  static #GetEffectHash(effect)
  {
    const hash = effect?.GetHashValue?.() ?? effect?.hash ?? 0;
    return Number(hash) || 0;
  }

}
