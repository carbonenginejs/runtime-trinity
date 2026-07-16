import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_callback, _init_extra_callback;

/** TriStepPythonCB (renderJob) - generated from schema shapeHash 9ec38f1e.... */
let _TriStepPythonCB;
class TriStepPythonCB extends _TriRenderStep {
  static {
    ({
      e: [_init_callback, _init_extra_callback, _initProto],
      c: [_TriStepPythonCB, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepPythonCB",
      family: "renderJob"
    })], [[type.rawStruct("BlueScriptCallback"), 0, "callback"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetCallback"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_callback(this);
  }
  /** m_callback (BlueScriptCallback) */
  callback = (_initProto(this), _init_callback(this, null));

  /** Carbon method __init__ -> SetCallback (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw new Error("TriStepPythonCB.__init__ is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetCallback (MAP_METHOD_AND_WRAP). */
  SetCallback(...args) {
    throw new Error("TriStepPythonCB.SetCallback is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriStepPythonCB as TriStepPythonCB };
//# sourceMappingURL=TriStepPythonCB.js.map
