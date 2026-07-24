import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/runtime-utils/mat4';
import { carbonPerlin1D } from '@carbonenginejs/runtime-utils/noise';
import { quat } from '@carbonenginejs/runtime-utils/quat';
import { sph3 } from '@carbonenginejs/runtime-utils/sph3';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { vec4 } from '@carbonenginejs/runtime-utils/vec4';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { EveTransform as _EveTransform } from './EveTransform.js';

let _initProto, _initClass, _init_pathOffsetNoiseScale, _init_extra_pathOffsetNoiseScale, _init_pathOffsetNoiseSpeed, _init_extra_pathOffsetNoiseSpeed, _init_startDataValid, _init_extra_startDataValid, _init_pathOffset, _init_extra_pathOffset, _init_maxExplosionDistance, _init_extra_maxExplosionDistance, _init_impactDuration, _init_extra_impactDuration, _init_explosionPosition, _init_extra_explosionPosition, _init_impactSize, _init_extra_impactSize, _init_spriteSet, _init_extra_spriteSet, _init_targetLocatorID, _init_extra_targetLocatorID, _init_durationEjectPhase, _init_extra_durationEjectPhase, _init_doSpread, _init_extra_doSpread, _init_acceleration, _init_extra_acceleration, _init_id, _init_extra_id, _init_startEjectVelocity, _init_extra_startEjectVelocity, _init_warheadLength, _init_extra_warheadLength, _init_warheadRadius, _init_extra_warheadRadius;
let _EveMissileWarhead;
new class extends _identity {
  static [class EveMissileWarhead extends _EveTransform {
    static {
      ({
        e: [_init_pathOffsetNoiseScale, _init_extra_pathOffsetNoiseScale, _init_pathOffsetNoiseSpeed, _init_extra_pathOffsetNoiseSpeed, _init_startDataValid, _init_extra_startDataValid, _init_pathOffset, _init_extra_pathOffset, _init_maxExplosionDistance, _init_extra_maxExplosionDistance, _init_impactDuration, _init_extra_impactDuration, _init_explosionPosition, _init_extra_explosionPosition, _init_impactSize, _init_extra_impactSize, _init_spriteSet, _init_extra_spriteSet, _init_targetLocatorID, _init_extra_targetLocatorID, _init_durationEjectPhase, _init_extra_durationEjectPhase, _init_doSpread, _init_extra_doSpread, _init_acceleration, _init_extra_acceleration, _init_id, _init_extra_id, _init_startEjectVelocity, _init_extra_startEjectVelocity, _init_warheadLength, _init_extra_warheadLength, _init_warheadRadius, _init_extra_warheadRadius, _initProto],
        c: [_EveMissileWarhead, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveMissileWarhead",
        family: "eve/spaceObject"
      })], [[[io, io.persist, type, type.float32], 16, "pathOffsetNoiseScale"], [[io, io.persist, type, type.float32], 16, "pathOffsetNoiseSpeed"], [[io, io.readwrite, type, type.boolean], 16, "startDataValid"], [[io, io.readwrite, type, type.vec3], 16, "pathOffset"], [[io, io.persist, type, type.float32], 16, "maxExplosionDistance"], [[io, io.persist, type, type.float32], 16, "impactDuration"], [[io, io.read, type, type.vec3], 16, "explosionPosition"], [[io, io.persist, type, type.float32], 16, "impactSize"], [[io, io.persist, void 0, type.model("EveSpriteSet")], 16, "spriteSet"], [[io, io.read, type, type.int32], 16, "targetLocatorID"], [[io, io.persist, type, type.float32], 16, "durationEjectPhase"], [[io, io.readwrite, type, type.boolean], 16, "doSpread"], [[io, io.persist, type, type.float32], 16, "acceleration"], [[io, io.readwrite, type, type.int32], 16, "id"], [[io, io.persist, type, type.float32], 16, "startEjectVelocity"], [[io, io.persist, type, type.float32], 16, "warheadLength"], [[io, io.persist, type, type.float32], 16, "warheadRadius"], [[carbon, carbon.method, impl, impl.implemented], 18, "PrepareLaunch"], [[carbon, carbon.method, impl, impl.implemented], 18, "Launch"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateEndTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateState"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Targetable output parameters use the org-standard out-last calling convention.")], 18, "CheckImpact"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Carbon's pointer-derived Perlin phase is replaced with a stable per-instance 12-bit sequence.")], 18, "Update"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("The CPU flight calculation is source-faithful; current world composition is also published immediately for headless graph consumers.")], 18, "UpdateWarhead"], [[carbon, carbon.method, impl, impl.implemented], 18, "EnableParticleEmitting"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateVisibility"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRenderables"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCurrentOffsetTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTargetLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetTargetLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetState"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWarheadID"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Constant-buffer layout/packing is engine-owned; Trinity Allocs the record from the accumulator's store and Sets logical values by name (the store transposes the matrix per the engine layout).")], 18, "GetPerObjectData"]], 0, void 0, _EveTransform));
    }
    pathOffsetNoiseScale = (_initProto(this), _init_pathOffsetNoiseScale(this, 0));
    pathOffsetNoiseSpeed = (_init_extra_pathOffsetNoiseScale(this), _init_pathOffsetNoiseSpeed(this, 1));
    startDataValid = (_init_extra_pathOffsetNoiseSpeed(this), _init_startDataValid(this, false));
    pathOffset = (_init_extra_startDataValid(this), _init_pathOffset(this, vec3.create()));
    maxExplosionDistance = (_init_extra_pathOffset(this), _init_maxExplosionDistance(this, 40));
    impactDuration = (_init_extra_maxExplosionDistance(this), _init_impactDuration(this, 0.6));
    explosionPosition = (_init_extra_impactDuration(this), _init_explosionPosition(this, vec3.create()));
    impactSize = (_init_extra_explosionPosition(this), _init_impactSize(this, 0));
    spriteSet = (_init_extra_impactSize(this), _init_spriteSet(this, null));
    targetLocatorID = (_init_extra_spriteSet(this), _init_targetLocatorID(this, -1));
    durationEjectPhase = (_init_extra_targetLocatorID(this), _init_durationEjectPhase(this, 0));
    doSpread = (_init_extra_durationEjectPhase(this), _init_doSpread(this, true));
    acceleration = (_init_extra_doSpread(this), _init_acceleration(this, 1));
    id = (_init_extra_acceleration(this), _init_id(this, -1));
    startEjectVelocity = (_init_extra_id(this), _init_startEjectVelocity(this, 0));
    warheadLength = (_init_extra_startEjectVelocity(this), _init_warheadLength(this, 1));
    warheadRadius = (_init_extra_warheadLength(this), _init_warheadRadius(this, 1));
    #state = (_init_extra_warheadRadius(this), _EveMissileWarhead.State.STATE_DELAYED);
    #flyingTime = 0;
    #movement = vec3.create();
    #positionLastFrame = vec3.create();
    #lastRelativePosition = vec3.create();
    #currentStartOffset = vec3.create();
    #startOrientation = quat.create();
    #oldEndOffset = vec3.create();
    #currentEndOffset = vec3.create();
    #endOffset = vec3.create();
    #currentOffset = vec3.create();
    #currentOrientation = quat.create();
    #currentEjectVelocity = 0;
    #currentDurationEjectPhase = 0;
    #currentOffsetTransform = mat4.create();
    #finalDestinationTimer = 0;
    #finalTargetTime = 0.75 - Math.random() * 0.1;
    #speedModifier = 1.04 - Math.random() * 0.08;
    #explosionDistance = 0;
    #bombFlightpath = false;
    #lastPositionValid = false;
    #noisePhase = _EveMissileWarhead.#nextNoisePhase++ & 0xfff;
    #isVisible = true;
    PrepareLaunch() {
      this.#currentEjectVelocity = this.startEjectVelocity;
      this.#currentDurationEjectPhase = this.durationEjectPhase;
      const distance = this.maxExplosionDistance - Math.random() * this.maxExplosionDistance * 0.5;
      this.#explosionDistance = distance * distance;
      this.#state = _EveMissileWarhead.State.STATE_DELAYED;
      this.#flyingTime = 0;
      vec3.set(this.#currentStartOffset, 0, 0, 0);
      quat.identity(this.#startOrientation);
      this.startDataValid = false;
      vec3.set(this.#oldEndOffset, 0, 0, 0);
      vec3.set(this.#currentEndOffset, 0, 0, 0);
      vec3.set(this.#endOffset, 0, 0, 0);
      vec3.set(this.#currentOffset, 0, 0, 0);
      quat.identity(this.#currentOrientation);
      this.#finalDestinationTimer = 0;
      this.targetLocatorID = -1;
      vec3.set(this.explosionPosition, 0, 0, 0);
      mat4.identity(this.#currentOffsetTransform);
      this.#speedModifier = 1.04 - Math.random() * 0.08;
      this.#finalTargetTime = 0.75 - Math.random() * 0.1;
      this.#bombFlightpath = false;
      this.#lastPositionValid = false;
    }
    Launch(startTransform) {
      mat4.getRotation(this.#startOrientation, startTransform);
      vec3.set(this.#currentStartOffset, startTransform[12], startTransform[13], startTransform[14]);
      quat.copy(this.#currentOrientation, this.#startOrientation);
      vec3.copy(this.#currentOffset, this.#currentStartOffset);
      this.startDataValid = true;
      this.#lastPositionValid = false;
    }
    UpdateEndTransform(endTransform, switchLocators) {
      vec3.set(this.#endOffset, endTransform[12], endTransform[13], endTransform[14]);
      if (switchLocators) {
        this.#finalDestinationTimer = this.#flyingTime;
        vec3.copy(this.#oldEndOffset, this.#currentEndOffset);
      }
    }
    UpdateState(deltaTime, estimatedTotalAliveTime, target) {
      this.#bombFlightpath = !target;
      let event = _EveMissileWarhead.StateChangeEvent.EVT_NONE;
      const totalFlyingTime = Math.max((Number(estimatedTotalAliveTime) + 0.1) * this.#speedModifier, Number.EPSILON);
      const flight = clamp01(this.#flyingTime / totalFlyingTime);
      switch (this.#state) {
        case _EveMissileWarhead.State.STATE_DELAYED:
          if (this.startDataValid) this.#state = _EveMissileWarhead.State.STATE_LAUNCH;
          break;
        case _EveMissileWarhead.State.STATE_LAUNCH:
          this.EnableParticleEmitting(true);
          this.#state = _EveMissileWarhead.State.STATE_EJECTING;
          break;
        case _EveMissileWarhead.State.STATE_EJECTING:
          this.#currentDurationEjectPhase -= Number(deltaTime);
          if (this.#currentDurationEjectPhase <= 0) {
            this.#currentDurationEjectPhase = 0;
            this.#state = _EveMissileWarhead.State.STATE_START_TRACKING;
          }
          break;
        case _EveMissileWarhead.State.STATE_START_TRACKING:
          this.targetLocatorID = target ? Number(target.GetGoodDamageLocatorIndex?.(this.GetWorldPosition()) ?? -1) | 0 : -1;
          this.#state = estimatedTotalAliveTime >= 5 && this.doSpread ? _EveMissileWarhead.State.STATE_TRACKING_SPREAD : _EveMissileWarhead.State.STATE_TRACKING_FINAL;
          break;
        case _EveMissileWarhead.State.STATE_TRACKING_SPREAD:
          if (flight >= this.#finalTargetTime) {
            this.targetLocatorID = target ? Number(target.GetGoodDamageLocatorIndex?.(this.GetWorldPosition()) ?? -1) | 0 : -1;
            event = _EveMissileWarhead.StateChangeEvent.EVT_SWITCH_TARGET;
            this.#state = _EveMissileWarhead.State.STATE_TRACKING_FINAL;
          }
          break;
        case _EveMissileWarhead.State.STATE_EXPLODED:
          this.#state = _EveMissileWarhead.State.STATE_DEAD;
          break;
      }
      return event;
    }
    CheckImpact(deltaTime, estimatedTotalAliveTime, target) {
      if (this.#state !== _EveMissileWarhead.State.STATE_TRACKING_FINAL || this.id < 0) return _EveMissileWarhead.StateChangeEvent.EVT_NONE;
      const totalFlyingTime = Math.max((Number(estimatedTotalAliveTime) + 0.1) * this.#speedModifier, Number.EPSILON);
      const flight = clamp01((this.#flyingTime - Number(deltaTime)) / totalFlyingTime);
      const positionNow = this.GetWorldPosition(_EveMissileWarhead.#positionNow);
      if (!target) {
        vec3.copy(this.explosionPosition, positionNow);
        this.#state = _EveMissileWarhead.State.STATE_EXPLODED;
        return _EveMissileWarhead.StateChangeEvent.EVT_EXPLODE;
      }
      vec3.subtract(_EveMissileWarhead.#positionLast, positionNow, this.#movement);
      vec3.copy(_EveMissileWarhead.#targetPosition, positionNow);
      const hit = target.GetImpactPosition?.(this.targetLocatorID, _EveMissileWarhead.#positionLast, positionNow, this.#explosionDistance, _EveMissileWarhead.#targetPosition) ?? false;
      if (flight < 1 && !hit) return _EveMissileWarhead.StateChangeEvent.EVT_NONE;
      vec3.copy(this.explosionPosition, positionNow);
      vec3.subtract(_EveMissileWarhead.#impactDirection, _EveMissileWarhead.#targetPosition, positionNow);
      if (vec3.dot(_EveMissileWarhead.#impactDirection, this.#movement) < 0) vec3.copy(this.explosionPosition, _EveMissileWarhead.#targetPosition);
      if (this.impactSize > 0) {
        vec3.negate(_EveMissileWarhead.#impactDirection, this.#movement);
        target.CreateImpact?.(this.targetLocatorID, _EveMissileWarhead.#impactDirection, this.impactDuration, this.impactSize);
      }
      this.#state = _EveMissileWarhead.State.STATE_EXPLODED;
      return _EveMissileWarhead.StateChangeEvent.EVT_EXPLODE;
    }
    Update(context) {
      const position = this.#flyingTime * this.pathOffsetNoiseSpeed + this.#noisePhase;
      this.pathOffset[0] = carbonPerlin1D(position, 1.1, 2, 3) * this.pathOffsetNoiseScale;
      this.pathOffset[1] = carbonPerlin1D(position + 10.1, 1.1, 2, 3) * this.pathOffsetNoiseScale;
      this.pathOffset[2] = carbonPerlin1D(position + 18.3, 1.1, 2, 3) * this.pathOffsetNoiseScale;
      vec3.subtract(this.#positionLastFrame, this.#positionLastFrame, context?.GetOriginShift?.() ?? context?.originShift ?? _EveMissileWarhead.#zero);
      super.Update(context);
      this.GetWorldPosition(_EveMissileWarhead.#positionNow);
      vec3.subtract(this.#movement, _EveMissileWarhead.#positionNow, this.#positionLastFrame);
      vec3.copy(this.#positionLastFrame, _EveMissileWarhead.#positionNow);
    }
    UpdateWarhead(deltaTime, estimatedTotalAliveTime, currentBallVelocity, currentInheritedVelocity, inverseBallRotation, missileTransform, originShift = _EveMissileWarhead.#zero) {
      const dt = Number(deltaTime) || 0;
      vec3.set(_EveMissileWarhead.#ejectVelocity, 0, 0, this.#currentEjectVelocity);
      vec3.transformQuat(_EveMissileWarhead.#ejectVelocity, _EveMissileWarhead.#ejectVelocity, this.#startOrientation);
      transformNormal(_EveMissileWarhead.#globalBallVelocity, currentBallVelocity, inverseBallRotation);
      if (this.#state >= _EveMissileWarhead.State.STATE_START_TRACKING) this.#flyingTime += dt;
      const totalFlyingTime = Math.max((Number(estimatedTotalAliveTime) + 0.1) * this.#speedModifier, Number.EPSILON);
      const flight = clamp01(this.#flyingTime / totalFlyingTime);
      const quickFlight = clamp01(3 * flight);
      if (this.#state >= _EveMissileWarhead.State.STATE_EJECTING) vec3.scaleAndAdd(this.#currentStartOffset, this.#currentStartOffset, _EveMissileWarhead.#ejectVelocity, dt);
      vec3.scaleAndAdd(this.#currentStartOffset, this.#currentStartOffset, currentInheritedVelocity, dt);
      const denominator = totalFlyingTime - this.#finalDestinationTimer;
      const targetTime = denominator ? clamp01((this.#flyingTime - this.#finalDestinationTimer) / denominator) : 1;
      vec3.scale(_EveMissileWarhead.#modifiedOldOffset, this.#oldEndOffset, 1 - clamp01(targetTime * 2));
      vec3.lerp(this.#currentEndOffset, _EveMissileWarhead.#modifiedOldOffset, this.#endOffset, targetTime);
      vec3.lerp(this.#currentOffset, this.#currentStartOffset, this.#currentEndOffset, Math.pow(flight, 1 + this.acceleration));
      vec3.scale(_EveMissileWarhead.#globalBallVelocity, _EveMissileWarhead.#globalBallVelocity, 1 - flight);
      vec3.scaleAndAdd(this.#currentStartOffset, this.#currentStartOffset, _EveMissileWarhead.#globalBallVelocity, -dt);
      this.#currentEjectVelocity = this.startEjectVelocity * (1 - Math.pow(quickFlight, 1 + this.acceleration));
      vec3.scaleAndAdd(this.#currentOffset, this.#currentOffset, this.pathOffset, Math.sin(Math.PI * flight) ** 2);
      if (this.#bombFlightpath) vec3.scale(this.#currentOffset, this.#currentOffset, (1 - quickFlight) ** 2);
      vec3.transformMat4(_EveMissileWarhead.#relativePosition, this.#currentOffset, missileTransform);
      vec3.subtract(_EveMissileWarhead.#translation, this.#lastRelativePosition, _EveMissileWarhead.#relativePosition);
      vec3.add(_EveMissileWarhead.#translation, _EveMissileWarhead.#translation, originShift);
      vec3.copy(this.#lastRelativePosition, _EveMissileWarhead.#relativePosition);
      if (this.#lastPositionValid && this.startDataValid) {
        const distanceSquared = vec3.squaredLength(_EveMissileWarhead.#translation);
        if (distanceSquared > 0) {
          transformNormal(_EveMissileWarhead.#translation, _EveMissileWarhead.#translation, inverseBallRotation);
          mat4.arcFromForward(_EveMissileWarhead.#orientationMatrix, _EveMissileWarhead.#translation);
          mat4.getRotation(_EveMissileWarhead.#orientationNow, _EveMissileWarhead.#orientationMatrix);
          if (distanceSquared < 1) {
            quat.slerp(this.#currentOrientation, this.#currentOrientation, _EveMissileWarhead.#orientationNow, distanceSquared);
            quat.normalize(this.#currentOrientation, this.#currentOrientation);
          } else quat.copy(this.#currentOrientation, _EveMissileWarhead.#orientationNow);
        }
      } else this.#lastPositionValid = true;
      mat4.fromRotationTranslation(this.#currentOffsetTransform, this.#currentOrientation, this.#currentOffset);
      mat4.multiply(this.worldTransform, missileTransform, this.#currentOffsetTransform);
    }
    EnableParticleEmitting(enable) {
      for (const child of this.children) for (const emitter of child?.particleEmitters ?? []) enableEmitter(emitter, enable);
      for (const emitter of this.particleEmitters) enableEmitter(emitter, enable);
    }
    UpdateVisibility(context, parentTransform) {
      this.#isVisible = false;
      if (!this.startDataValid || this.#state === _EveMissileWarhead.State.STATE_DEAD || !this.display) return false;
      mat4.copy(this.worldTransform, parentTransform);
      this.#isVisible = true;
      super.UpdateVisibility(context, parentTransform);
      return true;
    }
    GetRenderables(out = []) {
      if (!this.#isVisible || this.lodLevel <= _EveTransform.Tr2Lod.TR2_LOD_LOW) return out;
      if (this.mesh) out.push(this);
      this.spriteSet?.GetRenderables?.(out);
      return out;
    }
    GetBoundingSphere(out = vec4.create()) {
      vec4.set(_EveMissileWarhead.#localSphere, 0, 0, this.warheadLength * 0.5, this.warheadLength * 0.5);
      sph3.transformMat4(out, _EveMissileWarhead.#localSphere, this.worldTransform);
      return true;
    }
    GetLocalBoundingSphere(out = vec4.create()) {
      vec4.set(_EveMissileWarhead.#localSphere, 0, 0, this.warheadLength * 0.5, this.warheadLength * 0.5);
      sph3.transformMat4(out, _EveMissileWarhead.#localSphere, this.#currentOffsetTransform);
      return true;
    }
    GetCurrentOffsetTransform() {
      return this.#currentOffsetTransform;
    }
    GetTargetLocator() {
      return this.targetLocatorID;
    }
    SetTargetLocator(locator) {
      this.targetLocatorID = Number(locator) | 0;
    }
    GetState() {
      return this.#state;
    }
    GetWarheadID() {
      return this.id;
    }
    GetPerObjectData(accumulator) {
      const data = accumulator.Alloc("EveMissileWarheadPerObjectData");
      data.Set("world", this.worldTransform);
      data.Set("missileSize", [this.warheadRadius, this.warheadLength, 0, 0]);
      return data;
    }
  }];
  State = Object.freeze({
    STATE_DELAYED: 0,
    STATE_LAUNCH: 1,
    STATE_EJECTING: 2,
    STATE_START_TRACKING: 3,
    STATE_TRACKING_SPREAD: 4,
    STATE_TRACKING_FINAL: 5,
    STATE_EXPLODED: 6,
    STATE_DEAD: 7
  });
  StateChangeEvent = Object.freeze({
    EVT_SWITCH_TARGET: 0,
    EVT_EXPLODE: 1,
    EVT_NONE: 2
  });
  #nextNoisePhase = 1;
  #zero = vec3.create();
  #localSphere = vec4.create();
  #positionNow = vec3.create();
  #positionLast = vec3.create();
  #targetPosition = vec3.create();
  #impactDirection = vec3.create();
  #ejectVelocity = vec3.create();
  #globalBallVelocity = vec3.create();
  #modifiedOldOffset = vec3.create();
  #relativePosition = vec3.create();
  #translation = vec3.create();
  #orientationNow = quat.create();
  #orientationMatrix = mat4.create();
  constructor() {
    super(_EveMissileWarhead), _initClass();
  }
}();
function clamp01(value) {
  return Math.max(0, Math.min(1, Number(value) || 0));
}
function transformNormal(out, vector, matrix) {
  const x = vector?.[0] ?? 0;
  const y = vector?.[1] ?? 0;
  const z = vector?.[2] ?? 0;
  out[0] = matrix[0] * x + matrix[4] * y + matrix[8] * z;
  out[1] = matrix[1] * x + matrix[5] * y + matrix[9] * z;
  out[2] = matrix[2] * x + matrix[6] * y + matrix[10] * z;
  return out;
}
function enableEmitter(emitter, enable) {
  if (typeof emitter?.Enable === "function") emitter.Enable(!!enable);else if (typeof emitter?.SetEnabled === "function") emitter.SetEnabled(!!enable);else if (emitter) emitter.enabled = !!enable;
}

export { _EveMissileWarhead as EveMissileWarhead };
//# sourceMappingURL=EveMissileWarhead.js.map
