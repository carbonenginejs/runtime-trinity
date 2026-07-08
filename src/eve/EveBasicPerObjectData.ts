// Source: E:\carbonengine\trinity\trinity\Eve\EveTransform.h

import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4 } from "@carbonenginejs/core-math/types";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveBasicPerObjectData", family: "eve" })
export class EveBasicPerObjectData extends CjsModel
{
  @type.mat4
  world: Mat4 = mat4.create();

  @type.mat4
  worldLast: Mat4 = mat4.create();

  @type.mat4
  worldInverse: Mat4 = mat4.create();
}
