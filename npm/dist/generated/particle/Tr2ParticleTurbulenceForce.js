import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_amplitude, _init_extra_amplitude, _init_frequency, _init_extra_frequency, _init_noiseLevel, _init_extra_noiseLevel, _init_noiseRatio, _init_extra_noiseRatio;

/** Tr2ParticleTurbulenceForce (particle) - generated from schema shapeHash c1ffceca.... */
let _Tr2ParticleTurbulenc;
class Tr2ParticleTurbulenceForce extends CjsModel {
  static {
    ({
      e: [_init_amplitude, _init_extra_amplitude, _init_frequency, _init_extra_frequency, _init_noiseLevel, _init_extra_noiseLevel, _init_noiseRatio, _init_extra_noiseRatio],
      c: [_Tr2ParticleTurbulenc, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ParticleTurbulenceForce",
      family: "particle"
    })], [[[io, io.persist, type, type.vec3], 16, "amplitude"], [[io, io.persist, type, type.vec4], 16, "frequency"], [[io, io.persist, type, type.uint32], 16, "noiseLevel"], [[io, io.persist, type, type.float32], 16, "noiseRatio"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_noiseRatio(this);
  }
  /** m_amplitude (Vector3) [READWRITE, PERSIST] */
  amplitude = _init_amplitude(this, vec3.fromValues(1, 1, 1));

  /** m_frequency (Vector4) [READWRITE, PERSIST] */
  frequency = (_init_extra_amplitude(this), _init_frequency(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_noiseLevel (uint32_t) [READWRITE, PERSIST] */
  noiseLevel = (_init_extra_frequency(this), _init_noiseLevel(this, 3));

  /** m_noiseRatio (float) [READWRITE, PERSIST] */
  noiseRatio = (_init_extra_noiseLevel(this), _init_noiseRatio(this, 0.5));
  static {
    _initClass();
  }
}

export { _Tr2ParticleTurbulenc as Tr2ParticleTurbulenceForce };
//# sourceMappingURL=Tr2ParticleTurbulenceForce.js.map
