// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveSpaceObject2.h

import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4, Vec4 } from "@carbonenginejs/core-math/types";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveSpaceObjectVSData", family: "eve" })
export class EveSpaceObjectVSData extends CjsModel {
  @type.mat4
  worldTransform: Mat4 = mat4.create();

  @type.mat4
  worldTransformLast: Mat4 = mat4.create();

  @type.mat4
  invWorldTransform: Mat4 = mat4.create();

  @type.vec4
  shipData: Vec4 = vec4.create();

  @type.vec4
  clipData: Vec4 = vec4.create();

  @type.vec4
  ellpsoidRadii: Vec4 = vec4.create();

  @type.vec4
  ellpsoidCenter: Vec4 = vec4.create();

  @type.mat4
  customMaskMatrix: Mat4 = mat4.create();

  @type.vec4
  customMaskData: Vec4 = vec4.create();

  @type.uint32
  boneOffsets = 0;

  @type.uint32
  morphTargetVertexDataOffset = 0;

  @type.uint32
  morphTargetAnimationDataOffset = 0;

  @type.uint32
  activeMorphTargetsCount = 0;

  @type.uint32
  bakedMorphTargetVertexDataOffset = 0;

  @type.vec4
  customData: Vec4 = vec4.create();
}
