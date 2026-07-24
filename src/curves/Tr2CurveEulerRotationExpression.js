// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotationExpression.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveEulerRotationExpression.cpp
import { fromYawPitchRoll, quat } from "@carbonenginejs/runtime-utils/quat";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { CjsControllerExpressionProgram } from "../controllers/CjsControllerExpressionProgram.js";


@type.define({
  className: "Tr2CurveEulerRotationExpression",
  family: "curves"
})
export class Tr2CurveEulerRotationExpression extends CjsModel
{
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
  currentValue = quat.create();

  @io.persist
  @type.float32
  input1 = 0;

  @io.persist
  @type.float32
  input2 = 0;

  @io.persist
  @type.float32
  input3 = 0;

  @io.persist
  @type.float32
  input4 = 0;

  @io.persist
  @type.list("ITriScalarFunction")
  inputs = [];

  timeScale = 1;

  randomConstant = Math.random();

  #programs = [null, null, null];

  #sources = ["", "", ""];

  #currentTime = 0;

  /**
   * Compiles component expressions.
   */
  @carbon.method
  @impl.adapted
  Initialize()
  {
    this.Compile();
    return true;
  }

  /**
   * Updates the cached quaternion.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time)
  {
    this.GetValue(time, this.currentValue);
  }

  /**
   * Updates and returns the quaternion.
   */
  @carbon.method
  @impl.adapted
  Update(time, out)
  {
    this.GetValue(time, this.currentValue);
    return quat.copy(out, this.currentValue);
  }

  /**
   * Gets the quaternion value at a time.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time, out)
  {
    return this.GetValue(time, out);
  }

  /**
   * Gets the quaternion value.
   */
  @carbon.method
  @impl.adapted
  GetValue(time, out)
  {
    this.Compile();
    const context = this.GetContext(time);
    return fromYawPitchRoll(out, Tr2CurveEulerRotationExpression.#evaluate(this.#programs[0], context), Tr2CurveEulerRotationExpression.#evaluate(this.#programs[1], context), Tr2CurveEulerRotationExpression.#evaluate(this.#programs[2], context));
  }

  /**
   * Derivative stub retained for interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time, out)
  {
    return out;
  }

  /**
   * Second-derivative stub retained for interface compatibility.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time, out)
  {
    return out;
  }
  @carbon.method
  @impl.implemented
  GetExpressionYaw()
  {
    return this.expressionYaw;
  }
  @carbon.method
  @impl.implemented
  GetExpressionPitch()
  {
    return this.expressionPitch;
  }
  @carbon.method
  @impl.implemented
  GetExpressionRoll()
  {
    return this.expressionRoll;
  }
  @carbon.method
  @impl.adapted
  SetExpressionYaw(expression)
  {
    this.expressionYaw = expression;
    this.#programs[0] = null;
  }
  @carbon.method
  @impl.adapted
  SetExpressionPitch(expression)
  {
    this.expressionPitch = expression;
    this.#programs[1] = null;
  }
  @carbon.method
  @impl.adapted
  SetExpressionRoll(expression)
  {
    this.expressionRoll = expression;
    this.#programs[2] = null;
  }
  @carbon.method
  @impl.implemented
  GetInputValue(index, time = this.#currentTime)
  {
    const input = this.inputs[index | 0];
    return input ? input.GetValueAt(time) : 0;
  }
  @carbon.method
  @impl.implemented
  GetRandomConstant()
  {
    return this.randomConstant;
  }
  @carbon.method
  @impl.implemented
  ResetRandomConstant()
  {
    this.randomConstant = Math.random();
  }
  @carbon.method
  @impl.adapted
  GetExpressionTermInfo()
  {
    return CjsControllerExpressionProgram.getCurveTermInfo({
      includeRadians: true
    });
  }
  @carbon.method
  @impl.adapted
  EvaluateExpression(expression)
  {
    const program = CjsControllerExpressionProgram.Compile(expression, {
      emptyValue: 0
    });
    return program.IsValid() ? Number(program.Evaluate(this.GetContext(0))) || 0 : 0;
  }
  Compile()
  {
    const expressions = [this.expressionYaw, this.expressionPitch, this.expressionRoll];
    for (let i = 0; i < expressions.length; i++)
    {
      if (!this.#programs[i] || this.#sources[i] !== expressions[i])
      {
        this.#programs[i] = CjsControllerExpressionProgram.Compile(expressions[i], {
          emptyValue: 0
        });
        this.#sources[i] = expressions[i];
      }
    }
  }
  GetContext(time)
  {
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
        input4: this.input4
      }
    };
  }

  static #evaluate(program, context)
  {
    return program?.IsValid() ? Number(program.Evaluate(context)) || 0 : 0;
  }
}
