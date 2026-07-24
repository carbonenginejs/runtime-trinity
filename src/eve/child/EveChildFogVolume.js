// Ported/adapted from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/SpaceObject/Children/EveChildFogVolume.h
//   trinity/trinity/Eve/SpaceObject/Children/EveChildFogVolume.cpp
//   trinity/trinity/Eve/SpaceObject/Children/EveChildFogVolume_Blue.cpp
import { mat4 } from "@carbonenginejs/runtime-utils/mat4";
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { vec4 } from "@carbonenginejs/runtime-utils/vec4";
import { impl, io, schema, type } from "@carbonenginejs/runtime-utils/schema";
import { EveChildTransform } from "./EveChildTransform.js";
import { EveComponentType } from "../EveComponentTypes.js";


@type.define({ className: "EveChildFogVolume", family: "eve/child" })
export class EveChildFogVolume extends EveChildTransform
{
  #fogIntensity = 0;

  @io.persist
  @type.int32
  @schema.enum("Priority")
  priority = 2;

  @io.persist
  @type.list("IEveVolume")
  volumes = [];

  @io.read
  @type.vec3
  boundingSphereCenter = vec3.create();

  @io.read
  @type.float32
  boundingSphereRadius = 0;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.float32
  intensity = 1;

  @io.persist
  @type.float32
  thickness = 1;

  @io.persist
  @type.boolean
  thicknessEnabled = false;

  @io.persist
  @type.float32
  lightDirectionality = 0.5;

  @io.persist
  @type.boolean
  lightDirectionalityEnabled = false;

  @io.persist
  @type.float32
  environmentIntensity = 1;

  @io.persist
  @type.boolean
  environmentIntensityEnabled = false;

  @io.persist
  @type.float32
  environmentDirectionality = 0.75;

  @io.persist
  @type.boolean
  environmentDirectionalityEnabled = false;

  @io.persist
  @type.color
  fogColor = vec4.fromValues(1, 1, 1, 1);

  @io.persist
  @type.boolean
  fogColorEnabled = false;

  @io.persist
  @type.float32
  backgroundVisibility = 0;

  @io.persist
  @type.boolean
  backgroundVisibilityEnabled = false;

  @io.persist
  @type.float32
  godRayNoiseIntensity = 0;

  @io.persist
  @type.boolean
  godRayNoiseIntensityEnabled = false;

  @io.persist
  @type.float32
  godRayNoiseFrequency = 15;

  @io.persist
  @type.boolean
  godRayNoiseFrequencyEnabled = false;

  @io.persist
  @type.float32
  godRayNoiseAnimationSpeed = 0;

  @io.persist
  @type.boolean
  godRayNoiseAnimationSpeedEnabled = false;

  @io.persist
  @type.float32
  fogNoiseIntensity = 0;

  @io.persist
  @type.boolean
  fogNoiseIntensityEnabled = false;

  @io.persist
  @type.float32
  fogNoiseFrequency = 15;

  @io.persist
  @type.boolean
  fogNoiseFrequencyEnabled = false;

  @impl.adapted
  RebuildBoundingSphere()
  {
    vec3.set(this.boundingSphereCenter, 0, 0, 0);
    this.boundingSphereRadius = 0;
    let initialized = false;
    for (const volume of this.volumes)
    {
      const sphere = volume?.GetBoundingSphere?.();
      if (!sphere?.center || !Number.isFinite(sphere.radius) || sphere.radius < 0) continue;
      if (!initialized)
      {
        vec3.copy(this.boundingSphereCenter, sphere.center);
        this.boundingSphereRadius = sphere.radius;
        initialized = true;
        continue;
      }
      this.#UnionSphere(sphere);
    }
    return initialized;
  }

  GetName()
  {
    return this.name;
  }

  SetName(name)
  {
    this.name = String(name ?? "");
  }

  GetBoundingSphere(out = vec4.create())
  {
    vec4.set(out, this.boundingSphereCenter[0], this.boundingSphereCenter[1], this.boundingSphereCenter[2], this.boundingSphereRadius);
    return true;
  }

