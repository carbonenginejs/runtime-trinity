// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildEffectPropagator.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildEffectPropagator.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildEffectPropagator_Blue.cpp
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { EveChildContainer } from "./EveChildContainer.js";
import { vec3 } from "@carbonenginejs/core-math/vec3";

/** EveChildEffectPropagator (eve/child) - generated from schema shapeHash 0f2a96e8.... */
@type.define({ className: "EveChildEffectPropagator", family: "eve/child" })
export class EveChildEffectPropagator extends EveChildContainer
{

  /** m_type (PropagationType - enum PropagationType) [READWRITE, PERSIST, ENUM, NOTIFY] */
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("PropagationType")
  propagationType = 0;

  /** m_triggerMethod (TriggerType - enum TriggerType) [READWRITE, PERSIST, ENUM, NOTIFY] */
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("TriggerType")
  triggerMethood = 0;

  /** m_stopAfterNumTriggers (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  stopAfterNumTriggers = -1;

  /** m_randScaleMin (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  randScaleMin = 1;

  /** m_randScaleMax (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  randScaleMax = 1;

  /** m_triggerSphereOffset (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  triggerSphereOffset = vec3.create();

  /** m_effect (EveChildInstanceContainerPtr) [PERSISTONLY, NOTIFY] */
  @io.notify
  @io.persistOnly
  @type.model("EveChildInstanceContainer")
  effect = null;

  /** m_stopToClearDelay (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  stopToClearDelay = 0;

  /** m_rndClosenessPreference (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  ClosenessPreference = 0.25;

  /** m_effectScaling (Vector3) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.vec3
  effectScaling = vec3.fromValues(1, 1, 1);

  /** m_effectDuration (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  durationPerEffect = 3;

  /** m_isPlaying (bool) [READ] */
  @io.read
  @type.boolean
  isPlaying = false;

  /** m_localLocators (EveLocatorSetsPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("EveLocatorSets")
  localLocators = null;

  /** m_triggerSphereRadiusCurve (Tr2CurveScalarPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("Tr2CurveScalar")
  triggerSphereRadiusCurve = null;

  /** m_triggerSphereScalarMulti (float) [READ] */
  @io.read
  @type.float32
  triggerSphereScalarMulti = 1;

  /** m_locatorSetName (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  locatorSetName = "";

  /** m_completeness (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  completeness = 1;

  /** m_replayAfterDelay (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  replayAfterDelay = false;

  /** m_trigger (bool) [READWRITE] */
  @io.readwrite
  @type.boolean
  trigger = false;

  /** m_rndMinRangeThreshold (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  minRangeThreshold = 0;

  /** m_playTime (float) [READ] */
  @io.read
  @type.float32
  playTime = 0;

  /** m_rndRange (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  range = 500;

  /** m_numTriggers (int64_t) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.int64
  numTriggers = 10;

  /** m_frequency (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  frequency = 1;

  /** m_skipCleanup (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  skipCleanup = false;

  #currentTriggerIndex = 0;

  #numDeleted = 0;

  @carbon.method
  @impl.adapted
  @impl.reason("The staged instance container does not yet expose Carbon's native ClearInstanceList helper, so plain hydrated instance lists are cleared directly as a fallback.")
  Stop()
  {
    this.isPlaying = false;
    this.playTime = 0;
    this.#currentTriggerIndex = 0;
    this.#numDeleted = 0;

    if (this.effect)
    {
      if (typeof this.effect.ClearInstanceList === "function")
      {
        this.effect.ClearInstanceList();
      }
      else if (Array.isArray(this.effect.instances))
      {
        this.effect.instances.length = 0;
      }
    }
  }

  static PropagationType = Object.freeze({
    LOCAL_LOCATORS: 0,
    LOCATOR_SET_BY_REF: 1,
    RANDOM_SPREAD: 2,
  });

  static TriggerType = Object.freeze({
    TRIGGER_SPHERE_CURVE: 0,
    INTERVAL_TRIGGERS: 1,
    INSTANT_PERMANENT: 2,
  });

}
