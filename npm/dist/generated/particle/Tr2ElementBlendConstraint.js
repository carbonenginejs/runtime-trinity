import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_value, _init_extra_value, _init_originalFactor, _init_extra_originalFactor, _init_isValid, _init_extra_isValid;

/** Tr2ElementBlendConstraint (particle) - generated from schema shapeHash a09069c3.... */
let _Tr2ElementBlendConst;
class Tr2ElementBlendConstraint extends CjsModel {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_originalFactor, _init_extra_originalFactor, _init_isValid, _init_extra_isValid],
      c: [_Tr2ElementBlendConst, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ElementBlendConstraint",
      family: "particle"
    })], [[[io, io.persist, type, type.vec4], 16, "value"], [[io, io.persist, type, type.float32], 16, "originalFactor"], [[io, io.read, type, type.boolean], 16, "isValid"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isValid(this);
  }
  /** m_value (Vector4) [READWRITE, PERSIST] */
  value = _init_value(this, vec4.create());

  /** m_originalFactor (float) [READWRITE, PERSIST] */
  originalFactor = (_init_extra_value(this), _init_originalFactor(this, 1));

  /** m_isValid (bool) [READ] */
  isValid = (_init_extra_originalFactor(this), _init_isValid(this, false));
  static {
    _initClass();
  }
}

export { _Tr2ElementBlendConst as Tr2ElementBlendConstraint };
//# sourceMappingURL=Tr2ElementBlendConstraint.js.map
