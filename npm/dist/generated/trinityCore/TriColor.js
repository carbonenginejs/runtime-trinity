import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_r, _init_extra_r, _init_g, _init_extra_g, _init_b, _init_extra_b, _init_a, _init_extra_a;

/** TriColor (trinityCore) - generated from schema shapeHash db7842a1.... */
let _TriColor;
class TriColor extends CjsModel {
  static {
    ({
      e: [_init_r, _init_extra_r, _init_g, _init_extra_g, _init_b, _init_extra_b, _init_a, _init_extra_a, _initProto],
      c: [_TriColor, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriColor",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.unknown], 16, "r"], [[io, io.persist, type, type.unknown], 16, "g"], [[io, io.persist, type, type.unknown], 16, "b"], [[io, io.persist, type, type.float32], 16, "a"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetRGB"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetHSV"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetVector"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FromInt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AsInt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetHSV"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Scale"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_a(this);
  }
  /** r (unknown) [READWRITE, PERSIST] */
  r = (_initProto(this), _init_r(this, null));

  /** g (unknown) [READWRITE, PERSIST] */
  g = (_init_extra_r(this), _init_g(this, null));

  /** b (unknown) [READWRITE, PERSIST] */
  b = (_init_extra_g(this), _init_b(this, null));

  /** a (float) [READWRITE, PERSIST] */
  a = (_init_extra_b(this), _init_a(this, 0));

  /** Carbon method __init__ -> Py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw CjsModel.notImplemented("TriColor", "__init__", args);
  }

  /** Carbon method SetRGB -> PySetRGB (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  SetRGB(...args) {
    throw CjsModel.notImplemented("TriColor", "SetRGB", args);
  }

  /** Carbon method SetHSV -> PySetHSV (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  SetHSV(...args) {
    throw CjsModel.notImplemented("TriColor", "SetHSV", args);
  }

  /** Carbon method SetVector -> PySetVector (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  SetVector(...args) {
    throw CjsModel.notImplemented("TriColor", "SetVector", args);
  }

  /** Carbon method FromInt -> PyFromInt (MAP_METHOD_AND_WRAP). */
  FromInt(...args) {
    throw CjsModel.notImplemented("TriColor", "FromInt", args);
  }

  /** Carbon method AsInt -> PyAsInt (MAP_METHOD_AND_WRAP). */
  AsInt(...args) {
    throw CjsModel.notImplemented("TriColor", "AsInt", args);
  }

  /** Carbon method GetHSV -> PyGetHSV (MAP_METHOD_AND_WRAP). */
  GetHSV(...args) {
    throw CjsModel.notImplemented("TriColor", "GetHSV", args);
  }

  /** Carbon method Scale (MAP_METHOD_AND_WRAP). */
  Scale(...args) {
    throw CjsModel.notImplemented("TriColor", "Scale", args);
  }
  static {
    _initClass();
  }
}

export { _TriColor as TriColor };
//# sourceMappingURL=TriColor.js.map
