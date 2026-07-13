import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_parentVariableStore, _init_extra_parentVariableStore;

/** Tr2VariableStore (trinityCore) - generated from schema shapeHash 30ecd74c.... */
let _Tr2VariableStore;
class Tr2VariableStore extends CjsModel {
  static {
    ({
      e: [_init_parentVariableStore, _init_extra_parentVariableStore, _initProto],
      c: [_Tr2VariableStore, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2VariableStore",
      family: "trinityCore"
    })], [[type.objectRef("Tr2VariableStore"), 0, "parentVariableStore"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RegisterVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocalNames"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FindVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocalVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FindLocalVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UnregisterVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UnregisterLocalVariable"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_parentVariableStore(this);
  }
  /** m_parentVariableStore (Tr2VariableStorePtr) */
  parentVariableStore = (_initProto(this), _init_parentVariableStore(this, null));

  /** Carbon method RegisterVariable -> PyRegisterVariable (MAP_METHOD). */
  RegisterVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "RegisterVariable", args);
  }

  /** Carbon method GetLocalNames (MAP_METHOD_AND_WRAP). */
  GetLocalNames(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "GetLocalNames", args);
  }

  /** Carbon method GetVariable -> PyGetVariable (MAP_METHOD). */
  GetVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "GetVariable", args);
  }

  /** Carbon method FindVariable -> PyFindVariable (MAP_METHOD). */
  FindVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "FindVariable", args);
  }

  /** Carbon method GetLocalVariable -> PyGetLocalVariable (MAP_METHOD). */
  GetLocalVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "GetLocalVariable", args);
  }

  /** Carbon method FindLocalVariable -> PyFindLocalVariable (MAP_METHOD). */
  FindLocalVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "FindLocalVariable", args);
  }

  /** Carbon method UnregisterVariable (MAP_METHOD_AND_WRAP). */
  UnregisterVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "UnregisterVariable", args);
  }

  /** Carbon method UnregisterLocalVariable (MAP_METHOD_AND_WRAP). */
  UnregisterLocalVariable(...args) {
    throw CjsModel.notImplemented("Tr2VariableStore", "UnregisterLocalVariable", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2VariableStore as Tr2VariableStore };
//# sourceMappingURL=Tr2VariableStore.js.map
