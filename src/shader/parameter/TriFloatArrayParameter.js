// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriFloatArrayParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriFloatArrayParameter.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsShaderParameter } from "./CjsShaderParameter.js";


@type.define({
  className: "TriFloatArrayParameter",
  family: "shader"
})
export class TriFloatArrayParameter extends CjsShaderParameter
{
  @io.notify
  @io.persist
  @type.list("TriVector4")
  value = [];

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

  #cachedEffect = null;

  @carbon.method
  @impl.implemented
  GetParameterName()
  {
    return this.name;
  }
  @carbon.method
  @impl.implemented
  Initialize()
  {
    return true;
  }
  @carbon.method
  @impl.adapted
  OnModified(_options = {})
  {
    this.RebuildEffectHandles(this.#cachedEffect);
    return true;
  }
  @carbon.method
  @impl.adapted
  RebuildEffectHandles(effectRes)
  {
    this.#cachedEffect = effectRes;
    const used = !!this.name && CjsShaderParameter.hasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }
  @carbon.method
  @impl.adapted
  CopyValueToEffect(_inputType, out, size = Number.POSITIVE_INFINITY)
  {
    const byteLimit = Number.isFinite(size) ? Math.max(0, size) : Infinity;
    const floatLimit = Math.min(Number(out.length), Math.floor(byteLimit / 4));
    let offset = 0;
    for (const entry of this.value)
    {
      if (offset >= floatLimit)
      {
        break;
      }
      const count = Math.min(4, floatLimit - offset);
      TriFloatArrayParameter.copyVector4ToDestination(out, entry.data, offset, count);
      offset += count;
    }
  }

  static copyVector4ToDestination(out, value, offset, count)
  {
    for (let i = 0; i < count; i++)
    {
      out[offset + i] = value[i];
    }
  }

}
