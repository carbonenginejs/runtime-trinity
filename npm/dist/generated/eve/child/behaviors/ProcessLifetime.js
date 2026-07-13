import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_splineTunnels, _init_extra_splineTunnels, _init_respawnAgentsOnDeath, _init_extra_respawnAgentsOnDeath, _init_firstAgentLifetime, _init_extra_firstAgentLifetime, _init_returningAge, _init_extra_returningAge, _init_wanderAmount, _init_extra_wanderAmount, _init_firstSpawnAtRandomPlaces, _init_extra_firstSpawnAtRandomPlaces, _init_behaviorWeight, _init_extra_behaviorWeight, _init_exit, _init_extra_exit;

/** ProcessLifetime (eve/child/behaviors) - generated from schema shapeHash 1fd3ebfa.... */
let _ProcessLifetime;
class ProcessLifetime extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_splineTunnels, _init_extra_splineTunnels, _init_respawnAgentsOnDeath, _init_extra_respawnAgentsOnDeath, _init_firstAgentLifetime, _init_extra_firstAgentLifetime, _init_returningAge, _init_extra_returningAge, _init_wanderAmount, _init_extra_wanderAmount, _init_firstSpawnAtRandomPlaces, _init_extra_firstSpawnAtRandomPlaces, _init_behaviorWeight, _init_extra_behaviorWeight, _init_exit, _init_extra_exit],
      c: [_ProcessLifetime, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "ProcessLifetime",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.notify, io, io.persist, void 0, type.list("SplineTunnelGroup")], 16, "splineTunnels"], [[io, io.persist, type, type.boolean], 16, "respawnAgentsOnDeath"], [[io, io.read, type, type.float32], 16, "firstAgentLifetime"], [[io, io.persist, type, type.float32], 16, "returningAge"], [[io, io.notify, io, io.persist, type, type.float32], 16, "wanderAmount"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "firstSpawnAtRandomPlaces"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.readwrite, type, type.boolean], 16, "exit"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_exit(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = _init_behaviorPriority(this, 0);

  /** m_splineTunnels (PSplineTunnelGroupVector) [READ, PERSIST, NOTIFY] */
  splineTunnels = (_init_extra_behaviorPriority(this), _init_splineTunnels(this, []));

  /** m_respawnAgentsOnDeath (bool) [READWRITE, PERSIST] */
  respawnAgentsOnDeath = (_init_extra_splineTunnels(this), _init_respawnAgentsOnDeath(this, true));

  /** m_firstAgentLifetime (float) [READ] */
  firstAgentLifetime = (_init_extra_respawnAgentsOnDeath(this), _init_firstAgentLifetime(this, 0));

  /** m_returningAge (float) [READWRITE, PERSIST] */
  returningAge = (_init_extra_firstAgentLifetime(this), _init_returningAge(this, -1));

  /** m_wanderAmount (float) [READWRITE, PERSIST, NOTIFY] */
  wanderAmount = (_init_extra_returningAge(this), _init_wanderAmount(this, 0.3));

  /** m_firstSpawnAtRandomPlaces (bool) [READWRITE, PERSIST, NOTIFY] */
  firstSpawnAtRandomPlaces = (_init_extra_wanderAmount(this), _init_firstSpawnAtRandomPlaces(this, true));

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_firstSpawnAtRandomPlaces(this), _init_behaviorWeight(this, 900));

  /** m_exit (bool) [READWRITE] */
  exit = (_init_extra_behaviorWeight(this), _init_exit(this, false));
  static {
    _initClass();
  }
}

export { _ProcessLifetime as ProcessLifetime };
//# sourceMappingURL=ProcessLifetime.js.map
