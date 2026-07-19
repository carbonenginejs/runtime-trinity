// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveUiObject.h
// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveUiObject.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveUiObject_Blue.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveSpaceObject2 } from "../spaceObject/EveSpaceObject2.js";
import { TriBatchType } from "../../generated/trinityCore/enums.js";

/** EveUiObject (eve/ui) - generated from schema shapeHash ea8f8922.... */
@type.define({ className: "EveUiObject", family: "eve/ui" })
export class EveUiObject extends EveSpaceObject2
{

  /** m_usePerspectiveScale (bool) [READWRITE] */
  @io.readwrite
  @type.boolean
  usePerspectiveScale = true;

  @carbon.method
  @impl.implemented
  SetVisibilityForArea(areaName, enable)
  {
    const mesh = this.GetMesh();
    if (!mesh) return;

    for (let areaType = 0; areaType < TriBatchType.TRIBATCHTYPE_COUNT_OF_BATCH_TYPES; areaType++)
    {
      const areas = mesh.GetAreas(areaType);
      if (!areas) continue;
      for (const area of areas)
      {
        if (area.GetName() === areaName)
        {
          area.SetDisplay(enable);
        }
      }
    }
  }

  @carbon.method
  @impl.implemented
  GetNameForPickingAreaID(areaID)
  {
    const mesh = this.GetMesh();
    if (!mesh) return "invalid_mesh";

    const pickingAreas = mesh.GetAreas(TriBatchType.TRIBATCHTYPE_PICKING);
    if (pickingAreas)
    {
      for (const area of pickingAreas)
      {
        if (area.GetIndex() === areaID)
        {
          return area.GetName();
        }
      }
    }
    return "invalid_areaid";
  }

}
