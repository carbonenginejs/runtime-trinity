// Source: E:\carbonengine\trinity\trinity\Eve\Renderable\Stretch\EveRemotePositionCurve.h
// Source: E:\carbonengine\trinity\trinity\Eve\Renderable\Stretch\EveRemotePositionCurve.cpp

import { num } from "@carbonenginejs/core-math/num";
import type { Vec3 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriVectorFunction } from "../curves/contracts.ts";

@type.define({ className: "EveRemotePositionCurve", family: "eve" })
export class EveRemotePositionCurve extends CjsModel
  implements ITriVectorFunction
{
  @io.persist
  @type.float32
  delayTime = 0;

  @io.persist
  @type.boolean
  cycle = false;

  @io.readwrite
  @type.vec3
  value: Vec3 = vec3.create();

  @io.persist
  @type.vec3
  offsetDir2: Vec3 = vec3.create();

  @io.persist
  @type.objectRef("ITriVectorFunction")
  startPositionCurve: ITriVectorFunction | null = null;

  @io.persist
  @type.vec3
  offsetDir1: Vec3 = vec3.create();

  @io.persist
  @type.float32
  sweepTime = 1;

  #startTime = 0;
  #startPosition = vec3.create();
  #currentOffsetDir = vec3.create();

  @carbon.method
  @impl.adapted
  UpdateValue(time: number): void
  {
    this.Update(time, this.#startPosition);
  }

  @carbon.method
  @impl.adapted
  Update(time: number, out: Vec3): Vec3
  {
    if (!this.startPositionCurve) {
      return vec3.zero(out);
    }

    if (this.#startTime === 0) {
      this.#startTime = time;
    }

    const timeSinceStart = time - this.#startTime;
    let s = 0;

    if (timeSinceStart > this.delayTime) {
      if (this.cycle) {
        s = num.clamp(
          ((timeSinceStart - this.delayTime) % this.sweepTime) /
            this.sweepTime,
          0,
          1,
        );
      } else {
        s = num.clamp(
          (timeSinceStart - this.delayTime) / this.sweepTime,
          0,
          1,
        );
      }
    }

    vec3.lerp(this.#currentOffsetDir, this.offsetDir1, this.offsetDir2, s);
    this.startPositionCurve.GetValueAt(time, this.#startPosition);
    vec3.add(this.value, this.#startPosition, this.#currentOffsetDir);
    return vec3.copy(out, this.value);
  }

  @carbon.method
  @impl.implemented
  GetValueAt(_time: number, out: Vec3): Vec3
  {
    return vec3.copy(out, this.value);
  }

  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Vec3): Vec3
  {
    return out;
  }

  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Vec3): Vec3
  {
    return out;
  }

  @carbon.method
  @impl.implemented
  InterpolatedPosition(_time: number, out: Vec3): Vec3
  {
    return vec3.copy(out, this.value);
  }
}
