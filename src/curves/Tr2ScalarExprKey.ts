// Source: E:\carbonengine\trinity\trinity\Curves\Tr2ScalarExprKeyCurve.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2ScalarExprKeyCurve.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { noise } from "@carbonenginejs/core-math/noise";
import {
  CjsControllerExpressionProgram,
  type CjsControllerExpressionFunction,
} from "../controllers/CjsControllerExpressionProgram.ts";
import { Tr2CurveInterpolation } from "./enums.ts";
import type { Tr2CurveInterpolationValue } from "./enums.ts";

@type.define({ className: "Tr2ScalarExprKey", family: "curves" })
export class Tr2ScalarExprKey extends CjsModel {
  @io.persist
  @type.unknown
  interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.LINEAR;

  @io.notify
  @io.persist
  @type.float32
  input1 = 0;

  @io.notify
  @io.persist
  @type.float32
  input2 = 0;

  @io.notify
  @io.persist
  @type.float32
  input3 = 0;

  @io.notify
  @io.persist
  @type.float32
  input4 = 0;

  @io.notify
  @io.persist
  @type.unknown
  time = 0;

  @io.notify
  @io.persist
  @type.unknown
  value = 0;

  @io.notify
  @io.persist
  @type.float32
  left = 0;

  @io.notify
  @io.persist
  @type.expression
  leftTangentExpression = "";

  @io.notify
  @io.persist
  @type.expression
  rightTangentExpression = "";

  @io.notify
  @io.persist
  @type.expression
  timeExpression = "";

  @io.notify
  @io.persist
  @type.expression
  valueExpression = "";

  @io.notify
  @io.persist
  @type.float32
  randomMax = 0;

  @io.notify
  @io.persist
  @type.float32
  randomMin = 0;

  @io.read
  @type.float32
  randomConstant = 0;

  @io.notify
  @io.persist
  @type.float32
  right = 0;

  @io.read
  @type.float32
  prevKeyTime = 0;

  @io.read
  @type.float32
  prevKeyValue = 0;

  /**
   * Initializes expression-derived key values.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.RegenRandomConstant();
    return true;
  }

  /**
   * Re-evaluates expression-derived key values after modification.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.UpdateValues(null);
    return true;
  }

  /**
   * Regenerates this key's random constant in the authored range.
   */
  @carbon.method
  @impl.implemented
  RegenRandomConstant(): void {
    this.randomConstant = this.randomMin +
      Math.random() * (this.randomMax - this.randomMin);
  }

  /**
   * Evaluates key expressions using previous-key context.
   */
  @carbon.method
  @impl.adapted
  UpdateValues(previousKey: Tr2ScalarExprKey | null): void {
    this.prevKeyTime = Number(previousKey?.time ?? 0);
    this.prevKeyValue = Number(previousKey?.value ?? 0);
    const variables = this.#expressionVariables();

    this.time = this.Evaluate(
      this.timeExpression,
      Number(this.time),
      variables,
    );
    this.value = this.Evaluate(
      this.valueExpression,
      Number(this.value),
      variables,
    );
    this.left = this.Evaluate(
      this.leftTangentExpression,
      this.left,
      variables,
    );
    this.right = this.Evaluate(
      this.rightTangentExpression,
      this.right,
      variables,
    );
  }

  Evaluate(
    expression: string,
    fallback: number,
    variables: Record<string, number> = this.#expressionVariables(),
  ): number {
    if (!expression) {
      return fallback;
    }
    const program = CjsControllerExpressionProgram.Compile(expression, {
      emptyValue: fallback,
      functions: SCALAR_EXPR_KEY_FUNCTIONS,
      pureFunctions: SCALAR_EXPR_KEY_PURE_FUNCTIONS,
    });
    if (!program.IsValid()) {
      return fallback;
    }
    const value = Number(program.Evaluate({
      self: this,
      key: this,
      variables,
    }));
    return Number.isNaN(value) ? fallback : value;
  }

  #expressionVariables(): Record<string, number> {
    return {
      value: Number(this.value),
      time: Number(this.time),
      input1: this.input1,
      input2: this.input2,
      input3: this.input3,
      input4: this.input4,
      randomConstant: this.randomConstant,
      leftTangent: this.left,
      rightTangent: this.right,
      prevKeyTime: this.prevKeyTime,
      prevKeyValue: this.prevKeyValue,
    };
  }
}

const SCALAR_EXPR_KEY_FUNCTIONS: Record<string, CjsControllerExpressionFunction> =
  {
    perlin_simple: (_ctx, x = 0) =>
      (noise.perlin1D(ToFiniteNumber(x), 1.1, 2, 3) + 1) * 0.5,
    perlin: (_ctx, x = 0, a = 1, b = 1, n = 1) =>
      (
        noise.perlin1D(
          ToFiniteNumber(x),
          ToFiniteNumber(a),
          ToFiniteNumber(b),
          Math.trunc(ToFiniteNumber(n)),
        ) + 1
      ) * 0.5,
  };

const SCALAR_EXPR_KEY_PURE_FUNCTIONS = ["perlin_simple", "perlin"];

function ToFiniteNumber(value: unknown): number {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}
