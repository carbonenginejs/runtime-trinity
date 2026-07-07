// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import { Tr2CurveInterpolation, Tr2CurveTangentType } from "./enums.ts";
import type {
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";

@CjsSchema.type.define({ className: "Tr2CurveScalarKey" })
export class Tr2CurveScalarKey
{

  @CjsSchema.type.float32
  time = 0;

  @CjsSchema.type.float32
  value = 0;

  @CjsSchema.type.float32
  leftTangent = 0;

  @CjsSchema.type.float32
  rightTangent = 0;

  @CjsSchema.type.uint16
  id = 0;

  @CjsSchema.type.uint8
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE;

  @CjsSchema.type.uint8
  tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP;

}
