import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_valid, _init_extra_valid;

/** Tr2RandomDirectionAttributeGenerator (particle) - generated from schema shapeHash b1a02c8e.... */
let _Tr2RandomDirectionAt;
class Tr2RandomDirectionAttributeGenerator extends CjsModel {
  static {
    ({
      e: [_init_valid, _init_extra_valid],
      c: [_Tr2RandomDirectionAt, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2RandomDirectionAttributeGenerator",
      family: "particle"
    })], [[[io, io.read, type, type.boolean], 16, "valid"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_valid(this);
  }
  /** m_valid (bool) [READ] */
  valid = _init_valid(this, false);
  static {
    _initClass();
  }
}

export { _Tr2RandomDirectionAt as Tr2RandomDirectionAttributeGenerator };
//# sourceMappingURL=Tr2RandomDirectionAttributeGenerator.js.map
