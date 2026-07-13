import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsShaderParameter } from './CjsShaderParameter.js';

let _initProto, _initClass, _init_value, _init_extra_value, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name;
let _TriFloatArrayParamet;
class TriFloatArrayParameter extends CjsShaderParameter {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_name, _init_extra_name, _initProto],
      c: [_TriFloatArrayParamet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriFloatArrayParameter",
      family: "shader"
    })], [[[io, io.notify, io, io.persist, void 0, type.list("TriVector4")], 16, "value"], [[io, io.read, type, type.boolean], 16, "usedByCurrentTechnique"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"]], 0, void 0, CjsShaderParameter));
  }
  value = (_initProto(this), _init_value(this, []));
  usedByCurrentTechnique = (_init_extra_value(this), _init_usedByCurrentTechnique(this, false));
  usedByCurrentEffect = (_init_extra_usedByCurrentTechnique(this), _init_usedByCurrentEffect(this, false));
  name = (_init_extra_usedByCurrentEffect(this), _init_name(this, ""));
  #cachedEffect = (_init_extra_name(this), null);
  GetParameterName() {
    return this.name;
  }
  Initialize() {
    return true;
  }
  OnModified(_value) {
    this.RebuildEffectHandles(this.#cachedEffect);
    return true;
  }
  RebuildEffectHandles(effectRes) {
    this.#cachedEffect = effectRes;
    const used = !!this.name && CjsShaderParameter.hasEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }
  CopyValueToEffect(_inputType, out, size = Number.POSITIVE_INFINITY) {
    const byteLimit = Number.isFinite(size) ? Math.max(0, size) : Infinity;
    const floatLimit = Math.min(Number(out.length), Math.floor(byteLimit / 4));
    let offset = 0;
    for (const entry of this.value) {
      if (offset >= floatLimit) {
        break;
      }
      const count = Math.min(4, floatLimit - offset);
      _TriFloatArrayParamet.copyVector4ToDestination(out, entry.data, offset, count);
      offset += count;
    }
  }
  static copyVector4ToDestination(out, value, offset, count) {
    for (let i = 0; i < count; i++) {
      out[offset + i] = value[i];
    }
  }
  static {
    _initClass();
  }
}

export { _TriFloatArrayParamet as TriFloatArrayParameter };
//# sourceMappingURL=TriFloatArrayParameter.js.map
