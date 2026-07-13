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

  @io.persist
  @type.int32
  index = 0;

  @io.persist
  @type.int32
  count = 1;

  @io.persist
  @type.boolean
  reversed = false;

  @io.persist
  @type.boolean
  useSHLighting = false;

  @io.notify
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  #castsShadows = true;

  #generateDepthArea = false;

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
  @impl.adapted
  SetName(value)
  {
    this.name = String(value ?? "");
  }

  @carbon.method
  @impl.adapted
  IsCastingShadows()
  {
    return this.#castsShadows;
  }

  @carbon.method
  @impl.adapted
  SetCastsShadows(value)
  {
    this.#castsShadows = !!value;
  }

  @carbon.method
  @impl.adapted
  GetGenerateDepthArea()
  {
    return this.#generateDepthArea;
  }

  @carbon.method
  @impl.adapted
  SetGenerateDepthArea(value)
  {
    this.#generateDepthArea = !!value;
  }
}
