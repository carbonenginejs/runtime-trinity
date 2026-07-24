import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/runtime-utils/schema';
import { TriRenderStep as _TriRenderStep } from './TriRenderStep.js';
import { TriRenderJob as _TriRenderJob } from './TriRenderJob.js';

let _initProto, _initClass;

// Carbon: RenderJob/TriStepPushProjection.cpp — Execute pushes the current
// projection (Tr2Renderer::PushProjection).
let _TriStepPushProjectio;
class TriStepPushProjection extends _TriRenderStep {
  static {
    ({
      e: [_initProto],
      c: [_TriStepPushProjectio, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepPushProjection",
      family: "renderJob"
    })], [[[carbon, carbon.method, impl, impl.implemented], 18, "Execute"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _initProto(this);
  }
  Execute(_realTime, _simTime, executor) {
    executor?.PushProjection?.();
    return _TriRenderJob.StepResult.RS_OK;
  }
  static {
    _initClass();
  }
}

export { _TriStepPushProjectio as TriStepPushProjection };
//# sourceMappingURL=TriStepPushProjection.js.map
