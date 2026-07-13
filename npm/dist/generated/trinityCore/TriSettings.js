import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_type, _init_extra_type, _init_size, _init_extra_size, _init_var, _init_extra_var, _init_map, _init_extra_map, _init_entry, _init_extra_entry, _init_s, _init_extra_s, _init_repr, _init_extra_repr;

/** TriSettings (trinityCore) - generated from schema shapeHash 6014c4a3.... */
let _TriSettings;
class TriSettings extends CjsModel {
  static {
    ({
      e: [_init_type, _init_extra_type, _init_size, _init_extra_size, _init_var, _init_extra_var, _init_map, _init_extra_map, _init_entry, _init_extra_entry, _init_s, _init_extra_s, _init_repr, _init_extra_repr, _initProto],
      c: [_TriSettings, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriSettings",
      family: "trinityCore"
    })], [[type.rawStruct("Be::VARTYPE"), 0, "type"], [[type, type.uint64], 16, "size"], [type.objectRef("Be::Var"), 0, "var"], [type.map("unknown"), 0, "map"], [[type, type.unknown], 16, "entry"], [type.rawStruct("Setting"), 0, "s"], [[type, type.string], 16, "repr"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetValue"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__repr__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetValue"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_repr(this);
  }
  /** m_type (Be::VARTYPE) */
  type = (_initProto(this), _init_type(this, null));

  /** m_size (size_t) */
  size = (_init_extra_type(this), _init_size(this, 0));

  /** m_var (Be::Var*) */
  var = (_init_extra_size(this), _init_var(this, null));

  /** m_map (SettingMap) */
  map = (_init_extra_var(this), _init_map(this, new Map()));

  /** entry (repr +=) */
  entry = (_init_extra_map(this), _init_entry(this, null));

  /** s (Setting) */
  s = (_init_extra_entry(this), _init_s(this, null));

  /** repr (std::string) */
  repr = (_init_extra_s(this), _init_repr(this, "{"));

  /** Carbon method GetValue -> PyGetValue (MAP_METHOD). */
  GetValue(...args) {
    throw CjsModel.notImplemented("TriSettings", "GetValue", args);
  }

  /** Carbon method __repr__ -> PyRepr (MAP_METHOD). */
  __repr__(...args) {
    throw CjsModel.notImplemented("TriSettings", "__repr__", args);
  }

  /** Carbon method SetValue -> PySetValue (MAP_METHOD). */
  SetValue(...args) {
    throw CjsModel.notImplemented("TriSettings", "SetValue", args);
  }
  static {
    _initClass();
  }
}

export { _TriSettings as TriSettings };
//# sourceMappingURL=TriSettings.js.map
