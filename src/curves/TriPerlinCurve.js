// Source: E:\carbonengine\trinity\trinity\TriSequencer.h
// Source: E:\carbonengine\trinity\trinity\TriSequencer.cpp
// Source: E:\carbonengine\trinity\trinity\TriMath.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { carbonPerlin1D } from "@carbonenginejs/core-math/noise";


@type.define({
  className: "TriPerlinCurve",
  family: "trinityCore"
})
export class TriPerlinCurve extends CjsModel
{
  /** Mirrors Carbon's process setting used for deterministic expression previews. */
  static expressionCurveFakeRandom = false;

  static #triRandState = 1234;

  @io.persist
  @type.float32
  alpha = 1.1;

  @io.persist
  @type.float32
  beta = 2;

  @io.persist
  @type.int32
  N = 3;

  @io.persist
  @type.float32
  value = 0;

  @io.persist
  @type.float32
  scale = 1;

  @io.persist
  @type.float32
  offset = 0;

  @io.persist
  @type.float32
  speed = 1;

  @io.persist
  @type.string
  name = "";

  #lastUpdated = -1;
  #startOffset = TriPerlinCurve.#nextStartOffset();

  @carbon.method
  @impl.implemented
  UpdateValue(time)
  {
    this.Update(time);
  }

  @carbon.method
  @impl.implemented
  Update(time)
  {
    if (this.#lastUpdated !== time)
    {
      this.#lastUpdated = time;
      this.value = this.GetValueAt(time);
    }
    return this.value;
  }

  @carbon.method
  @impl.implemented
  GetValueAt(time)
  {
    let position = Number(time);
    if (TriPerlinCurve.expressionCurveFakeRandom)
    {
      position = position * this.speed + 0.21;
    }
    else
    {
      position = (position + this.#startOffset) * this.speed;
    }

    const noise = TriPerlinCurve.PerlinNoise1D(position, this.alpha, this.beta, this.N);
    return ((noise + 1) / 2) * this.scale + this.offset;
  }

  /** Carbon's implementation changes output amplitude despite the historical name. */
  @carbon.method
  @impl.implemented
  ScaleTime(scale)
  {
    this.scale = scale;
  }

  static PerlinNoise1D(position, inverseAmplitude, frequency, octaves)
  {
    return carbonPerlin1D(position, inverseAmplitude, frequency, octaves);
  }

  static #nextStartOffset()
  {
    let state = TriPerlinCurve.#triRandState;
    state = ((state << 12) + 150889) >>> 0;
    state %= 714025;
    TriPerlinCurve.#triRandState = state;

    // Carbon casts 10,000,000,000 to its 32-bit `int` parameter on Windows.
    const carbonIntLimit = 10000000000 >>> 0;
    return Math.floor((Math.imul(carbonIntLimit, state) >>> 0) / 714025);
  }
}
