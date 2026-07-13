import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_triggerChance, _init_extra_triggerChance, _init_startSequenceAtFirstTrigger, _init_extra_startSequenceAtFirstTrigger, _init_sphereOffset, _init_extra_sphereOffset, _init_playDuration, _init_extra_playDuration, _init_delayBeforeActivation, _init_extra_delayBeforeActivation, _init_reverseSphereAnimation, _init_extra_reverseSphereAnimation;

/** EveDistributionSpawnerTriggerSphere (eve/distribution/spawners) - generated from schema shapeHash 2c01e5b2.... */
let _EveDistributionSpawn;
class EveDistributionSpawnerTriggerSphere extends CjsModel {
  static {
    ({
      e: [_init_triggerChance, _init_extra_triggerChance, _init_startSequenceAtFirstTrigger, _init_extra_startSequenceAtFirstTrigger, _init_sphereOffset, _init_extra_sphereOffset, _init_playDuration, _init_extra_playDuration, _init_delayBeforeActivation, _init_extra_delayBeforeActivation, _init_reverseSphereAnimation, _init_extra_reverseSphereAnimation],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnerTriggerSphere",
      family: "eve/distribution/spawners"
    })], [[[io, io.persist, type, type.float32], 16, "triggerChance"], [[io, io.persist, type, type.boolean], 16, "startSequenceAtFirstTrigger"], [[io, io.persist, type, type.vec3], 16, "sphereOffset"], [[io, io.persist, type, type.float32], 16, "playDuration"], [[io, io.persist, type, type.float32], 16, "delayBeforeActivation"], [[io, io.persist, type, type.boolean], 16, "reverseSphereAnimation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_reverseSphereAnimation(this);
  }
  /** m_triggerChance (float) [READWRITE, PERSIST] */
  triggerChance = _init_triggerChance(this, 1);

  /** m_startSequenceAtFirstTrigger (bool) [READWRITE, PERSIST] */
  startSequenceAtFirstTrigger = (_init_extra_triggerChance(this), _init_startSequenceAtFirstTrigger(this, true));

  /** m_sphereOffset (Vector3) [READWRITE, PERSIST] */
  sphereOffset = (_init_extra_startSequenceAtFirstTrigger(this), _init_sphereOffset(this, vec3.create()));

  /** m_playDuration (float) [READWRITE, PERSIST] */
  playDuration = (_init_extra_sphereOffset(this), _init_playDuration(this, 1));

  /** m_delayBeforeActivation (float) [READWRITE, PERSIST] */
  delayBeforeActivation = (_init_extra_playDuration(this), _init_delayBeforeActivation(this, 0));

  /** m_reverseSphereAnimation (bool) [READWRITE, PERSIST] */
  reverseSphereAnimation = (_init_extra_delayBeforeActivation(this), _init_reverseSphereAnimation(this, false));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnerTriggerSphere };
//# sourceMappingURL=EveDistributionSpawnerTriggerSphere.js.map
