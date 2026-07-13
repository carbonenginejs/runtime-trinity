import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { Tr2EffectDescription as _Tr2EffectDescription } from './reflection/Tr2EffectDescription.js';

let _initClass, _init_sortValue, _init_extra_sortValue, _init_effect, _init_extra_effect, _init_hasVertexBufferAccessInRtShadow, _init_extra_hasVertexBufferAccessInRtShadow;

/** Tr2Shader (shader) - generated from schema shapeHash 39e1616a.... */
let _Tr2Shader;
class Tr2Shader extends CjsModel {
  static {
    ({
      e: [_init_sortValue, _init_extra_sortValue, _init_effect, _init_extra_effect, _init_hasVertexBufferAccessInRtShadow, _init_extra_hasVertexBufferAccessInRtShadow],
      c: [_Tr2Shader, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Shader",
      family: "shader"
    })], [[[type, type.uint32], 16, "sortValue"], [type.rawStruct("Tr2EffectDescription"), 0, "effect"], [[type, type.boolean], 16, "hasVertexBufferAccessInRtShadow"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_hasVertexBufferAccessInRtShadow(this);
  }
  /** m_sortValue (unsigned int) */
  sortValue = _init_sortValue(this, 0);

  /** m_effect (Tr2EffectDescription) */
  effect = (_init_extra_sortValue(this), _init_effect(this, new _Tr2EffectDescription()));

  /** m_hasVertexBufferAccessInRtShadow (bool) */
  hasVertexBufferAccessInRtShadow = (_init_extra_effect(this), _init_hasVertexBufferAccessInRtShadow(this, false));
  GetTechniqueIndex(name = "Main") {
    const techniques = this.effect?.techniques ?? [];
    if (!techniques.length) {
      return -1;
    }
    if (name === "ANY_TECHNIQUE" || name === "Any" || name === "") {
      return 0;
    }
    return techniques.findIndex(technique => technique?.name === name);
  }
  GetPassCount(techniqueIndex = 0) {
    return this.effect?.techniques?.[techniqueIndex]?.passes?.length ?? 0;
  }
  GetConstant(name) {
    return _Tr2Shader.findStageValue(this.effect, name, "constants");
  }
  GetResource(name) {
    return _Tr2Shader.findStageValue(this.effect, name, "resources") ?? _Tr2Shader.findStageValue(this.effect, name, "uavs");
  }
  GetParameterAnnotations(parameterName) {
    return _Tr2Shader.findAnnotationSet(this.effect?.annotations, parameterName);
  }
  GetSortValue() {
    return this.sortValue;
  }
  GetEffectDescription() {
    return this.effect;
  }
  GetEffect() {
    return this.effect;
  }
  GetShaderTypeMask(techniqueIndex = 0) {
    return Number(this.effect?.techniques?.[techniqueIndex]?.shaderTypeMask ?? 0);
  }
  ProcessEffect() {
    this.sortValue = 0;
    const pass = this.effect?.techniques?.[0]?.passes?.[0];
    if (!pass) {
      return;
    }
    const stages = pass.stageInputs ?? [];
    const pixelShader = Number(stages[1]?.shader ?? stages[1]?.m_shader ?? 0) & 0x3ff;
    const vertexShader = Number(stages[0]?.shader ?? stages[0]?.m_shader ?? 0) & 0x3ff;
    const renderStates = Number(pass.renderStates ?? 0) & 0x3ff;
    const passCount = Number(this.effect?.techniques?.[0]?.passes?.length ?? 0) & 0x3;
    this.sortValue = passCount << 30 | pixelShader << 20 | vertexShader << 10 | renderStates;
  }
  HasVertexBufferAccessInRtShadow() {
    return this.hasVertexBufferAccessInRtShadow;
  }
  static findStageValue(effect, name, key) {
    for (const stage of _Tr2Shader.iterateStages(effect)) {
      const values = stage?.[key];
      const found = _Tr2Shader.findNamedCollectionValue(values, name);
      if (found) {
        return found;
      }
    }
    return null;
  }
  static iterateStages(effect) {
    const stages = [];
    for (const technique of effect?.techniques ?? []) {
      for (const pass of technique?.passes ?? []) {
        stages.push(...(pass?.stageInputs ?? []));
      }
      for (const library of technique?.libraries ?? []) {
        if (library?.globalInput) {
          stages.push(library.globalInput);
        }
        if (library?.localInput) {
          stages.push(library.localInput);
        }
      }
    }
    return stages;
  }
  static findNamedCollectionValue(values, name) {
    if (!values) {
      return null;
    }
    if (Array.isArray(values)) {
      return values.find(value => value?.name === name || value?.[1]?.name === name) ?? null;
    }
    if (values instanceof Map) {
      for (const value of values.values()) {
        if (value?.name === name) {
          return value;
        }
      }
      return null;
    }
    for (const value of Object.values(values)) {
      if (value?.name === name) {
        return value;
      }
    }
    return null;
  }
  static findAnnotationSet(annotations, parameterName) {
    if (!annotations) {
      return null;
    }
    if (annotations instanceof Map) {
      return annotations.get(parameterName) ?? null;
    }
    if (Array.isArray(annotations)) {
      const entry = annotations.find(item => item?.name === parameterName || item?.[0] === parameterName);
      return entry?.annotations ?? entry?.value ?? entry?.[1] ?? null;
    }
    return annotations[parameterName] ?? null;
  }
  static {
    _initClass();
  }
}

export { _Tr2Shader as Tr2Shader };
//# sourceMappingURL=Tr2Shader.js.map
