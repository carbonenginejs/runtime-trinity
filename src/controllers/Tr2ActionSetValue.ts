// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetValue.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetValue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  type CjsActionControllerRuntime,
  type CjsExpressionState,
  CjsAddControllerExpressionTermInfo,
  CompileControllerExpression,
  GetControllerOwner,
} from "./CjsControllerActionHelpers.ts";
import type { CjsControllerExpressionProgram } from "./CjsControllerExpressionProgram.ts";
import { Tr2BindingPoint } from "./Tr2BindingPoint.ts";
import type {
  ITr2ActionController,
  ITr2ControllerAction,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";

@type.define({ className: "Tr2ActionSetValue", family: "controllers" })
export class Tr2ActionSetValue extends CjsModel
  implements ITr2ControllerAction {
  @io.notify
  @io.persist
  @type.string
  value = "";

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

  #bindingPoint: Tr2BindingPoint | null = null;
  #expression: CjsExpressionState = { program: null, source: "" };
  #controller: ITr2ActionController | null = null;

  /**
   * Links the destination when this action does not use delayed binding.
   */
  @carbon.method
  @impl.adapted
  Link(controller: ITr2ActionController): void {
    this.#controller = controller;
    if (!this.HasDelayedBinding()) {
      this.LinkDestination(controller);
    }
    this.CompileExpression();
  }

  /**
   * Unlinks the destination binding.
   */
  @carbon.method
  @impl.implemented
  Unlink(): void {
    this.#bindingPoint?.Unlink();
    this.#expression = { program: null, source: "" };
    this.#controller = null;
  }

  /**
   * Evaluates the value expression and writes it to the destination binding.
   */
  @carbon.method
  @impl.adapted
  Start(
    controller: ITr2ActionController = this.#controller as ITr2ActionController,
  ): void {
    if (!controller) {
      return;
    }
    const owner = GetControllerOwner(controller);
    this.#controller = controller;

    if (this.HasDelayedBinding()) {
      this.LinkDestination(controller, owner);
    }
    if (!this.IsBindingValid()) {
      return;
    }

    const value = this.#evaluateValue(controller, owner);
    if (value === null) {
      return;
    }
    this.GetBindingPoint().SetValue(
      value,
      controller,
      owner,
    );
  }

  /**
   * Relinks or recompiles when authored fields change.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.#expression.program = null;
    if (this.#controller && !this.HasDelayedBinding()) {
      this.LinkDestination(this.#controller);
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
   * Gets the bound destination object.
   */
  @carbon.method
  @impl.implemented
  GetDestination(
    controller: ITr2ActionController | null = this.#controller,
    owner: object | null = GetControllerOwner(controller),
  ): object | null {
    return this.GetBindingPoint().GetBoundObject(controller, owner);
  }

  /**
   * Gets expression term metadata from the linked controller.
   */
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo(): Tr2ExpressionTermInfoLike[] {
    const result: Tr2ExpressionTermInfoLike[] = [];
    CjsAddControllerExpressionTermInfo(result);
    this.#controller?.GetExpressionTermInfo?.(result);
    return result;
  }

  /**
   * Evaluates an expression against this action's controller context.
   */
  @carbon.method
  @impl.adapted
  EvaluateExpression(expression: string): number {
    const state: CjsExpressionState = { program: null, source: "" };
    const program = CompileControllerExpression(state, expression, 0);
    if (!program.IsValid()) {
      return 0;
    }
    const controller = this.#controller;
    const owner = GetControllerOwner(controller);
    const runtime = controller as CjsActionControllerRuntime | null;
    return Number(program.Evaluate(
      runtime?.GetExpressionContext?.(owner, null, { action: this }) ??
        { controller: controller ?? undefined, owner, action: this },
    )) || 0;
  }

  CompileExpression(): CjsControllerExpressionProgram {
    return CompileControllerExpression(this.#expression, this.value, 0);
  }

  GetValue(
    controller: ITr2ActionController | null = this.#controller,
    owner: object | null = GetControllerOwner(controller),
  ): number {
    return this.#evaluateValue(controller, owner) ?? 0;
  }

  #evaluateValue(
    controller: ITr2ActionController | null,
    owner: object | null,
  ): number | null {
    const program = this.CompileExpression();
    if (!program.IsValid()) {
      return null;
    }
    const runtime = controller as CjsActionControllerRuntime | null;
    const value = Number(program.Evaluate(
      runtime?.GetExpressionContext?.(owner, null, { action: this }) ??
        { controller: controller ?? undefined, owner, action: this },
    ));
    return Number.isFinite(value) ? value : null;
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
    controller: ITr2ActionController | null = this.#controller,
    owner: object | null = GetControllerOwner(controller),
  ): boolean {
    return this.GetBindingPoint().Link(controller, owner);
  }

  HasDelayedBinding(): boolean {
    return this.delayBinding && !!this.path;
  }
}
