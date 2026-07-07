// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector2.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector2.cpp
import { vec2 } from "@carbonenginejs/core-math/vec2";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, Vec2 } from "./contracts.ts";
import {
  Tr2CurveInterpolation,
  Tr2CurveTangentType,
} from "./enums.ts";
import type {
  Tr2CurveExtrapolationValue,
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";
import { Tr2CurveScalar } from "./Tr2CurveScalar.ts";

@CjsSchema.type.define({ className: "Tr2CurveVector2" })
export class Tr2CurveVector2 implements ITriCurveLength
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  x: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  y: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.vec2
  currentValue: Vec2 = vec2.create();

  /**
   * Updates the cached vector value by updating each scalar component curve.
   */
  UpdateValue(time: number): void
  {
    this.currentValue[0] = this.x.Update(time);
    this.currentValue[1] = this.y.Update(time);
  }

  /**
   * Gets the longest scalar component curve length.
   */
  Length(): number
  {
    return Math.max(this.x.Length(), this.y.Length());
  }

  /**
   * Gets a new vector containing the value at the supplied time.
   */
  GetValue(time: number): Vec2
  {
    const out: Vec2 = vec2.create();
    return this.GetValueAt(out, time);
  }

  /**
   * Adds one vector key by adding matching scalar keys to each component curve.
   */
  AddKey(
    time: number,
    value: Vec2,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent?: Vec2,
    rightTangent?: Vec2,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void
  {
    const lt = leftTangent ?? vec2.create();
    const rt = rightTangent ?? vec2.create();

    this.x.AddKey(time, value[0], interpolation, lt[0], rt[0], tangentType);
    this.y.AddKey(time, value[1], interpolation, lt[1], rt[1], tangentType);
  }

  /**
   * Sets extrapolation on all scalar component curves.
   */
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void
  {
    this.x.SetExtrapolation(extrapolation);
    this.y.SetExtrapolation(extrapolation);
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  GetValueAt(out: Vec2, time: number): Vec2
  {
    out[0] = this.x.GetValue(time);
    out[1] = this.y.GetValue(time);
    return out;
  }

}
