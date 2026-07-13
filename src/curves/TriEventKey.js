// Source: E:\carbonengine\trinity\trinity\Curves\TriEventKey.h
// Source: E:\carbonengine\trinity\trinity\Curves\TriEventKey.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "TriEventKey",
  family: "curves"
})
export class TriEventKey extends CjsModel
{
  @io.readwrite
  @type.objectRef("PyObject")
  callable = null;

  @io.readwrite
  @type.objectRef("PyObject")
  callableArgs = null;

  @io.persist
  @type.string
  value = "";

  @io.persist
  @type.float32
  time = 0;
}
