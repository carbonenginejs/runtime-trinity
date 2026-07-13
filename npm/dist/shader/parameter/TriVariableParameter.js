import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { CjsShaderParameter } from './CjsShaderParameter.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_variableName, _init_extra_variableName;

/** TriVariableParameter (shader) - generated from schema shapeHash c1071754.... */
let _TriVariableParameter;
class TriVariableParameter extends CjsShaderParameter {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_usedByCurrentTechnique, _init_extra_usedByCurrentTechnique, _init_usedByCurrentEffect, _init_extra_usedByCurrentEffect, _init_variableName, _init_extra_variableName, _initProto],
      c: [_TriVariableParameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriVariableParameter",
      family: "shader"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.boolean], 16, "usedByCurrentTechnique"], [[io, io.read, type, type.boolean], 16, "usedByCurrentEffect"], [[io, io.notify, io, io.persist, type, type.string], 16, "variableName"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildEffectHandles"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyToResourceSet"], [[carbon, carbon.method, impl, impl.adapted], 18, "ApplyUav"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetVariableType"]], 0, void 0, CjsShaderParameter));
  }
  /** m_name (BlueSharedString) [READWRITE, NOTIFY, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

  /** m_isUsedByEffect (bool) [READ] */
  usedByCurrentTechnique = (_init_extra_name(this), _init_usedByCurrentTechnique(this, false));

  /** m_isUsedByEffect (bool) [READ] */
  usedByCurrentEffect = (_init_extra_usedByCurrentTechnique(this), _init_usedByCurrentEffect(this, false));

  /** m_variableName (BlueSharedString) [READWRITE, NOTIFY, PERSIST] */
  variableName = (_init_extra_usedByCurrentEffect(this), _init_variableName(this, ""));
  variable = (_init_extra_variableName(this), null);
  variableStore = null;
  cachedEffect = null;
  GetParameterName() {
    return this.name;
  }
  Initialize(variableStore = null) {
    this.variableStore = variableStore ?? this.variableStore;
    if (!this.variableName) {
      this.variable = null;
      return true;
    }
    this.variable = this.variableStore?.GetVariable?.(this.variableName) ?? this.variableStore?.getVariable?.(this.variableName) ?? this.variableStore?.[this.variableName] ?? this.variable;
    return true;
  }
  OnModified(properties = null) {
    if (CjsModel.hasModifiedProperty(properties, "variableName")) {
      this.Initialize(this.variableStore);
    }
    if (CjsModel.hasModifiedProperty(properties, "name")) {
      this.RebuildEffectHandles(this.cachedEffect);
    }
    return true;
  }
  RebuildEffectHandles(effectRes) {
    this.cachedEffect = effectRes;
    this.usedByCurrentEffect = false;
    this.usedByCurrentTechnique = false;
    if (!this.name || !effectRes || !this.variable) {
      return;
    }
    const type = this.GetVariableType();
    const isResource = type === "texture" || type === "textureRes" || type === "gpuBuffer" || type === 4 || type === 5;
    const used = isResource ? !!CjsShaderParameter.getEffectResource(effectRes, this.name) : !!CjsShaderParameter.getEffectConstant(effectRes, this.name);
    this.usedByCurrentEffect = used;
    this.usedByCurrentTechnique = used;
  }
  CopyValueToEffect(inputType, dest, size, renderContext) {
    this.variable?.CopyValueToEffect?.(inputType, dest, size, renderContext);
  }
  CopyToResourceSet() {
    return false;
  }
  ApplyUav() {
    return false;
  }
  GetVariableType() {
    return this.variable?.GetType?.() ?? this.variable?.type ?? "invalid";
  }
  static {
    _initClass();
  }
}

export { _TriVariableParameter as TriVariableParameter };
//# sourceMappingURL=TriVariableParameter.js.map
