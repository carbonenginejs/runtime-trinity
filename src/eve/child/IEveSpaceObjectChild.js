// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\IEveSpaceObjectChild.h
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { type } from "@carbonenginejs/runtime-utils/schema";


@type.define({ className: "IEveSpaceObjectChild", family: "eve/child" })
export class IEveSpaceObjectChild extends CjsModel
{
  static Origin = Object.freeze({
    SPACE: 0,
    SOF: 1
  });

}
