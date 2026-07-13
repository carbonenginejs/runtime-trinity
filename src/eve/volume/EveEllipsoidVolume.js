// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveEllipsoidVolume.h
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveEllipsoidVolume.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveEllipsoidVolume_Blue.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveEllipsoidVolume",
  family: "eve/volume"
})
export class EveEllipsoidVolume extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.notify
  @io.persist
  @type.vec3
  position = vec3.create();

  @io.notify
  @io.persist
  @type.quat
  rotation = quat.create();

  @io.notify
  @io.persist
  @type.vec3
  innerShape = vec3.create();

  @io.notify
  @io.persist
  @type.vec3
  shape = vec3.create();

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
    this.#setup(true);
    return true;
  }

  @carbon.method
  @impl.adapted
  GetBoundingSphere()
  {
    return {
      center: vec3.clone(this.position),
      radius: Math.max(this.shape[0], this.shape[1], this.shape[2])
    };
  }

  @carbon.method
  @impl.adapted
  GetIntensity(position)
  {
    const local = vec3.subtract(vec3.create(), position, this.position);
    vec3.transformQuat(local, local, this.#inverseRotation);
    const outer = EveEllipsoidVolume.#radialDistance(local, this.shape);
    const distance = vec3.length(local);
    if (!(outer > 0) || distance > outer)
    {
      return 0;
    }
    const inner = EveEllipsoidVolume.#radialDistance(local, this.innerShape);
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
    this.#setup(true);
    return true;
  }

  @carbon.method
  @impl.noop
  RenderDebugInfo()
  {
  }

  #setup(notify)
  {
    for (let i = 0; i < 3; i++)
    {
      this.shape[i] = Math.max(0, this.shape[i]);
      this.innerShape[i] = Math.min(Math.max(0, this.innerShape[i]), this.shape[i]);
    }
    quat.invert(this.#inverseRotation, this.rotation);
    if (notify)
    {
      for (const callback of this.#callbacks.values())
      {
        callback?.();
      }
    }
  }

  static #radialDistance(position, radii)
  {
    const length = vec3.length(position);
    if (length === 0)
    {
      return Math.min(radii[0], radii[1], radii[2]);
    }
    let denominator = 0;
    for (let i = 0; i < 3; i++)
    {
      if (radii[i] <= 0 && position[i] !== 0)
      {
        return 0;
      }
      if (radii[i] > 0)
      {
        const direction = position[i] / length;
        denominator += direction * direction / (radii[i] * radii[i]);
      }
    }
    return denominator > 0 ? 1 / Math.sqrt(denominator) : 0;
  }
}
