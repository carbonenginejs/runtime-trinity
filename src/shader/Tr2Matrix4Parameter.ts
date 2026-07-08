// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Matrix4Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Matrix4Parameter.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4 } from "@carbonenginejs/core-math/types";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CopyNumberArray,
  HasEffectConstant,
  IsVectorDestination,
  NotifyBindings,
  ReadVectorDestination,
  RegisterBinding,
  type CjsRerouteBinding,
  type CjsVectorDestination,
  UnregisterBinding,
  WriteVectorDestination,
} from "./CjsShaderParameter.ts";

@type.define({ className: "Tr2Matrix4Parameter", family: "shader" })
export class Tr2Matrix4Parameter extends CjsModel
{
  @io.persistOnly
  @type.mat4
  value: Mat4 = mat4.create();

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
  GetValue(out: Mat4 = mat4.create()): Mat4
  {
    if (this.#reroutedValue) {
      ReadVectorDestination(this.#reroutedValue, this.value, 16);
    }
    return CopyNumberArray(out, this.value, 16) as Mat4;
  }

  @carbon.method
  @impl.implemented
  SetValue(value: Mat4): void
  {
    CopyNumberArray(this.value, value, 16);
    if (this.#reroutedValue) {
      WriteVectorDestination(this.#reroutedValue, this.value, 16);
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
  SetDestination(dest: unknown, size = 64): void
  {
    if (size >= 64 && IsVectorDestination(dest, 16)) {
      this.#reroutedValue = dest;
      WriteVectorDestination(dest, this.value, 16);
    } else {
      this.#reroutedValue = null;
    }
    NotifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination(): { dest: CjsVectorDestination; size: number }
  {
    return { dest: this.#reroutedValue ?? this.value, size: 64 };
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
    const used = !!this.name && HasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }

  @carbon.method
  @impl.implemented
  Initialize(): boolean
  {
    if (this.#reroutedValue) {
      WriteVectorDestination(this.#reroutedValue, this.value, 16);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType: unknown, out: CjsVectorDestination): void
  {
    WriteVectorDestination(out, this.GetValue(), 16);
  }
}
