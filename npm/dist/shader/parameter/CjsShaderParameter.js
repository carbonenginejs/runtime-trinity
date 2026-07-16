import { CjsModel } from '@carbonenginejs/core-types/model';

class CjsShaderParameter extends CjsModel {
  static isScalarDestination(value) {
    return typeof value === "function" || CjsShaderParameter.isNumberHolder(value) || CjsShaderParameter.isWritableNumberArray(value, 1);
  }
  static readScalarDestination(destination, fallback) {
    if (typeof destination === "function") {
      return fallback;
    }
    if (CjsShaderParameter.isNumberHolder(destination)) {
      return Number(destination.value);
    }
    return Number(destination[0]);
  }
  static writeScalarDestination(destination, value) {
    if (typeof destination === "function") {
      destination(value);
      return;
    }
    if (CjsShaderParameter.isNumberHolder(destination)) {
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
    return !!CjsShaderParameter.getEffectConstant(effectRes, name);
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
    return Array.isArray(values) ? values.find(value => CjsShaderParameter.getArrayItemName(value) === name || CjsShaderParameter.getNamedValue(value) === name) ?? null : null;
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
class CjsShaderVectorParameter extends CjsShaderParameter {
  static isVectorDestination(value, length) {
    return CjsShaderVectorParameter.isWritableNumberArray(value, length);
  }
  static readVectorDestination(destination, out, length) {
    for (let i = 0; i < length; i++) {
      out[i] = destination[i];
    }
    return out;
  }
  static writeVectorDestination(destination, value, length) {
    for (let i = 0; i < length; i++) {
      destination[i] = value[i];
    }
  }
  static copyNumberArray(out, value, length) {
    for (let i = 0; i < length; i++) {
      out[i] = value[i];
    }
    return out;
  }
}

export { CjsShaderParameter, CjsShaderVectorParameter };
//# sourceMappingURL=CjsShaderParameter.js.map
