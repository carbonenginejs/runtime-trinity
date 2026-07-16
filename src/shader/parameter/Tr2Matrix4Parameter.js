// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Matrix4Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Matrix4Parameter.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsShaderVectorParameter } from "./CjsShaderParameter.js";


@type.define({
  className: "Tr2Matrix4Parameter",
  family: "shader"
})
export class Tr2Matrix4Parameter extends CjsShaderVectorParameter
{
  @io.persistOnly
  @type.mat4
  value = mat4.create();

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
  GetValue(out = mat4.create())
  {
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 16);
    }
    return CjsShaderVectorParameter.copyNumberArray(out, this.value, 16);
  }
  @carbon.method
  @impl.implemented
  SetValue(value)
  {
    CjsShaderVectorParameter.copyNumberArray(this.value, value, 16);
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 16);
    }
  }
  @carbon.method
  @impl.implemented
  IsRerouted()
  {
    return this.#reroutedValue !== null;
  }
  @carbon.method
  @impl.adapted
  SetDestination(dest, size = 64)
  {
    if (size >= 64 && CjsShaderVectorParameter.isVectorDestination(dest, 16))
    {
      this.#reroutedValue = dest;
      CjsShaderVectorParameter.writeVectorDestination(dest, this.value, 16);
    }
    else
    {
      this.#reroutedValue = null;
    }
    CjsShaderVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }
  @carbon.method
  @impl.adapted
  GetDestination()
  {
    return {
      dest: this.#reroutedValue ?? this.value,
      size: 64
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
    if (!effectRes && this.#reroutedValue)
    {
      this.SetDestination(null, 0);
    }
    const used = !!this.name && CjsShaderVectorParameter.hasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }
  @carbon.method
  @impl.implemented
  Initialize()
  {
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 16);
    }
    return true;
  }
  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out)
  {
    CjsShaderVectorParameter.writeVectorDestination(out, this.GetValue(), 16);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value)
  {
    return CjsShaderVectorParameter.isNumberArrayValue(value, 16);
  }

}
