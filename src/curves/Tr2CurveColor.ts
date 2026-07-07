// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveColor.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveColor.cpp
import { num } from "@carbonenginejs/core-math/num";
import { ZERO as VEC4_ZERO, vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type {
  Color,
  ITriColorFunction,
  ITriCurveLength,
} from "./contracts.ts";
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

@CjsSchema.type.define({ className: "Tr2CurveColor" })
export class Tr2CurveColor implements ITriCurveLength, ITriColorFunction
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.boolean
  srgbOutput = false;

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  r: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  g: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  b: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.objectRef("Tr2CurveScalar")
  a: Tr2CurveScalar = new Tr2CurveScalar();

  @CjsSchema.type.float32
  timeOffset = 0;

  @CjsSchema.type.color
  currentValue: Color = vec4.fromValues(0, 0, 0, 1);

  /**
   * Updates the cached color value by updating each scalar component curve.
   */
  UpdateValue(time: number): void
  {
    const t = time - this.timeOffset;
    this.currentValue[0] = this.r.Update(t);
    this.currentValue[1] = this.g.Update(t);
    this.currentValue[2] = this.b.Update(t);
    this.currentValue[3] = this.a.IsEmpty() ? 1 : this.a.Update(t);

    if (this.srgbOutput)
    {
      linearToGamma(this.currentValue, this.currentValue);
    }
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  Update(out: Color, time: number): Color
  {
    this.currentValue = this.GetValue(time);
    return vec4.copy(out, this.currentValue);
  }

  /**
   * Gets the color value at `time` into `out`.
   */
  GetValueAt(out: Color, time: number): Color
  {
    return vec4.copy(out, this.GetValue(time));
  }

  /**
   * Gets the longest scalar component curve length.
   */
  Length(): number
  {
    return Math.max(
      this.r.Length(),
      this.g.Length(),
      this.b.Length(),
      this.a.Length(),
    );
  }

  /**
   * Gets a new color containing the value at the supplied time.
   */
  GetValue(time: number): Color
  {
    const t = time - this.timeOffset;
    const out: Color = vec4.fromValues(
      this.r.GetValue(t),
      this.g.GetValue(t),
      this.b.GetValue(t),
      this.a.IsEmpty() ? 1 : this.a.GetValue(t),
    );

    if (this.srgbOutput)
    {
      vec4.max(out, out, VEC4_ZERO);
      linearToGamma(out, out);
    }

    return out;
  }

  /**
   * Adds one color key by adding matching scalar keys to each component curve.
   */
  AddKey(
    time: number,
    value: Color,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent?: Color,
    rightTangent?: Color,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void
  {
    const lt = leftTangent ?? vec4.create();
    const rt = rightTangent ?? vec4.create();

    this.r.AddKey(time, value[0], interpolation, lt[0], rt[0], tangentType);
    this.g.AddKey(time, value[1], interpolation, lt[1], rt[1], tangentType);
    this.b.AddKey(time, value[2], interpolation, lt[2], rt[2], tangentType);
    this.a.AddKey(time, value[3], interpolation, lt[3], rt[3], tangentType);
  }

  /**
   * Sets extrapolation on all scalar component curves.
   */
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void
  {
    this.r.SetExtrapolation(extrapolation);
    this.g.SetExtrapolation(extrapolation);
    this.b.SetExtrapolation(extrapolation);
    this.a.SetExtrapolation(extrapolation);
  }

}

/**
 * Converts Carbon linear color to gamma 2.2 RGB while preserving alpha.
 */
function linearToGamma(out: Color, value: Color): Color
{
  out[0] = num.linearToGamma(value[0]);
  out[1] = num.linearToGamma(value[1]);
  out[2] = num.linearToGamma(value[2]);
  out[3] = value[3];
  return out;
}
