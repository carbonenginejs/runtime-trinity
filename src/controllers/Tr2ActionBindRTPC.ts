// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionBindRTPC.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionBindRTPC.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CallTarget,
  CjsAddControllerExpressionTermInfo,
  CjsRequireActionController,
  CompileControllerExpression,
  CreateActionRuntimeState,
  GetControllerOwner,
  GetControllerTime,
  GetCurveValue,
  HasFunction,
  MakeActionExpressionContext,
} from "./CjsControllerActionHelpers.ts";
import type { CjsActionRuntimeState } from "./CjsControllerActionHelpers.ts";
import type { CjsControllerExpressionProgram } from "./CjsControllerExpressionProgram.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
  ITr2Updateable,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionBindRTPC", family: "controllers" })
export class Tr2ActionBindRTPC extends CjsModel
  implements ITr2ControllerAction {
  @io.notify
  @io.persist
  @type.string
  value = "";

  @io.persist
  @type.string
  emitter = "";

  @io.persist
  @type.string
  rtpcName = "";

  @io.persist
  @type.objectRef("ITriScalarFunction")
  curve: unknown = null;

  #runtime: CjsActionRuntimeState = CreateActionRuntimeState();
  #emitter: unknown = null;

  /**
   * Links and compiles the RTPC value expression.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#runtime.controller = controller;
    this.CompileExpression();
  }

  /**
   * Clears runtime expression state.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.#runtime = CreateActionRuntimeState();
  }

  /**
   * Starts RTPC updates.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this.#runtime
      .controller as ITr2ActionController,
  ): void {
    if (!controller) {
      return;
    }
    this.#runtime.controller = controller;
    this.#runtime.startTime = GetControllerTime(controller);
    this.#runtime.lastTime = this.#runtime.startTime;
    this.#emitter = FindEmitter(GetControllerOwner(controller), this.emitter);
    controller.RegisterUpdateable?.(this as unknown as ITr2Updateable);
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

  /**
   * Stops RTPC updates.
   */
  @carbon.method
  @impl.implemented
  Stop(
    controller: ITr2ActionController = this.#runtime
      .controller as ITr2ActionController,
  ): void {
    controller?.UnRegisterUpdateable?.(this as unknown as ITr2Updateable);
  }

  /**
   * Stops manually with an explicit controller.
   */
  @carbon.method
  @impl.implemented
  StopWithController(controller: ITr2ActionController | null): void {
    this.Stop(CjsRequireActionController(
      controller,
      "StopWithController",
    ));
  }

  /**
   * Updates the target RTPC value.
   */
  @carbon.method
  @impl.adapted
  Update(_realTime: number, simTime: number): void {
    const controller = this.#runtime.controller;
    if (!controller) {
      return;
    }
    this.#runtime.lastTime = simTime;
    const program = this.CompileExpression();
    if (!program.IsValid()) {
      return;
    }
    const value = Number(program.Evaluate(
      MakeActionExpressionContext(controller, GetControllerOwner(controller), this.#runtime, {
        action: this,
      }),
    )) || 0;
    if (HasFunction(this.#emitter, "SetRTPC")) {
      this.#emitter.SetRTPC(this.rtpcName, value);
    }
  }

  /**
   * Recompiles when authored fields change.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.#runtime.program = null;
    return true;
  }

  /**
   * Checks whether the expression compiles.
   */
  @carbon.method
  @impl.implemented
  IsExpressionValid(): boolean {
    return this.CompileExpression().IsValid();
  }

  /**
   * Gets a curve value for expression helpers.
   */
  @carbon.method
  @impl.adapted
  GetCurveValue(time: number): number {
    return GetCurveValue(this.curve, time);
  }

  /**
   * Gets expression term metadata from the linked controller.
   */
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo(): Tr2ExpressionTermInfoLike[] {
    const result: Tr2ExpressionTermInfoLike[] = [];
    CjsAddControllerExpressionTermInfo(result, { curve: true });
    this.#runtime.controller?.GetExpressionTermInfo?.(result);
    return result;
  }

  /**
   * Evaluates an expression against this action's controller context.
   */
  @carbon.method
  @impl.adapted
  EvaluateExpression(expression: string): number {
    const state = { program: null, source: "" };
    const program = CompileControllerExpression(state, expression, 0, {
      Curve: (_ctx, time) => this.GetCurveValue(Number(time)),
    });
    if (!program.IsValid()) {
      return 0;
    }
    const controller = this.#runtime.controller;
    return Number(program.Evaluate(
      MakeActionExpressionContext(
        controller,
        GetControllerOwner(controller),
        this.#runtime,
        { action: this },
      ),
    )) || 0;
  }

  CompileExpression(): CjsControllerExpressionProgram {
    return CompileControllerExpression(this.#runtime, this.value, 0, {
      Curve: (_ctx, time) => this.GetCurveValue(Number(time)),
    });
  }
}

function FindEmitter(owner: unknown, name: string): unknown {
  return CallTarget(owner, "FindSoundEmitter", name) ?? null;
}
