import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/runtime-utils/mat4';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';

let _initProto, _initClass, _init_transform, _init_extra_transform;
let _TriView;
class TriView extends CjsModel {
  static {
    ({
      e: [_init_transform, _init_extra_transform, _initProto],
      c: [_TriView, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriView",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.mat4], 16, "transform"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetLookAtPosition"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_transform(this);
  }
  /** m_transform (Matrix) [READWRITE, PERSIST] */
  transform = (_initProto(this), _init_transform(this, mat4.create()));

  /** Builds Carbon's right-handed look-at view transform. */
  SetLookAtPosition(eye, at, up) {
    mat4.lookAt(this.transform, eye, at, up);
  }
  static {
    _initClass();
  }
}

export { _TriView as TriView };
//# sourceMappingURL=TriView.js.map
