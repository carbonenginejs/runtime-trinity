// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { Quat } from "./contracts.ts";
import { Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveInterpolationValue } from "./enums.ts";

@CjsSchema.type.define({
  className: "Tr2CurveQuaternionKey",
})
export class Tr2CurveQuaternionKey
{

  @CjsSchema.type.float32
  time = 0;

  @CjsSchema.type.quat
  value: Quat = quat.create();

  @CjsSchema.type.uint16
  id = 0;

  @CjsSchema.type.uint16
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.LINEAR;

}
