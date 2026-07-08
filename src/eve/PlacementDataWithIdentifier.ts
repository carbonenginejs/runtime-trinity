// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveDistributionMethods\DistributionAttributeModifiers\IEveDistributionModifier.h

import { quat } from "@carbonenginejs/core-math/quat";
import type { Quat, Vec3 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "PlacementDataWithIdentifier", family: "eve" })
export class PlacementDataWithIdentifier extends CjsModel {
  @type.vec3
  initialTranslation: Vec3 = vec3.create();

  @type.quat
  initialRotation: Quat = quat.create();

  @type.vec3
  initialScale: Vec3 = vec3.fromValues(1, 1, 1);

  @type.vec3
  additionalTranslation: Vec3 = vec3.create();

  @type.vec3
  translationFrameDelta: Vec3 = vec3.create();

  @type.quat
  additionalRotation: Quat = quat.create();

  @type.vec3
  additionalScale: Vec3 = vec3.fromValues(1, 1, 1);

  @type.int32
  boneIndex = -1;

  @type.float32
  lifeTime = 0;

  @type.uint32
  uniqueID = 0;

  @type.int32
  initialPlacementID = -1;
}
