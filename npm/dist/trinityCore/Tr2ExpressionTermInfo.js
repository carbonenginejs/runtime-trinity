import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { io, type, carbon, impl, schema } from '@carbonenginejs/runtime-utils/schema';

let _initProto, _initClass, _init_type, _init_extra_type, _init_category, _init_extra_category, _init_name, _init_extra_name, _init_description, _init_extra_description, _create;
const TermType = Object.freeze({
  VARIABLE: 0,
  FUNCTION: 1,
  STRING_FUNCTION: 2
});
let _Tr2ExpressionTermInf;
new class extends _identity {
  static [class Tr2ExpressionTermInfo extends CjsModel {
    static {
      ({
        e: [_init_type, _init_extra_type, _init_category, _init_extra_category, _init_name, _init_extra_name, _init_description, _init_extra_description, _initProto],
        c: [_Tr2ExpressionTermInf, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2ExpressionTermInfo",
        family: "trinityCore"
      })], [[[io, io.readwrite, type, type.int32, void 0, schema.enum("TermType")], 16, "type"], [[io, io.readwrite, type, type.string], 16, "category"], [[io, io.readwrite, type, type.string], 16, "name"], [[io, io.readwrite, type, type.string], 16, "description"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetArguments"]], 0, void 0, CjsModel));
      _create = function (termType, category, name, args, description) {
        const term = new _Tr2ExpressionTermInf();
        term.type = termType;
        term.category = category;
        term.name = name;
        term.description = description;
        term.#arguments = args.slice();
        return term;
      };
    }
    type = (_initProto(this), _init_type(this, TermType.VARIABLE));
    category = (_init_extra_type(this), _init_category(this, ""));
    name = (_init_extra_category(this), _init_name(this, ""));
    description = (_init_extra_name(this), _init_description(this, ""));
    #arguments = (_init_extra_description(this), []);
    GetArguments() {
      return this.#arguments.slice();
    }
    static Variable(category, name, description) {
      return _Tr2ExpressionTermInf.#create(TermType.VARIABLE, category, name, [], description);
    }
    static Function(category, name, ...argumentsAndDescription) {
      const values = argumentsAndDescription.slice();
      const description = values.pop() ?? "";
      return _Tr2ExpressionTermInf.#create(TermType.FUNCTION, category, name, values, description);
    }
    static StringFunction(category, name, argument, description) {
      return _Tr2ExpressionTermInf.#create(TermType.STRING_FUNCTION, category, name, [argument], description);
    }
  }];
  #create(_0, _1, _2, _3, _4) {
    return _create.apply(this, arguments);
  }
  TermType = TermType;
  constructor() {
    super(_Tr2ExpressionTermInf), _initClass();
  }
}();

export { _Tr2ExpressionTermInf as Tr2ExpressionTermInfo };
//# sourceMappingURL=Tr2ExpressionTermInfo.js.map
