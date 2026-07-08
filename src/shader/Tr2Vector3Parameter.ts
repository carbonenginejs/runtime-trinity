// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector3Parameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\Tr2Vector3Parameter.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import type { Vec3 } from "@carbonenginejs/core-math/types";
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

@type.define({ className: "Tr2Vector3Parameter", family: "shader" })
export class Tr2Vector3Parameter extends CjsModel
{
  @io.persistOnly
  @type.vec3
  value: Vec3 = vec3.fromValues(1, 1, 1);

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
  GetValue(out: Vec3 = this.value): Vec3
  {
    if (this.#reroutedValue) {
      ReadVectorDestination(this.#reroutedValue, this.value, 3);
    }
    return CopyNumberArray(out, this.value, 3) as Vec3;
  }

  @carbon.method
  @impl.implemented
  SetValue(value: Vec3): void
  {
    CopyNumberArray(this.value, value, 3);
    if (this.#reroutedValue) {
      WriteVectorDestination(this.#reroutedValue, this.value, 3);
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
  SetDestination(dest: unknown, size = 12): void
  {
    if (size >= 12 && IsVectorDestination(dest, 3)) {
      this.#reroutedValue = dest;
      WriteVectorDestination(dest, this.value, 3);
    } else {
      this.#reroutedValue = null;
    }
    NotifyBindings(this.#bindings, this.GetDestination().dest);
  }

  @carbon.method
  @impl.adapted
  GetDestination(): { dest: CjsVectorDestination; size: number }
  {
    return { dest: this.#reroutedValue ?? this.value, size: 12 };
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
      WriteVectorDestination(this.#reroutedValue, this.value, 3);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType: unknown, out: CjsVectorDestination): void
  {
    WriteVectorDestination(out, this.GetValue(), 3);
  }
}
