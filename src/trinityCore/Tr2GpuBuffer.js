// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2GpuBuffer.h
// Hand-maintained from Carbon source; runtime-device owns the canonical JS class.
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** Tr2GpuBuffer (trinityCore) - generated from schema shapeHash 7a225a45.... */
@type.define({ className: "Tr2GpuBuffer", family: "trinityCore" })
export class Tr2GpuBuffer extends CjsModel
{

  static CreationFlags = Object.freeze({ CPU_WRITABLE: 1, GPU_WRITABLE: 2, DRAW_INDIRECT: 4 });

  /** m_creationFlags (CreationFlags) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.uint32
  creationFlags = 0;

  /** m_format (Tr2RenderContextEnum::PixelFormat - enum PixelFormat) [READWRITE, ENUM, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("PixelFormat")
  format = 0;

  /** m_count (uint32_t) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.uint32
  count = 0;

  @io.read
  @type.boolean
  isValid = false;

  /** Carbon method __init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  @carbon.method
  @impl.notImplemented
  __init__(...args)
  {
    throw CjsModel.notImplemented("Tr2GpuBuffer", "__init__", args);
  }

  /** Carbon method DebugGetData -> PyGetData (MAP_METHOD). */
  @carbon.method
  @impl.notImplemented
  DebugGetData(...args)
  {
    throw CjsModel.notImplemented("Tr2GpuBuffer", "DebugGetData", args);
  }

}
