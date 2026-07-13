import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_elements, _init_extra_elements, _init_isValid, _init_extra_isValid, _init_name, _init_extra_name, _init_constraints, _init_extra_constraints, _init_forces, _init_extra_forces, _init_emitParticleOnDeathEmitter, _init_extra_emitParticleOnDeathEmitter, _init_emitParticleDuringLifeEmitter, _init_extra_emitParticleDuringLifeEmitter, _init_applyForce, _init_extra_applyForce, _init_applyAging, _init_extra_applyAging, _init_isGlobal, _init_extra_isGlobal, _init_updateSimulation, _init_extra_updateSimulation, _init_requiresSorting, _init_extra_requiresSorting, _init_aabbMax, _init_extra_aabbMax, _init_aabbMin, _init_extra_aabbMin, _init_peakAliveCount, _init_extra_peakAliveCount, _init_useSimTimeRebase, _init_extra_useSimTimeRebase, _init_maxParticleCount, _init_extra_maxParticleCount, _init_aliveCount, _init_extra_aliveCount, _init_originalMaxParticles, _init_extra_originalMaxParticles;

/** Tr2ParticleSystem (particle) - generated from schema shapeHash 4394134e.... */
let _Tr2ParticleSystem;
class Tr2ParticleSystem extends CjsModel {
  static {
    ({
      e: [_init_elements, _init_extra_elements, _init_isValid, _init_extra_isValid, _init_name, _init_extra_name, _init_constraints, _init_extra_constraints, _init_forces, _init_extra_forces, _init_emitParticleOnDeathEmitter, _init_extra_emitParticleOnDeathEmitter, _init_emitParticleDuringLifeEmitter, _init_extra_emitParticleDuringLifeEmitter, _init_applyForce, _init_extra_applyForce, _init_applyAging, _init_extra_applyAging, _init_isGlobal, _init_extra_isGlobal, _init_updateSimulation, _init_extra_updateSimulation, _init_requiresSorting, _init_extra_requiresSorting, _init_aabbMax, _init_extra_aabbMax, _init_aabbMin, _init_extra_aabbMin, _init_peakAliveCount, _init_extra_peakAliveCount, _init_useSimTimeRebase, _init_extra_useSimTimeRebase, _init_maxParticleCount, _init_extra_maxParticleCount, _init_aliveCount, _init_extra_aliveCount, _init_originalMaxParticles, _init_extra_originalMaxParticles, _initProto],
      c: [_Tr2ParticleSystem, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ParticleSystem",
      family: "particle"
    })], [[[io, io.persist, void 0, type.list("Tr2ParticleElementDeclaration")], 16, "elements"], [[io, io.read, type, type.boolean], 16, "isValid"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("ITr2GenericParticleConstraint")], 16, "constraints"], [[io, io.persist, void 0, type.list("ITr2ParticleForce")], 16, "forces"], [[io, io.notify, io, io.persist, void 0, type.objectRef("ITr2GenericEmitter")], 16, "emitParticleOnDeathEmitter"], [[io, io.notify, io, io.persist, void 0, type.objectRef("ITr2GenericEmitter")], 16, "emitParticleDuringLifeEmitter"], [[io, io.persist, type, type.boolean], 16, "applyForce"], [[io, io.persist, type, type.boolean], 16, "applyAging"], [[io, io.persist, type, type.boolean], 16, "isGlobal"], [[io, io.persist, type, type.boolean], 16, "updateSimulation"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "requiresSorting"], [[io, io.read, type, type.vec3], 16, "aabbMax"], [[io, io.read, type, type.vec3], 16, "aabbMin"], [[io, io.read, type, type.uint32], 16, "peakAliveCount"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "useSimTimeRebase"], [[io, io.persistOnly, type, type.uint32], 16, "maxParticleCount"], [[io, io.read, type, type.uint32], 16, "aliveCount"], [[io, io.read, type, type.uint32], 16, "originalMaxParticles"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearParticles"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RebindConstraints"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SaveToCMF"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SaveToGranny"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UpdateElementDeclaration"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UpdateSimulation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_originalMaxParticles(this);
  }
  /** m_elements (PTr2ParticleElementDeclarationVector) [READ, PERSIST] */
  elements = (_initProto(this), _init_elements(this, []));

  /** m_isValid (bool) [READ] */
  isValid = (_init_extra_elements(this), _init_isValid(this, false));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_isValid(this), _init_name(this, ""));

