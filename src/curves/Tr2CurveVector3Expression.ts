// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3Expression.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3Expression.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import type { Color, Vec3 } from "@carbonenginejs/core-math/types";
import { CjsControllerExpressionProgram } from "../controllers/CjsControllerExpressionProgram.ts";
import {
  type CjsCurveExpressionTermInfo,
  GetCurveExpressionTermInfo,
} from "./CjsCurveExpressionTerms.ts";
import type {
  ITriColorFunction,
  ITriScalarFunction,
  ITriVectorFunction,
} from "./contracts.ts";

@type.define({ className: "Tr2CurveVector3Expression", family: "curves" })
export class Tr2CurveVector3Expression extends CjsModel
  implements ITriVectorFunction, ITriColorFunction {
  @io.persist
  @type.string
  name = "";

  @io.persistOnly
  @type.expression
  expressionX = "";

  @io.persistOnly
  @type.expression
  expressionY = "";

  @io.persistOnly
  @type.expression
  expressionZ = "";

  @io.read
  @type.vec3
  currentValue: Vec3 = vec3.create();

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

  #programs: Array<CjsControllerExpressionProgram | null> = [null, null, null];
  #sources = ["", "", ""];
  #currentTime = 0;

  /**
   * Compiles component expressions.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.Compile();
    return true;
  }

  /**
   * Updates the cached vector value.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.GetValue(time, this.currentValue);
  }

  /**
   * Updates and returns the vector value.
   */
  Update(time: number, out: Vec3): Vec3;
  Update(time: number, out: Color): Color;
  @carbon.method
  @impl.adapted
  Update(time: number, out: Vec3 | Color): Vec3 | Color {
    this.#sample(time, this.currentValue);
    vec3.copy(out, this.currentValue);
    if (out.length > 3) {
      out[3] = 0;
    }
    return out;
  }

  /**
   * Gets the vector value at a time.
   */
  GetValueAt(time: number, out: Vec3): Vec3;
  GetValueAt(time: number, out: Color): Color;
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Vec3 | Color): Vec3 | Color {
    return this.#sample(time, out);
  }

  /**
   * Gets the vector value.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Vec3): Vec3 {
    this.Compile();
    const context = this.GetContext(time);
    out[0] = Evaluate(this.#programs[0], context);
    out[1] = Evaluate(this.#programs[1], context);
    out[2] = Evaluate(this.#programs[2], context);
    return out;
  }

  /**
   * Derivatives are not represented by Carbon expression curves.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Vec3): Vec3 {
    return out;
  }

  /**
   * Derivatives are not represented by Carbon expression curves.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Vec3): Vec3 {
    return out;
  }

  /**
   * Expression curves do not have segment interpolation state.
   */
  @carbon.method
  @impl.noop
  InterpolatedPosition(_time: number, out: Vec3): Vec3 {
    return out;
  }

  @carbon.method
  @impl.implemented
  GetExpressionX(): string {
    return this.expressionX;
  }

  @carbon.method
  @impl.implemented
  GetExpressionY(): string {
    return this.expressionY;
  }

  @carbon.method
  @impl.implemented
  GetExpressionZ(): string {
    return this.expressionZ;
  }

  @carbon.method
  @impl.adapted
  SetExpressionX(expression: string): void {
    this.expressionX = expression;
    this.#programs[0] = null;
  }

  @carbon.method
  @impl.adapted
  SetExpressionY(expression: string): void {
    this.expressionY = expression;
    this.#programs[1] = null;
  }

  @carbon.method
  @impl.adapted
  SetExpressionZ(expression: string): void {
    this.expressionZ = expression;
    this.#programs[2] = null;
  }

  @carbon.method
  @impl.implemented
  GetInputValue(index: number, time: number = this.#currentTime): number {
    const input = this.inputs[index | 0];
    return input ? input.GetValueAt(time) : 0;
  }

  @carbon.method
  @impl.implemented
  GetRandomConstant(): number {
    return this.randomConstant;
  }

  @carbon.method
  @impl.implemented
  ResetRandomConstant(): void {
    this.randomConstant = Math.random();
  }

  @carbon.method
  @impl.adapted
  GetExpressionTermInfo(): CjsCurveExpressionTermInfo[] {
    return GetCurveExpressionTermInfo();
  }

  @carbon.method
  @impl.adapted
  EvaluateExpression(expression: string): number {
    const program = CjsControllerExpressionProgram.Compile(expression, {
      emptyValue: 0,
    });
    return program.IsValid()
      ? Number(program.Evaluate(this.GetContext(0))) || 0
      : 0;
  }

  Compile(): void {
    const expressions = [this.expressionX, this.expressionY, this.expressionZ];
    for (let i = 0; i < expressions.length; i++) {
      if (!this.#programs[i] || this.#sources[i] !== expressions[i]) {
        this.#programs[i] = CjsControllerExpressionProgram.Compile(
          expressions[i],
          { emptyValue: 0 },
        );
        this.#sources[i] = expressions[i];
      }
    }
  }

  GetContext(time: number): Record<string, unknown> {
    const scaledTime = time / this.timeScale;
    this.#currentTime = scaledTime;
    return {
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
    };
  }

  #sample(time: number, out: Vec3 | Color): Vec3 | Color {
    this.Compile();
    const context = this.GetContext(time);
    out[0] = Evaluate(this.#programs[0], context);
    out[1] = Evaluate(this.#programs[1], context);
    out[2] = Evaluate(this.#programs[2], context);
    if (out.length > 3) {
      out[3] = 0;
    }
    return out;
  }
}

function Evaluate(
  program: CjsControllerExpressionProgram | null,
  context: Record<string, unknown>,
): number {
  return program?.IsValid() ? Number(program.Evaluate(context)) || 0 : 0;
}
