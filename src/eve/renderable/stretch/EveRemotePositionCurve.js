// Source: E:\carbonengine\trinity\trinity\Eve\Renderable\Stretch\EveRemotePositionCurve.h
// Source: E:\carbonengine\trinity\trinity\Eve\Renderable\Stretch\EveRemotePositionCurve.cpp
import { num } from "@carbonenginejs/core-math/num";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveRemotePositionCurve",
  family: "eve/renderable/stretch"
})
export class EveRemotePositionCurve extends CjsModel
{
  @io.persist
  @type.float32
  delayTime = 0;

  @io.persist
  @type.boolean
  cycle = false;

  @io.readwrite
  @type.vec3
  value = vec3.create();

  @io.persist
  @type.vec3
  offsetDir2 = vec3.create();

  @io.persist
  @type.objectRef("ITriVectorFunction")
  startPositionCurve = null;

  @io.persist
  @type.vec3
  offsetDir1 = vec3.create();

  @io.persist
  @type.float32
  sweepTime = 1;

  #startTime = 0;

  #startPosition = vec3.create();

  #currentOffsetDir = vec3.create();

  @carbon.method
  @impl.adapted
  @impl.reason("Carbon's output-first Be::Time overload is represented by the org-standard time-first JavaScript curve convention.")
  UpdateValue(time)
  {
    this.Update(time, this.#startPosition);
  }
  @carbon.method
  @impl.adapted
  @impl.reason("Carbon's output-first Be::Time overload is represented by the org-standard time-first JavaScript curve convention.")
  Update(time, out)
  {
    if (!this.startPositionCurve)
    {
      return vec3.zero(out);
    }
    if (this.#startTime === 0)
    {
      this.#startTime = time;
    }
    const timeSinceStart = time - this.#startTime;
    let s = 0;
    if (timeSinceStart > this.delayTime)
    {
      if (this.cycle)
      {
        s = num.clamp((timeSinceStart - this.delayTime) % this.sweepTime / this.sweepTime, 0, 1);
      }
      else
      {
        s = num.clamp((timeSinceStart - this.delayTime) / this.sweepTime, 0, 1);
      }
    }
    vec3.lerp(this.#currentOffsetDir, this.offsetDir1, this.offsetDir2, s);
    this.startPositionCurve.GetValueAt(time, this.#startPosition);
    vec3.add(this.value, this.#startPosition, this.#currentOffsetDir);
    return vec3.copy(out, this.value);
  }
  @carbon.method
  @impl.implemented
  GetValueAt(_time, out)
  {
    return vec3.copy(out, this.value);
  }
  @carbon.method
  @impl.noop
  GetValueDotAt(_time, out)
  {
    return out;
  }
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time, out)
  {
    return out;
  }
  @carbon.method
  @impl.implemented
  InterpolatedPosition(_time, out)
  {
    return vec3.copy(out, this.value);
  }
}
