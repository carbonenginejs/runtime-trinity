import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_exists, _init_extra_exists, _init_resources, _init_extra_resources, _init_uavs, _init_extra_uavs, _init_samplers, _init_extra_samplers, _init_shader, _init_extra_shader, _init_constants, _init_extra_constants, _init_constantValueSize, _init_extra_constantValueSize, _init_constantValues, _init_extra_constantValues, _init_signature, _init_extra_signature, _init_annotation, _init_extra_annotation;

/** Tr2EffectStageInput (shader) - generated from schema shapeHash bc7f041a.... */
let _Tr2EffectStageInput;
class Tr2EffectStageInput extends CjsModel {
  static {
    ({
      e: [_init_exists, _init_extra_exists, _init_resources, _init_extra_resources, _init_uavs, _init_extra_uavs, _init_samplers, _init_extra_samplers, _init_shader, _init_extra_shader, _init_constants, _init_extra_constants, _init_constantValueSize, _init_extra_constantValueSize, _init_constantValues, _init_extra_constantValues, _init_signature, _init_extra_signature, _init_annotation, _init_extra_annotation],
      c: [_Tr2EffectStageInput, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2EffectStageInput",
      family: "shader"
    })], [[[type, type.boolean], 16, "exists"], [type.map("Tr2EffectResource"), 0, "resources"], [type.map("Tr2EffectResource"), 0, "uavs"], [type.map("Tr2SamplerSetup"), 0, "samplers"], [[type, type.uint32], 16, "shader"], [type.list("Tr2EffectConstant"), 0, "constants"], [[type, type.uint32], 16, "constantValueSize"], [type.typedArray("Uint8Array"), 0, "constantValues"], [type.rawStruct("Tr2ShaderSignatureAL"), 0, "signature"], [type.list("Tr2EffectParameterAnnotation"), 0, "annotation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_annotation(this);
  }
  /** m_exists (bool) */
  exists = _init_exists(this, false);

  /** resources (Tr2EffectResourceMap) */
  resources = (_init_extra_exists(this), _init_resources(this, new Map()));

  /** uavs (Tr2EffectResourceMap) */
  uavs = (_init_extra_resources(this), _init_uavs(this, new Map()));

  /** samplers (Tr2SamplerSetupMap) */
  samplers = (_init_extra_uavs(this), _init_samplers(this, new Map()));

  /** m_shader (unsigned) */
  shader = (_init_extra_samplers(this), _init_shader(this, 0xffffffff));

  /** constants (Tr2EffectConstantVector) */
  constants = (_init_extra_shader(this), _init_constants(this, []));

  /** m_constantValueSize (unsigned) */
  constantValueSize = (_init_extra_constants(this), _init_constantValueSize(this, 0));

  /** constantValues (char[SHADER_CONSTANTS_MAX]) */
  constantValues = (_init_extra_constantValueSize(this), _init_constantValues(this, new Uint8Array(0)));

  /** signature (Tr2ShaderSignatureAL) */
  signature = (_init_extra_constantValues(this), _init_signature(this, null));

  /** annotation (Tr2EffectParameterAnnotationMap) */
  annotation = (_init_extra_signature(this), _init_annotation(this, []));
  static {
    _initClass();
  }
}

export { _Tr2EffectStageInput as Tr2EffectStageInput };
//# sourceMappingURL=Tr2EffectStageInput.js.map
