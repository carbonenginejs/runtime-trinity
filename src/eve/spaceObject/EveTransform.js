// Source: E:\carbonengine\trinity\trinity\Eve\EveTransform.h
// Source: E:\carbonengine\trinity\trinity\Eve\EveTransform.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { sph3 } from "@carbonenginejs/core-math/sph3";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { Tr2Transform } from "../../generated/trinityCore/Tr2Transform.js";
import { EveBasicPerObjectData } from "../EveBasicPerObjectData.js";
import { EveLODHelper, Tr2Lod } from "../EveLODHelper.js";


@type.define({ className: "EveTransform", family: "eve/spaceObject" })
export class EveTransform extends Tr2Transform
{

  /** m_meshLod (Tr2MeshBasePtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("Tr2MeshBase")
  meshLod = null;

  /** m_children (PIEveTransformVector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveTransform")
  children = [];

  /** m_overrideBoundsMin (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  overrideBoundsMin = vec3.create();

  /** m_overrideBoundsMax (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  overrideBoundsMax = vec3.create();

  /** m_particleEmitters (PITr2GenericEmitterVector) [READ, PERSIST] */
  @io.persist
  @type.list("ITr2GenericEmitter")
  particleEmitters = [];

  /** m_particleSystems (PTr2ParticleSystemVector) [READ, PERSIST] */
  @io.persist
  @type.list("Tr2ParticleSystem")
  particleSystems = [];

  /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
  @io.read
  @type.int32
  @schema.enum("Tr2Lod")
  lodLevel = Tr2Lod.TR2_LOD_LOW;

  /** m_hideOnLowQuality (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  hideOnLowQuality = false;

  /** m_visibilityThreshold (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  visibilityThreshold = 2;

  /** m_observers (PTriObserverLocalVector) [READ, PERSIST] */
  @io.persist
  @type.list("TriObserverLocal")
  observers = [];

