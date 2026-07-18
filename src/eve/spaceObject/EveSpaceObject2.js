// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveSpaceObject2.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveSpaceObject2.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveSpaceObject2_Blue.cpp
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { EveEntity } from "../../generated/eve/EveEntity.js";
import { EveChildUpdateParams } from "../EveChildUpdateParams.js";
import { EveChildInheritProperties } from "../child/EveChildInheritProperties.js";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { ReflectionMode } from "../../generated/eve/enums.js";
import { EveLODHelper, Tr2Lod } from "../EveLODHelper.js";

@type.define({ className: "EveSpaceObject2", family: "eve/spaceObject" })
export class EveSpaceObject2 extends EveEntity
{

  /** m_reflectionMode (EntityComponents::ReflectionMode - enum ReflectionMode) [READWRITE, PERSIST, NOTIFY, ENUM] */
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("ReflectionMode")
  reflectionMode = 3;

  /** m_effectChildren (PIEveSpaceObjectChildVector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveSpaceObjectChild")
  effectChildren = [];

  /** m_children (PIEveTransformVector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveTransform")
  children = [];

  /** m_name (std::string) [READWRITE, NOTIFY, PERSIST] */
  @io.notify
  @io.persist
  @type.string
  name = "";

  /** m_mute (bool) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.boolean
  mute = false;

  /** m_inheritProperties (EveChildInheritPropertiesPtr) [READWRITE] */
  @io.readwrite
  @type.objectRef("EveChildInheritProperties")
  inheritProperties = null;

  /** m_customMasks (PEveCustomMaskVector) [READ, PERSIST] */
  @io.persist
  @type.list("EveCustomMask")
  customMasks = [];

  /** m_overlayEffects (PEveMeshOverlayEffectVector) [READ, PERSIST] */
  @io.persist
  @type.list("EveMeshOverlayEffect")
  overlayEffects = [];

  /** m_positionDelta (Tr2BindingVector3Ptr) [READ] */
  @io.read
  @type.objectRef("Tr2BindingVector3")
  positionDelta = null;

  /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
  @io.read
  @type.int32
  @schema.enum("Tr2Lod")
  lodLevel = -1;

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  @io.persist
  @type.list("TriCurveSet")
  curveSets = [];

  /** m_isPickable (bool) [READWRITE] */
  @io.readwrite
  @type.boolean
  isPickable = true;

  /** m_estimatedPixelDiameter (float) [READ] */
  @io.read
  @type.float32
  estimatedPixelDiameter = 0;

  /** m_estimatedPixelDiameterWithChildren (float) [READ] */
  @io.read
  @type.float32
  estimatedPixelDiameterWithChildren = 0;

  /** m_generatedShapeEllipsoidCenter (Vector3) [READ] */
  @io.read
  @type.vec3
  generatedShapeEllipsoidCenter = vec3.create();

  /** m_generatedShapeEllipsoidRadius (Vector3) [READ] */
  @io.read
  @type.vec3
  generatedShapeEllipsoidRadius = vec3.fromValues(-1, -1, -1);

  /** m_animationUpdater (Tr2GrannyAnimationPtr) [READ] */
  @io.read
  @type.objectRef("Tr2GrannyAnimation")
  animationUpdater = null;

  /** m_dna (std::string) [READ, PERSIST] */
  @io.persist
  @type.string
  dna = "";

  /** m_castShadow (bool) [READWRITE, NOTIFY, PERSIST] */
  @io.notify
  @io.persist
  @type.boolean
  castShadow = false;

  /** m_isAnimated (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  isAnimated = false;

  /** m_dynamicBoundingSphereEnabled (bool) [READ, PERSIST] */
  @io.persist
  @type.boolean
  dynamicBoundingSphereEnabled = false;

  /** m_attachments (PIEveSpaceObjectAttachmentVector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveSpaceObjectAttachment")
  attachments = [];

  /** m_decals (PEveSpaceObjectDecalVector) [READ, PERSIST] */
  @io.persist
  @type.list("EveSpaceObjectDecal")
  decals = [];

