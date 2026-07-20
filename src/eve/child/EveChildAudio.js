// Ported/adapted from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/SpaceObject/Children/EveChildAudio.h
//   trinity/trinity/Eve/SpaceObject/Children/EveChildAudio.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, CjsSchema, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform } from "./EveChildTransform.js";


@type.define({ className: "EveChildAudio", family: "eve/child" })
export class EveChildAudio extends EveChildTransform
{
  @io.notify
  @io.persist
  @type.string
  name = "EveChildAudio";

  @io.notify
  @io.readwrite
  @type.boolean
  mute = false;

  @io.persist
  @type.model("ITr2AudEmitter")
  audioEmitter = null;

  Initialize()
  {
    if (this.audioEmitter) return true;
    const Emitter = CjsSchema.GetConstructor("AudEmitter");
    if (!Emitter) return false;
    this.audioEmitter = new Emitter();
    const position = mat4.getTranslation(vec3.create(), this.worldTransform);
    return this.audioEmitter.Initialize?.(this.name || "audio_object", "", position) !== false;
  }

  @carbon.method
  @impl.adapted
  __init__()
  {
    return this.Initialize();
  }

  @carbon.method
  @impl.implemented
  SetEmitterName(name)
  {
    this.audioEmitter?.SetName?.(String(name));
  }

  GetName()
  {
    return this.name;
  }

  SetName(name)
  {
    this.name = String(name ?? "");
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

  UpdateSyncronous(_updateContext, params = {})
  {
    const parent = params.childParent ?? params.spaceObjectParent ?? null;
    const parentTransform = parent?.GetLocalToWorldTransform?.(mat4.create()) ?? params.localToWorldTransform ?? mat4.create();
    this.UpdateTransform(parentTransform);
    if (this.audioEmitter && !this.mute)
    {
      const position = mat4.getTranslation(vec3.create(), this.worldTransform);
      const rotation = mat4.getRotation(quat.create(), this.worldTransform);
      const front = vec3.transformQuat(vec3.create(), EveChildAudio.FRONT, rotation);
      const top = vec3.transformQuat(vec3.create(), EveChildAudio.TOP, rotation);
      this.audioEmitter.SetPosition?.(front, top, position);
    }
  }

  UpdateAsyncronous(_updateContext, _params)
  {
  }

  UpdateVisibility(_updateContext, _parentTransform, _parentLod)
  {
  }

  GetRenderables(_renderables)
  {
  }

  GetBoundingSphere(_out, _query = 0)
  {
    return false;
  }

  GetLocalToWorldTransform(out = mat4.create())
  {
    return mat4.copy(out, this.worldTransform);
  }

  Setup(_scale, _rotation, _translation, _lowestLodVisible)
  {
  }

  ChangeLOD(_lod)
  {
  }

  static FRONT = Object.freeze([0, 1, 0]);
  static TOP = Object.freeze([0, 0, 1]);
}
