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
    throw new Error("TriVector.TransformCoord is not implemented in CarbonEngineJS.");
  }

  /** Carbon method TransformNormal -> PyTransformNormal (MAP_METHOD_AND_WRAP). */
  TransformNormal(...args) {
    throw new Error("TriVector.TransformNormal is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Lerp -> PyLerp (MAP_METHOD_AND_WRAP). */
  Lerp(...args) {
    throw new Error("TriVector.Lerp is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Maximize -> PyMaximize (MAP_METHOD_AND_WRAP). */
  Maximize(...args) {
    throw new Error("TriVector.Maximize is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Minimize -> PyMinimize (MAP_METHOD_AND_WRAP). */
  Minimize(...args) {
    throw new Error("TriVector.Minimize is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Subtract -> PySubtract (MAP_METHOD_AND_WRAP). */
  Subtract(...args) {
    throw new Error("TriVector.Subtract is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Project -> PyProject (MAP_METHOD_AND_WRAP). */
  Project(...args) {
    throw new Error("TriVector.Project is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Unproject -> PyUnproject (MAP_METHOD_AND_WRAP). */
  Unproject(...args) {
    throw new Error("TriVector.Unproject is not implemented in CarbonEngineJS.");
  }

  /** Carbon method __init__ -> SetXYZ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw new Error("TriVector.__init__ is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Add -> PyAdd (MAP_METHOD_AND_WRAP). */
  Add(...args) {
    throw new Error("TriVector.Add is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Cross -> PyCross (MAP_METHOD_AND_WRAP). */
  Cross(...args) {
    throw new Error("TriVector.Cross is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Dot -> PyDot (MAP_METHOD_AND_WRAP). */
  Dot(...args) {
    throw new Error("TriVector.Dot is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DotProduct -> PyDotProduct (MAP_METHOD_AND_WRAP). */
  DotProduct(...args) {
    throw new Error("TriVector.DotProduct is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Normalize (MAP_METHOD_AND_WRAP). */
  Normalize(...args) {
    throw new Error("TriVector.Normalize is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Length (MAP_METHOD_AND_WRAP). */
  Length(...args) {
    throw new Error("TriVector.Length is not implemented in CarbonEngineJS.");
  }

  /** Carbon method LengthSq (MAP_METHOD_AND_WRAP). */
  LengthSq(...args) {
    throw new Error("TriVector.LengthSq is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Scale (MAP_METHOD_AND_WRAP). */
  Scale(...args) {
    throw new Error("TriVector.Scale is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetXYZ (MAP_METHOD_AND_WRAP). */
  SetXYZ(...args) {
    throw new Error("TriVector.SetXYZ is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetCrossProduct -> PySetCrossProduct (MAP_METHOD_AND_WRAP). */
  SetCrossProduct(...args) {
    throw new Error("TriVector.SetCrossProduct is not implemented in CarbonEngineJS.");
  }

  /** Carbon method TransformQuaternion -> PyTransformQuaternion (MAP_METHOD_AND_WRAP). */
  TransformQuaternion(...args) {
    throw new Error("TriVector.TransformQuaternion is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriVector as TriVector };
//# sourceMappingURL=TriVector.js.map
