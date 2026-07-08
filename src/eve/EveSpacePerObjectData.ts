// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveSpaceObject2.h

import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4, Vec4 } from "@carbonenginejs/core-math/types";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveSpacePerObjectData", family: "eve" })
export class EveSpacePerObjectData extends CjsModel {
  @type.uint32
  boneOffsets = 0;

  @type.vec4
  customData: Vec4 = vec4.create();

  @type.mat4
  customMaskMatrix: Mat4 = mat4.create();

  @type.vec4
  customMaskData: Vec4 = vec4.create();

  @type.vec4
  customMaskMaterialIDs: Vec4 = vec4.create();

  @type.vec4
  customMaskTargets: Vec4 = vec4.create();

  @type.vec4
  shLighting: Vec4 = vec4.create();

  @type.float32
  clipRadiusSq = 0;

  @type.float32
  clipRadius2Sq = 0;

  @type.float32
  impactDataOffset = 0;

  @type.float32
  clipSphereFactor2 = 0;

  @type.float32
  clipSphereFactor = 0;
}
