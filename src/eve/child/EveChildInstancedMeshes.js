// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInstancedMeshes.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInstancedMeshes.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInstancedMeshes_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../../generated/eve/EveEntity.js";


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

  #meshes = [];

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
    for (const mesh of this.#meshes)
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

  @carbon.method
  @impl.adapted
  Clear()
  {
    this.#meshes.length = 0;
    this.hasUpdated = false;
    this.#revision++;
  }

  @carbon.method
  @impl.implemented
  GetSofSourceLocator(areaId)
  {
    const value = Number(areaId) >>> 0;
    const mesh = this.#meshes[value >>> 16];
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
    return this.#meshes.length;
  }

  @carbon.method
  @impl.adapted
  GetMeshInfo(meshId)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.#meshes, meshId);
    return [
      mesh.geometryPath,
      mesh.geometry,
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
    const mesh = EveChildInstancedMeshes.#GetMesh(this.#meshes, meshId);
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
    return EveChildInstancedMeshes.#GetMesh(this.#meshes, meshId).display;
  }

  @carbon.method
  @impl.adapted
  SetMeshDisplay(meshId, display)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.#meshes, meshId);
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
    const mesh = EveChildInstancedMeshes.#GetMesh(this.#meshes, meshId);
    if (mesh.geometry !== geometry)
    {
      mesh.geometry = geometry ?? null;
      this.#revision++;
    }
  }

  @carbon.method
  @impl.adapted
  GetMeshData(meshId)
  {
    const mesh = EveChildInstancedMeshes.#GetMesh(this.#meshes, meshId);
    return EveChildInstancedMeshes.#CloneMesh(mesh);
  }

  @carbon.method
  @impl.implemented
  GetRevision()
  {
    return this.#revision;
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

  static #CreateArea(area)
  {
    const source = area ?? {};
    const effect = source.effect ?? null;
    return {
      effect,
      batchType: Number(source.batchType) >>> 0,
      areaIndex: Number(source.areaIndex) >>> 0,
      areaCount: source.areaCount === undefined ? 1 : Number(source.areaCount) >>> 0,
      effectHash: EveChildInstancedMeshes.#GetEffectHash(effect)
    };
  }

  static #CloneMesh(mesh)
  {
    return {
      geometryPath: mesh.geometryPath,
      geometry: mesh.geometry,
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
