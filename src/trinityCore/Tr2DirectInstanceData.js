// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2DirectInstanceData.h
//   trinity/trinity/Tr2DirectInstanceData.cpp
//   trinity/trinity/Tr2DirectInstanceData_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "Tr2DirectInstanceData", family: "trinityCore" })
export class Tr2DirectInstanceData extends CjsModel
{

  /** m_aabb.m_max (Vector3) [READ] */
  @io.read
  @type.vec3
  aabbMax = vec3.create();

  /** m_aabb.m_min (Vector3) [READ] */
  @io.read
  @type.vec3
  aabbMin = vec3.create();

  /**
   * Assigns the CPU-side instance bounds without realizing a GPU buffer.
   * Accepts the JavaScript `{ min, max }` box representation; a two-vector
   * form is retained for consistency with `Tr2RuntimeInstanceData`.
   */
  @carbon.method
  @impl.adapted
  SetBoundingBox(bounds, maxBounds)
  {
    const min = maxBounds === undefined ? bounds?.min ?? bounds?.minBounds : bounds;
    const max = maxBounds === undefined ? bounds?.max ?? bounds?.maxBounds : maxBounds;
    if (!min || !max)
    {
      throw new TypeError("Bounding box requires min and max vectors");
    }
    vec3.copy(this.aabbMin, min);
    vec3.copy(this.aabbMax, max);
  }

}