  /** m_lights (PTr2LightVector) [READ, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.list("Tr2Light")
  lights = [];

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  @io.persist
  @type.list("Tr2ExternalParameter")
  externalParameters = [];

  /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
  @io.persist
  @type.list("ITr2Controller")
  controllers = [];

  /** m_locators (PEveLocator2Vector) [READ, PERSIST] */
  @io.persist
  @type.list("EveLocator2")
  locators = [];

  /** m_mesh (Tr2MeshBasePtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("Tr2MeshBase")
  mesh = null;

  /** m_impactOverlay (EveImpactOverlayPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("EveImpactOverlay")
  impactOverlay = null;

  /** m_clipSphereCenter (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  clipSphereCenter = vec3.create();

  /** m_clipSphereFactor2 (float) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.float32
  clipSphereFactor2 = 0;

  /** m_clipSphereFactor (float) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.float32
  clipSphereFactor = 0;

  /** m_observers (PTriObserverLocalVector) [READ, PERSIST] */
  @io.persist
  @type.list("TriObserverLocal")
  observers = [];

  /** m_worldPosition (Vector3) [READ] */
  @io.read
  @type.vec3
  worldPosition = vec3.create();

  /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("ITriQuaternionFunction")
  rotationCurve = null;

  /** m_worldRotation (Quaternion) [READ] */
  @io.read
  @type.quat
  worldRotation = quat.create();

  /** m_modelScale (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  modelScale = 1;

  /** m_locatorSets (PEveLocatorSetsVector) [READ, PERSIST] */
  @io.persist
  @type.list("EveLocatorSets")
  locatorSets = [];

  /** m_activationStrength (float) [READWRITE] */
  @io.readwrite
  @type.float32
  activationStrength = 1;

  /** m_albedoColor (Color) [READWRITE] */
  @io.readwrite
  @type.color
  albedoColor = vec4.createLinear();

  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.boolean
  display = true;

  /** m_update (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  update = true;

  /** m_secondaryLightingSphereRadius (float) [READ] */
  @io.read
  @type.float32
  secondaryLightingSphereRadius = 0;

  /** m_boundingSphereCenter (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  boundingSphereCenter = vec3.create();

  /** m_dirtLevel (float) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.float32
  dirtLevel = 0;

  /** m_lastDamageLocatorHit (int) [READ] */
  @io.read
  @type.int32
  lastDamageLocatorHit = -1;

  /** m_boundingSphereRadius (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  boundingSphereRadius = -1;

  /** m_boundingSphereWorldCenter (Vector3) [READ] */
  @io.read
  @type.vec3
  modelWorldPosition = vec3.create();

