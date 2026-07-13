import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_object, _init_extra_object;

/** TriStepUpdate (renderJob) - generated from schema shapeHash 70b08936.... */
let _TriStepUpdate;
class TriStepUpdate extends _TriRenderStep {
  static {
    ({
      e: [_init_object, _init_extra_object, _initProto],
      c: [_TriStepUpdate, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepUpdate",
      family: "renderJob"
    })], [[[io, io.readwrite, void 0, type.objectRef("ITr2Updateable")], 16, "object"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_object(this);
  }
  /** m_object (ITr2UpdateablePtr) [READWRITE] */
  object = (_initProto(this), _init_object(this, null));

  /** Carbon method __init__ -> SetUpdateable (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw _TriRenderStep.notImplemented("TriStepUpdate", "__init__", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepUpdate as TriStepUpdate };
//# sourceMappingURL=TriStepUpdate.js.map
