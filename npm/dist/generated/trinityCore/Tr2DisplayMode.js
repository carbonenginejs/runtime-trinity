import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_scaling, _init_extra_scaling, _init_format, _init_extra_format, _init_scanlineOrdering, _init_extra_scanlineOrdering, _init_height, _init_extra_height, _init_width, _init_extra_width, _init_refreshRateDenominator, _init_extra_refreshRateDenominator, _init_refreshRateNumerator, _init_extra_refreshRateNumerator;

/** Tr2DisplayMode (trinityCore) - generated from schema shapeHash ececd92d.... */
let _Tr2DisplayMode;
class Tr2DisplayMode extends CjsModel {
  static {
    ({
      e: [_init_scaling, _init_extra_scaling, _init_format, _init_extra_format, _init_scanlineOrdering, _init_extra_scanlineOrdering, _init_height, _init_extra_height, _init_width, _init_extra_width, _init_refreshRateDenominator, _init_extra_refreshRateDenominator, _init_refreshRateNumerator, _init_extra_refreshRateNumerator],
      c: [_Tr2DisplayMode, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DisplayMode",
      family: "trinityCore"
    })], [[[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "scaling"], [[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "format"], [[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "scanlineOrdering"], [[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "height"], [[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "width"], [[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "refreshRateDenominator"], [[io, io.read, void 0, type.rawStruct("Tr2DisplayModeInfo")], 16, "refreshRateNumerator"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_refreshRateNumerator(this);
  }
  /** m_mode.scaling (Tr2DisplayModeInfo) [READ] */
  scaling = _init_scaling(this, null);

  /** m_mode.format (Tr2DisplayModeInfo) [READ, ENUM] */
  format = (_init_extra_scaling(this), _init_format(this, null));

  /** m_mode.scanlineOrdering (Tr2DisplayModeInfo) [READ] */
  scanlineOrdering = (_init_extra_format(this), _init_scanlineOrdering(this, null));

  /** m_mode.height (Tr2DisplayModeInfo) [READ] */
  height = (_init_extra_scanlineOrdering(this), _init_height(this, null));

  /** m_mode.width (Tr2DisplayModeInfo) [READ] */
  width = (_init_extra_height(this), _init_width(this, null));

  /** m_mode.refreshRateDenominator (Tr2DisplayModeInfo) [READ] */
  refreshRateDenominator = (_init_extra_width(this), _init_refreshRateDenominator(this, null));

  /** m_mode.refreshRateNumerator (Tr2DisplayModeInfo) [READ] */
  refreshRateNumerator = (_init_extra_refreshRateDenominator(this), _init_refreshRateNumerator(this, null));
  static {
    _initClass();
  }
}

export { _Tr2DisplayMode as Tr2DisplayMode };
//# sourceMappingURL=Tr2DisplayMode.js.map
