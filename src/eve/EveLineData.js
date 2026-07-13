// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveLineSet.h
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveLineData",
  family: "eve/ui"
})
export class EveLineData extends CjsModel
{
  @type.vec3
  position1 = vec3.create();

  @type.color
  color1 = vec4.create();

  @type.vec3
  position2 = vec3.create();

  @type.color
  color2 = vec4.create();
}
