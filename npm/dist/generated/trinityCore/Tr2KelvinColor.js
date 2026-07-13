import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_whiteBalance, _init_extra_whiteBalance, _init_temperature, _init_extra_temperature, _init_tint, _init_extra_tint;

/** Tr2KelvinColor (trinityCore) - generated from schema shapeHash 030822f1.... */
let _Tr2KelvinColor;
class Tr2KelvinColor extends CjsModel {
  static {
    ({
      e: [_init_whiteBalance, _init_extra_whiteBalance, _init_temperature, _init_extra_temperature, _init_tint, _init_extra_tint],
      c: [_Tr2KelvinColor, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2KelvinColor",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("Tr2StandardIlluminant")], 16, "whiteBalance"], [[io, io.persist, type, type.float32], 16, "temperature"], [[io, io.persist, type, type.float32], 16, "tint"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_tint(this);
  }
  /** m_whiteBalance (Tr2StandardIlluminant - enum Tr2StandardIlluminant) [ENUM, READWRITE, PERSIST] */
  whiteBalance = _init_whiteBalance(this, 2);

  /** m_temperature (float) [READWRITE, PERSIST] */
  temperature = (_init_extra_whiteBalance(this), _init_temperature(this, 5500));

  /** m_tint (float) [READWRITE, PERSIST] */
  tint = (_init_extra_temperature(this), _init_tint(this, 0.5));
  static {
    _initClass();
  }
}

export { _Tr2KelvinColor as Tr2KelvinColor };
//# sourceMappingURL=Tr2KelvinColor.js.map
