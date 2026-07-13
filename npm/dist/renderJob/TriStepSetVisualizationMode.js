import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { TriRenderJob as _TriRenderJob } from './TriRenderJob.js';
import { TriRenderStep as _TriRenderStep } from './TriRenderStep.js';

let _initProto, _initClass, _init_object, _init_extra_object, _init_mode, _init_extra_mode;
let _TriStepSetVisualizat;
class TriStepSetVisualizationMode extends _TriRenderStep {
  static {
    ({
      e: [_init_object, _init_extra_object, _init_mode, _init_extra_mode, _initProto],
      c: [_TriStepSetVisualizat, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepSetVisualizationMode",
      family: "renderJob"
    })], [[[io, io.readwrite, void 0, type.objectRef("ITr2VisualizationModeRenderer")], 16, "object"], [[io, io.readwrite, type, type.int32], 16, "mode"], [[carbon, carbon.method, impl, impl.adapted], 18, "__init__"], [[carbon, carbon.method, impl, impl.implemented], 18, "Execute"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_mode(this);
  }
  object = (_initProto(this), _init_object(this, null));
  mode = (_init_extra_object(this), _init_mode(this, 0));
  __init__(object = null, mode = 0) {
    this.SetObject(object);
    this.SetVisualizationMode(mode);
  }
  SetObject(object) {
    this.object = object ?? null;
  }
  SetVisualizationMode(mode) {
    this.mode = Number(mode) | 0;
  }
  Execute() {
    this.object?.SetVisualizationMode?.(this.mode);
    return _TriRenderJob.StepResult.RS_OK;
  }
  static {
    _initClass();
  }
}

export { _TriStepSetVisualizat as TriStepSetVisualizationMode };
//# sourceMappingURL=TriStepSetVisualizationMode.js.map
