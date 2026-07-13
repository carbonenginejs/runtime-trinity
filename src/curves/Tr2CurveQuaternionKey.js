// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";
import { Tr2CurveInterpolation } from "./enums.js";


@type.define({
  className: "Tr2CurveQuaternionKey",
  family: "curves"
})
export class Tr2CurveQuaternionKey extends CjsModel
{
  @type.float32
  time = 0;

  @type.quat
  value = quat.create();

  @type.uint16
  id = 0;

  @type.uint16
  interpolation = Tr2CurveInterpolation.LINEAR;
}
