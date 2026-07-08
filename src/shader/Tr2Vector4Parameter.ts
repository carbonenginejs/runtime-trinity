// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector4Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector4Parameter.cpp
import { num } from "@carbonenginejs/core-math/num";
import type { Vec4 } from "@carbonenginejs/core-math/types";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CopyNumberArray,
  GetConstantIsSrgb,
  GetEffectConstant,
  IsVectorDestination,
  NotifyBindings,
  ReadVectorDestination,
  RegisterBinding,
  type CjsRerouteBinding,
  type CjsVectorDestination,
  UnregisterBinding,
  WriteVectorDestination,
} from "./CjsShaderParameter.ts";

@type.define({ className: "Tr2Vector4Parameter", family: "shader" })
export class Tr2Vector4Parameter extends CjsModel
{
  @io.persistOnly
  @type.vec4
  value: Vec4 = vec4.fromValues(1, 1, 1, 1);

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

  linearValue: Vec4 = vec4.fromValues(1, 1, 1, 1);

  #bindings: CjsRerouteBinding[] = [];
  #reroutedValue: CjsVectorDestination | null = null;

  @carbon.method
  @impl.implemented
  GetParameterName(): string
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  GetValue(out: Vec4 = this.value): Vec4
  {
    if (this.#reroutedValue) {
      ReadVectorDestination(this.#reroutedValue, this.value, 4);
    }
    return CopyNumberArray(out, this.value, 4) as Vec4;
  }

  @carbon.method
  @impl.implemented
  SetValue(value: Vec4): void
  {
    CopyNumberArray(this.value, value, 4);
    this.#updateLinearValue();
    if (this.#reroutedValue) {
      WriteVectorDestination(this.#reroutedValue, this.value, 4);
    }
  }

  @carbon.method
  @impl.implemented
  IsRerouted(): boolean
  {
    return !this.isSrgb && this.#reroutedValue !== null;
  }

  @carbon.method
  @impl.adapted
  SetDestination(dest: unknown, size = 16): void
  {
    if (size >= 16 && !this.isSrgb && IsVectorDestination(dest, 4)) {
      this.#reroutedValue = dest;
      WriteVectorDestination(dest, this.value, 4);
    } else {
      this.#reroutedValue = null;
      this.#updateLinearValue();
    }
    NotifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination(): { dest: CjsVectorDestination; size: number }
  {
    return { dest: this.#reroutedValue ?? this.value, size: 16 };
  }

  @carbon.method
  @impl.adapted
  RegisterBinding(binding: CjsRerouteBinding): void
  {
    RegisterBinding(this.#bindings, binding);
  }

  @carbon.method
  @impl.adapted
  UnregisterBinding(binding: CjsRerouteBinding): void
  {
    UnregisterBinding(this.#bindings, binding);
  }

  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes: unknown): void
  {
    this.isSrgb = false;
    if (!effectRes && this.#reroutedValue) {
      this.SetDestination(null, 0);
    }

    const constant = this.name ? GetEffectConstant(effectRes, this.name) : null;
    const used = !!constant;
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
    this.isSrgb = GetConstantIsSrgb(constant);

    if (this.isSrgb) {
      this.SetDestination(null, 0);
    }
    this.#updateLinearValue();
  }

  @carbon.method
  @impl.implemented
  Initialize(): boolean
  {
    if (this.#reroutedValue) {
      WriteVectorDestination(this.#reroutedValue, this.value, 4);
    }
    this.#updateLinearValue();
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType: unknown, out: CjsVectorDestination): void
  {
    const source = this.#reroutedValue ?? (this.isSrgb ? this.linearValue : this.value);
    WriteVectorDestination(out, source, 4);
  }

  #updateLinearValue(): void
  {
    if (!this.isSrgb) {
      CopyNumberArray(this.linearValue, this.value, 4);
      return;
    }
    this.linearValue[0] = num.gammaToLinear(this.value[0]);
    this.linearValue[1] = num.gammaToLinear(this.value[1]);
    this.linearValue[2] = num.gammaToLinear(this.value[2]);
    this.linearValue[3] = this.value[3];
  }
}
