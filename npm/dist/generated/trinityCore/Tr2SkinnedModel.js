import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2Model as _Tr2Model } from './Tr2Model.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_geometryResPath, _init_extra_geometryResPath, _init_geometryRes, _init_extra_geometryRes, _init_skeletonName, _init_extra_skeletonName, _init_skinScale, _init_extra_skinScale;

/** Tr2SkinnedModel (trinityCore) - generated from schema shapeHash 026a62f4.... */
let _Tr2SkinnedModel;
class Tr2SkinnedModel extends _Tr2Model {
  static {
    ({
      e: [_init_geometryResPath, _init_extra_geometryResPath, _init_geometryRes, _init_extra_geometryRes, _init_skeletonName, _init_extra_skeletonName, _init_skinScale, _init_extra_skinScale, _initProto],
      c: [_Tr2SkinnedModel, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2SkinnedModel",
      family: "trinityCore"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "geometryResPath"], [[io, io.read, void 0, type.objectRef("TriGeometryRes")], 16, "geometryRes"], [[io, io.notify, io, io.persist, type, type.string], 16, "skeletonName"], [[io, io.persist, type, type.vec3], 16, "skinScale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ResetAnimationBindings"]], 0, void 0, _Tr2Model));
  }
  constructor(...args) {
    super(...args);
    _init_extra_skinScale(this);
  }
  /** m_geometryResPath (std::string) [READWRITE, NOTIFY, PERSIST] */
  geometryResPath = (_initProto(this), _init_geometryResPath(this, ""));

  /** m_geometryRes (TriGeometryResPtr) [READ] */
  geometryRes = (_init_extra_geometryResPath(this), _init_geometryRes(this, null));

  /** m_skeletonName (std::string) [READWRITE, NOTIFY, PERSIST] */
  skeletonName = (_init_extra_geometryRes(this), _init_skeletonName(this, ""));

  /** m_skinScale (Vector3) [READWRITE, PERSIST] */
  skinScale = (_init_extra_skeletonName(this), _init_skinScale(this, vec3.fromValues(1, 1, 1)));

  /** Carbon method ResetAnimationBindings -> ResetBindings (MAP_METHOD_AND_WRAP). */
  ResetAnimationBindings(...args) {
    throw new Error("Tr2SkinnedModel.ResetAnimationBindings is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2SkinnedModel as Tr2SkinnedModel };
//# sourceMappingURL=Tr2SkinnedModel.js.map
