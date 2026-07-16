import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_audioEmitter, _init_extra_audioEmitter, _init_translationCurve, _init_extra_translationCurve, _init_rotationCurve, _init_extra_rotationCurve, _init_externalParameters, _init_extra_externalParameters, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_mute, _init_extra_mute, _init_name, _init_extra_name, _init_display, _init_extra_display;

/** AudioGameObject (eve) - generated from schema shapeHash fa60c259.... */
let _AudioGameObject;
class AudioGameObject extends CjsModel {
  static {
    ({
      e: [_init_audioEmitter, _init_extra_audioEmitter, _init_translationCurve, _init_extra_translationCurve, _init_rotationCurve, _init_extra_rotationCurve, _init_externalParameters, _init_extra_externalParameters, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_mute, _init_extra_mute, _init_name, _init_extra_name, _init_display, _init_extra_display, _initProto],
      c: [_AudioGameObject, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "AudioGameObject",
      family: "eve"
    })], [[[io, io.persist, void 0, type.objectRef("ITr2AudEmitter")], 16, "audioEmitter"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "translationCurve"], [[io, io.persist, void 0, type.model("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAudioEmitter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayAudioEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetEmitterName"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_display(this);
  }
  /** m_audioEmitter (ITr2AudEmitterPtr) [READWRITE, PERSIST] */
  audioEmitter = (_initProto(this), _init_audioEmitter(this, null));

  /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = (_init_extra_audioEmitter(this), _init_translationCurve(this, null));

  /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  rotationCurve = (_init_extra_translationCurve(this), _init_rotationCurve(this, null));

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  externalParameters = (_init_extra_rotationCurve(this), _init_externalParameters(this, []));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_externalParameters(this), _init_rotation(this, quat.create()));

  /** m_translation (Vector3) [READWRITE, PERSIST] */
  translation = (_init_extra_rotation(this), _init_translation(this, vec3.create()));

  /** m_mute (bool) [READWRITE, NOTIFY] */
  mute = (_init_extra_translation(this), _init_mute(this, false));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_mute(this), _init_name(this, ""));

  /** m_display (bool) [READWRITE] */
  display = (_init_extra_name(this), _init_display(this, true));

  /** Carbon method GetAudioEmitter (MAP_METHOD_AND_WRAP). */
  GetAudioEmitter(...args) {
    throw new Error("AudioGameObject.GetAudioEmitter is not implemented in CarbonEngineJS.");
  }

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP). */
  __init__(...args) {
    throw new Error("AudioGameObject.__init__ is not implemented in CarbonEngineJS.");
  }

  /** Carbon method PlayAudioEvent (MAP_METHOD_AND_WRAP). */
  PlayAudioEvent(...args) {
    throw new Error("AudioGameObject.PlayAudioEvent is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetEmitterName (MAP_METHOD_AND_WRAP). */
  SetEmitterName(...args) {
    throw new Error("AudioGameObject.SetEmitterName is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _AudioGameObject as AudioGameObject };
//# sourceMappingURL=AudioGameObject.js.map
