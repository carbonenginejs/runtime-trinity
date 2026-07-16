import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_impactBehaviour, _init_extra_impactBehaviour, _init_firingEffect, _init_extra_firingEffect, _init_ambientEffect, _init_extra_ambientEffect, _init_name, _init_extra_name, _init_firingEffectResPath, _init_extra_firingEffectResPath, _init_chooseRandomLocator, _init_extra_chooseRandomLocator, _init_boundingSphere, _init_extra_boundingSphere, _init_randomizeExplosionRotation, _init_extra_randomizeExplosionRotation, _init_lodLevel, _init_extra_lodLevel, _init_currentCyclingFiresPos, _init_extra_currentCyclingFiresPos, _init_useRandomFiringDelay, _init_extra_useRandomFiringDelay, _init_bottomClipHeight, _init_extra_bottomClipHeight, _init_geometryResource, _init_extra_geometryResource, _init_maxTrackingTime, _init_extra_maxTrackingTime, _init_visibleCount, _init_extra_visibleCount, _init_trackingInfluence, _init_extra_trackingInfluence, _init_swarmID, _init_extra_swarmID, _init_maxCyclingFirePos, _init_extra_maxCyclingFirePos, _init_playMovementSound, _init_extra_playMovementSound, _init_isOnline, _init_extra_isOnline, _init_target, _init_extra_target, _init_locatorName, _init_extra_locatorName, _init_sysBonePitchFactor, _init_extra_sysBonePitchFactor, _init_sysBonePitchMax, _init_extra_sysBonePitchMax, _init_sysBonePitchMin, _init_extra_sysBonePitchMin, _init_sysBonePitchOffset, _init_extra_sysBonePitchOffset, _init_sysBonePitch01Factor, _init_extra_sysBonePitch01Factor, _init_sysBonePitch01Offset, _init_extra_sysBonePitch01Offset, _init_sysBonePitch02Factor, _init_extra_sysBonePitch02Factor, _init_sysBonePitch02Offset, _init_extra_sysBonePitch02Offset, _init_sysBonePitch03Factor, _init_extra_sysBonePitch03Factor, _init_sysBonePitch03Offset, _init_extra_sysBonePitch03Offset, _init_updatePitchPose, _init_extra_updatePitchPose, _init_geometryResPath, _init_extra_geometryResPath, _init_impactSize, _init_extra_impactSize, _init_state, _init_extra_state, _init_sysBoneHeight, _init_extra_sysBoneHeight, _init_randomFiringDelay, _init_extra_randomFiringDelay, _init_turretEffect, _init_extra_turretEffect, _init_idleToTargetingMovementAudioEvent, _init_extra_idleToTargetingMovementAudioEvent, _init_targetingToIdleMovementAudioEvent, _init_extra_targetingToIdleMovementAudioEvent, _init_generatedDistributedAmbientEffect, _init_extra_generatedDistributedAmbientEffect, _init_cyclingFireGroupCount, _init_extra_cyclingFireGroupCount, _init_turretMovementObserver, _init_extra_turretMovementObserver, _init_slotNumber, _init_extra_slotNumber, _init_ambientEffectEditingMode, _init_extra_ambientEffectEditingMode, _init_displayEffects, _init_extra_displayEffects, _init_display, _init_extra_display, _init_useDynamicBounds, _init_extra_useDynamicBounds, _init_estimatedPixelDiameter, _init_extra_estimatedPixelDiameter, _init_lowLodFiringEffectScale, _init_extra_lowLodFiringEffectScale, _init_lowLodFiringEffectTranslation, _init_extra_lowLodFiringEffectTranslation, _init_lowLodFiringEffectRotation, _init_extra_lowLodFiringEffectRotation, _init_useLowLodFiringTransform, _init_extra_useLowLodFiringTransform, _init_laserMissBehaviour, _init_extra_laserMissBehaviour, _init_projectileMissBehaviour, _init_extra_projectileMissBehaviour;

