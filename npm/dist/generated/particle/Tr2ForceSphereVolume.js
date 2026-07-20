import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_exponent, _init_extra_exponent, _init_forces, _init_extra_forces, _init_position, _init_extra_position, _init_radius, _init_extra_radius;

/** Tr2ForceSphereVolume (particle) - generated from schema shapeHash f8fee3fa.... */
let _Tr2ForceSphereVolume;
class Tr2ForceSphereVolume extends CjsModel {
  static {
    ({
      e: [_init_exponent, _init_extra_exponent, _init_forces, _init_extra_forces, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _initProto],
      c: [_Tr2ForceSphereVolume, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ForceSphereVolume",
      family: "particle"
    })], [[[io, io.persist, type, type.float32], 16, "exponent"], [[io, io.persist, void 0, type.list("ITr2ParticleForce")], 16, "forces"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.float32], 16, "radius"], [[impl, impl.implemented], 18, "Update"], [[impl, impl.adapted], 18, "GetForce"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_radius(this);
  }
  /** m_exponent (float) [READWRITE, PERSIST] */
  exponent = (_initProto(this), _init_exponent(this, 1));

  /** m_forces (PITr2ParticleForceVector) [READ, PERSIST] */
  forces = (_init_extra_exponent(this), _init_forces(this, []));

  /** m_position (Vector3) [READWRITE, PERSIST] */
  position = (_init_extra_forces(this), _init_position(this, vec3.create()));

  /** m_radius (float) [READWRITE, PERSIST] */
  radius = (_init_extra_position(this), _init_radius(this, 1));
  Update(dt) {
    for (const force of this.forces) {
      force?.Update?.(dt);
    }
  }
  GetForce(position, velocity, dt, mass, out = vec3.create()) {
    vec3.set(out, 0, 0, 0);
    const radius = Number(this.radius) || 0;
    if (radius <= 0) {
      return out;
    }
    const delta = vec3.subtract(vec3.create(), position, this.position);
    const distance = vec3.length(delta);
    if (distance >= radius) {
      return out;
    }
    const contribution = vec3.create();
    for (const force of this.forces) {
      if (typeof force?.GetForce !== "function") {
        throw new TypeError("Sphere-volume forces must implement Carbon's GetForce contract.");
      }
      vec3.set(contribution, 0, 0, 0);
      vec3.add(out, out, force.GetForce(position, velocity, dt, mass, contribution) ?? contribution);
    }
    return vec3.scale(out, out, Math.pow(1 - distance / radius, Number(this.exponent) || 0));
  }
  static {
    _initClass();
  }
}

export { _Tr2ForceSphereVolume as Tr2ForceSphereVolume };
//# sourceMappingURL=Tr2ForceSphereVolume.js.map
