import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation;
let _EveChildModifierSRT;
new class extends _identity {
  static [class EveChildModifierSRT extends CjsModel {
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
    /**
     * Applies this modifier's scale/rotation/translation before the incoming
     * transform (Carbon EveChildModifierSRT::ApplyTransform:
     * TransformationMatrix(s,r,t) * transform in row-vector convention - SRT
     * first, then transform, which is mat4.multiply(out, transform, srt) in
     * gl-matrix). Context-first for a uniform modifier apply loop; SRT is not
     * camera-dependent, so context is unused.
     * @param {Object} _context - unused (SRT is not a contextual modifier)
     * @param {Float32Array} transform - source (read only)
     * @param {Number} [_boneCount] - Carbon signature parity, unused
     * @param {Float32Array} [_bones] - Carbon signature parity, unused
     * @param {Float32Array} out - caller-owned; receives the result
     * @returns {Float32Array} out
     */
    ApplyTransform(_context, transform, _boneCount = 0, _bones = null, out) {
      const local = mat4.fromRotationTranslationScale(_EveChildModifierSRT.#scratch, this.rotation, this.translation, this.scaling);
      return mat4.multiply(out, transform, local);
    }
  }];
  #scratch = mat4.create();
  constructor() {
    super(_EveChildModifierSRT), _initClass();
  }
}();

export { _EveChildModifierSRT as EveChildModifierSRT };
//# sourceMappingURL=EveChildModifierSRT.js.map
