// Source: E:\carbonengine\trinity\trinity\Eve\EveDistanceField.h
// Source: E:\carbonengine\trinity\trinity\Eve\EveDistanceField.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { Tr2CurveInterpolation, Tr2CurveTangentType } from "../curves/enums.js";
import { Tr2CurveScalar } from "../curves/Tr2CurveScalar.js";
import { TriCurveSet } from "../curves/TriCurveSet.js";


@type.define({
  className: "EveDistanceField",
  family: "eve"
})
export class EveDistanceField extends CjsModel
{
  @io.read
  @type.vec3
  dimensions = vec3.create();

  @io.read
  @type.vec3
  midpoint = vec3.create();

  @io.readwrite
  @type.float32
  distanceThreshold = 3;

  @io.readwrite
  @type.float32
  maxXZRatio = 1.5;

  @io.readwrite
  @type.float32
  minYRatio = 0.2;

  @io.readwrite
  @type.float32
  timeAdjustmentSecondsIn = 0.25;

  @io.readwrite
  @type.float32
  timeAdjustmentSecondsOut = 2;

  @io.notify
  @io.read
  @type.list("ITriVectorFunction")
  objects = [];

  @io.readwrite
  @type.objectRef("TriView")
  cameraView = null;

  @io.readwrite
  @type.objectRef("TriCurveSet")
  curveSet = null;

  @io.readwrite
  @type.float32
  distance = -1;

  @io.flag("distanceCurve")
  @io.notify
  @io.readwrite
  @type.float32
  minDistance = 0;

  @io.flag("distanceCurve")
  @io.notify
  @io.readwrite
  @type.float32
  maxDistance = 75000;

  #distanceCurve = null;

  #dirty = true;

  #updateDistanceCurve = false;

  #isDynamic = false;

  @carbon.method
  @impl.adapted
  SetupStaticDistanceField(dimensions, position, distanceThreshold, timeAdjustmentSecondsOut, timeAdjustmentSecondsIn)
  {
    this.#isDynamic = false;
    vec3.copy(this.dimensions, dimensions);
    vec3.copy(this.midpoint, position);
    this.distanceThreshold = distanceThreshold;
    this.timeAdjustmentSecondsIn = timeAdjustmentSecondsIn;
    this.timeAdjustmentSecondsOut = timeAdjustmentSecondsOut;
    this.#createCurveSet();
    this.#updateDistanceCurveSize();
  }

  @carbon.method
  @impl.implemented
  SetupDynamicDistanceField(distanceThreshold, timeAdjustmentSecondsOut, timeAdjustmentSecondsIn)
  {
    this.#isDynamic = true;
    this.#dirty = true;
    this.distanceThreshold = distanceThreshold;
    this.timeAdjustmentSecondsIn = timeAdjustmentSecondsIn;
    this.timeAdjustmentSecondsOut = timeAdjustmentSecondsOut;
    this.#createCurveSet();
  }

