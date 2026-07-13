import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z;

/** TriVector (trinityCore) - generated from schema shapeHash 56f8ea78.... */
let _TriVector;
class TriVector extends CjsModel {
  static {
    ({
      e: [_init_x, _init_extra_x, _init_y, _init_extra_y, _init_z, _init_extra_z, _initProto],
      c: [_TriVector, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriVector",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.unknown], 16, "x"], [[io, io.persist, type, type.unknown], 16, "y"], [[io, io.persist, type, type.unknown], 16, "z"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TransformCoord"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TransformNormal"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Lerp"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Maximize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Minimize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Subtract"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Project"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Unproject"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Add"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Cross"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Dot"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DotProduct"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Normalize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Length"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "LengthSq"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Scale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetXYZ"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetCrossProduct"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TransformQuaternion"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_z(this);
  }
  /** x (unknown) [READWRITE, PERSIST] */
  x = (_initProto(this), _init_x(this, null));

  /** y (unknown) [READWRITE, PERSIST] */
  y = (_init_extra_x(this), _init_y(this, null));

  /** z (unknown) [READWRITE, PERSIST] */
  z = (_init_extra_y(this), _init_z(this, null));

  /** Carbon method TransformCoord -> PyTransformCoord (MAP_METHOD_AND_WRAP). */
  TransformCoord(...args) {
    throw CjsModel.notImplemented("TriVector", "TransformCoord", args);
  }

  /** Carbon method TransformNormal -> PyTransformNormal (MAP_METHOD_AND_WRAP). */
  TransformNormal(...args) {
    throw CjsModel.notImplemented("TriVector", "TransformNormal", args);
  }

  /** Carbon method Lerp -> PyLerp (MAP_METHOD_AND_WRAP). */
  Lerp(...args) {
    throw CjsModel.notImplemented("TriVector", "Lerp", args);
  }

  /** Carbon method Maximize -> PyMaximize (MAP_METHOD_AND_WRAP). */
  Maximize(...args) {
    throw CjsModel.notImplemented("TriVector", "Maximize", args);
  }

  /** Carbon method Minimize -> PyMinimize (MAP_METHOD_AND_WRAP). */
  Minimize(...args) {
    throw CjsModel.notImplemented("TriVector", "Minimize", args);
  }

  /** Carbon method Subtract -> PySubtract (MAP_METHOD_AND_WRAP). */
  Subtract(...args) {
    throw CjsModel.notImplemented("TriVector", "Subtract", args);
  }

  /** Carbon method Project -> PyProject (MAP_METHOD_AND_WRAP). */
  Project(...args) {
    throw CjsModel.notImplemented("TriVector", "Project", args);
  }

  /** Carbon method Unproject -> PyUnproject (MAP_METHOD_AND_WRAP). */
  Unproject(...args) {
    throw CjsModel.notImplemented("TriVector", "Unproject", args);
  }

  /** Carbon method __init__ -> SetXYZ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw CjsModel.notImplemented("TriVector", "__init__", args);
  }

  /** Carbon method Add -> PyAdd (MAP_METHOD_AND_WRAP). */
  Add(...args) {
    throw CjsModel.notImplemented("TriVector", "Add", args);
  }

  /** Carbon method Cross -> PyCross (MAP_METHOD_AND_WRAP). */
  Cross(...args) {
    throw CjsModel.notImplemented("TriVector", "Cross", args);
  }

  /** Carbon method Dot -> PyDot (MAP_METHOD_AND_WRAP). */
  Dot(...args) {
    throw CjsModel.notImplemented("TriVector", "Dot", args);
  }

  /** Carbon method DotProduct -> PyDotProduct (MAP_METHOD_AND_WRAP). */
  DotProduct(...args) {
    throw CjsModel.notImplemented("TriVector", "DotProduct", args);
  }

  /** Carbon method Normalize (MAP_METHOD_AND_WRAP). */
  Normalize(...args) {
    throw CjsModel.notImplemented("TriVector", "Normalize", args);
  }

  /** Carbon method Length (MAP_METHOD_AND_WRAP). */
  Length(...args) {
    throw CjsModel.notImplemented("TriVector", "Length", args);
  }

  /** Carbon method LengthSq (MAP_METHOD_AND_WRAP). */
  LengthSq(...args) {
    throw CjsModel.notImplemented("TriVector", "LengthSq", args);
  }

  /** Carbon method Scale (MAP_METHOD_AND_WRAP). */
  Scale(...args) {
    throw CjsModel.notImplemented("TriVector", "Scale", args);
  }

  /** Carbon method SetXYZ (MAP_METHOD_AND_WRAP). */
  SetXYZ(...args) {
    throw CjsModel.notImplemented("TriVector", "SetXYZ", args);
  }

  /** Carbon method SetCrossProduct -> PySetCrossProduct (MAP_METHOD_AND_WRAP). */
  SetCrossProduct(...args) {
    throw CjsModel.notImplemented("TriVector", "SetCrossProduct", args);
  }

  /** Carbon method TransformQuaternion -> PyTransformQuaternion (MAP_METHOD_AND_WRAP). */
  TransformQuaternion(...args) {
    throw CjsModel.notImplemented("TriVector", "TransformQuaternion", args);
  }
  static {
    _initClass();
  }
}

export { _TriVector as TriVector };
//# sourceMappingURL=TriVector.js.map
