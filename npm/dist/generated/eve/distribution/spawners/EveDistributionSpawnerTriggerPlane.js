import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';

let _initClass, _init_triggerChance, _init_extra_triggerChance, _init_planeRotation, _init_extra_planeRotation, _init_startSequenceAtFirstTrigger, _init_extra_startSequenceAtFirstTrigger, _init_playDuration, _init_extra_playDuration, _init_delayBeforeActivation, _init_extra_delayBeforeActivation, _init_reversePlaneAnimation, _init_extra_reversePlaneAnimation;

/** EveDistributionSpawnerTriggerPlane (eve/distribution/spawners) - generated from schema shapeHash f7abe103.... */
let _EveDistributionSpawn;
class EveDistributionSpawnerTriggerPlane extends CjsModel {
  static {
    ({
      e: [_init_triggerChance, _init_extra_triggerChance, _init_planeRotation, _init_extra_planeRotation, _init_startSequenceAtFirstTrigger, _init_extra_startSequenceAtFirstTrigger, _init_playDuration, _init_extra_playDuration, _init_delayBeforeActivation, _init_extra_delayBeforeActivation, _init_reversePlaneAnimation, _init_extra_reversePlaneAnimation],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnerTriggerPlane",
      family: "eve/distribution/spawners"
    })], [[[io, io.persist, type, type.float32], 16, "triggerChance"], [[io, io.persist, type, type.quat], 16, "planeRotation"], [[io, io.persist, type, type.boolean], 16, "startSequenceAtFirstTrigger"], [[io, io.persist, type, type.float32], 16, "playDuration"], [[io, io.persist, type, type.float32], 16, "delayBeforeActivation"], [[io, io.persist, type, type.boolean], 16, "reversePlaneAnimation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_reversePlaneAnimation(this);
  }
  /** m_triggerChance (float) [READWRITE, PERSIST] */
  triggerChance = _init_triggerChance(this, 1);

  /** m_planeRotation (Quaternion) [READWRITE, PERSIST] */
  planeRotation = (_init_extra_triggerChance(this), _init_planeRotation(this, quat.create()));

  /** m_startSequenceAtFirstTrigger (bool) [READWRITE, PERSIST] */
  startSequenceAtFirstTrigger = (_init_extra_planeRotation(this), _init_startSequenceAtFirstTrigger(this, true));

  /** m_playDuration (float) [READWRITE, PERSIST] */
  playDuration = (_init_extra_startSequenceAtFirstTrigger(this), _init_playDuration(this, 1));

  /** m_delayBeforeActivation (float) [READWRITE, PERSIST] */
  delayBeforeActivation = (_init_extra_playDuration(this), _init_delayBeforeActivation(this, 0));

  /** m_reversePlaneAnimation (bool) [READWRITE, PERSIST] */
  reversePlaneAnimation = (_init_extra_delayBeforeActivation(this), _init_reversePlaneAnimation(this, false));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnerTriggerPlane };
//# sourceMappingURL=EveDistributionSpawnerTriggerPlane.js.map
