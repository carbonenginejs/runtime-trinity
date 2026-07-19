import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsVectorParameter } from './CjsVectorParameter.js';

let _initProto, _initClass, _init_value, _init_extra_value, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name;
let _Tr2Matrix4Parameter;
class Tr2Matrix4Parameter extends CjsVectorParameter {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name, _initProto],
      c: [_Tr2Matrix4Parameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Matrix4Parameter",
      family: "shader"
    })], [[[io, io.persistOnly, type, type.mat4], 16, "value"], [[io, io.read, type, type.boolean], 16, "usedByCurrentTechnique"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsRerouted"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "UnregisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"]], 0, void 0, CjsVectorParameter));
  }
  value = (_initProto(this), _init_value(this, mat4.create()));
  usedByCurrentTechnique = (_init_extra_value(this), _init_usedByCurrentTechnique(this, false));
  usedByCurrentEffect = (_init_extra_usedByCurrentTechnique(this), _init_usedByCurrentEffect(this, false));
  name = (_init_extra_usedByCurrentEffect(this), _init_name(this, ""));
  #bindings = (_init_extra_name(this), []);
  #reroutedValue = null;
  GetParameterName() {
    return this.name;
  }
  GetValue(out = mat4.create()) {
    if (this.#reroutedValue) {
      CjsVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 16);
    }
    return CjsVectorParameter.copyNumberArray(out, this.value, 16);
  }
  SetValue(value) {
    CjsVectorParameter.copyNumberArray(this.value, value, 16);
    if (this.#reroutedValue) {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 16);
    }
  }
  IsRerouted() {
    return this.#reroutedValue !== null;
  }
  SetDestination(dest, size = 64) {
    if (size >= 64 && CjsVectorParameter.isVectorDestination(dest, 16)) {
      this.#reroutedValue = dest;
      CjsVectorParameter.writeVectorDestination(dest, this.value, 16);
    } else {
      this.#reroutedValue = null;
    }
    CjsVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }
  GetDestination() {
    return {
      dest: this.#reroutedValue ?? this.value,
      size: 64
    };
  }
  RegisterBinding(binding) {
    CjsVectorParameter.registerBinding(this.#bindings, binding);
  }
  UnregisterBinding(binding) {
    CjsVectorParameter.unregisterBinding(this.#bindings, binding);
  }
  RebuildEffectHandles(effectRes) {
    if (!effectRes && this.#reroutedValue) {
      this.SetDestination(null, 0);
    }
    const used = !!this.name && CjsVectorParameter.hasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }
  Initialize() {
    if (this.#reroutedValue) {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 16);
    }
    return true;
  }
  CopyValueToEffect(_inputType, out) {
    CjsVectorParameter.writeVectorDestination(out, this.GetValue(), 16);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value) {
    return CjsVectorParameter.isNumberArrayValue(value, 16);
  }
  static {
    _initClass();
  }
}

export { _Tr2Matrix4Parameter as Tr2Matrix4Parameter };
//# sourceMappingURL=Tr2Matrix4Parameter.js.map
