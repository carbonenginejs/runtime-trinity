import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_distFromOrigin, _init_extra_distFromOrigin, _init_arrivedRadius, _init_extra_arrivedRadius, _init_slowDownRadius, _init_extra_slowDownRadius, _init_target, _init_extra_target, _init_firstSpawnAtRandomPlaces, _init_extra_firstSpawnAtRandomPlaces, _init_onFirstDroneArrivedCallback, _init_extra_onFirstDroneArrivedCallback, _init_totalRepairTime, _init_extra_totalRepairTime, _init_secondsToTurn, _init_extra_secondsToTurn, _init_locatorSetName, _init_extra_locatorSetName, _init_locatorSet, _init_extra_locatorSet, _init_exit, _init_extra_exit, _init_repair, _init_extra_repair, _init_enabled, _init_extra_enabled;

/** SeekTarget (eve/child/behaviors) - generated from schema shapeHash fb9a8388.... */
let _SeekTarget;
class SeekTarget extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_behaviorWeight, _init_extra_behaviorWeight, _init_distFromOrigin, _init_extra_distFromOrigin, _init_arrivedRadius, _init_extra_arrivedRadius, _init_slowDownRadius, _init_extra_slowDownRadius, _init_target, _init_extra_target, _init_firstSpawnAtRandomPlaces, _init_extra_firstSpawnAtRandomPlaces, _init_onFirstDroneArrivedCallback, _init_extra_onFirstDroneArrivedCallback, _init_totalRepairTime, _init_extra_totalRepairTime, _init_secondsToTurn, _init_extra_secondsToTurn, _init_locatorSetName, _init_extra_locatorSetName, _init_locatorSet, _init_extra_locatorSet, _init_exit, _init_extra_exit, _init_repair, _init_extra_repair, _init_enabled, _init_extra_enabled, _initProto],
      c: [_SeekTarget, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "SeekTarget",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.persist, type, type.float32], 16, "distFromOrigin"], [[io, io.persist, type, type.float32], 16, "arrivedRadius"], [[io, io.persist, type, type.float32], 16, "slowDownRadius"], [[io, io.persist, void 0, type.model("EveSpaceObject2")], 16, "target"], [[io, io.persist, type, type.boolean], 16, "firstSpawnAtRandomPlaces"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onFirstDroneArrivedCallback"], [[io, io.readwrite, type, type.float32], 16, "totalRepairTime"], [[io, io.readwrite, type, type.float32], 16, "secondsToTurn"], [[io, io.persist, type, type.string], 16, "locatorSetName"], [[io, io.persist, void 0, type.model("EveLocatorSets")], 16, "locatorSet"], [[io, io.readwrite, type, type.boolean], 16, "exit"], [[io, io.readwrite, type, type.boolean], 16, "repair"], [[io, io.persist, type, type.boolean], 16, "enabled"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddLocatorSet"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetTarget"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ResetBehavior"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetBehaviorWeight"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetExit"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetTotalRepairTime"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetupShipRepair"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SplitBoundingBox"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_enabled(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = (_initProto(this), _init_behaviorPriority(this, 0));

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_behaviorPriority(this), _init_behaviorWeight(this, 1200));

  /** m_distFromOrigin (float) [READWRITE, PERSIST] */
  distFromOrigin = (_init_extra_behaviorWeight(this), _init_distFromOrigin(this, 10));

  /** m_arrivedRadius (float) [READWRITE, PERSIST] */
  arrivedRadius = (_init_extra_distFromOrigin(this), _init_arrivedRadius(this, 10));

  /** m_slowDownRadius (float) [READWRITE, PERSIST] */
  slowDownRadius = (_init_extra_arrivedRadius(this), _init_slowDownRadius(this, 33));

  /** m_target (EveSpaceObject2*) [READWRITE, PERSIST] */
  target = (_init_extra_slowDownRadius(this), _init_target(this, null));

  /** m_firstSpawnAtRandomPlaces (bool) [READWRITE, PERSIST] */
  firstSpawnAtRandomPlaces = (_init_extra_target(this), _init_firstSpawnAtRandomPlaces(this, false));

  /** m_onFirstDroneArrivedCallback (BlueScriptCallback) [READWRITE] */
  onFirstDroneArrivedCallback = (_init_extra_firstSpawnAtRandomPlaces(this), _init_onFirstDroneArrivedCallback(this, null));

  /** m_totalRepairTime (float) [READWRITE] */
  totalRepairTime = (_init_extra_onFirstDroneArrivedCallback(this), _init_totalRepairTime(this, -1));

  /** m_seconds (float) [READWRITE] */
  secondsToTurn = (_init_extra_totalRepairTime(this), _init_secondsToTurn(this, 0.35));

  /** m_locatorSetName (BlueSharedString) [READWRITE, PERSIST] */
  locatorSetName = (_init_extra_secondsToTurn(this), _init_locatorSetName(this, "damage"));

  /** m_locatorSet (EveLocatorSetsPtr) [READ, PERSIST] */
  locatorSet = (_init_extra_locatorSetName(this), _init_locatorSet(this, null));

  /** m_exit (bool) [READWRITE] */
  exit = (_init_extra_locatorSet(this), _init_exit(this, false));

  /** m_repair (bool) [READWRITE] */
  repair = (_init_extra_exit(this), _init_repair(this, false));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_repair(this), _init_enabled(this, true));

  /** Carbon method AddLocatorSet (MAP_METHOD_AND_WRAP). */
  AddLocatorSet(...args) {
    throw new Error("SeekTarget.AddLocatorSet is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetTarget (MAP_METHOD_AND_WRAP). */
  SetTarget(...args) {
    throw new Error("SeekTarget.SetTarget is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ResetBehavior (MAP_METHOD_AND_WRAP). */
  ResetBehavior(...args) {
    throw new Error("SeekTarget.ResetBehavior is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetBehaviorWeight (MAP_METHOD_AND_WRAP). */
  SetBehaviorWeight(...args) {
    throw new Error("SeekTarget.SetBehaviorWeight is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetExit (MAP_METHOD_AND_WRAP). */
  SetExit(...args) {
    throw new Error("SeekTarget.SetExit is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetTotalRepairTime (MAP_METHOD_AND_WRAP). */
  SetTotalRepairTime(...args) {
    throw new Error("SeekTarget.SetTotalRepairTime is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetupShipRepair (MAP_METHOD_AND_WRAP). */
  SetupShipRepair(...args) {
    throw new Error("SeekTarget.SetupShipRepair is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SplitBoundingBox (MAP_METHOD_AND_WRAP). */
  SplitBoundingBox(...args) {
    throw new Error("SeekTarget.SplitBoundingBox is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _SeekTarget as SeekTarget };
//# sourceMappingURL=SeekTarget.js.map
