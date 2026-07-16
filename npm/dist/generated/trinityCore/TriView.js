import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { mat4 } from '@carbonenginejs/core-math/mat4';

let _initProto, _initClass, _init_transform, _init_extra_transform;

/** TriView (trinityCore) - generated from schema shapeHash ee4a59b8.... */
let _TriView;
class TriView extends CjsModel {
  static {
    ({
      e: [_init_transform, _init_extra_transform, _initProto],
      c: [_TriView, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriView",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.mat4], 16, "transform"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetLookAtPosition"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_transform(this);
  }
  /** m_transform (Matrix) [READWRITE, PERSIST] */
  transform = (_initProto(this), _init_transform(this, mat4.create()));

  /** Carbon method SetLookAtPosition (MAP_METHOD_AND_WRAP). */
  SetLookAtPosition(...args) {
    throw new Error("TriView.SetLookAtPosition is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriView as TriView };
//# sourceMappingURL=TriView.js.map
