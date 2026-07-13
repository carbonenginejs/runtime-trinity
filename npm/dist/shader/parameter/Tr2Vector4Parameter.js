import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { num } from '@carbonenginejs/core-math/num';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsShaderVectorParameter } from './CjsShaderParameter.js';

let _initProto, _initClass, _init_value, _init_extra_value, _init_isSrgb, _init_extra_isSrgb, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name;
let _Tr2Vector4Parameter;
class Tr2Vector4Parameter extends CjsShaderVectorParameter {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_isSrgb, _init_extra_isSrgb, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name, _initProto],
      c: [_Tr2Vector4Parameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Vector4Parameter",
      family: "shader"
    })], [[[io, io.persistOnly, type, type.vec4], 16, "value"], [[io, io.read, type, type.boolean], 16, "isSrgb"], [[io, io.read, type, type.boolean], 16, "usedByCurrentTechnique"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsRerouted"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "UnregisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"]], 0, void 0, CjsShaderVectorParameter));
  }
  value = (_initProto(this), _init_value(this, vec4.fromValues(1, 1, 1, 1)));
  isSrgb = (_init_extra_value(this), _init_isSrgb(this, false));
  usedByCurrentTechnique = (_init_extra_isSrgb(this), _init_usedByCurrentTechnique(this, false));
  usedByCurrentEffect = (_init_extra_usedByCurrentTechnique(this), _init_usedByCurrentEffect(this, false));
  name = (_init_extra_usedByCurrentEffect(this), _init_name(this, ""));
  linearValue = (_init_extra_name(this), vec4.fromValues(1, 1, 1, 1));
  #bindings = [];
  #reroutedValue = null;
  GetParameterName() {
    return this.name;
  }
  GetValue(out = this.value) {
    if (this.#reroutedValue) {
      CjsShaderVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 4);
    }
    return CjsShaderVectorParameter.copyNumberArray(out, this.value, 4);
  }
  SetValue(value) {
    CjsShaderVectorParameter.copyNumberArray(this.value, value, 4);
    this.#updateLinearValue();
    if (this.#reroutedValue) {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 4);
    }
  }
  IsRerouted() {
    return !this.isSrgb && this.#reroutedValue !== null;
  }
  SetDestination(dest, size = 16) {
    if (size >= 16 && !this.isSrgb && CjsShaderVectorParameter.isVectorDestination(dest, 4)) {
      this.#reroutedValue = dest;
      CjsShaderVectorParameter.writeVectorDestination(dest, this.value, 4);
    } else {
      this.#reroutedValue = null;
      this.#updateLinearValue();
    }
    CjsShaderVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }
  GetDestination() {
    return {
      dest: this.#reroutedValue ?? this.value,
      size: 16
    };
  }
  RegisterBinding(binding) {
    CjsShaderVectorParameter.registerBinding(this.#bindings, binding);
  }
  UnregisterBinding(binding) {
    CjsShaderVectorParameter.unregisterBinding(this.#bindings, binding);
  }
  RebuildEffectHandles(effectRes) {
    this.isSrgb = false;
    if (!effectRes && this.#reroutedValue) {
      this.SetDestination(null, 0);
    }
    const constant = this.name ? CjsShaderVectorParameter.getEffectConstant(effectRes, this.name) : null;
    const used = !!constant;
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
    this.isSrgb = CjsShaderVectorParameter.getConstantIsSrgb(constant);
    if (this.isSrgb) {
      this.SetDestination(null, 0);
    }
    this.#updateLinearValue();
  }
  Initialize() {
    if (this.#reroutedValue) {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 4);
    }
    this.#updateLinearValue();
    return true;
  }
  CopyValueToEffect(_inputType, out) {
    const source = this.#reroutedValue ?? (this.isSrgb ? this.linearValue : this.value);
    CjsShaderVectorParameter.writeVectorDestination(out, source, 4);
  }
  #updateLinearValue() {
    if (!this.isSrgb) {
      CjsShaderVectorParameter.copyNumberArray(this.linearValue, this.value, 4);
      return;
    }
    this.linearValue[0] = num.gammaToLinear(this.value[0]);
    this.linearValue[1] = num.gammaToLinear(this.value[1]);
    this.linearValue[2] = num.gammaToLinear(this.value[2]);
    this.linearValue[3] = this.value[3];
  }
  static {
    _initClass();
  }
}

export { _Tr2Vector4Parameter as Tr2Vector4Parameter };
//# sourceMappingURL=Tr2Vector4Parameter.js.map
