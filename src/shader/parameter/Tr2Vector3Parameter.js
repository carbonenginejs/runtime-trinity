// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector3Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector3Parameter.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsShaderVectorParameter } from "./CjsShaderParameter.js";


@type.define({
  className: "Tr2Vector3Parameter",
  family: "shader"
})
export class Tr2Vector3Parameter extends CjsShaderVectorParameter
{
  @io.persistOnly
  @type.vec3
  value = vec3.fromValues(1, 1, 1);

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
  GetValue(out = this.value)
  {
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 3);
    }
    return CjsShaderVectorParameter.copyNumberArray(out, this.value, 3);
  }
  @carbon.method
  @impl.implemented
  SetValue(value)
  {
    CjsShaderVectorParameter.copyNumberArray(this.value, value, 3);
    if (this.#reroutedValue)
    {
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 3);
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
  SetDestination(dest, size = 12)
  {
    if (size >= 12 && CjsShaderVectorParameter.isVectorDestination(dest, 3))
    {
      this.#reroutedValue = dest;
      CjsShaderVectorParameter.writeVectorDestination(dest, this.value, 3);
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
      size: 12
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
      CjsShaderVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 3);
    }
    return true;
  }
  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out)
  {
    CjsShaderVectorParameter.writeVectorDestination(out, this.GetValue(), 3);
  }
}
