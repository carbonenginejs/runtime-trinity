import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { num } from '@carbonenginejs/core-math/num';
import { vec2 } from '@carbonenginejs/core-math/vec2';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsVectorParameter } from './CjsVectorParameter.js';

let _initProto, _initClass, _init_value, _init_extra_value, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name;
let _Tr2Vector2Parameter;
class Tr2Vector2Parameter extends CjsVectorParameter {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name, _initProto],
      c: [_Tr2Vector2Parameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Vector2Parameter",
      family: "shader"
    })], [[[io, io.persistOnly, type, type.vec2], 16, "value"], [[io, io.read, type, type.boolean], 16, "usedByCurrentTechnique"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetHashValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsRerouted"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "UnregisterBinding"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"]], 0, void 0, CjsVectorParameter));
  }
  value = (_initProto(this), _init_value(this, vec2.fromValues(1, 1)));
  usedByCurrentTechnique = (_init_extra_value(this), _init_usedByCurrentTechnique(this, false));
  usedByCurrentEffect = (_init_extra_usedByCurrentTechnique(this), _init_usedByCurrentEffect(this, false));
  name = (_init_extra_usedByCurrentEffect(this), _init_name(this, ""));

  /** m_isSrgb - shader-annotation driven; not Blue-exposed on vec2 in Carbon. */
  isSrgb = (_init_extra_name(this), false);

  /** m_linearValue - gamma-to-linear mirror uploaded when isSrgb. */
  linearValue = vec2.fromValues(1, 1);
  #bindings = [];
  #reroutedValue = null;

  /** Blue MAP_PROPERTY "x"/"v1" - refreshes from the rerouted value on read. */
  get x() {
    this.GetValue();
    return this.value[0];
  }
  set x(component) {
    this.#setComponent(0, component);
  }

  /** Blue MAP_PROPERTY "y"/"v2". */
  get y() {
    this.GetValue();
    return this.value[1];
  }
  set y(component) {
    this.#setComponent(1, component);
  }
  get v1() {
    return this.x;
  }
  set v1(component) {
    this.x = component;
  }
  get v2() {
    return this.y;
  }
  set v2(component) {
    this.y = component;
  }
  GetParameterName() {
    return this.name;
  }

  /** Content hash: authored value bytes then name. */
  GetHashValue(startingHash = CjsVectorParameter.FNV1_INITIAL) {
    return CjsVectorParameter.hashFnv1String(this.name, CjsVectorParameter.hashFnv1Floats(this.value, startingHash));
  }
  GetValue(out = this.value) {
    if (this.#reroutedValue) {
      CjsVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 2);
    }
    return CjsVectorParameter.copyNumberArray(out, this.value, 2);
  }
  SetValue(value) {
    CjsVectorParameter.copyNumberArray(this.value, value, 2);
    this.#updateLinearValue();
    if (this.#reroutedValue) {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 2);
    }
  }
  IsRerouted() {
    return !this.isSrgb && this.#reroutedValue !== null;
  }
  SetDestination(dest, size = 8) {
    if (size >= 8 && !this.isSrgb && CjsVectorParameter.isVectorDestination(dest, 2)) {
      this.#reroutedValue = dest;
      CjsVectorParameter.writeVectorDestination(dest, this.value, 2);
    } else {
      this.#reroutedValue = null;
      this.#updateLinearValue();
    }
    CjsVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }
  GetDestination() {
    return {
      dest: this.#reroutedValue ?? this.value,
      size: 8
    };
  }
  RegisterBinding(binding) {
    CjsVectorParameter.registerBinding(this.#bindings, binding);
  }
  UnregisterBinding(binding) {
    CjsVectorParameter.unregisterBinding(this.#bindings, binding);
  }
  RebuildEffectHandles(effectRes) {
    this.isSrgb = false;
    if (!effectRes && this.#reroutedValue) {
      this.SetDestination(null, 0);
    }
    const constant = this.name ? CjsVectorParameter.getEffectConstant(effectRes, this.name) : null;
    const used = !!constant;
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
    this.isSrgb = CjsVectorParameter.getConstantIsSrgb(constant);
    if (this.isSrgb) {
      this.SetDestination(null, 0);
    }
    this.#updateLinearValue();
  }
  Initialize() {
    if (this.#reroutedValue) {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 2);
    }
    this.#updateLinearValue();
    return true;
  }
  CopyValueToEffect(_inputType, out) {
    if (this.#reroutedValue) {
      CjsVectorParameter.writeVectorDestination(out, this.value, 2);
      return;
    }
    CjsVectorParameter.writeVectorDestination(out, this.isSrgb ? this.linearValue : this.value, 2);
  }
  #updateLinearValue() {
    if (!this.isSrgb) {
      CjsVectorParameter.copyNumberArray(this.linearValue, this.value, 2);
      return;
    }
    this.linearValue[0] = num.gammaToLinear(this.value[0]);
    this.linearValue[1] = num.gammaToLinear(this.value[1]);
  }
  #setComponent(index, component) {
    this.value[index] = Number(component);
    this.SetValue(this.value);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value) {
    return CjsVectorParameter.isNumberArrayValue(value, 2);
  }
  static {
    _initClass();
  }
}

export { _Tr2Vector2Parameter as Tr2Vector2Parameter };
//# sourceMappingURL=Tr2Vector2Parameter.js.map
