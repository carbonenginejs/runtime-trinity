import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveChildContainer as _EveChildContainer } from '../../../eve/child/EveChildContainer.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_propagationType, _init_extra_propagationType, _init_triggerMethood, _init_extra_triggerMethood, _init_stopAfterNumTriggers, _init_extra_stopAfterNumTriggers, _init_randScaleMin, _init_extra_randScaleMin, _init_randScaleMax, _init_extra_randScaleMax, _init_triggerSphereOffset, _init_extra_triggerSphereOffset, _init_effect, _init_extra_effect, _init_stopToClearDelay, _init_extra_stopToClearDelay, _init_ClosenessPreference, _init_extra_ClosenessPreference, _init_effectScaling, _init_extra_effectScaling, _init_durationPerEffect, _init_extra_durationPerEffect, _init_isPlaying, _init_extra_isPlaying, _init_localLocators, _init_extra_localLocators, _init_triggerSphereRadiusCurve, _init_extra_triggerSphereRadiusCurve, _init_triggerSphereScalarMulti, _init_extra_triggerSphereScalarMulti, _init_locatorSetName, _init_extra_locatorSetName, _init_completeness, _init_extra_completeness, _init_replayAfterDelay, _init_extra_replayAfterDelay, _init_trigger, _init_extra_trigger, _init_minRangeThreshold, _init_extra_minRangeThreshold, _init_playTime, _init_extra_playTime, _init_range, _init_extra_range, _init_numTriggers, _init_extra_numTriggers, _init_frequency, _init_extra_frequency, _init_skipCleanup, _init_extra_skipCleanup;

