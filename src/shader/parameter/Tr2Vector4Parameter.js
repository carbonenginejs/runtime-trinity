// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector4Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector4Parameter.cpp
import { num } from "@carbonenginejs/core-math/num";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsShaderVectorParameter } from "./CjsShaderParameter.js";


@type.define({
  className: "Tr2Vector4Parameter",
  family: "shader"
})
export class Tr2Vector4Parameter extends CjsShaderVectorParameter
{
  @io.persistOnly
  @type.vec4
  value = vec4.fromValues(1, 1, 1, 1);

  @io.read
  @type.boolean
  isSrgb = false;

  @io.read
  @type.boolean
  usedByCurrentTechnique = false;

  @io.read
  @type.boolean
  usedByCurrentEffect = false;

  @io.notify
  @io.persist
  @type.string
  name = "";

  linearValue = vec4.fromValues(1, 1, 1, 1);

  #bindings = [];

  #reroutedValue = null;

  @carbon.method
  @impl.implemented
  GetParameterName()
  {
    return this.name;
  }
  @carbon.method
  @impl.implemented
  GetValue(out = this.value)
  {
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 4);
    }
    return CjsShaderVectorParameter.copyNumberArray(out, this.value, 4);
  }
  @carbon.method
  @impl.implemented
  SetValue(value)
  {
    CjsShaderVectorParameter.copyNumberArray(this.value, value, 4);
    this.#updateLinearValue();
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 4);
    }
  }
  @carbon.method
  @impl.implemented
  IsRerouted()
  {
    return !this.isSrgb && this.#reroutedValue !== null;
  }
  @carbon.method
  @impl.adapted
  SetDestination(dest, size = 16)
  {
    if (size >= 16 && !this.isSrgb && CjsShaderVectorParameter.isVectorDestination(dest, 4))
    {
      this.#reroutedValue = dest;
      CjsShaderVectorParameter.writeVectorDestination(dest, this.value, 4);
    }
    else
    {
      this.#reroutedValue = null;
      this.#updateLinearValue();
    }
    CjsShaderVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }
  @carbon.method
  @impl.adapted
  GetDestination()
  {
    return {
      dest: this.#reroutedValue ?? this.value,
      size: 16
    };
  }
  @carbon.method
  @impl.adapted
  RegisterBinding(binding)
  {
    CjsShaderVectorParameter.registerBinding(this.#bindings, binding);
  }
  @carbon.method
  @impl.adapted
  UnregisterBinding(binding)
  {
    CjsShaderVectorParameter.unregisterBinding(this.#bindings, binding);
  }
  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes)
  {
    this.isSrgb = false;
    if (!effectRes && this.#reroutedValue)
    {
      this.SetDestination(null, 0);
    }
    const constant = this.name ? CjsShaderVectorParameter.getEffectConstant(effectRes, this.name) : null;
    const used = !!constant;
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
    this.isSrgb = CjsShaderVectorParameter.getConstantIsSrgb(constant);
    if (this.isSrgb)
    {
      this.SetDestination(null, 0);
    }
    this.#updateLinearValue();
  }
  @carbon.method
  @impl.implemented
  Initialize()
  {
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 4);
    }
    this.#updateLinearValue();
    return true;
  }
  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out)
  {
    const source = this.#reroutedValue ?? (this.isSrgb ? this.linearValue : this.value);
    CjsShaderVectorParameter.writeVectorDestination(out, source, 4);
  }
  #updateLinearValue()
  {
    if (!this.isSrgb)
    {
      CjsShaderVectorParameter.copyNumberArray(this.linearValue, this.value, 4);
      return;
    }
    this.linearValue[0] = num.gammaToLinear(this.value[0]);
    this.linearValue[1] = num.gammaToLinear(this.value[1]);
    this.linearValue[2] = num.gammaToLinear(this.value[2]);
    this.linearValue[3] = this.value[3];
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value)
  {
    return CjsShaderVectorParameter.isNumberArrayValue(value, 4);
  }

}
