// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveLineSet.h

import type { Vec3, Vec4 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveLineData", family: "eve" })
export class EveLineData extends CjsModel {
  @type.vec3
  position1: Vec3 = vec3.create();

  @type.color
  color1: Vec4 = vec4.create();

  @type.vec3
  position2: Vec3 = vec3.create();

  @type.color
  color2: Vec4 = vec4.create();
}