  /** m_useLodLevel (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  useLodLevel = true;

  #isVisible = true;
  #lastCurveUpdateDelta = EveLODHelper.lowUpdateRate;
  #lastWorldTransform = mat4.create();

  @carbon.method
  @impl.implemented
  Initialize()
  {
    if (!this.mesh)
    {
      this.mesh = this.meshLod;
      this.meshLod = null;
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  @impl.reason("Renderer-owned modifier state is supplied through the update context; standard SRT and parent composition stay in Trinity.")
  UpdateViewDependentData(context, parentTransform = EveTransform.#identity)
  {
    mat4.copy(this.#lastWorldTransform, this.worldTransform);
    mat4.fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);
    mat4.multiply(this.worldTransform, parentTransform, this.localTransform);
    for (const system of this.particleSystems) system?.UpdateViewDependentData?.(context?.GetFrustum?.() ?? context?.frustum ?? context, this.worldTransform);
    for (const observer of this.observers) observer?.Update?.(this.worldTransform);
    return this.worldTransform;
  }

  @carbon.method
  @impl.implemented
  Update(context)
  {
    this.UpdateSyncronous(context);
    this.UpdateAsyncronous(context);
  }

  @carbon.method
  @impl.implemented
  UpdateSyncronous(_context)
  {
  }

  @carbon.method
  @impl.adapted
  @impl.reason("Particle updates are forwarded through backend-neutral emitter and system contracts; device particle managers remain engine-owned.")
  UpdateAsyncronous(context)
  {
    if (!this.update) return false;
    const time = Number(context?.GetTime?.() ?? context?.currentTime ?? context?.time ?? 0);
    const deltaTime = Number(context?.GetDeltaT?.() ?? context?.deltaTime ?? context?.deltaT ?? 0);
    this.#lastCurveUpdateDelta += deltaTime;
    if (!this.useLodLevel || EveLODHelper.ShouldUpdate(this.lodLevel, this.#lastCurveUpdateDelta))
    {
      this.#lastCurveUpdateDelta = 0;
      for (const curveSet of this.curveSets) curveSet?.Update?.(time);
    }
    for (const child of this.children) child?.Update?.(context);
    for (const system of this.particleSystems)
    {
      system?.UpdateTransform?.(this.worldTransform);
      system?.Update?.(context);
    }
    const originShift = context?.GetOriginShift?.() ?? context?.originShift ?? EveTransform.#zero;
    for (const emitter of this.particleEmitters)
    {
      emitter?.Update?.({ time, transform: this.worldTransform, originShift, context });
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  @impl.reason("Browser frustum and quality state are read from the explicit update context instead of renderer globals.")
  UpdateVisibility(context, parentTransform = EveTransform.#identity)
  {
    this.lodLevel = Tr2Lod.TR2_LOD_LOW;
    this.#isVisible = false;
    if (!this.display || (this.hideOnLowQuality && (context?.lowQuality ?? context?.device?.lowQuality))) return false;

    this.UpdateViewDependentData(context, parentTransform);
    const frustum = context?.GetFrustum?.() ?? context?.frustum;
    if (this.mesh)
    {
      const valid = this.GetBoundingSphere(EveTransform.#sphere);
      const visible = !valid || this.visibilityThreshold < 0 || frustum?.IsSphereVisible?.(EveTransform.#sphere) !== false;
      if (visible)
      {
        const size = Number(frustum?.GetPixelSizeAccross?.(EveTransform.#sphere) ?? Infinity);
        this.mesh.UseWithScreenSize?.(size, EveTransform.#sphere[3]);
        const medium = Number(context?.GetMediumDetailThreshold?.() ?? context?.mediumDetailThreshold ?? 0);
        const low = Number(context?.GetLowDetailThreshold?.() ?? context?.lowDetailThreshold ?? 0);
        if (size >= medium) this.lodLevel = Tr2Lod.TR2_LOD_HIGH;
        else if (size >= low) this.lodLevel = Tr2Lod.TR2_LOD_MEDIUM;
        if (size > this.visibilityThreshold) this.#isVisible = true;
      }
    }
    else
    {
      this.#isVisible = true;
    }
    if (this.particleSystems.length) this.lodLevel = Tr2Lod.TR2_LOD_HIGH;
    for (const child of this.children)
    {
      child?.UpdateVisibility?.(context, this.worldTransform);
      this.lodLevel = EveLODHelper.MergeLOD(this.lodLevel, child?.GetLODLevel?.() ?? Tr2Lod.TR2_LOD_UNSPECIFIED);
    }
    return this.#isVisible;
  }

  @carbon.method
  @impl.implemented
  GetRenderables(out = [])
  {
    if (!this.display) return out;
    for (const system of this.particleSystems) system?.SortParticles?.();
    if (this.#isVisible && this.mesh) out.push(this);
    for (const child of this.children) child?.GetRenderables?.(out);
    this.spriteSet?.GetRenderables?.(out);
    return out;
  }

  @carbon.method
  @impl.adapted
  @impl.reason("Constant-buffer allocation is engine-owned; Trinity publishes the same backend-neutral matrix record.")
  GetPerObjectData(out = new EveBasicPerObjectData())
  {
    mat4.transpose(out.world, this.worldTransform);
    mat4.transpose(out.worldLast, this.#lastWorldTransform);
    if (!mat4.invert(out.worldInverse, out.world)) mat4.identity(out.worldInverse);
    return out;
  }

  @carbon.method
  @impl.implemented
  GetBoundingSphere(out = vec4.create(), query = 0)
  {
    let valid = false;
    if (!vec3.equals(this.overrideBoundsMin, this.overrideBoundsMax))
    {
      sph3.fromBounds(EveTransform.#localSphere, this.overrideBoundsMin, this.overrideBoundsMax);
      sph3.transformMat4(out, EveTransform.#localSphere, this.worldTransform);
      valid = true;
    }
    else if (this.mesh?.GetBoundingBox?.(EveTransform.#boundsMin, EveTransform.#boundsMax))
    {
      sph3.fromBounds(EveTransform.#localSphere, EveTransform.#boundsMin, EveTransform.#boundsMax);
      sph3.transformMat4(out, EveTransform.#localSphere, this.worldTransform);
      valid = true;
    }
    if (query)
    {
      for (const child of this.children)
      {
        if (child?.GetBoundingSphere?.(EveTransform.#childSphere, query))
        {
          if (valid) sph3.union(out, out, EveTransform.#childSphere);
          else vec4.copy(out, EveTransform.#childSphere);
          valid = true;
        }
      }
    }
    return valid;
  }

  @carbon.method
  @impl.implemented
  GetWorldPosition(out)
  {
    return out ? vec3.set(out, this.worldTransform[12], this.worldTransform[13], this.worldTransform[14]) : this.worldTransform.subarray(12, 15);
  }

  @carbon.method
  @impl.implemented
  GetWorldRotation(out)
  {
    return out ? quat.copy(out, this.rotation) : this.rotation;
  }

  @carbon.method
  @impl.implemented
  GetLODLevel()
  {
    return this.lodLevel;
  }

  @carbon.method
  @impl.implemented
  SetDisplay(value)
  {
    this.display = !!value;
  }

  @carbon.method
  @impl.implemented
  PlayCurveSets()
  {
    for (const curveSet of this.curveSets) curveSet?.Play?.();
  }

  @carbon.method
  @impl.implemented
  PlayCurveSet(name, rangeName = "")
  {
    for (const curveSet of this.curveSets)
    {
      if ((curveSet?.GetName?.() ?? curveSet?.name) !== name) continue;
      if (rangeName) curveSet.PlayFromRange?.(rangeName) ?? curveSet.Play?.();
      else curveSet.Play?.();
    }
  }

  @carbon.method
  @impl.implemented
  StopCurveSet(name)
  {
    for (const curveSet of this.curveSets) if ((curveSet?.GetName?.() ?? curveSet?.name) === name) curveSet.Stop?.();
  }

  @carbon.method
  @impl.implemented
  GetCurveSetDuration(name)
  {
    let duration = 0;
    for (const curveSet of this.curveSets) if ((curveSet?.GetName?.() ?? curveSet?.name) === name) duration = Math.max(duration, Number(curveSet.GetDuration?.() ?? 0));
    return duration;
  }

  @carbon.method
  @impl.implemented
  GetRangeDuration(name, rangeName)
  {
    let duration = 0;
    for (const curveSet of this.curveSets) if ((curveSet?.GetName?.() ?? curveSet?.name) === name) duration = Math.max(duration, Number(curveSet.GetRangeDuration?.(rangeName) ?? 0));
    return duration;
  }

  static Tr2Lod = Tr2Lod;

  static #identity = mat4.create();
  static #zero = vec3.create();
  static #sphere = vec4.create();
  static #localSphere = vec4.create();
  static #childSphere = vec4.create();
  static #boundsMin = vec3.create();
  static #boundsMax = vec3.create();
}
