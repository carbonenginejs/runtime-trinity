// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildContainer.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildContainer.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildContainer_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform, applyTransformModifiers } from "./EveChildTransform.js";
import { Origin } from "../../generated/eve/child/enums.js";


@type.define({ className: "EveChildContainer", family: "eve/child" })
export class EveChildContainer extends EveChildTransform
{
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("DisplayQualityModifier")
  displayFilter = 5;

  @io.persist
  @type.list("IEveSpaceObjectChild")
  objects = [];

  @io.persist
  @type.list("IEveChildTransformModifier")
  transformModifiers = [];

  @io.persist
  @type.list("TriCurveSet")
  curveSets = [];

  @io.read
  @type.mat4
  worldTransform = mat4.create();

  @io.notify
  @io.readwrite
  @type.boolean
  mute = false;

  @io.notify
  @io.persist
  @type.boolean
  display = true;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.vec3
  translation = vec3.create();

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @io.persist
  @type.mat4
  localTransform = mat4.create();

  @io.persist
  @type.boolean
  staticTransform = false;

  @io.persist
  @type.boolean
  alwaysOn = false;

  @io.persist
  @type.boolean
  updateOnDisplay = true;

  @io.persist
  @type.list("IEveSpaceObjectAttachment")
  attachments = [];

  @io.persist
  @type.list("TriObserverLocal")
  observers = [];

  @io.persist
  @type.list("IEveFxAttribute")
  fxAttributes = [];

  @io.persist
  @type.list("Tr2Light")
  lights = [];

  @io.persist
  @type.list("ITr2Controller")
  controllers = [];

  @io.persist
  @type.objectRef("EveChildInheritProperties")
  inheritProperties = null;

  @io.persist
  @type.boolean
  useSRT = true;

  @io.persist
  @type.boolean
  useStaticRotation = false;

  @io.persist
  @type.boolean
  useStaticScale = false;

  // SOF-authored placement values; persisted so the values interchange
  // reproduces Carbon's hidden container placement state.
  @io.persist
  @type.objectRef("ITr2GrannyAnimationOwner")
  animationOwner = null;

  @io.persist
  @type.int32
  @schema.enum("Origin")
  origin = 0;

  @io.persist
  @type.boolean
  isPlacementRoot = false;

  #controllerVariables = new Map();

  @carbon.method
  @impl.adapted
  Initialize()
  {
    for (const controller of this.controllers)
    {
      if (!controller?.IsLinked?.())
      {
        controller?.Link?.(this);
      }
    }
    return true;
  }

