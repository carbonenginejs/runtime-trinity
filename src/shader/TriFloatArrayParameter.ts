// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriFloatArrayParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriFloatArrayParameter.cpp
import type { Vec4 } from "@carbonenginejs/core-math/types";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  type CjsVectorDestination,
  HasEffectConstant,
} from "./CjsShaderParameter.ts";
import type { TriVector4 } from "./TriVector4.ts";

@type.define({ className: "TriFloatArrayParameter", family: "shader" })
export class TriFloatArrayParameter extends CjsModel {
  @io.notify
  @io.persist
  @type.list("TriVector4")
  value: TriVector4[] = [];

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

  #cachedEffect: unknown = null;

  @carbon.method
  @impl.implemented
  GetParameterName(): string {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  Initialize(): boolean {
    return true;
  }

  @carbon.method
  @impl.adapted
  OnModified(_value?: unknown): boolean {
    this.RebuildEffectHandles(this.#cachedEffect);
    return true;
  }

  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes: unknown): void {
    this.#cachedEffect = effectRes;
    const used = !!this.name && HasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }

  @carbon.method
  @impl.adapted
  CopyValueToEffect(
    _inputType: unknown,
    out: CjsVectorDestination,
    size = Number.POSITIVE_INFINITY,
  ): void {
    const byteLimit = Number.isFinite(size) ? Math.max(0, size) : Infinity;
    const floatLimit = Math.min(
      Number((out as { length: number }).length),
      Math.floor(byteLimit / 4),
    );
    let offset = 0;

    for (const entry of this.value) {
      if (offset >= floatLimit) {
        break;
      }
      const count = Math.min(4, floatLimit - offset);
      CopyVector4ToDestination(out, entry.data, offset, count);
      offset += count;
    }
  }
}

function CopyVector4ToDestination(
  out: CjsVectorDestination,
  value: Vec4,
  offset: number,
  count: number,
): void {
  for (let i = 0; i < count; i++) {
    out[offset + i] = value[i];
  }
}
