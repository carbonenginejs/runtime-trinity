// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalarExpression.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalarExpression.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsControllerExpressionProgram } from "../controllers/CjsControllerExpressionProgram.ts";
import {
  type CjsCurveExpressionTermInfo,
  GetCurveExpressionTermInfo,
} from "./CjsCurveExpressionTerms.ts";
import type { ITriScalarFunction } from "./contracts.ts";

@type.define({ className: "Tr2CurveScalarExpression", family: "curves" })
export class Tr2CurveScalarExpression extends CjsModel
  implements ITriScalarFunction {
  @io.persist
  @type.string
  name = "";

  @io.persistOnly
  @type.expression
  expression = "";

  @io.read
  @type.float32
  currentValue = 0;

  #program: CjsControllerExpressionProgram | null = null;

  @io.persist
  @type.unknown
  input1 = 0;

  @io.persist
  @type.unknown
  input2 = 0;

  @io.persist
  @type.unknown
  input3 = 0;

  @io.persist
  @type.unknown
  input4 = 0;

  @io.persist
  @type.list("ITriScalarFunction")
  inputs: ITriScalarFunction[] = [];

  timeScale: number = 1;

  randomConstant: number = Math.random();

  #currentTime = 0;

  /**
   * Compiles the authored expression after load.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.SetExpression(this.expression);
    return true;
  }

  /**
   * Updates the cached scalar value.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.currentValue = this.GetValue(time);
  }

  /**
   * Updates and returns the scalar value.
   */
  @carbon.method
  @impl.implemented
  Update(time: number): number {
    this.currentValue = this.GetValue(time);
    return this.currentValue;
  }

  /**
   * Gets the scalar value at a time.
   */
  @carbon.method
  @impl.implemented
  GetValueAt(time: number): number {
    return this.GetValue(time);
  }

  /**
   * Scales expression time.
   */
  @carbon.method
  @impl.implemented
  ScaleTime(scale: number): void {
    this.timeScale = scale;
  }

  /**
   * Evaluates the expression.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number): number {
    if (!this.expression) {
      return 0;
    }
    const program = this.Compile();
    if (!program.IsValid()) {
      return 0;
    }
    const scaledTime = time / this.timeScale;
    this.#currentTime = scaledTime;
    return Number(program.Evaluate({
      curve: this,
      self: this,
      time: scaledTime,
      variables: {
        time: scaledTime,
        input1: this.input1,
        input2: this.input2,
        input3: this.input3,
        input4: this.input4,
      },
    })) || 0;
  }

  /**
   * Gets the authored expression.
   */
  @carbon.method
  @impl.implemented
  GetExpression(): string {
    return this.expression;
  }

  /**
   * Sets and compiles the authored expression.
   */
  @carbon.method
  @impl.adapted
  SetExpression(expression: string): void {
    this.expression = expression;
    this.#program = CjsControllerExpressionProgram.Compile(expression, {
      emptyValue: 0,
    });
  }

  /**
   * Gets this curve's random constant.
   */
  @carbon.method
  @impl.implemented
  GetRandomConstant(): number {
    return this.randomConstant;
  }

  /**
   * Gets an input curve value at the current or supplied time.
   */
  @carbon.method
  @impl.implemented
  GetInputValue(index: number, time: number = this.#currentTime): number {
    const input = this.inputs[index | 0];
    return input ? input.GetValueAt(time) : 0;
  }

  /**
   * Regenerates the random constant.
   */
  @carbon.method
  @impl.implemented
  ResetRandomConstant(): void {
    this.randomConstant = Math.random();
  }

  /**
   * Gets expression terms exposed by this curve.
   */
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo(): CjsCurveExpressionTermInfo[] {
    return GetCurveExpressionTermInfo();
  }

  /**
   * Evaluates an arbitrary expression with this curve's context.
   */
  @carbon.method
  @impl.adapted
  EvaluateExpression(expression: string): number {
    const program = CjsControllerExpressionProgram.Compile(expression, {
      emptyValue: 0,
    });
    if (!program.IsValid()) {
      return 0;
    }
    return Number(program.Evaluate({ curve: this, self: this })) || 0;
  }

  Compile(): CjsControllerExpressionProgram {
    if (!this.#program || this.#program.source !== this.expression) {
      this.SetExpression(this.expression);
    }
    return this.#program as CjsControllerExpressionProgram;
  }
}
