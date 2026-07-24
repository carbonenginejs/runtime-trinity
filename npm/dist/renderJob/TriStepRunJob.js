import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/runtime-utils/schema';
import { TriRenderStep as _TriRenderStep } from './TriRenderStep.js';
import { TriRenderJob as _TriRenderJob } from './TriRenderJob.js';

let _initProto, _initClass, _init_job, _init_extra_job;
let _TriStepRunJob;
class TriStepRunJob extends _TriRenderStep {
  static {
    ({
      e: [_init_job, _init_extra_job, _initProto],
      c: [_TriStepRunJob, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepRunJob",
      family: "renderJob"
    })], [[[io, io.persist, void 0, type.objectRef("TriRenderJob")], 16, "job"], [[carbon, carbon.method, impl, impl.adapted], 18, "__init__"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetRenderJob"], [[carbon, carbon.method, impl, impl.implemented], 18, "Execute"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_job(this);
  }
  job = (_initProto(this), _init_job(this, null));
  __init__(job = null) {
    this.SetRenderJob(job);
  }
  SetRenderJob(job) {
    this.job = job ?? null;
  }
  Execute(realTime, simTime, executor) {
    if (!this.job) return _TriRenderJob.StepResult.RS_OK;
    switch (this.job.Run(realTime, simTime, executor)) {
      case _TriRenderJob.Status.RJ_DONE:
        return _TriRenderJob.StepResult.RS_OK;
      case _TriRenderJob.Status.RJ_IN_PROGRESS:
        return _TriRenderJob.StepResult.RS_IN_PROGRESS;
      case _TriRenderJob.Status.RJ_FAILED:
        return _TriRenderJob.StepResult.RS_FAILED;
      default:
        return _TriRenderJob.StepResult.RS_FAILED;
    }
  }
  static {
    _initClass();
  }
}

export { _TriStepRunJob as TriStepRunJob };
//# sourceMappingURL=TriStepRunJob.js.map
