import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_componentCollectionLoopGuard, _init_extra_componentCollectionLoopGuard, _init_registeredEntities, _init_extra_registeredEntities;

/** EveComponentRegistry (eve/scene) - generated from schema shapeHash abca1458.... */
let _EveComponentRegistry;
class EveComponentRegistry extends CjsModel {
  static {
    ({
      e: [_init_componentCollectionLoopGuard, _init_extra_componentCollectionLoopGuard, _init_registeredEntities, _init_extra_registeredEntities, _initProto],
      c: [_EveComponentRegistry, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveComponentRegistry",
      family: "eve/scene"
    })], [[type.rawStruct("std::shared_mutex"), 0, "componentCollectionLoopGuard"], [type.list("EveEntity"), 0, "registeredEntities"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetComponentInfo"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_registeredEntities(this);
  }
  /** m_componentCollectionLoopGuard (mutable std::shared_mutex) */
  componentCollectionLoopGuard = (_initProto(this), _init_componentCollectionLoopGuard(this, null));

  /** m_registeredEntities (std::vector<EveEntity*>) */
  registeredEntities = (_init_extra_componentCollectionLoopGuard(this), _init_registeredEntities(this, []));

  /** Carbon method GetComponentInfo (MAP_METHOD_AND_WRAP). */
  GetComponentInfo(...args) {
    throw new Error("EveComponentRegistry.GetComponentInfo is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveComponentRegistry as EveComponentRegistry };
//# sourceMappingURL=EveComponentRegistry.js.map
