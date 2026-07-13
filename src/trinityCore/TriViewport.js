// Source: E:\carbonengine\trinity\trinity\TriViewport.h
// Source: E:\carbonengine\trinity\trinity\TriViewport_Blue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "TriViewport",
  family: "trinityCore"
})
export class TriViewport extends CjsModel
{
  @io.persist
  @type.int32
  x = 0;

  @io.persist
  @type.int32
  y = 0;

  @io.persist
  @type.int32
  width = 1;

  @io.persist
  @type.int32
  height = 1;

  @io.persist
  @type.float32
  minZ = 0;

  @io.persist
  @type.float32
  maxZ = 1;

  @carbon.method
  @impl.adapted
  __init__(x = 0, y = 0, width = 1, height = 1, minZ = 0, maxZ = 1)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.minZ = minZ;
    this.maxZ = maxZ;
  }

  @carbon.method
  @impl.implemented
  GetAspectRatio()
  {
    return this.width / this.height;
  }
}
