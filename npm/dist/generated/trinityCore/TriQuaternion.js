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
    throw new Error("TriQuaternion.__init__ is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetYawPitchRoll -> PyGetYawPitchRoll (MAP_METHOD_AND_WRAP). */
  GetYawPitchRoll(...args) {
    throw new Error("TriQuaternion.GetYawPitchRoll is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Identity -> PyIdentity (MAP_METHOD_AND_WRAP). */
  Identity(...args) {
    throw new Error("TriQuaternion.Identity is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Multiply -> PyMultiply (MAP_METHOD_AND_WRAP). */
  Multiply(...args) {
    throw new Error("TriQuaternion.Multiply is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Normalize -> PyNormalize (MAP_METHOD_AND_WRAP). */
  Normalize(...args) {
    throw new Error("TriQuaternion.Normalize is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Length -> PyLength (MAP_METHOD_AND_WRAP). */
  Length(...args) {
    throw new Error("TriQuaternion.Length is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Scale -> PyScale (MAP_METHOD_AND_WRAP). */
  Scale(...args) {
    throw new Error("TriQuaternion.Scale is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetRotationAxis -> PySetRotationAxis (MAP_METHOD_AND_WRAP). */
  SetRotationAxis(...args) {
    throw new Error("TriQuaternion.SetRotationAxis is not implemented in CarbonEngineJS.");
  }

  /** Carbon method RotationAxis -> PyRotationAxis (MAP_METHOD_AND_WRAP). */
  RotationAxis(...args) {
    throw new Error("TriQuaternion.RotationAxis is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetYawPitchRoll (MAP_METHOD_AND_WRAP). */
  SetYawPitchRoll(...args) {
    throw new Error("TriQuaternion.SetYawPitchRoll is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetIdentity (MAP_METHOD_AND_WRAP). */
  SetIdentity(...args) {
    throw new Error("TriQuaternion.SetIdentity is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetXYZW (MAP_METHOD_AND_WRAP). */
  SetXYZW(...args) {
    throw new Error("TriQuaternion.SetXYZW is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriQuaternion as TriQuaternion };
//# sourceMappingURL=TriQuaternion.js.map
