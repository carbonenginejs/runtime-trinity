import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_renderer, _init_extra_renderer;

/** TriStepSetDebugRenderer (renderJob) - generated from schema shapeHash d5970d03.... */
let _TriStepSetDebugRende;
class TriStepSetDebugRenderer extends _TriRenderStep {
  static {
    ({
      e: [_init_renderer, _init_extra_renderer, _initProto],
      c: [_TriStepSetDebugRende, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepSetDebugRenderer",
      family: "renderJob"
    })], [[[io, io.readwrite, void 0, type.objectRef("ITr2DebugRenderer")], 16, "renderer"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_renderer(this);
  }
  /** m_debugRenderer (ITr2DebugRendererPtr) [READWRITE] */
  renderer = (_initProto(this), _init_renderer(this, null));

  /** Carbon method __init__ -> SetDebugRenderer (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw _TriRenderStep.notImplemented("TriStepSetDebugRenderer", "__init__", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepSetDebugRende as TriStepSetDebugRenderer };
//# sourceMappingURL=TriStepSetDebugRenderer.js.map