  /** m_constraints (PITr2GenericParticleConstraintVector) [READ, PERSIST] */
  constraints = (_init_extra_name(this), _init_constraints(this, []));

  /** m_forces (PITr2ParticleForceVector) [READ, PERSIST] */
  forces = (_init_extra_constraints(this), _init_forces(this, []));

  /** m_emissionOnDeathEmitter (ITr2GenericEmitterPtr) [READWRITE, NOTIFY, PERSIST] */
  emitParticleOnDeathEmitter = (_init_extra_forces(this), _init_emitParticleOnDeathEmitter(this, null));

  /** m_emissionWhileAliveEmitter (ITr2GenericEmitterPtr) [READWRITE, NOTIFY, PERSIST] */
  emitParticleDuringLifeEmitter = (_init_extra_emitParticleOnDeathEmitter(this), _init_emitParticleDuringLifeEmitter(this, null));

  /** m_applyForce (bool) [READWRITE, PERSIST] */
  applyForce = (_init_extra_emitParticleDuringLifeEmitter(this), _init_applyForce(this, true));

  /** m_applyAging (bool) [READWRITE, PERSIST] */
  applyAging = (_init_extra_applyForce(this), _init_applyAging(this, true));

  /** m_isGlobal (bool) [READWRITE, PERSIST] */
  isGlobal = (_init_extra_applyAging(this), _init_isGlobal(this, false));

  /** m_updateSimulation (bool) [READWRITE, PERSIST] */
  updateSimulation = (_init_extra_isGlobal(this), _init_updateSimulation(this, true));

  /** m_requiresSorting (bool) [READWRITE, PERSIST, NOTIFY] */
  requiresSorting = (_init_extra_updateSimulation(this), _init_requiresSorting(this, false));

  /** m_AabbMax (Vector3) [READ] */
  aabbMax = (_init_extra_requiresSorting(this), _init_aabbMax(this, vec3.create()));

  /** m_AabbMin (Vector3) [READ] */
  aabbMin = (_init_extra_aabbMax(this), _init_aabbMin(this, vec3.create()));

  /** m_peakAliveCount (unsigned) [READ] */
  peakAliveCount = (_init_extra_aabbMin(this), _init_peakAliveCount(this, 0));

  /** m_useSimTimeRebase (bool) [READWRITE, NOTIFY, PERSIST] */
  useSimTimeRebase = (_init_extra_peakAliveCount(this), _init_useSimTimeRebase(this, false));

  /** m_maxParticleCount (unsigned) [PERSISTONLY] */
  maxParticleCount = (_init_extra_useSimTimeRebase(this), _init_maxParticleCount(this, 0));

  /** m_aliveCount (unsigned) [READ] */
  aliveCount = (_init_extra_maxParticleCount(this), _init_aliveCount(this, 0));

  /** m_originalMaxParticles (unsigned) [READ] */
  originalMaxParticles = (_init_extra_aliveCount(this), _init_originalMaxParticles(this, 0));

  /** Carbon method ClearParticles (MAP_METHOD_AND_WRAP). */
  ClearParticles(...args) {
    throw CjsModel.notImplemented("Tr2ParticleSystem", "ClearParticles", args);
  }

  /** Carbon method RebindConstraints (MAP_METHOD_AND_WRAP). */
  RebindConstraints(...args) {
    throw CjsModel.notImplemented("Tr2ParticleSystem", "RebindConstraints", args);
  }

  /** Carbon method SaveToCMF (MAP_METHOD_AND_WRAP). */
  SaveToCMF(...args) {
    throw CjsModel.notImplemented("Tr2ParticleSystem", "SaveToCMF", args);
  }

  /** Carbon method SaveToGranny (MAP_METHOD_AND_WRAP). */
  SaveToGranny(...args) {
    throw CjsModel.notImplemented("Tr2ParticleSystem", "SaveToGranny", args);
  }

  /** Carbon method UpdateElementDeclaration (MAP_METHOD_AND_WRAP). */
  UpdateElementDeclaration(...args) {
    throw CjsModel.notImplemented("Tr2ParticleSystem", "UpdateElementDeclaration", args);
  }

  /** Carbon method UpdateSimulation -> UpdateSimulationScript (MAP_METHOD_AND_WRAP). */
  UpdateSimulation(...args) {
    throw CjsModel.notImplemented("Tr2ParticleSystem", "UpdateSimulation", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2ParticleSystem as Tr2ParticleSystem };
//# sourceMappingURL=Tr2ParticleSystem.js.map
