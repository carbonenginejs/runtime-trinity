// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraSystem.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraSystem.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveVirtualCamera } from "./EveVirtualCamera.js";
import { EveVirtualCameraTransitionCut } from "./transition/EveVirtualCameraTransitionCut.js";
import { EveVirtualCameraTransitionLerp } from "./transition/EveVirtualCameraTransitionLerp.js";


@type.define({
  className: "EveVirtualCameraSystem",
  family: "eve/virtualCamera"
})
export class EveVirtualCameraSystem extends CjsModel
{
  @io.persist
  @type.objectRef("EveVirtualCamera")
  externalCamera = null;

  @io.persist
  @type.list("EveVirtualCamera")
  cameras = [];

  @io.persist
  @type.objectRef("EveVirtualCamera")
  mainCamera = null;

  @io.read
  @type.objectRef("EveVirtualCameraTransitionBase")
  transition = null;

  #lastUpdate = 0;

  constructor()
  {
    super();
    this.externalCamera = new EveVirtualCamera();
    this.externalCamera.SetName("externalCamera");
    this.externalCamera.SetAnimationTimelineLength(0);
    this.mainCamera = this.externalCamera;
  }

  @carbon.method
  @impl.implemented
  Initialize()
  {
    return true;
  }

  @carbon.method
  @impl.implemented
  GetCurrentCamera()
  {
    return this.transition ? this.transition.GetCamera() : this.GetMainCamera();
  }

  @carbon.method
  @impl.implemented
  AddCamera(camera)
  {
    if (camera === this.externalCamera || this.cameras.includes(camera))
    {
      return false;
    }
    this.cameras.push(camera);
    return true;
  }

  @carbon.method
  @impl.implemented
  GetMainCamera()
  {
    return this.mainCamera;
  }

  @carbon.method
  @impl.implemented
  GetCameraByName(name)
  {
    if (name === this.externalCamera?.GetName())
    {
      return this.externalCamera;
    }
    return this.cameras.find(camera => camera?.GetName?.() === name) ?? null;
  }

  @carbon.method
  @impl.implemented
  CutToCamera(camera)
  {
    if (camera && camera !== this.GetMainCamera())
    {
      this.#setMainCameraWithTransition(camera, new EveVirtualCameraTransitionCut());
    }
  }

  @carbon.method
  @impl.implemented
  LerpToCamera(camera, transitionTime = 1)
  {
    if (camera && camera !== this.GetMainCamera())
    {
      const transition = new EveVirtualCameraTransitionLerp();
      transition.SetTransitionTime(transitionTime);
      this.#setMainCameraWithTransition(camera, transition);
    }
  }

  @carbon.method
  @impl.implemented
  IsExternallyControlled()
  {
    return this.GetCurrentCamera() === this.externalCamera;
  }

  @carbon.method
  @impl.adapted
  Update(simTime)
  {
    const time = Number(simTime) || 0;
    if (this.#lastUpdate === 0)
    {
      this.#lastUpdate = time;
    }
    const deltaTime = time - this.#lastUpdate;
    this.#lastUpdate = time;
    for (const camera of this.cameras)
    {
      camera?.Update?.(deltaTime);
    }
    this.externalCamera?.Update?.(deltaTime);
    if (this.transition)
    {
      this.transition.Update(deltaTime);
      if (this.transition.IsComplete())
      {
        this.transition = null;
      }
    }
  }

  #setMainCamera(camera)
  {
    this.transition = null;
    this.mainCamera = camera;
    this.AddCamera(camera);
  }

  #setMainCameraWithTransition(camera, transition)
  {
    const current = this.GetMainCamera();
    this.#setMainCamera(camera);
    transition.SetSource(current);
    transition.SetTarget(this.GetMainCamera());
    transition.Play();
    this.transition = transition;
  }
}
