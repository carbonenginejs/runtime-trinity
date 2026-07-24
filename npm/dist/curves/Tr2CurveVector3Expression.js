import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { CjsControllerExpressionProgram } from '../controllers/CjsControllerExpressionProgram.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_expressionX, _init_extra_expressionX, _init_expressionY, _init_extra_expressionY, _init_expressionZ, _init_extra_expressionZ, _init_currentValue, _init_extra_currentValue, _init_input, _init_extra_input, _init_input2, _init_extra_input2, _init_input3, _init_extra_input3, _init_input4, _init_extra_input4, _init_inputs, _init_extra_inputs;
let _Tr2CurveVector3Expre;
new class extends _identity {
  static [class Tr2CurveVector3Expression extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_expressionX, _init_extra_expressionX, _init_expressionY, _init_extra_expressionY, _init_expressionZ, _init_extra_expressionZ, _init_currentValue, _init_extra_currentValue, _init_input, _init_extra_input, _init_input2, _init_extra_input2, _init_input3, _init_extra_input3, _init_input4, _init_extra_input4, _init_inputs, _init_extra_inputs, _initProto],
        c: [_Tr2CurveVector3Expre, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2CurveVector3Expression",
        family: "curves"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persistOnly, type, type.expression], 16, "expressionX"], [[io, io.persistOnly, type, type.expression], 16, "expressionY"], [[io, io.persistOnly, type, type.expression], 16, "expressionZ"], [[io, io.read, type, type.vec3], 16, "currentValue"], [[io, io.persist, type, type.float32], 16, "input1"], [[io, io.persist, type, type.float32], 16, "input2"], [[io, io.persist, type, type.float32], 16, "input3"], [[io, io.persist, type, type.float32], 16, "input4"], [[io, io.persist, void 0, type.list("ITriScalarFunction")], 16, "inputs"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "Update"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValueAt"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValue"], [[carbon, carbon.method, impl, impl.noop], 18, "GetValueDotAt"], [[carbon, carbon.method, impl, impl.noop], 18, "GetValueDoubleDotAt"], [[carbon, carbon.method, impl, impl.noop], 18, "InterpolatedPosition"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetExpressionX"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetExpressionY"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetExpressionZ"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetExpressionX"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetExpressionY"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetExpressionZ"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetInputValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRandomConstant"], [[carbon, carbon.method, impl, impl.implemented], 18, "ResetRandomConstant"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetExpressionTermInfo"], [[carbon, carbon.method, impl, impl.adapted], 18, "EvaluateExpression"]], 0, void 0, CjsModel));
    }
    name = (_initProto(this), _init_name(this, ""));
    expressionX = (_init_extra_name(this), _init_expressionX(this, ""));
    expressionY = (_init_extra_expressionX(this), _init_expressionY(this, ""));
    expressionZ = (_init_extra_expressionY(this), _init_expressionZ(this, ""));
    currentValue = (_init_extra_expressionZ(this), _init_currentValue(this, vec3.create()));
    input1 = (_init_extra_currentValue(this), _init_input(this, 0));
    input2 = (_init_extra_input(this), _init_input2(this, 0));
    input3 = (_init_extra_input2(this), _init_input3(this, 0));
    input4 = (_init_extra_input3(this), _init_input4(this, 0));
    inputs = (_init_extra_input4(this), _init_inputs(this, []));
    timeScale = (_init_extra_inputs(this), 1);
    randomConstant = Math.random();
    #programs = [null, null, null];
    #sources = ["", "", ""];
    #currentTime = 0;

    /**
     * Compiles component expressions.
     */
    Initialize() {
      this.Compile();
      return true;
    }

    /**
     * Updates the cached vector value.
     */
    UpdateValue(time) {
      this.GetValue(time, this.currentValue);
    }

    /**
     * Updates and returns the vector value.
     */

    Update(time, out) {
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

    GetValueAt(time, out) {
      return this.#sample(time, out);
    }

    /**
     * Gets the vector value.
     */
    GetValue(time, out) {
      this.Compile();
      const context = this.GetContext(time);
      out[0] = _Tr2CurveVector3Expre.#evaluate(this.#programs[0], context);
      out[1] = _Tr2CurveVector3Expre.#evaluate(this.#programs[1], context);
      out[2] = _Tr2CurveVector3Expre.#evaluate(this.#programs[2], context);
      return out;
    }

    /**
     * Derivatives are not represented by Carbon expression curves.
     */
    GetValueDotAt(_time, out) {
      return out;
    }

    /**
     * Derivatives are not represented by Carbon expression curves.
     */
    GetValueDoubleDotAt(_time, out) {
      return out;
    }

    /**
     * Expression curves do not have segment interpolation state.
     */
    InterpolatedPosition(_time, out) {
      return out;
    }
    GetExpressionX() {
      return this.expressionX;
    }
    GetExpressionY() {
      return this.expressionY;
    }
    GetExpressionZ() {
      return this.expressionZ;
    }
    SetExpressionX(expression, options = {}) {
      const changed = this.SetValues({
        expressionX: expression
      }, {
        ...options,
        skipUpdate: true,
        returnBoolean: true
      });
      if (!changed) return false;
      this.#programs[0] = null;
      if (options.skipUpdate !== true) {
        this.UpdateValues({
          ...options,
          source: options.source ?? this
        });
      }
      return true;
    }
    SetExpressionY(expression, options = {}) {
      const changed = this.SetValues({
        expressionY: expression
      }, {
        ...options,
        skipUpdate: true,
        returnBoolean: true
      });
      if (!changed) return false;
      this.#programs[1] = null;
      if (options.skipUpdate !== true) {
        this.UpdateValues({
          ...options,
          source: options.source ?? this
        });
      }
      return true;
    }
    SetExpressionZ(expression, options = {}) {
      const changed = this.SetValues({
        expressionZ: expression
      }, {
        ...options,
        skipUpdate: true,
        returnBoolean: true
      });
      if (!changed) return false;
      this.#programs[2] = null;
      if (options.skipUpdate !== true) {
        this.UpdateValues({
          ...options,
          source: options.source ?? this
        });
      }
      return true;
    }
    GetInputValue(index, time = this.#currentTime) {
      const input = this.inputs[index | 0];
      return input ? input.GetValueAt(time) : 0;
    }
    GetRandomConstant() {
      return this.randomConstant;
    }
    ResetRandomConstant() {
      this.randomConstant = Math.random();
    }
    GetExpressionTermInfo() {
      return CjsControllerExpressionProgram.getCurveTermInfo();
    }
    EvaluateExpression(expression) {
      const program = CjsControllerExpressionProgram.Compile(expression, {
        emptyValue: 0
      });
      return program.IsValid() ? Number(program.Evaluate(this.GetContext(0))) || 0 : 0;
    }
    Compile() {
      const expressions = [this.expressionX, this.expressionY, this.expressionZ];
      for (let i = 0; i < expressions.length; i++) {
        if (!this.#programs[i] || this.#sources[i] !== expressions[i]) {
          this.#programs[i] = CjsControllerExpressionProgram.Compile(expressions[i], {
            emptyValue: 0
          });
          this.#sources[i] = expressions[i];
        }
      }
    }
    GetContext(time) {
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
    #sample(time, out) {
      this.Compile();
      const context = this.GetContext(time);
      out[0] = _Tr2CurveVector3Expre.#evaluate(this.#programs[0], context);
      out[1] = _Tr2CurveVector3Expre.#evaluate(this.#programs[1], context);
      out[2] = _Tr2CurveVector3Expre.#evaluate(this.#programs[2], context);
      if (out.length > 3) {
        out[3] = 0;
      }
      return out;
    }
  }];
  #evaluate(program, context) {
    return program?.IsValid() ? Number(program.Evaluate(context)) || 0 : 0;
  }
  constructor() {
    super(_Tr2CurveVector3Expre), _initClass();
  }
}();

export { _Tr2CurveVector3Expre as Tr2CurveVector3Expression };
//# sourceMappingURL=Tr2CurveVector3Expression.js.map
