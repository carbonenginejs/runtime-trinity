// Source: E:\carbonengine\trinity\trinity\Eve\EveConstantBufferFormats.h
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EvePerObjectPSData",
  family: "eve"
})
export class EvePerObjectPSData extends CjsModel
{
  @type.mat4
  WorldMat = mat4.create();
}
