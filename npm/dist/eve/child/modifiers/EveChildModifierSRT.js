import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation;
let _EveChildModifierSRT;
class EveChildModifierSRT extends CjsModel {
  static {
    ({
      e: [_init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _initProto],
      c: [_EveChildModifierSRT, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildModifierSRT",
      family: "eve/child/modifiers"
    })], [[[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "translation"], [[carbon, carbon.method, impl, impl.adapted], 18, "ApplyTransform"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_translation(this);
  }
  scaling = (_initProto(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));
  rotation = (_init_extra_scaling(this), _init_rotation(this, quat.create()));
  translation = (_init_extra_rotation(this), _init_translation(this, vec3.create()));
  ApplyTransform(transform, _boneCount = 0, _bones = null, out = mat4.create()) {
    const local = mat4.fromRotationTranslationScale(mat4.create(), this.rotation, this.translation, this.scaling);
    return mat4.multiply(out, local, transform);
  }
  static {
    _initClass();
  }
}

export { _EveChildModifierSRT as EveChildModifierSRT };
//# sourceMappingURL=EveChildModifierSRT.js.map
