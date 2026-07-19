// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector2Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector2Parameter.cpp
import { vec2 } from "@carbonenginejs/core-math/vec2";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsVectorParameter } from "./CjsVectorParameter.js";


@type.define({
  className: "Tr2Vector2Parameter",
  family: "shader"
})
export class Tr2Vector2Parameter extends CjsVectorParameter
{
  @io.persistOnly
  @type.vec2
  value = vec2.fromValues(1, 1);

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
      CjsVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 2);
    }
    return CjsVectorParameter.copyNumberArray(out, this.value, 2);
  }

  @carbon.method
  @impl.implemented
  SetValue(value)
  {
    CjsVectorParameter.copyNumberArray(this.value, value, 2);
    if (this.#reroutedValue)
    {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 2);
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
  SetDestination(dest, size = 8)
  {
    if (size >= 8 && CjsVectorParameter.isVectorDestination(dest, 2))
    {
      this.#reroutedValue = dest;
      CjsVectorParameter.writeVectorDestination(dest, this.value, 2);
    }
    else
    {
      this.#reroutedValue = null;
    }
    CjsVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination()
  {
    return {
      dest: this.#reroutedValue ?? this.value,
      size: 8
    };
  }

  @carbon.method
  @impl.adapted
  RegisterBinding(binding)
  {
    CjsVectorParameter.registerBinding(this.#bindings, binding);
  }

  @carbon.method
  @impl.adapted
  UnregisterBinding(binding)
  {
    CjsVectorParameter.unregisterBinding(this.#bindings, binding);
  }

  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes)
  {
    if (!effectRes && this.#reroutedValue)
    {
      this.SetDestination(null, 0);
    }
    const used = !!this.name && CjsVectorParameter.hasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }

  @carbon.method
  @impl.implemented
  Initialize()
  {
    if (this.#reroutedValue)
    {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 2);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out)
  {
    CjsVectorParameter.writeVectorDestination(out, this.GetValue(), 2);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value)
  {
    return CjsVectorParameter.isNumberArrayValue(value, 2);
  }

}
