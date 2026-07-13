import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_errorHandler, _init_extra_errorHandler, _init_noiseScale, _init_extra_noiseScale, _init_audio2Listener, _init_extra_audio2Listener, _init_noise, _init_extra_noise, _init_centerOffset, _init_extra_centerOffset, _init_pitch, _init_extra_pitch, _init_yaw, _init_extra_yaw, _init_extraTranslation, _init_extra_extraTranslation, _init_idleSpeed, _init_extra_idleSpeed, _init_noiseDamp, _init_extra_noiseDamp, _init_pos, _init_extra_pos, _init_intr, _init_extra_intr, _init_viewVec, _init_extra_viewVec, _init_rightVec, _init_extra_rightVec, _init_upVec, _init_extra_upVec, _init_rotationAroundParent, _init_extra_rotationAroundParent, _init_interest, _init_extra_interest, _init_rotationOfInterest, _init_extra_rotationOfInterest, _init_fieldOfView, _init_extra_fieldOfView, _init_frontClip, _init_extra_frontClip, _init_backClip, _init_extra_backClip, _init_friction, _init_extra_friction, _init_noiseCurve, _init_extra_noiseCurve, _init_noiseScaleCurve, _init_extra_noiseScaleCurve, _init_noiseDampCurve, _init_extra_noiseDampCurve, _init_maxSpeed, _init_extra_maxSpeed, _init_update, _init_extra_update, _init_zoomCurve, _init_extra_zoomCurve, _init_translationFromParent, _init_extra_translationFromParent, _init_minPitch, _init_extra_minPitch, _init_maxPitch, _init_extra_maxPitch, _init_minYaw, _init_extra_minYaw, _init_maxYaw, _init_extra_maxYaw, _init_parent, _init_extra_parent, _init_idleScale, _init_extra_idleScale, _init_alignment, _init_extra_alignment, _init_useExtraTranslation, _init_extra_useExtraTranslation, _init_projectionMatrix, _init_extra_projectionMatrix, _init_viewMatrix, _init_extra_viewMatrix, _init_idleMove, _init_extra_idleMove;

