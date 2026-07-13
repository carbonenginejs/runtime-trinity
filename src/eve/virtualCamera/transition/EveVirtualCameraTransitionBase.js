// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraTransition.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraTransition.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCamera } from "../EveVirtualCamera.js";


@type.define({
  className: "EveVirtualCameraTransitionBase",
  family: "eve/virtualCamera/transition"
})
export class EveVirtualCameraTransitionBase extends CjsModel
{
  @type.objectRef("EveVirtualCamera")
  sourceCamera = null;

  @type.objectRef("EveVirtualCamera")
  targetCamera = null;

  @type.objectRef("EveVirtualCamera")
  transitionCamera = null;

  @carbon.method
  @impl.implemented
  GetCamera()
  {
    return this.IsComplete() ? this.targetCamera : this.transitionCamera;
  }

  @carbon.method
  @impl.implemented
  SetSource(camera)
  {
    this.sourceCamera = camera;
  }

  @carbon.method
  @impl.implemented
  SetTarget(camera)
  {
    this.targetCamera = camera;
  }

  @carbon.method
  @impl.implemented
  Play()
  {
    this.transitionCamera = new EveVirtualCamera();
    this.transitionCamera.SetName("transitionCamera");
    if (this.sourceCamera)
    {
      this.transitionCamera.CopyTransform(this.sourceCamera);
    }
    this.targetCamera?.Reset();
    this.transitionCamera.Play();
  }

  @carbon.method
  @impl.implemented
  Stop()
  {
    this.targetCamera?.Play();
    this.sourceCamera?.Pause();
    this.transitionCamera?.Pause();
  }

  @carbon.method
  @impl.implemented
  Update(deltaTime)
  {
    this.transitionCamera?.Update(deltaTime);
    if (this.IsComplete())
    {
      this.Stop();
    }
  }
}
