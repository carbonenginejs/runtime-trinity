import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_resPath_, _init_extra_resPath_, _init_model_, _init_extra_model_, _init_grannyRes, _init_extra_grannyRes, _init_eventListener, _init_extra_eventListener, _init_animationEnabled, _init_extra_animationEnabled, _init_debugRenderJointNames, _init_extra_debugRenderJointNames, _init_debugRenderSkeleton, _init_extra_debugRenderSkeleton, _init_boneOffset, _init_extra_boneOffset;

/** Tr2GrannyAnimation (trinityCore) - generated from schema shapeHash 056bad2a.... */
let _Tr2GrannyAnimation;
class Tr2GrannyAnimation extends CjsModel {
  static {
    ({
      e: [_init_resPath_, _init_extra_resPath_, _init_model_, _init_extra_model_, _init_grannyRes, _init_extra_grannyRes, _init_eventListener, _init_extra_eventListener, _init_animationEnabled, _init_extra_animationEnabled, _init_debugRenderJointNames, _init_extra_debugRenderJointNames, _init_debugRenderSkeleton, _init_extra_debugRenderSkeleton, _init_boneOffset, _init_extra_boneOffset, _initProto],
      c: [_Tr2GrannyAnimation, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2GrannyAnimation",
      family: "trinityCore"
    })], [[[io, io.persistOnly, type, type.string], 16, "resPath_"], [[io, io.persistOnly, type, type.string], 16, "model_"], [[io, io.read, void 0, type.objectRef("TriGrannyRes")], 16, "grannyRes"], [[io, io.readwrite, void 0, type.objectRef("IBlueEventListener")], 16, "eventListener"], [[io, io.readwrite, type, type.boolean], 16, "animationEnabled"], [[io, io.readwrite, type, type.boolean], 16, "debugRenderJointNames"], [[io, io.readwrite, type, type.boolean], 16, "debugRenderSkeleton"], [[io, io.read, void 0, type.objectRef("GrannyBoneOffset")], 16, "boneOffset"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayAnimationEx"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddAnimationLayer"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddAnimationLayerAllBones"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddAnimationLayerBone"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSecondaryResPath"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AimBone"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChainAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChainAnimationEx"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearAnimations"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearAnimationLayers"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DisableAimBone"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EndAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAdditiveBlendMode"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLayerWeight"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetSecondaryAnimationName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayLayerAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RemoveAnimationLayerBone"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAnimationNames"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetAdditiveBlendMode"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetLayerControlParam"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetLayerControlParamSkewRate"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetLayerWeight"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TogglePauseAnimations"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boneOffset(this);
  }
  /** m_resPath (std::string) [PERSISTONLY] */
  resPath_ = (_initProto(this), _init_resPath_(this, ""));

  /** m_model (std::string) [PERSISTONLY] */
  model_ = (_init_extra_resPath_(this), _init_model_(this, ""));

  /** m_grannyRes (TriGrannyResPtr) [READ] */
  grannyRes = (_init_extra_model_(this), _init_grannyRes(this, null));

  /** m_eventListener (IBlueEventListenerPtr) [READWRITE] */
  eventListener = (_init_extra_grannyRes(this), _init_eventListener(this, null));

  /** m_animationEnabled (bool) [READWRITE] */
  animationEnabled = (_init_extra_eventListener(this), _init_animationEnabled(this, true));

  /** m_debugRenderJointNames (bool) [READWRITE] */
  debugRenderJointNames = (_init_extra_animationEnabled(this), _init_debugRenderJointNames(this, false));

  /** m_debugRenderSkeleton (bool) [READWRITE] */
  debugRenderSkeleton = (_init_extra_debugRenderJointNames(this), _init_debugRenderSkeleton(this, false));

  /** m_boneOffset (PGrannyBoneOffset) [READ] */
  boneOffset = (_init_extra_debugRenderSkeleton(this), _init_boneOffset(this, null));

  /** Carbon method PlayAnimationEx (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  PlayAnimationEx(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "PlayAnimationEx", args);
  }

  /** Carbon method AddAnimationLayer (MAP_METHOD_AND_WRAP). */
  AddAnimationLayer(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "AddAnimationLayer", args);
  }

  /** Carbon method AddAnimationLayerAllBones (MAP_METHOD_AND_WRAP). */
  AddAnimationLayerAllBones(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "AddAnimationLayerAllBones", args);
  }

