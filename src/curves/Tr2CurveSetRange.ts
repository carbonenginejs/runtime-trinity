// Source: E:\carbonengine\trinity\trinity\Curves\TriCurveSet.h
// Source: E:\carbonengine\trinity\trinity\Curves\TriCurveSet.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";

export class Tr2CurveSetRange {
  name = "";
  startTime = 0;
  endTime = 1;
  looped = false;
}

CjsSchema.define(Tr2CurveSetRange, { className: "Tr2CurveSetRange" });
CjsSchema.defineField(Tr2CurveSetRange, "name", "type", { kind: "string" });
CjsSchema.defineField(Tr2CurveSetRange, "startTime", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveSetRange, "endTime", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveSetRange, "looped", "type", {
  kind: "boolean",
});
