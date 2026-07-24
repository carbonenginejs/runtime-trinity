// Source: E:\carbonengine\trinity\trinity\Eve\Renderable\Stretch\EveLocalPositionCurve.h
// Source: E:\carbonengine\trinity\trinity\Eve\Renderable\Stretch\EveLocalPositionCurve.cpp
import { quat } from "@carbonenginejs/runtime-utils/quat";
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, schema, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({ className: "EveLocalPositionCurve", family: "eve/renderable/stretch" })
export class EveLocalPositionCurve extends CjsModel
{
  @io.persist @type.int32 @schema.enum("LocalPositionBehavior") behavior = 0;
  @io.readwrite @type.float32 impactSize = 1;
  @io.persist @type.float32 offset = 0;
  @io.persist @type.vec3 positionOffset = vec3.create();
  @io.persist @type.model("ITriVectorFunction") parentPositionCurve = null;
  @io.persist @type.model("ITriVectorFunction") alignPositionCurve = null;
  @io.persist @type.vec3 value = vec3.create();
  @io.persist @type.vec3 boundingSize = vec3.create();
  @io.readwrite @type.objectRef("ITriQuaternionFunction") parentRotationCurve = null;
  @io.readwrite @type.objectRef("IEveSpaceObject2") parent = null;
  @io.readwrite @type.objectRef("EveTurretSet") turretSetObject = null;
  @io.readwrite @type.int32 muzzleIndex = 0;
  @io.read @type.int32 damageLocatorIndex = -1;
  @io.readwrite @type.int32 locatorIndex = -1;
  @io.readwrite @type.string locatorSetName = "";

  #impactEffectIndex = -1;

  @carbon.method @impl.implemented
  __init__(behavior = EveLocalPositionCurve.LocalPositionBehavior.POS_NONE)
  {
    this.SetBehavior(behavior);
  }

  @carbon.method @impl.implemented
  SetBehavior(behavior)
  {
    this.behavior = Number(behavior) | 0;
  }

