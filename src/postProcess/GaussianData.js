// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/PostProcess/Tr2PostProcessRenderer.h
// Promoted to hand-maintained source 2026-07-23 (Carbon-verified property shell; schema postProcess/GaussianData.json.).
import { type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";

/** GaussianData (postProcess) - generated from schema shapeHash da83d9d1.... */
@type.define({ className: "GaussianData", family: "postProcess" })
export class GaussianData extends CjsModel
{

  /** overallWeight (Vector3) */
  @type.vec3
  overallWeight = vec3.create();

  /** count (uint32_t) */
  @type.uint32
  count = 0;

  /** weightOffset (Vector4) */
  @type.vec4
  weightOffset = vec4.create();

}
