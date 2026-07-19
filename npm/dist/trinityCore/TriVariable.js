import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { TriVariableContentType } from '../generated/trinityCore/enums.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_contentType, _init_extra_contentType;
let _TriVariable;
new class extends _identity {
  static [class TriVariable extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_contentType, _init_extra_contentType, _initProto],
        c: [_TriVariable, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriVariable",
        family: "trinityCore"
      })], [[[io, io.read, type, type.string], 16, "name"], [[io, io.read, type, type.int32], 16, "contentType"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetType"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "Invalidate"]], 0, void 0, CjsModel));
    }
    name = (_initProto(this), _init_name(this, ""));

    /** m_type (TriVariableContentType). */
    contentType = (_init_extra_name(this), _init_contentType(this, TriVariableContentType.TRIVARIABLE_INVALID));

    /** Runtime value payload; the typed C++ union collapses to one slot. */
    value = (_init_extra_contentType(this), null);
    GetName() {
      return this.name;
    }
    GetType() {
      return this.contentType;
    }

    /**
     * Assigns the value payload. The content type stays as registered; Carbon
     * fixes it at registration time and SetValue only stores.
     */
    SetValue(value) {
      this.value = value;
      return true;
    }
    GetValue(out = undefined) {
      const value = this.value;
      if (out && value && typeof value.length === "number" && typeof out.length === "number") {
        const count = Math.min(out.length, value.length);
        for (let index = 0; index < count; index++) {
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
    Invalidate() {
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
    static getVariableType(value) {
      if (typeof value === "boolean") {
        return TriVariableContentType.TRIVARIABLE_INT;
      }
      if (typeof value === "number") {
        return Number.isInteger(value) ? TriVariableContentType.TRIVARIABLE_INT : TriVariableContentType.TRIVARIABLE_FLOAT;
      }
      if (value && typeof value.length === "number") {
        switch (value.length) {
          case 2:
            return TriVariableContentType.TRIVARIABLE_FLOAT2;
          case 3:
            return TriVariableContentType.TRIVARIABLE_FLOAT3;
          case 4:
            return TriVariableContentType.TRIVARIABLE_FLOAT4;
          case 16:
            return TriVariableContentType.TRIVARIABLE_FLOAT4X4;
        }
        return TriVariableContentType.TRIVARIABLE_INVALID;
      }
      if (value && typeof value === "object") {
        if (typeof value.GetTexture === "function" || typeof value.RequestResolution === "function") {
          return TriVariableContentType.TRIVARIABLE_TEXTURE_RES;
        }
      }
      return TriVariableContentType.TRIVARIABLE_INVALID;
    }
  }];
  ContentType = TriVariableContentType;
  constructor() {
    super(_TriVariable), _initClass();
  }
}();

export { _TriVariable as TriVariable };
//# sourceMappingURL=TriVariable.js.map
