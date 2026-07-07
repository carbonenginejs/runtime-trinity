// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, ITriVectorFunction, Vec3 } from "./contracts.ts";

@CjsSchema.type.define({ className: "Tr2CurveCombiner" })
export class Tr2CurveCombiner implements ITriCurveLength, ITriVectorFunction
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.array({ kind: "objectRef", className: "ITriVectorFunction" })
  curves: ITriVectorFunction[] = [];

  @CjsSchema.type.vec3
  currentValue: Vec3 = vec3.create();

  /**
   * Updates the cached sum of every child vector function.
   */
  UpdateValue(time: number): void
  {
    const out: Vec3 = vec3.create();
    for (const curve of this.curves)
    {
      const temp: Vec3 = vec3.create();
      curve.Update(temp, time);
      vec3.add(out, out, temp);
    }
    this.currentValue = out;
  }

  /**
   * Gets the longest child curve length.
   */
  Length(): number
  {
    let maxLength = 0;
    for (const curve of this.curves)
    {
      const length = (curve as unknown as Partial<ITriCurveLength>).Length?.();
      if (typeof length === "number")
      {
        maxLength = Math.max(length, maxLength);
      }
    }
    return maxLength;
  }

  /**
   * Gets the summed vector value without mutating a caller-provided output.
   */
  GetValue(time: number): Vec3
  {
    const out: Vec3 = vec3.create();
    for (const curve of this.curves)
    {
      const temp: Vec3 = vec3.create();
      curve.GetValueAt(temp, time);
      vec3.add(out, out, temp);
    }
    return out;
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  Update(out: Vec3, time: number): Vec3
  {
    this.UpdateValue(time);
    out[0] = this.currentValue[0];
    out[1] = this.currentValue[1];
    out[2] = this.currentValue[2];
    return out;
  }

  /**
   * Gets the summed vector value at `time` into `out`.
   */
  GetValueAt(out: Vec3, time: number): Vec3
  {
    const value = this.GetValue(time);
    out[0] = value[0];
    out[1] = value[1];
    out[2] = value[2];
    return out;
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  GetValueDotAt(out: Vec3, _time: number): Vec3
  {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  GetValueDoubleDotAt(out: Vec3, _time: number): Vec3
  {
    return out;
  }

  /**
   * Position interpolation stub retained for Carbon interface compatibility.
   */
  InterpolatedPosition(out: Vec3, _time: number): Vec3
  {
    return out;
  }

}
