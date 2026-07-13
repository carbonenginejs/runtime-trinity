// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriFloatArrayParameter.h
// Source: E:\carbonengine\trinity\trinity\Shader\Parameter\TriFloatArrayParameter.cpp
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "TriVector4",
  family: "shader"
})
export class TriVector4 extends CjsModel
{
  @io.persist
  @type.vec4
  data = vec4.create();
}
