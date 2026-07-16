import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_events, _init_extra_events;

/** Tr2VisibilityResults (trinityCore) - generated from schema shapeHash 002a400b.... */
let _Tr2VisibilityResults;
class Tr2VisibilityResults extends CjsModel {
  static {
    ({
      e: [_init_events, _init_extra_events, _initProto],
      c: [_Tr2VisibilityResults, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2VisibilityResults",
      family: "trinityCore"
    })], [[type.list("Event"), 0, "events"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Clear"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetNumVisibilityEvents"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_events(this);
  }
  /** m_events (EventVector) */
  events = (_initProto(this), _init_events(this, []));

  /** Carbon method Clear (MAP_METHOD_AND_WRAP). */
  Clear(...args) {
    throw new Error("Tr2VisibilityResults.Clear is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetNumVisibilityEvents (MAP_METHOD_AND_WRAP). */
  GetNumVisibilityEvents(...args) {
    throw new Error("Tr2VisibilityResults.GetNumVisibilityEvents is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2VisibilityResults as Tr2VisibilityResults };
//# sourceMappingURL=Tr2VisibilityResults.js.map