/** EveChildEffectPropagator (eve/child) - generated from schema shapeHash 0f2a96e8.... */
let _EveChildEffectPropag;
new class extends _identity {
  static [class EveChildEffectPropagator extends _EveChildContainer {
    static {
      ({
        e: [_init_propagationType, _init_extra_propagationType, _init_triggerMethood, _init_extra_triggerMethood, _init_stopAfterNumTriggers, _init_extra_stopAfterNumTriggers, _init_randScaleMin, _init_extra_randScaleMin, _init_randScaleMax, _init_extra_randScaleMax, _init_triggerSphereOffset, _init_extra_triggerSphereOffset, _init_effect, _init_extra_effect, _init_stopToClearDelay, _init_extra_stopToClearDelay, _init_ClosenessPreference, _init_extra_ClosenessPreference, _init_effectScaling, _init_extra_effectScaling, _init_durationPerEffect, _init_extra_durationPerEffect, _init_isPlaying, _init_extra_isPlaying, _init_localLocators, _init_extra_localLocators, _init_triggerSphereRadiusCurve, _init_extra_triggerSphereRadiusCurve, _init_triggerSphereScalarMulti, _init_extra_triggerSphereScalarMulti, _init_locatorSetName, _init_extra_locatorSetName, _init_completeness, _init_extra_completeness, _init_replayAfterDelay, _init_extra_replayAfterDelay, _init_trigger, _init_extra_trigger, _init_minRangeThreshold, _init_extra_minRangeThreshold, _init_playTime, _init_extra_playTime, _init_range, _init_extra_range, _init_numTriggers, _init_extra_numTriggers, _init_frequency, _init_extra_frequency, _init_skipCleanup, _init_extra_skipCleanup, _initProto],
        c: [_EveChildEffectPropag, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildEffectPropagator",
        family: "eve/child"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("PropagationType")], 16, "propagationType"], [[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("TriggerType")], 16, "triggerMethood"], [[io, io.notify, io, io.persist, type, type.float32], 16, "stopAfterNumTriggers"], [[io, io.notify, io, io.persist, type, type.float32], 16, "randScaleMin"], [[io, io.notify, io, io.persist, type, type.float32], 16, "randScaleMax"], [[io, io.persist, type, type.vec3], 16, "triggerSphereOffset"], [[io, io.notify, io, io.persistOnly, void 0, type.model("EveChildInstanceContainer")], 16, "effect"], [[io, io.persist, type, type.float32], 16, "stopToClearDelay"], [[io, io.notify, io, io.persist, type, type.float32], 16, "ClosenessPreference"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "effectScaling"], [[io, io.notify, io, io.persist, type, type.float32], 16, "durationPerEffect"], [[io, io.read, type, type.boolean], 16, "isPlaying"], [[io, io.persist, void 0, type.model("EveLocatorSets")], 16, "localLocators"], [[io, io.persist, void 0, type.model("Tr2CurveScalar")], 16, "triggerSphereRadiusCurve"], [[io, io.read, type, type.float32], 16, "triggerSphereScalarMulti"], [[io, io.notify, io, io.persist, type, type.string], 16, "locatorSetName"], [[io, io.notify, io, io.persist, type, type.float32], 16, "completeness"], [[io, io.persist, type, type.boolean], 16, "replayAfterDelay"], [[io, io.readwrite, type, type.boolean], 16, "trigger"], [[io, io.notify, io, io.persist, type, type.float32], 16, "minRangeThreshold"], [[io, io.read, type, type.float32], 16, "playTime"], [[io, io.notify, io, io.persist, type, type.float32], 16, "range"], [[io, io.notify, io, io.persist, type, type.int64], 16, "numTriggers"], [[io, io.notify, io, io.persist, type, type.float32], 16, "frequency"], [[io, io.persist, type, type.boolean], 16, "skipCleanup"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Stop"]], 0, void 0, _EveChildContainer));
    }
    constructor(...args) {
      super(...args);
      _init_extra_skipCleanup(this);
    }
    /** m_type (PropagationType - enum PropagationType) [READWRITE, PERSIST, ENUM, NOTIFY] */
    propagationType = (_initProto(this), _init_propagationType(this, 0));

    /** m_triggerMethod (TriggerType - enum TriggerType) [READWRITE, PERSIST, ENUM, NOTIFY] */
    triggerMethood = (_init_extra_propagationType(this), _init_triggerMethood(this, 0));

    /** m_stopAfterNumTriggers (float) [READWRITE, PERSIST, NOTIFY] */
    stopAfterNumTriggers = (_init_extra_triggerMethood(this), _init_stopAfterNumTriggers(this, -1));

    /** m_randScaleMin (float) [READWRITE, PERSIST, NOTIFY] */
    randScaleMin = (_init_extra_stopAfterNumTriggers(this), _init_randScaleMin(this, 1));

    /** m_randScaleMax (float) [READWRITE, PERSIST, NOTIFY] */
    randScaleMax = (_init_extra_randScaleMin(this), _init_randScaleMax(this, 1));

    /** m_triggerSphereOffset (Vector3) [READWRITE, PERSIST] */
    triggerSphereOffset = (_init_extra_randScaleMax(this), _init_triggerSphereOffset(this, vec3.create()));

    /** m_effect (EveChildInstanceContainerPtr) [PERSISTONLY, NOTIFY] */
    effect = (_init_extra_triggerSphereOffset(this), _init_effect(this, null));

    /** m_stopToClearDelay (float) [READWRITE, PERSIST] */
    stopToClearDelay = (_init_extra_effect(this), _init_stopToClearDelay(this, 0));

    /** m_rndClosenessPreference (float) [READWRITE, PERSIST, NOTIFY] */
    ClosenessPreference = (_init_extra_stopToClearDelay(this), _init_ClosenessPreference(this, 0.25));

    /** m_effectScaling (Vector3) [READWRITE, PERSIST, NOTIFY] */
    effectScaling = (_init_extra_ClosenessPreference(this), _init_effectScaling(this, vec3.fromValues(1, 1, 1)));

    /** m_effectDuration (float) [READWRITE, PERSIST, NOTIFY] */
    durationPerEffect = (_init_extra_effectScaling(this), _init_durationPerEffect(this, 3));

    /** m_isPlaying (bool) [READ] */
    isPlaying = (_init_extra_durationPerEffect(this), _init_isPlaying(this, false));

    /** m_localLocators (EveLocatorSetsPtr) [READWRITE, PERSIST] */
    localLocators = (_init_extra_isPlaying(this), _init_localLocators(this, null));

    /** m_triggerSphereRadiusCurve (Tr2CurveScalarPtr) [READWRITE, PERSIST] */
    triggerSphereRadiusCurve = (_init_extra_localLocators(this), _init_triggerSphereRadiusCurve(this, null));

    /** m_triggerSphereScalarMulti (float) [READ] */
    triggerSphereScalarMulti = (_init_extra_triggerSphereRadiusCurve(this), _init_triggerSphereScalarMulti(this, 1));

    /** m_locatorSetName (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
    locatorSetName = (_init_extra_triggerSphereScalarMulti(this), _init_locatorSetName(this, ""));

    /** m_completeness (float) [READWRITE, PERSIST, NOTIFY] */
    completeness = (_init_extra_locatorSetName(this), _init_completeness(this, 1));

    /** m_replayAfterDelay (bool) [READWRITE, PERSIST] */
    replayAfterDelay = (_init_extra_completeness(this), _init_replayAfterDelay(this, false));

    /** m_trigger (bool) [READWRITE] */
    trigger = (_init_extra_replayAfterDelay(this), _init_trigger(this, false));

    /** m_rndMinRangeThreshold (float) [READWRITE, PERSIST, NOTIFY] */
    minRangeThreshold = (_init_extra_trigger(this), _init_minRangeThreshold(this, 0));

    /** m_playTime (float) [READ] */
    playTime = (_init_extra_minRangeThreshold(this), _init_playTime(this, 0));

    /** m_rndRange (float) [READWRITE, PERSIST, NOTIFY] */
    range = (_init_extra_playTime(this), _init_range(this, 500));

    /** m_numTriggers (int64_t) [READWRITE, PERSIST, NOTIFY] */
    numTriggers = (_init_extra_range(this), _init_numTriggers(this, 10));

    /** m_frequency (float) [READWRITE, PERSIST, NOTIFY] */
    frequency = (_init_extra_numTriggers(this), _init_frequency(this, 1));

    /** m_skipCleanup (bool) [READWRITE, PERSIST] */
    skipCleanup = (_init_extra_frequency(this), _init_skipCleanup(this, false));

    /** Carbon method Stop (MAP_METHOD_AND_WRAP). */
    Stop(...args) {
      throw new Error("EveChildEffectPropagator.Stop is not implemented in CarbonEngineJS.");
    }
  }];
  PropagationType = Object.freeze({
    LOCAL_LOCATORS: 0,
    LOCATOR_SET_BY_REF: 1,
    RANDOM_SPREAD: 2
  });
  TriggerType = Object.freeze({
    TRIGGER_SPHERE_CURVE: 0,
    INTERVAL_TRIGGERS: 1,
    INSTANT_PERMANENT: 2
  });
  constructor() {
    super(_EveChildEffectPropag), _initClass();
  }
}();

export { _EveChildEffectPropag as EveChildEffectPropagator };
//# sourceMappingURL=EveChildEffectPropagator.js.map
