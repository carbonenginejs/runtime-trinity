import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { Tr2ParticleElementDeclaration as _Tr2ParticleElementDe } from './Tr2ParticleElementDeclaration.js';

let _initProto, _initClass, _init_affectPosition, _init_extra_affectPosition, _init_affectVelocity, _init_extra_affectVelocity, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_elasticity, _init_extra_elasticity, _init_friction, _init_extra_friction, _init_invertSphere, _init_extra_invertSphere, _init_isValid, _init_extra_isValid, _init_onCollisionEmitters, _init_extra_onCollisionEmitters, _init_generators, _init_extra_generators, _init_particleRadiusComponent, _init_extra_particleRadiusComponent, _init_reflectionNoise, _init_extra_reflectionNoise, _init_particleRadiusCoefficient, _init_extra_particleRadiusCoefficient;

/** Tr2SphereConstraint (particle) - generated from schema shapeHash f0c572f6.... */
let _Tr2SphereConstraint;
class Tr2SphereConstraint extends CjsModel {
  static {
    ({
      e: [_init_affectPosition, _init_extra_affectPosition, _init_affectVelocity, _init_extra_affectVelocity, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_elasticity, _init_extra_elasticity, _init_friction, _init_extra_friction, _init_invertSphere, _init_extra_invertSphere, _init_isValid, _init_extra_isValid, _init_onCollisionEmitters, _init_extra_onCollisionEmitters, _init_generators, _init_extra_generators, _init_particleRadiusComponent, _init_extra_particleRadiusComponent, _init_reflectionNoise, _init_extra_reflectionNoise, _init_particleRadiusCoefficient, _init_extra_particleRadiusCoefficient, _initProto],
      c: [_Tr2SphereConstraint, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2SphereConstraint",
      family: "particle"
    })], [[[io, io.persist, type, type.boolean], 16, "affectPosition"], [[io, io.persist, type, type.boolean], 16, "affectVelocity"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.persist, type, type.float32], 16, "elasticity"], [[io, io.persist, type, type.float32], 16, "friction"], [[io, io.persist, type, type.boolean], 16, "invertSphere"], [[io, io.read, type, type.boolean], 16, "isValid"], [[io, io.persist, void 0, type.list("ITr2GenericEmitter")], 16, "onCollisionEmitters"], [[io, io.persist, void 0, type.list("ITr2AttributeGenerator")], 16, "generators"], [[io, io.persist, type, type.string], 16, "particleRadiusComponent"], [[io, io.persist, type, type.float32], 16, "reflectionNoise"], [[io, io.persist, type, type.vec4], 16, "particleRadiusCoefficient"], [[impl, impl.implemented], 18, "Initialize"], [[impl, impl.adapted], 18, "Bind"], [[impl, impl.adapted], 18, "ApplyConstraint"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_particleRadiusCoefficient(this);
  }
  #positionElement = (_initProto(this), null);
  #velocityElement = null;
  #radiusElement = null;

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
  Initialize() {
    for (const emitter of this.onCollisionEmitters) {
      emitter?.SetThreadSafeFlag?.();
    }
    return true;
  }
  Bind(particleSystem) {
    this.isValid = false;
    this.#positionElement = particleSystem?.GetElement?.(_Tr2ParticleElementDe.Type.POSITION) ?? null;
    this.#velocityElement = particleSystem?.GetElement?.(_Tr2ParticleElementDe.Type.VELOCITY) ?? null;
    this.#radiusElement = this.particleRadiusComponent ? particleSystem?.GetElement?.(this.particleRadiusComponent) ?? null : null;
    if (!this.#positionElement || this.particleRadiusComponent && !this.#radiusElement) {
      return false;
    }
    const boundElements = new Set();
    for (const generator of this.generators) {
      if (typeof generator?.Bind !== "function") {
        throw new TypeError("Particle generators must implement Carbon's Bind contract.");
      }
      if (generator.Bind(particleSystem, boundElements) === false) {
        return false;
      }
    }
    this.isValid = true;
    return true;
  }
  ApplyConstraint(_buffers, _strides, count, dt = 0) {
    if (!this.isValid) {
      return 0;
    }
    const invert = this.invertSphere ? -1 : 1;
    let collisions = 0;
    for (let index = 0; index < count; index++) {
      const position = this.#view(this.#positionElement, index);
      const velocity = this.#velocityElement ? this.#view(this.#velocityElement, index) : null;
      const particleRadius = this.#radiusElement ? this.#dotRadius(this.#view(this.#radiusElement, index)) : 0;
      const radius = Math.max(0, this.radius + (this.invertSphere ? -particleRadius : particleRadius));
      const offset = vec3.subtract(vec3.create(), position, this.position);
      const distanceSquared = vec3.squaredLength(offset);
      let collided = distanceSquared * invert < radius * radius * invert;
      if (collided) {
        if (this.affectPosition) {
          this.#projectPosition(position, offset, radius);
          if (this.affectVelocity && velocity) {
            vec3.subtract(offset, position, this.position);
            this.#reflectVelocity(velocity, offset, invert);
          }
        }
      } else if (velocity) {
        const a = vec3.squaredLength(velocity);
        const b = 2 * vec3.dot(velocity, offset);
        const c = distanceSquared - this.radius * this.radius;
        const determinant = b * b - 4 * a * c;
        if (determinant < 0 || a === 0) {
          continue;
        }
        const root = Math.sqrt(determinant);
        const time = this.invertSphere ? (-b + root) / (2 * a) : (-b - root) / (2 * a);
        if (time < 0 || time > dt) {
          continue;
        }
        collided = true;
        if (this.affectPosition) {
          vec3.scaleAndAdd(position, position, velocity, time);
          if (this.affectVelocity) {
            vec3.subtract(offset, position, this.position);
            this.#reflectVelocity(velocity, offset, invert);
          }
        }
      }
      if (!collided) {
        continue;
      }
      collisions++;
      for (const generator of this.generators) {
        generator?.Generate?.(position, velocity, index);
      }
      for (const emitter of this.onCollisionEmitters) {
        emitter?.SpawnParticles?.(position, velocity, 1);
      }
    }
    return collisions;
  }
  #projectPosition(position, offset, radius) {
    const length = vec3.length(offset);
    if (length > 0) {
      vec3.scaleAndAdd(position, this.position, offset, radius / length);
    } else {
      vec3.set(position, this.position[0], this.position[1] + radius, this.position[2]);
    }
  }
  #reflectVelocity(velocity, offset, invert) {
    const length = vec3.length(offset);
    if (length === 0) {
      return;
    }
    const normal = vec3.scale(offset, offset, invert / length);
    const velocityDot = vec3.dot(velocity, normal);
    if (velocityDot >= 0) {
      return;
    }
    const bounceScale = -velocityDot * this.elasticity;
    const slide = vec3.scaleAndAdd(vec3.create(), velocity, normal, -velocityDot);
    vec3.scale(slide, slide, this.friction);
    vec3.scaleAndAdd(velocity, slide, normal, bounceScale);
    this.#addReflectionNoise(velocity, normal);
  }
  #view(element, index) {
    const offset = element.startOffset + index * element.instanceStride;
    return element.buffer.subarray(offset, offset + element.dimension);
  }
  #dotRadius(value) {
    let result = 0;
    for (let component = 0; component < Math.min(4, value.length); component++) {
      result += value[component] * this.particleRadiusCoefficient[component];
    }
    return result;
  }
  #addReflectionNoise(velocity, normal) {
    if (this.reflectionNoise <= 0) {
      return;
    }
    const noise = vec3.fromValues(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    vec3.scale(noise, noise, this.reflectionNoise);
    vec3.scaleAndAdd(noise, noise, normal, -vec3.dot(noise, normal));
    vec3.scaleAndAdd(velocity, velocity, noise, vec3.length(velocity));
  }
  static {
    _initClass();
  }
}

export { _Tr2SphereConstraint as Tr2SphereConstraint };
//# sourceMappingURL=Tr2SphereConstraint.js.map
