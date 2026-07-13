import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { type } from '@carbonenginejs/core-types/schema';
import { Tr2CurveInterpolation } from './enums.js';

let _initClass, _init_time, _init_extra_time, _init_value, _init_extra_value, _init_id, _init_extra_id, _init_interpolation, _init_extra_interpolation;
let _Tr2CurveQuaternionKe;
class Tr2CurveQuaternionKey extends CjsModel {
  static {
    ({
      e: [_init_time, _init_extra_time, _init_value, _init_extra_value, _init_id, _init_extra_id, _init_interpolation, _init_extra_interpolation],
      c: [_Tr2CurveQuaternionKe, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2CurveQuaternionKey",
      family: "curves"
    })], [[[type, type.float32], 16, "time"], [[type, type.quat], 16, "value"], [[type, type.uint16], 16, "id"], [[type, type.uint16], 16, "interpolation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_interpolation(this);
  }
  time = _init_time(this, 0);
  value = (_init_extra_time(this), _init_value(this, quat.create()));
  id = (_init_extra_value(this), _init_id(this, 0));
  interpolation = (_init_extra_id(this), _init_interpolation(this, Tr2CurveInterpolation.LINEAR));
  static {
    _initClass();
  }
}

export { _Tr2CurveQuaternionKe as Tr2CurveQuaternionKey };
//# sourceMappingURL=Tr2CurveQuaternionKey.js.map
