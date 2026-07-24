// Source: E:\carbonengine\trinity\trinity\TriObserverLocal.h
// Source: E:\carbonengine\trinity\trinity\TriObserverLocal.cpp
// Source: E:\carbonengine\trinity\trinity\TriObserverLocal_Blue.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({ className: "TriObserverLocal", family: "trinityCore" })
export class TriObserverLocal extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.vec3
  position = vec3.create();

  @io.persist
  @type.vec3
  front = vec3.fromValues(0, 0, 1);

  @io.persist
  @type.objectRef("IBluePlacementObserver")
  observer = null;

  @type.boolean
  mute = false;

  @carbon.method
  @impl.implemented
  Update(worldTransform)
  {
    if (!this.observer?.UpdatePlacement)
    {
      return false;
    }

    const position = vec3.transformMat4(vec3.create(), this.position, worldTransform);
    const front = TriObserverLocal.#TransformNormal(vec3.create(), this.front, worldTransform);
    const up = vec3.create();

    if (vec3.squaredLength(front) < 1e-10)
    {
      vec3.set(front, 0, 0, 1);
      vec3.set(up, 0, 1, 0);
    }
    else
    {
      TriObserverLocal.#TransformNormal(up, TriObserverLocal.#up, worldTransform);
    }

    this.observer.UpdatePlacement(front, up, position);
    return true;
  }

  @carbon.method
  @impl.implemented
  GetObserver()
  {
    return this.observer;
  }

  @carbon.method
  @impl.implemented
  SetObserver(observer)
  {
    this.observer = observer ?? null;
  }

  @carbon.method
  @impl.implemented
  SetPosition(position)
  {
    vec3.copy(this.position, position);
  }

  @carbon.method
  @impl.implemented
  SetFront(front)
  {
    vec3.copy(this.front, front);
  }

  @carbon.method
  @impl.implemented
  GetMute()
  {
    return this.mute;
  }

  @carbon.method
  @impl.adapted
  SetMute(mute)
  {
    const next = !!mute;
    if (next === this.mute)
    {
      return false;
    }

    this.mute = next;
    if (next)
    {
      this.observer?.Mute?.();
    }
    else
    {
      this.observer?.Unmute?.();
    }
    return true;
  }

  @carbon.method
  @impl.implemented
  OnModified()
  {
    return true;
  }

  static #TransformNormal(out, value, transform)
  {
    const x = value[0];
    const y = value[1];
    const z = value[2];
    out[0] = transform[0] * x + transform[4] * y + transform[8] * z;
    out[1] = transform[1] * x + transform[5] * y + transform[9] * z;
    out[2] = transform[2] * x + transform[6] * y + transform[10] * z;
    return out;
  }

  static #up = Object.freeze([0, 1, 0]);
}

/**
 * Sends an audio event to an observer's emitter when the observed object
 * quacks like an audio emitter (Carbon dynamic_casts to ITr2AudEmitter).
 */
export function SendEventToAudEmitter(observer, audioEvent)
{
  const emitter = observer?.GetObserver?.();
  if (typeof emitter?.SendEvent === "function")
  {
    emitter.SendEvent(audioEvent);
  }
}
