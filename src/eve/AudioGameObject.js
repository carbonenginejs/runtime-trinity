// Ported/adapted from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/AudioGameObject.h
//   trinity/trinity/Eve/AudioGameObject.cpp
import { mat4 } from "@carbonenginejs/runtime-utils/mat4";
import { quat } from "@carbonenginejs/runtime-utils/quat";
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { vec4 } from "@carbonenginejs/runtime-utils/vec4";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, CjsSchema, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({ className: "AudioGameObject", family: "eve" })
export class AudioGameObject extends CjsModel
{
  #worldTransform = mat4.create();

  @io.persist
  @type.objectRef("ITr2AudEmitter")
  audioEmitter = null;

  @io.persist
  @type.model("ITriVectorFunction")
  translationCurve = null;

  @io.persist
  @type.model("ITriQuaternionFunction")
  rotationCurve = null;

  @io.persist
  @type.list("Tr2ExternalParameter")
  externalParameters = [];

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.vec3
  translation = vec3.create();

  @io.notify
  @io.readwrite
  @type.boolean
  mute = false;

  @io.persist
  @type.string
  name = "";

  @io.readwrite
  @type.boolean
  display = true;

  Initialize()
  {
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

  @carbon.method
  @impl.adapted
  __init__()
  {
    return this.Initialize();
  }

  @carbon.method
  @impl.implemented
  GetAudioEmitter()
  {
    return this.audioEmitter;
  }

  @carbon.method
  @impl.implemented
  SetEmitterName(name)
  {
    this.audioEmitter?.SetName?.(String(name));
  }

  @carbon.method
  @impl.implemented
  PlayAudioEvent(eventName)
  {
    if (!this.audioEmitter || !eventName) return 0;
    return this.audioEmitter.SendEvent?.(String(eventName)) ?? 0;
  }

  OnModified(value = null)
  {
    if (value === "mute" || value === this.mute)
    {
      this.audioEmitter?.[this.mute ? "Mute" : "Unmute"]?.();
    }
    if (value === "name" || value === this.name)
    {
      this.SetEmitterName(this.name || "audio_object");
    }
    return true;
  }

  UpdateSyncronous(updateContext = null)
  {
    const time = updateContext?.GetTime?.() ?? updateContext?.time ?? 0;
    this.UpdateWorldTransform(time);
    if (this.audioEmitter && !this.mute)
    {
      this.#SetEmitterPosition(this.GetWorldPosition(vec3.create()));
    }
  }

  UpdateAsyncronous(_updateContext = null)
  {
  }

  UpdateVisibility(_updateContext, _parentTransform)
  {
  }

  GetRenderables(_renderables, _impostors = null)
  {
  }

  GetBoundingSphere(out = vec4.create())
  {
    const position = this.GetWorldPosition(vec3.create());
    vec4.set(out, position[0], position[1], position[2], 1);
    return true;
  }

  GetLocalToWorldTransform(out = mat4.create())
  {
    return mat4.copy(out, this.#worldTransform);
  }

  GetWorldPosition(out = vec3.create())
  {
    return mat4.getTranslation(out, this.#worldTransform);
  }

  GetWorldRotation(out = quat.create())
  {
    return quat.normalize(out, mat4.getRotation(out, this.#worldTransform));
  }

  GetLocalBoundingBox(outMin, outMax)
  {
    vec3.set(outMin, -1, -1, -1);
    vec3.set(outMax, 1, 1, 1);
    return true;
  }

  UpdateWorldTransform(time)
  {
    const translation = vec3.clone(this.translation);
    const rotation = quat.clone(this.rotation);
    this.translationCurve?.Update?.(translation, time);
    this.rotationCurve?.Update?.(rotation, time);
    mat4.fromRotationTranslation(this.#worldTransform, rotation, translation);
    return this.#worldTransform;
  }

  #SetEmitterPosition(position)
  {
    const rotation = this.GetWorldRotation(quat.create());
    const front = vec3.transformQuat(vec3.create(), AudioGameObject.FRONT, rotation);
    const top = vec3.transformQuat(vec3.create(), AudioGameObject.TOP, rotation);
    this.audioEmitter?.SetPosition?.(front, top, position);
  }

  static FRONT = Object.freeze([0, 1, 0]);
  static TOP = Object.freeze([0, 0, 1]);
}
