// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Tr2CurveScalar } from "../../../curves/Tr2CurveScalar.js";
import { Tr2CurveExtrapolation } from "../../../curves/enums.js";
import { TriPerlinCurve } from "../../../curves/TriPerlinCurve.js";
import { EveVirtualCameraBehaviourFloatBase } from "./EveVirtualCameraBehaviourFloatBase.js";


@type.define({
  className: "EveVirtualCameraBehaviourFloatNoise",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourFloatNoise extends EveVirtualCameraBehaviourFloatBase
{
  static #nextPhase = 0;

  @io.persist
  @type.int32
  octaves = 8;

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  magnitudeCurve = null;

  @io.persist
  @type.float32
  magnitude = 1;

  @io.persist
  @type.float32
  perlineScale = 1;

  #phase = EveVirtualCameraBehaviourFloatNoise.#allocatePhase();

  constructor()
  {
    super();
    this.magnitudeCurve = EveVirtualCameraBehaviourFloatNoise.#createMagnitudeCurve();
    this.SetName("Shake");
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    super.SetName(name);
    this.magnitudeCurve?.SetName?.(`${this.name} - Magnitude Curve`);
  }

  @carbon.method
  @impl.adapted
  Update(camera, _current, _deltaTime, localElapsedTime)
  {
    let offset = this.magnitude * TriPerlinCurve.PerlinNoise1D(
      (localElapsedTime + this.#phase) * this.perlineScale,
      2,
      2,
      this.octaves
    );
    if (this.magnitudeCurve)
    {
      const duration = Number(camera?.GetAnimationTimelineLength?.() ?? 0);
      const time = duration !== 0 ? localElapsedTime / duration : 0;
      offset *= Number(this.magnitudeCurve.GetValue?.(time) ?? 1);
    }
    return offset;
  }

  static #createMagnitudeCurve()
  {
    const curve = new Tr2CurveScalar();
    curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);
    curve.AddKey(0, 0);
    curve.AddKey(0.001, 0.8);
    curve.AddKey(0.1, 1);
    curve.AddKey(1, 0);
    return curve;
  }

  static #allocatePhase()
  {
    const phase = EveVirtualCameraBehaviourFloatNoise.#nextPhase & 0xfff;
    EveVirtualCameraBehaviourFloatNoise.#nextPhase++;
    return phase;
  }
}
