import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_display, _init_extra_display, _init_maxVelocity, _init_extra_maxVelocity, _init_scale, _init_extra_scale, _init_blendScreenSizeMax, _init_extra_blendScreenSizeMax, _init_blendScreenSizeMin, _init_extra_blendScreenSizeMin, _init_currentScreenSize, _init_extra_currentScreenSize, _init_renderThreshold, _init_extra_renderThreshold, _init_debugIntensity, _init_extra_debugIntensity, _init_debugLodLevel, _init_extra_debugLodLevel, _init_actualCount, _init_extra_actualCount, _init_count, _init_extra_count, _init_boosters, _init_extra_boosters, _init_mesh, _init_extra_mesh, _init_name, _init_extra_name, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_debugMode, _init_extra_debugMode, _init_update, _init_extra_update, _init_behaviors, _init_extra_behaviors, _init_spawnPosition, _init_extra_spawnPosition;

/** BehaviorGroup (eve/child/behaviors) - generated from schema shapeHash d09b2740.... */
let _BehaviorGroup;
class BehaviorGroup extends _EveEntity {
  static {
    ({
      e: [_init_display, _init_extra_display, _init_maxVelocity, _init_extra_maxVelocity, _init_scale, _init_extra_scale, _init_blendScreenSizeMax, _init_extra_blendScreenSizeMax, _init_blendScreenSizeMin, _init_extra_blendScreenSizeMin, _init_currentScreenSize, _init_extra_currentScreenSize, _init_renderThreshold, _init_extra_renderThreshold, _init_debugIntensity, _init_extra_debugIntensity, _init_debugLodLevel, _init_extra_debugLodLevel, _init_actualCount, _init_extra_actualCount, _init_count, _init_extra_count, _init_boosters, _init_extra_boosters, _init_mesh, _init_extra_mesh, _init_name, _init_extra_name, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_debugMode, _init_extra_debugMode, _init_update, _init_extra_update, _init_behaviors, _init_extra_behaviors, _init_spawnPosition, _init_extra_spawnPosition, _initProto],
      c: [_BehaviorGroup, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "BehaviorGroup",
      family: "eve/child/behaviors"
    })], [[[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.float32], 16, "maxVelocity"], [[io, io.persist, type, type.float32], 16, "scale"], [[io, io.persist, type, type.float32], 16, "blendScreenSizeMax"], [[io, io.persist, type, type.float32], 16, "blendScreenSizeMin"], [[io, io.read, type, type.float32], 16, "currentScreenSize"], [[io, io.persist, type, type.float32], 16, "renderThreshold"], [[io, io.readwrite, type, type.float32], 16, "debugIntensity"], [[io, io.readwrite, type, type.float32], 16, "debugLodLevel"], [[io, io.read, type, type.int32], 16, "actualCount"], [[io, io.persist, type, type.int32], 16, "count"], [[io, io.notify, io, io.persist, void 0, type.model("BehaviorGroupBooster")], 16, "boosters"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Mesh")], 16, "mesh"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.float32], 16, "boundingSphereRadius"], [[io, io.readwrite, type, type.boolean], 16, "debugMode"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.persist, void 0, type.list("IBehavior")], 16, "behaviors"], [[io, io.persist, type, type.vec3], 16, "spawnPosition"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Browser behavior groups retain a deterministic linear spatial snapshot; native KD-tree allocation is unnecessary until neighborhood queries are ported.")], 18, "CreateAgentTree"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddAgent"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Math.random replaces Carbon's TriRandInt when selecting the removed agent.")], 18, "RemoveAgent"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetCount"], [[impl, impl.adapted], 18, "GetAgents"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_spawnPosition(this);
  }
  #agents = (_initProto(this), []);
  #agentTree = [];

  /** m_display (bool) [READWRITE, PERSIST] */
  display = _init_display(this, true);

  /** m_maxVelocity (float) [READWRITE, PERSIST] */
  maxVelocity = (_init_extra_display(this), _init_maxVelocity(this, 100));

  /** m_scale (float) [READWRITE, PERSIST] */
  scale = (_init_extra_maxVelocity(this), _init_scale(this, 1));

  /** m_blendScreenSizeMax (float) [READWRITE, PERSIST] */
  blendScreenSizeMax = (_init_extra_scale(this), _init_blendScreenSizeMax(this, 15));

  /** m_blendScreenSizeMin (float) [READWRITE, PERSIST] */
  blendScreenSizeMin = (_init_extra_blendScreenSizeMax(this), _init_blendScreenSizeMin(this, 5));

  /** m_currentScreenSize (float) [READ] */
  currentScreenSize = (_init_extra_blendScreenSizeMin(this), _init_currentScreenSize(this, 0));

  /** m_renderThreshold (float) [READWRITE, PERSIST] */
  renderThreshold = (_init_extra_currentScreenSize(this), _init_renderThreshold(this, 1));

  /** m_debugIntensity (float) [READWRITE] */
  debugIntensity = (_init_extra_renderThreshold(this), _init_debugIntensity(this, 0));

  /** m_debugLodLevel (float) [READWRITE] */
  debugLodLevel = (_init_extra_debugIntensity(this), _init_debugLodLevel(this, 0));

  /** m_actualCount (int32_t) [READ] */
  actualCount = (_init_extra_debugLodLevel(this), _init_actualCount(this, 0));

  /** m_count (int32_t) [READWRITE, PERSIST] */
  count = (_init_extra_actualCount(this), _init_count(this, 0));

  /** m_booster (BehaviorGroupBoosterPtr) [READWRITE, PERSIST, NOTIFY] */
  boosters = (_init_extra_count(this), _init_boosters(this, null));

  /** m_mesh (Tr2MeshPtr) [READWRITE, PERSIST, NOTIFY] */
  mesh = (_init_extra_boosters(this), _init_mesh(this, null));

  /** m_behaviorGroupName (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_mesh(this), _init_name(this, ""));

  /** m_boundingSphereRadius (float) [READWRITE, PERSIST] */
  boundingSphereRadius = (_init_extra_name(this), _init_boundingSphereRadius(this, 5));

  /** m_debugMode (bool) [READWRITE] */
  debugMode = (_init_extra_boundingSphereRadius(this), _init_debugMode(this, false));

  /** m_update (bool) [READWRITE, PERSIST] */
  update = (_init_extra_debugMode(this), _init_update(this, true));

  /** m_behaviors (PIBehaviorVector) [READ, PERSIST] */
  behaviors = (_init_extra_update(this), _init_behaviors(this, []));

  /** m_spawnPosition (Vector3) [READWRITE, PERSIST] */
  spawnPosition = (_init_extra_behaviors(this), _init_spawnPosition(this, vec3.create()));

  /** Carbon method CreateAgentTree (MAP_METHOD_AND_WRAP). */
  CreateAgentTree() {
    this.#agentTree = this.#agents.slice();
    return this.#agentTree;
  }

  /** Carbon method AddAgent (MAP_METHOD_AND_WRAP). */
  AddAgent() {
    this.#agents.push(this.#createAgent());
    this.#onAgentCountChanged();
  }

  /** Carbon method RemoveAgent (MAP_METHOD_AND_WRAP). */
  RemoveAgent() {
    if (this.#agents.length === 0) {
      return;
    }
    const index = Math.floor(Math.random() * this.#agents.length);
    this.#agents[index] = this.#agents[this.#agents.length - 1];
    this.#agents.pop();
    this.#onAgentCountChanged();
  }

  /** Carbon method SetCount (MAP_METHOD_AND_WRAP). */
  SetCount(count) {
    const value = Number(count);
    const desired = Number.isFinite(value) ? Math.trunc(value) : -1;
    if (desired < 0 || desired === this.#agents.length) {
      return;
    }
    while (this.#agents.length < desired) {
      this.#agents.push(this.#createAgent());
    }
    this.#agents.length = desired;
    this.count = desired;
    this.#onAgentCountChanged();
  }

  /** Returns the portable DroneAgent records in stable instance order. */
  GetAgents() {
    return this.#agents;
  }
  #createAgent() {
    return {
      closestAgentInGroup: null,
      rotation: new Float32Array([0, 0, 0, 1]),
      position: vec3.clone(this.spawnPosition),
      acceleration: vec3.create(),
      velocity: vec3.create(),
      accelerationLength: 0,
      velocityLength: 0,
      target: vec3.create(),
      targetDirection: vec3.create(),
      id: Math.floor(Math.random() * 500),
      lifetime: 0,
      playFX: false,
      fxStartTime: -1,
      xfade: 0,
      isVisible: false,
      screenSize: 0
    };
  }
  #onAgentCountChanged() {
    this.actualCount = this.#agents.length;
    this.#agentTree = [];
    if (this.boosters) {
      this.boosters.flareCount = this.actualCount;
      this.boosters.RebuildFlareBuffer?.(this.actualCount);
    }
  }
  static {
    _initClass();
  }
}

export { _BehaviorGroup as BehaviorGroup };
//# sourceMappingURL=BehaviorGroup.js.map
