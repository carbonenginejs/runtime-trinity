// Source: E:\carbonengine\trinity\trinity\TriSequencer.h
// Source: E:\carbonengine\trinity\trinity\TriSequencer.cpp
// Source: E:\carbonengine\trinity\trinity\TriMath.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "TriPerlinCurve",
  family: "trinityCore"
})
export class TriPerlinCurve extends CjsModel
{
  /** Mirrors Carbon's process setting used for deterministic expression previews. */
  static expressionCurveFakeRandom = false;

  static #gradients = TriPerlinCurve.#createGradients();
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
    let sum = 0;
    let amplitude = 1;
    const count = Math.max(0, Math.trunc(octaves));
    for (let index = 0; index < count; index++)
    {
      sum += TriPerlinCurve.#noise(position) * amplitude;
      amplitude *= 1 / inverseAmplitude;
      position *= frequency;
    }
    return sum;
  }

  static #noise(position)
  {
    const floor = Math.floor(position);
    const first = floor & 255;
    const second = (first + 1) & 255;
    const x0 = position - floor;
    const x1 = x0 - 1;
    const value0 = x0 * TriPerlinCurve.#gradients[first];
    const value1 = x1 * TriPerlinCurve.#gradients[second];
    const curve = x0 * x0 * (3 - 2 * x0);
    return value0 + curve * (value1 - value0);
  }

  static #createGradients()
  {
    const state = new Uint32Array(624);
    state[0] = 0;
    for (let index = 1; index < state.length; index++)
    {
      const previous = state[index - 1] ^ (state[index - 1] >>> 30);
      state[index] = (Math.imul(1812433253, previous) + index) >>> 0;
    }

    let cursor = state.length;
    const twist = () =>
    {
      for (let index = 0; index < state.length; index++)
      {
        const bits = (state[index] & 0x80000000) | (state[(index + 1) % 624] & 0x7fffffff);
        state[index] = state[(index + 397) % 624] ^ (bits >>> 1) ^ (bits & 1 ? 0x9908b0df : 0);
      }
      cursor = 0;
    };
    const next = () =>
    {
      if (cursor >= state.length) twist();
      let value = state[cursor++];
      value ^= value >>> 11;
      value ^= (value << 7) & 0x9d2c5680;
      value ^= (value << 15) & 0xefc60000;
      value ^= value >>> 18;
      return value >>> 0;
    };

    return Float64Array.from({ length: 256 }, () => ((next() % 512) - 256) / 256);
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
