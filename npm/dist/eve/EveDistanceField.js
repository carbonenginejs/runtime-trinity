import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2CurveInterpolation, Tr2CurveTangentType } from '../curves/enums.js';
import { Tr2CurveScalar as _Tr2CurveScalar } from '../curves/Tr2CurveScalar.js';
import { TriCurveSet as _TriCurveSet } from '../curves/TriCurveSet.js';

let _initProto, _initClass, _init_dimensions, _init_extra_dimensions, _init_midpoint, _init_extra_midpoint, _init_distanceThreshold, _init_extra_distanceThreshold, _init_maxXZRatio, _init_extra_maxXZRatio, _init_minYRatio, _init_extra_minYRatio, _init_timeAdjustmentSecondsIn, _init_extra_timeAdjustmentSecondsIn, _init_timeAdjustmentSecondsOut, _init_extra_timeAdjustmentSecondsOut, _init_objects, _init_extra_objects, _init_cameraView, _init_extra_cameraView, _init_curveSet, _init_extra_curveSet, _init_distance, _init_extra_distance, _init_minDistance, _init_extra_minDistance, _init_maxDistance, _init_extra_maxDistance;
let _EveDistanceField;
new class extends _identity {
  static [class EveDistanceField extends CjsModel {
    static {
      ({
        e: [_init_dimensions, _init_extra_dimensions, _init_midpoint, _init_extra_midpoint, _init_distanceThreshold, _init_extra_distanceThreshold, _init_maxXZRatio, _init_extra_maxXZRatio, _init_minYRatio, _init_extra_minYRatio, _init_timeAdjustmentSecondsIn, _init_extra_timeAdjustmentSecondsIn, _init_timeAdjustmentSecondsOut, _init_extra_timeAdjustmentSecondsOut, _init_objects, _init_extra_objects, _init_cameraView, _init_extra_cameraView, _init_curveSet, _init_extra_curveSet, _init_distance, _init_extra_distance, _init_minDistance, _init_extra_minDistance, _init_maxDistance, _init_extra_maxDistance, _initProto],
        c: [_EveDistanceField, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveDistanceField",
        family: "eve"
      })], [[[io, io.read, type, type.vec3], 16, "dimensions"], [[io, io.read, type, type.vec3], 16, "midpoint"], [[io, io.readwrite, type, type.float32], 16, "distanceThreshold"], [[io, io.readwrite, type, type.float32], 16, "maxXZRatio"], [[io, io.readwrite, type, type.float32], 16, "minYRatio"], [[io, io.readwrite, type, type.float32], 16, "timeAdjustmentSecondsIn"], [[io, io.readwrite, type, type.float32], 16, "timeAdjustmentSecondsOut"], [[io, io.notify, io, io.read, void 0, type.list("ITriVectorFunction")], 16, "objects"], [[io, io.readwrite, void 0, type.objectRef("TriView")], 16, "cameraView"], [[io, io.readwrite, void 0, type.objectRef("TriCurveSet")], 16, "curveSet"], [[io, io.readwrite, type, type.float32], 16, "distance"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "minDistance"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "maxDistance"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetupStaticDistanceField"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetupDynamicDistanceField"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnListModified"], [[carbon, carbon.method, impl, impl.noop], 18, "RenderDebugInfo"]], 0, void 0, CjsModel));
    }
    dimensions = (_initProto(this), _init_dimensions(this, vec3.create()));
    midpoint = (_init_extra_dimensions(this), _init_midpoint(this, vec3.create()));
    distanceThreshold = (_init_extra_midpoint(this), _init_distanceThreshold(this, 3));
    maxXZRatio = (_init_extra_distanceThreshold(this), _init_maxXZRatio(this, 1.5));
    minYRatio = (_init_extra_maxXZRatio(this), _init_minYRatio(this, 0.2));
    timeAdjustmentSecondsIn = (_init_extra_minYRatio(this), _init_timeAdjustmentSecondsIn(this, 0.25));
    timeAdjustmentSecondsOut = (_init_extra_timeAdjustmentSecondsIn(this), _init_timeAdjustmentSecondsOut(this, 2));
    objects = (_init_extra_timeAdjustmentSecondsOut(this), _init_objects(this, []));
    cameraView = (_init_extra_objects(this), _init_cameraView(this, null));
    curveSet = (_init_extra_cameraView(this), _init_curveSet(this, null));
    distance = (_init_extra_curveSet(this), _init_distance(this, -1));
    minDistance = (_init_extra_distance(this), _init_minDistance(this, 0));
    maxDistance = (_init_extra_minDistance(this), _init_maxDistance(this, 75000));
    #distanceCurve = (_init_extra_maxDistance(this), null);
    #dirty = true;
    #updateDistanceCurve = false;
    #isDynamic = false;
    SetupStaticDistanceField(dimensions, position, distanceThreshold, timeAdjustmentSecondsOut, timeAdjustmentSecondsIn) {
      this.#isDynamic = false;
      vec3.copy(this.dimensions, dimensions);
      vec3.copy(this.midpoint, position);
      this.distanceThreshold = distanceThreshold;
      this.timeAdjustmentSecondsIn = timeAdjustmentSecondsIn;
      this.timeAdjustmentSecondsOut = timeAdjustmentSecondsOut;
      this.#createCurveSet();
      this.#updateDistanceCurveSize();
    }
    SetupDynamicDistanceField(distanceThreshold, timeAdjustmentSecondsOut, timeAdjustmentSecondsIn) {
      this.#isDynamic = true;
      this.#dirty = true;
      this.distanceThreshold = distanceThreshold;
      this.timeAdjustmentSecondsIn = timeAdjustmentSecondsIn;
      this.timeAdjustmentSecondsOut = timeAdjustmentSecondsOut;
      this.#createCurveSet();
    }
    Update(updateContext) {
      const cameraPosition = _EveDistanceField.#getCameraPosition(this.cameraView);
      const time = _EveDistanceField.#getTime(updateContext);
      if (this.#updateDistanceCurve) {
        this.#updateDistanceCurveSize();
      }
      if (this.distance < 0) {
        this.distance = this.maxDistance;
      }
      const originShift = _EveDistanceField.#getOriginShift(updateContext);
      let distanceNow = this.maxDistance;
      if (this.#isDynamic) {
        distanceNow = this.#calculateFieldCoverageAndDistance(time, cameraPosition, originShift);
      } else {
        if (this.objects.length === 1) {
          _EveDistanceField.#sampleObject(this.objects[0], time, this.midpoint);
        } else {
          vec3.add(this.midpoint, this.midpoint, originShift);
        }
        distanceNow = Math.min(distanceNow, vec3.distance(this.midpoint, cameraPosition));
      }
      const fraction = distanceNow > this.distance ? this.timeAdjustmentSecondsOut : this.timeAdjustmentSecondsIn;
      const delta = Math.min(1, _EveDistanceField.#getDeltaT(updateContext) / (fraction || 1));
      this.distance = Math.min(this.distance * (1 - delta) + distanceNow * delta, this.maxDistance);
      if (this.curveSet) {
        if (!this.curveSet.IsPlaying()) {
          this.curveSet.PlayFrom(this.distance);
        } else {
          this.curveSet.Update(this.distance);
        }
      }
    }
    OnModified(properties = null) {
      if (CjsModel.hasModifiedProperty(properties, "minDistance") || CjsModel.hasModifiedProperty(properties, "maxDistance")) {
        this.#updateDistanceCurve = true;
      }
      return true;
    }
    OnListModified(event, _key = 0, _key2 = 0, _value = null, list = this.objects) {
      if (list !== this.objects) {
        return;
      }
      switch (event & 0x0f) {
        case 0x08:
          this.#dirty = true;
          break;
        case 0x09:
          if (this.objects.length === 0) {
            this.#setNeutralValues();
          }
          break;
      }
    }
    RenderDebugInfo() {}
    #createCurveSet() {
      this.curveSet = new _TriCurveSet();
      this.#distanceCurve = new _Tr2CurveScalar();
      this.#distanceCurve.SetName("DistanceCurve");
      this.#distanceCurve.AddKey(0, 1, Tr2CurveInterpolation.LINEAR, 0, 0, Tr2CurveTangentType.AUTO);
      this.#distanceCurve.AddKey(50000, 0, Tr2CurveInterpolation.LINEAR, 0, 0, Tr2CurveTangentType.AUTO);
      this.#distanceCurve.SetTimeOffset(0);
      this.curveSet.AddCurve(this.#distanceCurve);
    }
    #updateDistanceCurveSize() {
      const keys = this.#distanceCurve?.GetKeys?.() ?? [];
      if (keys.length === 2) {
        keys[0].time = this.minDistance;
        keys[1].time = this.maxDistance;
        this.#distanceCurve.OnKeysChanged();
      }
      this.#distanceCurve?.SetTimeOffset?.(0);
      this.#updateDistanceCurve = false;
    }
    #setNeutralValues() {
      vec3.zero(this.midpoint);
      vec3.zero(this.dimensions);
    }
    #calculateFieldCoverageAndDistance(time, cameraPosition, originShift) {
      if (this.objects.length === 0) {
        vec3.add(this.midpoint, this.midpoint, originShift);
        return vec3.length(cameraPosition);
      }
      const positions = this.objects.map(object => _EveDistanceField.#sampleObject(object, time, vec3.create()));
      const average = vec3.create();
      let distanceNowSq = this.maxDistance * this.maxDistance;
      for (const position of positions) {
        vec3.scaleAndAdd(average, average, position, 1 / positions.length);
        distanceNowSq = Math.min(distanceNowSq, vec3.squaredDistance(position, cameraPosition));
      }
      if (this.#dirty) {
        let averageDistance = 0;
        for (const position of positions) {
          averageDistance += vec3.distance(position, average) / positions.length;
        }
        const accepted = positions.filter(position => this.distanceThreshold === 0 || vec3.distance(position, average) <= this.distanceThreshold * averageDistance);
        const minBounds = vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        const maxBounds = vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
        for (const position of accepted) {
          vec3.min(minBounds, minBounds, position);
          vec3.max(maxBounds, maxBounds, position);
        }
        vec3.scale(this.midpoint, vec3.add(this.midpoint, minBounds, maxBounds), 0.5);
        vec3.subtract(this.dimensions, maxBounds, minBounds);
        if (this.maxXZRatio && this.dimensions[0] / this.dimensions[2] > this.maxXZRatio) {
          this.dimensions[2] = this.dimensions[0] / this.maxXZRatio;
        } else if (this.maxXZRatio && this.dimensions[2] / this.dimensions[0] > this.maxXZRatio) {
          this.dimensions[0] = this.dimensions[2] / this.maxXZRatio;
        }
        const horizontal = Math.max(this.dimensions[0], this.dimensions[2]);
        if (this.minYRatio && this.dimensions[1] / horizontal < this.minYRatio) {
          this.dimensions[1] = horizontal * this.minYRatio;
        }
        this.#dirty = false;
      } else {
        vec3.add(this.midpoint, this.midpoint, originShift);
      }
      return Math.sqrt(distanceNowSq);
    }
  }];
  #sampleObject(object, time, out) {
    const result = object?.GetValueAt?.(time, out);
    return result?.length >= 3 ? vec3.copy(out, result) : out;
  }
  #getCameraPosition(cameraView) {
    const direct = cameraView?.GetPosition?.();
    if (direct?.length >= 3) {
      return vec3.clone(direct);
    }
    const transform = cameraView?.GetTransform?.() ?? cameraView?.transform;
    return transform?.length >= 16 ? vec3.fromValues(transform[12], transform[13], transform[14]) : vec3.create();
  }
  #getTime(context) {
    return Number(context?.GetTime?.() ?? context?.currentTime ?? context?.time ?? 0);
  }
  #getDeltaT(context) {
    const direct = context?.GetDeltaT?.() ?? context?.deltaT;
    if (direct !== null && direct !== undefined) {
      return Number(direct) || 0;
    }
    const lastTime = Number(context?.lastTime ?? 0);
    return lastTime === 0 ? 0 : Number(context?.currentTime ?? 0) - lastTime;
  }
  #getOriginShift(context) {
    const value = context?.GetOriginShift?.() ?? context?.originShift;
    return value?.length >= 3 ? value : vec3.create();
  }
  constructor() {
    super(_EveDistanceField), _initClass();
  }
}();

export { _EveDistanceField as EveDistanceField };
//# sourceMappingURL=EveDistanceField.js.map
