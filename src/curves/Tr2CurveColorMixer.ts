// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveColorMixer.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveColorMixer.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { Color, ITriColorFunction, ITriCurveLength } from "./contracts.ts";

@type.define({ className: "Tr2CurveColorMixer", family: "curves" })
export class Tr2CurveColorMixer extends CjsModel
  implements ITriCurveLength, ITriColorFunction {
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.color
  convertedLinearValue: Color = vec4.createLinear();

  @io.persist
  @type.color
  color1: Color = vec4.createLinear();

  @io.persist
  @type.color
  color2: Color = vec4.createLinear();

  @io.read
  @type.color
  currentValue: Color = vec4.createLinear();

  @io.persist
  @type.float32
  lerpValue = 0;

  @io.persist
  @type.float32
  saturation = 1;

  @io.persist
  @type.float32
  brightness = 1;

  #grayscale: Color = vec4.create();

  /**
   * Updates the cached mixed color and converted linear color.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.GetValueAt(time, this.currentValue);
    vec3.linearFromSRGB(this.convertedLinearValue, this.currentValue);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Color): Color {
    this.UpdateValue(time);
    return vec4.copy(out, this.currentValue);
  }

  /**
   * Gets the mixed color value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Color): Color {
    void time;
    vec4.lerp(out, this.color1, this.color2, this.lerpValue);

    if (this.saturation !== 1) {
      const intensity = out[0] * 0.299 + out[1] * 0.587 + out[2] * 0.114;
      this.#grayscale[0] = intensity;
      this.#grayscale[1] = intensity;
      this.#grayscale[2] = intensity;
      this.#grayscale[3] = intensity;

      vec4.lerp(out, this.#grayscale, out, Math.max(0, this.saturation));
    }

    return vec4.scale(out, out, this.brightness);
  }

  /**
   * Gets the authored duration for this mixer.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return 0;
  }

  /**
   * Gets the mixed color value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Color): Color {
    return this.GetValueAt(time, out);
  }
}
