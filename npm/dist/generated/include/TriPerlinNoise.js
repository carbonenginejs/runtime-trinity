import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_TABLE_SIZE, _init_extra_TABLE_SIZE, _init_TABLE_MASK, _init_extra_TABLE_MASK;

/** TriPerlinNoise (include) - generated from schema shapeHash a520344a.... */
let _TriPerlinNoise;
class TriPerlinNoise extends CjsModel {
  static {
    ({
      e: [_init_TABLE_SIZE, _init_extra_TABLE_SIZE, _init_TABLE_MASK, _init_extra_TABLE_MASK],
      c: [_TriPerlinNoise, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriPerlinNoise",
      family: "include"
    })], [[[type, type.unknown], 16, "TABLE_SIZE"], [[type, type.unknown], 16, "TABLE_MASK"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_TABLE_MASK(this);
  }
  /** TABLE_SIZE (static constexpr int32_t) */
  TABLE_SIZE = _init_TABLE_SIZE(this, 256);

  /** TABLE_MASK (static constexpr int32_t) */
  TABLE_MASK = (_init_extra_TABLE_SIZE(this), _init_TABLE_MASK(this, null));
  static {
    _initClass();
  }
}

export { _TriPerlinNoise as TriPerlinNoise };
//# sourceMappingURL=TriPerlinNoise.js.map
