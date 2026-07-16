import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_name, _init_extra_name, _init_particleSystem, _init_extra_particleSystem, _init_mesh, _init_extra_mesh, _init_useSpaceObjectData, _init_extra_useSpaceObjectData, _init_maxSpeed, _init_extra_maxSpeed, _init_radius, _init_extra_radius, _init_egoSpeed, _init_extra_egoSpeed, _init_positionShiftDecreaseSpeed, _init_extra_positionShiftDecreaseSpeed, _init_positionShiftIncreaseSpeed, _init_extra_positionShiftIncreaseSpeed, _init_generators, _init_extra_generators, _init_movementScale, _init_extra_movementScale, _init_positionShift, _init_extra_positionShift, _init_display, _init_extra_display, _init_positionShiftMin, _init_extra_positionShiftMin, _init_positionShiftMax, _init_extra_positionShiftMax;

/** EveChildParticleSphere (eve/child) - generated from schema shapeHash 521778de.... */
let _EveChildParticleSphe;
class EveChildParticleSphere extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_particleSystem, _init_extra_particleSystem, _init_mesh, _init_extra_mesh, _init_useSpaceObjectData, _init_extra_useSpaceObjectData, _init_maxSpeed, _init_extra_maxSpeed, _init_radius, _init_extra_radius, _init_egoSpeed, _init_extra_egoSpeed, _init_positionShiftDecreaseSpeed, _init_extra_positionShiftDecreaseSpeed, _init_positionShiftIncreaseSpeed, _init_extra_positionShiftIncreaseSpeed, _init_generators, _init_extra_generators, _init_movementScale, _init_extra_movementScale, _init_positionShift, _init_extra_positionShift, _init_display, _init_extra_display, _init_positionShiftMin, _init_extra_positionShiftMin, _init_positionShiftMax, _init_extra_positionShiftMax, _initProto],
      c: [_EveChildParticleSphe, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildParticleSphere",
      family: "eve/child"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.model("Tr2ParticleSystem")], 16, "particleSystem"], [[io, io.persist, void 0, type.model("Tr2InstancedMesh")], 16, "mesh"], [[io, io.persist, type, type.boolean], 16, "useSpaceObjectData"], [[io, io.persist, type, type.float32], 16, "maxSpeed"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.read, type, type.float32], 16, "egoSpeed"], [[io, io.persist, type, type.float32], 16, "positionShiftDecreaseSpeed"], [[io, io.persist, type, type.float32], 16, "positionShiftIncreaseSpeed"], [[io, io.persist, void 0, type.list("ITr2AttributeGenerator")], 16, "generators"], [[io, io.persist, type, type.float32], 16, "movementScale"], [[io, io.read, type, type.float32], 16, "positionShift"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.float32], 16, "positionShiftMin"], [[io, io.persist, type, type.float32], 16, "positionShiftMax"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Refresh"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_positionShiftMax(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

  /** m_particleSystem (Tr2ParticleSystemPtr) [READWRITE, PERSIST] */
  particleSystem = (_init_extra_name(this), _init_particleSystem(this, null));

  /** m_mesh (Tr2InstancedMeshPtr) [READWRITE, PERSIST] */
  mesh = (_init_extra_particleSystem(this), _init_mesh(this, null));

  /** m_useSpaceObjectData (bool) [READWRITE, PERSIST] */
  useSpaceObjectData = (_init_extra_mesh(this), _init_useSpaceObjectData(this, true));

  /** m_maxSpeed (float) [READWRITE, PERSIST] */
  maxSpeed = (_init_extra_useSpaceObjectData(this), _init_maxSpeed(this, 0));

  /** m_radius (float) [READWRITE, PERSIST] */
  radius = (_init_extra_maxSpeed(this), _init_radius(this, 500));

  /** m_egoSpeed (float) [READ] */
  egoSpeed = (_init_extra_radius(this), _init_egoSpeed(this, 0));

  /** m_positionShiftDecreaseSpeed (float) [READWRITE, PERSIST] */
  positionShiftDecreaseSpeed = (_init_extra_egoSpeed(this), _init_positionShiftDecreaseSpeed(this, 1000));

  /** m_positionShiftIncreaseSpeed (float) [READWRITE, PERSIST] */
  positionShiftIncreaseSpeed = (_init_extra_positionShiftDecreaseSpeed(this), _init_positionShiftIncreaseSpeed(this, 1000));

  /** m_generators (PITr2AttributeGeneratorVector) [READ, PERSIST] */
  generators = (_init_extra_positionShiftIncreaseSpeed(this), _init_generators(this, []));

  /** m_movementScale (float) [READWRITE, PERSIST] */
  movementScale = (_init_extra_generators(this), _init_movementScale(this, 1));

  /** m_positionShiftNormalized (float) [READ] */
  positionShift = (_init_extra_movementScale(this), _init_positionShift(this, 0));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_positionShift(this), _init_display(this, true));

  /** m_positionShiftMin (float) [READWRITE, PERSIST] */
  positionShiftMin = (_init_extra_display(this), _init_positionShiftMin(this, 100));

  /** m_positionShiftMax (float) [READWRITE, PERSIST] */
  positionShiftMax = (_init_extra_positionShiftMin(this), _init_positionShiftMax(this, 0));

  /** Carbon method Refresh (MAP_METHOD_AND_WRAP). */
  Refresh(...args) {
    throw new Error("EveChildParticleSphere.Refresh is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildParticleSphe as EveChildParticleSphere };
//# sourceMappingURL=EveChildParticleSphere.js.map