  /** m_modelTranslation (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("ITriVectorFunction")
  modelTranslationCurve = null;

  /** m_modelRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("ITriQuaternionFunction")
  modelRotationCurve = null;

  /** m_shapeEllipsoidCenter (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  shapeEllipsoidCenter = vec3.create();

  /** m_shapeEllipsoidRadius (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  shapeEllipsoidRadius = vec3.fromValues(-1, -1, -1);

  /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.objectRef("ITriVectorFunction")
  translationCurve = null;

  @io.read
  @type.mat4
  worldTransform = mat4.create();

  @io.read
  @type.mat4
  inverseWorldTransform = mat4.create();

  @io.read
  @type.mat4
  lastWorldTransform = mat4.create();

  @io.read
  @type.vec3
  worldVelocity = vec3.create();

  @io.readwrite
  @type.objectRef("ITr2AudGeometry")
  audioGeometry = null;

  @type.boolean
  isVisible = false;

  #controllerVariables = new Map([
    ["DirtLevel", 0],
    ["ActivationStrength", 1],
    ["ShieldDamage", 1],
    ["ArmorDamage", 1],
    ["HullDamage", 1],
    ["ClipSphereFactor", 0],
    ["ClipSphereFactor2", 0]
  ]);

  #lastUpdateTransformTime = null;

  // Carbon m_lastCurveUpdateTime: stamped by the sync-side LOD gate; the async
  // side updates curve sets only when it matches the frame time.
  #lastCurveUpdateTime = 0;

  get meshLod()
  {
    return this.mesh;
  }

  set meshLod(mesh)
  {
    this.mesh = mesh ?? null;
  }

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
    // Authored inherit properties propagate as part of the lifecycle so a
    // field-populated graph (values import, document hydration) matches the
    // SetInheritProperties authoring path.
    if (this.inheritProperties)
    {
      this.#PropagateInheritProperties();
    }
    // Carbon derives the impact overlay's damage locator count from the
    // "damage" locator set at build time; deriving it here keeps it out of
    // the authored values while reproducing the same live state.
    if (this.impactOverlay)
    {
      let damageLocatorCount = 0;
      for (const set of this.locatorSets)
      {
        if (set?.HasName?.("damage")) damageLocatorCount += set.locators.length;
      }
      this.impactOverlay.SetDamageLocatorCount(damageLocatorCount);
    }
    return true;
  }

  @carbon.method
  @impl.implemented
  GetMesh()
  {
    return this.mesh;
  }

  @carbon.method
  @impl.adapted
  SetMesh(mesh)
  {
    this.mesh = mesh ?? null;
  }

  @carbon.method
  @impl.adapted
  AddController(controller)
  {
    this.controllers.push(controller);
    if (!controller?.IsLinked?.())
    {
      controller?.Link?.(this);
    }
    EveSpaceObject2.#ApplyControllerVariables(controller, this.#controllerVariables, "SetVariable");
    return controller;
  }

  @carbon.method
  @impl.implemented
  AddObserver(observer)
  {
    this.observers.push(observer);
    return observer;
  }

  @carbon.method
  @impl.implemented
  SetInheritProperties(colorSet)
  {
    if (!this.inheritProperties)
    {
      this.inheritProperties = new EveChildInheritProperties();
    }
    this.inheritProperties.SetProperties(colorSet);
    this.#PropagateInheritProperties();
  }

  #PropagateInheritProperties()
  {
    const properties = this.inheritProperties.GetProperties();
    for (const child of this.effectChildren)
    {
      child?.SetInheritProperties?.(properties);
    }
    for (const light of this.lights)
    {
      light?.SetInheritProperties?.(properties);
    }
  }

  @carbon.method
  @impl.implemented
  GetEffectChildByName(name)
  {
    const target = String(name ?? "");
    for (const child of this.effectChildren)
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
    if (this.inheritProperties)
    {
      child?.SetInheritProperties?.(this.inheritProperties.GetProperties());
    }
    this.effectChildren.push(child);
    EveSpaceObject2.#ApplyControllerVariables(child, this.#controllerVariables, "SetControllerVariable");
    return child;
  }

  @carbon.method
  @impl.implemented
  AddLight(light)
  {
    if (this.inheritProperties)
    {
      light?.SetInheritProperties?.(this.inheritProperties.GetProperties());
    }
    this.lights.push(light);
  }

  @carbon.method
  @impl.implemented
  ClearLights()
  {
    this.lights.length = 0;
  }

  @carbon.method
  @impl.implemented
  RemoveFromEffectChildrenList(child)
  {
    const index = this.effectChildren.indexOf(child);
    if (index === -1)
    {
      return false;
    }
    this.effectChildren.splice(index, 1);
    return true;
  }

  @carbon.method
  @impl.implemented
  SetModelRotationCurve(curve)
  {
    this.modelRotationCurve = curve ?? null;
  }

  @carbon.method
  @impl.implemented
  GetModelRotationCurve()
  {
    return this.modelRotationCurve;
  }

  @carbon.method
  @impl.implemented
  SetModelTranslationCurve(curve)
  {
    this.modelTranslationCurve = curve ?? null;
  }

  @carbon.method
  @impl.implemented
  GetModelTranslationCurve()
  {
    return this.modelTranslationCurve;
  }

  @carbon.method
  @impl.adapted
  UpdateWorldTransform(time)
  {
    const nextTime = Number(time) || 0;
    if (this.#lastUpdateTransformTime === nextTime)
    {
      return false;
    }
    this.#lastUpdateTransformTime = nextTime;
    mat4.copy(this.lastWorldTransform, this.worldTransform);

    EveSpaceObject2.#UpdateCurve(this.translationCurve, nextTime, this.worldPosition, EveSpaceObject2.#zero);
    if (this.translationCurve?.GetValueDotAt)
    {
      this.translationCurve.GetValueDotAt(nextTime, this.worldVelocity);
    }
    else
    {
      vec3.set(this.worldVelocity, 0, 0, 0);
    }

    EveSpaceObject2.#UpdateCurve(this.rotationCurve, nextTime, this.worldRotation, EveSpaceObject2.#identityRotation);
    const rotation = quat.clone(this.worldRotation);
    if (this.modelRotationCurve)
    {
      const modelRotation = quat.create();
      EveSpaceObject2.#UpdateCurve(this.modelRotationCurve, nextTime, modelRotation, EveSpaceObject2.#identityRotation);
      quat.multiply(rotation, modelRotation, rotation);
    }

    mat4.fromQuat(this.worldTransform, rotation);
    if (this.modelScale !== 1)
    {
      mat4.scale(this.worldTransform, this.worldTransform, [this.modelScale, this.modelScale, this.modelScale]);
    }

    if (this.modelTranslationCurve)
    {
      const modelTranslation = vec3.create();
      EveSpaceObject2.#UpdateCurve(this.modelTranslationCurve, nextTime, modelTranslation, EveSpaceObject2.#zero);
      vec3.transformMat4(modelTranslation, modelTranslation, this.worldTransform);
      this.worldTransform[12] = this.worldPosition[0] + modelTranslation[0];
      this.worldTransform[13] = this.worldPosition[1] + modelTranslation[1];
      this.worldTransform[14] = this.worldPosition[2] + modelTranslation[2];
    }
    else
    {
      this.worldTransform[12] = this.worldPosition[0];
      this.worldTransform[13] = this.worldPosition[1];
      this.worldTransform[14] = this.worldPosition[2];
    }

    if (!mat4.invert(this.inverseWorldTransform, this.worldTransform))
    {
      mat4.identity(this.inverseWorldTransform);
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  UpdateSyncronous(updateContext = null)
  {
    const time = EveSpaceObject2.#GetContextValue(updateContext, "GetTime", "currentTime", "time");
    this.UpdateWorldTransform(time);
    if (!this.update)
    {
      return false;
    }

    const observerTransform = this.GetObserverTransform();
    for (const observer of this.observers)
    {
      observer?.Update?.(observerTransform);
    }

    // LOD-gated curve/overlay stamp (Carbon EveSpaceObject2::UpdateSyncronous:
    // ShouldUpdate(m_lodLevelWithChildren, time - m_lastCurveUpdateTime) -
    // adapted to lodLevel, m_lodLevelWithChildren is unported). Overlay effects
    // receive the context time as BOTH clocks, as Carbon does; the async pass
    // updates curve sets only on frames stamped here.
    if (EveLODHelper.ShouldUpdate(this.lodLevel, time - this.#lastCurveUpdateTime))
    {
      this.#lastCurveUpdateTime = time;
      for (const overlay of this.overlayEffects)
      {
        overlay?.Update?.(time, time);
      }
    }

    if (this.effectChildren.length)
    {
      const params = new EveChildUpdateParams();
      params.spaceObjectParent = this;
      params.ownerMaxSpeed = Number(this.maxSpeed) || 0;
      params.activationStrength = this.activationStrength;
      mat4.copy(params.localToWorldTransform, this.GetLocalToWorldTransform());
      for (const child of this.effectChildren)
      {
        params.isVisible = this.display && (this.DisplayChildren() || !!child?.IsAlwaysOn?.());
        child?.UpdateSyncronous?.(updateContext, params);
      }
    }

    this.impactOverlay?.UpdateSyncronous?.(updateContext, this);
    return true;
  }

  @carbon.method
  @impl.adapted
  UpdateAsyncronous(updateContext = null)
  {
    if (!this.update)
    {
      return 0;
    }

    const threshold = EveSpaceObject2.#GetContextValue(updateContext, "GetHighDetailThreshold", "highDetailThreshold");
    const frequency = this.isVisible && threshold > 0
      ? Math.min(1, this.estimatedPixelDiameter / threshold)
      : 0;
    for (const controller of this.controllers)
    {
      controller?.Update?.(frequency);
    }

    // Object-level curve sets update only on frames the sync-side LOD gate
    // stamped, receiving the context time as BOTH realTime and simTime
    // (Carbon EveSpaceObject2::UpdateAsyncronous: if (m_lastCurveUpdateTime ==
    // time) (*it)->Update(time, time)).
    const time = EveSpaceObject2.#GetContextValue(updateContext, "GetTime", "currentTime", "time");
    if (this.#lastCurveUpdateTime === time)
    {
      for (const curveSet of this.curveSets)
      {
        curveSet?.Update?.(time, time);
      }
    }

    for (const child of this.children)
    {
      child?.Update?.(updateContext);
    }

    if (this.effectChildren.length)
    {
      const params = new EveChildUpdateParams();
      params.spaceObjectParent = this;
      params.ownerMaxSpeed = Number(this.maxSpeed) || 0;
      params.activationStrength = this.activationStrength;
      params.controllerUpdateFrequency = frequency;
      mat4.copy(params.localToWorldTransform, this.GetLocalToWorldTransform());
      for (const child of this.effectChildren)
      {
        params.isVisible = this.display && (this.DisplayChildren() || !!child?.IsAlwaysOn?.());
        child?.UpdateAsyncronous?.(updateContext, params);
      }
    }

    this.impactOverlay?.UpdateAsyncronous?.(updateContext, this);
    return frequency;
  }

  @carbon.method
  @impl.implemented
  DisplayChildren()
  {
    return true;
  }

  @carbon.method
  @impl.implemented
  GetObserverTransform()
  {
    return this.worldTransform;
  }

  @carbon.method
  @impl.implemented
  GetLocalToWorldTransform()
  {
    return this.worldTransform;
  }

  @carbon.method
  @impl.implemented
  GetWorldPosition()
  {
    return this.worldPosition;
  }

  @carbon.method
  @impl.implemented
  GetWorldRotation()
  {
    return this.worldRotation;
  }

  @carbon.method
  @impl.implemented
  FindSoundEmitter(name)
  {
    const target = String(name ?? "");
    for (const observer of this.observers)
    {
      if (observer?.name === target)
      {
        return typeof observer.GetObserver === "function"
          ? observer.GetObserver()
          : observer.observer ?? null;
      }
    }
    for (const child of this.effectChildren)
    {
      const emitter = child?.FindSoundEmitter?.(target);
      if (emitter)
      {
        return emitter;
      }
    }
    return null;
  }

  @carbon.method
  @impl.adapted
  SetMute(mute)
  {
    this.mute = !!mute;
    for (const child of this.effectChildren)
    {
      child?.SetMute?.(this.mute);
    }
    for (const observer of this.observers)
    {
      observer?.SetMute?.(this.mute);
    }
  }

  /** Carbon method PlayAnimationEx (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  @carbon.method
  @impl.notImplemented
  PlayAnimationEx(...args)
  {
    throw new Error("EveSpaceObject2.PlayAnimationEx is not implemented in CarbonEngineJS.");
  }

  /** Carbon method CalculateSkinnedBoundingBoxFromTransform (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  CalculateSkinnedBoundingBoxFromTransform(...args)
  {
    throw new Error("EveSpaceObject2.CalculateSkinnedBoundingBoxFromTransform is not implemented in CarbonEngineJS.");
  }

  /** Carbon method CalculateSkinnedBoundingSphere (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  CalculateSkinnedBoundingSphere(...args)
  {
    throw new Error("EveSpaceObject2.CalculateSkinnedBoundingSphere is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ClearImpactDamage (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  ClearImpactDamage(...args)
  {
    throw new Error("EveSpaceObject2.ClearImpactDamage is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ClearAnimations (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  ClearAnimations(...args)
  {
    throw new Error("EveSpaceObject2.ClearAnimations is not implemented in CarbonEngineJS.");
  }

  /** Carbon method CreateImpactFromPosition (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  CreateImpactFromPosition(...args)
  {
    throw new Error("EveSpaceObject2.CreateImpactFromPosition is not implemented in CarbonEngineJS.");
  }

  /** Carbon method CreateImpact (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  CreateImpact(...args)
  {
    throw new Error("EveSpaceObject2.CreateImpact is not implemented in CarbonEngineJS.");
  }

  /** Carbon method EndAnimation (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  EndAnimation(...args)
  {
    throw new Error("EveSpaceObject2.EndAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method FreezeHighDetailMesh (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  FreezeHighDetailMesh(...args)
  {
    throw new Error("EveSpaceObject2.FreezeHighDetailMesh is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDamageLocatorCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDamageLocatorCount(...args)
  {
    throw new Error("EveSpaceObject2.GetDamageLocatorCount is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetLocatorCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetLocatorCount(...args)
  {
    throw new Error("EveSpaceObject2.GetLocatorCount is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetCloseLocatorIndex (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetCloseLocatorIndex(...args)
  {
    throw new Error("EveSpaceObject2.GetCloseLocatorIndex is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetGoodLocatorIndex -> GetCloseLocatorIndex (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetGoodLocatorIndex(...args)
  {
    throw new Error("EveSpaceObject2.GetGoodLocatorIndex is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDamageLocatorDirection -> GetDamageLocatorDirectionLocal (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDamageLocatorDirection(...args)
  {
    throw new Error("EveSpaceObject2.GetDamageLocatorDirection is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDamageLocator (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetDamageLocator(...args)
  {
    throw new Error("EveSpaceObject2.GetDamageLocator is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetTransformedDamageLocator (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetTransformedDamageLocator(...args)
  {
    throw new Error("EveSpaceObject2.GetTransformedDamageLocator is not implemented in CarbonEngineJS.");
  }

  /** Carbon method IsImpostor (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  IsImpostor(...args)
  {
    throw new Error("EveSpaceObject2.IsImpostor is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetLocatorPositionFromSet (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetLocatorPositionFromSet(...args)
  {
    throw new Error("EveSpaceObject2.GetLocatorPositionFromSet is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetLocatorRotationFromSet (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetLocatorRotationFromSet(...args)
  {
    throw new Error("EveSpaceObject2.GetLocatorRotationFromSet is not implemented in CarbonEngineJS.");
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
    for (const child of this.effectChildren)
    {
      child?.HandleControllerEvent?.(eventName);
    }
    for (const overlay of this.overlayEffects)
    {
      overlay?.HandleControllerEvent?.(eventName);
    }
  }

  /** Carbon method PlayAnimation -> PlayAnimationOnce (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  PlayAnimation(...args)
  {
    throw new Error("EveSpaceObject2.PlayAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChainAnimation (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  ChainAnimation(...args)
  {
    throw new Error("EveSpaceObject2.ChainAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChainAnimationEx (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  ChainAnimationEx(...args)
  {
    throw new Error("EveSpaceObject2.ChainAnimationEx is not implemented in CarbonEngineJS.");
  }

  /** Carbon method RebuildBoundingSphereInformation (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  RebuildBoundingSphereInformation(...args)
  {
    throw new Error("EveSpaceObject2.RebuildBoundingSphereInformation is not implemented in CarbonEngineJS.");
  }

  @carbon.method
  @impl.implemented
  GetControllerVariables()
  {
    return Object.fromEntries(this.#controllerVariables);
  }

  /** Carbon method GetLastUsedMeshLod (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetLastUsedMeshLod(...args)
  {
    throw new Error("EveSpaceObject2.GetLastUsedMeshLod is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetLocatorTransform -> GetEveLocatorTransform (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetLocatorTransform(...args)
  {
    throw new Error("EveSpaceObject2.GetLocatorTransform is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetLocalBoundingBox -> GetLocalBoundingBoxFromScript (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetLocalBoundingBox(...args)
  {
    throw new Error("EveSpaceObject2.GetLocalBoundingBox is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetBoundingSphereCenter (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetBoundingSphereCenter(...args)
  {
    throw new Error("EveSpaceObject2.GetBoundingSphereCenter is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetBoundingSphereRadius (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetBoundingSphereRadius(...args)
  {
    throw new Error("EveSpaceObject2.GetBoundingSphereRadius is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetBoneCount (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetBoneCount(...args)
  {
    throw new Error("EveSpaceObject2.GetBoneCount is not implemented in CarbonEngineJS.");
  }

  @carbon.method
  @impl.adapted
  SetImpactDamageState(shield, armor, hull, doCreateArmorImpacts = true)
  {
    this.impactOverlay?.SetDamageState?.(shield, armor, hull, doCreateArmorImpacts);
    this.SetControllerVariable("ShieldDamage", shield);
    this.SetControllerVariable("ArmorDamage", armor);
    this.SetControllerVariable("HullDamage", hull);
  }

  /** Carbon method SetImpactAnimation (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SetImpactAnimation(...args)
  {
    throw new Error("EveSpaceObject2.SetImpactAnimation is not implemented in CarbonEngineJS.");
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
    for (const child of this.effectChildren)
    {
      child?.SetControllerVariable?.(key, next);
    }
    for (const overlay of this.overlayEffects)
    {
      overlay?.SetControllerVariable?.(key, next);
    }
  }

  @carbon.method
  @impl.implemented
  SetProceduralContainerVariable(name, value)
  {
    for (const child of this.effectChildren)
    {
      child?.SetProceduralContainerVariable?.(name, value);
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
    for (const child of this.effectChildren)
    {
      child?.StartControllers?.();
    }
    for (const overlay of this.overlayEffects)
    {
      overlay?.StartControllers?.();
    }
  }

  /** Carbon method TransformLocators -> PyTransformLocators (MAP_METHOD). */
  @carbon.method
  @impl.notImplemented
  TransformLocators(...args)
  {
    throw new Error("EveSpaceObject2.TransformLocators is not implemented in CarbonEngineJS.");
  }

