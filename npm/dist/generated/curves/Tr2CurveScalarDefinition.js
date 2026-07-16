import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_keys, _init_extra_keys, _init_keyCount, _init_extra_keyCount, _init_extrapolationBefore, _init_extra_extrapolationBefore, _init_extrapolationAfter, _init_extra_extrapolationAfter;

/** Tr2CurveScalarDefinition (curves) - generated from schema shapeHash 09171834.... */
let _Tr2CurveScalarDefini;
new class extends _identity {
  static [class Tr2CurveScalarDefinition extends CjsModel {
    static {
      ({
        e: [_init_keys, _init_extra_keys, _init_keyCount, _init_extra_keyCount, _init_extrapolationBefore, _init_extra_extrapolationBefore, _init_extrapolationAfter, _init_extra_extrapolationAfter],
        c: [_Tr2CurveScalarDefini, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2CurveScalarDefinition",
        family: "curves"
      })], [[type.objectRef("Tr2CurveScalarKey"), 0, "keys"], [[type, type.uint32], 16, "keyCount"], [[type, type.int32, void 0, schema.enum("Tr2CurveExtrapolation")], 16, "extrapolationBefore"], [[type, type.int32, void 0, schema.enum("Tr2CurveExtrapolation")], 16, "extrapolationAfter"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_extrapolationAfter(this);
    }
    /** keys (const Tr2CurveScalarKey*) */
    keys = _init_keys(this, null);

    /** keyCount (uint32_t) */
    keyCount = (_init_extra_keys(this), _init_keyCount(this, 0));

    /** extrapolationBefore (Tr2CurveExtrapolation::Type - enum Tr2CurveExtrapolation) */
    extrapolationBefore = (_init_extra_keyCount(this), _init_extrapolationBefore(this, 0));

    /** extrapolationAfter (Tr2CurveExtrapolation::Type - enum Tr2CurveExtrapolation) */
    extrapolationAfter = (_init_extra_extrapolationBefore(this), _init_extrapolationAfter(this, 0));
  }];
  Tr2CurveExtrapolation = Object.freeze({
    CLAMP: 0,
    CYCLE: 1,
    MIRROR: 2,
    LINEAR: 3
  });
  constructor() {
    super(_Tr2CurveScalarDefini), _initClass();
  }
}();

export { _Tr2CurveScalarDefini as Tr2CurveScalarDefinition };
//# sourceMappingURL=Tr2CurveScalarDefinition.js.map
