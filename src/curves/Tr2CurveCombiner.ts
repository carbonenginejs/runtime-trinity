// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, ITriVectorFunction, Vec3 } from "./contracts.ts";

@type.define({ className: "Tr2CurveCombiner", family: "curves" })
export class Tr2CurveCombiner extends CjsModel implements ITriCurveLength, ITriVectorFunction
{

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.array({ kind: "objectRef", className: "ITriVectorFunction" })
  curves: ITriVectorFunction[] = [];

  @io.read
  @type.vec3
  currentValue: Vec3 = vec3.create();

  #childValue: Vec3 = vec3.create();

  /**
   * Updates the cached sum of every child vector function.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void
  {
    vec3.zero(this.currentValue);
    for (const curve of this.curves)
    {
      curve.Update(time, this.#childValue);
      vec3.add(this.currentValue, this.currentValue, this.#childValue);
    }
  }

  /**
   * Gets the longest child curve length.
   */
  @carbon.method
  @impl.implemented
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
   * Gets the summed vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Vec3): Vec3
  {
    return this.GetValueAt(time, out);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Vec3): Vec3
  {
    this.UpdateValue(time);
    return vec3.copy(out, this.currentValue);
  }

  /**
   * Gets the summed vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Vec3): Vec3
  {
    vec3.zero(out);
    for (const curve of this.curves)
    {
      curve.GetValueAt(time, this.#childValue);
      vec3.add(out, out, this.#childValue);
    }
    return out;
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Vec3): Vec3
  {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Vec3): Vec3
  {
    return out;
  }

  /**
   * Position interpolation stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  InterpolatedPosition(_time: number, out: Vec3): Vec3
  {
    return out;
  }

}
