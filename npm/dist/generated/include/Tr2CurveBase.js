import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_reversed, _init_extra_reversed, _init_cycle, _init_extra_cycle, _init_length, _init_extra_length, _init_localTime, _init_extra_localTime, _init_name, _init_extra_name, _init_timeOffset, _init_extra_timeOffset, _init_timeScale, _init_extra_timeScale, _init_startValue, _init_extra_startValue, _init_currentValue, _init_extra_currentValue, _init_endValue, _init_extra_endValue, _init_interpolation, _init_extra_interpolation, _init_keys, _init_extra_keys, _init_currentKeyIdx, _init_extra_currentKeyIdx, _init_lastKey, _init_extra_lastKey, _init_nextKey, _init_extra_nextKey, _init_startOfSegment, _init_extra_startOfSegment, _init_endOfSegment, _init_extra_endOfSegment;

/** Tr2CurveBase (include) - generated from schema shapeHash 3878dbdd.... */
let _Tr2CurveBase;
class Tr2CurveBase extends CjsModel {
  static {
    ({
      e: [_init_reversed, _init_extra_reversed, _init_cycle, _init_extra_cycle, _init_length, _init_extra_length, _init_localTime, _init_extra_localTime, _init_name, _init_extra_name, _init_timeOffset, _init_extra_timeOffset, _init_timeScale, _init_extra_timeScale, _init_startValue, _init_extra_startValue, _init_currentValue, _init_extra_currentValue, _init_endValue, _init_extra_endValue, _init_interpolation, _init_extra_interpolation, _init_keys, _init_extra_keys, _init_currentKeyIdx, _init_extra_currentKeyIdx, _init_lastKey, _init_extra_lastKey, _init_nextKey, _init_extra_nextKey, _init_startOfSegment, _init_extra_startOfSegment, _init_endOfSegment, _init_extra_endOfSegment],
      c: [_Tr2CurveBase, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2CurveBase",
      family: "include"
    })], [[[type, type.boolean], 16, "reversed"], [[type, type.boolean], 16, "cycle"], [[type, type.float32], 16, "length"], [[type, type.float32], 16, "localTime"], [[type, type.string], 16, "name"], [[type, type.float32], 16, "timeOffset"], [[type, type.float32], 16, "timeScale"], [type.rawStruct("KeyValue"), 0, "startValue"], [type.rawStruct("KeyValue"), 0, "currentValue"], [type.rawStruct("KeyValue"), 0, "endValue"], [[type, type.uint32], 16, "interpolation"], [type.list("Key"), 0, "keys"], [[type, type.int32], 16, "currentKeyIdx"], [type.objectRef("Key"), 0, "lastKey"], [type.objectRef("Key"), 0, "nextKey"], [[type, type.float32], 16, "startOfSegment"], [[type, type.float32], 16, "endOfSegment"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_endOfSegment(this);
  }
  /** m_reversed (bool) */
  reversed = _init_reversed(this, false);

  /** m_cycle (bool) */
  cycle = (_init_extra_reversed(this), _init_cycle(this, false));

  /** m_length (float) */
  length = (_init_extra_cycle(this), _init_length(this, 0));

  /** m_localTime (float) */
  localTime = (_init_extra_length(this), _init_localTime(this, 0));

  /** m_name (std::string) */
  name = (_init_extra_localTime(this), _init_name(this, ""));

  /** m_timeOffset (float) */
  timeOffset = (_init_extra_name(this), _init_timeOffset(this, 0));

  /** m_timeScale (float) */
  timeScale = (_init_extra_timeOffset(this), _init_timeScale(this, 0));

  /** m_startValue (KeyValue) */
  startValue = (_init_extra_timeScale(this), _init_startValue(this, null));

  /** m_currentValue (KeyValue) */
  currentValue = (_init_extra_startValue(this), _init_currentValue(this, null));

  /** m_endValue (KeyValue) */
  endValue = (_init_extra_currentValue(this), _init_endValue(this, null));

  /** m_interpolation (unsigned int) */
  interpolation = (_init_extra_endValue(this), _init_interpolation(this, 0));

  /** m_keys (KeyList) */
  keys = (_init_extra_interpolation(this), _init_keys(this, []));

  /** m_currentKeyIdx (int) */
  currentKeyIdx = (_init_extra_keys(this), _init_currentKeyIdx(this, 0));

  /** m_lastKey (Key*) */
  lastKey = (_init_extra_currentKeyIdx(this), _init_lastKey(this, null));

  /** m_nextKey (Key*) */
  nextKey = (_init_extra_lastKey(this), _init_nextKey(this, null));

  /** m_startOfSegment (float) */
  startOfSegment = (_init_extra_nextKey(this), _init_startOfSegment(this, 0));

  /** m_endOfSegment (float) */
  endOfSegment = (_init_extra_startOfSegment(this), _init_endOfSegment(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2CurveBase as Tr2CurveBase };
//# sourceMappingURL=Tr2CurveBase.js.map
