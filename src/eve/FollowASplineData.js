// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\FollowASpline.h
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "FollowASplineData",
  family: "eve/child/behaviors"
})
export class FollowASplineData extends CjsModel
{
  @type.int32
  tunnelLock = -1;

  @type.int32
  tunnelPoint = 0;
}
