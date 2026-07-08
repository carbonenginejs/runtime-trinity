// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveSpaceObject2.h

import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4, Vec3, Vec4 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveSpaceObjectPSData", family: "eve" })
export class EveSpaceObjectPSData extends CjsModel {
  @type.mat4
  worldTransform: Mat4 = mat4.create();

  @type.mat4
  worldTransformLast: Mat4 = mat4.create();

  @type.mat4
  invWorldTransform: Mat4 = mat4.create();

  @type.vec4
  shipData: Vec4 = vec4.create();

  @type.vec3
  clipSphereCenter: Vec3 = vec3.create();

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

  @type.vec4
  shLightingCoefficients: Vec4 = vec4.create();

  @type.vec4
  customMaskMaterialIDs: Vec4 = vec4.create();

  @type.vec4
  customMaskTargets: Vec4 = vec4.create();

  @type.vec4
  customMaskClamps: Vec4 = vec4.create();

  @type.vec4
  screenSize: Vec4 = vec4.create();

  @type.vec4
  customData: Vec4 = vec4.create();
}
