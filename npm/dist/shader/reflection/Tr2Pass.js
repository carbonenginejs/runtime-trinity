import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_stageInputs, _init_extra_stageInputs, _init_renderStates, _init_extra_renderStates, _init_shaderTypeMask, _init_extra_shaderTypeMask, _init_shaderProgram, _init_extra_shaderProgram, _init_resourceSetDesc, _init_extra_resourceSetDesc, _init_indirectLayout, _init_extra_indirectLayout;

/** Tr2Pass (shader) - generated from schema shapeHash 26164bfc.... */
let _Tr2Pass;
class Tr2Pass extends CjsModel {
  static {
    ({
      e: [_init_stageInputs, _init_extra_stageInputs, _init_renderStates, _init_extra_renderStates, _init_shaderTypeMask, _init_extra_shaderTypeMask, _init_shaderProgram, _init_extra_shaderProgram, _init_resourceSetDesc, _init_extra_resourceSetDesc, _init_indirectLayout, _init_extra_indirectLayout],
      c: [_Tr2Pass, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Pass",
      family: "shader"
    })], [[type.list("Tr2EffectStageInput"), 0, "stageInputs"], [[type, type.uint32], 16, "renderStates"], [[type, type.uint32], 16, "shaderTypeMask"], [[type, type.uint32], 16, "shaderProgram"], [type.rawStruct("Tr2ResourceSetDescriptionAL"), 0, "resourceSetDesc"], [type.rawStruct("Tr2IndirectDrawBufferLayout"), 0, "indirectLayout"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_indirectLayout(this);
  }
  /** stageInputs (Tr2EffectStageInput) */
  stageInputs = _init_stageInputs(this, []);

  /** renderStates (unsigned int) */
  renderStates = (_init_extra_stageInputs(this), _init_renderStates(this, 0));

  /** shaderTypeMask (unsigned int) */
  shaderTypeMask = (_init_extra_renderStates(this), _init_shaderTypeMask(this, 0));

  /** shaderProgram (unsigned int) */
  shaderProgram = (_init_extra_shaderTypeMask(this), _init_shaderProgram(this, 0));

  /** resourceSetDesc (Tr2ResourceSetDescriptionAL) */
  resourceSetDesc = (_init_extra_shaderProgram(this), _init_resourceSetDesc(this, null));

  /** indirectLayout (Tr2IndirectDrawBufferLayout) */
  indirectLayout = (_init_extra_resourceSetDesc(this), _init_indirectLayout(this, null));
  static {
    _initClass();
  }
}

export { _Tr2Pass as Tr2Pass };
//# sourceMappingURL=Tr2Pass.js.map
