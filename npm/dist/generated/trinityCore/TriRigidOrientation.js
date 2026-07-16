import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';

let _initProto, _initClass, _init_drag, _init_extra_drag, _init_start, _init_extra_start, _init_I, _init_extra_I, _init_states, _init_extra_states, _init_value, _init_extra_value, _init_name, _init_extra_name;

/** TriRigidOrientation (trinityCore) - generated from schema shapeHash b6d79dfb.... */
let _TriRigidOrientation;
class TriRigidOrientation extends CjsModel {
  static {
    ({
      e: [_init_drag, _init_extra_drag, _init_start, _init_extra_start, _init_I, _init_extra_I, _init_states, _init_extra_states, _init_value, _init_extra_value, _init_name, _init_extra_name, _initProto],
      c: [_TriRigidOrientation, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriRigidOrientation",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.float32], 16, "drag"], [[io, io.persist, type, type.float64], 16, "start"], [[io, io.persist, type, type.float32], 16, "I"], [[io, io.persist, void 0, type.list("TriTorque")], 16, "states"], [[io, io.persist, type, type.quat], 16, "value"], [[io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Sort"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** mDrag (float) [READWRITE, PERSIST] */
  drag = (_initProto(this), _init_drag(this, 1));

  /** mStart (Be::Time) [READWRITE, PERSIST] */
  start = (_init_extra_drag(this), _init_start(this, 0));

  /** mI (float) [READWRITE, PERSIST] */
  I = (_init_extra_start(this), _init_I(this, 1));

  /** mStates (PTriTorqueVector) [READ, PERSIST] */
  states = (_init_extra_I(this), _init_states(this, []));

  /** mValue (Quaternion) [READWRITE, PERSIST] */
  value = (_init_extra_states(this), _init_value(this, quat.create()));

  /** mName (std::wstring) [READWRITE, PERSIST] */
  name = (_init_extra_value(this), _init_name(this, ""));

  /** Carbon method Sort (MAP_METHOD_AND_WRAP). */
  Sort(...args) {
    throw new Error("TriRigidOrientation.Sort is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriRigidOrientation as TriRigidOrientation };
//# sourceMappingURL=TriRigidOrientation.js.map
