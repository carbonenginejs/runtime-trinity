// Source: E:\carbonengine\trinity\trinity\Eve\EveTransform.h
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveBasicPerObjectData",
  family: "eve/perObjectData"
})
export class EveBasicPerObjectData extends CjsModel
{
  @type.mat4
  world = mat4.create();

  @type.mat4
  worldLast = mat4.create();

  @type.mat4
  worldInverse = mat4.create();
}
