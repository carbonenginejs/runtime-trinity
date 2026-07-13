import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_variableName, _init_extra_variableName;

/** TriStepSetVariableStore (renderJob) - generated from schema shapeHash d8d0582f.... */
let _TriStepSetVariableSt;
class TriStepSetVariableStore extends _TriRenderStep {
  static {
    ({
      e: [_init_variableName, _init_extra_variableName, _initProto],
      c: [_TriStepSetVariableSt, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepSetVariableStore",
      family: "renderJob"
    })], [[[io, io.persist, type, type.string], 16, "variableName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_variableName(this);
  }
  /** m_variableName (std::string) [READWRITE, PERSIST] */
  variableName = (_initProto(this), _init_variableName(this, ""));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw _TriRenderStep.notImplemented("TriStepSetVariableStore", "__init__", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepSetVariableSt as TriStepSetVariableStore };
//# sourceMappingURL=TriStepSetVariableStore.js.map
