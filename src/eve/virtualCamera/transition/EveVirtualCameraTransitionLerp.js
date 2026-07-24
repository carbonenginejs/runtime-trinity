// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraTransition.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraTransition.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { Tr2CurveScalar } from "../../../curves/Tr2CurveScalar.js";
import { EveVirtualCameraTransitionBase } from "./EveVirtualCameraTransitionBase.js";


@type.define({
  className: "EveVirtualCameraTransitionLerp",
  family: "eve/virtualCamera/transition"
})
export class EveVirtualCameraTransitionLerp extends EveVirtualCameraTransitionBase
{
  @io.persist
  @type.float32
  tansitionTime = 1;

  #localTime = 0;

  #transitionCurve = new Tr2CurveScalar();

  constructor()
  {
    super();
    this.#transitionCurve.AddKey(0, 0);
    this.#transitionCurve.AddKey(1, 1);
  }

  @carbon.method
  @impl.implemented
  IsComplete()
  {
    return this.#localTime > this.tansitionTime;
  }

  @carbon.method
  @impl.implemented
  Play()
  {
    this.#localTime = 0;
    super.Play();
    if (this.targetCamera)
    {
      this.targetCamera.UpdateToLocalTime(-this.tansitionTime);
      this.targetCamera.Play();
    }
  }

  @carbon.method
  @impl.adapted
  Update(deltaTime)
  {
    this.#localTime += deltaTime;
    if (this.transitionCamera && this.sourceCamera && this.targetCamera)
    {
      let amount = 1;
      if (this.tansitionTime > 0)
      {
        amount = Math.max(0, Math.min(1, this.#transitionCurve.GetValue(this.#localTime / this.tansitionTime)));
      }
      this.transitionCamera.UpdateExternal(
        vec3.lerp(vec3.create(), this.sourceCamera.GetPosition(), this.targetCamera.GetPosition(), amount),
        vec3.lerp(vec3.create(), this.sourceCamera.GetPointOfInterest(), this.targetCamera.GetPointOfInterest(), amount),
        this.sourceCamera.GetFov() + (this.targetCamera.GetFov() - this.sourceCamera.GetFov()) * amount,
        this.sourceCamera.GetRoll() + (this.targetCamera.GetRoll() - this.sourceCamera.GetRoll()) * amount
      );
    }
    super.Update(deltaTime);
  }

  @carbon.method
  @impl.implemented
  GetTransitionTime()
  {
    return this.tansitionTime;
  }

  @carbon.method
  @impl.implemented
  SetTransitionTime(value)
  {
    this.tansitionTime = value;
  }
}
