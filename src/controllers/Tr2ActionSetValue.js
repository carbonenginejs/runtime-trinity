// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetValue.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Actions\Tr2ActionSetValue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsControllerExpressionProgram } from "./CjsControllerExpressionProgram.js";
import { ITr2ControllerAction } from "./ITr2ControllerAction.js";
import { Tr2BindingPoint } from "./Tr2BindingPoint.js";


@type.define({
  className: "Tr2ActionSetValue",
  family: "controllers"
})
export class Tr2ActionSetValue extends CjsModel
{
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
  destination = null;

  @io.notify
  @io.persist
  @type.boolean
  delayBinding = false;

  @io.notify
  @io.persist
  @type.string
  path = "";

  #bindingPoint = null;

  #expression = {
    program: null,
    source: ""
  };
  #controller = null;

  /**
   * Links the destination when this action does not use delayed binding.
   */
  @carbon.method
  @impl.adapted
  Link(controller)
  {
    this.#controller = controller;
    if (!this.HasDelayedBinding())
    {
      this.LinkDestination(controller);
    }
    this.CompileExpression();
  }

  /**
   * Unlinks the destination binding.
   */
  @carbon.method
  @impl.implemented
  Unlink()
  {
    this.#bindingPoint?.Unlink();
    this.#expression = {
      program: null,
      source: ""
    };
    this.#controller = null;
  }

  /**
   * Evaluates the value expression and writes it to the destination binding.
   */
  @carbon.method
  @impl.adapted
  Start(controller = this.#controller)
  {
    if (!controller)
    {
      return;
    }
    const owner = ITr2ControllerAction.getOwner(controller);
    this.#controller = controller;
    if (this.HasDelayedBinding())
    {
      this.LinkDestination(controller, owner);
    }
    if (!this.IsBindingValid())
    {
      return;
    }
    const value = this.#evaluateValue(controller, owner);
    if (value === null)
    {
      return;
    }
    this.GetBindingPoint().SetValue(value, controller, owner);
  }

  /**
   * Relinks or recompiles when authored fields change.
   */
  @carbon.method
  @impl.adapted
  OnModified(_options = {})
  {
    this.#expression.program = null;
    if (this.#controller && !this.HasDelayedBinding())
    {
      this.LinkDestination(this.#controller);
    }
    return true;
  }

  /**
   * Checks whether the binding currently resolves.
   */
  @carbon.method
  @impl.implemented
  IsBindingValid()
  {
    return !!this.#bindingPoint?.IsValid();
  }

  /**
   * Checks whether the value expression compiles.
   */
  @carbon.method
  @impl.implemented
  IsExpressionValid()
  {
    return this.CompileExpression().IsValid();
  }

  /**
   * Gets the bound destination object.
   */
  @carbon.method
  @impl.implemented
  GetDestination(controller = this.#controller, owner = ITr2ControllerAction.getOwner(controller))
  {
    return this.GetBindingPoint().GetBoundObject(controller, owner);
  }

  /**
   * Gets expression term metadata from the linked controller.
   */
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo()
  {
    const result = [];
    CjsControllerExpressionProgram.addControllerTermInfo(result);
    this.#controller?.GetExpressionTermInfo?.(result);
    return result;
  }

  /**
   * Evaluates an expression against this action's controller context.
   */
  @carbon.method
  @impl.adapted
  EvaluateExpression(expression)
  {
    const state = {
      program: null,
      source: ""
    };
    const program = CjsControllerExpressionProgram.compileCached(state, expression, 0);
    if (!program.IsValid())
    {
      return 0;
    }
    const controller = this.#controller;
    const owner = ITr2ControllerAction.getOwner(controller);
    const runtime = controller;
    return Number(program.Evaluate(runtime?.GetExpressionContext?.(owner, null, {
      action: this
    }) ?? {
      controller: controller ?? undefined,
      owner,
      action: this
    })) || 0;
  }
  CompileExpression()
  {
    return CjsControllerExpressionProgram.compileCached(this.#expression, this.value, 0);
  }
  GetValue(controller = this.#controller, owner = ITr2ControllerAction.getOwner(controller))
  {
    return this.#evaluateValue(controller, owner) ?? 0;
  }
  #evaluateValue(controller, owner)
  {
    const program = this.CompileExpression();
    if (!program.IsValid())
    {
      return null;
    }
    const runtime = controller;
    const value = Number(program.Evaluate(runtime?.GetExpressionContext?.(owner, null, {
      action: this
    }) ?? {
      controller: controller ?? undefined,
      owner,
      action: this
    }));
    return Number.isFinite(value) ? value : null;
  }
  GetBindingPoint()
  {
    if (!this.#bindingPoint)
    {
      this.#bindingPoint = new Tr2BindingPoint();
    }
    this.#bindingPoint.path = this.path;
    this.#bindingPoint.object = this.destination;
    this.#bindingPoint.attribute = this.attribute;
    return this.#bindingPoint;
  }
  LinkDestination(controller = this.#controller, owner = ITr2ControllerAction.getOwner(controller))
  {
    return this.GetBindingPoint().Link(controller, owner);
  }
  HasDelayedBinding()
  {
    return this.delayBinding && !!this.path;
  }
}
