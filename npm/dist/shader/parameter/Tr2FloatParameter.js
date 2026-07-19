import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsParameter } from './CjsParameter.js';

let _initProto, _initClass, _init_value, _init_extra_value, _init_name, _init_extra_name, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect;
let _Tr2FloatParameter;
class Tr2FloatParameter extends CjsParameter {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_name, _init_extra_name, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _initProto],
      c: [_Tr2FloatParameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2FloatParameter",
      family: "shader"
    })], [[[io, io.persistOnly, type, type.float32], 16, "value"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsRerouted"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "UnregisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"]], 0, void 0, CjsParameter));
  }
  value = (_initProto(this), _init_value(this, 1));
  name = (_init_extra_value(this), _init_name(this, ""));
  usedByCurrentEffect = (_init_extra_name(this), _init_usedByCurrentEffect(this, false));
  #bindings = (_init_extra_usedByCurrentEffect(this), []);
  #reroutedValue = null;
  #valueRef = {
    value: this.value
  };
  GetParameterName() {
    return this.name;
  }
  GetValue() {
    if (this.#reroutedValue) {
      this.value = CjsParameter.readScalarDestination(this.#reroutedValue, this.value);
      this.#valueRef.value = this.value;
    }
    return this.value;
  }
  SetValue(value) {
    this.value = Number(value);
    this.#valueRef.value = this.value;
    if (this.#reroutedValue) {
      CjsParameter.writeScalarDestination(this.#reroutedValue, this.value);
    }
  }
  IsRerouted() {
    return this.#reroutedValue !== null;
  }
  SetDestination(dest, size = 4) {
    if (size >= 4 && CjsParameter.isScalarDestination(dest)) {
      this.#reroutedValue = dest;
      CjsParameter.writeScalarDestination(dest, this.value);
    } else {
      this.#reroutedValue = null;
    }
    CjsParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }
  GetDestination() {
    return {
      dest: this.#reroutedValue ?? this.#valueRef,
      size: 4
    };
  }
  RegisterBinding(binding) {
    CjsParameter.registerBinding(this.#bindings, binding);
  }
  UnregisterBinding(binding) {
    CjsParameter.unregisterBinding(this.#bindings, binding);
  }
  RebuildEffectHandles(effectRes) {
    if (!effectRes && this.#reroutedValue) {
      this.SetDestination(null, 0);
    }
    this.usedByCurrentEffect = !!this.name && CjsParameter.hasEffectConstant(effectRes, this.name);
  }
  Initialize() {
    this.#valueRef.value = this.value;
    if (this.#reroutedValue) {
      CjsParameter.writeScalarDestination(this.#reroutedValue, this.value);
    }
    return true;
  }
  CopyValueToEffect(_inputType, out) {
    CjsParameter.writeScalarDestination(out, this.GetValue());
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value) {
    return typeof value === "number";
  }
  static {
    _initClass();
  }
}

export { _Tr2FloatParameter as Tr2FloatParameter };
//# sourceMappingURL=Tr2FloatParameter.js.map