  @carbon.method @impl.adapted
  @impl.reason("Carbon overloads Be::Time and double; JavaScript has one numeric time domain and follows the org out-last convention.")
  Update(time, out = this.value)
  {
    switch (this.behavior)
    {
      case EveLocalPositionCurve.LocalPositionBehavior.POS_NEAREST_BOUNDING_POINT:
        return this.CalculateNearestBoundingPoint(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_CENTER_BOUNDING_POINT:
        return this.GetCenterBoundingSphere(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_TARGET_DMG_LOCATOR:
        return this.GetDamageLocator(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_TARGET_DMG_LOCATOR_IMPACT:
        return this.GetDamageLocatorImpact(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_OFFSET_POSITION:
        return this.CalculateOffsetPosition(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_OFFSET_PLANE_ROTATION:
        return this.CalculateOffsetPlaneRotation(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_NEAREST_FIRING_LOCATOR:
        return this.GetNearestFiringLocator(time, out);
      case EveLocalPositionCurve.LocalPositionBehavior.POS_ACTIVE_TURRET:
        return this.GetFiringTurretPosition(time, out);
      default:
        vec3.copy(this.value, out);
        return out;
    }
  }

  @carbon.method @impl.adapted
  @impl.reason("JavaScript uses CarbonEngineJS's standard time-first, out-last curve convention.")
  GetValueAt(time, out = vec3.create())
  {
    vec3.copy(out, this.value);
    return this.Update(time, out);
  }

  @carbon.method @impl.implemented
  GetValueDotAt(_time, out = vec3.create())
  {
    return out;
  }

  @carbon.method @impl.implemented
  GetValueDoubleDotAt(_time, out = vec3.create())
  {
    return out;
  }

  @carbon.method @impl.adapted
  @impl.reason("Vector3d is represented by any three-element numeric output buffer in JavaScript.")
  InterpolatedPosition(_time, out = new Float64Array(3))
  {
    out[0] = this.value[0];
    out[1] = this.value[1];
    out[2] = this.value[2];
    return out;
  }

  CalculateOffsetPosition(time, out)
  {
    vec3.copy(out, this.positionOffset);
    if (this.parentRotationCurve)
    {
      sampleQuaternion(this.parentRotationCurve, time, EveLocalPositionCurve.#rotation);
      vec3.transformQuat(out, out, EveLocalPositionCurve.#rotation);
    }
    if (this.parentPositionCurve)
    {
      sampleVector(this.parentPositionCurve, time, EveLocalPositionCurve.#parentPosition);
      vec3.add(out, out, EveLocalPositionCurve.#parentPosition);
    }
    return out;
  }

  CalculateOffsetPlaneRotation(time, out)
  {
    sampleVector(this.parentPositionCurve, time, EveLocalPositionCurve.#parentPosition);
    if (this.alignPositionCurve) sampleVector(this.alignPositionCurve, time, out);
    else vec3.copy(out, this.positionOffset);

    const length = vec3.distance(out, EveLocalPositionCurve.#parentPosition);
    out[1] = EveLocalPositionCurve.#parentPosition[1];
    vec3.subtract(EveLocalPositionCurve.#direction, out, EveLocalPositionCurve.#parentPosition);
    if (vec3.squaredLength(EveLocalPositionCurve.#direction))
    {
      vec3.normalize(EveLocalPositionCurve.#direction, EveLocalPositionCurve.#direction);
      vec3.scaleAndAdd(out, EveLocalPositionCurve.#parentPosition, EveLocalPositionCurve.#direction, length);
    }
    return out;
  }

  CalculateNearestBoundingPoint(time, out)
  {
    if (!(this.parentPositionCurve && this.alignPositionCurve && this.parentRotationCurve))
    {
      if (this.parentPositionCurve) sampleVector(this.parentPositionCurve, time, out);
      return out;
    }

    const parentPosition = EveLocalPositionCurve.#parentPosition;
    const alignedPosition = EveLocalPositionCurve.#alignedPosition;
    const direction = EveLocalPositionCurve.#direction;
    sampleVector(this.parentPositionCurve, time, parentPosition);
    sampleVector(this.alignPositionCurve, time, alignedPosition);
    sampleQuaternion(this.parentRotationCurve, time, EveLocalPositionCurve.#rotation);
    vec3.normalize(direction, vec3.subtract(direction, alignedPosition, parentPosition));

    quat.normalize(EveLocalPositionCurve.#rotation, EveLocalPositionCurve.#rotation);
    quat.invert(EveLocalPositionCurve.#rotation, EveLocalPositionCurve.#rotation);
    vec3.transformQuat(EveLocalPositionCurve.#localDirection, direction, EveLocalPositionCurve.#rotation);
    let scale = this.offset;
    const [a, b, c] = this.boundingSize;
    if (a > 10 && b > 10 && c > 10)
    {
      const [x, y, z] = EveLocalPositionCurve.#localDirection;
      const denominator = Math.sqrt(x * x * b * b * c * c + y * y * a * a * c * c + z * z * a * a * b * b);
      if (denominator) scale += Math.abs(a * b * c / denominator);
    }
    return vec3.scaleAndAdd(out, parentPosition, direction, scale);
  }

  GetCenterBoundingSphere(time, out)
  {
    this.parent?.UpdateModelCenterWorldPosition?.(time, out);
    return out;
  }

  GetDamageLocator(time, out)
  {
    if (!(this.alignPositionCurve && this.parent)) return out;
    if (this.damageLocatorIndex === -1)
    {
      sampleVector(this.alignPositionCurve, time, EveLocalPositionCurve.#parentPosition);
      this.damageLocatorIndex = Number(this.parent.GetGoodDamageLocatorIndex?.(EveLocalPositionCurve.#parentPosition) ?? -1) | 0;
    }
    this.parent.GetDamageLocatorPosition?.(this.damageLocatorIndex, true, out);
    return out;
  }

  GetDamageLocatorImpact(time, out)
  {
    if (!(this.alignPositionCurve && this.parent)) return out;
    sampleVector(this.alignPositionCurve, time, EveLocalPositionCurve.#parentPosition);
    if (this.damageLocatorIndex === -1)
    {
      this.damageLocatorIndex = Number(this.parent.GetGoodDamageLocatorIndex?.(EveLocalPositionCurve.#parentPosition) ?? -1) | 0;
    }
    this.parent.GetDamageLocatorPosition?.(this.damageLocatorIndex, true, out);
    vec3.subtract(EveLocalPositionCurve.#direction, EveLocalPositionCurve.#parentPosition, out);
    if (this.#impactEffectIndex === -1)
    {
      this.#impactEffectIndex = Number(this.parent.CreateImpact?.(this.damageLocatorIndex, EveLocalPositionCurve.#direction, 2, this.impactSize) ?? -1) | 0;
    }
    this.parent.UpdateImpact?.(out, EveLocalPositionCurve.#direction, this.#impactEffectIndex);
    return out;
  }

  GetNearestFiringLocator(_time, out)
  {
    if (this.parent && this.locatorIndex !== -1 && this.locatorSetName)
    {
      this.parent.GetLocatorPosition?.(this.locatorIndex, true, this.locatorSetName, out);
    }
    return out;
  }

  GetFiringTurretPosition(_time, out)
  {
    const transform = this.turretSetObject?.GetFiringBoneWorldTransform?.(this.muzzleIndex);
    if (transform?.length === 16) vec3.set(out, transform[12], transform[13], transform[14]);
    return out;
  }

  static LocalPositionBehavior = Object.freeze({
    POS_NONE: 0,
    POS_NEAREST_BOUNDING_POINT: 1,
    POS_CENTER_BOUNDING_POINT: 2,
    POS_TARGET_DMG_LOCATOR: 3,
    POS_TARGET_DMG_LOCATOR_IMPACT: 4,
    POS_OFFSET_POSITION: 5,
    POS_OFFSET_PLANE_ROTATION: 6,
    POS_NEAREST_FIRING_LOCATOR: 7,
    POS_ACTIVE_TURRET: 8,
    POS_COUNT: 9
  });

  static #parentPosition = vec3.create();
  static #alignedPosition = vec3.create();
  static #direction = vec3.create();
  static #localDirection = vec3.create();
  static #rotation = quat.create();
}

function sampleVector(curve, time, out)
{
  if (!curve) return out;
  if (curve.GetValueAt) curve.GetValueAt(time, out);
  else if (curve.Update) curve.Update(time, out);
  else if (curve.value?.length >= 3) vec3.copy(out, curve.value);
  return out;
}

function sampleQuaternion(curve, time, out)
{
  if (curve.GetValueAt) curve.GetValueAt(time, out);
  else if (curve.Update) curve.Update(time, out);
  else if (curve.value?.length >= 4) quat.copy(out, curve.value);
  return out;
}
