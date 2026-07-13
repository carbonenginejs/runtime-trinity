import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_registry, _init_extra_registry, _init_indexInRegistry, _init_extra_indexInRegistry;

/** EveEntity (eve) - generated from schema shapeHash 598ee56f.... */
let _EveEntity;
class EveEntity extends CjsModel {
  static {
    ({
      e: [_init_registry, _init_extra_registry, _init_indexInRegistry, _init_extra_indexInRegistry],
      c: [_EveEntity, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveEntity",
      family: "eve"
    })], [[type.objectRef("EveComponentRegistry"), 0, "registry"], [[type, type.uint64], 16, "indexInRegistry"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_indexInRegistry(this);
  }
  /** m_registry (EveComponentRegistry*) */
  registry = _init_registry(this, null);

  /** m_indexInRegistry (size_t) */
  indexInRegistry = (_init_extra_registry(this), _init_indexInRegistry(this, 0));
  static {
    _initClass();
  }
}

export { _EveEntity as EveEntity };
//# sourceMappingURL=EveEntity.js.map
