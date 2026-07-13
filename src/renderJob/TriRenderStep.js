// Source: E:\carbonengine\trinity\trinity\RenderJob\TriRenderStep.h
// Source: E:\carbonengine\trinity\trinity\RenderJob\TriRenderStep.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "TriRenderStep", family: "renderJob" })
export class TriRenderStep extends CjsModel
{
  static Result = Object.freeze({
    RS_OK: 0,
    RS_FAILED: 1,
    RS_IN_PROGRESS: 2,
    RS_TERMINATE: 3
  });

  static RS_OK = 0;
  static RS_FAILED = 1;
  static RS_IN_PROGRESS = 2;
  static RS_TERMINATE = 3;

  @io.readwrite
  @type.boolean
  enabled = true;

  @io.persist
  @type.string
  name = "";

  @carbon.method
  @impl.implemented
  IsEnabled()
  {
    return this.enabled;
  }

  @carbon.method
  @impl.adapted
  BeginExecute()
  {
  }

  @carbon.method
  @impl.adapted
  EndExecute()
  {
  }
}
