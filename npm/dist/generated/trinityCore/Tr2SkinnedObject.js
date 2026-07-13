import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_frameDelay, _init_extra_frameDelay, _init_curveSets, _init_extra_curveSets, _init_explicitMaxBounds, _init_extra_explicitMaxBounds, _init_explicitMinBounds, _init_extra_explicitMinBounds, _init_updatePeriod, _init_extra_updatePeriod, _init_transform, _init_extra_transform, _init_visualModel, _init_extra_visualModel, _init_name, _init_extra_name, _init_animationUpdater, _init_extra_animationUpdater, _init_worldTransformUpdater, _init_extra_worldTransformUpdater, _init_highDetailModel, _init_extra_highDetailModel, _init_lowDetailModel, _init_extra_lowDetailModel, _init_mediumDetailModel, _init_extra_mediumDetailModel, _init_renderRigBoneCount, _init_extra_renderRigBoneCount, _init_skinningMatrixCount, _init_extra_skinningMatrixCount, _init_useDynamicBounds, _init_extra_useDynamicBounds, _init_useExplicitBounds, _init_extra_useExplicitBounds, _init_estimatedPixelDiameter, _init_extra_estimatedPixelDiameter, _init_display, _init_extra_display;

/** Tr2SkinnedObject (trinityCore) - generated from schema shapeHash ad7ba330.... */
let _Tr2SkinnedObject;
class Tr2SkinnedObject extends CjsModel {
  static {
    ({
      e: [_init_frameDelay, _init_extra_frameDelay, _init_curveSets, _init_extra_curveSets, _init_explicitMaxBounds, _init_extra_explicitMaxBounds, _init_explicitMinBounds, _init_extra_explicitMinBounds, _init_updatePeriod, _init_extra_updatePeriod, _init_transform, _init_extra_transform, _init_visualModel, _init_extra_visualModel, _init_name, _init_extra_name, _init_animationUpdater, _init_extra_animationUpdater, _init_worldTransformUpdater, _init_extra_worldTransformUpdater, _init_highDetailModel, _init_extra_highDetailModel, _init_lowDetailModel, _init_extra_lowDetailModel, _init_mediumDetailModel, _init_extra_mediumDetailModel, _init_renderRigBoneCount, _init_extra_renderRigBoneCount, _init_skinningMatrixCount, _init_extra_skinningMatrixCount, _init_useDynamicBounds, _init_extra_useDynamicBounds, _init_useExplicitBounds, _init_extra_useExplicitBounds, _init_estimatedPixelDiameter, _init_extra_estimatedPixelDiameter, _init_display, _init_extra_display, _initProto],
      c: [_Tr2SkinnedObject, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2SkinnedObject",
      family: "trinityCore"
    })], [[[io, io.read, type, type.uint32], 16, "frameDelay"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "explicitMaxBounds"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "explicitMinBounds"], [[io, io.readwrite, type, type.float32], 16, "updatePeriod"], [[io, io.persist, void 0, type.objectRef("TriMatrix")], 16, "transform"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2SkinnedModel")], 16, "visualModel"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("ITr2AnimationUpdater")], 16, "animationUpdater"], [[io, io.persist, void 0, type.objectRef("ITr2WorldTransformUpdater")], 16, "worldTransformUpdater"], [[io, io.notify, io, io.persist, type, type.unknown], 16, "highDetailModel"], [[io, io.notify, io, io.persist, type, type.unknown], 16, "lowDetailModel"], [[io, io.notify, io, io.persist, type, type.unknown], 16, "mediumDetailModel"], [[io, io.read, type, type.uint32], 16, "renderRigBoneCount"], [[io, io.read, type, type.uint32], 16, "skinningMatrixCount"], [[io, io.readwrite, type, type.boolean], 16, "useDynamicBounds"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "useExplicitBounds"], [[io, io.read, type, type.float32], 16, "estimatedPixelDiameter"], [[io, io.persist, type, type.boolean], 16, "display"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBoundingBoxInLocalSpace"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ResetAnimationBindings"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetSkeletonTag"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBoneIndex"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBonePosition"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PrintAllBones"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_display(this);
  }
  /** m_skinningMatrixFrameDelay (unsigned int) [READ] */
  frameDelay = (_initProto(this), _init_frameDelay(this, 0));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_frameDelay(this), _init_curveSets(this, []));

  /** m_maxBounds (Vector3) [READWRITE, PERSIST, NOTIFY] */
  explicitMaxBounds = (_init_extra_curveSets(this), _init_explicitMaxBounds(this, vec3.create()));

  /** m_minBounds (Vector3) [READWRITE, PERSIST, NOTIFY] */
  explicitMinBounds = (_init_extra_explicitMaxBounds(this), _init_explicitMinBounds(this, vec3.create()));

  /** m_updatePeriod (float) [READWRITE] */
  updatePeriod = (_init_extra_explicitMinBounds(this), _init_updatePeriod(this, 0));

  /** m_transform (PTriMatrix) [READ, PERSIST] */
  transform = (_init_extra_updatePeriod(this), _init_transform(this, null));

  /** m_visualModel (Tr2SkinnedModelPtr) [READWRITE, PERSIST, NOTIFY] */
  visualModel = (_init_extra_transform(this), _init_visualModel(this, null));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_visualModel(this), _init_name(this, ""));

