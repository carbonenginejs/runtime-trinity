// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionAnimateCurveSet.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionAnimateCurveSet.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CjsAddControllerExpressionTermInfo,
  CompileControllerExpression,
  CreateActionRuntimeState,
  GetControllerOwner,
  GetControllerTime,
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

@type.define({ className: "Tr2ActionAnimateCurveSet", family: "controllers" })
export class Tr2ActionAnimateCurveSet extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.objectRef("TriCurveSet")
  curveSet: { ApplyTime?: (time: number) => void } | null = null;

  @io.notify
  @io.persist
  @type.string
  value = "StateTime()";

  #runtime: CjsActionRuntimeState = CreateActionRuntimeState();

  /**
   * Links this action to a controller.
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
   * Starts timeline updates for this action.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this.#runtime
      .controller as ITr2ActionController,
  ): void {
    if (!controller || !this.curveSet) {
      return;
    }
    this.#runtime.controller = controller;
    this.#runtime.startTime = GetControllerTime(controller);
    this.#runtime.lastTime = this.#runtime.startTime;
    controller.RegisterUpdateable?.(this as unknown as ITr2Updateable);
  }

  /**
   * Stops timeline updates for this action.
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
   * Rebases stored simulation time.
   */
  @carbon.method
  @impl.implemented
  RebaseSimTime(diff: number): void {
    this.#runtime.startTime += diff;
    this.#runtime.lastTime += diff;
  }

  /**
   * Applies the evaluated time to the curve set.
   */
  @carbon.method
  @impl.adapted
  Update(_realTime: number, simTime: number): void {
    const controller = this.#runtime.controller;
    if (!controller || !this.curveSet) {
      return;
    }
    this.#runtime.lastTime = simTime;
    const program = this.CompileExpression();
    if (!program.IsValid()) {
      return;
    }
    const value = Number(program.Evaluate(
      MakeActionExpressionContext(
        controller,
        GetControllerOwner(controller),
        this.#runtime,
        {
          action: this,
        },
      ),
    )) || 0;
    this.curveSet.ApplyTime?.(value);
  }

  /**
   * Recompiles when the expression changes.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.#runtime.program = null;
    return true;
  }

  /**
   * Checks whether the value expression compiles.
   */
  @carbon.method
  @impl.implemented
  IsExpressionValid(): boolean {
    return this.CompileExpression().IsValid();
  }

  /**
   * Gets expression term metadata.
   */
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo(): Tr2ExpressionTermInfoLike[] {
    const result: Tr2ExpressionTermInfoLike[] = [];
    CjsAddControllerExpressionTermInfo(result);
    this.#runtime.controller?.GetExpressionTermInfo?.(result);
    return result;
  }

  /**
   * Evaluates an arbitrary expression.
   */
  @carbon.method
  @impl.adapted
  EvaluateExpression(expression: string): number {
    const state = { program: null, source: "" };
    const program = CompileControllerExpression(state, expression, 0);
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
    return CompileControllerExpression(this.#runtime, this.value, 0);
  }
}
