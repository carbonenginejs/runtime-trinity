const VS_FIELDS = Object.freeze(new Set(["worldTransform", "worldTransformLast", "invWorldTransform", "shipData", "clipData", "ellpsoidRadii", "ellpsoidCenter", "customMaskMatrix", "customMaskData", "boneOffsets", "morphTargetVertexDataOffset", "morphTargetAnimationDataOffset", "activeMorphTargetsCount", "bakedMorphTargetVertexDataOffset", "customData"]));
const PS_FIELDS = Object.freeze(new Set(["worldTransform", "worldTransformLast", "invWorldTransform", "shipData", "clipSphereCenter", "clipRadiusSq", "clipRadius2Sq", "impactDataOffset", "clipSphereFactor2", "clipSphereFactor", "shLightingCoefficients", "customMaskMaterialIDs", "customMaskTargets", "customMaskClamps", "screenSize", "customData"]));
const SHARED_VS_FIELDS = Object.freeze(["clipData", "ellpsoidRadii", "ellpsoidCenter", "customMaskMatrix", "customMaskData", "boneOffsets", "morphTargetVertexDataOffset", "morphTargetAnimationDataOffset", "activeMorphTargetsCount", "bakedMorphTargetVertexDataOffset", "customData"]);
const SHARED_PS_FIELDS = Object.freeze(["clipSphereCenter", "clipRadiusSq", "clipRadius2Sq", "impactDataOffset", "clipSphereFactor2", "clipSphereFactor", "customMaskMaterialIDs", "customMaskTargets", "customMaskClamps", "screenSize", "customData"]);
function fail(message) {
  const error = new Error(`Eve space-object Main value extraction: ${message}`);
  error.code = "CJS_TRINITY_SPACE_OBJECT_MAIN_VALUES_INVALID";
  throw error;
}
function isObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function cloneNumericValue(value, label) {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) fail(`${label} must be finite`);
    return value;
  }
  if (Array.isArray(value) || ArrayBuffer.isView(value)) {
    if (typeof value.length !== "number") fail(`${label} must be a numeric array`);
    return Object.freeze(Array.from(value, (entry, index) => cloneNumericValue(entry, `${label}[${index}]`)));
  }
  fail(`${label} must be numeric data`);
}
function requiredVector(value, count, label) {
  if (!Array.isArray(value) && !ArrayBuffer.isView(value) || value.length !== count) {
    fail(`${label} must contain exactly ${count} values`);
  }
  return cloneNumericValue(value, label);
}
function copyFields(source, names, target, owner) {
  if (source == null) return;
  if (!isObject(source)) fail(`${owner} must be an object`);
  for (const name of names) {
    if (Object.prototype.hasOwnProperty.call(source, name) && source[name] != null) {
      target[name] = cloneNumericValue(source[name], `${owner}.${name}`);
    }
  }
}
function applyOverrides(source, allowed, target, owner) {
  if (source == null) return;
  if (!isObject(source)) fail(`${owner} must be an object`);
  for (const [name, value] of Object.entries(source)) {
    if (!allowed.has(name)) fail(`${owner}.${name} is not a supported Main semantic`);
    if (value != null) target[name] = cloneNumericValue(value, `${owner}.${name}`);
  }
}
function identityMatrix() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function zeroVector() {
  return [0, 0, 0, 0];
}
function extractCustomMasks(object) {
  const masks = object.customMasks;
  if (masks == null) return null;
  if (!Array.isArray(masks)) fail("object.customMasks must be an array");
  if (masks.length === 0) return null;
  if (masks.length > 2) fail("object.customMasks cannot contain more than two Main mask slots");
  const vs = {
    customMaskMatrix: [identityMatrix(), identityMatrix()],
    customMaskData: [zeroVector(), zeroVector()]
  };
  const ps = {
    customMaskMaterialIDs: [zeroVector(), zeroVector()],
    customMaskTargets: [zeroVector(), zeroVector()],
    customMaskClamps: zeroVector()
  };
  for (let index = 0; index < masks.length; index++) {
    const mask = masks[index];
    if (!mask || typeof mask.FillPerObjectData !== "function" || mask.FillPerObjectData(index, vs, ps) !== true) {
      fail(`object.customMasks[${index}] could not fill Main per-object data`);
    }
  }
  return {
    vs,
    ps
  };
}

