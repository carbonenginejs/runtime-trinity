// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPlaySound.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionPlaySound.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  CjsRequireActionController,
  GetControllerOwner,
  HasFunction,
  HasProperty,
} from "./CjsControllerActionHelpers.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionPlaySound", family: "controllers" })
export class Tr2ActionPlaySound extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.string
  emitter = "";

  @io.persist
  @type.string
  event = "";

  @io.persist
  @type.string
  target = "";

  @io.persist
  @type.boolean
  bypassPrefix = false;

  /**
   * Plays a sound event on the resolved audio emitter.
   */
  @carbon.method
  @impl.adapted
  Start(controller: ITr2ActionController): void {
    const owner = CjsResolveSoundOwner(
      GetControllerOwner(controller),
      this.target,
    );
    const emitter = CjsFindEmitter(owner, this.emitter);
    if (!HasFunction(emitter, "SendEvent")) {
      return;
    }
    emitter.SendEvent(this.event, this.bypassPrefix);
  }

  /**
   * Starts manually with an explicit controller.
   */
  @carbon.method
  @impl.implemented
  StartWithController(controller: ITr2ActionController | null): void {
    this.Start(CjsRequireActionController(
      controller,
      "StartWithController",
    ));
  }
}

function CjsAsObject(value: unknown): object | null {
  return value && typeof value === "object" ? value : null;
}

function CjsFindEmitter(owner: unknown, name: string): unknown {
  return CallTarget(owner, "FindSoundEmitter", name) ?? null;
}

function CjsGetParameterOwner(owner: object, name: string): object | null {
  const parameter = CallTarget(owner, "GetParameterByName", name);
  if (!parameter) {
    return null;
  }
  return CjsAsObject(
    CallTarget(parameter, "GetParameterObject") ??
      CjsGetProperty(parameter, "parameterObject") ??
      CjsGetProperty(parameter, "object"),
  );
}

function CjsGetProperty(target: unknown, propertyName: string): unknown {
  return HasProperty(target, propertyName) ? target[propertyName] : undefined;
}

function CjsResolveSoundOwner(owner: object | null, target: string): object | null {
  if (!owner || !target) {
    return owner;
  }
  if (HasFunction(owner, "GetParameterByName")) {
    return CjsGetParameterOwner(owner, target);
  }
  if (HasFunction(owner, "GetEffectChildByName")) {
    return CjsAsObject(owner.GetEffectChildByName(target));
  }
  return owner;
}
