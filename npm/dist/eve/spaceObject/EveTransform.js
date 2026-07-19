import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { sph3 } from '@carbonenginejs/core-math/sph3';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { Tr2Transform as _Tr2Transform } from '../../generated/trinityCore/Tr2Transform.js';
import { EveBasicPerObjectData as _EveBasicPerObjectDat } from '../EveBasicPerObjectData.js';
import { Tr2Lod, EveLODHelper } from '../EveLODHelper.js';

let _initProto, _initClass, _init_meshLod, _init_extra_meshLod, _init_children, _init_extra_children, _init_overrideBoundsMin, _init_extra_overrideBoundsMin, _init_overrideBoundsMax, _init_extra_overrideBoundsMax, _init_particleEmitters, _init_extra_particleEmitters, _init_particleSystems, _init_extra_particleSystems, _init_lodLevel, _init_extra_lodLevel, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_observers, _init_extra_observers, _init_useLodLevel, _init_extra_useLodLevel;
let _EveTransform;
new class extends _identity {
  static [class EveTransform extends _Tr2Transform {
    static {
      ({
        e: [_init_meshLod, _init_extra_meshLod, _init_children, _init_extra_children, _init_overrideBoundsMin, _init_extra_overrideBoundsMin, _init_overrideBoundsMax, _init_extra_overrideBoundsMax, _init_particleEmitters, _init_extra_particleEmitters, _init_particleSystems, _init_extra_particleSystems, _init_lodLevel, _init_extra_lodLevel, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_observers, _init_extra_observers, _init_useLodLevel, _init_extra_useLodLevel, _initProto],
        c: [_EveTransform, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveTransform",
        family: "eve/spaceObject"
      })], [[[io, io.persist, void 0, type.model("Tr2MeshBase")], 16, "meshLod"], [[io, io.persist, void 0, type.list("IEveTransform")], 16, "children"], [[io, io.persist, type, type.vec3], 16, "overrideBoundsMin"], [[io, io.persist, type, type.vec3], 16, "overrideBoundsMax"], [[io, io.persist, void 0, type.list("ITr2GenericEmitter")], 16, "particleEmitters"], [[io, io.persist, void 0, type.list("Tr2ParticleSystem")], 16, "particleSystems"], [[io, io.read, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lodLevel"], [[io, io.persist, type, type.boolean], 16, "hideOnLowQuality"], [[io, io.persist, type, type.float32], 16, "visibilityThreshold"], [[io, io.persist, void 0, type.list("TriObserverLocal")], 16, "observers"], [[io, io.persist, type, type.boolean], 16, "useLodLevel"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Renderer-owned modifier state is supplied through the update context; standard SRT and parent composition stay in Trinity.")], 18, "UpdateViewDependentData"], [[carbon, carbon.method, impl, impl.implemented], 18, "Update"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateSyncronous"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Particle updates are forwarded through backend-neutral emitter and system contracts; device particle managers remain engine-owned.")], 18, "UpdateAsyncronous"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Browser frustum and quality state are read from the explicit update context instead of renderer globals.")], 18, "UpdateVisibility"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRenderables"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Constant-buffer allocation is engine-owned; Trinity publishes the same backend-neutral matrix record.")], 18, "GetPerObjectData"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWorldPosition"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWorldRotation"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLODLevel"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetDisplay"], [[carbon, carbon.method, impl, impl.implemented], 18, "PlayCurveSets"], [[carbon, carbon.method, impl, impl.implemented], 18, "PlayCurveSet"], [[carbon, carbon.method, impl, impl.implemented], 18, "StopCurveSet"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCurveSetDuration"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRangeDuration"]], 0, void 0, _Tr2Transform));
    }
    /** m_meshLod (Tr2MeshBasePtr) [READWRITE, PERSIST] */
    meshLod = (_initProto(this), _init_meshLod(this, null));

    /** m_children (PIEveTransformVector) [READ, PERSIST] */
    children = (_init_extra_meshLod(this), _init_children(this, []));

    /** m_overrideBoundsMin (Vector3) [READWRITE, PERSIST] */
    overrideBoundsMin = (_init_extra_children(this), _init_overrideBoundsMin(this, vec3.create()));

    /** m_overrideBoundsMax (Vector3) [READWRITE, PERSIST] */
    overrideBoundsMax = (_init_extra_overrideBoundsMin(this), _init_overrideBoundsMax(this, vec3.create()));

    /** m_particleEmitters (PITr2GenericEmitterVector) [READ, PERSIST] */
    particleEmitters = (_init_extra_overrideBoundsMax(this), _init_particleEmitters(this, []));

    /** m_particleSystems (PTr2ParticleSystemVector) [READ, PERSIST] */
    particleSystems = (_init_extra_particleEmitters(this), _init_particleSystems(this, []));

    /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
    lodLevel = (_init_extra_particleSystems(this), _init_lodLevel(this, Tr2Lod.TR2_LOD_LOW));

    /** m_hideOnLowQuality (bool) [READWRITE, PERSIST] */
    hideOnLowQuality = (_init_extra_lodLevel(this), _init_hideOnLowQuality(this, false));

    /** m_visibilityThreshold (float) [READWRITE, PERSIST] */
    visibilityThreshold = (_init_extra_hideOnLowQuality(this), _init_visibilityThreshold(this, 2));

    /** m_observers (PTriObserverLocalVector) [READ, PERSIST] */
    observers = (_init_extra_visibilityThreshold(this), _init_observers(this, []));

    /** m_useLodLevel (bool) [READWRITE, PERSIST] */
    useLodLevel = (_init_extra_observers(this), _init_useLodLevel(this, true));
    #isVisible = (_init_extra_useLodLevel(this), true);
    #lastCurveUpdateDelta = EveLODHelper.lowUpdateRate;
    #lastWorldTransform = mat4.create();
    Initialize() {
      if (!this.mesh) {
        this.mesh = this.meshLod;
        this.meshLod = null;
      }
      return true;
    }
    UpdateViewDependentData(context, parentTransform = _EveTransform.#identity) {
      mat4.copy(this.#lastWorldTransform, this.worldTransform);
      mat4.fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);
      mat4.multiply(this.worldTransform, parentTransform, this.localTransform);
      for (const system of this.particleSystems) system?.UpdateViewDependentData?.(context?.GetFrustum?.() ?? context?.frustum ?? context, this.worldTransform);
      for (const observer of this.observers) observer?.Update?.(this.worldTransform);
      return this.worldTransform;
    }
    Update(context) {
      this.UpdateSyncronous(context);
      this.UpdateAsyncronous(context);
    }
    UpdateSyncronous(_context) {}
    UpdateAsyncronous(context) {
      if (!this.update) return false;
      const time = Number(context?.GetTime?.() ?? context?.currentTime ?? context?.time ?? 0);
      const deltaTime = Number(context?.GetDeltaT?.() ?? context?.deltaTime ?? context?.deltaT ?? 0);
      this.#lastCurveUpdateDelta += deltaTime;
      if (!this.useLodLevel || EveLODHelper.ShouldUpdate(this.lodLevel, this.#lastCurveUpdateDelta)) {
        this.#lastCurveUpdateDelta = 0;
        for (const curveSet of this.curveSets) curveSet?.Update?.(time);
      }
      for (const child of this.children) child?.Update?.(context);
      for (const system of this.particleSystems) {
        system?.UpdateTransform?.(this.worldTransform);
        system?.Update?.(context);
      }
      const originShift = context?.GetOriginShift?.() ?? context?.originShift ?? _EveTransform.#zero;
      for (const emitter of this.particleEmitters) {
        emitter?.Update?.({
          time,
          transform: this.worldTransform,
          originShift,
          context
        });
      }
      return true;
    }
    UpdateVisibility(context, parentTransform = _EveTransform.#identity) {
      this.lodLevel = Tr2Lod.TR2_LOD_LOW;
      this.#isVisible = false;
      if (!this.display || this.hideOnLowQuality && (context?.lowQuality ?? context?.device?.lowQuality)) return false;
      this.UpdateViewDependentData(context, parentTransform);
      const frustum = context?.GetFrustum?.() ?? context?.frustum;
      if (this.mesh) {
        const valid = this.GetBoundingSphere(_EveTransform.#sphere);
        const visible = !valid || this.visibilityThreshold < 0 || frustum?.IsSphereVisible?.(_EveTransform.#sphere) !== false;
        if (visible) {
          const size = Number(frustum?.GetPixelSizeAccross?.(_EveTransform.#sphere) ?? Infinity);
          this.mesh.UseWithScreenSize?.(size, _EveTransform.#sphere[3]);
          const medium = Number(context?.GetMediumDetailThreshold?.() ?? context?.mediumDetailThreshold ?? 0);
          const low = Number(context?.GetLowDetailThreshold?.() ?? context?.lowDetailThreshold ?? 0);
          if (size >= medium) this.lodLevel = Tr2Lod.TR2_LOD_HIGH;else if (size >= low) this.lodLevel = Tr2Lod.TR2_LOD_MEDIUM;
          if (size > this.visibilityThreshold) this.#isVisible = true;
        }
      } else {
        this.#isVisible = true;
      }
      if (this.particleSystems.length) this.lodLevel = Tr2Lod.TR2_LOD_HIGH;
      for (const child of this.children) {
        child?.UpdateVisibility?.(context, this.worldTransform);
        this.lodLevel = EveLODHelper.MergeLOD(this.lodLevel, child?.GetLODLevel?.() ?? Tr2Lod.TR2_LOD_UNSPECIFIED);
      }
      return this.#isVisible;
    }
    GetRenderables(out = []) {
      if (!this.display) return out;
      for (const system of this.particleSystems) system?.SortParticles?.();
      if (this.#isVisible && this.mesh) out.push(this);
      for (const child of this.children) child?.GetRenderables?.(out);
      this.spriteSet?.GetRenderables?.(out);
      return out;
    }
    GetPerObjectData(out = new _EveBasicPerObjectDat()) {
      mat4.transpose(out.world, this.worldTransform);
      mat4.transpose(out.worldLast, this.#lastWorldTransform);
      if (!mat4.invert(out.worldInverse, out.world)) mat4.identity(out.worldInverse);
      return out;
    }
    GetBoundingSphere(out = vec4.create(), query = 0) {
      let valid = false;
      if (!vec3.equals(this.overrideBoundsMin, this.overrideBoundsMax)) {
        sph3.fromBounds(_EveTransform.#localSphere, this.overrideBoundsMin, this.overrideBoundsMax);
        sph3.transformMat4(out, _EveTransform.#localSphere, this.worldTransform);
        valid = true;
      } else if (this.mesh?.GetBoundingBox?.(_EveTransform.#boundsMin, _EveTransform.#boundsMax)) {
        sph3.fromBounds(_EveTransform.#localSphere, _EveTransform.#boundsMin, _EveTransform.#boundsMax);
        sph3.transformMat4(out, _EveTransform.#localSphere, this.worldTransform);
        valid = true;
      }
      if (query) {
        for (const child of this.children) {
          if (child?.GetBoundingSphere?.(_EveTransform.#childSphere, query)) {
            if (valid) sph3.union(out, out, _EveTransform.#childSphere);else vec4.copy(out, _EveTransform.#childSphere);
            valid = true;
          }
        }
      }
      return valid;
    }
    GetWorldPosition(out) {
      return out ? vec3.set(out, this.worldTransform[12], this.worldTransform[13], this.worldTransform[14]) : this.worldTransform.subarray(12, 15);
    }
    GetWorldRotation(out) {
      return out ? quat.copy(out, this.rotation) : this.rotation;
    }
    GetLODLevel() {
      return this.lodLevel;
    }
    SetDisplay(value) {
      this.display = !!value;
    }
    PlayCurveSets() {
      for (const curveSet of this.curveSets) curveSet?.Play?.();
    }
    PlayCurveSet(name, rangeName = "") {
      for (const curveSet of this.curveSets) {
        if ((curveSet?.GetName?.() ?? curveSet?.name) !== name) continue;
        if (rangeName) curveSet.PlayFromRange?.(rangeName) ?? curveSet.Play?.();else curveSet.Play?.();
      }
    }
    StopCurveSet(name) {
      for (const curveSet of this.curveSets) if ((curveSet?.GetName?.() ?? curveSet?.name) === name) curveSet.Stop?.();
    }
    GetCurveSetDuration(name) {
      let duration = 0;
      for (const curveSet of this.curveSets) if ((curveSet?.GetName?.() ?? curveSet?.name) === name) duration = Math.max(duration, Number(curveSet.GetDuration?.() ?? 0));
      return duration;
    }
    GetRangeDuration(name, rangeName) {
      let duration = 0;
      for (const curveSet of this.curveSets) if ((curveSet?.GetName?.() ?? curveSet?.name) === name) duration = Math.max(duration, Number(curveSet.GetRangeDuration?.(rangeName) ?? 0));
      return duration;
    }
  }];
  Tr2Lod = Tr2Lod;
  #identity = mat4.create();
  #zero = vec3.create();
  #sphere = vec4.create();
  #localSphere = vec4.create();
  #childSphere = vec4.create();
  #boundsMin = vec3.create();
  #boundsMax = vec3.create();
  constructor() {
    super(_EveTransform), _initClass();
  }
}();

export { _EveTransform as EveTransform };
//# sourceMappingURL=EveTransform.js.map
