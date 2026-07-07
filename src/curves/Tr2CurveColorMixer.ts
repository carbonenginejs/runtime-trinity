// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveColorMixer.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveColorMixer.cpp
import { num } from "@carbonenginejs/core-math/num";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import type { Color, ITriColorFunction, ITriCurveLength } from "./contracts.ts";

@CjsSchema.type.define({ className: "Tr2CurveColorMixer" })
export class Tr2CurveColorMixer implements ITriCurveLength, ITriColorFunction
{

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.color
  convertedLinearValue: Color = vec4.fromValues(0, 0, 0, 1);

  @CjsSchema.type.color
  color1: Color = vec4.fromValues(0, 0, 0, 1);

  @CjsSchema.type.color
  color2: Color = vec4.fromValues(0, 0, 0, 1);

  @CjsSchema.type.color
  currentValue: Color = vec4.fromValues(0, 0, 0, 1);

  @CjsSchema.type.float32
  lerpValue = 0;

  @CjsSchema.type.float32
  saturation = 1;

  @CjsSchema.type.float32
  brightness = 1;

  /**
   * Updates the cached mixed color and converted linear color.
   */
  UpdateValue(time: number): void
  {
    this.currentValue = this.GetValue(time);
    invertLinearColor(this.convertedLinearValue, this.currentValue);
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
   * Gets the mixed color value at `time` into `out`.
   */
  GetValueAt(out: Color, time: number): Color
  {
    return vec4.copy(out, this.GetValue(time));
  }

  /**
   * Gets the authored duration for this mixer.
   */
  Length(): number
  {
    return 0;
  }

  /**
   * Gets a new color containing the mixed value at the supplied time.
   */
  GetValue(_time: number): Color
  {
    const out: Color = vec4.lerp(
      vec4.create(),
      this.color1,
      this.color2,
      this.lerpValue,
    );

    if (this.saturation !== 1)
    {
      const
        intensity = out[0] * 0.299 + out[1] * 0.587 + out[2] * 0.114,
        grayscale = vec4.fromValues(intensity, intensity, intensity, intensity);

      vec4.lerp(out, grayscale, out, Math.max(0, this.saturation));
    }

    return vec4.scale(out, out, this.brightness);
  }

}

/**
 * Converts current sRGB-like output into Carbon's cached linear color.
 */
function invertLinearColor(out: Color, value: Color): Color
{
  out[0] = num.linearFromSRGB(value[0]);
  out[1] = num.linearFromSRGB(value[1]);
  out[2] = num.linearFromSRGB(value[2]);
  return out;
}
