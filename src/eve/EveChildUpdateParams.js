// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\IEveSpaceObjectChild.h
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveChildUpdateParams",
  family: "eve/child"
})
export class EveChildUpdateParams extends CjsModel
{
  @type.objectRef("IEveSpaceObject2")
  spaceObjectParent = null;

  @type.objectRef("IEveSpaceObjectChild")
  childParent = null;

  @type.uint64
  boneCount = 0;

  @type.objectRef("Float4x3")
  bones = null;

  @type.float32
  ownerMaxSpeed = 0;

  @type.float32
  activationStrength = 1;

  @type.float32
  controllerUpdateFrequency = 0.5;

  @type.boolean
  isVisible = true;

  @type.mat4
  localToWorldTransform = mat4.create();

  @type.vec3
  worldVelocity = vec3.create();
}
