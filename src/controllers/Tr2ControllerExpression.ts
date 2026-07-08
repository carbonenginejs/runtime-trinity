// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerExpression.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerExpression.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, type } from "@carbonenginejs/core-types/schema";
import type {
  CjsControllerExpressionContext,
  CjsControllerExpressionFunction,
} from "./CjsControllerExpressionProgram.ts";
import { CjsControllerExpressionProgram } from "./CjsControllerExpressionProgram.ts";
import type { ITr2StateMachine } from "./contracts.ts";
import type {
  ITr2ActionController,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";
import {
  CjsAddControllerExpressionTermInfo,
  type CjsActionControllerRuntime,
} from "./CjsControllerActionHelpers.ts";

@type.define({ className: "Tr2ControllerExpression", family: "controllers" })
export class Tr2ControllerExpression extends CjsModel {
  @type.rawStruct("CcpParser::Program")
  program: CjsControllerExpressionProgram | null = null;

  @type.objectRef("Tr2StateMachine")
  stateMachine: ITr2StateMachine | null = null;

  @type.objectRef("ITr2ActionController")
  controller: ITr2ActionController | null = null;

  @type.uint64
  variableMask: bigint = 0n;

  @type.unknown
  OWNER_BUFFER_INDEX = 1;

  @type.unknown
  STATE_MACHINE_BUFFER_INDEX = 2;

  @type.unknown
  EXTRA_BUFFER_INDEX = 3;

  #source = "";

  /**
   * Compiles an expression against a state machine or controller.
   */
  @carbon.method
  @impl.adapted
  SetExpr(
    expression: string,
    source: ITr2StateMachine | ITr2ActionController | null,
    functions?: Record<string, CjsControllerExpressionFunction>,
  ): string {
    this.Clear();
    this.#source = expression;

    if (IsStateMachine(source)) {
      this.stateMachine = source;
      this.controller = source.GetController?.() ?? null;
    } else {
      this.controller = source;
      this.stateMachine = null;
    }

    this.program = CjsControllerExpressionProgram.Compile(expression, {
      emptyValue: 0,
      functions,
    });
    this.variableMask = GetVariableMask(this.program, this.controller);
    return this.program.IsValid() ? "" : this.program.error;
  }

  /**
   * Evaluates the compiled expression.
   */
  @carbon.method
  @impl.adapted
  Eval(extra: Record<string, unknown> | null = null): [boolean, number] {
    if (!this.program || !this.controller) {
      return [false, 0];
    }

    try {
      const owner = this.controller.GetOwner?.() ?? null;
      const runtime = this.controller as CjsActionControllerRuntime;
      const context = runtime.GetExpressionContext
        ? runtime.GetExpressionContext(owner, this.stateMachine, extra ?? {})
        : {
          ...(extra ?? {}),
          controller: this.controller,
          owner,
          stateMachine: this.stateMachine,
        } as CjsControllerExpressionContext;
      return [true, Number(this.program.Evaluate(context)) || 0];
    } catch (_err) {
      return [false, 0];
    }
  }

  /**
   * Clears the compiled expression.
   */
  @carbon.method
  @impl.implemented
  Clear(): void {
    this.program = null;
    this.stateMachine = null;
    this.controller = null;
    this.variableMask = 0n;
    this.#source = "";
  }

  /**
   * Checks whether the expression compiled successfully.
   */
  @carbon.method
  @impl.implemented
  IsExpressionValid(): boolean {
    return !!this.program?.IsValid();
  }

  /**
   * Gets the variable dirty mask referenced by this expression.
   */
  @carbon.method
  @impl.adapted
  GetVariableMask(): bigint {
    return this.variableMask;
  }

  /**
   * Gets expression term metadata from the linked controller.
   */
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo(
    out: Tr2ExpressionTermInfoLike[] = [],
  ): Tr2ExpressionTermInfoLike[] {
    CjsAddControllerExpressionTermInfo(out);
    return out;
  }
}

function GetVariableMask(
  program: CjsControllerExpressionProgram,
  controller: ITr2ActionController | null,
): bigint {
  const view = controller?.GetVariableView?.();
  if (!Array.isArray(view)) {
    return program.HasNonPureFunctions() ? 0n : -1n;
  }

  let mask = 0n;
  for (const name of program.GetVariableNames()) {
    const index = view.findIndex((entry) =>
      !!entry && typeof entry === "object" && "name" in entry &&
      entry.name === name
    );
    if (index < 0 || index >= 64) {
      return 0n;
    }
    mask |= 1n << BigInt(index);
  }
  return program.HasNonPureFunctions() ? 0n : mask;
}

function IsStateMachine(value: unknown): value is ITr2StateMachine {
  return !!value && typeof value === "object" && "GetController" in value;
}
