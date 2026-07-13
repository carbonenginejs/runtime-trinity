import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_colorSet, _init_extra_colorSet;

/** EveChildInheritProperties (eve/child) - generated from schema shapeHash f2990e8c.... */
let _EveChildInheritPrope;
class EveChildInheritProperties extends CjsModel {
  static {
    ({
      e: [_init_colorSet, _init_extra_colorSet],
      c: [_EveChildInheritPrope, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildInheritProperties",
      family: "eve/child"
    })], [[[io, io.read, type, type.color], 16, "colorSet"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_colorSet(this);
  }
  /** m_colorSet[TYPE_##_COLOR] (Color) [READ] */
  colorSet = _init_colorSet(this, vec4.create());
  static {
    _initClass();
  }
}

export { _EveChildInheritPrope as EveChildInheritProperties };
//# sourceMappingURL=EveChildInheritProperties.js.map
