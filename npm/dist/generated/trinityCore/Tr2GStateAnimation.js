import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_resPath_, _init_extra_resPath_, _init_gStateResPath_, _init_extra_gStateResPath_, _init_model_, _init_extra_model_, _init_parameters, _init_extra_parameters, _init_grannyRes, _init_extra_grannyRes, _init_eventListener, _init_extra_eventListener, _init_animationEnabled, _init_extra_animationEnabled, _init_debugRenderJointNames, _init_extra_debugRenderJointNames, _init_debugRenderSkeleton, _init_extra_debugRenderSkeleton;

/** Tr2GStateAnimation (trinityCore) - generated from schema shapeHash 0e108052.... */
let _Tr2GStateAnimation;
class Tr2GStateAnimation extends CjsModel {
  static {
    ({
      e: [_init_resPath_, _init_extra_resPath_, _init_gStateResPath_, _init_extra_gStateResPath_, _init_model_, _init_extra_model_, _init_parameters, _init_extra_parameters, _init_grannyRes, _init_extra_grannyRes, _init_eventListener, _init_extra_eventListener, _init_animationEnabled, _init_extra_animationEnabled, _init_debugRenderJointNames, _init_extra_debugRenderJointNames, _init_debugRenderSkeleton, _init_extra_debugRenderSkeleton, _initProto],
      c: [_Tr2GStateAnimation, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2GStateAnimation",
      family: "trinityCore"
    })], [[[io, io.persistOnly, type, type.string], 16, "resPath_"], [[io, io.persistOnly, type, type.string], 16, "gStateResPath_"], [[io, io.persistOnly, type, type.string], 16, "model_"], [[io, io.persist, void 0, type.list("Tr2GStateParameter")], 16, "parameters"], [[io, io.read, void 0, type.objectRef("TriGrannyRes")], 16, "grannyRes"], [[io, io.readwrite, void 0, type.objectRef("IBlueEventListener")], 16, "eventListener"], [[io, io.readwrite, type, type.boolean], 16, "animationEnabled"], [[io, io.readwrite, type, type.boolean], 16, "debugRenderJointNames"], [[io, io.readwrite, type, type.boolean], 16, "debugRenderSkeleton"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearScrub"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ForceChangeToState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetActiveMachineElementName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAnimationTime"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetGStateAnimFileRefPaths"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetParameter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetParameterByName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetParameterIndexByName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetParameterRange"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetParameters"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetScrubOffset"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetStartStateIdx"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTopLevelNodeNames"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTopLevelParameterNodeNames"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTopLevelStateNodeNames"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "InstantiateCharacter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsFullyLoaded"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "LoadModelFromGstate"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayFromScrub"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RequestChangeToState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RequestParameter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RequestParameterByName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ResetParamsToDefault"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetParameter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetScrubOffset"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetStartStateByName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetStartStateIdx"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartScrub"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartTransitionByName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StopPlayFromScrub"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TogglePauseAnimations"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_debugRenderSkeleton(this);
  }
  /** m_resPath (std::string) [PERSISTONLY] */
  resPath_ = (_initProto(this), _init_resPath_(this, ""));

  /** m_gStateResPath (std::string) [PERSISTONLY] */
  gStateResPath_ = (_init_extra_resPath_(this), _init_gStateResPath_(this, ""));

  /** m_model (std::string) [PERSISTONLY] */
  model_ = (_init_extra_gStateResPath_(this), _init_model_(this, ""));

  /** m_gStateParameterList (PTr2GStateParameterVector) [READ, PERSIST] */
  parameters = (_init_extra_model_(this), _init_parameters(this, []));

  /** m_grannyRes (TriGrannyResPtr) [READ] */
  grannyRes = (_init_extra_parameters(this), _init_grannyRes(this, null));

  /** m_eventListener (IBlueEventListenerPtr) [READWRITE] */
  eventListener = (_init_extra_grannyRes(this), _init_eventListener(this, null));

  /** m_animationEnabled (bool) [READWRITE] */
  animationEnabled = (_init_extra_eventListener(this), _init_animationEnabled(this, true));

  /** m_debugRenderJointNames (bool) [READWRITE] */
  debugRenderJointNames = (_init_extra_animationEnabled(this), _init_debugRenderJointNames(this, false));

  /** m_debugRenderSkeleton (bool) [READWRITE] */
  debugRenderSkeleton = (_init_extra_debugRenderJointNames(this), _init_debugRenderSkeleton(this, false));

  /** Carbon method ClearScrub (MAP_METHOD_AND_WRAP). */
  ClearScrub(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "ClearScrub", args);
  }

  /** Carbon method ForceChangeToState (MAP_METHOD_AND_WRAP). */
  ForceChangeToState(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "ForceChangeToState", args);
  }

