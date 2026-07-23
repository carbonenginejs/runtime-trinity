import { CjsModel } from '@carbonenginejs/core-types/model';

class CjsParameter extends CjsModel {
  static isScalarDestination(value) {
    return typeof value === "function" || CjsParameter.isNumberHolder(value) || CjsParameter.isWritableNumberArray(value, 1);
  }
  static readScalarDestination(destination, fallback) {
    if (typeof destination === "function") {
      return fallback;
    }
    if (CjsParameter.isNumberHolder(destination)) {
      return Number(destination.value);
    }
    return Number(destination[0]);
  }
  static writeScalarDestination(destination, value) {
    if (typeof destination === "function") {
      destination(value);
      return;
    }
    if (CjsParameter.isNumberHolder(destination)) {
      destination.value = value;
      return;
    }
    destination[0] = value;
  }
  static notifyBindings(bindings, destination) {
    for (const binding of bindings) {
      if (typeof binding === "function") {
        binding(destination);
      } else {
        binding.RerouteDestination?.(destination);
      }
    }
  }
  static registerBinding(bindings, binding) {
    if (!bindings.includes(binding)) {
      bindings.push(binding);
    }
  }
  static unregisterBinding(bindings, binding) {
    const index = bindings.indexOf(binding);
    if (index >= 0) {
      bindings.splice(index, 1);
    }
  }
  static hasEffectConstant(effectRes, name) {
    return !!CjsParameter.getEffectConstant(effectRes, name);
  }
  static getEffectConstant(effectRes, name) {
    const reader = effectRes;
    return reader?.GetConstant?.(name) ?? reader?.getConstant?.(name) ?? null;
  }
  static hasEffectResource(effectRes, name) {
    const reader = effectRes;
    return !!(reader?.GetResource?.(name) ?? reader?.getResource?.(name));
  }
  static getEffectResource(effectRes, name) {
    const reader = effectRes;
    return reader?.GetResource?.(name) ?? reader?.getResource?.(name) ?? null;
  }
  static getEffectAnnotations(effectRes, name) {
    const reader = effectRes;
    return reader?.GetParameterAnnotations?.(name) ?? reader?.getParameterAnnotations?.(name) ?? null;
  }
  static getNamedValue(value) {
    return value?.GetParameterName?.() ?? value?.getParameterName?.() ?? value?.name ?? "";
  }
  static getArrayItemName(value) {
    return typeof value === "string" ? value : value?.name ?? value?.key ?? "";
  }
  static findByName(values, name) {
    return Array.isArray(values) ? values.find(value => CjsParameter.getArrayItemName(value) === name || CjsParameter.getNamedValue(value) === name) ?? null : null;
  }
  static markMaterialResourcesDirty(material) {
    material?.InvalidateResourceSets?.();
    material?.ResourceChanged?.();
    material?.MarkConstantBuffersDirty?.();
  }
  static getConstantIsSrgb(constant) {
    const data = constant;
    return !!(data?.isSRGB ?? data?.isSrgb ?? data?.srgb);
  }

  // --- Content hashing (Carbon CcpHashFNV1) -------------------------------
  // Carbon hashes interned name POINTERS and value struct bytes; JS hashes
  // the name characters and float32 value bytes instead. The dedup contract
  // (equal content -> equal hash within a session) is preserved; the numeric
  // hashes intentionally differ from Carbon's, which are address-dependent.

  static FNV1_INITIAL = 2166136261;

  /** FNV1 over a string's UTF-16 code units, two bytes each, little-endian. */
  static hashFnv1String(text, hash = CjsParameter.FNV1_INITIAL) {
    const value = String(text ?? "");
    for (let index = 0; index < value.length; index++) {
      const code = value.charCodeAt(index);
      hash = (Math.imul(hash, 16777619) ^ code & 0xff) >>> 0;
      hash = (Math.imul(hash, 16777619) ^ code >>> 8) >>> 0;
    }
    return hash >>> 0;
  }

  /** FNV1 over numbers encoded as little-endian float32 bytes. */
  static hashFnv1Floats(values, hash = CjsParameter.FNV1_INITIAL) {
    const view = CjsParameter.#hashScratch;
    for (const value of values) {
      view.setFloat32(0, Number(value) || 0, true);
      for (let byte = 0; byte < 4; byte++) {
        hash = (Math.imul(hash, 16777619) ^ view.getUint8(byte)) >>> 0;
      }
    }
    return hash >>> 0;
  }

  /**
   * FNV1 over a stable per-object identity - the JS stand-in for Carbon
   * hashing a smart-pointer address. Null hashes as identity 0.
   */
  static hashFnv1Identity(object, hash = CjsParameter.FNV1_INITIAL) {
    let id = 0;
    if (object !== null && object !== undefined) {
      id = CjsParameter.#identities.get(object);
      if (id === undefined) {
        id = CjsParameter.#nextIdentity++;
        CjsParameter.#identities.set(object, id);
      }
    }
    const view = CjsParameter.#hashScratch;
    view.setUint32(0, id >>> 0, true);
    for (let byte = 0; byte < 4; byte++) {
      hash = (Math.imul(hash, 16777619) ^ view.getUint8(byte)) >>> 0;
    }
    return hash >>> 0;
  }
  static #hashScratch = new DataView(new ArrayBuffer(4));
  static #identities = new WeakMap();
  static #nextIdentity = 1;
  static isNumberHolder(value) {
    return typeof value === "object" && value !== null && "value" in value && typeof value.value === "number";
  }
  static isWritableNumberArray(value, length) {
    return !!value && typeof value === "object" && "length" in value && Number(value.length) >= length;
  }
  static isNumberArrayValue(value, length) {
    if (!value || typeof value !== "object" || Number(value.length) !== length) return false;
    if (!Array.isArray(value) && !ArrayBuffer.isView(value)) return false;
    for (let index = 0; index < length; index++) {
      if (typeof value[index] !== "number") return false;
    }
    return true;
  }
}

export { CjsParameter };
//# sourceMappingURL=CjsParameter.js.map
