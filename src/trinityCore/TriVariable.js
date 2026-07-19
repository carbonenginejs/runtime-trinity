// Source: E:\carbonengine\trinity\trinity\TriVariable.h
// Source: E:\carbonengine\trinity\trinity\TriVariable.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { TriVariableContentType } from "../generated/trinityCore/enums.js";


@type.define({
  className: "TriVariable",
  family: "trinityCore"
})
export class TriVariable extends CjsModel
{
  @io.read
  @type.string
  name = "";

  /** m_type (TriVariableContentType). */
  @io.read
  @type.int32
  contentType = TriVariableContentType.TRIVARIABLE_INVALID;

  /** Runtime value payload; the typed C++ union collapses to one slot. */
  value = null;

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  GetType()
  {
    return this.contentType;
  }

  /**
   * Assigns the value payload. The content type stays as registered; Carbon
   * fixes it at registration time and SetValue only stores.
   */
  @carbon.method
  @impl.adapted
  SetValue(value)
  {
    this.value = value;
    return true;
  }

  @carbon.method
  @impl.adapted
  GetValue(out = undefined)
  {
    const value = this.value;
    if (out && value && typeof value.length === "number" && typeof out.length === "number")
    {
      const count = Math.min(out.length, value.length);
      for (let index = 0; index < count; index++)
      {
        out[index] = value[index];
      }
      return out;
    }
    return value;
  }

  /**
   * Clears the payload and returns the variable to the reserved INVALID
   * type, releasing texture/buffer references as Carbon's Clear does.
   */
  @carbon.method
  @impl.implemented
  Invalidate()
  {
    this.value = null;
    this.contentType = TriVariableContentType.TRIVARIABLE_INVALID;
  }

  /**
   * Maps a script value onto a Carbon content type the way the Python
   * bridge does: integers and booleans register as INT (Python bools are
   * ints), other numbers as FLOAT, arrays by length, texture-provider
   * shapes as TEXTURE_RES. Unknown values map to INVALID, which
   * RegisterVariable treats as unsupported (GPU-buffer duck detection has
   * no reliable JS shape yet and is left to the realization layer).
   */
  static getVariableType(value)
  {
    if (typeof value === "boolean")
    {
      return TriVariableContentType.TRIVARIABLE_INT;
    }
    if (typeof value === "number")
    {
      return Number.isInteger(value)
        ? TriVariableContentType.TRIVARIABLE_INT
        : TriVariableContentType.TRIVARIABLE_FLOAT;
    }
    if (value && typeof value.length === "number")
    {
      switch (value.length)
      {
        case 2: return TriVariableContentType.TRIVARIABLE_FLOAT2;
        case 3: return TriVariableContentType.TRIVARIABLE_FLOAT3;
        case 4: return TriVariableContentType.TRIVARIABLE_FLOAT4;
        case 16: return TriVariableContentType.TRIVARIABLE_FLOAT4X4;
      }
      return TriVariableContentType.TRIVARIABLE_INVALID;
    }
    if (value && typeof value === "object")
    {
      if (typeof value.GetTexture === "function" || typeof value.RequestResolution === "function")
      {
        return TriVariableContentType.TRIVARIABLE_TEXTURE_RES;
      }
    }
    return TriVariableContentType.TRIVARIABLE_INVALID;
  }

  static ContentType = TriVariableContentType;
}