  /** m_animationUpdater (ITr2AnimationUpdaterPtr) [READWRITE, PERSIST] */
  animationUpdater = (_init_extra_name(this), _init_animationUpdater(this, null));

  /** m_worldTransformUpdater (ITr2WorldTransformUpdaterPtr) [READWRITE, PERSIST] */
  worldTransformUpdater = (_init_extra_animationUpdater(this), _init_worldTransformUpdater(this, null));

  /** m_lod.m_highDetailProxy (Tr2SkinnedObjectLod) [READWRITE, PERSIST, NOTIFY] */
  highDetailModel = (_init_extra_worldTransformUpdater(this), _init_highDetailModel(this, null));

  /** m_lod.m_lowDetailProxy (Tr2SkinnedObjectLod) [READWRITE, PERSIST, NOTIFY] */
  lowDetailModel = (_init_extra_highDetailModel(this), _init_lowDetailModel(this, null));

  /** m_lod.m_mediumDetailProxy (Tr2SkinnedObjectLod) [READWRITE, PERSIST, NOTIFY] */
  mediumDetailModel = (_init_extra_lowDetailModel(this), _init_mediumDetailModel(this, null));

  /** m_numRenderRigBones (unsigned int) [READ] */
  renderRigBoneCount = (_init_extra_mediumDetailModel(this), _init_renderRigBoneCount(this, 0));

  /** m_skinningMatrixCount (unsigned int) [READ] */
  skinningMatrixCount = (_init_extra_renderRigBoneCount(this), _init_skinningMatrixCount(this, 0));

  /** m_useDynamicBounds (bool) [READWRITE] */
  useDynamicBounds = (_init_extra_skinningMatrixCount(this), _init_useDynamicBounds(this, true));

  /** m_useExplicitBounds (bool) [READWRITE, PERSIST, NOTIFY] */
  useExplicitBounds = (_init_extra_useDynamicBounds(this), _init_useExplicitBounds(this, false));

  /** m_estimatedPixelDiameter (float) [READ] */
  estimatedPixelDiameter = (_init_extra_useExplicitBounds(this), _init_estimatedPixelDiameter(this, 0));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_estimatedPixelDiameter(this), _init_display(this, true));

  /** Carbon method GetBoundingBoxInLocalSpace (MAP_METHOD_AND_WRAP). */
  GetBoundingBoxInLocalSpace(...args) {
    throw CjsModel.notImplemented("Tr2SkinnedObject", "GetBoundingBoxInLocalSpace", args);
  }

  /** Carbon method ResetAnimationBindings (MAP_METHOD_AND_WRAP). */
  ResetAnimationBindings(...args) {
    throw CjsModel.notImplemented("Tr2SkinnedObject", "ResetAnimationBindings", args);
  }

  /** Carbon method GetSkeletonTag (MAP_METHOD_AND_WRAP). */
  GetSkeletonTag(...args) {
    throw CjsModel.notImplemented("Tr2SkinnedObject", "GetSkeletonTag", args);
  }

  /** Carbon method GetBoneIndex (MAP_METHOD_AND_WRAP). */
  GetBoneIndex(...args) {
    throw CjsModel.notImplemented("Tr2SkinnedObject", "GetBoneIndex", args);
  }

  /** Carbon method GetBonePosition (MAP_METHOD_AND_WRAP). */
  GetBonePosition(...args) {
    throw CjsModel.notImplemented("Tr2SkinnedObject", "GetBonePosition", args);
  }

  /** Carbon method PrintAllBones (MAP_METHOD_AND_WRAP). */
  PrintAllBones(...args) {
    throw CjsModel.notImplemented("Tr2SkinnedObject", "PrintAllBones", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2SkinnedObject as Tr2SkinnedObject };
//# sourceMappingURL=Tr2SkinnedObject.js.map