  @carbon.method
  @impl.implemented
  Setup(scale = null, rotation = null, translation = null, lowestLodVisible = null)
  {
    return super.Setup(scale, rotation, translation, lowestLodVisible);
  }

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name ?? "");
  }

  @carbon.method
  @impl.implemented
  SetOrigin(origin)
  {
    this.origin = Number(origin) | 0;
  }

  @carbon.method
  @impl.implemented
  SetAlwaysOn(alwaysOn)
  {
    this.alwaysOn = !!alwaysOn;
  }

  @carbon.method
  @impl.implemented
  IsAlwaysOn()
  {
    return this.alwaysOn;
  }

  @carbon.method
  @impl.implemented
  SetDisplayQualityModifier(filter)
  {
    this.displayFilter = Number(filter) | 0;
  }

  @carbon.method
  @impl.implemented
  SetMute(mute)
  {
    const next = !!mute;
    if (next !== this.mute)
    {
      this.mute = next;
      this.MuteChildren();
    }
  }

  @carbon.method
  @impl.implemented
  MuteChildren()
  {
    for (const child of this.objects)
    {
      child?.SetMute?.(this.mute);
    }
    for (const observer of this.observers)
    {
      observer?.SetMute?.(this.mute);
    }
  }

  @carbon.method
  @impl.implemented
  AddTransformModifier(modifier)
  {
    this.transformModifiers.push(modifier);
  }

  @carbon.method
  @impl.implemented
  AddObserver(observer)
  {
    this.observers.push(observer);
  }

  @carbon.method
  @impl.adapted
  AddController(controller)
  {
    this.controllers.push(controller);
    controller?.Link?.(this);
    for (const [name, value] of this.#controllerVariables)
    {
      controller?.SetVariable?.(name, value);
    }
  }

  @carbon.method
  @impl.implemented
  SetControllerVariable(name, value)
  {
    const key = String(name ?? "");
    const next = Number(value);
    this.#controllerVariables.set(key, next);
    for (const controller of this.controllers)
    {
      controller?.SetVariable?.(key, next);
    }
    for (const child of this.objects)
    {
      child?.SetControllerVariable?.(key, next);
    }
  }

  @carbon.method
  @impl.implemented
  HandleControllerEvent(name)
  {
    const eventName = String(name ?? "");
    for (const controller of this.controllers)
    {
      controller?.HandleEvent?.(eventName);
    }
    for (const child of this.objects)
    {
      child?.HandleControllerEvent?.(eventName);
    }
  }

  @carbon.method
  @impl.implemented
  StartControllers()
  {
    for (const controller of this.controllers)
    {
      controller?.Start?.();
    }
    for (const child of this.objects)
    {
      child?.StartControllers?.();
    }
  }

  @carbon.method
  @impl.implemented
  SetProceduralContainerVariable(name, value)
  {
    for (const child of this.objects)
    {
      child?.SetProceduralContainerVariable?.(name, value);
    }
  }

  @carbon.method
  @impl.implemented
  GetEffectChildByName(name)
  {
    const target = String(name ?? "");
    for (const child of this.objects)
    {
      if ((child?.GetName?.() ?? child?.name ?? "") === target)
      {
        return child;
      }
    }
    return null;
  }

  @carbon.method
  @impl.adapted
  AddToEffectChildrenList(child)
  {
    this.objects.push(child);
    for (const [name, value] of this.#controllerVariables)
    {
      child?.SetControllerVariable?.(name, value);
    }
    return child;
  }

  @carbon.method
  @impl.implemented
  RemoveFromEffectChildrenList(child)
  {
    const index = this.objects.indexOf(child);
    if (index !== -1)
    {
      this.objects.splice(index, 1);
      return true;
    }
    return false;
  }

  @carbon.method
  @impl.implemented
  SetShaderOption(name, value)
  {
    for (const child of this.objects)
    {
      child?.SetShaderOption?.(name, value);
    }
    for (const attachment of this.attachments)
    {
      attachment?.SetShaderOption?.(name, value);
    }
  }

  @carbon.method
  @impl.implemented
  SetAnimationOwner(animationOwner)
  {
    this.animationOwner = animationOwner ?? null;
  }

  @carbon.method
  @impl.implemented
  SetIsPlacementRoot(isPlacementRoot)
  {
    this.isPlacementRoot = !!isPlacementRoot;
  }

  @carbon.method
  @impl.implemented
  AddAttachment(attachment)
  {
    this.attachments.push(attachment);
  }

  @carbon.method
  @impl.implemented
  ClearAttachments()
  {
    this.attachments.length = 0;
  }

  @carbon.method
  @impl.implemented
  Empty()
  {
    return this.objects.length === 0 &&
      this.lights.length === 0 &&
      this.attachments.length === 0 &&
      this.controllers.length === 0 &&
      this.curveSets.length === 0 &&
      this.transformModifiers.length === 0 &&
      this.observers.length === 0;
  }

  /**
   * Per-frame async update: rebuild the world transform from the parent, tick
   * this container's controllers, then fold the transform modifiers over the
   * world transform. Ports EveChildContainer::DoUpdateAsyncronous (Carbon);
   * @impl.adapted because the task-group dispatch wrapper and the Granny
   * bone-list override are not modelled yet (see note below).
   * @param {Object} updateContext - frame context (EveUpdateContext), threaded to modifiers
   * @param {EveChildUpdateParams} params - localToWorldTransform + boneCount/bones
   * @returns {Float32Array} worldTransform
   */
  @carbon.method
  @carbon.contextual(["camera"])
  @impl.adapted
  UpdateAsyncronous(updateContext, params)
  {
    const parentTransform = params?.localToWorldTransform;

    if (parentTransform && parentTransform.length === 16)
    {
      this.UpdateTransform(parentTransform);
    }

    const frequency = params?.controllerUpdateFrequency ?? 0.5;
    for (const controller of this.controllers)
    {
      controller?.Update?.(frequency);
    }

    // Carbon's DoUpdateAsyncronous overrides boneCount/bones from this
    // container's own animation controller here (Tr2GrannyAnimationUtils::
    // GetBoneList) before folding modifiers. Deferred until the Granny bone-list
    // API and the bone-consuming EveChildModifierAttachToBone are ported; no
    // currently-ported modifier reads bones.
    return applyTransformModifiers(
      this,
      updateContext,
      params?.boneCount ?? 0,
      params?.bones ?? null
    );
  }

  static DisplayQualityModifier = Object.freeze({
    ONLY_REFLECTIONS: 6,
    SHADER_ALL: 5,
    SHADER_HIGHMID: 3,
    SHADER_LOWMID: 1,
    SHADER_HIGH: 4,
    SHADER_MED: 2,
    SHADER_LOW: 0
  });

  static Origin = Origin;

}
