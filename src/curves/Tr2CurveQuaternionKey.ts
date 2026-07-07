// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveQuaternion.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { Quat } from "./contracts.ts";
import { Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveInterpolationValue } from "./enums.ts";

export class Tr2CurveQuaternionKey {
  time = 0;
  value: Quat = [0, 0, 0, 1];
  id = 0;
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.LINEAR;
}

CjsSchema.define(Tr2CurveQuaternionKey, {
  className: "Tr2CurveQuaternionKey",
});
CjsSchema.defineField(Tr2CurveQuaternionKey, "time", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveQuaternionKey, "value", "type", {
  kind: "quat",
});
CjsSchema.defineField(Tr2CurveQuaternionKey, "id", "type", {
  kind: "uint16",
});
CjsSchema.defineField(Tr2CurveQuaternionKey, "interpolation", "type", {
  kind: "uint16",
});
