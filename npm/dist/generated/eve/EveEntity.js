import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_registry, _init_extra_registry, _init_indexInRegistry, _init_extra_indexInRegistry;

/** EveEntity (eve) - generated from schema shapeHash 598ee56f.... */
let _EveEntity;
class EveEntity extends CjsModel {
  static {
    ({
      e: [_init_registry, _init_extra_registry, _init_indexInRegistry, _init_extra_indexInRegistry, _initProto],
      c: [_EveEntity, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveEntity",
      family: "eve"
    })], [[type.objectRef("EveComponentRegistry"), 0, "registry"], [[type, type.uint64], 16, "indexInRegistry"], [[impl, impl.implemented], 18, "IsInRegistry"], [[impl, impl.implemented], 18, "Register"], [[impl, impl.implemented], 18, "UnRegister"], [[impl, impl.implemented], 18, "ReRegister"], [[impl, impl.implemented], 18, "GetComponentRegistry"], [[impl, impl.implemented], 18, "GetComponentIndex"], [[impl, impl.implemented], 18, "SetComponentState"], [[impl, impl.implemented], 18, "RemoveComponentState"], [[impl, impl.implemented], 18, "ClearComponentState"], [[impl, impl.implemented], 18, "RegisterComponents"], [[impl, impl.implemented], 18, "UnRegisterComponents"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_indexInRegistry(this);
  }
  #componentIndexLookup = (_initProto(this), new Map());

  /** m_registry (EveComponentRegistry*) */
  registry = _init_registry(this, null);

  /** m_indexInRegistry (size_t) */
  indexInRegistry = (_init_extra_registry(this), _init_indexInRegistry(this, -1));
  IsInRegistry() {
    return this.registry !== null;
  }
  Register(registry) {
    if (this.registry === registry) {
      return;
    }
    if (this.registry) {
      this.UnRegister(this.registry);
    }
    if (!registry) {
      return;
    }
    registry.Register(this);
    this.RegisterComponents();
  }
  UnRegister(registry) {
    if (!registry || this.registry !== registry) {
      return;
    }
    registry.UnRegisterAllComponents(this);
    this.UnRegisterComponents();
    registry.UnRegister(this);
  }
  ReRegister() {
    this.registry?.ReRegister(this);
  }
  GetComponentRegistry() {
    return this.registry;
  }
  GetComponentIndex(componentBit) {
    return this.#componentIndexLookup.get(componentBit);
  }
  SetComponentState(componentBit, index) {
    this.#componentIndexLookup.set(componentBit, index);
  }
  RemoveComponentState(componentBit) {
    this.#componentIndexLookup.delete(componentBit);
  }
  ClearComponentState() {
    this.#componentIndexLookup.clear();
  }
  RegisterComponents() {}
  UnRegisterComponents() {}
  static {
    _initClass();
  }
}

export { _EveEntity as EveEntity };
//# sourceMappingURL=EveEntity.js.map
