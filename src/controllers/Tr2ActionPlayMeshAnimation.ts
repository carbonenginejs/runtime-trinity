// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPlayMeshAnimation.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPlayMeshAnimation.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, schema, type,} from "@carbonenginejs/core-types/schema";
import { DestinationType, PlayAction, StopAction } from "./enums.ts";
import type { DestinationTypeValue, PlayActionValue, StopActionValue,} from "./enums.ts";
import { CallTarget, GetControllerOwner, HasFunction, HasProperty,} from "./CjsControllerActionHelpers.ts";
import { ResolveBindingPath } from "./Tr2BindingPoint.ts";
import type { ITr2ActionController, ITr2ControllerAction,} from "./ITr2ControllerAction.ts";


@type.define({ className: "Tr2ActionPlayMeshAnimation", family: "controllers" })
export class Tr2ActionPlayMeshAnimation extends CjsModel
  implements ITr2ControllerAction {

  @io.notify
  @io.persist
  @type.int32
  @schema.enum("DestinationType")
  destinationType: DestinationTypeValue = DestinationType.OWNER;

  @io.persist
  @type.int32
  @schema.enum("PlayAction")
  playAction: PlayActionValue = PlayAction.ENQUEUE_PLAY;

  @io.persist
  @type.int32
  @schema.enum("StopAction")
  stopAction: StopActionValue = StopAction.ENQUEUE_STOP;

  @io.persist
  @type.string
  mask = "";

  @io.persist
  @type.string
  animation = "";

  @io.persist
  @type.float32
  speed = 1;

  @io.persist
  @type.float32
  delay = 0;

  @io.notify
  @io.persist
  @type.objectRef("IRoot")
  destination: object | null = null;

  @io.notify
  @io.persist
  @type.boolean
  delayBinding = false;

  @io.persist
  @type.int32
  loops = -1;

  @io.notify
  @io.persist
  @type.string
  path = "";

  #controller: ITr2ActionController | null = null;
  #resolvedDestination: object | null = null;

  /**
   * Links the destination when this action does not use delayed binding.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#controller = controller;
    if (!this.delayBinding) this.LinkDestination(controller);
  }

  /**
   * Clears the resolved destination.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.#resolvedDestination = null;
    this.#controller = null;
  }

  /**
   * Starts or queues a mesh animation.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this.#controller as ITr2ActionController,
  ): void {
    const destination = this.GetDestination(controller);
    const animationController = GetAnimationController(destination);
    if (!animationController || !this.animation) return;

    const layerName = this.mask || null;
    if (
      this.mask &&
      HasFunction(animationController, "AddAnimationLayerWithTrackMask")
    ) 
    {
      animationController.AddAnimationLayerWithTrackMask(this.mask, this.mask);
    }
    
    if (HasFunction(animationController, "PlayLayerAnimationByName")) 
    {
      animationController.PlayLayerAnimationByName(
        layerName,
        this.animation,
        this.playAction === PlayAction.PLAY,
        Math.max(this.loops, 0),
        this.delay,
        this.speed,
        false,
      );
      return;
    }

    const methodName = this.playAction === PlayAction.ENQUEUE_PLAY
      ? "EnqueueAnimation"
      : "PlayAnimation";

    if (HasFunction(animationController, methodName)) {
      animationController[methodName](
        this.animation,
        layerName,
        this.speed,
        this.delay,
        this.loops,
      );
      return;
    }

    if (HasFunction(animationController, "Play")) {
      animationController.Play(this.animation);
    }
  }

  /**
   * Stops or queues a stop for the mesh animation.
   */
  @carbon.method
  @impl.adapted
  Stop(controller: ITr2ActionController = this.#controller as ITr2ActionController,  ): void 
  {
    if (this.stopAction === StopAction.NONE) return;

    const destination = this.GetDestination(controller);
    const animationController = GetAnimationController(destination);
    if (!animationController || !this.animation) return;

    const layerName = this.mask || null;
    if (HasFunction(animationController, "GetAnimationLayer")) {
      const layer = animationController.GetAnimationLayer(layerName);
      if (!layer) return;

      if (
        this.stopAction === StopAction.STOP &&
        HasFunction(layer, "ClearAnimations")
      ) 
      {
        layer.ClearAnimations();
        return;
      }

      if (
        this.stopAction === StopAction.ENQUEUE_STOP &&
        HasFunction(layer, "EndAnimation")
      ) 
      {
        layer.EndAnimation();
        return;
      }

      return;
    }

    const methodName = this.stopAction === StopAction.ENQUEUE_STOP
      ? "EnqueueStopAnimation"
      : "StopAnimation";

    if (HasFunction(animationController, methodName)) {
      animationController[methodName](this.animation, layerName);
      return;
    }

    if (HasFunction(animationController, "Stop")) {
      animationController.Stop(this.animation);
    }

  }

  /**
   * Relinks after authored destination changes.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    if (this.#controller && !this.delayBinding) {
      this.LinkDestination(this.#controller);
    }
    return true;
  }

  LinkDestination(
    controller: ITr2ActionController | null = this.#controller,
  ): object | null 
  {
    this.#resolvedDestination = this.ResolveDestination(controller);
    return this.#resolvedDestination;
  }

  @carbon.method
  @impl.adapted
  GetDestination(
    controller: ITr2ActionController | null = this.#controller,
  ): object | null 
  {
    if (this.destinationType === DestinationType.OWNER) {
      return GetControllerOwner(controller);
    }

    if (!this.#resolvedDestination || this.delayBinding) {
      return this.LinkDestination(controller);
    }

    return this.#resolvedDestination;
  }

  @carbon.method
  @impl.adapted
  IsBindingValid(): boolean {
    if (this.destinationType === DestinationType.OWNER) return true;
    return !!this.GetDestination();
  }

  IsDestinationValid(): boolean {
    return this.IsBindingValid();
  }

  ResolveDestination(controller: ITr2ActionController | null): object | null 
  {
    if (this.destination) return this.destination;

    if (this.path && controller) 
    {
      return ResolveBindingPath(
        this.path,
        controller.GetBindingPathRoots?.() ?? [],
      );
    }
  
    return null;
  }
}

function GetAnimationController(destination: unknown): unknown {
  return CallTarget(destination, "GetAnimationController") ??
    (HasProperty(destination, "animationController")
      ? destination.animationController
      : null);
}
