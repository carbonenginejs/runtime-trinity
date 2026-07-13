// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveSpherePin.h
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveSpherePinPerObjectData",
  family: "eve/perObjectData"
})
export class EveSpherePinPerObjectData extends CjsModel
{
  @type.mat4
  worldMatrix = mat4.create();

  @type.vec4
  pinPosition = vec4.create();

  @type.quat
  pinRotation = quat.create();

  @type.color
  pinColor = vec4.create();

  @type.vec4
  pinThreshold = vec4.create();

  @type.vec4
  pinRadiusPrecalc = vec4.create();

  @type.vec4
  pinUV = vec4.create();
}
