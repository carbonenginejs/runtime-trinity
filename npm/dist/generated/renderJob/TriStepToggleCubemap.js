import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_m_showCubemap, _init_extra_m_showCubemap;

/** TriStepToggleCubemap (renderJob) - generated from schema shapeHash 5e06ac5c.... */
let _TriStepToggleCubemap;
class TriStepToggleCubemap extends _TriRenderStep {
  static {
    ({
      e: [_init_m_showCubemap, _init_extra_m_showCubemap, _initProto],
      c: [_TriStepToggleCubemap, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepToggleCubemap",
      family: "renderJob"
    })], [[[io, io.readwrite, type, type.boolean], 16, "m_showCubemap"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_m_showCubemap(this);
  }
  /** m_showCubemap (bool) [READWRITE] */
  m_showCubemap = (_initProto(this), _init_m_showCubemap(this, true));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw new Error("TriStepToggleCubemap.__init__ is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriStepToggleCubemap as TriStepToggleCubemap };
//# sourceMappingURL=TriStepToggleCubemap.js.map
