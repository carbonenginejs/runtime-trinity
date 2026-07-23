// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2FloatParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2FloatParameter.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsParameter } from "./CjsParameter.js";


@type.define({className: "Tr2FloatParameter", family: "shader"})
export class Tr2FloatParameter extends CjsParameter
{
  @io.persistOnly
  @type.float32
  value = 1;

  @io.notify
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.boolean
  usedByCurrentEffect = false;

  #bindings = [];
  #reroutedValue = null;
  #valueRef = {  value: this.value };

  @carbon.method
  @impl.implemented
  GetParameterName()
  {
    return this.name;
  }

  /** Content hash: value bytes then name (Carbon hashes the interned name pointer). */
  @carbon.method
  @impl.adapted
  GetHashValue(startingHash = CjsParameter.FNV1_INITIAL)
  {
    return CjsParameter.hashFnv1String(this.name, CjsParameter.hashFnv1Floats([this.value], startingHash));
  }

  @carbon.method
  @impl.implemented
  GetValue()
  {
    if (this.#reroutedValue)
    {
      this.value = CjsParameter.readScalarDestination(this.#reroutedValue, this.value);
      this.#valueRef.value = this.value;
    }
    return this.value;
  }

  @carbon.method
  @impl.implemented
  SetValue(value)
  {
    this.value = Number(value);
    this.#valueRef.value = this.value;
    if (this.#reroutedValue)
    {
      CjsParameter.writeScalarDestination(this.#reroutedValue, this.value);
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
  SetDestination(dest, size = 4)
  {
    if (size >= 4 && CjsParameter.isScalarDestination(dest))
    {
      this.#reroutedValue = dest;
      CjsParameter.writeScalarDestination(dest, this.value);
    }
    else
    {
      this.#reroutedValue = null;
    }
    CjsParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination()
  {
    return {
      dest: this.#reroutedValue ?? this.#valueRef,
      size: 4
    };
  }

  @carbon.method
  @impl.adapted
  RegisterBinding(binding)
  {
    CjsParameter.registerBinding(this.#bindings, binding);
  }

  @carbon.method
  @impl.adapted
  UnregisterBinding(binding)
  {
    CjsParameter.unregisterBinding(this.#bindings, binding);
  }

  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes)
  {
    if (!effectRes && this.#reroutedValue)
    {
      this.SetDestination(null, 0);
    }
    this.usedByCurrentEffect = !!this.name && CjsParameter.hasEffectConstant(effectRes, this.name);
  }

  @carbon.method
  @impl.implemented
  Initialize()
  {
    this.#valueRef.value = this.value;
    if (this.#reroutedValue)
    {
      CjsParameter.writeScalarDestination(this.#reroutedValue, this.value);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out)
  {
    CjsParameter.writeScalarDestination(out, this.GetValue());
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value)
  {
    return typeof value === "number";
  }

}