  UpdateSyncronous(_updateContext, _params)
  {
  }

  @impl.adapted
  UpdateAsyncronous(updateContext, params = {})
  {
    this.UpdateTransform(params.localToWorldTransform ?? mat4.create());
    const initialized = this.RebuildBoundingSphere();
    if (this.volumes.length === 0)
    {
      this.#fogIntensity = this.intensity;
      return;
    }

    this.#fogIntensity = 0;
    const viewPosition = updateContext?.renderContext?.GetViewPosition?.();
    const inverse = mat4.invert(mat4.create(), this.worldTransform);
    if (!viewPosition || !inverse || !initialized) return;
    const localView = vec3.transformMat4(vec3.create(), viewPosition, inverse);
    if (vec3.distance(localView, this.boundingSphereCenter) > this.boundingSphereRadius) return;
    for (const volume of this.volumes)
    {
      this.#fogIntensity = Math.max(this.#fogIntensity, Number(volume?.GetIntensity?.(localView)) || 0);
      if (this.#fogIntensity >= 1) break;
    }
    this.#fogIntensity *= this.intensity;
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
    this.RebuildBoundingSphere();
    return true;
  }

  /** Carbon EveChildFogVolume::RegisterComponents (cpp:69-72): unconditional
   * FroxelFogSettings leaf self-registration. Carbon's UnRegisterComponents
   * (cpp:74-77) only removes this same component, which EveEntity::UnRegister
   * already did via UnRegisterAllComponents (EveEntity.cpp:90), so the JS
   * un-side keeps the base no-op. */
  @impl.implemented
  RegisterComponents()
  {
    const registry = this.GetComponentRegistry();
    if (registry)
    {
      registry.RegisterComponent(EveComponentType.FroxelFogSettings, this);
    }
  }

  @impl.adapted
  GetFroxelFogSettings()
  {
    const attribute = (value, enabled) => ({ value, enabled });
    return {
      priority: this.priority,
      intensity: this.#fogIntensity,
      thickness: attribute(this.thickness, this.thicknessEnabled),
      lightDirectionality: attribute(this.lightDirectionality, this.lightDirectionalityEnabled),
      environmentIntensity: attribute(this.environmentIntensity, this.environmentIntensityEnabled),
      environmentDirectionality: attribute(this.environmentDirectionality, this.environmentDirectionalityEnabled),
      fogColor: attribute(vec4.clone(this.fogColor), this.fogColorEnabled),
      backgroundVisibility: attribute(this.backgroundVisibility, this.backgroundVisibilityEnabled),
      godRayNoiseIntensity: attribute(this.godRayNoiseIntensity, this.godRayNoiseIntensityEnabled),
      godRayNoiseFrequency: attribute(this.godRayNoiseFrequency, this.godRayNoiseFrequencyEnabled),
      godRayNoiseAnimationSpeed: attribute(this.godRayNoiseAnimationSpeed, this.godRayNoiseAnimationSpeedEnabled),
      fogNoiseIntensity: attribute(this.fogNoiseIntensity, this.fogNoiseIntensityEnabled),
      fogNoiseFrequency: attribute(this.fogNoiseFrequency, this.fogNoiseFrequencyEnabled)
    };
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

  #UnionSphere(sphere)
  {
    const delta = vec3.subtract(vec3.create(), sphere.center, this.boundingSphereCenter);
    const distance = vec3.length(delta);
    if (distance + sphere.radius <= this.boundingSphereRadius) return;
    if (distance + this.boundingSphereRadius <= sphere.radius)
    {
      vec3.copy(this.boundingSphereCenter, sphere.center);
      this.boundingSphereRadius = sphere.radius;
      return;
    }
    if (distance === 0)
    {
      this.boundingSphereRadius = Math.max(this.boundingSphereRadius, sphere.radius);
      return;
    }
    const radius = (this.boundingSphereRadius + sphere.radius + distance) * 0.5;
    vec3.scaleAndAdd(this.boundingSphereCenter, this.boundingSphereCenter, delta, (radius - this.boundingSphereRadius) / distance);
    this.boundingSphereRadius = radius;
  }
}
