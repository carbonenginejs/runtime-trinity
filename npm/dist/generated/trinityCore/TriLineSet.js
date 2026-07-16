import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';

let _initProto, _initClass, _init_zEnable, _init_extra_zEnable, _init_transform, _init_extra_transform;

/** TriLineSet (trinityCore) - generated from schema shapeHash 9b283842.... */
let _TriLineSet;
class TriLineSet extends CjsModel {
  static {
    ({
      e: [_init_zEnable, _init_extra_zEnable, _init_transform, _init_extra_transform, _initProto],
      c: [_TriLineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriLineSet",
      family: "trinityCore"
    })], [[[io, io.readwrite, type, type.boolean], 16, "zEnable"], [[io, io.readwrite, type, type.mat4], 16, "transform"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Add"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddBox"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddLines"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSphere"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Clear"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Render"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetCurrentColor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetDefaultColor"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_transform(this);
  }
  /** m_zEnable (bool) [READWRITE] */
  zEnable = (_initProto(this), _init_zEnable(this, true));

  /** m_transform (Matrix) [READWRITE] */
  transform = (_init_extra_zEnable(this), _init_transform(this, mat4.create()));

  /** Carbon method Add (MAP_METHOD_AND_WRAP). */
  Add(...args) {
    throw new Error("TriLineSet.Add is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddBox (MAP_METHOD_AND_WRAP). */
  AddBox(...args) {
    throw new Error("TriLineSet.AddBox is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddLines (MAP_METHOD_AND_WRAP). */
  AddLines(...args) {
    throw new Error("TriLineSet.AddLines is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddSphere (MAP_METHOD_AND_WRAP). */
  AddSphere(...args) {
    throw new Error("TriLineSet.AddSphere is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Clear (MAP_METHOD_AND_WRAP). */
  Clear(...args) {
    throw new Error("TriLineSet.Clear is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Render -> RenderFromScript (MAP_METHOD_AND_WRAP). */
  Render(...args) {
    throw new Error("TriLineSet.Render is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetCurrentColor (MAP_METHOD_AND_WRAP). */
  SetCurrentColor(...args) {
    throw new Error("TriLineSet.SetCurrentColor is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetDefaultColor (MAP_METHOD_AND_WRAP). */
  SetDefaultColor(...args) {
    throw new Error("TriLineSet.SetDefaultColor is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriLineSet as TriLineSet };
//# sourceMappingURL=TriLineSet.js.map
