import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass;
let _Tr2VisibilityResults;
class Tr2VisibilityResults extends CjsModel {
  static {
    ({
      e: [_initProto],
      c: [_Tr2VisibilityResults, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2VisibilityResults",
      family: "trinityCore"
    })], [[[carbon, carbon.method, impl, impl.adapted], 18, "AddVisibilityEvent"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetEvents"], [[carbon, carbon.method, impl, impl.implemented], 18, "Clear"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetNumVisibilityEvents"]], 0, void 0, CjsModel));
  }
  // Carbon's m_events is private transient execution state, not Blue data.
  #events = (_initProto(this), []);

  /** Adds the value-like visibility event emitted by a visibility executor. */
  AddVisibilityEvent(event) {
    this.#events.push(event);
  }

  /** Returns a detached container view of the current visibility events. */
  GetEvents() {
    return this.#events.slice();
  }

  /** Clears the result set. */
  Clear() {
    this.#events.length = 0;
  }

  /** Gets the number of visibility events in the result set. */
  GetNumVisibilityEvents() {
    return this.#events.length;
  }
  static {
    _initClass();
  }
}

export { _Tr2VisibilityResults as Tr2VisibilityResults };
//# sourceMappingURL=Tr2VisibilityResults.js.map
