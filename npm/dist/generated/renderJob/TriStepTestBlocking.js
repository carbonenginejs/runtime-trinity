import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initClass, _init_inProgress, _init_extra_inProgress;

/** TriStepTestBlocking (renderJob) - generated from schema shapeHash bcd51264.... */
let _TriStepTestBlocking;
class TriStepTestBlocking extends _TriRenderStep {
  static {
    ({
      e: [_init_inProgress, _init_extra_inProgress],
      c: [_TriStepTestBlocking, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepTestBlocking",
      family: "renderJob"
    })], [[[io, io.persist, type, type.boolean], 16, "inProgress"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_inProgress(this);
  }
  /** m_inProgress (bool) [READWRITE, PERSIST] */
  inProgress = _init_inProgress(this, true);
  static {
    _initClass();
  }
}

export { _TriStepTestBlocking as TriStepTestBlocking };
//# sourceMappingURL=TriStepTestBlocking.js.map
