import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl, CjsSchema } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_audioEmitter, _init_extra_audioEmitter, _init_translationCurve, _init_extra_translationCurve, _init_rotationCurve, _init_extra_rotationCurve, _init_externalParameters, _init_extra_externalParameters, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_mute, _init_extra_mute, _init_name, _init_extra_name, _init_display, _init_extra_display;
let _AudioGameObject;
new class extends _identity {
  static [class AudioGameObject extends CjsModel {
    static {
      ({
        e: [_init_audioEmitter, _init_extra_audioEmitter, _init_translationCurve, _init_extra_translationCurve, _init_rotationCurve, _init_extra_rotationCurve, _init_externalParameters, _init_extra_externalParameters, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_mute, _init_extra_mute, _init_name, _init_extra_name, _init_display, _init_extra_display, _initProto],
        c: [_AudioGameObject, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "AudioGameObject",
        family: "eve"
      })], [[[io, io.persist, void 0, type.objectRef("ITr2AudEmitter")], 16, "audioEmitter"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "translationCurve"], [[io, io.persist, void 0, type.model("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[carbon, carbon.method, impl, impl.adapted], 18, "__init__"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetAudioEmitter"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetEmitterName"], [[carbon, carbon.method, impl, impl.implemented], 18, "PlayAudioEvent"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_display(this);
    }
    #worldTransform = (_initProto(this), mat4.create());
    audioEmitter = _init_audioEmitter(this, null);
    translationCurve = (_init_extra_audioEmitter(this), _init_translationCurve(this, null));
    rotationCurve = (_init_extra_translationCurve(this), _init_rotationCurve(this, null));
    externalParameters = (_init_extra_rotationCurve(this), _init_externalParameters(this, []));
    rotation = (_init_extra_externalParameters(this), _init_rotation(this, quat.create()));
    translation = (_init_extra_rotation(this), _init_translation(this, vec3.create()));
    mute = (_init_extra_translation(this), _init_mute(this, false));
    name = (_init_extra_mute(this), _init_name(this, ""));
    display = (_init_extra_name(this), _init_display(this, true));
    Initialize() {
      if (this.audioEmitter) return true;
      const Emitter = CjsSchema.GetConstructor("AudEmitter");
      if (!Emitter) return false;
      this.audioEmitter = new Emitter();
      this.UpdateWorldTransform(0);
      const position = this.GetWorldPosition(vec3.create());
      const initialized = this.audioEmitter.Initialize?.(this.name || "audio_object", "", position);
      this.#SetEmitterPosition(position);
      return initialized !== false;
    }
    __init__() {
      return this.Initialize();
    }
    GetAudioEmitter() {
      return this.audioEmitter;
    }
    SetEmitterName(name) {
      this.audioEmitter?.SetName?.(String(name));
    }
    PlayAudioEvent(eventName) {
      if (!this.audioEmitter || !eventName) return 0;
      return this.audioEmitter.SendEvent?.(String(eventName)) ?? 0;
    }
    OnModified(value = null) {
      if (value === "mute" || value === this.mute) {
        this.audioEmitter?.[this.mute ? "Mute" : "Unmute"]?.();
      }
      if (value === "name" || value === this.name) {
        this.SetEmitterName(this.name || "audio_object");
      }
      return true;
    }
    UpdateSyncronous(updateContext = null) {
      const time = updateContext?.GetTime?.() ?? updateContext?.time ?? 0;
      this.UpdateWorldTransform(time);
      if (this.audioEmitter && !this.mute) {
        this.#SetEmitterPosition(this.GetWorldPosition(vec3.create()));
      }
    }
    UpdateAsyncronous(_updateContext = null) {}
    UpdateVisibility(_updateContext, _parentTransform) {}
    GetRenderables(_renderables, _impostors = null) {}
    GetBoundingSphere(out = vec4.create()) {
      const position = this.GetWorldPosition(vec3.create());
      vec4.set(out, position[0], position[1], position[2], 1);
      return true;
    }
    GetLocalToWorldTransform(out = mat4.create()) {
      return mat4.copy(out, this.#worldTransform);
    }
    GetWorldPosition(out = vec3.create()) {
      return mat4.getTranslation(out, this.#worldTransform);
    }
    GetWorldRotation(out = quat.create()) {
      return quat.normalize(out, mat4.getRotation(out, this.#worldTransform));
    }
    GetLocalBoundingBox(outMin, outMax) {
      vec3.set(outMin, -1, -1, -1);
      vec3.set(outMax, 1, 1, 1);
      return true;
    }
    UpdateWorldTransform(time) {
      const translation = vec3.clone(this.translation);
      const rotation = quat.clone(this.rotation);
      this.translationCurve?.Update?.(translation, time);
      this.rotationCurve?.Update?.(rotation, time);
      mat4.fromRotationTranslation(this.#worldTransform, rotation, translation);
      return this.#worldTransform;
    }
    #SetEmitterPosition(position) {
      const rotation = this.GetWorldRotation(quat.create());
      const front = vec3.transformQuat(vec3.create(), _AudioGameObject.FRONT, rotation);
      const top = vec3.transformQuat(vec3.create(), _AudioGameObject.TOP, rotation);
      this.audioEmitter?.SetPosition?.(front, top, position);
    }
  }];
  FRONT = Object.freeze([0, 1, 0]);
  TOP = Object.freeze([0, 0, 1]);
  constructor() {
    super(_AudioGameObject), _initClass();
  }
}();

export { _AudioGameObject as AudioGameObject };
//# sourceMappingURL=AudioGameObject.js.map
