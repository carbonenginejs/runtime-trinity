import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_whiteBalance, _init_extra_whiteBalance, _init_temperature, _init_extra_temperature, _init_tint, _init_extra_tint;

/** Tr2KelvinColor (trinityCore) - generated from schema shapeHash 030822f1.... */
let _Tr2KelvinColor;
new class extends _identity {
  static [class Tr2KelvinColor extends CjsModel {
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
  }];
  Tr2StandardIlluminant = Object.freeze({
    TR2STANDARDILLUMINANT_A: 0,
    TR2STANDARDILLUMINANT_D50: 1,
    TR2STANDARDILLUMINANT_D55: 2,
    TR2STANDARDILLUMINANT_D65: 3,
    TR2STANDARDILLUMINANT_D75: 4,
    TR2STANDARDILLUMINANT_E: 5,
    TR2STANDARDILLUMINANT_F1: 6,
    TR2STANDARDILLUMINANT_F2: 7,
    TR2STANDARDILLUMINANT_F3: 8,
    TR2STANDARDILLUMINANT_F4: 9,
    TR2STANDARDILLUMINANT_F5: 10,
    TR2STANDARDILLUMINANT_F6: 11,
    TR2STANDARDILLUMINANT_F7: 12,
    TR2STANDARDILLUMINANT_F8: 13,
    TR2STANDARDILLUMINANT_F9: 14,
    TR2STANDARDILLUMINANT_F10: 15,
    TR2STANDARDILLUMINANT_F11: 16,
    TR2STANDARDILLUMINANT_F12: 17
  });
  constructor() {
    super(_Tr2KelvinColor), _initClass();
  }
}();

export { _Tr2KelvinColor as Tr2KelvinColor };
//# sourceMappingURL=Tr2KelvinColor.js.map
