// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveSphereVolume.h
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveSphereVolume.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveSphereVolume_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveSphereVolume",
  family: "eve/volume"
})
export class EveSphereVolume extends CjsModel
{
  @io.notify
  @io.persist
  @type.vec3
  position = vec3.create();

  @io.notify
  @io.persist
  @type.float32
  radius = 1;

  @io.notify
  @io.persist
  @type.float32
  innerRadius = 1;

  @io.persist
  @type.string
  name = "";

  #callbacks = new Map();

  #nextCallbackId = 1;

  @carbon.method
  @impl.adapted
  GetBoundingSphere()
  {
    return {
      center: vec3.clone(this.position),
      radius: this.radius
    };
  }

  @carbon.method
  @impl.implemented
  GetIntensity(position)
  {
    const distanceSq = vec3.squaredDistance(position, this.position);
    const outerRadiusSq = this.radius * this.radius;
    if (distanceSq > outerRadiusSq)
    {
      return 0;
    }
    const innerRadiusSq = this.innerRadius * this.innerRadius;
    if (distanceSq <= innerRadiusSq)
    {
      return 1;
    }
    const interpolationDistance = outerRadiusSq - innerRadiusSq;
    return interpolationDistance > 0 ? 1 - (distanceSq - innerRadiusSq) / interpolationDistance : 0;
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
  OnModified(value = null)
  {
    const innerChanged = CjsModel.hasModifiedProperty(value, "innerRadius");
    const outerChanged = CjsModel.hasModifiedProperty(value, "radius");
    if (innerChanged && !outerChanged && this.innerRadius > this.radius)
    {
      this.radius = this.innerRadius;
    }
    if (outerChanged || !value)
    {
      this.radius = Math.max(0, this.radius);
      if (this.innerRadius > this.radius)
      {
        this.innerRadius = this.radius;
      }
    }
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
}
