// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector2Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector2Parameter.cpp
import { vec2 } from "@carbonenginejs/core-math/vec2";
import type { Vec2 } from "@carbonenginejs/core-math/types";
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

@type.define({ className: "Tr2Vector2Parameter", family: "shader" })
export class Tr2Vector2Parameter extends CjsModel
{
  @io.persistOnly
  @type.vec2
  value: Vec2 = vec2.fromValues(1, 1);

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
  GetValue(out: Vec2 = this.value): Vec2
  {
    if (this.#reroutedValue) {
      ReadVectorDestination(this.#reroutedValue, this.value, 2);
    }
    return CopyNumberArray(out, this.value, 2) as Vec2;
  }

  @carbon.method
  @impl.implemented
  SetValue(value: Vec2): void
  {
    CopyNumberArray(this.value, value, 2);
    if (this.#reroutedValue) {
      WriteVectorDestination(this.#reroutedValue, this.value, 2);
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
  SetDestination(dest: unknown, size = 8): void
  {
    if (size >= 8 && IsVectorDestination(dest, 2)) {
      this.#reroutedValue = dest;
      WriteVectorDestination(dest, this.value, 2);
    } else {
      this.#reroutedValue = null;
    }
    NotifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination(): { dest: CjsVectorDestination; size: number }
  {
    return { dest: this.#reroutedValue ?? this.value, size: 8 };
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
      WriteVectorDestination(this.#reroutedValue, this.value, 2);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType: unknown, out: CjsVectorDestination): void
  {
    WriteVectorDestination(out, this.GetValue(), 2);
  }
}
