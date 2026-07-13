import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2CurveScalar as _Tr2CurveScalar } from '../../../curves/Tr2CurveScalar.js';
import { Tr2CurveExtrapolation } from '../../../curves/enums.js';
import { TriPerlinCurve as _TriPerlinCurve } from '../../../curves/TriPerlinCurve.js';
import { EveVirtualCameraBehaviourFloatBase as _EveVirtualCameraBeha$1 } from './EveVirtualCameraBehaviourFloatBase.js';

let _initProto, _initClass, _init_octaves, _init_extra_octaves, _init_magnitudeCurve, _init_extra_magnitudeCurve, _init_magnitude, _init_extra_magnitude, _init_perlineScale, _init_extra_perlineScale;
let _EveVirtualCameraBeha;
new class extends _identity {
  static [class EveVirtualCameraBehaviourFloatNoise extends _EveVirtualCameraBeha$1 {
    static {
      ({
        e: [_init_octaves, _init_extra_octaves, _init_magnitudeCurve, _init_extra_magnitudeCurve, _init_magnitude, _init_extra_magnitude, _init_perlineScale, _init_extra_perlineScale, _initProto],
        c: [_EveVirtualCameraBeha, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveVirtualCameraBehaviourFloatNoise",
        family: "eve/virtualCamera/behaviour"
      })], [[[io, io.persist, type, type.int32], 16, "octaves"], [[io, io.persist, void 0, type.objectRef("Tr2CurveScalar")], 16, "magnitudeCurve"], [[io, io.persist, type, type.float32], 16, "magnitude"], [[io, io.persist, type, type.float32], 16, "perlineScale"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"]], 0, void 0, _EveVirtualCameraBeha$1));
    }
    octaves = (_initProto(this), _init_octaves(this, 8));
    magnitudeCurve = (_init_extra_octaves(this), _init_magnitudeCurve(this, null));
    magnitude = (_init_extra_magnitudeCurve(this), _init_magnitude(this, 1));
    perlineScale = (_init_extra_magnitude(this), _init_perlineScale(this, 1));
    #phase = (_init_extra_perlineScale(this), _EveVirtualCameraBeha.#allocatePhase());
    constructor() {
      super();
      this.magnitudeCurve = _EveVirtualCameraBeha.#createMagnitudeCurve();
      this.SetName("Shake");
    }
    SetName(name) {
      super.SetName(name);
      this.magnitudeCurve?.SetName?.(`${this.name} - Magnitude Curve`);
    }
    Update(camera, _current, _deltaTime, localElapsedTime) {
      let offset = this.magnitude * _TriPerlinCurve.PerlinNoise1D((localElapsedTime + this.#phase) * this.perlineScale, 2, 2, this.octaves);
      if (this.magnitudeCurve) {
        const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
        const time = duration !== 0 ? localElapsedTime / duration : 0;
        offset *= Number(this.magnitudeCurve.GetValue?.(time) ?? 1);
      }
      return offset;
    }
  }];
  #nextPhase = 0;
  #createMagnitudeCurve() {
    const curve = new _Tr2CurveScalar();
    curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);
    curve.AddKey(0, 0);
    curve.AddKey(0.001, 0.8);
    curve.AddKey(0.1, 1);
    curve.AddKey(1, 0);
    return curve;
  }
  #allocatePhase() {
    const phase = _EveVirtualCameraBeha.#nextPhase & 0xfff;
    _EveVirtualCameraBeha.#nextPhase++;
    return phase;
  }
  constructor() {
    super(_EveVirtualCameraBeha), _initClass();
  }
}();

export { _EveVirtualCameraBeha as EveVirtualCameraBehaviourFloatNoise };
//# sourceMappingURL=EveVirtualCameraBehaviourFloatNoise.js.map
