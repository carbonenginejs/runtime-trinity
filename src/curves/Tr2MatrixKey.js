// Source: E:\carbonengine\trinity\trinity\Curves\Tr2BoneMatrixCurve.h
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "Tr2MatrixKey",
  family: "curves"
})
export class Tr2MatrixKey extends CjsModel
{
  @io.persist
  @type.float32
  time = 0;

  @io.persist
  @type.mat4
  value = mat4.create();

}
