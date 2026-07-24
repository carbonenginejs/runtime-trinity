// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\Behaviors\Formation.h
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "FormationData",
  family: "eve/child/behaviors"
})
export class FormationData extends CjsModel
{
  @type.int32
  assignedSlot = -1;
}
