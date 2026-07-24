import { mat4 } from '@carbonenginejs/runtime-utils/mat4';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';

function getTime(context) {
  if (typeof context === "number") return context;
  return Number(context?.GetTime?.() ?? context?.currentTime ?? context?.time ?? 0);
}
function getDeltaTime(context) {
  if (typeof context === "number") return context;
  return Number(context?.GetDeltaT?.() ?? context?.deltaTime ?? context?.deltaT ?? 0);
}
function getOriginShift(context) {
  return context?.GetOriginShift?.() ?? context?.originShift ?? CjsStretchRuntime.ZERO;
}
function sampleVector(curve, time, out) {
  if (!curve) return out;
  if (typeof curve.Update === "function") curve.Update(time, out);else if (typeof curve.UpdateValue === "function") curve.UpdateValue(time, out);else if (typeof curve.GetValueAt === "function") curve.GetValueAt(time, out);else if (curve.value?.length >= 3) vec3.copy(out, curve.value);
  return out;
}
function updateCurveSet(curveSet, time) {
  if (!curveSet) return;
  if (typeof curveSet.Update === "function") curveSet.Update(time, time);else curveSet.UpdateDelta?.(time);
}
function getCurveDuration(value) {
  if (!value) return 0;
  return Number(value.GetMaxCurveDuration?.() ?? value.GetCurveDuration?.() ?? value.duration ?? 0);
}
function updateChildSync(child, context, params) {
  if (!child) return;
  if (typeof child.UpdateSynchronous === "function") child.UpdateSynchronous(context, params);else if (typeof child.UpdateSyncronous === "function") child.UpdateSyncronous(context, params);else child.UpdateEffectSync?.(context, params);
}
function updateChildAsync(child, context, params) {
  if (!child) return;
  if (typeof child.UpdateAsynchronous === "function") child.UpdateAsynchronous(context, params);else if (typeof child.UpdateAsyncronous === "function") child.UpdateAsyncronous(context, params);else if (typeof child.UpdateEffectAsync === "function") child.UpdateEffectAsync(context, params);else child.Update?.(context, params);
}
function updateChildVisibility(child, context, transform) {
  if (!child) return;
  if (typeof child.UpdateVisibility === "function") child.UpdateVisibility(context, transform);else child.UpdateViewDependentData?.(transform, context);
}
function collectRenderables(child, out) {
  if (!child) return out;
  if (typeof child.GetRenderables === "function") child.GetRenderables(out);else if (typeof child.GetBatches === "function") out.push(child);
  return out;
}
function makeEndpointTransforms(sourcePosition, destinationPosition, source, destination) {
  const direction = CjsStretchRuntime.DIRECTION;
  const up = CjsStretchRuntime.UP;
  const xAxis = CjsStretchRuntime.X;
  const yAxis = CjsStretchRuntime.Y;
  vec3.subtract(direction, destinationPosition, sourcePosition);
  if (vec3.squaredLength(direction) <= Number.EPSILON) vec3.set(direction, 0, 0, 1);else vec3.normalize(direction, direction);
  const ax = Math.abs(direction[0]);
  const ay = Math.abs(direction[1]);
  const az = Math.abs(direction[2]);
  if (ax < ay && ax < az) vec3.set(up, 1, 0, 0);else if (ay < ax && ay < az) vec3.set(up, 0, 1, 0);else vec3.set(up, 0, 0, 1);
  vec3.normalize(xAxis, vec3.cross(xAxis, up, direction));
  vec3.cross(yAxis, xAxis, direction);
  writeBasis(source, xAxis, yAxis, direction, sourcePosition);
  vec3.negate(xAxis, xAxis);
  vec3.negate(direction, direction);
  writeBasis(destination, xAxis, yAxis, direction, destinationPosition);
  return source;
}
function makeStretchTransform(sourcePosition, destinationPosition, out, negativeZ = false) {
  makeEndpointTransforms(sourcePosition, destinationPosition, out, CjsStretchRuntime.MATRIX);
  const length = vec3.distance(sourcePosition, destinationPosition) * (negativeZ ? -1 : 1);
  out[8] *= length;
  out[9] *= length;
  out[10] *= length;
  return out;
}
function translationMatrix(position, out = mat4.create(), scale = 1) {
  mat4.identity(out);
  out[0] = out[5] = out[10] = scale;
  out[12] = position[0];
  out[13] = position[1];
  out[14] = position[2];
  return out;
}
function mergeSphere(out, sphere) {
  if (!(sphere?.[3] >= 0)) return out;
  if (!(out[3] > 0)) {
    out.set(sphere);
    return out;
  }
  const dx = sphere[0] - out[0];
  const dy = sphere[1] - out[1];
  const dz = sphere[2] - out[2];
  const distance = Math.hypot(dx, dy, dz);
  if (out[3] >= distance + sphere[3]) return out;
  if (sphere[3] >= distance + out[3]) {
    out.set(sphere);
    return out;
  }
  const radius = (distance + out[3] + sphere[3]) * 0.5;
  const amount = distance ? (radius - out[3]) / distance : 0;
  out[0] += dx * amount;
  out[1] += dy * amount;
  out[2] += dz * amount;
  out[3] = radius;
  return out;
}
function writeBasis(out, xAxis, yAxis, zAxis, translation) {
  mat4.identity(out);
  out[0] = xAxis[0];
  out[1] = xAxis[1];
  out[2] = xAxis[2];
  out[4] = yAxis[0];
  out[5] = yAxis[1];
  out[6] = yAxis[2];
  out[8] = zAxis[0];
  out[9] = zAxis[1];
  out[10] = zAxis[2];
  out[12] = translation[0];
  out[13] = translation[1];
  out[14] = translation[2];
  return out;
}
const CjsStretchRuntime = Object.freeze({
  ZERO: vec3.create(),
  DIRECTION: vec3.create(),
  UP: vec3.create(),
  X: vec3.create(),
  Y: vec3.create(),
  MATRIX: mat4.create()
});

export { collectRenderables, getCurveDuration, getDeltaTime, getOriginShift, getTime, makeEndpointTransforms, makeStretchTransform, mergeSphere, sampleVector, translationMatrix, updateChildAsync, updateChildSync, updateChildVisibility, updateCurveSet };
//# sourceMappingURL=CjsStretchRuntime.js.map
