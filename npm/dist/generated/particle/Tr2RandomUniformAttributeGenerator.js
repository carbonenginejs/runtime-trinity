import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_maxRange, _init_extra_maxRange, _init_minRange, _init_extra_minRange, _init_valid, _init_extra_valid;

/** Tr2RandomUniformAttributeGenerator (particle) - generated from schema shapeHash 35889046.... */
let _Tr2RandomUniformAttr;
class Tr2RandomUniformAttributeGenerator extends CjsModel {
  static {
    ({
      e: [_init_maxRange, _init_extra_maxRange, _init_minRange, _init_extra_minRange, _init_valid, _init_extra_valid],
      c: [_Tr2RandomUniformAttr, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2RandomUniformAttributeGenerator",
      family: "particle"
    })], [[[io, io.persist, type, type.vec4], 16, "maxRange"], [[io, io.persist, type, type.vec4], 16, "minRange"], [[io, io.read, type, type.boolean], 16, "valid"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_valid(this);
  }
  /** m_maxRange (Vector4) [READWRITE, PERSIST] */
  maxRange = _init_maxRange(this, vec4.create());

  /** m_minRange (Vector4) [READWRITE, PERSIST] */
  minRange = (_init_extra_maxRange(this), _init_minRange(this, vec4.create()));

  /** m_valid (bool) [READ] */
  valid = (_init_extra_minRange(this), _init_valid(this, false));
  static {
    _initClass();
  }
}

export { _Tr2RandomUniformAttr as Tr2RandomUniformAttributeGenerator };
//# sourceMappingURL=Tr2RandomUniformAttributeGenerator.js.map
