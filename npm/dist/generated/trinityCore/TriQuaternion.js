import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_w, _init_extra_w;

/** TriQuaternion (trinityCore) - generated from schema shapeHash 3c717b89.... */
let _TriQuaternion;
class TriQuaternion extends CjsModel {
  static {
    ({
      e: [_init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _init_w, _init_extra_w, _initProto],
      c: [_TriQuaternion, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriQuaternion",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.unknown], 16, "x"], [[io, io.persist, type, type.unknown], 16, "y"], [[io, io.persist, type, type.unknown], 16, "z"], [[io, io.persist, type, type.unknown], 16, "w"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetYawPitchRoll"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Identity"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Multiply"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Normalize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Length"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Scale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetRotationAxis"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RotationAxis"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetYawPitchRoll"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetIdentity"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetXYZW"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_w(this);
  }
  /** x (unknown) [READWRITE, PERSIST] */
  x = (_initProto(this), _init_x(this, null));

  /** y (unknown) [READWRITE, PERSIST] */
  y = (_init_extra_x(this), _init_y(this, null));

  /** z (unknown) [READWRITE, PERSIST] */
  z = (_init_extra_y(this), _init_z(this, null));

  /** w (unknown) [READWRITE, PERSIST] */
  w = (_init_extra_z(this), _init_w(this, null));

  /** Carbon method __init__ -> Py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "__init__", args);
  }

  /** Carbon method GetYawPitchRoll -> PyGetYawPitchRoll (MAP_METHOD_AND_WRAP). */
  GetYawPitchRoll(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "GetYawPitchRoll", args);
  }

  /** Carbon method Identity -> PyIdentity (MAP_METHOD_AND_WRAP). */
  Identity(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "Identity", args);
  }

  /** Carbon method Multiply -> PyMultiply (MAP_METHOD_AND_WRAP). */
  Multiply(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "Multiply", args);
  }

  /** Carbon method Normalize -> PyNormalize (MAP_METHOD_AND_WRAP). */
  Normalize(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "Normalize", args);
  }

  /** Carbon method Length -> PyLength (MAP_METHOD_AND_WRAP). */
  Length(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "Length", args);
  }

  /** Carbon method Scale -> PyScale (MAP_METHOD_AND_WRAP). */
  Scale(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "Scale", args);
  }

  /** Carbon method SetRotationAxis -> PySetRotationAxis (MAP_METHOD_AND_WRAP). */
  SetRotationAxis(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "SetRotationAxis", args);
  }

  /** Carbon method RotationAxis -> PyRotationAxis (MAP_METHOD_AND_WRAP). */
  RotationAxis(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "RotationAxis", args);
  }

  /** Carbon method SetYawPitchRoll (MAP_METHOD_AND_WRAP). */
  SetYawPitchRoll(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "SetYawPitchRoll", args);
  }

  /** Carbon method SetIdentity (MAP_METHOD_AND_WRAP). */
  SetIdentity(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "SetIdentity", args);
  }

  /** Carbon method SetXYZW (MAP_METHOD_AND_WRAP). */
  SetXYZW(...args) {
    throw CjsModel.notImplemented("TriQuaternion", "SetXYZW", args);
  }
  static {
    _initClass();
  }
}

export { _TriQuaternion as TriQuaternion };
//# sourceMappingURL=TriQuaternion.js.map
