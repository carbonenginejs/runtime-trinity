// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveSpaceObjectDecal.h

import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4 } from "@carbonenginejs/core-math/types";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "DecalVSPerObjectData", family: "eve" })
export class DecalVSPerObjectData extends CjsModel {
  @type.mat4
  worldMatrix: Mat4 = mat4.create();

  @type.mat4
  invWorldMatrix: Mat4 = mat4.create();

  @type.mat4
  decalMatrix: Mat4 = mat4.create();

  @type.mat4
  inverseDecalMatrix: Mat4 = mat4.create();

  @type.mat4
  parentBoneMatrix: Mat4 = mat4.create();

  @type.mat4
  invParentBoneMatrix: Mat4 = mat4.create();
}
