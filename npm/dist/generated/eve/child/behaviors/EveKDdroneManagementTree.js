import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_tree, _init_extra_tree, _init_debugSquareSize, _init_extra_debugSquareSize, _init_updateTimeCounter, _init_extra_updateTimeCounter, _init_maxFoundPerAgent, _init_extra_maxFoundPerAgent, _init_timeBetweenUpdate, _init_extra_timeBetweenUpdate, _init_agentRefs, _init_extra_agentRefs, _init_groupSearchReturnInfoBlock, _init_extra_groupSearchReturnInfoBlock, _init_agents, _init_extra_agents, _init_behaviorNbr, _init_extra_behaviorNbr, _init_radius, _init_extra_radius, _init_agent, _init_extra_agent, _init_rangeBetween, _init_extra_rangeBetween, _init_planeType, _init_extra_planeType, _init_b, _init_extra_b, _init_e, _init_extra_e, _init_left, _init_extra_left, _init_right, _init_extra_right;

/** EveKDdroneManagementTree (eve/child/behaviors) - generated from schema shapeHash 11f612c5.... */
let _EveKDdroneManagement;
new class extends _identity {
  static [class EveKDdroneManagementTree extends CjsModel {
    static {
      ({
        e: [_init_tree, _init_extra_tree, _init_debugSquareSize, _init_extra_debugSquareSize, _init_updateTimeCounter, _init_extra_updateTimeCounter, _init_maxFoundPerAgent, _init_extra_maxFoundPerAgent, _init_timeBetweenUpdate, _init_extra_timeBetweenUpdate, _init_agentRefs, _init_extra_agentRefs, _init_groupSearchReturnInfoBlock, _init_extra_groupSearchReturnInfoBlock, _init_agents, _init_extra_agents, _init_behaviorNbr, _init_extra_behaviorNbr, _init_radius, _init_extra_radius, _init_agent, _init_extra_agent, _init_rangeBetween, _init_extra_rangeBetween, _init_planeType, _init_extra_planeType, _init_b, _init_extra_b, _init_e, _init_extra_e, _init_left, _init_extra_left, _init_right, _init_extra_right],
        c: [_EveKDdroneManagement, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveKDdroneManagementTree",
        family: "eve/child/behaviors"
      })], [[type.objectRef("Agent"), 0, "tree"], [[type, type.float32], 16, "debugSquareSize"], [[type, type.float32], 16, "updateTimeCounter"], [[type, type.uint64], 16, "maxFoundPerAgent"], [[type, type.float32], 16, "timeBetweenUpdate"], [type.list("Agent"), 0, "agentRefs"], [type.list("std::vector<std::vector<DroneAgent>>"), 0, "groupSearchReturnInfoBlock"], [type.list("DroneAgent"), 0, "agents"], [[type, type.int32], 16, "behaviorNbr"], [[type, type.float32], 16, "radius"], [type.objectRef("DroneAgent"), 0, "agent"], [[type, type.float32], 16, "rangeBetween"], [[type, type.int32, void 0, schema.enum("PlaneType")], 16, "planeType"], [[type, type.int32], 16, "b"], [[type, type.int32], 16, "e"], [type.objectRef("Agent"), 0, "left"], [type.objectRef("Agent"), 0, "right"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_right(this);
    }
    /** m_tree (AgentRef) */
    tree = _init_tree(this, null);

    /** m_debugSquareSize (float) */
    debugSquareSize = (_init_extra_tree(this), _init_debugSquareSize(this, 0));

    /** m_updateTimeCounter (float) */
    updateTimeCounter = (_init_extra_debugSquareSize(this), _init_updateTimeCounter(this, 0));

    /** m_maxFoundPerAgent (size_t) */
    maxFoundPerAgent = (_init_extra_updateTimeCounter(this), _init_maxFoundPerAgent(this, 5));

    /** m_timeBetweenUpdate (float) */
    timeBetweenUpdate = (_init_extra_maxFoundPerAgent(this), _init_timeBetweenUpdate(this, 1));

    /** m_agentRefs (std::vector<AgentRef>) */
    agentRefs = (_init_extra_timeBetweenUpdate(this), _init_agentRefs(this, []));

    /** m_groupSearchReturnInfoBlock (std::vector<std::vector<std::vector<DroneAgent*>>>) */
    groupSearchReturnInfoBlock = (_init_extra_agentRefs(this), _init_groupSearchReturnInfoBlock(this, []));

    /** agents (std::vector<DroneAgent> &) */
    agents = (_init_extra_groupSearchReturnInfoBlock(this), _init_agents(this, []));

    /** behaviorNbr (int) */
    behaviorNbr = (_init_extra_agents(this), _init_behaviorNbr(this, 0));

    /** radius (float) */
    radius = (_init_extra_behaviorNbr(this), _init_radius(this, 0));

    /** agent (DroneAgent*) */
    agent = (_init_extra_radius(this), _init_agent(this, null));

    /** rangeBetween (float) */
    rangeBetween = (_init_extra_agent(this), _init_rangeBetween(this, 0));

    /** planeType (PlaneType - enum PlaneType) */
    planeType = (_init_extra_rangeBetween(this), _init_planeType(this, 0));

    /** b (int) */
    b = (_init_extra_planeType(this), _init_b(this, 0));

    /** e (int) */
    e = (_init_extra_b(this), _init_e(this, 0));

    /** left (AgentRef*) */
    left = (_init_extra_e(this), _init_left(this, null));

    /** right (AgentRef*) */
    right = (_init_extra_left(this), _init_right(this, null));
  }];
  PlaneType = Object.freeze({
    X: 0,
    Y: 1,
    Z: 2
  });
  constructor() {
    super(_EveKDdroneManagement), _initClass();
  }
}();

export { _EveKDdroneManagement as EveKDdroneManagementTree };
//# sourceMappingURL=EveKDdroneManagementTree.js.map
