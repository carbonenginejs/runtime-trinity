// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2FloatParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2FloatParameter.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  HasEffectConstant,
  IsScalarDestination,
  NotifyBindings,
  ReadScalarDestination,
  RegisterBinding,
  type CjsRerouteBinding,
  type CjsScalarDestination,
  UnregisterBinding,
  WriteScalarDestination,
} from "./CjsShaderParameter.ts";

@type.define({ className: "Tr2FloatParameter", family: "shader" })
export class Tr2FloatParameter extends CjsModel
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

  #bindings: CjsRerouteBinding[] = [];
  #reroutedValue: CjsScalarDestination | null = null;
  #valueRef = { value: this.value };

  @carbon.method
  @impl.implemented
  GetParameterName(): string
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  GetValue(): number
  {
    if (this.#reroutedValue) {
      this.value = ReadScalarDestination(this.#reroutedValue, this.value);
      this.#valueRef.value = this.value;
    }
    return this.value;
  }

  @carbon.method
  @impl.implemented
  SetValue(value: number): void
  {
    this.value = Number(value);
    this.#valueRef.value = this.value;
    if (this.#reroutedValue) {
      WriteScalarDestination(this.#reroutedValue, this.value);
    }
  }

  @carbon.method
  @impl.implemented
  IsRerouted(): boolean
  {
    return this.#reroutedValue !== null;
  }

  @carbon.method
  @impl.adapted
  SetDestination(dest: unknown, size = 4): void
  {
    if (size >= 4 && IsScalarDestination(dest)) {
      this.#reroutedValue = dest;
      WriteScalarDestination(dest, this.value);
    } else {
      this.#reroutedValue = null;
    }
    NotifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination(): { dest: CjsScalarDestination; size: number }
  {
    return { dest: this.#reroutedValue ?? this.#valueRef, size: 4 };
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
    if (!effectRes && this.#reroutedValue) {
      this.SetDestination(null, 0);
    }
    this.usedByCurrentEffect = !!this.name &&
      HasEffectConstant(effectRes, this.name);
  }

  @carbon.method
  @impl.implemented
  Initialize(): boolean
  {
    this.#valueRef.value = this.value;
    if (this.#reroutedValue) {
      WriteScalarDestination(this.#reroutedValue, this.value);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType: unknown, out: CjsScalarDestination): void
  {
    WriteScalarDestination(out, this.GetValue());
  }
}
