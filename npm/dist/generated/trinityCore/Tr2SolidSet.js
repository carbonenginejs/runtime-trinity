import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2PrimitiveSet as _Tr2PrimitiveSet } from './Tr2PrimitiveSet.js';

let _initProto, _initClass, _init_triangles, _init_extra_triangles, _init_maxCurrentTriangleCount, _init_extra_maxCurrentTriangleCount, _init_currentSubmittedTriangleCount, _init_extra_currentSubmittedTriangleCount;

/** Tr2SolidSet (trinityCore) - generated from schema shapeHash acb6a534.... */
let _Tr2SolidSet;
class Tr2SolidSet extends _Tr2PrimitiveSet {
  static {
    ({
      e: [_init_triangles, _init_extra_triangles, _init_maxCurrentTriangleCount, _init_extra_maxCurrentTriangleCount, _init_currentSubmittedTriangleCount, _init_extra_currentSubmittedTriangleCount, _initProto],
      c: [_Tr2SolidSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2SolidSet",
      family: "trinityCore"
    })], [[type.list("TriangleData"), 0, "triangles"], [[type, type.uint32], 16, "maxCurrentTriangleCount"], [[type, type.uint32], 16, "currentSubmittedTriangleCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddTriangle"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearTriangles"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SubmitChanges"]], 0, void 0, _Tr2PrimitiveSet));
  }
  constructor(...args) {
    super(...args);
    _init_extra_currentSubmittedTriangleCount(this);
  }
  /** m_triangles (std::vector<TriangleData>) */
  triangles = (_initProto(this), _init_triangles(this, []));

  /** m_maxCurrentTriangleCount (unsigned int) */
  maxCurrentTriangleCount = (_init_extra_triangles(this), _init_maxCurrentTriangleCount(this, 0));

  /** m_currentSubmittedTriangleCount (unsigned int) */
  currentSubmittedTriangleCount = (_init_extra_maxCurrentTriangleCount(this), _init_currentSubmittedTriangleCount(this, 0));

  /** Carbon method AddTriangle (MAP_METHOD_AND_WRAP). */
  AddTriangle(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2SolidSet", "AddTriangle", args);
  }

  /** Carbon method ClearTriangles (MAP_METHOD_AND_WRAP). */
  ClearTriangles(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2SolidSet", "ClearTriangles", args);
  }

  /** Carbon method SubmitChanges (MAP_METHOD_AND_WRAP). */
  SubmitChanges(...args) {
    throw _Tr2PrimitiveSet.notImplemented("Tr2SolidSet", "SubmitChanges", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2SolidSet as Tr2SolidSet };
//# sourceMappingURL=Tr2SolidSet.js.map
