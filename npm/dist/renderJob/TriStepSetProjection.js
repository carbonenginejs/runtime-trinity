import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { TriRenderJob as _TriRenderJob } from './TriRenderJob.js';
import { TriRenderStep as _TriRenderStep } from './TriRenderStep.js';

let _initProto, _initClass, _init_projection, _init_extra_projection;
let _TriStepSetProjection;
class TriStepSetProjection extends _TriRenderStep {
  static {
    ({
      e: [_init_projection, _init_extra_projection, _initProto],
      c: [_TriStepSetProjection, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepSetProjection",
      family: "renderJob"
    })], [[[io, io.persist, void 0, type.objectRef("TriProjection")], 16, "projection"], [[carbon, carbon.method, impl, impl.adapted], 18, "__init__"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetProjection"], [[carbon, carbon.method, impl, impl.implemented], 18, "Execute"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_projection(this);
  }
  projection = (_initProto(this), _init_projection(this, null));
  __init__(projection = null) {
    this.SetProjection(projection);
  }
  SetProjection(projection) {
    this.projection = projection ?? null;
  }
  Execute(_realTime, _simTime, executor) {
    if (this.projection) executor?.SetProjection?.(this.projection);
    return _TriRenderJob.StepResult.RS_OK;
  }
  static {
    _initClass();
  }
}

export { _TriStepSetProjection as TriStepSetProjection };
//# sourceMappingURL=TriStepSetProjection.js.map
