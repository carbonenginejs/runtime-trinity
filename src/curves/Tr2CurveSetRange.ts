// Source: E:\carbonengine\trinity\trinity\Curves\TriCurveSet.h
// Source: E:\carbonengine\trinity\trinity\Curves\TriCurveSet.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";

@CjsSchema.type.define({ className: "Tr2CurveSetRange" })
export class Tr2CurveSetRange
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.float32
  startTime = 0;

  @CjsSchema.type.float32
  endTime = 1;

  @CjsSchema.type.boolean
  looped = false;

}
