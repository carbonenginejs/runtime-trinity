// Source: E:\carbonengine\trinity\trinity\Curves\Tr2BoneMatrixCurve.h
import { mat4 } from "@carbonenginejs/runtime-utils/mat4";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { io, type } from "@carbonenginejs/runtime-utils/schema";


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
