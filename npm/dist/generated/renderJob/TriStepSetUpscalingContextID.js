import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_upscalingContextID, _init_extra_upscalingContextID;

/** TriStepSetUpscalingContextID (renderJob) - generated from schema shapeHash e5b9bc6c.... */
let _TriStepSetUpscalingC;
class TriStepSetUpscalingContextID extends _TriRenderStep {
  static {
    ({
      e: [_init_upscalingContextID, _init_extra_upscalingContextID, _initProto],
      c: [_TriStepSetUpscalingC, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepSetUpscalingContextID",
      family: "renderJob"
    })], [[[io, io.read, type, type.uint32], 16, "upscalingContextID"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_upscalingContextID(this);
  }
  /** m_upscalingContextID (uint32_t) [READ] */
  upscalingContextID = (_initProto(this), _init_upscalingContextID(this, 0));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw _TriRenderStep.notImplemented("TriStepSetUpscalingContextID", "__init__", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepSetUpscalingC as TriStepSetUpscalingContextID };
//# sourceMappingURL=TriStepSetUpscalingContextID.js.map
