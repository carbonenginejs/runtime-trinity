// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector3Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector3Parameter.cpp
import { num } from "@carbonenginejs/core-math/num";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsVectorParameter } from "./CjsVectorParameter.js";


@type.define({
  className: "Tr2Vector3Parameter",
  family: "shader"
})
export class Tr2Vector3Parameter extends CjsVectorParameter
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

  /** m_isSrgb - shader-annotation driven; not Blue-exposed on vec3 in Carbon. */
  isSrgb = false;

  /** m_linearValue - gamma-to-linear mirror uploaded when isSrgb. */
  linearValue = vec3.fromValues(1, 1, 1);

  #bindings = [];

  #reroutedValue = null;

  /** Blue MAP_PROPERTY "x"/"v1" - refreshes from the rerouted value on read. */
  get x()
  {
    this.GetValue();
    return this.value[0];
  }

  set x(component)
  {
    this.#setComponent(0, component);
  }

  /** Blue MAP_PROPERTY "y"/"v2". */
  get y()
  {
    this.GetValue();
    return this.value[1];
  }

  set y(component)
  {
    this.#setComponent(1, component);
  }

  /** Blue MAP_PROPERTY "z"/"v3". */
  get z()
  {
    this.GetValue();
    return this.value[2];
  }

  set z(component)
  {
    this.#setComponent(2, component);
  }

  get v1()
  {
    return this.x;
  }

  set v1(component)
  {
    this.x = component;
  }

  get v2()
  {
    return this.y;
  }

  set v2(component)
  {
    this.y = component;
  }

  get v3()
  {
    return this.z;
  }

  set v3(component)
  {
    this.z = component;
  }

  @carbon.method
  @impl.implemented
  GetParameterName()
  {
    return this.name;
  }

  /** Content hash: authored value bytes then name. */
  @carbon.method
  @impl.adapted
  GetHashValue(startingHash = CjsVectorParameter.FNV1_INITIAL)
  {
    return CjsVectorParameter.hashFnv1String(this.name, CjsVectorParameter.hashFnv1Floats(this.value, startingHash));
  }

  @carbon.method
  @impl.implemented
  GetValue(out = this.value)
  {
    if (this.#reroutedValue)
    {
      CjsVectorParameter.readVectorDestination(this.#reroutedValue, this.value, 3);
    }
    return CjsVectorParameter.copyNumberArray(out, this.value, 3);
  }

  @carbon.method
  @impl.implemented
  SetValue(value)
  {
    CjsVectorParameter.copyNumberArray(this.value, value, 3);
    this.#updateLinearValue();
    if (this.#reroutedValue)
    {
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 3);
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
  SetDestination(dest, size = 12)
  {
    if (size >= 12 && !this.isSrgb && CjsVectorParameter.isVectorDestination(dest, 3))
    {
      this.#reroutedValue = dest;
      CjsVectorParameter.writeVectorDestination(dest, this.value, 3);
    }
    else
    {
      this.#reroutedValue = null;
      this.#updateLinearValue();
    }
    CjsVectorParameter.notifyBindings(this.#bindings, this.GetDestination().dest);
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
    this.isSrgb = false;
    if (!effectRes && this.#reroutedValue)
    {
      this.SetDestination(null, 0);
    }
    const constant = this.name ? CjsVectorParameter.getEffectConstant(effectRes, this.name) : null;
    const used = !!constant;
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
    this.isSrgb = CjsVectorParameter.getConstantIsSrgb(constant);
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
      CjsVectorParameter.writeVectorDestination(this.#reroutedValue, this.value, 3);
    }
    this.#updateLinearValue();
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out)
  {
    if (this.#reroutedValue)
    {
      CjsVectorParameter.writeVectorDestination(out, this.value, 3);
      return;
    }
    CjsVectorParameter.writeVectorDestination(out, this.isSrgb ? this.linearValue : this.value, 3);
  }

  #updateLinearValue()
  {
    if (!this.isSrgb)
    {
      CjsVectorParameter.copyNumberArray(this.linearValue, this.value, 3);
      return;
    }
    this.linearValue[0] = num.gammaToLinear(this.value[0]);
    this.linearValue[1] = num.gammaToLinear(this.value[1]);
    this.linearValue[2] = num.gammaToLinear(this.value[2]);
  }

  #setComponent(index, component)
  {
    this.value[index] = Number(component);
    this.SetValue(this.value);
  }

  /** JS convenience: raw values this parameter class claims for map-form inference. */
  static isValue(value)
  {
    return CjsVectorParameter.isNumberArrayValue(value, 3);
  }

}
