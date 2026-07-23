// Source: E:\carbonengine\trinity\trinity\Tr2MeshArea.h
// Source: E:\carbonengine\trinity\trinity\Tr2MeshArea.cpp
// Source: E:\carbonengine\trinity\trinity\Tr2MeshArea_Blue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "Tr2MeshArea", family: "trinityCore" })
export class Tr2MeshArea extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.readwrite
  @type.boolean
  display = true;

  @io.rebuild("batches")
  @io.persist
  @type.int32
  index = 0;

  @io.rebuild("batches")
  @io.persist
  @type.int32
  count = 1;

  @io.rebuild("batches")
  @io.persistOnly
  @type.boolean
  reversed = false;

  @io.rebuild("batches")
  @io.persist
  @type.boolean
  useSHLighting = false;

  @io.rebuild("batches")
  @io.notify
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  // DIVERGENCE (deliberate, precedent: EvePlaneSetItem.blinkData): Carbon
  // keeps these three as private runtime state stamped by SOF through
  // setters. The JS values path has no setter side channel, so they are
  // schema-backed here so SOF-authored shadow/depth/LOD state survives
  // values exchange. Without them every area defaults to shadow-casting.
  /** m_castsShadows - per-batch-type shadow participation (SOF-stamped). */
  @io.rebuild("batches")
  @io.persist
  @type.boolean
  castsShadows = true;

  /** m_generateDepthArea - authored depth-area participation (SOF-stamped). */
  @io.rebuild("batches")
  @io.persist
  @type.boolean
  generateDepthArea = false;

  /** m_minLod (Tr2Lod) - minimal visible lod; TR2_LOD_UNSPECIFIED = -1. */
  @io.rebuild("batches")
  @io.persist
  @type.int32
  minLod = -1;

  /** m_jointCount - skinning joint count, fed by Tr2MeshBase.BindToRig. */
  #jointCount = 0;

  /** m_jointMappingAnimRig - shared joint mapping owned by the parent mesh. */
  #jointMappingAnimRig = null;

  @carbon.method
  @impl.adapted
  GetIndex()
  {
    return this.index;
  }

  @carbon.method
  @impl.adapted
  SetIndex(value)
  {
    this.index = Number(value) | 0;
  }

  @carbon.method
  @impl.adapted
  GetCount()
  {
    return this.count;
  }

  @carbon.method
  @impl.adapted
  SetCount(value)
  {
    this.count = Number(value) | 0;
  }

  @carbon.method
  @impl.adapted
  GetDisplay()
  {
    return this.display;
  }

  @carbon.method
  @impl.adapted
  SetDisplay(value)
  {
    this.display = !!value;
  }

  @carbon.method
  @impl.adapted
  GetReversed()
  {
    return this.reversed;
  }

  @carbon.method
  @impl.adapted
  IsReversed()
  {
    return this.reversed;
  }

  @carbon.method
  @impl.adapted
  SetReversed(value)
  {
    this.reversed = !!value;
  }

  @carbon.method
  @impl.adapted
  GetUseSHLighting()
  {
    return this.useSHLighting;
  }

  @carbon.method
  @impl.adapted
  SetUseSHLighting(value)
  {
    this.useSHLighting = !!value;
  }

  @carbon.method
  @impl.adapted
  GetMaterialInterface()
  {
    return this.effect;
  }

  @carbon.method
  @impl.adapted
  SetMaterial(value)
  {
    this.effect = value ?? null;
  }

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.adapted
  SetName(value)
  {
    this.name = String(value ?? "");
  }

  @carbon.method
  @impl.adapted
  IsCastingShadows()
  {
    return this.castsShadows;
  }

  @carbon.method
  @impl.adapted
  SetCastsShadows(value)
  {
    this.castsShadows = !!value;
  }

  @carbon.method
  @impl.adapted
  GetGenerateDepthArea()
  {
    return this.generateDepthArea;
  }

  @carbon.method
  @impl.adapted
  SetGenerateDepthArea(value)
  {
    this.generateDepthArea = !!value;
  }

  @carbon.method
  @impl.implemented
  GetMinLod()
  {
    return this.minLod;
  }

  @carbon.method
  @impl.implemented
  SetMinLod(lod)
  {
    this.minLod = Number(lod) | 0;
  }

  @carbon.method
  @impl.implemented
  GetJointCount()
  {
    return this.#jointCount;
  }

  @carbon.method
  @impl.implemented
  SetJointCount(value)
  {
    this.#jointCount = Number(value) >>> 0;
  }

  @carbon.method
  @impl.implemented
  GetJointMappingAnimRig()
  {
    return this.#jointMappingAnimRig;
  }

  /**
   * The provided array is NOT owned by this instance, it is owned by the
   * parent mesh; each mesh area shares the same array.
   */
  @carbon.method
  @impl.implemented
  SetJointMappingAnimRig(value)
  {
    this.#jointMappingAnimRig = value ?? null;
  }

  /**
   * Carbon's operator= - copies authored fields and deliberately resets the
   * joint state, which BindToRig must rebuild for the new owner.
   */
  @carbon.method
  @impl.adapted
  CopyFrom(other)
  {
    this.name = other.name;
    this.index = other.index;
    this.count = other.count;
    this.reversed = other.reversed;
    this.effect = other.effect;
    this.#jointCount = 0;
    this.#jointMappingAnimRig = null;
    this.display = other.display;
    this.useSHLighting = other.useSHLighting;
    this.generateDepthArea = other.GetGenerateDepthArea();
    return this;
  }
}
