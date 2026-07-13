import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_affectPosition, _init_extra_affectPosition, _init_affectVelocity, _init_extra_affectVelocity, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_elasticity, _init_extra_elasticity, _init_friction, _init_extra_friction, _init_invertSphere, _init_extra_invertSphere, _init_isValid, _init_extra_isValid, _init_onCollisionEmitters, _init_extra_onCollisionEmitters, _init_generators, _init_extra_generators, _init_particleRadiusComponent, _init_extra_particleRadiusComponent, _init_reflectionNoise, _init_extra_reflectionNoise, _init_particleRadiusCoefficient, _init_extra_particleRadiusCoefficient;

/** Tr2SphereConstraint (particle) - generated from schema shapeHash f0c572f6.... */
let _Tr2SphereConstraint;
class Tr2SphereConstraint extends CjsModel {
  static {
    ({
      e: [_init_affectPosition, _init_extra_affectPosition, _init_affectVelocity, _init_extra_affectVelocity, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_elasticity, _init_extra_elasticity, _init_friction, _init_extra_friction, _init_invertSphere, _init_extra_invertSphere, _init_isValid, _init_extra_isValid, _init_onCollisionEmitters, _init_extra_onCollisionEmitters, _init_generators, _init_extra_generators, _init_particleRadiusComponent, _init_extra_particleRadiusComponent, _init_reflectionNoise, _init_extra_reflectionNoise, _init_particleRadiusCoefficient, _init_extra_particleRadiusCoefficient],
      c: [_Tr2SphereConstraint, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2SphereConstraint",
      family: "particle"
    })], [[[io, io.persist, type, type.boolean], 16, "affectPosition"], [[io, io.persist, type, type.boolean], 16, "affectVelocity"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.persist, type, type.float32], 16, "elasticity"], [[io, io.persist, type, type.float32], 16, "friction"], [[io, io.persist, type, type.boolean], 16, "invertSphere"], [[io, io.read, type, type.boolean], 16, "isValid"], [[io, io.persist, void 0, type.list("ITr2GenericEmitter")], 16, "onCollisionEmitters"], [[io, io.persist, void 0, type.list("ITr2AttributeGenerator")], 16, "generators"], [[io, io.persist, type, type.string], 16, "particleRadiusComponent"], [[io, io.persist, type, type.float32], 16, "reflectionNoise"], [[io, io.persist, type, type.vec4], 16, "particleRadiusCoefficient"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_particleRadiusCoefficient(this);
  }
  /** m_affectPosition (bool) [READWRITE, PERSIST] */
  affectPosition = _init_affectPosition(this, true);

  /** m_affectVelocity (bool) [READWRITE, PERSIST] */
  affectVelocity = (_init_extra_affectPosition(this), _init_affectVelocity(this, true));

  /** m_position (Vector3) [READWRITE, PERSIST] */
  position = (_init_extra_affectVelocity(this), _init_position(this, vec3.create()));

  /** m_radius (float) [READWRITE, PERSIST] */
  radius = (_init_extra_position(this), _init_radius(this, 1));

  /** m_elasticity (float) [READWRITE, PERSIST] */
  elasticity = (_init_extra_radius(this), _init_elasticity(this, 1));

  /** m_friction (float) [READWRITE, PERSIST] */
  friction = (_init_extra_elasticity(this), _init_friction(this, 1));

  /** m_invertSphere (bool) [READWRITE, PERSIST] */
  invertSphere = (_init_extra_friction(this), _init_invertSphere(this, false));

  /** m_isValid (bool) [READ] */
  isValid = (_init_extra_invertSphere(this), _init_isValid(this, false));

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

export { _Tr2SphereConstraint as Tr2SphereConstraint };
//# sourceMappingURL=Tr2SphereConstraint.js.map
