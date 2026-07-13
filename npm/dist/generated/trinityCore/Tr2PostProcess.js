import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_stages, _init_extra_stages;

/** Tr2PostProcess (trinityCore) - generated from schema shapeHash 76065476.... */
let _Tr2PostProcess;
class Tr2PostProcess extends CjsModel {
  static {
    ({
      e: [_init_stages, _init_extra_stages],
      c: [_Tr2PostProcess, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2PostProcess",
      family: "trinityCore"
    })], [[[io, io.persist, void 0, type.list("Tr2Effect")], 16, "stages"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_stages(this);
  }
  /** m_stages (PTr2EffectVector) [READ, PERSIST] */
  stages = _init_stages(this, []);
  static {
    _initClass();
  }
}

export { _Tr2PostProcess as Tr2PostProcess };
//# sourceMappingURL=Tr2PostProcess.js.map