/** EveCamera (eve) - generated from schema shapeHash 4e547993.... */
let _EveCamera;
class EveCamera extends CjsModel {
  static {
    ({
      e: [_init_errorHandler, _init_extra_errorHandler, _init_noiseScale, _init_extra_noiseScale, _init_audio2Listener, _init_extra_audio2Listener, _init_noise, _init_extra_noise, _init_centerOffset, _init_extra_centerOffset, _init_pitch, _init_extra_pitch, _init_yaw, _init_extra_yaw, _init_extraTranslation, _init_extra_extraTranslation, _init_idleSpeed, _init_extra_idleSpeed, _init_noiseDamp, _init_extra_noiseDamp, _init_pos, _init_extra_pos, _init_intr, _init_extra_intr, _init_viewVec, _init_extra_viewVec, _init_rightVec, _init_extra_rightVec, _init_upVec, _init_extra_upVec, _init_rotationAroundParent, _init_extra_rotationAroundParent, _init_interest, _init_extra_interest, _init_rotationOfInterest, _init_extra_rotationOfInterest, _init_fieldOfView, _init_extra_fieldOfView, _init_frontClip, _init_extra_frontClip, _init_backClip, _init_extra_backClip, _init_friction, _init_extra_friction, _init_noiseCurve, _init_extra_noiseCurve, _init_noiseScaleCurve, _init_extra_noiseScaleCurve, _init_noiseDampCurve, _init_extra_noiseDampCurve, _init_maxSpeed, _init_extra_maxSpeed, _init_update, _init_extra_update, _init_zoomCurve, _init_extra_zoomCurve, _init_translationFromParent, _init_extra_translationFromParent, _init_minPitch, _init_extra_minPitch, _init_maxPitch, _init_extra_maxPitch, _init_minYaw, _init_extra_minYaw, _init_maxYaw, _init_extra_maxYaw, _init_parent, _init_extra_parent, _init_idleScale, _init_extra_idleScale, _init_alignment, _init_extra_alignment, _init_useExtraTranslation, _init_extra_useExtraTranslation, _init_projectionMatrix, _init_extra_projectionMatrix, _init_viewMatrix, _init_extra_viewMatrix, _init_idleMove, _init_extra_idleMove, _initProto],
      c: [_EveCamera, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveCamera",
      family: "eve"
    })], [[[io, io.readwrite, void 0, type.objectRef("IBlueEventListener")], 16, "errorHandler"], [[io, io.persist, type, type.float32], 16, "noiseScale"], [[io, io.readwrite, void 0, type.objectRef("IBluePlacementObserver")], 16, "audio2Listener"], [[io, io.persist, type, type.boolean], 16, "noise"], [[io, io.readwrite, type, type.float32], 16, "centerOffset"], [[io, io.persist, type, type.float32], 16, "pitch"], [[io, io.persist, type, type.float32], 16, "yaw"], [[io, io.readwrite, type, type.vec3], 16, "extraTranslation"], [[io, io.persist, type, type.float32], 16, "idleSpeed"], [[io, io.persist, type, type.float32], 16, "noiseDamp"], [[io, io.persist, type, type.vec3], 16, "pos"], [[io, io.persist, type, type.vec3], 16, "intr"], [[io, io.read, type, type.vec3], 16, "viewVec"], [[io, io.read, type, type.vec3], 16, "rightVec"], [[io, io.read, type, type.vec3], 16, "upVec"], [[io, io.notify, io, io.persist, type, type.quat], 16, "rotationAroundParent"], [[io, io.notify, io, io.readwrite, void 0, type.objectRef("ITriVectorFunction")], 16, "interest"], [[io, io.notify, io, io.persist, type, type.quat], 16, "rotationOfInterest"], [[io, io.persist, type, type.float32], 16, "fieldOfView"], [[io, io.persist, type, type.float32], 16, "frontClip"], [[io, io.persist, type, type.float32], 16, "backClip"], [[io, io.persist, type, type.float32], 16, "friction"], [[io, io.persist, void 0, type.objectRef("ITriScalarFunction")], 16, "noiseCurve"], [[io, io.persist, void 0, type.objectRef("ITriScalarFunction")], 16, "noiseScaleCurve"], [[io, io.persist, void 0, type.objectRef("ITriScalarFunction")], 16, "noiseDampCurve"], [[io, io.persist, type, type.float32], 16, "maxSpeed"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.persist, void 0, type.objectRef("ITriScalarFunction")], 16, "zoomCurve"], [[io, io.persist, type, type.vec3], 16, "translationFromParent"], [[io, io.persist, type, type.float32], 16, "minPitch"], [[io, io.persist, type, type.float32], 16, "maxPitch"], [[io, io.persist, type, type.float32], 16, "minYaw"], [[io, io.persist, type, type.float32], 16, "maxYaw"], [[io, io.readwrite, void 0, type.objectRef("ITriVectorFunction")], 16, "parent"], [[io, io.persist, type, type.float32], 16, "idleScale"], [[io, io.persist, type, type.vec3], 16, "alignment"], [[io, io.readwrite, type, type.boolean], 16, "useExtraTranslation"], [[io, io.readwrite, void 0, type.objectRef("TriProjection")], 16, "projectionMatrix"], [[io, io.read, void 0, type.objectRef("TriView")], 16, "viewMatrix"], [[io, io.persist, type, type.boolean], 16, "idleMove"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Dolly"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "OrbitParent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RotateOnOrbit"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Zoom"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ResetStartTime"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetOrbit"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetRotationOnOrbit"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_idleMove(this);
  }
  /** m_errorListener (IBlueEventListenerPtr) [READWRITE] */
  errorHandler = (_initProto(this), _init_errorHandler(this, null));

  /** m_noiseScale (float) [READWRITE, PERSIST] */
  noiseScale = (_init_extra_errorHandler(this), _init_noiseScale(this, 1));

  /** m_audio2Listener (IBluePlacementObserverPtr) [READWRITE] */
  audio2Listener = (_init_extra_noiseScale(this), _init_audio2Listener(this, null));

  /** m_noise (bool) [READWRITE, PERSIST] */
  noise = (_init_extra_audio2Listener(this), _init_noise(this, false));

  /** m_projectionCenterOffset (float) [READWRITE] */
  centerOffset = (_init_extra_noise(this), _init_centerOffset(this, 0));

  /** m_pitch (float) [READ, PERSIST] */
  pitch = (_init_extra_centerOffset(this), _init_pitch(this, 0));

  /** m_yaw (float) [READ, PERSIST] */
  yaw = (_init_extra_pitch(this), _init_yaw(this, 0));

  /** m_extraParentTranslation (Vector3) [READWRITE] */
  extraTranslation = (_init_extra_yaw(this), _init_extraTranslation(this, vec3.create()));

  /** m_idleSpeed (float) [READWRITE, PERSIST] */
  idleSpeed = (_init_extra_extraTranslation(this), _init_idleSpeed(this, 0.8));

  /** m_noiseDamp (float) [READWRITE, PERSIST] */
  noiseDamp = (_init_extra_idleSpeed(this), _init_noiseDamp(this, 1.1));

  /** m_pos (Vector3) [READ, PERSIST] */
  pos = (_init_extra_noiseDamp(this), _init_pos(this, vec3.create()));

  /** m_intr (Vector3) [READ, PERSIST] */
  intr = (_init_extra_pos(this), _init_intr(this, vec3.create()));

  /** m_viewVec (Vector3) [READ] */
  viewVec = (_init_extra_intr(this), _init_viewVec(this, vec3.create()));

  /** m_rightVec (Vector3) [READ] */
  rightVec = (_init_extra_viewVec(this), _init_rightVec(this, vec3.create()));

  /** m_upVec (Vector3) [READ] */
  upVec = (_init_extra_rightVec(this), _init_upVec(this, vec3.create()));

  /** m_rotationAroundParent (Quaternion) [READWRITE, NOTIFY, PERSIST] */
  rotationAroundParent = (_init_extra_upVec(this), _init_rotationAroundParent(this, quat.create()));

  /** m_interestTranslationCurve (ITriVectorFunctionPtr) [READWRITE, NOTIFY] */
  interest = (_init_extra_rotationAroundParent(this), _init_interest(this, null));

  /** m_rotationOfInterest (Quaternion) [READWRITE, PERSIST, NOTIFY] */
  rotationOfInterest = (_init_extra_interest(this), _init_rotationOfInterest(this, quat.create()));

  /** m_fieldOfView (float) [READWRITE, PERSIST] */
  fieldOfView = (_init_extra_rotationOfInterest(this), _init_fieldOfView(this, 0));

  /** m_frontClip (float) [READWRITE, PERSIST] */
  frontClip = (_init_extra_fieldOfView(this), _init_frontClip(this, 10));

  /** m_backClip (float) [READWRITE, PERSIST] */
  backClip = (_init_extra_frontClip(this), _init_backClip(this, 10000000));

  /** m_friction (float) [READWRITE, PERSIST] */
  friction = (_init_extra_backClip(this), _init_friction(this, 7));

  /** m_noiseCurve (ITriScalarFunctionPtr) [READWRITE, PERSIST] */
  noiseCurve = (_init_extra_friction(this), _init_noiseCurve(this, null));

  /** m_noiseScaleCurve (ITriScalarFunctionPtr) [READWRITE, PERSIST] */
  noiseScaleCurve = (_init_extra_noiseCurve(this), _init_noiseScaleCurve(this, null));

  /** m_noiseDampCurve (ITriScalarFunctionPtr) [READWRITE, PERSIST] */
  noiseDampCurve = (_init_extra_noiseScaleCurve(this), _init_noiseDampCurve(this, null));

  /** m_maxSpeed (float) [READWRITE, PERSIST] */
  maxSpeed = (_init_extra_noiseDampCurve(this), _init_maxSpeed(this, 0.05));

  /** m_update (bool) [READWRITE, PERSIST] */
  update = (_init_extra_maxSpeed(this), _init_update(this, true));

  /** m_zoomCurve (ITriScalarFunctionPtr) [READWRITE, PERSIST] */
  zoomCurve = (_init_extra_update(this), _init_zoomCurve(this, null));

  /** m_translationFromParent.z (Vector3) [READWRITE, PERSIST] */
  translationFromParent = (_init_extra_zoomCurve(this), _init_translationFromParent(this, vec3.fromValues(0, 0, 20)));

  /** m_minPitch (float) [READWRITE, PERSIST] */
  minPitch = (_init_extra_translationFromParent(this), _init_minPitch(this, -1.4));

  /** m_maxPitch (float) [READWRITE, PERSIST] */
  maxPitch = (_init_extra_minPitch(this), _init_maxPitch(this, 1.4));

  /** m_minYaw (float) [READWRITE, PERSIST] */
  minYaw = (_init_extra_maxPitch(this), _init_minYaw(this, 0));

  /** m_maxYaw (float) [READWRITE, PERSIST] */
  maxYaw = (_init_extra_minYaw(this), _init_maxYaw(this, 0));

  /** m_parentTranslationCurve (ITriVectorFunctionPtr) [READWRITE] */
  parent = (_init_extra_maxYaw(this), _init_parent(this, null));

  /** m_idleScale (float) [READWRITE, PERSIST] */
  idleScale = (_init_extra_parent(this), _init_idleScale(this, 2));

  /** m_alignment (Vector3) [READWRITE, PERSIST] */
  alignment = (_init_extra_idleScale(this), _init_alignment(this, vec3.fromValues(0, 1, 0)));

  /** m_useExtraParentTranslation (bool) [READWRITE] */
  useExtraTranslation = (_init_extra_alignment(this), _init_useExtraTranslation(this, false));

  /** m_projectionMatrix (TriProjectionPtr) [READWRITE] */
  projectionMatrix = (_init_extra_useExtraTranslation(this), _init_projectionMatrix(this, null));

  /** m_viewMatrix (TriViewPtr) [READ] */
  viewMatrix = (_init_extra_projectionMatrix(this), _init_viewMatrix(this, null));

  /** m_idleMove (bool) [READWRITE, PERSIST] */
  idleMove = (_init_extra_viewMatrix(this), _init_idleMove(this, false));

  /** Carbon method Dolly (MAP_METHOD_AND_WRAP). */
  Dolly(...args) {
    throw CjsModel.notImplemented("EveCamera", "Dolly", args);
  }

  /** Carbon method OrbitParent (MAP_METHOD_AND_WRAP). */
  OrbitParent(...args) {
    throw CjsModel.notImplemented("EveCamera", "OrbitParent", args);
  }

  /** Carbon method RotateOnOrbit (MAP_METHOD_AND_WRAP). */
  RotateOnOrbit(...args) {
    throw CjsModel.notImplemented("EveCamera", "RotateOnOrbit", args);
  }

  /** Carbon method Zoom (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  Zoom(...args) {
    throw CjsModel.notImplemented("EveCamera", "Zoom", args);
  }

  /** Carbon method ResetStartTime (MAP_METHOD_AND_WRAP). */
  ResetStartTime(...args) {
    throw CjsModel.notImplemented("EveCamera", "ResetStartTime", args);
  }

  /** Carbon method SetOrbit (MAP_METHOD_AND_WRAP). */
  SetOrbit(...args) {
    throw CjsModel.notImplemented("EveCamera", "SetOrbit", args);
  }

  /** Carbon method SetRotationOnOrbit (MAP_METHOD_AND_WRAP). */
  SetRotationOnOrbit(...args) {
    throw CjsModel.notImplemented("EveCamera", "SetRotationOnOrbit", args);
  }
  static {
    _initClass();
  }
}

export { _EveCamera as EveCamera };
//# sourceMappingURL=EveCamera.js.map
