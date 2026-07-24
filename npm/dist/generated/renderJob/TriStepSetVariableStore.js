import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';
import { Tr2VariableStore as _Tr2VariableStore } from '../../trinityCore/Tr2VariableStore.js';

let _initProto, _initClass, _init_variableName, _init_extra_variableName, _init_value, _init_extra_value;

/** TriStepSetVariableStore (renderJob) - generated from schema shapeHash d8d0582f.... */
let _TriStepSetVariableSt;
class TriStepSetVariableStore extends _TriRenderStep {
  static {
    ({
      e: [_init_variableName, _init_extra_variableName, _init_value, _init_extra_value, _initProto],
      c: [_TriStepSetVariableSt, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepSetVariableStore",
      family: "renderJob"
    })], [[[io, io.persist, type, type.string], 16, "variableName"], [[io, io.readwrite, void 0, type.rawStruct("TriVariableValue")], 16, "value"], [[carbon, carbon.method, impl, impl.adapted], 18, "__init__"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "Execute"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_value(this);
  }
  /** m_variableName (std::string) [READWRITE, PERSIST] */
  variableName = (_initProto(this), _init_variableName(this, ""));
  value = (_init_extra_variableName(this), _init_value(this, null));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(name = undefined, value = undefined) {
    if (name !== undefined) this.SetName(name);
    if (value !== undefined && value !== null) this.SetValue(value);
  }
  SetName(name) {
    this.variableName = String(name ?? "");
  }
  GetValue() {
    if (ArrayBuffer.isView(this.value)) return this.value.slice();
    if (Array.isArray(this.value)) return this.value.slice();
    return this.value;
  }
  SetValue(value) {
    this.value = ArrayBuffer.isView(value) || Array.isArray(value) ? value.slice() : value;
  }
  Execute(_realTime, _simTime, _executor) {
    if (this.variableName && this.value !== null) _Tr2VariableStore.GlobalStore().RegisterVariable(this.variableName, this.value);
    return _TriRenderStep.Result.RS_OK;
  }
  static {
    _initClass();
  }
}

export { _TriStepSetVariableSt as TriStepSetVariableStore };
//# sourceMappingURL=TriStepSetVariableStore.js.map