  static #ApplyControllerVariables(target, variables, methodName)
  {
    const setter = target?.[methodName];
    if (typeof setter !== "function")
    {
      return;
    }
    for (const [name, value] of variables)
    {
      setter.call(target, name, value);
    }
  }

  static #UpdateCurve(curve, time, out, fallback)
  {
    if (!curve)
    {
      for (let index = 0; index < out.length; index++)
      {
        out[index] = fallback[index];
      }
      return out;
    }

    let result;
    if (typeof curve.Update === "function")
    {
      result = curve.Update(time, out);
    }
    else if (typeof curve.GetValueAt === "function")
    {
      result = curve.GetValueAt(time, out);
    }
    if ((Array.isArray(result) || ArrayBuffer.isView(result)) && result !== out)
    {
      for (let index = 0; index < out.length; index++)
      {
        out[index] = result[index];
      }
    }
    return out;
  }

  static #GetContextValue(context, methodName, ...propertyNames)
  {
    const method = context?.[methodName];
    if (typeof method === "function")
    {
      return Number(method.call(context)) || 0;
    }
    for (const propertyName of propertyNames)
    {
      if (context?.[propertyName] !== undefined && context?.[propertyName] !== null)
      {
        return Number(context[propertyName]) || 0;
      }
    }
    return 0;
  }

  static #zero = Object.freeze([0, 0, 0]);

  static #identityRotation = Object.freeze([0, 0, 0, 1]);

  static ReflectionMode = ReflectionMode;

  static Tr2Lod = Tr2Lod;

}
