// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveBoosterSet2.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveBoosterSet2.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveBoosterSet2_Blue.cpp
import { hasModifiedProperty } from "../utilities/hasModifiedProperty.js";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../generated/eve/EveEntity.js";
import { EveBoosterSet2Renderable } from "./EveBoosterSet2Renderable.js";


@type.define({ className: "EveBoosterSet2Item", family: "eve/attachment/boosters" })
export class EveBoosterSet2Item extends CjsModel
{
  @io.persist
  @type.mat4
  transform = mat4.create();

  @io.persist
  @type.vec4
  functionality = vec4.fromValues(0, 1, 1, 1);

  @io.persist
  @type.boolean
  hasTrail = true;

  @io.persist
  @type.uint32
  atlasIndex0 = 0;

  @io.persist
  @type.uint32
  atlasIndex1 = 0;

  @io.persist
  @type.float32
  lightScale = 1;
}


@type.define({ className: "EveBoosterSet2", family: "eve/attachment/boosters" })
export class EveBoosterSet2 extends EveEntity
{

  /** m_flareLodEnabled (bool) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.boolean
  flareLodEnabled = true;

  /** m_staticTrailLength (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  staticTrailLength = 0;

  /** m_trailsStaticOffsets[0] (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  trailsStaticOffsets0 = vec3.create();

  /** m_trailsStaticOffsets[1] (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  trailsStaticOffsets1 = vec3.create();

  /** m_trailsStaticOffsets[2] (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  trailsStaticOffsets2 = vec3.create();

  /** m_trailsStaticOffsets[3] (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  trailsStaticOffsets3 = vec3.create();

  /** m_trailsStaticOffsets[4] (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  trailsStaticOffsets4 = vec3.create();

  /** m_lightOffset (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  lightOffset = 0;

  /** m_lightFlickerAmplitude (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  lightFlickerAmplitude = 0;

  /** m_lightFlickerFrequency (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  lightFlickerFrequency = 0;

  /** m_lightRadius (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  lightRadius = 0;

  /** m_lightColor (Color) [READWRITE, PERSIST] */
  @io.persist
  @type.color
  lightColor = vec4.create();

  /** m_lightWarpRadius (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  lightWarpRadius = 0;

  /** m_lightWarpColor (Color) [READWRITE, PERSIST] */
  @io.persist
  @type.color
  lightWarpColor = vec4.create();

  /** m_display (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  display = true;

  /** m_alwaysOnIntensity (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  alwaysOnIntensity = 1;

  /** m_warpGlowColor (Color) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.color
  warpGlowColor = vec4.create();

  /** m_glowColor (Color) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.color
  glowColor = vec4.create();

  /** m_haloColor (Color) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.color
  haloColor = vec4.create();

  /** m_warpHaloColor (Color) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.color
  warpHaloColor = vec4.create();

  /** m_effectFar (Tr2EffectPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("Tr2Effect")
  effectFar = null;

  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  /** m_boosterRenderables (PEveBoosterSet2RenderableVector) [READ] */
  @io.read
  @type.list("EveBoosterSet2Renderable")
  instances = [];

  /** m_maxVel (float) [READWRITE] */
  @io.readwrite
  @type.float32
  maxVel = 250;

  /** m_glowScale (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  glowScale = 1;

  /** m_symHaloScale (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  symHaloScale = 1;

  /** m_haloScaleX (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  haloScaleX = 1;

  /** m_haloScaleY (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  haloScaleY = 1;

  /** m_trailsSmoothing (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  trailsSmoothing = 10;

  /** m_glows (EveSpriteSetPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("EveSpriteSet")
  glows = null;

  /** m_maxSize (float) [READ] */
  @io.read
  @type.float32
  maxSize = 0;

  /** m_boosterBoundingSphere.xyz (Vector4) [READ] */
  @io.read
  @type.vec3
  boosterBoundingSphereCenter = vec3.create();

  /** m_boosterBoundingSphere.w (float) [READ] */
  @io.read
  @type.float32
  boosterBoundingSphereRadius = 0;

  /** m_warpIntensity (float) [READWRITE] */
  @io.readwrite
  @type.float32
  warpIntensity = 0;

