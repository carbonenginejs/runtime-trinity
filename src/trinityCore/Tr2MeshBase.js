// Source: E:\carbonengine\trinity\trinity\Tr2MeshBase.h
// Source: E:\carbonengine\trinity\trinity\Tr2MeshBase.cpp
// Source: E:\carbonengine\trinity\trinity\Tr2MeshBase_Blue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "Tr2MeshBase", family: "trinityCore" })
export class Tr2MeshBase extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.readwrite
  @type.boolean
  display = true;

  @io.notify
  @io.persist
  @type.int32
  meshIndex = 0;

  @io.persist
  @type.list("Tr2MeshArea")
  opaqueAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  decalAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  depthAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  transparentAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  additiveAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  pickableAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  mirrorAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  decalNormalAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  depthNormalAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  opaquePrepassAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  decalPrepassAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  geometryEraserAreas = [];

  @io.persist
  @type.list("Tr2MeshArea")
  distortionAreas = [];

  // Carbon routes TRIBATCHTYPE_FLARE but does not expose this list to Blue.
  flareAreas = [];

  @io.read
  @io.persist
  @type.float32
  maxVertexScale = 1;

  @io.read
  @io.persist
  @type.float32
  maxVertexDisplacement = 0;

  @io.read
  @io.persist
  @type.boolean
  rotatesVertices = false;

  @carbon.method
  @impl.implemented
  GetAreas(areaType)
  {
    if (!Number.isInteger(areaType)) return null;
    const property = Tr2MeshBase.#areaProperties[areaType];
    return property ? this[property] : null;
  }

  @carbon.method
  @impl.adapted
  AddArea(areaType, area)
  {
    const areas = this.GetAreas(areaType);
    if (!areas) return false;
    areas.push(area);
    return true;
  }

  @carbon.method
  @impl.implemented
  GetAllAreas()
  {
    return Tr2MeshBase.#areaProperties.flatMap(property => this[property]);
  }

  @carbon.method
  @impl.adapted
  SetShaderOption(name, value)
  {
    let updated = false;
    for (const area of this.GetAllAreas())
    {
      if (!area?.effect?.SetOption) continue;
      area.effect.SetOption(name, value);
      updated = true;
    }
    return updated;
  }

  @carbon.method
  @impl.adapted
  GetMaterialBoundsAdjustment()
  {
    return {
      maxLocalScale: this.maxVertexScale,
      maxLocalDisplacement: this.maxVertexDisplacement,
      rotatesVertices: this.rotatesVertices
    };
  }

  @carbon.method
  @impl.adapted
  SetMaterialBoundsAdjustment(value)
  {
    const source = value || {};
    this.maxVertexScale = Number(source.maxLocalScale) || 0;
    this.maxVertexDisplacement = Number(source.maxLocalDisplacement) || 0;
    this.rotatesVertices = !!source.rotatesVertices;
    return true;
  }

  @carbon.method
  @impl.adapted
  GetGeometryResPath()
  {
    return "";
  }

  static #areaProperties = Object.freeze([
    "opaqueAreas",
    "decalAreas",
    "transparentAreas",
    "depthAreas",
    "additiveAreas",
    "pickableAreas",
    "mirrorAreas",
    "decalNormalAreas",
    "depthNormalAreas",
    "opaquePrepassAreas",
    "decalPrepassAreas",
    "geometryEraserAreas",
    "flareAreas",
    "distortionAreas"
  ]);
}
