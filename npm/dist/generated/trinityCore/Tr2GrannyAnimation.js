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
    throw new Error("Tr2GrannyAnimation.PlayAnimationEx is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddAnimationLayer (MAP_METHOD_AND_WRAP). */
  AddAnimationLayer(...args) {
    throw new Error("Tr2GrannyAnimation.AddAnimationLayer is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddAnimationLayerAllBones (MAP_METHOD_AND_WRAP). */
  AddAnimationLayerAllBones(...args) {
    throw new Error("Tr2GrannyAnimation.AddAnimationLayerAllBones is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddAnimationLayerBone (MAP_METHOD_AND_WRAP). */
  AddAnimationLayerBone(...args) {
    throw new Error("Tr2GrannyAnimation.AddAnimationLayerBone is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddSecondaryResPath (MAP_METHOD_AND_WRAP). */
  AddSecondaryResPath(...args) {
    throw new Error("Tr2GrannyAnimation.AddSecondaryResPath is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AimBone (MAP_METHOD_AND_WRAP). */
  AimBone(...args) {
    throw new Error("Tr2GrannyAnimation.AimBone is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChainAnimation (MAP_METHOD_AND_WRAP). */
  ChainAnimation(...args) {
    throw new Error("Tr2GrannyAnimation.ChainAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChainAnimationEx (MAP_METHOD_AND_WRAP). */
  ChainAnimationEx(...args) {
    throw new Error("Tr2GrannyAnimation.ChainAnimationEx is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ClearAnimations (MAP_METHOD_AND_WRAP). */
  ClearAnimations(...args) {
    throw new Error("Tr2GrannyAnimation.ClearAnimations is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ClearAnimationLayers (MAP_METHOD_AND_WRAP). */
  ClearAnimationLayers(...args) {
    throw new Error("Tr2GrannyAnimation.ClearAnimationLayers is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DisableAimBone (MAP_METHOD_AND_WRAP). */
  DisableAimBone(...args) {
    throw new Error("Tr2GrannyAnimation.DisableAimBone is not implemented in CarbonEngineJS.");
  }

  /** Carbon method EndAnimation (MAP_METHOD_AND_WRAP). */
  EndAnimation(...args) {
    throw new Error("Tr2GrannyAnimation.EndAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetAdditiveBlendMode (MAP_METHOD_AND_WRAP). */
  GetAdditiveBlendMode(...args) {
    throw new Error("Tr2GrannyAnimation.GetAdditiveBlendMode is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetLayerWeight (MAP_METHOD_AND_WRAP). */
  GetLayerWeight(...args) {
    throw new Error("Tr2GrannyAnimation.GetLayerWeight is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetSecondaryAnimationName (MAP_METHOD_AND_WRAP). */
  GetSecondaryAnimationName(...args) {
    throw new Error("Tr2GrannyAnimation.GetSecondaryAnimationName is not implemented in CarbonEngineJS.");
  }

  /** Carbon method PlayAnimation -> PlayAnimationOnce (MAP_METHOD_AND_WRAP). */
  PlayAnimation(...args) {
    throw new Error("Tr2GrannyAnimation.PlayAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method PlayLayerAnimation -> PlayLayerAnimationByName (MAP_METHOD_AND_WRAP). */
  PlayLayerAnimation(...args) {
    throw new Error("Tr2GrannyAnimation.PlayLayerAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method RemoveAnimationLayerBone (MAP_METHOD_AND_WRAP). */
  RemoveAnimationLayerBone(...args) {
    throw new Error("Tr2GrannyAnimation.RemoveAnimationLayerBone is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetAnimationNames (MAP_METHOD_AND_WRAP). */
  GetAnimationNames(...args) {
    throw new Error("Tr2GrannyAnimation.GetAnimationNames is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetAdditiveBlendMode (MAP_METHOD_AND_WRAP). */
  SetAdditiveBlendMode(...args) {
    throw new Error("Tr2GrannyAnimation.SetAdditiveBlendMode is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetLayerControlParam (MAP_METHOD_AND_WRAP). */
  SetLayerControlParam(...args) {
    throw new Error("Tr2GrannyAnimation.SetLayerControlParam is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetLayerControlParamSkewRate (MAP_METHOD_AND_WRAP). */
  SetLayerControlParamSkewRate(...args) {
    throw new Error("Tr2GrannyAnimation.SetLayerControlParamSkewRate is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetLayerWeight (MAP_METHOD_AND_WRAP). */
  SetLayerWeight(...args) {
    throw new Error("Tr2GrannyAnimation.SetLayerWeight is not implemented in CarbonEngineJS.");
  }

  /** Carbon method TogglePauseAnimations (MAP_METHOD_AND_WRAP). */
  TogglePauseAnimations(...args) {
    throw new Error("Tr2GrannyAnimation.TogglePauseAnimations is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2GrannyAnimation as Tr2GrannyAnimation };
//# sourceMappingURL=Tr2GrannyAnimation.js.map