  /** Carbon method AddAnimationLayerBone (MAP_METHOD_AND_WRAP). */
  AddAnimationLayerBone(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "AddAnimationLayerBone", args);
  }

  /** Carbon method AddSecondaryResPath (MAP_METHOD_AND_WRAP). */
  AddSecondaryResPath(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "AddSecondaryResPath", args);
  }

  /** Carbon method AimBone (MAP_METHOD_AND_WRAP). */
  AimBone(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "AimBone", args);
  }

  /** Carbon method ChainAnimation (MAP_METHOD_AND_WRAP). */
  ChainAnimation(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "ChainAnimation", args);
  }

  /** Carbon method ChainAnimationEx (MAP_METHOD_AND_WRAP). */
  ChainAnimationEx(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "ChainAnimationEx", args);
  }

  /** Carbon method ClearAnimations (MAP_METHOD_AND_WRAP). */
  ClearAnimations(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "ClearAnimations", args);
  }

  /** Carbon method ClearAnimationLayers (MAP_METHOD_AND_WRAP). */
  ClearAnimationLayers(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "ClearAnimationLayers", args);
  }

  /** Carbon method DisableAimBone (MAP_METHOD_AND_WRAP). */
  DisableAimBone(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "DisableAimBone", args);
  }

  /** Carbon method EndAnimation (MAP_METHOD_AND_WRAP). */
  EndAnimation(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "EndAnimation", args);
  }

  /** Carbon method GetAdditiveBlendMode (MAP_METHOD_AND_WRAP). */
  GetAdditiveBlendMode(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "GetAdditiveBlendMode", args);
  }

  /** Carbon method GetLayerWeight (MAP_METHOD_AND_WRAP). */
  GetLayerWeight(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "GetLayerWeight", args);
  }

  /** Carbon method GetSecondaryAnimationName (MAP_METHOD_AND_WRAP). */
  GetSecondaryAnimationName(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "GetSecondaryAnimationName", args);
  }

  /** Carbon method PlayAnimation -> PlayAnimationOnce (MAP_METHOD_AND_WRAP). */
  PlayAnimation(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "PlayAnimation", args);
  }

  /** Carbon method PlayLayerAnimation -> PlayLayerAnimationByName (MAP_METHOD_AND_WRAP). */
  PlayLayerAnimation(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "PlayLayerAnimation", args);
  }

  /** Carbon method RemoveAnimationLayerBone (MAP_METHOD_AND_WRAP). */
  RemoveAnimationLayerBone(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "RemoveAnimationLayerBone", args);
  }

  /** Carbon method GetAnimationNames (MAP_METHOD_AND_WRAP). */
  GetAnimationNames(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "GetAnimationNames", args);
  }

  /** Carbon method SetAdditiveBlendMode (MAP_METHOD_AND_WRAP). */
  SetAdditiveBlendMode(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "SetAdditiveBlendMode", args);
  }

  /** Carbon method SetLayerControlParam (MAP_METHOD_AND_WRAP). */
  SetLayerControlParam(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "SetLayerControlParam", args);
  }

  /** Carbon method SetLayerControlParamSkewRate (MAP_METHOD_AND_WRAP). */
  SetLayerControlParamSkewRate(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "SetLayerControlParamSkewRate", args);
  }

  /** Carbon method SetLayerWeight (MAP_METHOD_AND_WRAP). */
  SetLayerWeight(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "SetLayerWeight", args);
  }

  /** Carbon method TogglePauseAnimations (MAP_METHOD_AND_WRAP). */
  TogglePauseAnimations(...args) {
    throw CjsModel.notImplemented("Tr2GrannyAnimation", "TogglePauseAnimations", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2GrannyAnimation as Tr2GrannyAnimation };
//# sourceMappingURL=Tr2GrannyAnimation.js.map
