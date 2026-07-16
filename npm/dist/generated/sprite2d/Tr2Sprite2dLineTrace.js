import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2TexturedSpriteObject as _Tr2TexturedSpriteObj } from './Tr2TexturedSpriteObject.js';

let _initProto, _initClass, _init_cornerType, _init_extra_cornerType, _init_isLoop, _init_extra_isLoop, _init_textureOffset, _init_extra_textureOffset, _init_end, _init_extra_end, _init_start, _init_extra_start, _init_vertices, _init_extra_vertices, _init_lineWidth, _init_extra_lineWidth, _init_textureWidth, _init_extra_textureWidth;

/** Tr2Sprite2dLineTrace (sprite2d) - generated from schema shapeHash 45a6ffff.... */
let _Tr2Sprite2dLineTrace;
class Tr2Sprite2dLineTrace extends _Tr2TexturedSpriteObj {
  static {
    ({
      e: [_init_cornerType, _init_extra_cornerType, _init_isLoop, _init_extra_isLoop, _init_textureOffset, _init_extra_textureOffset, _init_end, _init_extra_end, _init_start, _init_extra_start, _init_vertices, _init_extra_vertices, _init_lineWidth, _init_extra_lineWidth, _init_textureWidth, _init_extra_textureWidth, _initProto],
      c: [_Tr2Sprite2dLineTrace, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Sprite2dLineTrace",
      family: "sprite2d"
    })], [[[io, io.notify, io, io.readwrite, type, type.int32], 16, "cornerType"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "isLoop"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "textureOffset"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "end"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "start"], [[io, io.notify, io, io.read, void 0, type.list("Tr2Sprite2dLineTraceVertex")], 16, "vertices"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "lineWidth"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "textureWidth"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AppendVertices"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetVertices"]], 0, void 0, _Tr2TexturedSpriteObj));
  }
  constructor(...args) {
    super(...args);
    _init_extra_textureWidth(this);
  }
  /** m_cornerType (int) [READWRITE, NOTIFY] */
  cornerType = (_initProto(this), _init_cornerType(this, 0));

  /** m_isLoop (bool) [READWRITE, NOTIFY] */
  isLoop = (_init_extra_cornerType(this), _init_isLoop(this, false));

  /** m_textureOffset (float) [READWRITE, NOTIFY] */
  textureOffset = (_init_extra_isLoop(this), _init_textureOffset(this, 0));

  /** m_end (float) [READWRITE, NOTIFY] */
  end = (_init_extra_textureOffset(this), _init_end(this, 1));

  /** m_start (float) [READWRITE, NOTIFY] */
  start = (_init_extra_end(this), _init_start(this, 0));

  /** m_vertices (PTr2Sprite2dLineTraceVertexVector) [READ, NOTIFY] */
  vertices = (_init_extra_start(this), _init_vertices(this, []));

  /** m_lineWidth (float) [READWRITE, NOTIFY] */
  lineWidth = (_init_extra_vertices(this), _init_lineWidth(this, 1));

  /** m_textureWidth (float) [READWRITE, NOTIFY] */
  textureWidth = (_init_extra_lineWidth(this), _init_textureWidth(this, 1));

  /** Carbon method AppendVertices -> PyAppendVertices (MAP_METHOD). */
  AppendVertices(...args) {
    throw new Error("Tr2Sprite2dLineTrace.AppendVertices is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetVertices -> PySetVertices (MAP_METHOD). */
  SetVertices(...args) {
    throw new Error("Tr2Sprite2dLineTrace.SetVertices is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2Sprite2dLineTrace as Tr2Sprite2dLineTrace };
//# sourceMappingURL=Tr2Sprite2dLineTrace.js.map
