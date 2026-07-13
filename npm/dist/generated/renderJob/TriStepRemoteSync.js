import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_id, _init_extra_id, _init_begin, _init_extra_begin, _init_end, _init_extra_end, _init_init, _init_extra_init;

/** TriStepRemoteSync (renderJob) - generated from schema shapeHash d691d472.... */
let _TriStepRemoteSync;
class TriStepRemoteSync extends _TriRenderStep {
  static {
    ({
      e: [_init_id, _init_extra_id, _init_begin, _init_extra_begin, _init_end, _init_extra_end, _init_init, _init_extra_init, _initProto],
      c: [_TriStepRemoteSync, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepRemoteSync",
      family: "renderJob"
    })], [[[type, type.unknown], 16, "id"], [type.rawStruct("HANDLE"), 0, "begin"], [type.rawStruct("HANDLE"), 0, "end"], [type.rawStruct("HANDLE"), 0, "init"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_init(this);
  }
  /** id (m_id =) */
  id = (_initProto(this), _init_id(this, null));

  /** m_begin (HANDLE) */
  begin = (_init_extra_id(this), _init_begin(this, null));

  /** m_end (HANDLE) */
  end = (_init_extra_begin(this), _init_end(this, null));

  /** m_init (HANDLE) */
  init = (_init_extra_end(this), _init_init(this, null));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw _TriRenderStep.notImplemented("TriStepRemoteSync", "__init__", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepRemoteSync as TriStepRemoteSync };
//# sourceMappingURL=TriStepRemoteSync.js.map
