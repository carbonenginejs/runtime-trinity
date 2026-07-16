import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_behavior, _init_extra_behavior, _init_impactSize, _init_extra_impactSize, _init_offset, _init_extra_offset, _init_positionOffset, _init_extra_positionOffset, _init_parentPositionCurve, _init_extra_parentPositionCurve, _init_alignPositionCurve, _init_extra_alignPositionCurve, _init_value, _init_extra_value, _init_boundingSize, _init_extra_boundingSize, _init_parentRotationCurve, _init_extra_parentRotationCurve, _init_parent, _init_extra_parent, _init_turretSetObject, _init_extra_turretSetObject, _init_muzzleIndex, _init_extra_muzzleIndex, _init_damageLocatorIndex, _init_extra_damageLocatorIndex, _init_locatorIndex, _init_extra_locatorIndex, _init_locatorSetName, _init_extra_locatorSetName;

/** EveLocalPositionCurve (eve/renderable/stretch) - generated from schema shapeHash b155379c.... */
let _EveLocalPositionCurv;
new class extends _identity {
  static [class EveLocalPositionCurve extends CjsModel {
    static {
      ({
        e: [_init_behavior, _init_extra_behavior, _init_impactSize, _init_extra_impactSize, _init_offset, _init_extra_offset, _init_positionOffset, _init_extra_positionOffset, _init_parentPositionCurve, _init_extra_parentPositionCurve, _init_alignPositionCurve, _init_extra_alignPositionCurve, _init_value, _init_extra_value, _init_boundingSize, _init_extra_boundingSize, _init_parentRotationCurve, _init_extra_parentRotationCurve, _init_parent, _init_extra_parent, _init_turretSetObject, _init_extra_turretSetObject, _init_muzzleIndex, _init_extra_muzzleIndex, _init_damageLocatorIndex, _init_extra_damageLocatorIndex, _init_locatorIndex, _init_extra_locatorIndex, _init_locatorSetName, _init_extra_locatorSetName, _initProto],
        c: [_EveLocalPositionCurv, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveLocalPositionCurve",
        family: "eve/renderable/stretch"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("LocalPositionBehavior")], 16, "behavior"], [[io, io.readwrite, type, type.float32], 16, "impactSize"], [[io, io.persist, type, type.float32], 16, "offset"], [[io, io.persist, type, type.vec3], 16, "positionOffset"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "parentPositionCurve"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "alignPositionCurve"], [[io, io.persist, type, type.vec3], 16, "value"], [[io, io.persist, type, type.vec3], 16, "boundingSize"], [[io, io.readwrite, void 0, type.objectRef("ITriQuaternionFunction")], 16, "parentRotationCurve"], [[io, io.readwrite, void 0, type.objectRef("IEveSpaceObject2")], 16, "parent"], [[io, io.readwrite, void 0, type.objectRef("EveTurretSet")], 16, "turretSetObject"], [[io, io.readwrite, type, type.int32], 16, "muzzleIndex"], [[io, io.read, type, type.int32], 16, "damageLocatorIndex"], [[io, io.readwrite, type, type.int32], 16, "locatorIndex"], [[io, io.readwrite, type, type.string], 16, "locatorSetName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_locatorSetName(this);
    }
    /** m_behavior (LocalPositionBehavior - enum LocalPositionBehavior) [READWRITE, PERSIST, ENUM] */
    behavior = (_initProto(this), _init_behavior(this, 0));

    /** m_impactSize (float) [READWRITE] */
    impactSize = (_init_extra_behavior(this), _init_impactSize(this, 1));

    /** m_offset (float) [READWRITE, PERSIST] */
    offset = (_init_extra_impactSize(this), _init_offset(this, 0));

    /** m_positionOffset (Vector3) [READWRITE, PERSIST] */
    positionOffset = (_init_extra_offset(this), _init_positionOffset(this, vec3.create()));

    /** m_parentPositionCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
    parentPositionCurve = (_init_extra_positionOffset(this), _init_parentPositionCurve(this, null));

    /** m_alignPositionCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
    alignPositionCurve = (_init_extra_parentPositionCurve(this), _init_alignPositionCurve(this, null));

    /** m_value (Vector3) [READWRITE, PERSIST] */
    value = (_init_extra_alignPositionCurve(this), _init_value(this, vec3.create()));

    /** m_boundingBoxSize (Vector3) [READWRITE, PERSIST] */
    boundingSize = (_init_extra_value(this), _init_boundingSize(this, vec3.create()));

    /** m_parentRotationCurve (ITriQuaternionFunctionPtr) [READWRITE] */
    parentRotationCurve = (_init_extra_boundingSize(this), _init_parentRotationCurve(this, null));

    /** m_parentObject (IEveSpaceObject2Ptr) [READWRITE] */
    parent = (_init_extra_parentRotationCurve(this), _init_parent(this, null));

    /** m_turretSetObject (EveTurretSetPtr) [READWRITE] */
    turretSetObject = (_init_extra_parent(this), _init_turretSetObject(this, null));

    /** m_muzzleIndex (int) [READWRITE] */
    muzzleIndex = (_init_extra_turretSetObject(this), _init_muzzleIndex(this, 0));

    /** m_damageLocatorIndex (int) [READ] */
    damageLocatorIndex = (_init_extra_muzzleIndex(this), _init_damageLocatorIndex(this, -1));

    /** m_locatorIndex (int) [READWRITE] */
    locatorIndex = (_init_extra_damageLocatorIndex(this), _init_locatorIndex(this, -1));

    /** m_locatorSetName (BlueSharedString) [READWRITE] */
    locatorSetName = (_init_extra_locatorIndex(this), _init_locatorSetName(this, ""));

    /** Carbon method __init__ -> SetBehavior (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
    __init__(...args) {
      throw new Error("EveLocalPositionCurve.__init__ is not implemented in CarbonEngineJS.");
    }
  }];
  LocalPositionBehavior = Object.freeze({
    POS_NONE: 0,
    POS_NEAREST_BOUNDING_POINT: 1,
    POS_CENTER_BOUNDING_POINT: 2,
    POS_TARGET_DMG_LOCATOR: 3,
    POS_TARGET_DMG_LOCATOR_IMPACT: 4,
    POS_OFFSET_POSITION: 5,
    POS_OFFSET_PLANE_ROTATION: 6,
    POS_NEAREST_FIRING_LOCATOR: 7,
    POS_ACTIVE_TURRET: 8,
    POS_COUNT: 9
  });
  constructor() {
    super(_EveLocalPositionCurv), _initClass();
  }
}();

export { _EveLocalPositionCurv as EveLocalPositionCurve };
//# sourceMappingURL=EveLocalPositionCurve.js.map