  /** m_physicsUpdate (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  physicsUpdate = true;

  /** m_destinyUpdate (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  destinyUpdate = true;

  /** m_alwaysOn (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  alwaysOn = false;

  /** m_trails (EveTrailsSetPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("EveTrailsSet")
  trails = null;

  @io.notify
  @io.persist
  @type.list("EveBoosterSet2Item")
  items = [];

  #singleBoosters = [];

  #revision = 0;

  @carbon.method
  @impl.adapted
  Initialize()
  {
    EveBoosterSet2.#RebuildItems(this);
    for (const renderable of this.instances)
    {
      renderable?.SetBoosterSet?.(this);
    }
    this.#revision++;
    return true;
  }

  @carbon.method
  @impl.adapted
  OnModified(properties = null)
  {
    if (hasModifiedProperty(properties, "items"))
    {
      EveBoosterSet2.#RebuildItems(this);
    }
    if (hasModifiedProperty(properties, "staticTrailLength"))
    {
      EveBoosterSet2.#UpdateStaticTrailOffsets(this);
    }
    if (this.glows && EveBoosterSet2.#HasModifiedFlareProperty(properties))
    {
      this.glows.Clear?.();
      for (const booster of this.#singleBoosters)
      {
        EveBoosterSet2.#CreateFlares(this, booster);
      }
      this.glows.Rebuild?.();
    }
    this.#revision++;
    return true;
  }

  @carbon.method
  @impl.implemented
  SetCount(count)
  {
    const requested = Math.trunc(Number(count));
    const target = Number.isFinite(requested) ? Math.max(1, requested) : 1;
    if (this.instances.length > target)
    {
      this.instances.length = target;
    }
    while (this.instances.length < target)
    {
      const renderable = new EveBoosterSet2Renderable();
      renderable.SetBoosterSet(this);
      this.instances.push(renderable);
    }
    for (const renderable of this.instances)
    {
      renderable?.SetBoosterSet?.(this);
    }
    this.#revision++;
    return this.instances.length;
  }

  @carbon.method
  @impl.adapted
  Update(
    deltaTime,
    time,
    parentMatrix = mat4.create(),
    parentSpeed = 0,
    parentAcceleration = EveBoosterSet2.#zero,
    parentRotation = EveBoosterSet2.#identityRotation,
    boosterInstance = 0
  )
  {
    if (!this.instances.length)
    {
      this.SetCount(1);
    }
    const index = Number(boosterInstance) >>> 0;
    if (index >= this.instances.length)
    {
      return false;
    }
    this.instances[index]?.Update?.(
      deltaTime,
      time,
      parentMatrix,
      parentSpeed,
      parentAcceleration,
      parentRotation
    );
    return true;
  }

  @carbon.method
  @impl.adapted
  UpdateTrails(deltaTime, time)
  {
    if (!this.trails)
    {
      return false;
    }
    let updated = false;
    for (const renderable of this.instances)
    {
      updated = renderable?.UpdateTrails?.(deltaTime, time) || updated;
    }
    this.trails.Update?.(time);
    return updated;
  }

  @carbon.method
  @impl.adapted
  Clear()
  {
    this.items.length = 0;
    EveBoosterSet2.#ClearRuntimeItems(this);
    this.#revision++;
  }

  @carbon.method
  @impl.adapted
  Add(
    localMatrix,
    functionality,
    hasTrail,
    atlasIndex0,
    atlasIndex1,
    lightScale = 1
  )
  {
    if (!localMatrix || localMatrix.length !== 16)
    {
      throw new TypeError("EveBoosterSet2 transforms must contain 16 values");
    }
    const item = new EveBoosterSet2Item();
    mat4.copy(item.transform, localMatrix);
    vec4.copy(item.functionality, functionality ?? EveBoosterSet2.#defaultFunctionality);
    item.hasTrail = !!hasTrail;
    item.atlasIndex0 = Number(atlasIndex0) >>> 0;
    item.atlasIndex1 = Number(atlasIndex1) >>> 0;
    item.lightScale = Number(lightScale) || 0;
    this.items.push(item);
    EveBoosterSet2.#AddRuntimeItem(this, item);
    this.#revision++;
    return this.items.length - 1;
  }

  static #ClearRuntimeItems(owner)
  {
    owner.#singleBoosters.length = 0;
    owner.glows?.Clear?.();
    owner.trails?.Clear?.();
    vec3.set(owner.boosterBoundingSphereCenter, 0, 0, 0);
    owner.boosterBoundingSphereRadius = 0;
    owner.maxSize = 0;
  }

  static #RebuildItems(owner)
  {
    EveBoosterSet2.#ClearRuntimeItems(owner);
    for (const item of owner.items)
    {
      EveBoosterSet2.#AddRuntimeItem(owner, item);
    }
  }

  static #AddRuntimeItem(owner, item)
  {
    const transform = mat4.clone(item.transform);
    const scale = Math.max(
      Math.hypot(transform[0], transform[1], transform[2]),
      Math.hypot(transform[4], transform[5], transform[6])
    );
    const lightPosition = vec3.transformMat4(
      vec3.create(),
      [0, 0, -owner.lightOffset],
      transform
    );
    const booster = {
      transform,
      functionality: vec4.clone(item.functionality),
      lightPosition,
      lightRadius: scale * item.lightScale,
      lightPhase: 128 * Math.random(),
      atlasIndex0: item.atlasIndex0,
      atlasIndex1: item.atlasIndex1,
      hasTrail: item.hasTrail
    };
    owner.#singleBoosters.push(booster);

    if (owner.glows)
    {
      EveBoosterSet2.#CreateFlares(owner, booster);
    }
    if (owner.trails && item.hasTrail)
    {
      const trailTransform = mat4.clone(transform);
      trailTransform[12] -= trailTransform[8] * 0.5;
      trailTransform[13] -= trailTransform[9] * 0.5;
      trailTransform[14] -= trailTransform[10] * 0.5;
      owner.trails.Add?.(trailTransform, scale);
    }

    EveBoosterSet2.#UpdateBoundingSphere(owner, transform.subarray(12, 15));
    owner.maxSize = Math.max(owner.maxSize, scale);
  }

  @carbon.method
  @impl.implemented
  SetData(
    glowScale,
    glowColor,
    warpGlowColor,
    symHaloScale,
    haloScaleX,
    haloScaleY,
    haloColor,
    warpHaloColor,
    alwaysOn
  )
  {
    this.glowScale = Number(glowScale);
    vec4.copy(this.glowColor, glowColor);
    vec4.copy(this.warpGlowColor, warpGlowColor);
    this.symHaloScale = Number(symHaloScale);
    this.haloScaleX = Number(haloScaleX);
    this.haloScaleY = Number(haloScaleY);
    vec4.copy(this.haloColor, haloColor);
    vec4.copy(this.warpHaloColor, warpHaloColor);
    this.alwaysOn = !!alwaysOn;
  }

  @carbon.method
  @impl.implemented
  SetLightData(offset, flickerAmplitude, flickerFrequency, radius, color, warpRadius, warpColor)
  {
    this.lightOffset = Number(offset);
    this.lightFlickerAmplitude = Number(flickerAmplitude);
    this.lightFlickerFrequency = Number(flickerFrequency);
    this.lightRadius = Number(radius);
    vec4.copy(this.lightColor, color);
    this.lightWarpRadius = Number(warpRadius);
    vec4.copy(this.lightWarpColor, warpColor);
  }

  @carbon.method
  @impl.implemented
  SetEffect(effect, effectFar)
  {
    this.effect = effect ?? null;
    this.effectFar = effectFar ?? null;
  }

  @carbon.method
  @impl.implemented
  SetGlow(glow)
  {
    this.glows = glow ?? null;
  }

  @carbon.method
  @impl.implemented
  SetTrail(trail)
  {
    this.trails = trail ?? null;
  }

  @carbon.method
  @impl.adapted
  GetBoosterIntensity(index = null)
  {
    if (index !== null && index !== undefined)
    {
      return this.instances[Number(index) >>> 0]?.GetIntensity?.() ?? 0;
    }
    if (!this.instances.length)
    {
      return 0;
    }
    let intensity = 0;
    for (const renderable of this.instances)
    {
      intensity += renderable?.GetIntensity?.() ?? 0;
    }
    return intensity / this.instances.length;
  }

  @carbon.method
  @impl.adapted
  GetBoundingSphere()
  {
    const result = vec4.create();
    for (const renderable of this.instances)
    {
      EveBoosterSet2.#MergeSphere(result, renderable?.GetBoundingSphere?.());
    }
    return result;
  }

  @carbon.method
  @impl.adapted
  GetBoosterData()
  {
    return this.#singleBoosters.map(booster => ({
      transform: mat4.clone(booster.transform),
      functionality: vec4.clone(booster.functionality),
      lightPosition: vec3.clone(booster.lightPosition),
      lightRadius: booster.lightRadius,
      lightPhase: booster.lightPhase,
      atlasIndex0: booster.atlasIndex0,
      atlasIndex1: booster.atlasIndex1,
      hasTrail: booster.hasTrail
    }));
  }

  @carbon.method
  @impl.implemented
  GetRevision()
  {
    return this.#revision;
  }

  static #CreateFlares(owner, booster)
  {
    const transform = booster.transform;
    const position = vec3.fromValues(transform[12], transform[13], transform[14]);
    const direction = vec3.fromValues(transform[8], transform[9], transform[10]);
    const scale = Math.max(
      Math.hypot(transform[0], transform[1], transform[2]),
      Math.hypot(transform[4], transform[5], transform[6])
    );
    if (vec3.squaredLength(direction))
    {
      vec3.normalize(direction, direction);
    }
    if (scale < 3)
    {
      vec3.scale(direction, direction, scale / 3);
    }
    const seed = Math.random() * 0.7;
    EveBoosterSet2.#AddFlare(owner, position, direction, 2.5, seed, seed,
      scale * owner.glowScale, scale * owner.glowScale, owner.glowColor, owner.warpGlowColor);
    EveBoosterSet2.#AddFlare(owner, position, direction, 3, seed, 1 + seed,
      scale * owner.symHaloScale, scale * owner.symHaloScale, owner.haloColor, owner.warpHaloColor);
    EveBoosterSet2.#AddFlare(owner, position, direction, 3.01, seed, 1 + seed,
      scale * owner.haloScaleX, scale * owner.haloScaleY, owner.haloColor, owner.warpHaloColor);
  }

  static #HasModifiedFlareProperty(properties)
  {
    return EveBoosterSet2.#flareProperties.some(property =>
      hasModifiedProperty(properties, property));
  }

  static #AddFlare(owner, position, direction, distance, blinkRate, blinkPhase, minScale, maxScale, color, warpColor)
  {
    const spritePosition = vec3.scaleAndAdd(vec3.create(), position, direction, -distance);
    owner.glows.Add?.(
      spritePosition,
      blinkRate,
      blinkPhase,
      minScale,
      maxScale,
      0,
      color,
      warpColor
    );
  }

  static #UpdateBoundingSphere(owner, position)
  {
    const delta = vec3.subtract(vec3.create(), position, owner.boosterBoundingSphereCenter);
    const distance = vec3.length(delta);
    const radius = owner.boosterBoundingSphereRadius;
    if (distance * distance <= radius * radius + 1e-4 || !distance)
    {
      return;
    }
    vec3.scaleAndAdd(
      owner.boosterBoundingSphereCenter,
      owner.boosterBoundingSphereCenter,
      delta,
      0.5 * (1 - radius / distance)
    );
    owner.boosterBoundingSphereRadius = 0.5 * (radius + distance);
  }

  static #UpdateStaticTrailOffsets(owner)
  {
    const step = owner.staticTrailLength / 4;
    const offsets = [
      owner.trailsStaticOffsets0,
      owner.trailsStaticOffsets1,
      owner.trailsStaticOffsets2,
      owner.trailsStaticOffsets3,
      owner.trailsStaticOffsets4
    ];
    for (let index = 0; index < offsets.length; index++)
    {
      vec3.set(offsets[index], 0, 0, -step * index);
    }
  }

  static #MergeSphere(target, source)
  {
    if (!source || source.length !== 4)
    {
      return target;
    }
    const targetRadius = target[3];
    const sourceRadius = source[3];
    const delta = vec3.fromValues(source[0] - target[0], source[1] - target[1], source[2] - target[2]);
    const distance = vec3.length(delta);
    if (targetRadius >= distance + sourceRadius)
    {
      return target;
    }
    if (sourceRadius >= distance + targetRadius)
    {
      vec4.copy(target, source);
      return target;
    }
    if (!distance)
    {
      target[3] = Math.max(targetRadius, sourceRadius);
      return target;
    }
    const radius = 0.5 * (distance + targetRadius + sourceRadius);
    const factor = (radius - targetRadius) / distance;
    target[0] += delta[0] * factor;
    target[1] += delta[1] * factor;
    target[2] += delta[2] * factor;
    target[3] = radius;
    return target;
  }

  static #zero = Object.freeze([0, 0, 0]);

  static #identityRotation = Object.freeze([0, 0, 0, 1]);

  static #defaultFunctionality = Object.freeze([0, 1, 1, 1]);

  static #flareProperties = Object.freeze([
    "glowScale",
    "haloScaleX",
    "haloScaleY",
    "symHaloScale",
    "glowColor",
    "warpGlowColor",
    "haloColor",
    "warpHaloColor"
  ]);

  static Shape = Object.freeze({
    STAR: 0,
    BOX: 1,
    SHAPE_COUNT: 2
  });

}
