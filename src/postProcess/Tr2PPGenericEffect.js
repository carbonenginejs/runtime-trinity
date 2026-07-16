// Source: E:\carbonengine\trinity\trinity\PostProcess\Effects\Tr2PPGenericEffect.h
import { io, schema, type } from "@carbonenginejs/core-types/schema";
import { Tr2PPEffect } from "../generated/postProcess/Tr2PPEffect.js";
import { Quality } from "../generated/postProcess/enums.js";


@type.define({ className: "Tr2PPGenericEffect", family: "postProcess" })
export class Tr2PPGenericEffect extends Tr2PPEffect
{
  @io.persist
  @type.int32
  @schema.enum("Quality")
  quality = 1;

  @io.persist
  @type.objectRef("Tr2Effect")
  effect = null;

  GetEffect()
  {
    return this.effect;
  }

  static Quality = Quality;

}
