import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_time, _init_extra_time, _init_value, _init_extra_value, _init_interpolation, _init_extra_interpolation;

/** Tr2Key (curves) - generated from schema shapeHash 1a2121bf.... */
let _Tr2Key;
new class extends _identity {
  static [class Tr2Key extends CjsModel {
    static {
      ({
        e: [_init_time, _init_extra_time, _init_value, _init_extra_value, _init_interpolation, _init_extra_interpolation],
        c: [_Tr2Key, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2Key",
        family: "curves"
      })], [[[type, type.float32], 16, "time"], [type.rawStruct("T"), 0, "value"], [[type, type.int32, void 0, schema.enum("Interpolation")], 16, "interpolation"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_interpolation(this);
    }
    /** m_time (float) */
    time = _init_time(this, 0);

    /** m_value (T) */
    value = (_init_extra_time(this), _init_value(this, null));

    /** m_interpolation (Interpolation - enum Interpolation) */
    interpolation = (_init_extra_value(this), _init_interpolation(this, 0));
  }];
  Interpolation = Object.freeze({
    CONSTANT: 0,
    LINEAR: 1,
    HERMITE: 2,
    CATMULLROM: 3,
    SPHERICAL_LINEAR: 4,
    SPHERICAL_QUADRANGLE: 5
  });
  constructor() {
    super(_Tr2Key), _initClass();
  }
}();

export { _Tr2Key as Tr2Key };
//# sourceMappingURL=Tr2Key.js.map
