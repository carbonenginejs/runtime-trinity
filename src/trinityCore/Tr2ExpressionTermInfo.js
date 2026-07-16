// Source: E:\carbonengine\trinity\trinity\Tr2ExpressionTermInfo.h
// Source: E:\carbonengine\trinity\trinity\Tr2ExpressionTermInfo.cpp
// Source: E:\carbonengine\trinity\trinity\Tr2ExpressionTermInfo_Blue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { TermType } from "../generated/trinityCore/enums.js";


@type.define({
  className: "Tr2ExpressionTermInfo",
  family: "trinityCore"
})
export class Tr2ExpressionTermInfo extends CjsModel
{
  @io.readwrite
  @type.int32
  @schema.enum("TermType")
  type = TermType.VARIABLE;

  @io.readwrite
  @type.string
  category = "";

  @io.readwrite
  @type.string
  name = "";

  @io.readwrite
  @type.string
  description = "";

  #arguments = [];

  @carbon.method
  @impl.implemented
  GetArguments()
  {
    return this.#arguments.slice();
  }

  static Variable(category, name, description)
  {
    return Tr2ExpressionTermInfo.#create(TermType.VARIABLE, category, name, [], description);
  }

  static Function(category, name, ...argumentsAndDescription)
  {
    const values = argumentsAndDescription.slice();
    const description = values.pop() ?? "";
    return Tr2ExpressionTermInfo.#create(TermType.FUNCTION, category, name, values, description);
  }

  static StringFunction(category, name, argument, description)
  {
    return Tr2ExpressionTermInfo.#create(TermType.STRING_FUNCTION, category, name, [argument], description);
  }

  static #create(termType, category, name, args, description)
  {
    const term = new Tr2ExpressionTermInfo();
    term.type = termType;
    term.category = category;
    term.name = name;
    term.description = description;
    term.#arguments = args.slice();
    return term;
  }

  static TermType = TermType;

}
