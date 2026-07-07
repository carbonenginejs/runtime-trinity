// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, ITriVectorFunction, Vec3 } from "./contracts.ts";

export class Tr2CurveCombiner implements ITriCurveLength, ITriVectorFunction {
  name = "";
  curves: ITriVectorFunction[] = [];
  currentValue: Vec3 = [0, 0, 0];

  UpdateValue(time: number): void {
    const out: Vec3 = [0, 0, 0];
    for (const curve of this.curves) {
      const temp: Vec3 = [0, 0, 0];
      curve.Update(temp, time);
      out[0] += temp[0];
      out[1] += temp[1];
      out[2] += temp[2];
    }
    this.currentValue = out;
  }

  Length(): number {
    let maxLength = 0;
    for (const curve of this.curves) {
      const length = (curve as unknown as Partial<ITriCurveLength>).Length?.();
      if (typeof length === "number") {
        maxLength = Math.max(length, maxLength);
      }
    }
    return maxLength;
  }

  GetValue(time: number): Vec3 {
    const out: Vec3 = [0, 0, 0];
    for (const curve of this.curves) {
      const temp: Vec3 = [0, 0, 0];
      curve.GetValueAt(temp, time);
      out[0] += temp[0];
      out[1] += temp[1];
      out[2] += temp[2];
    }
    return out;
  }

  Update(out: Vec3, time: number): Vec3 {
    this.UpdateValue(time);
    out[0] = this.currentValue[0];
    out[1] = this.currentValue[1];
    out[2] = this.currentValue[2];
    return out;
  }

  GetValueAt(out: Vec3, time: number): Vec3 {
    const value = this.GetValue(time);
    out[0] = value[0];
    out[1] = value[1];
    out[2] = value[2];
    return out;
  }

  GetValueDotAt(out: Vec3, _time: number): Vec3 {
    return out;
  }

  GetValueDoubleDotAt(out: Vec3, _time: number): Vec3 {
    return out;
  }

  InterpolatedPosition(out: Vec3, _time: number): Vec3 {
    return out;
  }
}

CjsSchema.define(Tr2CurveCombiner, { className: "Tr2CurveCombiner" });
CjsSchema.defineField(Tr2CurveCombiner, "name", "type", { kind: "string" });
CjsSchema.defineField(Tr2CurveCombiner, "curves", "type", {
  kind: "array",
  itemType: { kind: "objectRef", className: "ITriVectorFunction" },
});
CjsSchema.defineField(Tr2CurveCombiner, "currentValue", "type", {
  kind: "vec3",
});
