// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";
import type { Quat } from "./contracts.ts";
import { Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveInterpolationValue } from "./enums.ts";

@type.define({ className: "Tr2CurveQuaternionKey", family: "curves" })
export class Tr2CurveQuaternionKey extends CjsModel
{

  @type.float32
  time = 0;

  @type.quat
  value: Quat = quat.create();

  @type.uint16
  id = 0;

  @type.uint16
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.LINEAR;

}
