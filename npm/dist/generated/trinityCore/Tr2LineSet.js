import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2PrimitiveSet as _Tr2PrimitiveSet } from './Tr2PrimitiveSet.js';

let _initProto, _initClass, _init_lines, _init_extra_lines, _init_maxCurrentLineCount, _init_extra_maxCurrentLineCount, _init_currentSubmittedLineCount, _init_extra_currentSubmittedLineCount, _init_pickingVertexDeclHandle, _init_extra_pickingVertexDeclHandle, _init_pickingVertexBuffer, _init_extra_pickingVertexBuffer, _init_triangles, _init_extra_triangles, _init_maxCurrentTriangleCount, _init_extra_maxCurrentTriangleCount, _init_currentSubmittedTriangleCount, _init_extra_currentSubmittedTriangleCount;

/** Tr2LineSet (trinityCore) - generated from schema shapeHash 5d428e4b.... */
let _Tr2LineSet;
class Tr2LineSet extends _Tr2PrimitiveSet {
  static {
    ({
      e: [_init_lines, _init_extra_lines, _init_maxCurrentLineCount, _init_extra_maxCurrentLineCount, _init_currentSubmittedLineCount, _init_extra_currentSubmittedLineCount, _init_pickingVertexDeclHandle, _init_extra_pickingVertexDeclHandle, _init_pickingVertexBuffer, _init_extra_pickingVertexBuffer, _init_triangles, _init_extra_triangles, _init_maxCurrentTriangleCount, _init_extra_maxCurrentTriangleCount, _init_currentSubmittedTriangleCount, _init_extra_currentSubmittedTriangleCount, _initProto],
      c: [_Tr2LineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2LineSet",
      family: "trinityCore"
    })], [[type.list("LineData"), 0, "lines"], [[type, type.uint32], 16, "maxCurrentLineCount"], [[type, type.uint32], 16, "currentSubmittedLineCount"], [[type, type.uint32], 16, "pickingVertexDeclHandle"], [type.rawStruct("Tr2BufferAL"), 0, "pickingVertexBuffer"], [type.list("Triangle"), 0, "triangles"], [[type, type.uint32], 16, "maxCurrentTriangleCount"], [[type, type.uint32], 16, "currentSubmittedTriangleCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddPickingTriangle"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearLines"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearPickingTriangles"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SubmitChanges"]], 0, void 0, _Tr2PrimitiveSet));
  }
  constructor(...args) {
    super(...args);
    _init_extra_currentSubmittedTriangleCount(this);
  }
  /** m_lines (std::vector<LineData>) */
  lines = (_initProto(this), _init_lines(this, []));

  /** m_maxCurrentLineCount (unsigned int) */
  maxCurrentLineCount = (_init_extra_lines(this), _init_maxCurrentLineCount(this, 0));

  /** m_currentSubmittedLineCount (unsigned int) */
  currentSubmittedLineCount = (_init_extra_maxCurrentLineCount(this), _init_currentSubmittedLineCount(this, 0));

  /** m_pickingVertexDeclHandle (unsigned int) */
  pickingVertexDeclHandle = (_init_extra_currentSubmittedLineCount(this), _init_pickingVertexDeclHandle(this, 0));

  /** m_pickingVertexBuffer (Tr2BufferAL) */
  pickingVertexBuffer = (_init_extra_pickingVertexDeclHandle(this), _init_pickingVertexBuffer(this, null));

  /** m_triangles (std::vector<Triangle>) */
  triangles = (_init_extra_pickingVertexBuffer(this), _init_triangles(this, []));

  /** m_maxCurrentTriangleCount (unsigned int) */
  maxCurrentTriangleCount = (_init_extra_triangles(this), _init_maxCurrentTriangleCount(this, 0));

  /** m_currentSubmittedTriangleCount (unsigned int) */
  currentSubmittedTriangleCount = (_init_extra_maxCurrentTriangleCount(this), _init_currentSubmittedTriangleCount(this, 0));

  /** Carbon method AddLine (MAP_METHOD_AND_WRAP). */
  AddLine(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2LineSet", "AddLine", args);
  }

  /** Carbon method AddPickingTriangle (MAP_METHOD_AND_WRAP). */
  AddPickingTriangle(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2LineSet", "AddPickingTriangle", args);
  }

  /** Carbon method ClearLines (MAP_METHOD_AND_WRAP). */
  ClearLines(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2LineSet", "ClearLines", args);
  }

  /** Carbon method ClearPickingTriangles (MAP_METHOD_AND_WRAP). */
  ClearPickingTriangles(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2LineSet", "ClearPickingTriangles", args);
  }

  /** Carbon method SubmitChanges (MAP_METHOD_AND_WRAP). */
  SubmitChanges(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2LineSet", "SubmitChanges", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2LineSet as Tr2LineSet };
//# sourceMappingURL=Tr2LineSet.js.map