/**
 * Extracts only the proven object-side Main semantics. Per-frame state stays
 * renderer-owned, while shipData remains an explicit caller requirement.
 *
 * @param {object} options Extraction inputs.
 * @returns {{perObjectVS: object, perObjectPS: object}} Frozen plain values.
 */
function createEveSpaceObjectMainPerObjectValues(options = {}) {
  if (!isObject(options)) fail("options must be an object");
  const {
    object,
    shared = null,
    shipData,
    vsOverrides = null,
    psOverrides = null
  } = options;
  if (!isObject(object)) fail("object is required");
  const worldTransform = requiredVector(object.worldTransform, 16, "object.worldTransform");
  const worldTransformLast = requiredVector(object.lastWorldTransform, 16, "object.lastWorldTransform");
  const invWorldTransform = requiredVector(object.inverseWorldTransform, 16, "object.inverseWorldTransform");
  const requiredShipData = requiredVector(shipData, 4, "shipData");
  const perObjectVS = {
    worldTransform,
    worldTransformLast,
    invWorldTransform,
    shipData: requiredShipData
  };
  const perObjectPS = {
    worldTransform,
    worldTransformLast,
    invWorldTransform,
    shipData: requiredShipData
  };
  if (Object.prototype.hasOwnProperty.call(object, "clipSphereCenter")) {
    perObjectPS.clipSphereCenter = cloneNumericValue(object.clipSphereCenter, "object.clipSphereCenter");
  }
  if (Object.prototype.hasOwnProperty.call(object, "clipSphereFactor2")) {
    perObjectPS.clipSphereFactor2 = cloneNumericValue(object.clipSphereFactor2, "object.clipSphereFactor2");
  }
  if (Object.prototype.hasOwnProperty.call(object, "clipSphereFactor")) {
    perObjectPS.clipSphereFactor = cloneNumericValue(object.clipSphereFactor, "object.clipSphereFactor");
  }
  const masks = extractCustomMasks(object);
  if (masks) {
    copyFields(masks.vs, ["customMaskMatrix", "customMaskData"], perObjectVS, "customMasks.vs");
    copyFields(masks.ps, ["customMaskMaterialIDs", "customMaskTargets", "customMaskClamps"], perObjectPS, "customMasks.ps");
  }
  copyFields(shared, SHARED_VS_FIELDS, perObjectVS, "shared");
  copyFields(shared, SHARED_PS_FIELDS, perObjectPS, "shared");
  if (shared && Object.prototype.hasOwnProperty.call(shared, "shLighting") && shared.shLighting != null) {
    perObjectPS.shLightingCoefficients = cloneNumericValue(shared.shLighting, "shared.shLighting");
  }
  if (shared && Object.prototype.hasOwnProperty.call(shared, "shLightingCoefficients") && shared.shLightingCoefficients != null) {
    if (Object.prototype.hasOwnProperty.call(shared, "shLighting") && shared.shLighting != null) {
      fail("shared cannot provide both shLighting and shLightingCoefficients");
    }
    perObjectPS.shLightingCoefficients = cloneNumericValue(shared.shLightingCoefficients, "shared.shLightingCoefficients");
  }
  applyOverrides(vsOverrides, VS_FIELDS, perObjectVS, "vsOverrides");
  applyOverrides(psOverrides, PS_FIELDS, perObjectPS, "psOverrides");
  return Object.freeze({
    perObjectVS: Object.freeze(perObjectVS),
    perObjectPS: Object.freeze(perObjectPS)
  });
}

export { createEveSpaceObjectMainPerObjectValues };
//# sourceMappingURL=createEveSpaceObjectMainPerObjectValues.js.map
