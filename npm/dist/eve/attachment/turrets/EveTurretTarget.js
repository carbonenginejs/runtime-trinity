import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { io, type, carbon, impl, schema } from '@carbonenginejs/runtime-utils/schema';

let _initProto, _initClass, _init_targetPosition, _init_extra_targetPosition, _init_behaviour, _init_extra_behaviour, _init_positionOldInfluence, _init_extra_positionOldInfluence, _init_position, _init_extra_position, _init_positionOld, _init_extra_positionOld, _init_locator, _init_extra_locator;
let _EveTurretTarget;
new class extends _identity {
  static [class EveTurretTarget extends CjsModel {
    static {
      ({
        e: [_init_targetPosition, _init_extra_targetPosition, _init_behaviour, _init_extra_behaviour, _init_positionOldInfluence, _init_extra_positionOldInfluence, _init_position, _init_extra_position, _init_positionOld, _init_extra_positionOld, _init_locator, _init_extra_locator, _initProto],
        c: [_EveTurretTarget, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveTurretTarget",
        family: "eve/attachment/turrets"
      })], [[[io, io.read, type, type.vec3], 16, "targetPosition"], [[io, io.read, type, type.int32, void 0, schema.enum("ImpactBehaviour")], 16, "behaviour"], [[io, io.read, type, type.float32], 16, "positionOldInfluence"], [[io, io.read, type, type.vec3], 16, "position"], [[io, io.read, type, type.vec3], 16, "positionOld"], [[io, io.read, type, type.int32], 16, "locator"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTargetable"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Carbon QueryInterface checks are represented by validating the targetable's required duck-typed position surface.")], 18, "SetTargetable"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocator"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Carbon's random helpers map to Math.random; targetable calls use the org-standard out-last convention.")], 18, "StartFireAtLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "StopFireAtLocator"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")], 18, "GetImpactPosition"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")], 18, "Update"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTrackingPosition"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTargetPosition"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")], 18, "FindClosestLocator"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")], 18, "FindRandomValidLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetBehaviour"], [[carbon, carbon.method, impl, impl.implemented], 18, "PopShotMissed"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetShotMissed"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("An optional timestamp supports deterministic tests; otherwise browser wall-clock seconds replace BeOS actual time.")], 18, "SetShotMissed"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLastShotTime"], [[carbon, carbon.method, impl, impl.implemented], 18, "MissQueueSize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRadius"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetImpactConfiguration"], [[carbon, carbon.method, impl, impl.implemented], 18, "ShowDestObject"]], 0, void 0, CjsModel));
    }
    targetPosition = (_initProto(this), _init_targetPosition(this, vec3.create()));
    behaviour = (_init_extra_targetPosition(this), _init_behaviour(this, 0));
    positionOldInfluence = (_init_extra_behaviour(this), _init_positionOldInfluence(this, -1));
    position = (_init_extra_positionOldInfluence(this), _init_position(this, vec3.create()));
    positionOld = (_init_extra_position(this), _init_positionOld(this, vec3.create()));
    locator = (_init_extra_positionOld(this), _init_locator(this, -1));
    #targetable = (_init_extra_locator(this), null);
    #worldPositionObject = null;
    #impactLength = -1;
    #impactDelay = -1;
    #impactID = -1;
    #positionMiss = vec3.create();
    #missQueue = [];
    #lastShotMissed = false;
    #lastShotTime = 0;
    #laserMissBehaviour = false;
    #projectileMissBehaviour = false;
    #impactSize = 0;
    #randomMissDistanceOffset = 0.5;
    #randomMissPositionOffset = vec3.create();
    GetTargetable() {
      return this.#targetable;
    }
    SetTargetable(object) {
      if (!object) return false;
      const hasTargetSurface = typeof object.GetDamageLocatorPosition === "function" || typeof object.GetImpactPosition === "function";
      const hasPositionSurface = typeof object.GetWorldPosition === "function" || object.worldPosition?.length >= 3 || object.position?.length >= 3;
      if (!(hasTargetSurface && hasPositionSurface)) return false;
      if (object !== this.#targetable) {
        this.#targetable = object;
        this.#worldPositionObject = object;
        vec3.copy(this.positionOld, this.position);
        this.positionOldInfluence = 1;
      }
      return true;
    }
    GetLocator() {
      return this.locator;
    }
    StartFireAtLocator(locator, delay, length, source = _EveTurretTarget.#zero) {
      this.locator = Number(locator) | 0;
      this.#randomMissDistanceOffset = Math.random();
      const u = Math.random();
      const v = Math.random();
      const phi = u * Math.PI * 2;
      const theta = Math.acos(1 - Math.sqrt(v)) * 2;
      const sinPhi = Math.sin(phi) * 3;
      vec3.set(this.#randomMissPositionOffset, sinPhi * Math.cos(theta), Math.cos(phi) * 3, sinPhi * Math.sin(theta));
      this.#impactID = -1;
      if (!this.PopShotMissed() && this.#impactSize > 0 && this.#targetable) {
        this.#impactLength = Math.max(Number(length), 0);
        this.#impactDelay = Number(delay);
        if (this.#impactDelay === 0) {
          this.GetImpactPosition(source, this.targetPosition);
          if (this.behaviour === _EveTurretTarget.ImpactBehaviour.DAMAGE_LOCATOR) {
            vec3.subtract(_EveTurretTarget.#direction, source, this.targetPosition);
            this.#impactID = Number(this.#targetable.CreateImpact?.(this.locator, _EveTurretTarget.#direction, this.#impactLength, this.#impactSize) ?? -1) | 0;
            this.#impactDelay = -1;
          }
        }
      }
    }
    StopFireAtLocator() {
      this.locator = -1;
      this.positionOldInfluence = -1;
      this.#lastShotMissed = false;
      this.#missQueue.length = 0;
    }
    GetImpactPosition(source = _EveTurretTarget.#zero, out = vec3.create()) {
      if (!this.#targetable) return out;
      if (this.behaviour === _EveTurretTarget.ImpactBehaviour.DAMAGE_LOCATOR) {
        const valid = this.#targetable.GetDamageLocatorPosition?.(this.locator, true, out);
        if (valid === false || vec3.squaredLength(out) > 2.2379561604e22) getWorldPosition(this.#worldPositionObject, out);
      } else if (this.behaviour === _EveTurretTarget.ImpactBehaviour.CENTER) {
        getWorldPosition(this.#worldPositionObject, out);
      } else {
        getWorldPosition(this.#worldPositionObject, _EveTurretTarget.#worldPosition);
        const valid = this.#targetable.GetImpactPosition?.(this.locator, source, _EveTurretTarget.#worldPosition, 0, out);
        if (valid === false) this.#targetable.GetDamageLocatorPosition?.(this.locator, true, out);
      }
      return out;
    }
    Update(deltaTime, source = _EveTurretTarget.#zero) {
      const dt = Number(deltaTime) || 0;
      if (this.#targetable) {
        this.GetImpactPosition(source, this.targetPosition);
        vec3.subtract(_EveTurretTarget.#direction, source, this.targetPosition);
        const missResult = this.#targetable.GetMissPosition?.(this.targetPosition, source, this.#positionMiss);
        if (missResult?.length >= 3) vec3.copy(this.#positionMiss, missResult);else if (missResult === undefined && !this.#targetable.GetMissPosition) vec3.copy(this.#positionMiss, this.targetPosition);
        vec3.add(this.#positionMiss, this.#positionMiss, this.#randomMissPositionOffset);
        vec3.subtract(_EveTurretTarget.#missDirection, this.#positionMiss, source);
        const distance = vec3.length(_EveTurretTarget.#missDirection);
        if (distance) vec3.scale(_EveTurretTarget.#missDirection, _EveTurretTarget.#missDirection, 1 / distance);
        if (this.#laserMissBehaviour) {
          vec3.scaleAndAdd(this.#positionMiss, this.#positionMiss, _EveTurretTarget.#missDirection, 250000);
        } else {
          vec3.scaleAndAdd(this.#positionMiss, this.#positionMiss, _EveTurretTarget.#missDirection, (distance + 5000) * (1 + 0.5 * this.#randomMissDistanceOffset));
        }
        if (this.behaviour === _EveTurretTarget.ImpactBehaviour.DAMAGE_LOCATOR) {
          if (this.#impactID !== -1) this.#targetable.UpdateImpact?.(this.targetPosition, _EveTurretTarget.#direction, this.#impactID);
          if (this.#impactDelay > 0 && this.#impactSize > 0) {
            this.#impactDelay -= dt;
            if (this.#impactDelay < 0) {
              this.#impactID = Number(this.#targetable.CreateImpact?.(this.locator, _EveTurretTarget.#direction, this.#impactLength, this.#impactSize) ?? -1) | 0;
              this.#impactDelay = -1;
            }
          }
        }
      }
      vec3.copy(this.position, this.targetPosition);
      if (this.positionOldInfluence > 0) {
        vec3.lerp(this.position, this.targetPosition, this.positionOld, this.positionOldInfluence);
        this.positionOldInfluence -= dt;
      }
      return this.position;
    }
    GetTrackingPosition(out) {
      return copyOrReturn(this.GetShotMissed() ? this.#positionMiss : this.position, out);
    }
    GetTargetPosition(out) {
      return copyOrReturn(this.GetShotMissed() ? this.#positionMiss : this.targetPosition, out);
    }
    FindClosestLocator(source, out = vec3.create()) {
      if (!this.#targetable) return -1;
      const locator = Number(this.#targetable.GetClosestDamageLocatorIndex?.(source) ?? -1) | 0;
      return this.#targetable.GetDamageLocatorPosition?.(locator, true, out) === false ? -1 : locator;
    }
    FindRandomValidLocator(source, out = vec3.create()) {
      if (!this.#targetable) return -1;
      let locator = Number(this.#targetable.GetGoodDamageLocatorIndex?.(source) ?? -1) | 0;
      if (this.#targetable.GetDamageLocatorPosition?.(locator, true, out) !== false) return locator;
      locator = Number(this.#targetable.GetClosestDamageLocatorIndex?.(source) ?? -1) | 0;
      return this.#targetable.GetDamageLocatorPosition?.(locator, true, out) === false ? -1 : locator;
    }
    SetBehaviour(laserMiss, projectileMiss, impactSize, impactBehaviour) {
      this.#laserMissBehaviour = !!laserMiss;
      this.#projectileMissBehaviour = !!projectileMiss;
      this.#impactSize = Number(impactSize);
      this.behaviour = Number(impactBehaviour) | 0;
    }
    PopShotMissed() {
      this.#lastShotMissed = this.#missQueue.length ? this.#missQueue.shift() : false;
      return this.#lastShotMissed;
    }
    GetShotMissed() {
      return this.#lastShotMissed;
    }
    SetShotMissed(missed, timestamp = Date.now() / 1000) {
      this.#missQueue.push(!!missed);
      this.#lastShotTime = Number(timestamp);
      while (this.#missQueue.length > 4) this.#missQueue.shift();
    }
    GetLastShotTime() {
      return this.#lastShotTime;
    }
    MissQueueSize() {
      return this.#missQueue.length;
    }
    GetRadius() {
      return Number(this.#targetable?.GetRadius?.() ?? -1);
    }
    GetImpactConfiguration() {
      return this.#targetable?.GetImpactConfiguration?.() ?? _EveTurretTarget.ImpactConfiguration.IMPACT_INVALID;
    }
    ShowDestObject() {
      return !(this.#projectileMissBehaviour && this.GetShotMissed());
    }
  }];
  ImpactBehaviour = Object.freeze({
    DAMAGE_LOCATOR: 0,
    SHIELD_ELLIPSOID: 1,
    CENTER: 2
  });
  ImpactConfiguration = Object.freeze({
    IMPACT_INVALID: 0,
    IMPACT_SHIELD: 1,
    IMPACT_ARMOR: 2,
    IMPACT_HULL: 3
  });
  #zero = vec3.create();
  #direction = vec3.create();
  #missDirection = vec3.create();
  #worldPosition = vec3.create();
  constructor() {
    super(_EveTurretTarget), _initClass();
  }
}();
function getWorldPosition(object, out) {
  const value = object?.GetWorldPosition?.(out) ?? object?.worldPosition ?? object?.position;
  if (value?.length >= 3 && value !== out) vec3.copy(out, value);
  return out;
}
function copyOrReturn(value, out) {
  return out ? vec3.copy(out, value) : value;
}

export { _EveTurretTarget as EveTurretTarget };
//# sourceMappingURL=EveTurretTarget.js.map
