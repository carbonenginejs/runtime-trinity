import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_targetPosition, _init_extra_targetPosition, _init_behaviour, _init_extra_behaviour, _init_positionOldInfluence, _init_extra_positionOldInfluence, _init_position, _init_extra_position, _init_positionOld, _init_extra_positionOld, _init_locator, _init_extra_locator;

/** EveTurretTarget (eve/attachment/turrets) - generated from schema shapeHash 08070c0f.... */
let _EveTurretTarget;
new class extends _identity {
  static [class EveTurretTarget extends CjsModel {
    static {
      ({
        e: [_init_targetPosition, _init_extra_targetPosition, _init_behaviour, _init_extra_behaviour, _init_positionOldInfluence, _init_extra_positionOldInfluence, _init_position, _init_extra_position, _init_positionOld, _init_extra_positionOld, _init_locator, _init_extra_locator],
        c: [_EveTurretTarget, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveTurretTarget",
        family: "eve/attachment/turrets"
      })], [[[io, io.read, type, type.vec3], 16, "targetPosition"], [[io, io.read, type, type.int32, void 0, schema.enum("ImpactBehaviour")], 16, "behaviour"], [[io, io.read, type, type.float32], 16, "positionOldInfluence"], [[io, io.read, type, type.vec3], 16, "position"], [[io, io.read, type, type.vec3], 16, "positionOld"], [[io, io.read, type, type.int32], 16, "locator"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_locator(this);
    }
    /** m_targetPosition (Vector3) [READ] */
    targetPosition = _init_targetPosition(this, vec3.create());

    /** m_impactBehaviour (ImpactBehaviour::Type - enum ImpactBehaviour) [READ] */
    behaviour = (_init_extra_targetPosition(this), _init_behaviour(this, 0));

    /** m_positionOldInfluence (float) [READ] */
    positionOldInfluence = (_init_extra_behaviour(this), _init_positionOldInfluence(this, -1));

    /** m_trackingPosition (Vector3) [READ] */
    position = (_init_extra_positionOldInfluence(this), _init_position(this, vec3.create()));

    /** m_positionOld (Vector3) [READ] */
    positionOld = (_init_extra_position(this), _init_positionOld(this, vec3.create()));

    /** m_locator (int) [READ] */
    locator = (_init_extra_positionOld(this), _init_locator(this, -1));
  }];
  ImpactBehaviour = Object.freeze({
    DAMAGE_LOCATOR: 0,
    SHIELD_ELLIPSOID: 1,
    CENTER: 2
  });
  constructor() {
    super(_EveTurretTarget), _initClass();
  }
}();

export { _EveTurretTarget as EveTurretTarget };
//# sourceMappingURL=EveTurretTarget.js.map
