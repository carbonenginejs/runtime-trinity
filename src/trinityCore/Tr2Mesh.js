// Source: E:\carbonengine\trinity\trinity\Tr2Mesh.h
// Source: E:\carbonengine\trinity\trinity\Tr2Mesh.cpp
// Source: E:\carbonengine\trinity\trinity\Tr2Mesh_Blue.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Tr2MeshBase } from "./Tr2MeshBase.js";


@type.define({ className: "Tr2Mesh", family: "trinityCore" })
export class Tr2Mesh extends Tr2MeshBase
{
  @io.notify
  @io.persist
  @type.string
  geometryResPath = "";

  @io.persistOnly
  @type.list("Tr2SerializedMorphAnimation")
  serializedMorphAnimations = [];

  @io.notify
  @io.persist
  @type.boolean
  deferGeometryLoad = false;

  @io.read
  @type.objectRef("TriGeometryRes")
  geometry = null;

  get isLoading()
  {
    return this.geometry?.IsLoading?.() ?? false;
  }

  @carbon.method
  @impl.adapted
  Initialize()
  {
    return true;
  }

  @carbon.method
  @impl.adapted
  OnModified()
  {
    return true;
  }

  @carbon.method
  @impl.adapted
  SetMeshResPath(path)
  {
    this.geometryResPath = String(path ?? "");
  }

  @carbon.method
  @impl.adapted
  SetGeometryRes(resource)
  {
    this.geometryResPath = "";
    this.geometry = resource ?? null;
  }

  @carbon.method
  @impl.adapted
  GetGeometryResource()
  {
    return this.geometry;
  }

  @carbon.method
  @impl.adapted
  GetGeometryResPath()
  {
    return this.geometry?.GetPath?.() ?? this.geometryResPath;
  }

  @carbon.method
  @impl.implemented
  GetAreasCount()
  {
    return 14;
  }
}
