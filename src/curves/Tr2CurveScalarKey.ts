// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import { Tr2CurveInterpolation, Tr2CurveTangentType } from "./enums.ts";
import type {
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";

export class Tr2CurveScalarKey {
  time = 0;
  value = 0;
  leftTangent = 0;
  rightTangent = 0;
  id = 0;
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE;
  tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP;
}

CjsSchema.define(Tr2CurveScalarKey, { className: "Tr2CurveScalarKey" });
CjsSchema.defineField(Tr2CurveScalarKey, "time", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalarKey, "value", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalarKey, "leftTangent", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalarKey, "rightTangent", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalarKey, "id", "type", { kind: "uint16" });
CjsSchema.defineField(Tr2CurveScalarKey, "interpolation", "type", {
  kind: "uint8",
});
CjsSchema.defineField(Tr2CurveScalarKey, "tangentType", "type", {
  kind: "uint8",
});
