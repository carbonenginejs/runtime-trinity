import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { Tr2TexturedSpriteObject as _Tr2TexturedSpriteObj } from './Tr2TexturedSpriteObject.js';

let _initProto, _initClass, _init_triangles, _init_extra_triangles, _init_vertices, _init_extra_vertices;

/** Tr2Sprite2dPolygon (sprite2d) - generated from schema shapeHash ea84f26b.... */
let _Tr2Sprite2dPolygon;
class Tr2Sprite2dPolygon extends _Tr2TexturedSpriteObj {
  static {
    ({
      e: [_init_triangles, _init_extra_triangles, _init_vertices, _init_extra_vertices, _initProto],
      c: [_Tr2Sprite2dPolygon, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Sprite2dPolygon",
      family: "sprite2d"
    })], [[[io, io.read, void 0, type.list("Tr2Sprite2dTriangle")], 16, "triangles"], [[io, io.read, void 0, type.list("Tr2Sprite2dVertex")], 16, "vertices"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AppendTriangles"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AppendVertices"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetVertices"]], 0, void 0, _Tr2TexturedSpriteObj));
  }
  constructor(...args) {
    super(...args);
    _init_extra_vertices(this);
  }
  /** m_triangles (PTr2Sprite2dTriangleVector) [READ] */
  triangles = (_initProto(this), _init_triangles(this, []));

  /** m_vertices (PTr2Sprite2dVertexVector) [READ] */
  vertices = (_init_extra_triangles(this), _init_vertices(this, []));

  /** Carbon method AppendTriangles -> PyAppendTriangles (MAP_METHOD). */
  AppendTriangles(...args) {
    throw new Error("Tr2Sprite2dPolygon.AppendTriangles is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AppendVertices -> PyAppendVertices (MAP_METHOD). */
  AppendVertices(...args) {
    throw new Error("Tr2Sprite2dPolygon.AppendVertices is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetVertices -> PySetVertices (MAP_METHOD). */
  SetVertices(...args) {
    throw new Error("Tr2Sprite2dPolygon.SetVertices is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2Sprite2dPolygon as Tr2Sprite2dPolygon };
//# sourceMappingURL=Tr2Sprite2dPolygon.js.map
