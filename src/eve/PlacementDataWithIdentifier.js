// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveDistributionMethods\DistributionAttributeModifiers\IEveDistributionModifier.h
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "PlacementDataWithIdentifier",
  family: "eve/distribution/attributeModifiers"
})
export class PlacementDataWithIdentifier extends CjsModel
{
  @type.vec3
  initialTranslation = vec3.create();

  @type.quat
  initialRotation = quat.create();

  @type.vec3
  initialScale = vec3.fromValues(1, 1, 1);

  @type.vec3
  additionalTranslation = vec3.create();

  @type.vec3
  translationFrameDelta = vec3.create();

  @type.quat
  additionalRotation = quat.create();

  @type.vec3
  additionalScale = vec3.fromValues(1, 1, 1);

  @type.int32
  boneIndex = -1;

  @type.float32
  lifeTime = 0;

  @type.uint32
  uniqueID = 0;

  @type.int32
  initialPlacementID = -1;
}