/** EveTurretSet (eve/attachment/turrets) - generated from schema shapeHash 51c12edb.... */
let _EveTurretSet;
new class extends _identity {
  static [class EveTurretSet extends _EveEntity {
    static {
      ({
        e: [_init_impactBehaviour, _init_extra_impactBehaviour, _init_firingEffect, _init_extra_firingEffect, _init_ambientEffect, _init_extra_ambientEffect, _init_name, _init_extra_name, _init_firingEffectResPath, _init_extra_firingEffectResPath, _init_chooseRandomLocator, _init_extra_chooseRandomLocator, _init_boundingSphere, _init_extra_boundingSphere, _init_randomizeExplosionRotation, _init_extra_randomizeExplosionRotation, _init_lodLevel, _init_extra_lodLevel, _init_currentCyclingFiresPos, _init_extra_currentCyclingFiresPos, _init_useRandomFiringDelay, _init_extra_useRandomFiringDelay, _init_bottomClipHeight, _init_extra_bottomClipHeight, _init_geometryResource, _init_extra_geometryResource, _init_maxTrackingTime, _init_extra_maxTrackingTime, _init_visibleCount, _init_extra_visibleCount, _init_trackingInfluence, _init_extra_trackingInfluence, _init_swarmID, _init_extra_swarmID, _init_maxCyclingFirePos, _init_extra_maxCyclingFirePos, _init_playMovementSound, _init_extra_playMovementSound, _init_isOnline, _init_extra_isOnline, _init_target, _init_extra_target, _init_locatorName, _init_extra_locatorName, _init_sysBonePitchFactor, _init_extra_sysBonePitchFactor, _init_sysBonePitchMax, _init_extra_sysBonePitchMax, _init_sysBonePitchMin, _init_extra_sysBonePitchMin, _init_sysBonePitchOffset, _init_extra_sysBonePitchOffset, _init_sysBonePitch01Factor, _init_extra_sysBonePitch01Factor, _init_sysBonePitch01Offset, _init_extra_sysBonePitch01Offset, _init_sysBonePitch02Factor, _init_extra_sysBonePitch02Factor, _init_sysBonePitch02Offset, _init_extra_sysBonePitch02Offset, _init_sysBonePitch03Factor, _init_extra_sysBonePitch03Factor, _init_sysBonePitch03Offset, _init_extra_sysBonePitch03Offset, _init_updatePitchPose, _init_extra_updatePitchPose, _init_geometryResPath, _init_extra_geometryResPath, _init_impactSize, _init_extra_impactSize, _init_state, _init_extra_state, _init_sysBoneHeight, _init_extra_sysBoneHeight, _init_randomFiringDelay, _init_extra_randomFiringDelay, _init_turretEffect, _init_extra_turretEffect, _init_idleToTargetingMovementAudioEvent, _init_extra_idleToTargetingMovementAudioEvent, _init_targetingToIdleMovementAudioEvent, _init_extra_targetingToIdleMovementAudioEvent, _init_generatedDistributedAmbientEffect, _init_extra_generatedDistributedAmbientEffect, _init_cyclingFireGroupCount, _init_extra_cyclingFireGroupCount, _init_turretMovementObserver, _init_extra_turretMovementObserver, _init_slotNumber, _init_extra_slotNumber, _init_ambientEffectEditingMode, _init_extra_ambientEffectEditingMode, _init_displayEffects, _init_extra_displayEffects, _init_display, _init_extra_display, _init_useDynamicBounds, _init_extra_useDynamicBounds, _init_estimatedPixelDiameter, _init_extra_estimatedPixelDiameter, _init_lowLodFiringEffectScale, _init_extra_lowLodFiringEffectScale, _init_lowLodFiringEffectTranslation, _init_extra_lowLodFiringEffectTranslation, _init_lowLodFiringEffectRotation, _init_extra_lowLodFiringEffectRotation, _init_useLowLodFiringTransform, _init_extra_useLowLodFiringTransform, _init_laserMissBehaviour, _init_extra_laserMissBehaviour, _init_projectileMissBehaviour, _init_extra_projectileMissBehaviour, _initProto],
        c: [_EveTurretSet, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveTurretSet",
        family: "eve/attachment/turrets"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("ImpactBehaviour")], 16, "impactBehaviour"], [type.objectRef("EveTurretFiringFX"), 0, "firingEffect"], [[io, io.persistOnly, void 0, type.model("IEveSpaceObjectChild")], 16, "ambientEffect"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.string], 16, "firingEffectResPath"], [[io, io.persist, type, type.boolean], 16, "chooseRandomLocator"], [[io, io.persist, type, type.vec4], 16, "boundingSphere"], [[io, io.persist, type, type.boolean], 16, "randomizeExplosionRotation"], [[io, io.read, type, type.int32, void 0, schema.enum("LOD")], 16, "lodLevel"], [[io, io.read, type, type.uint32], 16, "currentCyclingFiresPos"], [[io, io.persist, type, type.boolean], 16, "useRandomFiringDelay"], [[io, io.persist, type, type.float32], 16, "bottomClipHeight"], [[io, io.read, void 0, type.objectRef("TriGeometryRes")], 16, "geometryResource"], [[io, io.persist, type, type.float32], 16, "maxTrackingTime"], [[io, io.read, type, type.uint32], 16, "visibleCount"], [[io, io.read, type, type.float32], 16, "trackingInfluence"], [[io, io.readwrite, type, type.uint32], 16, "swarmID"], [[io, io.persist, type, type.uint32], 16, "maxCyclingFirePos"], [[io, io.persist, type, type.boolean], 16, "playMovementSound"], [[io, io.readwrite, type, type.boolean], 16, "isOnline"], [[io, io.read, void 0, type.objectRef("EveTurretTarget")], 16, "target"], [[io, io.persist, type, type.string], 16, "locatorName"], [[io, io.persist, type, type.float32], 16, "sysBonePitchFactor"], [[io, io.persist, type, type.float32], 16, "sysBonePitchMax"], [[io, io.persist, type, type.float32], 16, "sysBonePitchMin"], [[io, io.persist, type, type.float32], 16, "sysBonePitchOffset"], [[io, io.persist, type, type.float32], 16, "sysBonePitch01Factor"], [[io, io.persist, type, type.float32], 16, "sysBonePitch01Offset"], [[io, io.persist, type, type.float32], 16, "sysBonePitch02Factor"], [[io, io.persist, type, type.float32], 16, "sysBonePitch02Offset"], [[io, io.persist, type, type.float32], 16, "sysBonePitch03Factor"], [[io, io.persist, type, type.float32], 16, "sysBonePitch03Offset"], [[io, io.persist, type, type.boolean], 16, "updatePitchPose"], [[io, io.notify, io, io.persist, type, type.string], 16, "geometryResPath"], [[io, io.persist, type, type.float32], 16, "impactSize"], [[io, io.persist, type, type.int32, void 0, schema.enum("State")], 16, "state"], [[io, io.persist, type, type.float32], 16, "sysBoneHeight"], [[io, io.read, type, type.float32], 16, "randomFiringDelay"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "turretEffect"], [[io, io.persist, type, type.string], 16, "idleToTargetingMovementAudioEvent"], [[io, io.persist, type, type.string], 16, "targetingToIdleMovementAudioEvent"], [[io, io.read, void 0, type.objectRef("EveChildInstanceContainer")], 16, "generatedDistributedAmbientEffect"], [[io, io.persist, type, type.uint32], 16, "cyclingFireGroupCount"], [[io, io.persist, void 0, type.model("TriObserverLocal")], 16, "turretMovementObserver"], [[io, io.readwrite, type, type.int32], 16, "slotNumber"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "ambientEffectEditingMode"], [[io, io.readwrite, type, type.boolean], 16, "displayEffects"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "useDynamicBounds"], [[io, io.read, type, type.float32], 16, "estimatedPixelDiameter"], [[io, io.persist, type, type.vec3], 16, "lowLodFiringEffectScale"], [[io, io.persist, type, type.vec3], 16, "lowLodFiringEffectTranslation"], [[io, io.persist, type, type.quat], 16, "lowLodFiringEffectRotation"], [[io, io.persist, type, type.boolean], 16, "useLowLodFiringTransform"], [[io, io.persist, type, type.boolean], 16, "laserMissBehaviour"], [[io, io.persist, type, type.boolean], 16, "projectileMissBehaviour"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RebuildBoundingSphere"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ForceStateDeactive"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ForceStateTargeting"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FreezeHighDetailLOD"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetShotTimeVariance"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "MissQueueSize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLastShotTime"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EnterStateDeactive"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EnterStateFiring"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EnterStateIdle"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EnterStateReloading"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EnterStateTargeting"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetFiringBoneWorldTransform"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetShotMissed"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartControllers"]], 0, void 0, _EveEntity));
    }
    constructor(...args) {
      super(...args);
      _init_extra_projectileMissBehaviour(this);
    }
    /** m_impactBehaviour (ImpactBehaviour::Type - enum ImpactBehaviour) [READWRITE, NOTIFY, PERSIST, ENUM] */
    impactBehaviour = (_initProto(this), _init_impactBehaviour(this, 0));

    /** m_firingEffect (EveTurretFiringFXPtr) [HIDDEN] */
    firingEffect = (_init_extra_impactBehaviour(this), _init_firingEffect(this, null));

    /** m_ambientEffect (IEveSpaceObjectChildPtr) [PERSISTONLY] */
    ambientEffect = (_init_extra_firingEffect(this), _init_ambientEffect(this, null));

    /** m_name (std::string) [READWRITE, PERSIST] */
    name = (_init_extra_ambientEffect(this), _init_name(this, ""));

    /** m_firingEffectResPath (std::string) [READWRITE, PERSIST] */
    firingEffectResPath = (_init_extra_name(this), _init_firingEffectResPath(this, ""));

    /** m_chooseRandomLocator (bool) [READWRITE, PERSIST] */
    chooseRandomLocator = (_init_extra_firingEffectResPath(this), _init_chooseRandomLocator(this, true));

    /** m_boundingSphere (Vector4) [READWRITE, PERSIST] */
    boundingSphere = (_init_extra_chooseRandomLocator(this), _init_boundingSphere(this, vec4.create()));

    /** m_randomizeExplosionRotation (bool) [READWRITE, PERSIST] */
    randomizeExplosionRotation = (_init_extra_boundingSphere(this), _init_randomizeExplosionRotation(this, true));

    /** m_lodLevel (LOD - enum LOD) [READ] */
    lodLevel = (_init_extra_randomizeExplosionRotation(this), _init_lodLevel(this, 0));

    /** m_currentCyclingFiresPos (uint32_t) [READ] */
    currentCyclingFiresPos = (_init_extra_lodLevel(this), _init_currentCyclingFiresPos(this, 0));

    /** m_useRandomFiringDelay (bool) [READWRITE, PERSIST] */
    useRandomFiringDelay = (_init_extra_currentCyclingFiresPos(this), _init_useRandomFiringDelay(this, true));

    /** m_bottomClipHeight (float) [READWRITE, PERSIST] */
    bottomClipHeight = (_init_extra_useRandomFiringDelay(this), _init_bottomClipHeight(this, 0));

    /** m_geometryResource (TriGeometryResPtr) [READ] */
    geometryResource = (_init_extra_bottomClipHeight(this), _init_geometryResource(this, null));

    /** m_maxTrackingTime (float) [READWRITE, PERSIST] */
    maxTrackingTime = (_init_extra_geometryResource(this), _init_maxTrackingTime(this, 1));

    /** m_visibleCount (unsigned int) [READ] */
    visibleCount = (_init_extra_maxTrackingTime(this), _init_visibleCount(this, 0));

    /** m_trackingInfluence (float) [READ] */
    trackingInfluence = (_init_extra_visibleCount(this), _init_trackingInfluence(this, 0));

    /** m_swarmID (unsigned int) [READWRITE] */
    swarmID = (_init_extra_trackingInfluence(this), _init_swarmID(this, 0));

    /** m_maxCyclingFirePos (uint32_t) [READWRITE, PERSIST] */
    maxCyclingFirePos = (_init_extra_swarmID(this), _init_maxCyclingFirePos(this, 1));

    /** m_playMovementSound (bool) [READWRITE, PERSIST] */
    playMovementSound = (_init_extra_maxCyclingFirePos(this), _init_playMovementSound(this, true));

    /** m_isOnline (bool) [READWRITE] */
    isOnline = (_init_extra_playMovementSound(this), _init_isOnline(this, true));

    /** m_target (EveTurretTargetPtr) [READ] */
    target = (_init_extra_isOnline(this), _init_target(this, null));

    /** m_locatorName (std::string) [READWRITE, PERSIST] */
    locatorName = (_init_extra_target(this), _init_locatorName(this, ""));

    /** m_sysBonePitchFactor (float) [READWRITE, PERSIST] */
    sysBonePitchFactor = (_init_extra_locatorName(this), _init_sysBonePitchFactor(this, 1));

    /** m_sysBonePitchMax (float) [READWRITE, PERSIST] */
    sysBonePitchMax = (_init_extra_sysBonePitchFactor(this), _init_sysBonePitchMax(this, 90));

    /** m_sysBonePitchMin (float) [READWRITE, PERSIST] */
    sysBonePitchMin = (_init_extra_sysBonePitchMax(this), _init_sysBonePitchMin(this, 0));

    /** m_sysBonePitchOffset (float) [READWRITE, PERSIST] */
    sysBonePitchOffset = (_init_extra_sysBonePitchMin(this), _init_sysBonePitchOffset(this, 0));

    /** m_sysBonePitch01Factor (float) [READWRITE, PERSIST] */
    sysBonePitch01Factor = (_init_extra_sysBonePitchOffset(this), _init_sysBonePitch01Factor(this, 1));

    /** m_sysBonePitch01Offset (float) [READWRITE, PERSIST] */
    sysBonePitch01Offset = (_init_extra_sysBonePitch01Factor(this), _init_sysBonePitch01Offset(this, 0));

    /** m_sysBonePitch02Factor (float) [READWRITE, PERSIST] */
    sysBonePitch02Factor = (_init_extra_sysBonePitch01Offset(this), _init_sysBonePitch02Factor(this, 1));

    /** m_sysBonePitch02Offset (float) [READWRITE, PERSIST] */
    sysBonePitch02Offset = (_init_extra_sysBonePitch02Factor(this), _init_sysBonePitch02Offset(this, 0));

    /** m_sysBonePitch03Factor (float) [READWRITE, PERSIST] */
    sysBonePitch03Factor = (_init_extra_sysBonePitch02Offset(this), _init_sysBonePitch03Factor(this, 1));

    /** m_sysBonePitch03Offset (float) [READWRITE, PERSIST] */
    sysBonePitch03Offset = (_init_extra_sysBonePitch03Factor(this), _init_sysBonePitch03Offset(this, 0));

    /** m_updatePitchPose (bool) [READWRITE, PERSIST] */
    updatePitchPose = (_init_extra_sysBonePitch03Offset(this), _init_updatePitchPose(this, false));

    /** m_geomResPath (std::string) [READWRITE, NOTIFY, PERSIST] */
    geometryResPath = (_init_extra_updatePitchPose(this), _init_geometryResPath(this, ""));

    /** m_impactSize (float) [READWRITE, PERSIST] */
    impactSize = (_init_extra_geometryResPath(this), _init_impactSize(this, 0));

    /** m_state (State - enum State) [READ, PERSIST] */
    state = (_init_extra_impactSize(this), _init_state(this, 0));

    /** m_sysBoneHeight (float) [READWRITE, PERSIST] */
    sysBoneHeight = (_init_extra_state(this), _init_sysBoneHeight(this, 1));

    /** m_randomFiringDelay (float) [READ] */
    randomFiringDelay = (_init_extra_sysBoneHeight(this), _init_randomFiringDelay(this, 0));

    /** m_turretEffect (Tr2EffectPtr) [READWRITE, PERSIST] */
    turretEffect = (_init_extra_randomFiringDelay(this), _init_turretEffect(this, null));

    /** m_idleToTargetingMovementAudioEvent (std::wstring) [READWRITE, PERSIST] */
    idleToTargetingMovementAudioEvent = (_init_extra_turretEffect(this), _init_idleToTargetingMovementAudioEvent(this, ""));

    /** m_targetingToIdleMovementAudioEvent (std::wstring) [READWRITE, PERSIST] */
    targetingToIdleMovementAudioEvent = (_init_extra_idleToTargetingMovementAudioEvent(this), _init_targetingToIdleMovementAudioEvent(this, ""));

    /** m_generatedDistributedAmbientEffect (EveChildInstanceContainerPtr) [READ] */
    generatedDistributedAmbientEffect = (_init_extra_targetingToIdleMovementAudioEvent(this), _init_generatedDistributedAmbientEffect(this, null));

    /** m_cyclingFireGroupCount (uint32_t) [READWRITE, PERSIST] */
    cyclingFireGroupCount = (_init_extra_generatedDistributedAmbientEffect(this), _init_cyclingFireGroupCount(this, 1));

    /** m_turretMovementObserver (TriObserverLocalPtr) [READWRITE, PERSIST] */
    turretMovementObserver = (_init_extra_cyclingFireGroupCount(this), _init_turretMovementObserver(this, null));

    /** m_slotNumber (int) [READWRITE] */
    slotNumber = (_init_extra_turretMovementObserver(this), _init_slotNumber(this, -1));

    /** m_ambientEffectEditingMode (bool) [READWRITE, NOTIFY] */
    ambientEffectEditingMode = (_init_extra_slotNumber(this), _init_ambientEffectEditingMode(this, false));

    /** m_displayEffects (bool) [READWRITE] */
    displayEffects = (_init_extra_ambientEffectEditingMode(this), _init_displayEffects(this, true));

    /** m_display (bool) [READWRITE] */
    display = (_init_extra_displayEffects(this), _init_display(this, true));

    /** m_useDynamicBounds (bool) [READWRITE, PERSIST, NOTIFY] */
    useDynamicBounds = (_init_extra_display(this), _init_useDynamicBounds(this, false));

    /** m_estimatedPixelDiameter (float) [READ] */
    estimatedPixelDiameter = (_init_extra_useDynamicBounds(this), _init_estimatedPixelDiameter(this, -1));

    /** m_lowLodFiringEffectScale (Vector3) [READWRITE, PERSIST] */
    lowLodFiringEffectScale = (_init_extra_estimatedPixelDiameter(this), _init_lowLodFiringEffectScale(this, vec3.fromValues(1, 1, 1)));

    /** m_lowLodFiringEffectTranslation (Vector3) [READWRITE, PERSIST] */
    lowLodFiringEffectTranslation = (_init_extra_lowLodFiringEffectScale(this), _init_lowLodFiringEffectTranslation(this, vec3.create()));

    /** m_lowLodFiringEffectRotation (Quaternion) [READWRITE, PERSIST] */
    lowLodFiringEffectRotation = (_init_extra_lowLodFiringEffectTranslation(this), _init_lowLodFiringEffectRotation(this, quat.create()));

    /** m_useLowLodFiringTransform (bool) [READWRITE, PERSIST] */
    useLowLodFiringTransform = (_init_extra_lowLodFiringEffectRotation(this), _init_useLowLodFiringTransform(this, false));

    /** m_laserMissBehaviour (bool) [READWRITE, PERSIST] */
    laserMissBehaviour = (_init_extra_useLowLodFiringTransform(this), _init_laserMissBehaviour(this, false));

    /** m_projectileMissBehaviour (bool) [READWRITE, PERSIST] */
    projectileMissBehaviour = (_init_extra_laserMissBehaviour(this), _init_projectileMissBehaviour(this, false));

    /** Carbon method RebuildBoundingSphere (MAP_METHOD_AND_WRAP). */
    RebuildBoundingSphere(...args) {
      throw new Error("EveTurretSet.RebuildBoundingSphere is not implemented in CarbonEngineJS.");
    }

    /** Carbon method ForceStateDeactive (MAP_METHOD_AND_WRAP). */
    ForceStateDeactive(...args) {
      throw new Error("EveTurretSet.ForceStateDeactive is not implemented in CarbonEngineJS.");
    }

    /** Carbon method ForceStateTargeting (MAP_METHOD_AND_WRAP). */
    ForceStateTargeting(...args) {
      throw new Error("EveTurretSet.ForceStateTargeting is not implemented in CarbonEngineJS.");
    }

    /** Carbon method FreezeHighDetailLOD (MAP_METHOD_AND_WRAP). */
    FreezeHighDetailLOD(...args) {
      throw new Error("EveTurretSet.FreezeHighDetailLOD is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetShotTimeVariance (MAP_METHOD_AND_WRAP). */
    GetShotTimeVariance(...args) {
      throw new Error("EveTurretSet.GetShotTimeVariance is not implemented in CarbonEngineJS.");
    }

    /** Carbon method MissQueueSize (MAP_METHOD_AND_WRAP). */
    MissQueueSize(...args) {
      throw new Error("EveTurretSet.MissQueueSize is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetLastShotTime (MAP_METHOD_AND_WRAP). */
    GetLastShotTime(...args) {
      throw new Error("EveTurretSet.GetLastShotTime is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EnterStateDeactive (MAP_METHOD_AND_WRAP). */
    EnterStateDeactive(...args) {
      throw new Error("EveTurretSet.EnterStateDeactive is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EnterStateFiring (MAP_METHOD_AND_WRAP). */
    EnterStateFiring(...args) {
      throw new Error("EveTurretSet.EnterStateFiring is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EnterStateIdle (MAP_METHOD_AND_WRAP). */
    EnterStateIdle(...args) {
      throw new Error("EveTurretSet.EnterStateIdle is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EnterStateReloading (MAP_METHOD_AND_WRAP). */
    EnterStateReloading(...args) {
      throw new Error("EveTurretSet.EnterStateReloading is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EnterStateTargeting (MAP_METHOD_AND_WRAP). */
    EnterStateTargeting(...args) {
      throw new Error("EveTurretSet.EnterStateTargeting is not implemented in CarbonEngineJS.");
    }

    /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
    HandleControllerEvent(...args) {
      throw new Error("EveTurretSet.HandleControllerEvent is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetFiringBoneWorldTransform (MAP_METHOD_AND_WRAP). */
    GetFiringBoneWorldTransform(...args) {
      throw new Error("EveTurretSet.GetFiringBoneWorldTransform is not implemented in CarbonEngineJS.");
    }

    /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
    SetControllerVariable(...args) {
      throw new Error("EveTurretSet.SetControllerVariable is not implemented in CarbonEngineJS.");
    }

    /** Carbon method SetShotMissed (MAP_METHOD_AND_WRAP). */
    SetShotMissed(...args) {
      throw new Error("EveTurretSet.SetShotMissed is not implemented in CarbonEngineJS.");
    }

    /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
    StartControllers(...args) {
      throw new Error("EveTurretSet.StartControllers is not implemented in CarbonEngineJS.");
    }
  }];
  ImpactBehaviour = Object.freeze({
    DAMAGE_LOCATOR: 0,
    SHIELD_ELLIPSOID: 1,
    CENTER: 2
  });
  LOD = Object.freeze({
    LOD_INVALID: 0,
    LOD_EMPTY: 1,
    LOD_HIGHEST: 2,
    LOD_DISABLED: 3
  });
  State = Object.freeze({
    STATE_DELAYED: 0,
    STATE_LAUNCH: 1,
    STATE_EJECTING: 2,
    STATE_START_TRACKING: 3,
    STATE_TRACKING_SPREAD: 4,
    STATE_TRACKING_FINAL: 5,
    STATE_EXPLODED: 6,
    STATE_DEAD: 7
  });
  constructor() {
    super(_EveTurretSet), _initClass();
  }
}();

export { _EveTurretSet as EveTurretSet };
//# sourceMappingURL=EveTurretSet.js.map
