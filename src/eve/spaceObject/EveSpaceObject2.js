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

  // Carbon m_dynamicBoundingSphere: disabled while w is -1; a future animation
  // updater port publishes skinned bounds here.
  #dynamicBoundingSphere = vec4.fromValues(0, 0, 0, -1);

  // Carbon m_localAabbMin/Max: cached so GetLocalBoundingBox can answer before
  // LOD selection assigns a mesh (at worst it lags one frame).
  #localAabbMin = vec3.create();

  #localAabbMax = vec3.create();

  // Carbon m_allowLodSelection: cleared by FreezeHighDetailMesh.
  #allowLodSelection = true;

  // Carbon m_impostorMode: the impostor system that raises it is unported.
  #impostorMode = false;

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

  /**
   * Plays an animation with explicit loop, start, and speed settings
   * (Carbon PlayAnimationEx, MAP_METHOD_AND_WRAP_OPTIONAL_ARGS).
   */
  @carbon.method
  @impl.adapted
  PlayAnimationEx(animName, loopCount, start, speed, clearWhenDone = true)
  {
    this.#PlayAnimation(animName, true, loopCount, start, speed, clearWhenDone);
  }

  /**
   * Calculates the skinned bounding box under a transform (CMF path: the
   * local box corners transformed with perspective divide). The granny path
   * is unported. Returns an inverted-empty { min, max } box when dynamic
   * bounds are disabled, as Carbon's BoundingBoxInitialize does.
   */
  @carbon.method
  @impl.adapted
  CalculateSkinnedBoundingBoxFromTransform(transform)
  {
    const min = vec3.fromValues(Infinity, Infinity, Infinity);
    const max = vec3.fromValues(-Infinity, -Infinity, -Infinity);
    if (this.dynamicBoundingSphereEnabled && this.mesh?.GetGeometryResource?.()?.IsUsingCMF?.())
    {
      const { min: localMin, max: localMax } = this.GetLocalBoundingBox();
      const corner = vec3.create();
      for (let index = 0; index < 8; index++)
      {
        vec3.set(
          corner,
          index & 1 ? localMax[0] : localMin[0],
          index & 2 ? localMax[1] : localMin[1],
          index & 4 ? localMax[2] : localMin[2]
        );
        vec3.transformMat4(corner, corner, transform);
        vec3.min(min, min, corner);
        vec3.max(max, max, corner);
      }
    }
    return { min, max };
  }

  /**
   * Calculates the skinned bounding sphere (CMF path: the current bounding
   * sphere; granny path unported). Returns (0,0,0,-1) when dynamic bounds
   * are disabled.
   */
  @carbon.method
  @impl.adapted
  CalculateSkinnedBoundingSphere(out = vec4.create())
  {
    if (this.dynamicBoundingSphereEnabled && this.mesh?.GetGeometryResource?.()?.IsUsingCMF?.())
    {
      const center = this.GetBoundingSphereCenter();
      return vec4.set(out, center[0], center[1], center[2], this.GetBoundingSphereRadius());
    }
    return vec4.set(out, 0, 0, 0, -1);
  }

  /**
   * Clears all impact and damage effects on the impact overlay.
   */
  @carbon.method
  @impl.implemented
  ClearImpactDamage()
  {
    this.impactOverlay?.Clear?.();
  }

  /**
   * Clears all animations on the animation updater.
   */
  @carbon.method
  @impl.implemented
  ClearAnimations()
  {
    this.animationUpdater?.ClearAnimations?.();
  }

  /**
   * Creates an impact facing a position on the closest facing damage locator.
   */
  @carbon.method
  @impl.implemented
  CreateImpactFromPosition(position, direction, lifeTime, size)
  {
    const closestDamageLocator = this.#GetClosestLocatorIndex(position, EveSpaceObject2.#damageLocatorSetName);
    return this.CreateImpact(closestDamageLocator, direction, lifeTime, size);
  }

  /**
   * Creates an impact effect on a damage locator through the impact overlay.
   */
  @carbon.method
  @impl.adapted
  CreateImpact(damageLocatorIndex, direction, lifeTime, size)
  {
    if (this.impactOverlay)
    {
      return this.impactOverlay.CreateImpact?.(damageLocatorIndex, direction, lifeTime, size, 1, this.lodLevel, this) ?? -1;
    }
    return -1;
  }

  /**
   * Ends the current animation on the animation updater.
   */
  @carbon.method
  @impl.implemented
  EndAnimation()
  {
    this.animationUpdater?.EndAnimation?.();
  }

  /**
   * Freezes LOD selection at the current mesh and marks decal geometry
   * frozen.
   */
  @carbon.method
  @impl.implemented
  FreezeHighDetailMesh()
  {
    this.#allowLodSelection = false;
    for (const decal of this.decals)
    {
      decal?.SetHighDetailDecalState?.(true);
    }
  }

  /**
   * Gets the number of damage locators on this object.
   */
  @carbon.method
  @impl.implemented
  GetDamageLocatorCount()
  {
    return this.GetLocatorCount(EveSpaceObject2.#damageLocatorSetName);
  }

  /**
   * Gets the number of locators in a named locator set.
   */
  @carbon.method
  @impl.implemented
  GetLocatorCount(locatorSetName)
  {
    return this.#GetLocatorsForSet(locatorSetName)?.length ?? 0;
  }

  /**
   * Gets the closest locator in a set to a world position, ignoring locator
   * facing. Returns -1 when the set is missing or empty.
   */
  @carbon.method
  @impl.implemented
  GetCloseLocatorIndex(position, locatorSetName)
  {
    const locators = this.#GetLocatorsForSet(locatorSetName);
    if (!locators)
    {
      return -1;
    }
    const posInObjectSpace = vec3.transformMat4(vec3.create(), position, this.inverseWorldTransform);
    const locatorPosition = vec3.create();
    const locatorDirection = vec3.create();
    let closestLength = Infinity;
    let closestIndex = -1;
    for (let index = 0; index < locators.length; index++)
    {
      this.#GetLocatorInObjectSpace(locatorPosition, locatorDirection, locators[index]);
      const distance = vec3.squaredDistance(locatorPosition, posInObjectSpace);
      if (distance < closestLength)
      {
        closestIndex = index;
        closestLength = distance;
      }
    }
    return closestIndex;
  }

  /**
   * Carbon's script surface maps GetGoodLocatorIndex to GetCloseLocatorIndex
   * (EveSpaceObject2_Blue.cpp); the internal randomized fit heuristic is not
   * script-exposed.
   */
  @carbon.method
  @impl.adapted
  GetGoodLocatorIndex(position, locatorSetName)
  {
    return this.GetCloseLocatorIndex(position, locatorSetName);
  }

  /**
   * Gets the local direction of an indexed damage locator, (0,0,0) for
   * indices out of range (Carbon script GetDamageLocatorDirection maps to
   * GetDamageLocatorDirectionLocal).
   */
  @carbon.method
  @impl.adapted
  GetDamageLocatorDirection(index, out = vec3.create())
  {
    const locators = this.#GetLocatorsForSet(EveSpaceObject2.#damageLocatorSetName);
    if (!locators || !(index >= 0 && index < locators.length))
    {
      return vec3.set(out, 0, 0, 0);
    }
    const position = vec3.create();
    this.#GetLocatorInObjectSpace(position, out, locators[index]);
    return out;
  }

  /**
   * Gets the local position of an indexed damage locator, (0,0,0) for
   * indices out of range.
   */
  @carbon.method
  @impl.implemented
  GetDamageLocator(index, out = vec3.create())
  {
    const locators = this.#GetLocatorsForSet(EveSpaceObject2.#damageLocatorSetName);
    if (!locators || !(index >= 0 && index < locators.length))
    {
      return vec3.set(out, 0, 0, 0);
    }
    const direction = vec3.create();
    this.#GetLocatorInObjectSpace(out, direction, locators[index]);
    return out;
  }

  /**
   * Gets the world-space position of an indexed damage locator, (0,0,0) for
   * indices out of range (returned untransformed, as Carbon does).
   */
  @carbon.method
  @impl.implemented
  GetTransformedDamageLocator(index, out = vec3.create())
  {
    const locators = this.#GetLocatorsForSet(EveSpaceObject2.#damageLocatorSetName);
    if (!locators || !(index >= 0 && index < locators.length))
    {
      return vec3.set(out, 0, 0, 0);
    }
    const direction = vec3.create();
    this.#GetLocatorInObjectSpace(out, direction, locators[index]);
    return vec3.transformMat4(out, out, this.worldTransform);
  }

  /**
   * Checks whether this object is in impostor mode. The impostor system that
   * raises the flag is unported, so this reports the default until then.
   */
  @carbon.method
  @impl.adapted
  IsImpostor()
  {
    return this.#impostorMode;
  }

  /**
   * Gets a locator position from a named set. Out-of-range or missing-set
   * queries return the world translation in world space and (0,0,0) in
   * object space, as Carbon does.
   */
  @carbon.method
  @impl.implemented
  GetLocatorPositionFromSet(index, inWorldSpace, locatorSetName, out = vec3.create())
  {
    const locators = this.#GetLocatorsForSet(locatorSetName);
    if (index < 0 || !locators || index >= locators.length)
    {
      if (inWorldSpace)
      {
        return vec3.set(out, this.worldTransform[12], this.worldTransform[13], this.worldTransform[14]);
      }
      return vec3.set(out, 0, 0, 0);
    }
    const direction = vec3.create();
    this.#GetLocatorInObjectSpace(out, direction, locators[index]);
    if (inWorldSpace)
    {
      vec3.transformMat4(out, out, this.worldTransform);
    }
    return out;
  }

  /**
   * Gets a locator direction from a named set. Out-of-range or missing-set
   * queries return (0,1,0), as Carbon does.
   */
  @carbon.method
  @impl.implemented
  GetLocatorRotationFromSet(index, inWorldSpace, locatorSetName, out = vec3.create())
  {
    const locators = this.#GetLocatorsForSet(locatorSetName);
    if (index < 0 || !locators || index >= locators.length)
    {
      return vec3.set(out, 0, 1, 0);
    }
    const position = vec3.create();
    this.#GetLocatorInObjectSpace(position, out, locators[index]);
    if (inWorldSpace)
    {
      EveSpaceObject2.#TransformNormal(out, out, this.worldTransform);
    }
    return out;
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

  /**
   * Plays an animation once, replacing the current one
   * (Carbon script PlayAnimation maps to PlayAnimationOnce).
   */
  @carbon.method
  @impl.adapted
  PlayAnimation(animName)
  {
    this.#PlayAnimation(animName, true, 1, 0, 1, true);
  }

  /**
   * Chains an animation once after the current one (Carbon ChainAnimation).
   */
  @carbon.method
  @impl.implemented
  ChainAnimation(animName)
  {
    this.#PlayAnimation(animName, false, 1, 0, 1, true);
  }

  /**
   * Chains an animation with explicit loop, start, and speed settings
   * (Carbon ChainAnimationEx).
   */
  @carbon.method
  @impl.implemented
  ChainAnimationEx(animName, loopCount, start, speed)
  {
    this.#PlayAnimation(animName, false, loopCount, start, speed, true);
  }

  // Carbon EveSpaceObject2::PlayAnimation: every playback wrapper funnels
  // into the animation updater, which owns playback state; a missing updater
  // is a Carbon-faithful no-op.
  #PlayAnimation(animName, replace, loopCount, delay, speed, clearWhenDone)
  {
    this.animationUpdater?.PlayAnimation?.(String(animName ?? ""), replace, loopCount, delay, speed, clearWhenDone);
  }

  /**
   * Recalculates the authored bounding sphere from the mesh geometry
   * resource. Fails when no mesh or ready geometry resource is attached.
   */
  @carbon.method
  @impl.adapted
  RebuildBoundingSphereInformation()
  {
    const mesh = this.mesh;
    if (!mesh)
    {
      return false;
    }
    const geometryRes = mesh.GetGeometryResource?.();
    if (!geometryRes || !geometryRes.IsGood?.())
    {
      return false;
    }
    geometryRes.RecalculateBoundingSphere?.();
    const sphere = vec4.create();
    geometryRes.GetBoundingSphere?.(mesh.GetMeshIndex?.() ?? 0, sphere);
    vec3.set(this.boundingSphereCenter, sphere[0], sphere[1], sphere[2]);
    this.boundingSphereRadius = sphere[3];
    return true;
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

  /**
   * Gets a named locator's transform (Carbon script GetLocatorTransform maps
   * to GetEveLocatorTransform): the identity for unknown names, the animated
   * bone world transform when the animation updater resolves the name, else
   * the authored locator transform.
   */
  @carbon.method
  @impl.adapted
  GetLocatorTransform(name, out = mat4.create())
  {
    const target = String(name ?? "");
    let locator = null;
    for (const candidate of this.locators)
    {
      if (candidate?.GetName?.() === target)
      {
        locator = candidate;
        break;
      }
    }
    if (!locator)
    {
      return mat4.identity(out);
    }
    if (this.animationUpdater?.GetBoneWorldTransform?.(target, out))
    {
      return out;
    }
    return mat4.copy(out, locator.GetTransform());
  }

  /**
   * Gets the local axis-aligned bounding box: dynamic skinned bounds when
   * enabled, else the mesh box, else the cached box (at worst it lags one
   * frame). With out arguments it fills them and returns true; without, it
   * returns { min, max }.
   */
  @carbon.method
  @impl.adapted
  GetLocalBoundingBox(minBounds, maxBounds)
  {
    const min = vec3.create();
    const max = vec3.create();
    const updater = this.animationUpdater;
    if (this.dynamicBoundingSphereEnabled && updater?.IsInitialized?.())
    {
      const sphere = vec4.create();
      updater.GetDynamicBounds?.(sphere, min, max);
      vec3.copy(this.#localAabbMin, min);
      vec3.copy(this.#localAabbMax, max);
    }
    else if (this.mesh?.GetBoundingBox?.(min, max))
    {
      vec3.copy(this.#localAabbMin, min);
      vec3.copy(this.#localAabbMax, max);
    }
    else
    {
      vec3.copy(min, this.#localAabbMin);
      vec3.copy(max, this.#localAabbMax);
    }
    if (minBounds && maxBounds)
    {
      vec3.copy(minBounds, min);
      vec3.copy(maxBounds, max);
      return true;
    }
    return { min, max };
  }

  /**
   * Gets the bounding sphere center, preferring the dynamic skinned sphere
   * when one is published.
   */
  @carbon.method
  @impl.implemented
  GetBoundingSphereCenter(out = vec3.create())
  {
    if (this.#dynamicBoundingSphere[3] !== -1)
    {
      return vec3.set(out, this.#dynamicBoundingSphere[0], this.#dynamicBoundingSphere[1], this.#dynamicBoundingSphere[2]);
    }
    return vec3.copy(out, this.boundingSphereCenter);
  }

  /**
   * Gets the model-scaled bounding sphere radius, preferring the dynamic
   * skinned sphere when one is published.
   */
  @carbon.method
  @impl.implemented
  GetBoundingSphereRadius()
  {
    if (this.#dynamicBoundingSphere[3] !== -1)
    {
      return this.modelScale * this.#dynamicBoundingSphere[3];
    }
    return this.modelScale * this.boundingSphereRadius;
  }

  /**
   * Gets the number of mesh-bound bones. Carbon dereferences the animation
   * updater unchecked; CarbonEngineJS reports 0 when none is attached.
   */
  @carbon.method
  @impl.adapted
  GetBoneCount()
  {
    const updater = this.animationUpdater;
    if (!updater)
    {
      return 0;
    }
    if (updater.IsUsingCMF?.())
    {
      if (!updater.HasMeshBinding?.())
      {
        return 0;
      }
      return updater.GetSkeletonBoneIndices?.().length ?? 0;
    }
    return updater.GetMeshBindingBoneCount?.() ?? 0;
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

  /**
   * Toggles a named impact-overlay animation (boosters, hardeners, ...).
   */
  @carbon.method
  @impl.implemented
  SetImpactAnimation(name, enable, duration)
  {
    this.impactOverlay?.ToggleEffect?.(name, enable, duration);
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

  /**
   * Applies bone and model transforms to locators and returns
   * [position, rotation, boneIndex] tuples, as the Carbon script surface
   * does (TransformLocators maps to PyTransformLocators). Accepts either
   * locator records ({ position, direction, boneIndex }, Carbon's
   * LocatorStructureList shape) or the same [position, rotation, boneIndex]
   * tuple shape it returns.
   */
  @carbon.method
  @impl.adapted
  TransformLocators(locators = [])
  {
    const result = [];
    for (const locator of locators ?? [])
    {
      const record = Array.isArray(locator)
        ? { position: locator[0], rotation: locator[1], boneIndex: locator[2] }
        : { position: locator?.position, rotation: locator?.direction ?? locator?.rotation, boneIndex: locator?.boneIndex };
      const position = vec3.clone(record.position ?? EveSpaceObject2.#zero);
      const rotation = quat.clone(record.rotation ?? EveSpaceObject2.#identityRotation);
      const boneIndex = Number(record.boneIndex ?? 0);
      this.#TransformLocator(position, rotation, boneIndex);
      if (this.modelTranslationCurve || this.modelRotationCurve)
      {
        this.#ApplyModelTransform(position, rotation);
      }
      result.push([position, rotation, boneIndex]);
    }
    return result;
  }

  // Carbon Blue TransformLocator: bone-attached records pick up the mesh
  // bone matrix; without bone data the authored values pass through.
  #TransformLocator(position, rotation, boneIndex)
  {
    const updater = this.animationUpdater;
    if (boneIndex <= 0 || !updater?.IsInitialized?.())
    {
      return;
    }
    const bone = EveSpaceObject2.#GetBoneMatrix(updater, boneIndex);
    if (!bone)
    {
      return;
    }
    vec3.transformMat4(position, position, bone);
    const boneRotation = mat4.getRotation(quat.create(), bone);
    quat.multiply(rotation, boneRotation, rotation);
  }

  // Carbon Blue ApplyModelTransform samples both curves at the Be::Time()
  // origin (pure GetValueAt, no playback advance): translation adds, model
  // rotation rotates the position and pre-multiplies.
  #ApplyModelTransform(position, rotation)
  {
    if (this.modelTranslationCurve)
    {
      const translation = vec3.create();
      this.modelTranslationCurve.GetValueAt?.(0, translation);
      vec3.add(position, position, translation);
    }
    if (this.modelRotationCurve)
    {
      const modelRotation = quat.create();
      this.modelRotationCurve.GetValueAt?.(0, modelRotation);
      vec3.transformQuat(position, position, modelRotation);
      quat.multiply(rotation, modelRotation, rotation);
    }
  }

  // Carbon GetLocatorsForSet: first set matching the name wins.
  #GetLocatorsForSet(locatorSetName)
  {
    const target = String(locatorSetName ?? "");
    for (const set of this.locatorSets)
    {
      if (set?.HasName?.(target))
      {
        return set.GetLocators();
      }
    }
    return null;
  }

  // Carbon GetLocatorInObjectSpace: the direction is +Y rotated by the
  // authored quaternion; bone-attached locators additionally apply the mesh
  // bone matrix. Carbon leaves the outputs untouched (caller-uninitialized)
  // when bone data is missing; CarbonEngineJS keeps the unskinned values.
  #GetLocatorInObjectSpace(outPosition, outDirection, locator)
  {
    vec3.transformQuat(outDirection, EveSpaceObject2.#unitY, locator.direction);
    vec3.copy(outPosition, locator.position);
    const updater = this.animationUpdater;
    if (locator.boneIndex > 0 && updater?.IsInitialized?.())
    {
      const boneCount = Number(updater.GetMeshBoneCount?.() ?? 0);
      if (locator.boneIndex < boneCount)
      {
        const bone = EveSpaceObject2.#GetBoneMatrix(updater, locator.boneIndex);
        if (bone)
        {
          vec3.transformMat4(outPosition, locator.position, bone);
          EveSpaceObject2.#TransformNormal(outDirection, outDirection, bone);
        }
      }
    }
  }

  // Carbon GetClosestLocatorIndex: facing-gated closest search; 0 when the
  // set is missing, -1 when no locator faces the position.
  #GetClosestLocatorIndex(position, locatorSetName)
  {
    const locators = this.#GetLocatorsForSet(locatorSetName);
    if (!locators)
    {
      return 0;
    }
    const posInObjectSpace = vec3.transformMat4(vec3.create(), position, this.inverseWorldTransform);
    const locatorPosition = vec3.create();
    const locatorDirection = vec3.create();
    let closestLength = Infinity;
    let closestIndex = -1;
    for (let index = 0; index < locators.length; index++)
    {
      this.#GetLocatorInObjectSpace(locatorPosition, locatorDirection, locators[index]);
      if (!EveSpaceObject2.#IsLocatorFacingPosition(locatorDirection, posInObjectSpace))
      {
        continue;
      }
      const distance = vec3.squaredDistance(locatorPosition, posInObjectSpace);
      if (distance < closestLength)
      {
        closestIndex = index;
        closestLength = distance;
      }
    }
    return closestIndex;
  }

  static #IsLocatorFacingPosition(locatorDirection, posInObjectSpace)
  {
    const moved = vec3.subtract(vec3.create(), posInObjectSpace, locatorDirection);
    return vec3.squaredLength(moved) < vec3.squaredLength(posInObjectSpace);
  }

  static #TransformNormal(out, direction, matrix)
  {
    const x = direction[0];
    const y = direction[1];
    const z = direction[2];
    out[0] = matrix[0] * x + matrix[4] * y + matrix[8] * z;
    out[1] = matrix[1] * x + matrix[5] * y + matrix[9] * z;
    out[2] = matrix[2] * x + matrix[6] * y + matrix[10] * z;
    return out;
  }

  // Mesh bone matrices come from the (unported) animation updater; only
  // mat4-shaped entries are usable.
  static #GetBoneMatrix(updater, boneIndex)
  {
    const bones = updater.GetMeshBoneMatrixList?.();
    const bone = bones?.[boneIndex];
    return bone && bone.length >= 16 ? bone : null;
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

  static #unitY = Object.freeze([0, 1, 0]);

  static #identityRotation = Object.freeze([0, 0, 0, 1]);

  static #damageLocatorSetName = "damage";

  static ReflectionMode = ReflectionMode;

  static Tr2Lod = Tr2Lod;

}
