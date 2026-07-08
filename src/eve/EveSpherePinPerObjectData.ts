// Source: E:\carbonengine\trinity\trinity\Eve\UI\EveSpherePin.h

import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import type { Mat4, Quat, Vec4 } from "@carbonenginejs/core-math/types";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveSpherePinPerObjectData", family: "eve" })
export class EveSpherePinPerObjectData extends CjsModel {
  @type.mat4
  worldMatrix: Mat4 = mat4.create();

  @type.vec4
  pinPosition: Vec4 = vec4.create();

  @type.quat
  pinRotation: Quat = quat.create();

  @type.color
  pinColor: Vec4 = vec4.create();

  @type.vec4
  pinThreshold: Vec4 = vec4.create();

  @type.vec4
  pinRadiusPrecalc: Vec4 = vec4.create();

  @type.vec4
  pinUV: Vec4 = vec4.create();
}