  @carbon.method
  @impl.adapted
  Update(updateContext)
  {
    const cameraPosition = EveDistanceField.#getCameraPosition(this.cameraView);
    const time = EveDistanceField.#getTime(updateContext);
    if (this.#updateDistanceCurve)
    {
      this.#updateDistanceCurveSize();
    }
    if (this.distance < 0)
    {
      this.distance = this.maxDistance;
    }
    const originShift = EveDistanceField.#getOriginShift(updateContext);
    let distanceNow = this.maxDistance;
    if (this.#isDynamic)
    {
      distanceNow = this.#calculateFieldCoverageAndDistance(time, cameraPosition, originShift);
    }
    else
    {
      if (this.objects.length === 1)
      {
        EveDistanceField.#sampleObject(this.objects[0], time, this.midpoint);
      }
      else
      {
        vec3.add(this.midpoint, this.midpoint, originShift);
      }
      distanceNow = Math.min(distanceNow, vec3.distance(this.midpoint, cameraPosition));
    }
    const fraction = distanceNow > this.distance ? this.timeAdjustmentSecondsOut : this.timeAdjustmentSecondsIn;
    const delta = Math.min(1, EveDistanceField.#getDeltaT(updateContext) / (fraction || 1));
    this.distance = Math.min(this.distance * (1 - delta) + distanceNow * delta, this.maxDistance);
    if (this.curveSet)
    {
      if (!this.curveSet.IsPlaying())
      {
        this.curveSet.PlayFrom(this.distance);
      }
      else
      {
        this.curveSet.Update(this.distance);
      }
    }
  }

  @carbon.method
  @impl.adapted
  OnModified(_options = {})
  {
    if (this.__state.flags.delete("distanceCurve"))
    {
      this.#updateDistanceCurve = true;
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  OnListModified(event, _key = 0, _key2 = 0, _value = null, list = this.objects)
  {
    if (list !== this.objects)
    {
      return;
    }
    switch (event & 0x0f)
    {
      case 0x08:
        this.#dirty = true;
        break;
      case 0x09:
        if (this.objects.length === 0)
        {
          this.#setNeutralValues();
        }
        break;
    }
  }

  @carbon.method
  @impl.noop
  RenderDebugInfo()
  {
  }

  #createCurveSet()
  {
    this.curveSet = new TriCurveSet();
    this.#distanceCurve = new Tr2CurveScalar();
    this.#distanceCurve.SetName("DistanceCurve");
    this.#distanceCurve.AddKey(0, 1, Tr2CurveInterpolation.LINEAR, 0, 0, Tr2CurveTangentType.AUTO);
    this.#distanceCurve.AddKey(50000, 0, Tr2CurveInterpolation.LINEAR, 0, 0, Tr2CurveTangentType.AUTO);
    this.#distanceCurve.SetTimeOffset(0);
    this.curveSet.AddCurve(this.#distanceCurve);
  }

  #updateDistanceCurveSize()
  {
    const keys = this.#distanceCurve?.GetKeys?.() ?? [];
    if (keys.length === 2)
    {
      keys[0].time = this.minDistance;
      keys[1].time = this.maxDistance;
      this.#distanceCurve.OnKeysChanged();
    }
    this.#distanceCurve?.SetTimeOffset?.(0);
    this.#updateDistanceCurve = false;
  }

  #setNeutralValues()
  {
    vec3.zero(this.midpoint);
    vec3.zero(this.dimensions);
  }

  #calculateFieldCoverageAndDistance(time, cameraPosition, originShift)
  {
    if (this.objects.length === 0)
    {
      vec3.add(this.midpoint, this.midpoint, originShift);
      return vec3.length(cameraPosition);
    }
    const positions = this.objects.map(object => EveDistanceField.#sampleObject(object, time, vec3.create()));
    const average = vec3.create();
    let distanceNowSq = this.maxDistance * this.maxDistance;
    for (const position of positions)
    {
      vec3.scaleAndAdd(average, average, position, 1 / positions.length);
      distanceNowSq = Math.min(distanceNowSq, vec3.squaredDistance(position, cameraPosition));
    }
    if (this.#dirty)
    {
      let averageDistance = 0;
      for (const position of positions)
      {
        averageDistance += vec3.distance(position, average) / positions.length;
      }
      const accepted = positions.filter(position => this.distanceThreshold === 0 || vec3.distance(position, average) <= this.distanceThreshold * averageDistance);
      const minBounds = vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
      const maxBounds = vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
      for (const position of accepted)
      {
        vec3.min(minBounds, minBounds, position);
        vec3.max(maxBounds, maxBounds, position);
      }
      vec3.scale(this.midpoint, vec3.add(this.midpoint, minBounds, maxBounds), 0.5);
      vec3.subtract(this.dimensions, maxBounds, minBounds);
      if (this.maxXZRatio && this.dimensions[0] / this.dimensions[2] > this.maxXZRatio)
      {
        this.dimensions[2] = this.dimensions[0] / this.maxXZRatio;
      }
      else if (this.maxXZRatio && this.dimensions[2] / this.dimensions[0] > this.maxXZRatio)
      {
        this.dimensions[0] = this.dimensions[2] / this.maxXZRatio;
      }
      const horizontal = Math.max(this.dimensions[0], this.dimensions[2]);
      if (this.minYRatio && this.dimensions[1] / horizontal < this.minYRatio)
      {
        this.dimensions[1] = horizontal * this.minYRatio;
      }
      this.#dirty = false;
    }
    else
    {
      vec3.add(this.midpoint, this.midpoint, originShift);
    }
    return Math.sqrt(distanceNowSq);
  }

  static #sampleObject(object, time, out)
  {
    const result = object?.GetValueAt?.(time, out);
    return result?.length >= 3 ? vec3.copy(out, result) : out;
  }

  static #getCameraPosition(cameraView)
  {
    const direct = cameraView?.GetPosition?.();
    if (direct?.length >= 3)
    {
      return vec3.clone(direct);
    }
    const transform = cameraView?.GetTransform?.() ?? cameraView?.transform;
    return transform?.length >= 16 ? vec3.fromValues(transform[12], transform[13], transform[14]) : vec3.create();
  }

  static #getTime(context)
  {
    return Number(context?.GetTime?.() ?? context?.currentTime ?? context?.time ?? 0);
  }

  static #getDeltaT(context)
  {
    const direct = context?.GetDeltaT?.() ?? context?.deltaT;
    if (direct !== null && direct !== undefined)
    {
      return Number(direct) || 0;
    }
    const lastTime = Number(context?.lastTime ?? 0);
    return lastTime === 0 ? 0 : Number(context?.currentTime ?? 0) - lastTime;
  }

  static #getOriginShift(context)
  {
    const value = context?.GetOriginShift?.() ?? context?.originShift;
    return value?.length >= 3 ? value : vec3.create();
  }
}
