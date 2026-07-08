// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotationExpression.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotationExpression.cpp
import { fromYawPitchRoll, quat } from "@carbonenginejs/core-math/quat";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { Quat } from "@carbonenginejs/core-math/types";
import { CjsControllerExpressionProgram } from "../controllers/CjsControllerExpressionProgram.ts";
import {
  type CjsCurveExpressionTermInfo,
  GetCurveExpressionTermInfo,
} from "./CjsCurveExpressionTerms.ts";
import type {
  ITriQuaternionFunction,
  ITriScalarFunction,
} from "./contracts.ts";

@type.define({ className: "Tr2CurveEulerRotationExpression", family: "curves" })
export class Tr2CurveEulerRotationExpression extends CjsModel
  implements ITriQuaternionFunction {
  @io.persist
  @type.string
  name = "";

  @io.persistOnly
  @type.expression
  expressionYaw = "";

  @io.persistOnly
  @type.expression
  expressionPitch = "";

  @io.persistOnly
  @type.expression
  expressionRoll = "";

  @io.read
  @type.quat
  currentValue: Quat = quat.create();

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
   * Updates the cached quaternion.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.GetValue(time, this.currentValue);
  }

  /**
   * Updates and returns the quaternion.
   */
  @carbon.method
  @impl.adapted
  Update(time: number, out: Quat): Quat {
    this.GetValue(time, this.currentValue);
    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at a time.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Quat): Quat {
    return this.GetValue(time, out);
  }

  /**
   * Gets the quaternion value.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Quat): Quat {
    this.Compile();
    const context = this.GetContext(time);
    return fromYawPitchRoll(
      out,
      Evaluate(this.#programs[0], context),
      Evaluate(this.#programs[1], context),
      Evaluate(this.#programs[2], context),
    );
  }

  /**
   * Derivative stub retained for interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time: number, out: Quat): Quat {
    return out;
  }

  /**
   * Second-derivative stub retained for interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time: number, out: Quat): Quat {
    return out;
  }

  @carbon.method
  @impl.implemented
  GetExpressionYaw(): string {
    return this.expressionYaw;
  }

  @carbon.method
  @impl.implemented
  GetExpressionPitch(): string {
    return this.expressionPitch;
  }

  @carbon.method
  @impl.implemented
  GetExpressionRoll(): string {
    return this.expressionRoll;
  }

  @carbon.method
  @impl.adapted
  SetExpressionYaw(expression: string): void {
    this.expressionYaw = expression;
    this.#programs[0] = null;
  }

  @carbon.method
  @impl.adapted
  SetExpressionPitch(expression: string): void {
    this.expressionPitch = expression;
    this.#programs[1] = null;
  }

  @carbon.method
  @impl.adapted
  SetExpressionRoll(expression: string): void {
    this.expressionRoll = expression;
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
    return GetCurveExpressionTermInfo({ includeRadians: true });
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
    const expressions = [
      this.expressionYaw,
      this.expressionPitch,
      this.expressionRoll,
    ];
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
}

function Evaluate(
  program: CjsControllerExpressionProgram | null,
  context: Record<string, unknown>,
): number {
  return program?.IsValid() ? Number(program.Evaluate(context)) || 0 : 0;
}
