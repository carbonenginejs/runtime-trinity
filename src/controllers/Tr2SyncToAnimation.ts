// Source: E:\carbonengine\trinity\trinity\Controllers\Finalizers\Tr2SyncToAnimation.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Finalizers\Tr2SyncToAnimation.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITr2ActionController } from "./ITr2ControllerAction.ts";
import type { ITr2StateMachineStateFinalizer } from "./ITr2StateMachineStateFinalizer.ts";

@type.define({ className: "Tr2SyncToAnimation", family: "controllers" })
export class Tr2SyncToAnimation extends CjsModel
  implements ITr2StateMachineStateFinalizer {
  @io.persist
  @type.string
  mask = "";

  /**
   * Carbon allows transition once the matching animation layer has finished.
   */
  @carbon.method
  @impl.adapted
  CanTransition(controller: ITr2ActionController): boolean {
    const owner = controller.GetOwner?.();
    const animationController = GetAnimationController(owner);
    if (!animationController) {
      return true;
    }

    const layer = Call(
      animationController,
      "GetAnimationLayer",
      this.mask || null,
    );
    if (!layer) {
      return true;
    }

    const remaining = Number(Call(layer, "GetAnimationRemainingTime") ?? 0);
    return !Number.isFinite(remaining) || remaining <= 0;
  }
}

function GetAnimationController(owner: unknown): unknown {
  return Call(owner, "GetAnimationController") ??
    (owner && typeof owner === "object" && "animationController" in owner
      ? owner.animationController
      : null);
}

function Call(value: unknown, methodName: string, ...args: unknown[]): unknown {
  if (
    value &&
    typeof value === "object" &&
    methodName in value &&
    typeof value[methodName as keyof typeof value] === "function"
  ) {
    return (value[methodName as keyof typeof value] as (
      ...inner: unknown[]
    ) => unknown)(
      ...args,
    );
  }
  return undefined;
}
