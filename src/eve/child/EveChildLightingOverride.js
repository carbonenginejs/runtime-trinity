// Ported/adapted from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/SpaceObject/Children/EveChildLightingOverride.h
//   trinity/trinity/Eve/SpaceObject/Children/EveChildLightingOverride.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform } from "./EveChildTransform.js";
import { EveComponentType } from "../EveComponentTypes.js";


@type.define({ className: "EveChildLightingOverride", family: "eve/child" })
export class EveChildLightingOverride extends EveChildTransform
{
  #overrideIntensity = 0;
  #boundingSphere = { center: vec3.create(), radius: 0, initialized: false };

  @io.persist
  @type.int32
  @schema.enum("Priority")
  priority = 2;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.float32
  backgroundIntensity = 1;

  @io.persist
  @type.float32
  intensity = 1;

  @io.persist
  @type.float32
  reflectionIntensity = 1;

  @io.persist
  @type.float32
  sunIntensity = 1;

  @io.persist
  @type.color
  sunColor = vec4.fromValues(1, 1, 1, 1);

  @io.persist
  @type.list("IEveVolume")
  volumes = [];

  /** Carbon EveChildLightingOverride::RegisterComponents (cpp:47-50):
   * unconditional EveLightingOverride leaf self-registration. Carbon's
   * UnRegisterComponents (cpp:52-55) only removes this same component, which
   * EveEntity::UnRegister already did via UnRegisterAllComponents
   * (EveEntity.cpp:90), so the JS un-side keeps the base no-op. */
  @impl.implemented
  RegisterComponents()
  {
    const registry = this.GetComponentRegistry();
    if (registry)
    {
      registry.RegisterComponent(EveComponentType.EveLightingOverride, this);
    }
  }

  @impl.implemented
  GetOverrides()
  {
    return {
      priority: this.priority,
      intensity: this.#overrideIntensity,
      value: {
        sunColor: vec4.clone(this.sunColor),
        sunIntensity: this.sunIntensity,
        backgroundIntensity: this.backgroundIntensity,
        reflectionIntensity: this.reflectionIntensity
      }
    };
  }

  GetName()
  {
    return this.name;
  }

  SetName(name)
  {
    this.name = String(name ?? "");
  }

  @impl.adapted
  GetBoundingSphere(out = vec4.create())
  {
    vec4.set(out, this.#boundingSphere.center[0], this.#boundingSphere.center[1], this.#boundingSphere.center[2], this.#boundingSphere.radius);
    return true;
  }

  UpdateSyncronous(_updateContext, _params)
  {
  }

  @impl.adapted
  UpdateAsyncronous(updateContext, params = {})
  {
    this.UpdateTransform(params.localToWorldTransform ?? mat4.create());
    this.#RebuildBoundingSphere();

    if (this.volumes.length === 0)
    {
      this.#overrideIntensity = this.intensity;
      return;
    }

    this.#overrideIntensity = 0;
    const viewPosition = updateContext?.renderContext?.GetViewPosition?.();
    const inverse = mat4.invert(mat4.create(), this.worldTransform);
    if (!viewPosition || !inverse || !this.#boundingSphere.initialized) return;
    const localView = vec3.transformMat4(vec3.create(), viewPosition, inverse);
    if (vec3.distance(localView, this.#boundingSphere.center) > this.#boundingSphere.radius) return;

    for (const volume of this.volumes)
    {
      this.#overrideIntensity = Math.max(this.#overrideIntensity, Number(volume?.GetIntensity?.(localView)) || 0);
      if (this.#overrideIntensity >= 1) break;
    }
    this.#overrideIntensity *= this.intensity;
  }

  GetLocalToWorldTransform(out = mat4.create())
  {
    return mat4.copy(out, this.worldTransform);
  }

  Setup(scale, rotation, translation, lowestLodVisible)
  {
    return super.Setup(scale, rotation, translation, lowestLodVisible);
  }

  IsAlwaysOn()
  {
    return true;
  }

  Initialize()
  {
    this.#RebuildBoundingSphere();
    return true;
  }

  UpdateVisibility(_updateContext, _parentTransform, _parentLod)
  {
  }

  GetRenderables(_renderables)
  {
  }

  ChangeLOD(_lod)
  {
  }

  static Priority = Object.freeze({
    SCENE_DEFAULT_PRIORITY: 0,
    LOW_PRIORITY: 1,
    MEDIUM_PRIORITY: 2,
    HIGH_PRIORITY: 3,
    UI_PRIORITY: 4,
    PRIORITY_COUNT: 5
  });

  #RebuildBoundingSphere()
  {
    const target = this.#boundingSphere;
    vec3.set(target.center, 0, 0, 0);
    target.radius = 0;
    target.initialized = false;

    for (const volume of this.volumes)
    {
      const sphere = volume?.GetBoundingSphere?.();
      if (!sphere?.center || !Number.isFinite(sphere.radius) || sphere.radius < 0) continue;
      if (!target.initialized)
      {
        vec3.copy(target.center, sphere.center);
        target.radius = sphere.radius;
        target.initialized = true;
        continue;
      }
      EveChildLightingOverride.#UnionSphere(target, sphere);
    }
  }

  static #UnionSphere(target, sphere)
  {
    const delta = vec3.subtract(vec3.create(), sphere.center, target.center);
    const distance = vec3.length(delta);
    if (distance + sphere.radius <= target.radius) return;
    if (distance + target.radius <= sphere.radius)
    {
      vec3.copy(target.center, sphere.center);
      target.radius = sphere.radius;
      return;
    }
    if (distance === 0)
    {
      target.radius = Math.max(target.radius, sphere.radius);
      return;
    }
    const radius = (target.radius + sphere.radius + distance) * 0.5;
    vec3.scaleAndAdd(target.center, target.center, delta, (radius - target.radius) / distance);
    target.radius = radius;
  }
}
