// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveBoxVolume.h
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveBoxVolume.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveBoxVolume_Blue.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveBoxVolume",
  family: "eve/volume"
})
export class EveBoxVolume extends CjsModel
{
  @io.notify
  @io.persist
  @type.vec3
  position = vec3.create();

  @io.notify
  @io.persist
  @type.vec3
  scaling = vec3.create();

  @io.notify
  @io.persist
  @type.vec3
  innerScaling = vec3.create();

  @io.notify
  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.string
  name = "";

  @io.readwrite
  @type.boolean
  debugShowIntersection = false;

  #callbacks = new Map();

  #nextCallbackId = 1;

  #inverseRotation = quat.create();

  @carbon.method
  @impl.implemented
  Initialize()
  {
    this.#setup();
    return true;
  }

  @carbon.method
  @impl.adapted
  GetBoundingSphere()
  {
    return {
      center: vec3.clone(this.position),
      radius: vec3.length(this.scaling) * 0.5
    };
  }

  @carbon.method
  @impl.adapted
  GetIntensity(position)
  {
    const local = EveBoxVolume.#toLocal(position, this.position, this.#inverseRotation);
    const outer = EveBoxVolume.#radialBoxDistance(local, this.scaling);
    const distance = vec3.length(local);
    if (!(outer > 0) || distance > outer)
    {
      return 0;
    }
    const inner = EveBoxVolume.#radialBoxDistance(local, this.innerScaling);
    if (inner > 0 && distance <= inner)
    {
      return 1;
    }
    const span = outer - inner;
    const ratio = span > 0 ? (outer - distance) / span : 0;
    return ratio * ratio;
  }

  @carbon.method
  @impl.adapted
  RegisterForChanges(callback)
  {
    const id = this.#nextCallbackId++;
    this.#callbacks.set(id, callback);
    return id;
  }

  @carbon.method
  @impl.implemented
  UnregisterForChanges(callbackId)
  {
    this.#callbacks.delete(callbackId);
  }

  @carbon.method
  @impl.adapted
  OnModified()
  {
    this.#setup();
    for (const callback of this.#callbacks.values())
    {
      callback?.();
    }
    return true;
  }

  @carbon.method
  @impl.noop
  RenderDebugInfo()
  {
  }

  #setup()
  {
    for (let i = 0; i < 3; i++)
    {
      this.scaling[i] = Math.max(0, this.scaling[i]);
      this.innerScaling[i] = Math.min(Math.max(0, this.innerScaling[i]), this.scaling[i]);
    }
    quat.invert(this.#inverseRotation, this.rotation);
  }

  static #toLocal(position, center, inverseRotation)
  {
    const local = vec3.subtract(vec3.create(), position, center);
    return vec3.transformQuat(local, local, inverseRotation);
  }

  static #radialBoxDistance(position, scaling)
  {
    const length = vec3.length(position);
    if (length === 0)
    {
      return Math.min(scaling[0], scaling[1], scaling[2]) * 0.5;
    }
    let distance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < 3; i++)
    {
      const direction = Math.abs(position[i] / length);
      if (direction > 0)
      {
        distance = Math.min(distance, scaling[i] * 0.5 / direction);
      }
    }
    return Number.isFinite(distance) ? distance : 0;
  }
}
