import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { CjsControllerExpressionProgram } from './CjsControllerExpressionProgram.js';
import { ITr2ControllerAction } from './ITr2ControllerAction.js';
import { Tr2BindingPoint as _Tr2BindingPoint } from './Tr2BindingPoint.js';

let _initProto, _initClass, _init_value, _init_extra_value, _init_attribute, _init_extra_attribute, _init_destination, _init_extra_destination, _init_delayBinding, _init_extra_delayBinding, _init_path, _init_extra_path;
let _Tr2ActionSetValue;
class Tr2ActionSetValue extends CjsModel {
  static {
    ({
      e: [_init_value, _init_extra_value, _init_attribute, _init_extra_attribute, _init_destination, _init_extra_destination, _init_delayBinding, _init_extra_delayBinding, _init_path, _init_extra_path, _initProto],
      c: [_Tr2ActionSetValue, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ActionSetValue",
      family: "controllers"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "value"], [[io, io.notify, io, io.persist, type, type.string], 16, "attribute"], [[io, io.notify, io, io.persist, void 0, type.objectRef("IRoot")], 16, "destination"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "delayBinding"], [[io, io.notify, io, io.persist, type, type.string], 16, "path"], [[carbon, carbon.method, impl, impl.adapted], 18, "Link"], [[carbon, carbon.method, impl, impl.implemented], 18, "Unlink"], [[carbon, carbon.method, impl, impl.adapted], 18, "Start"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsBindingValid"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsExpressionValid"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetDestination"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetExpressionTermInfo"], [[carbon, carbon.method, impl, impl.adapted], 18, "EvaluateExpression"]], 0, void 0, CjsModel));
  }
  value = (_initProto(this), _init_value(this, ""));
  attribute = (_init_extra_value(this), _init_attribute(this, ""));
  destination = (_init_extra_attribute(this), _init_destination(this, null));
  delayBinding = (_init_extra_destination(this), _init_delayBinding(this, false));
  path = (_init_extra_delayBinding(this), _init_path(this, ""));
  #bindingPoint = (_init_extra_path(this), null);
  #expression = {
    program: null,
    source: ""
  };
  #controller = null;

  /**
   * Links the destination when this action does not use delayed binding.
   */
  Link(controller) {
    this.#controller = controller;
    if (!this.HasDelayedBinding()) {
      this.LinkDestination(controller);
    }
    this.CompileExpression();
  }

  /**
   * Unlinks the destination binding.
   */
  Unlink() {
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
  Start(controller = this.#controller) {
    if (!controller) {
      return;
    }
    const owner = ITr2ControllerAction.getOwner(controller);
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
    this.GetBindingPoint().SetValue(value, controller, owner);
  }

  /**
   * Relinks or recompiles when authored fields change.
   */
  OnModified(_options = {}) {
    this.#expression.program = null;
    if (this.#controller && !this.HasDelayedBinding()) {
      this.LinkDestination(this.#controller);
    }
    return true;
  }

  /**
   * Checks whether the binding currently resolves.
   */
  IsBindingValid() {
    return !!this.#bindingPoint?.IsValid();
  }

  /**
   * Checks whether the value expression compiles.
   */
  IsExpressionValid() {
    return this.CompileExpression().IsValid();
  }

  /**
   * Gets the bound destination object.
   */
  GetDestination(controller = this.#controller, owner = ITr2ControllerAction.getOwner(controller)) {
    return this.GetBindingPoint().GetBoundObject(controller, owner);
  }

  /**
   * Gets expression term metadata from the linked controller.
   */
  GetExpressionTermInfo() {
    const result = [];
    CjsControllerExpressionProgram.addControllerTermInfo(result);
    this.#controller?.GetExpressionTermInfo?.(result);
    return result;
  }

  /**
   * Evaluates an expression against this action's controller context.
   */
  EvaluateExpression(expression) {
    const state = {
      program: null,
      source: ""
    };
    const program = CjsControllerExpressionProgram.compileCached(state, expression, 0);
    if (!program.IsValid()) {
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
  CompileExpression() {
    return CjsControllerExpressionProgram.compileCached(this.#expression, this.value, 0);
  }
  GetValue(controller = this.#controller, owner = ITr2ControllerAction.getOwner(controller)) {
    return this.#evaluateValue(controller, owner) ?? 0;
  }
  #evaluateValue(controller, owner) {
    const program = this.CompileExpression();
    if (!program.IsValid()) {
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
  GetBindingPoint() {
    if (!this.#bindingPoint) {
      this.#bindingPoint = new _Tr2BindingPoint();
    }
    this.#bindingPoint.path = this.path;
    this.#bindingPoint.object = this.destination;
    this.#bindingPoint.attribute = this.attribute;
    return this.#bindingPoint;
  }
  LinkDestination(controller = this.#controller, owner = ITr2ControllerAction.getOwner(controller)) {
    return this.GetBindingPoint().Link(controller, owner);
  }
  HasDelayedBinding() {
    return this.delayBinding && !!this.path;
  }
  static {
    _initClass();
  }
}

export { _Tr2ActionSetValue as Tr2ActionSetValue };
//# sourceMappingURL=Tr2ActionSetValue.js.map
