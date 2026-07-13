// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3Expression.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector3Expression.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsControllerExpressionProgram } from "../controllers/CjsControllerExpressionProgram.js";


@type.define({
  className: "Tr2CurveVector3Expression",
  family: "curves"
})
export class Tr2CurveVector3Expression extends CjsModel
{
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
  currentValue = vec3.create();

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
   * Updates the cached vector value.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time)
  {
    this.GetValue(time, this.currentValue);
  }

  /**
   * Updates and returns the vector value.
   */

  @carbon.method
  @impl.adapted
  Update(time, out)
  {
    this.#sample(time, this.currentValue);
    vec3.copy(out, this.currentValue);
    if (out.length > 3)
    {
      out[3] = 0;
    }
    return out;
  }

  /**
   * Gets the vector value at a time.
   */

  @carbon.method
  @impl.adapted
  GetValueAt(time, out)
  {
    return this.#sample(time, out);
  }

  /**
   * Gets the vector value.
   */
  @carbon.method
  @impl.adapted
  GetValue(time, out)
  {
    this.Compile();
    const context = this.GetContext(time);
    out[0] = Tr2CurveVector3Expression.#evaluate(this.#programs[0], context);
    out[1] = Tr2CurveVector3Expression.#evaluate(this.#programs[1], context);
    out[2] = Tr2CurveVector3Expression.#evaluate(this.#programs[2], context);
    return out;
  }

  /**
   * Derivatives are not represented by Carbon expression curves.
   */
  @carbon.method
  @impl.noop
  GetValueDotAt(_time, out)
  {
    return out;
  }

  /**
   * Derivatives are not represented by Carbon expression curves.
   */
  @carbon.method
  @impl.noop
  GetValueDoubleDotAt(_time, out)
  {
    return out;
  }

  /**
   * Expression curves do not have segment interpolation state.
   */
  @carbon.method
  @impl.noop
  InterpolatedPosition(_time, out)
  {
    return out;
  }
  @carbon.method
  @impl.implemented
  GetExpressionX()
  {
    return this.expressionX;
  }
  @carbon.method
  @impl.implemented
  GetExpressionY()
  {
    return this.expressionY;
  }
  @carbon.method
  @impl.implemented
  GetExpressionZ()
  {
    return this.expressionZ;
  }
  @carbon.method
  @impl.adapted
  SetExpressionX(expression, options = {})
  {
    const changed = this.SetValues({ expressionX: expression }, { ...options, skipUpdate: true, returnBoolean: true });
    if (!changed) return false;
    this.#programs[0] = null;
    if (options.skipUpdate !== true)
    {
      this.UpdateValues({ ...options, source: options.source ?? this });
    }
    return true;
  }
  @carbon.method
  @impl.adapted
  SetExpressionY(expression, options = {})
  {
    const changed = this.SetValues({ expressionY: expression }, { ...options, skipUpdate: true, returnBoolean: true });
    if (!changed) return false;
    this.#programs[1] = null;
    if (options.skipUpdate !== true)
    {
      this.UpdateValues({ ...options, source: options.source ?? this });
    }
    return true;
  }
  @carbon.method
  @impl.adapted
  SetExpressionZ(expression, options = {})
  {
    const changed = this.SetValues({ expressionZ: expression }, { ...options, skipUpdate: true, returnBoolean: true });
    if (!changed) return false;
    this.#programs[2] = null;
    if (options.skipUpdate !== true)
    {
      this.UpdateValues({ ...options, source: options.source ?? this });
    }
    return true;
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
    return CjsControllerExpressionProgram.getCurveTermInfo();
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
    const expressions = [this.expressionX, this.expressionY, this.expressionZ];
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
  #sample(time, out)
  {
    this.Compile();
    const context = this.GetContext(time);
    out[0] = Tr2CurveVector3Expression.#evaluate(this.#programs[0], context);
    out[1] = Tr2CurveVector3Expression.#evaluate(this.#programs[1], context);
    out[2] = Tr2CurveVector3Expression.#evaluate(this.#programs[2], context);
    if (out.length > 3)
    {
      out[3] = 0;
    }
    return out;
  }

  static #evaluate(program, context)
  {
    return program?.IsValid() ? Number(program.Evaluate(context)) || 0 : 0;
  }
}
