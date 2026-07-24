// Source: E:\carbonengine\trinity\trinity\Eve\Turret\EveTurretTarget.h
// Source: E:\carbonengine\trinity\trinity\Eve\Turret\EveTurretTarget.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, schema, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({ className: "EveTurretTarget", family: "eve/attachment/turrets" })
export class EveTurretTarget extends CjsModel
{
  @io.read @type.vec3 targetPosition = vec3.create();
  @io.read @type.int32 @schema.enum("ImpactBehaviour") behaviour = 0;
  @io.read @type.float32 positionOldInfluence = -1;
  @io.read @type.vec3 position = vec3.create();
  @io.read @type.vec3 positionOld = vec3.create();
  @io.read @type.int32 locator = -1;

  #targetable = null;
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

  @carbon.method @impl.implemented
  GetTargetable()
  {
    return this.#targetable;
  }

  @carbon.method @impl.adapted
  @impl.reason("Carbon QueryInterface checks are represented by validating the targetable's required duck-typed position surface.")
  SetTargetable(object)
  {
    if (!object) return false;
    const hasTargetSurface = typeof object.GetDamageLocatorPosition === "function" || typeof object.GetImpactPosition === "function";
    const hasPositionSurface = typeof object.GetWorldPosition === "function" || object.worldPosition?.length >= 3 || object.position?.length >= 3;
    if (!(hasTargetSurface && hasPositionSurface)) return false;
    if (object !== this.#targetable)
    {
      this.#targetable = object;
      this.#worldPositionObject = object;
      vec3.copy(this.positionOld, this.position);
      this.positionOldInfluence = 1;
    }
    return true;
  }

  @carbon.method @impl.implemented
  GetLocator()
  {
    return this.locator;
  }

  @carbon.method @impl.adapted
  @impl.reason("Carbon's random helpers map to Math.random; targetable calls use the org-standard out-last convention.")
  StartFireAtLocator(locator, delay, length, source = EveTurretTarget.#zero)
  {
    this.locator = Number(locator) | 0;
    this.#randomMissDistanceOffset = Math.random();
    const u = Math.random();
    const v = Math.random();
    const phi = u * Math.PI * 2;
    const theta = Math.acos(1 - Math.sqrt(v)) * 2;
    const sinPhi = Math.sin(phi) * 3;
    vec3.set(this.#randomMissPositionOffset, sinPhi * Math.cos(theta), Math.cos(phi) * 3, sinPhi * Math.sin(theta));
    this.#impactID = -1;

    if (!this.PopShotMissed() && this.#impactSize > 0 && this.#targetable)
    {
      this.#impactLength = Math.max(Number(length), 0);
      this.#impactDelay = Number(delay);
      if (this.#impactDelay === 0)
      {
        this.GetImpactPosition(source, this.targetPosition);
        if (this.behaviour === EveTurretTarget.ImpactBehaviour.DAMAGE_LOCATOR)
        {
          vec3.subtract(EveTurretTarget.#direction, source, this.targetPosition);
          this.#impactID = Number(this.#targetable.CreateImpact?.(this.locator, EveTurretTarget.#direction, this.#impactLength, this.#impactSize) ?? -1) | 0;
          this.#impactDelay = -1;
        }
      }
    }
  }

  @carbon.method @impl.implemented
  StopFireAtLocator()
  {
    this.locator = -1;
    this.positionOldInfluence = -1;
    this.#lastShotMissed = false;
    this.#missQueue.length = 0;
  }

  @carbon.method @impl.adapted
  @impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")
  GetImpactPosition(source = EveTurretTarget.#zero, out = vec3.create())
  {
    if (!this.#targetable) return out;
    if (this.behaviour === EveTurretTarget.ImpactBehaviour.DAMAGE_LOCATOR)
    {
      const valid = this.#targetable.GetDamageLocatorPosition?.(this.locator, true, out);
      if (valid === false || vec3.squaredLength(out) > 2.2379561604e22) getWorldPosition(this.#worldPositionObject, out);
    }
    else if (this.behaviour === EveTurretTarget.ImpactBehaviour.CENTER)
    {
      getWorldPosition(this.#worldPositionObject, out);
    }
    else
    {
      getWorldPosition(this.#worldPositionObject, EveTurretTarget.#worldPosition);
      const valid = this.#targetable.GetImpactPosition?.(this.locator, source, EveTurretTarget.#worldPosition, 0, out);
      if (valid === false) this.#targetable.GetDamageLocatorPosition?.(this.locator, true, out);
    }
    return out;
  }

  @carbon.method @impl.adapted
  @impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")
  Update(deltaTime, source = EveTurretTarget.#zero)
  {
    const dt = Number(deltaTime) || 0;
    if (this.#targetable)
    {
      this.GetImpactPosition(source, this.targetPosition);
      vec3.subtract(EveTurretTarget.#direction, source, this.targetPosition);
      const missResult = this.#targetable.GetMissPosition?.(this.targetPosition, source, this.#positionMiss);
      if (missResult?.length >= 3) vec3.copy(this.#positionMiss, missResult);
      else if (missResult === undefined && !this.#targetable.GetMissPosition) vec3.copy(this.#positionMiss, this.targetPosition);
      vec3.add(this.#positionMiss, this.#positionMiss, this.#randomMissPositionOffset);
      vec3.subtract(EveTurretTarget.#missDirection, this.#positionMiss, source);
      const distance = vec3.length(EveTurretTarget.#missDirection);
      if (distance) vec3.scale(EveTurretTarget.#missDirection, EveTurretTarget.#missDirection, 1 / distance);
      if (this.#laserMissBehaviour)
      {
        vec3.scaleAndAdd(this.#positionMiss, this.#positionMiss, EveTurretTarget.#missDirection, 250000);
      }
      else
      {
        vec3.scaleAndAdd(this.#positionMiss, this.#positionMiss, EveTurretTarget.#missDirection, (distance + 5000) * (1 + 0.5 * this.#randomMissDistanceOffset));
      }

      if (this.behaviour === EveTurretTarget.ImpactBehaviour.DAMAGE_LOCATOR)
      {
        if (this.#impactID !== -1) this.#targetable.UpdateImpact?.(this.targetPosition, EveTurretTarget.#direction, this.#impactID);
        if (this.#impactDelay > 0 && this.#impactSize > 0)
        {
          this.#impactDelay -= dt;
          if (this.#impactDelay < 0)
          {
            this.#impactID = Number(this.#targetable.CreateImpact?.(this.locator, EveTurretTarget.#direction, this.#impactLength, this.#impactSize) ?? -1) | 0;
            this.#impactDelay = -1;
          }
        }
      }
    }

    vec3.copy(this.position, this.targetPosition);
    if (this.positionOldInfluence > 0)
    {
      vec3.lerp(this.position, this.targetPosition, this.positionOld, this.positionOldInfluence);
      this.positionOldInfluence -= dt;
    }
    return this.position;
  }

  @carbon.method @impl.implemented
  GetTrackingPosition(out)
  {
    return copyOrReturn(this.GetShotMissed() ? this.#positionMiss : this.position, out);
  }

  @carbon.method @impl.implemented
  GetTargetPosition(out)
  {
    return copyOrReturn(this.GetShotMissed() ? this.#positionMiss : this.targetPosition, out);
  }

  @carbon.method @impl.adapted
  @impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")
  FindClosestLocator(source, out = vec3.create())
  {
    if (!this.#targetable) return -1;
    const locator = Number(this.#targetable.GetClosestDamageLocatorIndex?.(source) ?? -1) | 0;
    return this.#targetable.GetDamageLocatorPosition?.(locator, true, out) === false ? -1 : locator;
  }

  @carbon.method @impl.adapted
  @impl.reason("Targetable output parameters use CarbonEngineJS's out-last calling convention.")
  FindRandomValidLocator(source, out = vec3.create())
  {
    if (!this.#targetable) return -1;
    let locator = Number(this.#targetable.GetGoodDamageLocatorIndex?.(source) ?? -1) | 0;
    if (this.#targetable.GetDamageLocatorPosition?.(locator, true, out) !== false) return locator;
    locator = Number(this.#targetable.GetClosestDamageLocatorIndex?.(source) ?? -1) | 0;
    return this.#targetable.GetDamageLocatorPosition?.(locator, true, out) === false ? -1 : locator;
  }

  @carbon.method @impl.implemented
  SetBehaviour(laserMiss, projectileMiss, impactSize, impactBehaviour)
  {
    this.#laserMissBehaviour = !!laserMiss;
    this.#projectileMissBehaviour = !!projectileMiss;
    this.#impactSize = Number(impactSize);
    this.behaviour = Number(impactBehaviour) | 0;
  }

  @carbon.method @impl.implemented
  PopShotMissed()
  {
    this.#lastShotMissed = this.#missQueue.length ? this.#missQueue.shift() : false;
    return this.#lastShotMissed;
  }

  @carbon.method @impl.implemented
  GetShotMissed()
  {
    return this.#lastShotMissed;
  }

  @carbon.method @impl.adapted
  @impl.reason("An optional timestamp supports deterministic tests; otherwise browser wall-clock seconds replace BeOS actual time.")
  SetShotMissed(missed, timestamp = Date.now() / 1000)
  {
    this.#missQueue.push(!!missed);
    this.#lastShotTime = Number(timestamp);
    while (this.#missQueue.length > 4) this.#missQueue.shift();
  }

  @carbon.method @impl.implemented
  GetLastShotTime()
  {
    return this.#lastShotTime;
  }

  @carbon.method @impl.implemented
  MissQueueSize()
  {
    return this.#missQueue.length;
  }

  @carbon.method @impl.implemented
  GetRadius()
  {
    return Number(this.#targetable?.GetRadius?.() ?? -1);
  }

  @carbon.method @impl.implemented
  GetImpactConfiguration()
  {
    return this.#targetable?.GetImpactConfiguration?.() ?? EveTurretTarget.ImpactConfiguration.IMPACT_INVALID;
  }

  @carbon.method @impl.implemented
  ShowDestObject()
  {
    return !(this.#projectileMissBehaviour && this.GetShotMissed());
  }

  static ImpactBehaviour = Object.freeze({ DAMAGE_LOCATOR: 0, SHIELD_ELLIPSOID: 1, CENTER: 2 });
  static ImpactConfiguration = Object.freeze({ IMPACT_INVALID: 0, IMPACT_SHIELD: 1, IMPACT_ARMOR: 2, IMPACT_HULL: 3 });
  static #zero = vec3.create();
  static #direction = vec3.create();
  static #missDirection = vec3.create();
  static #worldPosition = vec3.create();
}

function getWorldPosition(object, out)
{
  const value = object?.GetWorldPosition?.(out) ?? object?.worldPosition ?? object?.position;
  if (value?.length >= 3 && value !== out) vec3.copy(out, value);
  return out;
}

function copyOrReturn(value, out)
{
  return out ? vec3.copy(out, value) : value;
}
