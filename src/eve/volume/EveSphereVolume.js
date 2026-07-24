// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveSphereVolume.h
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveSphereVolume.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\Volume\EveSphereVolume_Blue.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


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

  @io.flag("radius")
  @io.notify
  @io.persist
  @type.float32
  radius = 1;

  @io.flag("innerRadius")
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
  GeneratePointsInVolume(points, howManyToAdd, excludeInnerVolume, fallOffFactor)
  {
    const count = Math.max(0, Math.trunc(howManyToAdd));
    const radiusRange = this.radius - this.innerRadius;
    let innerSelectionChance = 0;
    if (!excludeInnerVolume)
    {
      const adjustedOuterRadius = this.innerRadius + 0.5 * radiusRange;
      innerSelectionChance = this.innerRadius ** 2 / adjustedOuterRadius ** 2;
    }

    for (let i = 0; i < count; i++)
    {
      let distance;
      if (excludeInnerVolume)
      {
        distance = this.innerRadius + radiusRange * Math.pow(Math.random(), 1 / 3);
      }
      else if (Math.random() < innerSelectionChance)
      {
        distance = this.innerRadius * Math.pow(Math.random(), 1 / 3);
      }
      else
      {
        distance = this.innerRadius + radiusRange * Math.pow(Math.random(), fallOffFactor);
      }

      const angle = Math.PI * 2 * Math.random();
      const z = Math.random() * 2 - 1;
      const radial = Math.sqrt(1 - z * z);
      points.push(vec3.fromValues(
        radial * Math.cos(angle) * distance,
        radial * Math.sin(angle) * distance,
        z * distance
      ));
    }
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
  OnModified(_options = {})
  {
    const flags = this.__state.flags;
    if (flags.delete("innerRadius") && this.innerRadius > this.radius)
    {
      this.radius = this.innerRadius;
    }
    if (flags.delete("radius"))
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
