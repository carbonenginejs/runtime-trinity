// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionAnimateValue.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionAnimateValue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CjsAddControllerExpressionTermInfo,
  CompileControllerExpression,
  CreateActionRuntimeState,
  GetControllerOwner,
  GetControllerTime,
  GetCurveValue,
  MakeActionExpressionContext,
} from "./CjsControllerActionHelpers.ts";
import type { CjsActionRuntimeState } from "./CjsControllerActionHelpers.ts";
import type { CjsControllerExpressionProgram } from "./CjsControllerExpressionProgram.ts";
import { Tr2BindingPoint } from "./Tr2BindingPoint.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
  ITr2Updateable,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionAnimateValue", family: "controllers" })
export class Tr2ActionAnimateValue extends CjsModel
  implements ITr2ControllerAction {
  @io.persist
  @type.objectRef("ITriScalarFunction")
  curve: unknown = null;

  @io.notify
  @io.persist
  @type.string
  attribute = "";

  @io.notify
  @io.persist
  @type.objectRef("IRoot")
  destination: object | null = null;

  @io.notify
  @io.persist
  @type.boolean
  delayBinding = false;

  @io.notify
  @io.persist
  @type.string
  path = "";

  @io.notify
  @io.persist
  @type.string
  value = "Curve(StateTime())";

  #bindingPoint: Tr2BindingPoint | null = null;
  #runtime: CjsActionRuntimeState = CreateActionRuntimeState();

  /**
   * Links the destination and compiles the value expression.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#runtime.controller = controller;
    if (!this.HasDelayedBinding()) {
      this.LinkDestination(controller);
    }
    this.CompileExpression();
  }

  /**
   * Unlinks the destination and update registration.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.#bindingPoint?.Unlink();
    this.#runtime = CreateActionRuntimeState();
  }

  /**
   * Starts updating the destination value.
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
    const owner = GetControllerOwner(controller);
    this.#runtime.controller = controller;

    if (this.HasDelayedBinding() || !this.IsBindingValid()) {
      this.LinkDestination(controller, owner);
    }
    if (!this.IsBindingValid()) {
      return;
    }

    this.#runtime.startTime = GetControllerTime(controller);
    this.#runtime.lastTime = this.#runtime.startTime;
    controller.RegisterUpdateable?.(this as unknown as ITr2Updateable);
  }

  /**
   * Stops updating the destination value.
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
   * Evaluates and writes the animated value.
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
    if (!program.IsValid() || !this.IsBindingValid()) {
      return;
    }

    this.GetBindingPoint().SetValue(
      program.Evaluate(
        MakeActionExpressionContext(
          controller,
          GetControllerOwner(controller),
          this.#runtime,
          {
            action: this,
          },
        ),
      ),
      controller,
      GetControllerOwner(controller),
    );
  }

  /**
   * Handles authored field changes.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.#runtime.program = null;
    if (this.#runtime.controller && !this.HasDelayedBinding()) {
      this.LinkDestination(this.#runtime.controller);
    }
    return true;
  }

  /**
   * Checks whether the binding currently resolves.
   */
  @carbon.method
  @impl.implemented
  IsBindingValid(): boolean {
    return !!this.#bindingPoint?.IsValid();
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
   * Gets a curve value for the expression helper.
   */
  @carbon.method
  @impl.adapted
  GetCurveValue(time: number): number {
    return GetCurveValue(this.curve, time);
  }

  /**
   * Gets the bound destination object.
   */
  @carbon.method
  @impl.implemented
  GetDestination(
    controller: ITr2ActionController | null = this.#runtime.controller,
    owner: object | null = GetControllerOwner(controller),
  ): object | null {
    return this.GetBindingPoint().GetBoundObject(controller, owner);
  }

  /**
   * Gets expression term metadata.
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
   * Evaluates an arbitrary expression.
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

  GetBindingPoint(): Tr2BindingPoint {
    if (!this.#bindingPoint) {
      this.#bindingPoint = new Tr2BindingPoint();
    }
    this.#bindingPoint.path = this.path;
    this.#bindingPoint.object = this.destination;
    this.#bindingPoint.attribute = this.attribute;
    return this.#bindingPoint;
  }

  LinkDestination(
    controller: ITr2ActionController | null = this.#runtime.controller,
    owner: object | null = GetControllerOwner(controller),
  ): boolean {
    return this.GetBindingPoint().Link(controller, owner);
  }

  HasDelayedBinding(): boolean {
    return this.delayBinding && !!this.path;
  }
}
