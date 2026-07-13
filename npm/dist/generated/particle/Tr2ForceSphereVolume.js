import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_exponent, _init_extra_exponent, _init_forces, _init_extra_forces, _init_position, _init_extra_position, _init_radius, _init_extra_radius;

/** Tr2ForceSphereVolume (particle) - generated from schema shapeHash f8fee3fa.... */
let _Tr2ForceSphereVolume;
class Tr2ForceSphereVolume extends CjsModel {
  static {
    ({
      e: [_init_exponent, _init_extra_exponent, _init_forces, _init_extra_forces, _init_position, _init_extra_position, _init_radius, _init_extra_radius],
      c: [_Tr2ForceSphereVolume, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ForceSphereVolume",
      family: "particle"
    })], [[[io, io.persist, type, type.float32], 16, "exponent"], [[io, io.persist, void 0, type.list("ITr2ParticleForce")], 16, "forces"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.float32], 16, "radius"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_radius(this);
  }
  /** m_exponent (float) [READWRITE, PERSIST] */
  exponent = _init_exponent(this, 1);

  /** m_forces (PITr2ParticleForceVector) [READ, PERSIST] */
  forces = (_init_extra_exponent(this), _init_forces(this, []));

  /** m_position (Vector3) [READWRITE, PERSIST] */
  position = (_init_extra_forces(this), _init_position(this, vec3.create()));

  /** m_radius (float) [READWRITE, PERSIST] */
  radius = (_init_extra_position(this), _init_radius(this, 1));
  static {
    _initClass();
  }
}

export { _Tr2ForceSphereVolume as Tr2ForceSphereVolume };
//# sourceMappingURL=Tr2ForceSphereVolume.js.map
