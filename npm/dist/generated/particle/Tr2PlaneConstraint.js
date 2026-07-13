import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_affectPosition, _init_extra_affectPosition, _init_affectVelocity, _init_extra_affectVelocity, _init_plane, _init_extra_plane, _init_elasticity, _init_extra_elasticity, _init_friction, _init_extra_friction, _init_isValid, _init_extra_isValid, _init_onCollisionEmitters, _init_extra_onCollisionEmitters, _init_generators, _init_extra_generators, _init_particleRadiusComponent, _init_extra_particleRadiusComponent, _init_reflectionNoise, _init_extra_reflectionNoise, _init_particleRadiusCoefficient, _init_extra_particleRadiusCoefficient;

/** Tr2PlaneConstraint (particle) - generated from schema shapeHash bac6c545.... */
let _Tr2PlaneConstraint;
class Tr2PlaneConstraint extends CjsModel {
  static {
    ({
      e: [_init_affectPosition, _init_extra_affectPosition, _init_affectVelocity, _init_extra_affectVelocity, _init_plane, _init_extra_plane, _init_elasticity, _init_extra_elasticity, _init_friction, _init_extra_friction, _init_isValid, _init_extra_isValid, _init_onCollisionEmitters, _init_extra_onCollisionEmitters, _init_generators, _init_extra_generators, _init_particleRadiusComponent, _init_extra_particleRadiusComponent, _init_reflectionNoise, _init_extra_reflectionNoise, _init_particleRadiusCoefficient, _init_extra_particleRadiusCoefficient],
      c: [_Tr2PlaneConstraint, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2PlaneConstraint",
      family: "particle"
    })], [[[io, io.persist, type, type.boolean], 16, "affectPosition"], [[io, io.persist, type, type.boolean], 16, "affectVelocity"], [[io, io.notify, io, io.persist, type, type.vec4], 16, "plane"], [[io, io.persist, type, type.float32], 16, "elasticity"], [[io, io.persist, type, type.float32], 16, "friction"], [[io, io.read, type, type.boolean], 16, "isValid"], [[io, io.persist, void 0, type.list("ITr2GenericEmitter")], 16, "onCollisionEmitters"], [[io, io.persist, void 0, type.list("ITr2AttributeGenerator")], 16, "generators"], [[io, io.persist, type, type.string], 16, "particleRadiusComponent"], [[io, io.persist, type, type.float32], 16, "reflectionNoise"], [[io, io.persist, type, type.vec4], 16, "particleRadiusCoefficient"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_particleRadiusCoefficient(this);
  }
  /** m_affectPosition (bool) [READWRITE, PERSIST] */
  affectPosition = _init_affectPosition(this, true);

  /** m_affectVelocity (bool) [READWRITE, PERSIST] */
  affectVelocity = (_init_extra_affectPosition(this), _init_affectVelocity(this, true));

  /** m_plane (Vector4) [READWRITE, PERSIST, NOTIFY] */
  plane = (_init_extra_affectVelocity(this), _init_plane(this, vec4.fromValues(0, 1, 0, 0)));

  /** m_elasticity (float) [READWRITE, PERSIST] */
  elasticity = (_init_extra_plane(this), _init_elasticity(this, 1));

  /** m_friction (float) [READWRITE, PERSIST] */
  friction = (_init_extra_elasticity(this), _init_friction(this, 1));

  /** m_isValid (bool) [READ] */
  isValid = (_init_extra_friction(this), _init_isValid(this, false));

  /** m_onCollisionEmitters (PITr2GenericEmitterVector) [READ, PERSIST] */
  onCollisionEmitters = (_init_extra_isValid(this), _init_onCollisionEmitters(this, []));

  /** m_generators (PITr2AttributeGeneratorVector) [READ, PERSIST] */
  generators = (_init_extra_onCollisionEmitters(this), _init_generators(this, []));

  /** m_particleRadiusComponent (std::string) [READWRITE, PERSIST] */
  particleRadiusComponent = (_init_extra_generators(this), _init_particleRadiusComponent(this, ""));

  /** m_reflectionNoise (float) [READWRITE, PERSIST] */
  reflectionNoise = (_init_extra_particleRadiusComponent(this), _init_reflectionNoise(this, 0));

  /** m_particleRadiusCoefficient (Vector4) [READWRITE, PERSIST] */
  particleRadiusCoefficient = (_init_extra_reflectionNoise(this), _init_particleRadiusCoefficient(this, vec4.fromValues(1, 0, 0, 0)));
  static {
    _initClass();
  }
}

export { _Tr2PlaneConstraint as Tr2PlaneConstraint };
//# sourceMappingURL=Tr2PlaneConstraint.js.map
