// Source: E:\carbonengine\trinity\trinity\Curves\TriCurveSet.h
// Source: E:\carbonengine\trinity\trinity\Curves\TriCurveSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { io, type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "Tr2CurveSetRange", family: "curves" })
export class Tr2CurveSetRange extends CjsModel
{

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.float32
  startTime = 0;

  @io.persist
  @type.float32
  endTime = 1;

  @io.persist
  @type.boolean
  looped = false;

}
