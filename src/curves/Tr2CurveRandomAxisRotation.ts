// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveRandomAxisRotation.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveRandomAxisRotation.cpp
import { fromYawPitchRoll, quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriQuaternionFunction, Quat } from "./contracts.ts";

@type.define({ className: "Tr2CurveRandomAxisRotation", family: "curves" })
export class Tr2CurveRandomAxisRotation extends CjsModel
  implements ITriQuaternionFunction {
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.quat
  currentValue: Quat = quat.create();

  @io.persist
  @type.float32
  period = 1;

  @io.persistOnly
  @type.uint32
  seed = 0;

  /**
   * Source runtime state; not exposed by Carbon's Blue schema.
   */
  preRotation: Quat = quat.create();

  /**
   * Source runtime state; not exposed by Carbon's Blue schema.
   */
  postRotation: Quat = quat.create();

  #rotation: Quat = quat.create();

  constructor() {
    super();
    this.SeedChanged();
    this.GetValueAt(0, this.currentValue);
  }

  /**
   * Updates the cached quaternion value for the supplied time.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.GetValueAt(time, this.currentValue);
  }

  /**
   * Updates the cached value and copies it into `out`.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Quat): Quat {
    this.UpdateValue(time);
    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Quat): Quat {
    return this.Evaluate(out, time);
  }

  /**
   * Derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Quat): Quat {
    return out;
  }

  /**
   * Second-derivative stub retained for Carbon interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Quat): Quat {
    return out;
  }

  /**
   * Gets the quaternion value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Quat): Quat {
    return this.GetValueAt(time, out);
  }

  /**
   * Evaluates postRotation * pitchRotation * preRotation.
   */
  Evaluate(out: Quat, time: number): Quat {
    quat.copy(out, this.postRotation);

    if (this.period !== 0) {
      const angle = (time / Math.abs(this.period)) * Math.PI * 2;
      fromYawPitchRoll(this.#rotation, 0, angle, 0);
      quat.multiply(out, out, this.#rotation);
    }

    return quat.multiply(out, out, this.preRotation);
  }

  /**
   * Rebuilds random rotations when a persisted seed is available.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    if (this.seed !== 0) {
      this.SeedChanged();
    }

    return true;
  }

  /**
   * Gets the deterministic seed value.
   */
  @carbon.method
  @impl.implemented
  GetSeed(): number {
    return this.seed;
  }

  /**
   * Sets the deterministic seed value and rebuilds random rotations.
   */
  @carbon.method
  @impl.adapted
  SetSeed(seed: number): void {
    this.seed = seed >>> 0;
    this.SeedChanged();
  }

  /**
   * Rebuilds pre/post random rotations.
   */
  @carbon.method
  @impl.adapted
  SeedChanged(): void {
    const random = this.seed !== 0
      ? makeMsvcDefaultRandomEngine(this.seed)
      : Math.random;

    buildCarbonRandomRotation(this.preRotation, random);
    buildCarbonRandomRotation(this.postRotation, random);
  }
}

type RandomSource = () => number;

function buildCarbonRandomRotation(out: Quat, random: RandomSource): Quat {
  const roll = randomAngle(random);
  const pitch = randomAngle(random);
  const yaw = randomAngle(random);
  return fromYawPitchRoll(out, yaw, pitch, roll);
}

function randomAngle(random: RandomSource): number {
  return random() * Math.PI * 2;
}

function makeMsvcDefaultRandomEngine(seed: number): RandomSource {
  const engine = new CjsMt19937(seed >>> 0);
  return () => engine.Next() / 0xffffffff;
}

class CjsMt19937 {
  #state = new Uint32Array(624);
  #index = 624;

  constructor(seed: number) {
    this.#state[0] = seed >>> 0;
    for (let i = 1; i < this.#state.length; i++) {
      const previous = this.#state[i - 1];
      this.#state[i] = (
        Math.imul(1812433253, previous ^ (previous >>> 30)) + i
      ) >>> 0;
    }
  }

  Next(): number {
    if (this.#index >= this.#state.length) {
      this.#twist();
    }

    let value = this.#state[this.#index++];
    value ^= value >>> 11;
    value ^= (value << 7) & 0x9d2c5680;
    value ^= (value << 15) & 0xefc60000;
    value ^= value >>> 18;
    return value >>> 0;
  }

  #twist(): void {
    for (let i = 0; i < this.#state.length; i++) {
      const next = (i + 1) % this.#state.length;
      const mix = (this.#state[i] & 0x80000000) |
        (this.#state[next] & 0x7fffffff);
      let value = this.#state[(i + 397) % this.#state.length] ^ (mix >>> 1);
      if (mix & 1) {
        value ^= 0x9908b0df;
      }
      this.#state[i] = value >>> 0;
    }
    this.#index = 0;
  }
}