  /** Carbon method GetActiveMachineElementName (MAP_METHOD_AND_WRAP). */
  GetActiveMachineElementName(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetActiveMachineElementName", args);
  }

  /** Carbon method GetAnimationTime (MAP_METHOD_AND_WRAP). */
  GetAnimationTime(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetAnimationTime", args);
  }

  /** Carbon method GetGStateAnimFileRefPaths (MAP_METHOD_AND_WRAP). */
  GetGStateAnimFileRefPaths(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetGStateAnimFileRefPaths", args);
  }

  /** Carbon method GetParameter (MAP_METHOD_AND_WRAP). */
  GetParameter(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetParameter", args);
  }

  /** Carbon method GetParameterByName (MAP_METHOD_AND_WRAP). */
  GetParameterByName(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetParameterByName", args);
  }

  /** Carbon method GetParameterIndexByName (MAP_METHOD_AND_WRAP). */
  GetParameterIndexByName(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetParameterIndexByName", args);
  }

  /** Carbon method GetParameterRange (MAP_METHOD_AND_WRAP). */
  GetParameterRange(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetParameterRange", args);
  }

  /** Carbon method GetParameters (MAP_METHOD_AND_WRAP). */
  GetParameters(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetParameters", args);
  }

  /** Carbon method GetScrubOffset (MAP_METHOD_AND_WRAP). */
  GetScrubOffset(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetScrubOffset", args);
  }

  /** Carbon method GetStartStateIdx (MAP_METHOD_AND_WRAP). */
  GetStartStateIdx(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetStartStateIdx", args);
  }

  /** Carbon method GetTopLevelNodeNames (MAP_METHOD_AND_WRAP). */
  GetTopLevelNodeNames(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetTopLevelNodeNames", args);
  }

  /** Carbon method GetTopLevelParameterNodeNames (MAP_METHOD_AND_WRAP). */
  GetTopLevelParameterNodeNames(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetTopLevelParameterNodeNames", args);
  }

  /** Carbon method GetTopLevelStateNodeNames (MAP_METHOD_AND_WRAP). */
  GetTopLevelStateNodeNames(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "GetTopLevelStateNodeNames", args);
  }

  /** Carbon method InstantiateCharacter (MAP_METHOD_AND_WRAP). */
  InstantiateCharacter(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "InstantiateCharacter", args);
  }

  /** Carbon method IsFullyLoaded (MAP_METHOD_AND_WRAP). */
  IsFullyLoaded(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "IsFullyLoaded", args);
  }

  /** Carbon method LoadModelFromGstate (MAP_METHOD_AND_WRAP). */
  LoadModelFromGstate(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "LoadModelFromGstate", args);
  }

  /** Carbon method PlayFromScrub (MAP_METHOD_AND_WRAP). */
  PlayFromScrub(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "PlayFromScrub", args);
  }

  /** Carbon method RequestChangeToState (MAP_METHOD_AND_WRAP). */
  RequestChangeToState(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "RequestChangeToState", args);
  }

  /** Carbon method RequestParameter (MAP_METHOD_AND_WRAP). */
  RequestParameter(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "RequestParameter", args);
  }

  /** Carbon method RequestParameterByName (MAP_METHOD_AND_WRAP). */
  RequestParameterByName(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "RequestParameterByName", args);
  }

  /** Carbon method ResetParamsToDefault (MAP_METHOD_AND_WRAP). */
  ResetParamsToDefault(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "ResetParamsToDefault", args);
  }

  /** Carbon method SetParameter (MAP_METHOD_AND_WRAP). */
  SetParameter(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "SetParameter", args);
  }

  /** Carbon method SetScrubOffset (MAP_METHOD_AND_WRAP). */
  SetScrubOffset(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "SetScrubOffset", args);
  }

  /** Carbon method SetStartStateByName (MAP_METHOD_AND_WRAP). */
  SetStartStateByName(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "SetStartStateByName", args);
  }

  /** Carbon method SetStartStateIdx (MAP_METHOD_AND_WRAP). */
  SetStartStateIdx(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "SetStartStateIdx", args);
  }

  /** Carbon method StartScrub (MAP_METHOD_AND_WRAP). */
  StartScrub(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "StartScrub", args);
  }

  /** Carbon method StartTransitionByName (MAP_METHOD_AND_WRAP). */
  StartTransitionByName(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "StartTransitionByName", args);
  }

  /** Carbon method StopPlayFromScrub (MAP_METHOD_AND_WRAP). */
  StopPlayFromScrub(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "StopPlayFromScrub", args);
  }

  /** Carbon method TogglePauseAnimations (MAP_METHOD_AND_WRAP). */
  TogglePauseAnimations(...args) {
    throw CjsModel.notImplemented("Tr2GStateAnimation", "TogglePauseAnimations", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2GStateAnimation as Tr2GStateAnimation };
//# sourceMappingURL=Tr2GStateAnimation.js.map
