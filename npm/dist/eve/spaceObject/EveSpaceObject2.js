import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../generated/eve/EveEntity.js';
import { EveChildUpdateParams as _EveChildUpdateParams } from '../EveChildUpdateParams.js';
import { EveChildInheritProperties as _EveChildInheritPrope } from '../child/EveChildInheritProperties.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { ReflectionMode } from '../../generated/eve/enums.js';
import { Tr2Lod } from '../EveLODHelper.js';

let _initProto, _initClass, _init_reflectionMode, _init_extra_reflectionMode, _init_effectChildren, _init_extra_effectChildren, _init_children, _init_extra_children, _init_name, _init_extra_name, _init_mute, _init_extra_mute, _init_inheritProperties, _init_extra_inheritProperties, _init_customMasks, _init_extra_customMasks, _init_overlayEffects, _init_extra_overlayEffects, _init_positionDelta, _init_extra_positionDelta, _init_lodLevel, _init_extra_lodLevel, _init_curveSets, _init_extra_curveSets, _init_isPickable, _init_extra_isPickable, _init_estimatedPixelDiameter, _init_extra_estimatedPixelDiameter, _init_estimatedPixelDiameterWithChildren, _init_extra_estimatedPixelDiameterWithChildren, _init_generatedShapeEllipsoidCenter, _init_extra_generatedShapeEllipsoidCenter, _init_generatedShapeEllipsoidRadius, _init_extra_generatedShapeEllipsoidRadius, _init_animationUpdater, _init_extra_animationUpdater, _init_dna, _init_extra_dna, _init_castShadow, _init_extra_castShadow, _init_isAnimated, _init_extra_isAnimated, _init_dynamicBoundingSphereEnabled, _init_extra_dynamicBoundingSphereEnabled, _init_attachments, _init_extra_attachments, _init_decals, _init_extra_decals, _init_lights, _init_extra_lights, _init_externalParameters, _init_extra_externalParameters, _init_controllers, _init_extra_controllers, _init_locators, _init_extra_locators, _init_mesh, _init_extra_mesh, _init_impactOverlay, _init_extra_impactOverlay, _init_clipSphereCenter, _init_extra_clipSphereCenter, _init_clipSphereFactor, _init_extra_clipSphereFactor, _init_clipSphereFactor2, _init_extra_clipSphereFactor2, _init_observers, _init_extra_observers, _init_worldPosition, _init_extra_worldPosition, _init_rotationCurve, _init_extra_rotationCurve, _init_worldRotation, _init_extra_worldRotation, _init_modelScale, _init_extra_modelScale, _init_locatorSets, _init_extra_locatorSets, _init_activationStrength, _init_extra_activationStrength, _init_albedoColor, _init_extra_albedoColor, _init_display, _init_extra_display, _init_update, _init_extra_update, _init_secondaryLightingSphereRadius, _init_extra_secondaryLightingSphereRadius, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_dirtLevel, _init_extra_dirtLevel, _init_lastDamageLocatorHit, _init_extra_lastDamageLocatorHit, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_modelWorldPosition, _init_extra_modelWorldPosition, _init_modelTranslationCurve, _init_extra_modelTranslationCurve, _init_modelRotationCurve, _init_extra_modelRotationCurve, _init_shapeEllipsoidCenter, _init_extra_shapeEllipsoidCenter, _init_shapeEllipsoidRadius, _init_extra_shapeEllipsoidRadius, _init_translationCurve, _init_extra_translationCurve, _init_worldTransform, _init_extra_worldTransform, _init_inverseWorldTransform, _init_extra_inverseWorldTransform, _init_lastWorldTransform, _init_extra_lastWorldTransform, _init_worldVelocity, _init_extra_worldVelocity, _init_audioGeometry, _init_extra_audioGeometry, _init_isVisible, _init_extra_isVisible;
let _EveSpaceObject;
new class extends _identity {
  static [class EveSpaceObject2 extends _EveEntity {
    static {
      ({
        e: [_init_reflectionMode, _init_extra_reflectionMode, _init_effectChildren, _init_extra_effectChildren, _init_children, _init_extra_children, _init_name, _init_extra_name, _init_mute, _init_extra_mute, _init_inheritProperties, _init_extra_inheritProperties, _init_customMasks, _init_extra_customMasks, _init_overlayEffects, _init_extra_overlayEffects, _init_positionDelta, _init_extra_positionDelta, _init_lodLevel, _init_extra_lodLevel, _init_curveSets, _init_extra_curveSets, _init_isPickable, _init_extra_isPickable, _init_estimatedPixelDiameter, _init_extra_estimatedPixelDiameter, _init_estimatedPixelDiameterWithChildren, _init_extra_estimatedPixelDiameterWithChildren, _init_generatedShapeEllipsoidCenter, _init_extra_generatedShapeEllipsoidCenter, _init_generatedShapeEllipsoidRadius, _init_extra_generatedShapeEllipsoidRadius, _init_animationUpdater, _init_extra_animationUpdater, _init_dna, _init_extra_dna, _init_castShadow, _init_extra_castShadow, _init_isAnimated, _init_extra_isAnimated, _init_dynamicBoundingSphereEnabled, _init_extra_dynamicBoundingSphereEnabled, _init_attachments, _init_extra_attachments, _init_decals, _init_extra_decals, _init_lights, _init_extra_lights, _init_externalParameters, _init_extra_externalParameters, _init_controllers, _init_extra_controllers, _init_locators, _init_extra_locators, _init_mesh, _init_extra_mesh, _init_impactOverlay, _init_extra_impactOverlay, _init_clipSphereCenter, _init_extra_clipSphereCenter, _init_clipSphereFactor, _init_extra_clipSphereFactor, _init_clipSphereFactor2, _init_extra_clipSphereFactor2, _init_observers, _init_extra_observers, _init_worldPosition, _init_extra_worldPosition, _init_rotationCurve, _init_extra_rotationCurve, _init_worldRotation, _init_extra_worldRotation, _init_modelScale, _init_extra_modelScale, _init_locatorSets, _init_extra_locatorSets, _init_activationStrength, _init_extra_activationStrength, _init_albedoColor, _init_extra_albedoColor, _init_display, _init_extra_display, _init_update, _init_extra_update, _init_secondaryLightingSphereRadius, _init_extra_secondaryLightingSphereRadius, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_dirtLevel, _init_extra_dirtLevel, _init_lastDamageLocatorHit, _init_extra_lastDamageLocatorHit, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_modelWorldPosition, _init_extra_modelWorldPosition, _init_modelTranslationCurve, _init_extra_modelTranslationCurve, _init_modelRotationCurve, _init_extra_modelRotationCurve, _init_shapeEllipsoidCenter, _init_extra_shapeEllipsoidCenter, _init_shapeEllipsoidRadius, _init_extra_shapeEllipsoidRadius, _init_translationCurve, _init_extra_translationCurve, _init_worldTransform, _init_extra_worldTransform, _init_inverseWorldTransform, _init_extra_inverseWorldTransform, _init_lastWorldTransform, _init_extra_lastWorldTransform, _init_worldVelocity, _init_extra_worldVelocity, _init_audioGeometry, _init_extra_audioGeometry, _init_isVisible, _init_extra_isVisible, _initProto],
        c: [_EveSpaceObject, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveSpaceObject2",
        family: "eve/spaceObject"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("ReflectionMode")], 16, "reflectionMode"], [[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "effectChildren"], [[io, io.persist, void 0, type.list("IEveTransform")], 16, "children"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.readwrite, void 0, type.objectRef("EveChildInheritProperties")], 16, "inheritProperties"], [[io, io.persist, void 0, type.list("EveCustomMask")], 16, "customMasks"], [[io, io.persist, void 0, type.list("EveMeshOverlayEffect")], 16, "overlayEffects"], [[io, io.read, void 0, type.objectRef("Tr2BindingVector3")], 16, "positionDelta"], [[io, io.read, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lodLevel"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.readwrite, type, type.boolean], 16, "isPickable"], [[io, io.read, type, type.float32], 16, "estimatedPixelDiameter"], [[io, io.read, type, type.float32], 16, "estimatedPixelDiameterWithChildren"], [[io, io.read, type, type.vec3], 16, "generatedShapeEllipsoidCenter"], [[io, io.read, type, type.vec3], 16, "generatedShapeEllipsoidRadius"], [[io, io.read, void 0, type.objectRef("Tr2GrannyAnimation")], 16, "animationUpdater"], [[io, io.persist, type, type.string], 16, "dna"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "castShadow"], [[io, io.persist, type, type.boolean], 16, "isAnimated"], [[io, io.persist, type, type.boolean], 16, "dynamicBoundingSphereEnabled"], [[io, io.persist, void 0, type.list("IEveSpaceObjectAttachment")], 16, "attachments"], [[io, io.persist, void 0, type.list("EveSpaceObjectDecal")], 16, "decals"], [[io, io.notify, io, io.persist, void 0, type.list("Tr2Light")], 16, "lights"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.list("EveLocator2")], 16, "locators"], [[io, io.persist, void 0, type.objectRef("Tr2MeshBase")], 16, "mesh"], [[io, io.persist, void 0, type.objectRef("EveImpactOverlay")], 16, "impactOverlay"], [[io, io.persist, type, type.vec3], 16, "clipSphereCenter"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "clipSphereFactor2"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "clipSphereFactor"], [[io, io.persist, void 0, type.list("TriObserverLocal")], 16, "observers"], [[io, io.read, type, type.vec3], 16, "worldPosition"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.read, type, type.quat], 16, "worldRotation"], [[io, io.persist, type, type.float32], 16, "modelScale"], [[io, io.persist, void 0, type.list("EveLocatorSets")], 16, "locatorSets"], [[io, io.readwrite, type, type.float32], 16, "activationStrength"], [[io, io.readwrite, type, type.color], 16, "albedoColor"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.read, type, type.float32], 16, "secondaryLightingSphereRadius"], [[io, io.persist, type, type.vec3], 16, "boundingSphereCenter"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "dirtLevel"], [[io, io.read, type, type.int32], 16, "lastDamageLocatorHit"], [[io, io.persist, type, type.float32], 16, "boundingSphereRadius"], [[io, io.read, type, type.vec3], 16, "modelWorldPosition"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "modelTranslationCurve"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "modelRotationCurve"], [[io, io.persist, type, type.vec3], 16, "shapeEllipsoidCenter"], [[io, io.persist, type, type.vec3], 16, "shapeEllipsoidRadius"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "translationCurve"], [[io, io.read, type, type.mat4], 16, "worldTransform"], [[io, io.read, type, type.mat4], 16, "inverseWorldTransform"], [[io, io.read, type, type.mat4], 16, "lastWorldTransform"], [[io, io.read, type, type.vec3], 16, "worldVelocity"], [[io, io.readwrite, void 0, type.objectRef("ITr2AudGeometry")], 16, "audioGeometry"], [[type, type.boolean], 16, "isVisible"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetMesh"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMesh"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddController"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddObserver"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetInheritProperties"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetEffectChildByName"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddToEffectChildrenList"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddLight"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearLights"], [[carbon, carbon.method, impl, impl.implemented], 18, "RemoveFromEffectChildrenList"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetModelRotationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetModelRotationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetModelTranslationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetModelTranslationCurve"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateWorldTransform"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateSyncronous"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateAsyncronous"], [[carbon, carbon.method, impl, impl.implemented], 18, "DisplayChildren"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetObserverTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalToWorldTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWorldPosition"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWorldRotation"], [[carbon, carbon.method, impl, impl.implemented], 18, "FindSoundEmitter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMute"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayAnimationEx"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CalculateSkinnedBoundingBoxFromTransform"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CalculateSkinnedBoundingSphere"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearImpactDamage"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearAnimations"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CreateImpactFromPosition"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CreateImpact"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EndAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FreezeHighDetailMesh"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDamageLocatorCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocatorCount"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetCloseLocatorIndex"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetGoodLocatorIndex"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDamageLocatorDirection"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDamageLocator"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTransformedDamageLocator"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsImpostor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocatorPositionFromSet"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocatorRotationFromSet"], [[carbon, carbon.method, impl, impl.implemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PlayAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChainAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChainAnimationEx"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RebuildBoundingSphereInformation"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetControllerVariables"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLastUsedMeshLod"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocatorTransform"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLocalBoundingBox"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBoundingSphereCenter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBoundingSphereRadius"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBoneCount"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetImpactDamageState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetImpactAnimation"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetProceduralContainerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "StartControllers"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TransformLocators"]], 0, void 0, _EveEntity));
    }
    /** m_reflectionMode (EntityComponents::ReflectionMode - enum ReflectionMode) [READWRITE, PERSIST, NOTIFY, ENUM] */
    reflectionMode = (_initProto(this), _init_reflectionMode(this, 3));

    /** m_effectChildren (PIEveSpaceObjectChildVector) [READ, PERSIST] */
    effectChildren = (_init_extra_reflectionMode(this), _init_effectChildren(this, []));

    /** m_children (PIEveTransformVector) [READ, PERSIST] */
    children = (_init_extra_effectChildren(this), _init_children(this, []));

    /** m_name (std::string) [READWRITE, NOTIFY, PERSIST] */
    name = (_init_extra_children(this), _init_name(this, ""));

    /** m_mute (bool) [READWRITE, NOTIFY] */
    mute = (_init_extra_name(this), _init_mute(this, false));

    /** m_inheritProperties (EveChildInheritPropertiesPtr) [READWRITE] */
    inheritProperties = (_init_extra_mute(this), _init_inheritProperties(this, null));

    /** m_customMasks (PEveCustomMaskVector) [READ, PERSIST] */
    customMasks = (_init_extra_inheritProperties(this), _init_customMasks(this, []));

    /** m_overlayEffects (PEveMeshOverlayEffectVector) [READ, PERSIST] */
    overlayEffects = (_init_extra_customMasks(this), _init_overlayEffects(this, []));

    /** m_positionDelta (Tr2BindingVector3Ptr) [READ] */
    positionDelta = (_init_extra_overlayEffects(this), _init_positionDelta(this, null));

    /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
    lodLevel = (_init_extra_positionDelta(this), _init_lodLevel(this, -1));

    /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
    curveSets = (_init_extra_lodLevel(this), _init_curveSets(this, []));

    /** m_isPickable (bool) [READWRITE] */
    isPickable = (_init_extra_curveSets(this), _init_isPickable(this, true));

    /** m_estimatedPixelDiameter (float) [READ] */
    estimatedPixelDiameter = (_init_extra_isPickable(this), _init_estimatedPixelDiameter(this, 0));

    /** m_estimatedPixelDiameterWithChildren (float) [READ] */
    estimatedPixelDiameterWithChildren = (_init_extra_estimatedPixelDiameter(this), _init_estimatedPixelDiameterWithChildren(this, 0));

    /** m_generatedShapeEllipsoidCenter (Vector3) [READ] */
    generatedShapeEllipsoidCenter = (_init_extra_estimatedPixelDiameterWithChildren(this), _init_generatedShapeEllipsoidCenter(this, vec3.create()));

    /** m_generatedShapeEllipsoidRadius (Vector3) [READ] */
    generatedShapeEllipsoidRadius = (_init_extra_generatedShapeEllipsoidCenter(this), _init_generatedShapeEllipsoidRadius(this, vec3.fromValues(-1, -1, -1)));

    /** m_animationUpdater (Tr2GrannyAnimationPtr) [READ] */
    animationUpdater = (_init_extra_generatedShapeEllipsoidRadius(this), _init_animationUpdater(this, null));

    /** m_dna (std::string) [READ, PERSIST] */
    dna = (_init_extra_animationUpdater(this), _init_dna(this, ""));

    /** m_castShadow (bool) [READWRITE, NOTIFY, PERSIST] */
    castShadow = (_init_extra_dna(this), _init_castShadow(this, false));

    /** m_isAnimated (bool) [READWRITE, PERSIST] */
    isAnimated = (_init_extra_castShadow(this), _init_isAnimated(this, false));

    /** m_dynamicBoundingSphereEnabled (bool) [READ, PERSIST] */
    dynamicBoundingSphereEnabled = (_init_extra_isAnimated(this), _init_dynamicBoundingSphereEnabled(this, false));

    /** m_attachments (PIEveSpaceObjectAttachmentVector) [READ, PERSIST] */
    attachments = (_init_extra_dynamicBoundingSphereEnabled(this), _init_attachments(this, []));

    /** m_decals (PEveSpaceObjectDecalVector) [READ, PERSIST] */
    decals = (_init_extra_attachments(this), _init_decals(this, []));

    /** m_lights (PTr2LightVector) [READ, PERSIST, NOTIFY] */
    lights = (_init_extra_decals(this), _init_lights(this, []));

    /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
    externalParameters = (_init_extra_lights(this), _init_externalParameters(this, []));

    /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
    controllers = (_init_extra_externalParameters(this), _init_controllers(this, []));

    /** m_locators (PEveLocator2Vector) [READ, PERSIST] */
    locators = (_init_extra_controllers(this), _init_locators(this, []));

    /** m_mesh (Tr2MeshBasePtr) [READWRITE, PERSIST] */
    mesh = (_init_extra_locators(this), _init_mesh(this, null));

    /** m_impactOverlay (EveImpactOverlayPtr) [READWRITE, PERSIST] */
    impactOverlay = (_init_extra_mesh(this), _init_impactOverlay(this, null));

    /** m_clipSphereCenter (Vector3) [READWRITE, PERSIST] */
    clipSphereCenter = (_init_extra_impactOverlay(this), _init_clipSphereCenter(this, vec3.create()));

    /** m_clipSphereFactor2 (float) [READWRITE, NOTIFY] */
    clipSphereFactor2 = (_init_extra_clipSphereCenter(this), _init_clipSphereFactor(this, 0));

    /** m_clipSphereFactor (float) [READWRITE, NOTIFY] */
    clipSphereFactor = (_init_extra_clipSphereFactor(this), _init_clipSphereFactor2(this, 0));

    /** m_observers (PTriObserverLocalVector) [READ, PERSIST] */
    observers = (_init_extra_clipSphereFactor2(this), _init_observers(this, []));

    /** m_worldPosition (Vector3) [READ] */
    worldPosition = (_init_extra_observers(this), _init_worldPosition(this, vec3.create()));

    /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
    rotationCurve = (_init_extra_worldPosition(this), _init_rotationCurve(this, null));

    /** m_worldRotation (Quaternion) [READ] */
    worldRotation = (_init_extra_rotationCurve(this), _init_worldRotation(this, quat.create()));

    /** m_modelScale (float) [READWRITE, PERSIST] */
    modelScale = (_init_extra_worldRotation(this), _init_modelScale(this, 1));

    /** m_locatorSets (PEveLocatorSetsVector) [READ, PERSIST] */
    locatorSets = (_init_extra_modelScale(this), _init_locatorSets(this, []));

    /** m_activationStrength (float) [READWRITE] */
    activationStrength = (_init_extra_locatorSets(this), _init_activationStrength(this, 1));

    /** m_albedoColor (Color) [READWRITE] */
    albedoColor = (_init_extra_activationStrength(this), _init_albedoColor(this, vec4.createLinear()));

    /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
    display = (_init_extra_albedoColor(this), _init_display(this, true));

    /** m_update (bool) [READWRITE, PERSIST] */
    update = (_init_extra_display(this), _init_update(this, true));

    /** m_secondaryLightingSphereRadius (float) [READ] */
    secondaryLightingSphereRadius = (_init_extra_update(this), _init_secondaryLightingSphereRadius(this, 0));

    /** m_boundingSphereCenter (Vector3) [READWRITE, PERSIST] */
    boundingSphereCenter = (_init_extra_secondaryLightingSphereRadius(this), _init_boundingSphereCenter(this, vec3.create()));

    /** m_dirtLevel (float) [READWRITE, NOTIFY] */
    dirtLevel = (_init_extra_boundingSphereCenter(this), _init_dirtLevel(this, 0));

    /** m_lastDamageLocatorHit (int) [READ] */
    lastDamageLocatorHit = (_init_extra_dirtLevel(this), _init_lastDamageLocatorHit(this, -1));

    /** m_boundingSphereRadius (float) [READWRITE, PERSIST] */
    boundingSphereRadius = (_init_extra_lastDamageLocatorHit(this), _init_boundingSphereRadius(this, -1));

    /** m_boundingSphereWorldCenter (Vector3) [READ] */
    modelWorldPosition = (_init_extra_boundingSphereRadius(this), _init_modelWorldPosition(this, vec3.create()));

    /** m_modelTranslation (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
    modelTranslationCurve = (_init_extra_modelWorldPosition(this), _init_modelTranslationCurve(this, null));

    /** m_modelRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
    modelRotationCurve = (_init_extra_modelTranslationCurve(this), _init_modelRotationCurve(this, null));

    /** m_shapeEllipsoidCenter (Vector3) [READWRITE, PERSIST] */
    shapeEllipsoidCenter = (_init_extra_modelRotationCurve(this), _init_shapeEllipsoidCenter(this, vec3.create()));

    /** m_shapeEllipsoidRadius (Vector3) [READWRITE, PERSIST] */
    shapeEllipsoidRadius = (_init_extra_shapeEllipsoidCenter(this), _init_shapeEllipsoidRadius(this, vec3.fromValues(-1, -1, -1)));

    /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
    translationCurve = (_init_extra_shapeEllipsoidRadius(this), _init_translationCurve(this, null));
    worldTransform = (_init_extra_translationCurve(this), _init_worldTransform(this, mat4.create()));
    inverseWorldTransform = (_init_extra_worldTransform(this), _init_inverseWorldTransform(this, mat4.create()));
    lastWorldTransform = (_init_extra_inverseWorldTransform(this), _init_lastWorldTransform(this, mat4.create()));
    worldVelocity = (_init_extra_lastWorldTransform(this), _init_worldVelocity(this, vec3.create()));
    audioGeometry = (_init_extra_worldVelocity(this), _init_audioGeometry(this, null));
    isVisible = (_init_extra_audioGeometry(this), _init_isVisible(this, false));
    #controllerVariables = (_init_extra_isVisible(this), new Map([["DirtLevel", 0], ["ActivationStrength", 1], ["ShieldDamage", 1], ["ArmorDamage", 1], ["HullDamage", 1], ["ClipSphereFactor", 0], ["ClipSphereFactor2", 0]]));
    #lastUpdateTransformTime = null;
    get meshLod() {
      return this.mesh;
    }
    set meshLod(mesh) {
      this.mesh = mesh ?? null;
    }
    Initialize() {
      for (const controller of this.controllers) {
        if (!controller?.IsLinked?.()) {
          controller?.Link?.(this);
        }
      }
      return true;
    }
    GetMesh() {
      return this.mesh;
    }
    SetMesh(mesh) {
      this.mesh = mesh ?? null;
    }
    AddController(controller) {
      this.controllers.push(controller);
      if (!controller?.IsLinked?.()) {
        controller?.Link?.(this);
      }
      _EveSpaceObject.#ApplyControllerVariables(controller, this.#controllerVariables, "SetVariable");
      return controller;
    }
    AddObserver(observer) {
      this.observers.push(observer);
      return observer;
    }
    SetInheritProperties(colorSet) {
      if (!this.inheritProperties) {
        this.inheritProperties = new _EveChildInheritPrope();
      }
      this.inheritProperties.SetProperties(colorSet);
      const properties = this.inheritProperties.GetProperties();
      for (const child of this.effectChildren) {
        child?.SetInheritProperties?.(properties);
      }
      for (const light of this.lights) {
        light?.SetInheritProperties?.(properties);
      }
    }
    GetEffectChildByName(name) {
      const target = String(name ?? "");
      for (const child of this.effectChildren) {
        if ((child?.GetName?.() ?? child?.name ?? "") === target) {
          return child;
        }
      }
      return null;
    }
    AddToEffectChildrenList(child) {
      if (this.inheritProperties) {
        child?.SetInheritProperties?.(this.inheritProperties.GetProperties());
      }
      this.effectChildren.push(child);
      _EveSpaceObject.#ApplyControllerVariables(child, this.#controllerVariables, "SetControllerVariable");
      return child;
    }
    AddLight(light) {
      if (this.inheritProperties) {
        light?.SetInheritProperties?.(this.inheritProperties.GetProperties());
      }
      this.lights.push(light);
    }
    ClearLights() {
      this.lights.length = 0;
    }
    RemoveFromEffectChildrenList(child) {
      const index = this.effectChildren.indexOf(child);
      if (index === -1) {
        return false;
      }
      this.effectChildren.splice(index, 1);
      return true;
    }
    SetModelRotationCurve(curve) {
      this.modelRotationCurve = curve ?? null;
    }
    GetModelRotationCurve() {
      return this.modelRotationCurve;
    }
    SetModelTranslationCurve(curve) {
      this.modelTranslationCurve = curve ?? null;
    }
    GetModelTranslationCurve() {
      return this.modelTranslationCurve;
    }
    UpdateWorldTransform(time) {
      const nextTime = Number(time) || 0;
      if (this.#lastUpdateTransformTime === nextTime) {
        return false;
      }
      this.#lastUpdateTransformTime = nextTime;
      mat4.copy(this.lastWorldTransform, this.worldTransform);
      _EveSpaceObject.#UpdateCurve(this.translationCurve, nextTime, this.worldPosition, _EveSpaceObject.#zero);
      if (this.translationCurve?.GetValueDotAt) {
        this.translationCurve.GetValueDotAt(nextTime, this.worldVelocity);
      } else {
        vec3.set(this.worldVelocity, 0, 0, 0);
      }
      _EveSpaceObject.#UpdateCurve(this.rotationCurve, nextTime, this.worldRotation, _EveSpaceObject.#identityRotation);
      const rotation = quat.clone(this.worldRotation);
      if (this.modelRotationCurve) {
        const modelRotation = quat.create();
        _EveSpaceObject.#UpdateCurve(this.modelRotationCurve, nextTime, modelRotation, _EveSpaceObject.#identityRotation);
        quat.multiply(rotation, modelRotation, rotation);
      }
      mat4.fromQuat(this.worldTransform, rotation);
      if (this.modelScale !== 1) {
        mat4.scale(this.worldTransform, this.worldTransform, [this.modelScale, this.modelScale, this.modelScale]);
      }
      if (this.modelTranslationCurve) {
        const modelTranslation = vec3.create();
        _EveSpaceObject.#UpdateCurve(this.modelTranslationCurve, nextTime, modelTranslation, _EveSpaceObject.#zero);
        vec3.transformMat4(modelTranslation, modelTranslation, this.worldTransform);
        this.worldTransform[12] = this.worldPosition[0] + modelTranslation[0];
        this.worldTransform[13] = this.worldPosition[1] + modelTranslation[1];
        this.worldTransform[14] = this.worldPosition[2] + modelTranslation[2];
      } else {
        this.worldTransform[12] = this.worldPosition[0];
        this.worldTransform[13] = this.worldPosition[1];
        this.worldTransform[14] = this.worldPosition[2];
      }
      if (!mat4.invert(this.inverseWorldTransform, this.worldTransform)) {
        mat4.identity(this.inverseWorldTransform);
      }
      return true;
    }
    UpdateSyncronous(updateContext = null) {
      const time = _EveSpaceObject.#GetContextValue(updateContext, "GetTime", "currentTime", "time");
      this.UpdateWorldTransform(time);
      if (!this.update) {
        return false;
      }
      const observerTransform = this.GetObserverTransform();
      for (const observer of this.observers) {
        observer?.Update?.(observerTransform);
      }
      if (this.effectChildren.length) {
        const params = new _EveChildUpdateParams();
        params.spaceObjectParent = this;
        params.ownerMaxSpeed = Number(this.maxSpeed) || 0;
        params.activationStrength = this.activationStrength;
        mat4.copy(params.localToWorldTransform, this.GetLocalToWorldTransform());
        for (const child of this.effectChildren) {
          params.isVisible = this.display && (this.DisplayChildren() || !!child?.IsAlwaysOn?.());
          child?.UpdateSyncronous?.(updateContext, params);
        }
      }
      this.impactOverlay?.UpdateSyncronous?.(updateContext, this);
      return true;
    }
    UpdateAsyncronous(updateContext = null) {
      if (!this.update) {
        return 0;
      }
      const threshold = _EveSpaceObject.#GetContextValue(updateContext, "GetHighDetailThreshold", "highDetailThreshold");
      const frequency = this.isVisible && threshold > 0 ? Math.min(1, this.estimatedPixelDiameter / threshold) : 0;
      for (const controller of this.controllers) {
        controller?.Update?.(frequency);
      }
      for (const child of this.children) {
        child?.Update?.(updateContext);
      }
      if (this.effectChildren.length) {
        const params = new _EveChildUpdateParams();
        params.spaceObjectParent = this;
        params.ownerMaxSpeed = Number(this.maxSpeed) || 0;
        params.activationStrength = this.activationStrength;
        params.controllerUpdateFrequency = frequency;
        mat4.copy(params.localToWorldTransform, this.GetLocalToWorldTransform());
        for (const child of this.effectChildren) {
          params.isVisible = this.display && (this.DisplayChildren() || !!child?.IsAlwaysOn?.());
          child?.UpdateAsyncronous?.(updateContext, params);
        }
      }
      this.impactOverlay?.UpdateAsyncronous?.(updateContext, this);
      return frequency;
    }
    DisplayChildren() {
      return true;
    }
    GetObserverTransform() {
      return this.worldTransform;
    }
    GetLocalToWorldTransform() {
      return this.worldTransform;
    }
    GetWorldPosition() {
      return this.worldPosition;
    }
    GetWorldRotation() {
      return this.worldRotation;
    }
    FindSoundEmitter(name) {
      const target = String(name ?? "");
      for (const observer of this.observers) {
        if (observer?.name === target) {
          return typeof observer.GetObserver === "function" ? observer.GetObserver() : observer.observer ?? null;
        }
      }
      for (const child of this.effectChildren) {
        const emitter = child?.FindSoundEmitter?.(target);
        if (emitter) {
          return emitter;
        }
      }
      return null;
    }
    SetMute(mute) {
      this.mute = !!mute;
      for (const child of this.effectChildren) {
        child?.SetMute?.(this.mute);
      }
      for (const observer of this.observers) {
        observer?.SetMute?.(this.mute);
      }
    }

    /** Carbon method PlayAnimationEx (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
    PlayAnimationEx(...args) {
      throw new Error("EveSpaceObject2.PlayAnimationEx is not implemented in CarbonEngineJS.");
    }

    /** Carbon method CalculateSkinnedBoundingBoxFromTransform (MAP_METHOD_AND_WRAP). */
    CalculateSkinnedBoundingBoxFromTransform(...args) {
      throw new Error("EveSpaceObject2.CalculateSkinnedBoundingBoxFromTransform is not implemented in CarbonEngineJS.");
    }

    /** Carbon method CalculateSkinnedBoundingSphere (MAP_METHOD_AND_WRAP). */
    CalculateSkinnedBoundingSphere(...args) {
      throw new Error("EveSpaceObject2.CalculateSkinnedBoundingSphere is not implemented in CarbonEngineJS.");
    }

    /** Carbon method ClearImpactDamage (MAP_METHOD_AND_WRAP). */
    ClearImpactDamage(...args) {
      throw new Error("EveSpaceObject2.ClearImpactDamage is not implemented in CarbonEngineJS.");
    }

    /** Carbon method ClearAnimations (MAP_METHOD_AND_WRAP). */
    ClearAnimations(...args) {
      throw new Error("EveSpaceObject2.ClearAnimations is not implemented in CarbonEngineJS.");
    }

    /** Carbon method CreateImpactFromPosition (MAP_METHOD_AND_WRAP). */
    CreateImpactFromPosition(...args) {
      throw new Error("EveSpaceObject2.CreateImpactFromPosition is not implemented in CarbonEngineJS.");
    }

    /** Carbon method CreateImpact (MAP_METHOD_AND_WRAP). */
    CreateImpact(...args) {
      throw new Error("EveSpaceObject2.CreateImpact is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EndAnimation (MAP_METHOD_AND_WRAP). */
    EndAnimation(...args) {
      throw new Error("EveSpaceObject2.EndAnimation is not implemented in CarbonEngineJS.");
    }

    /** Carbon method FreezeHighDetailMesh (MAP_METHOD_AND_WRAP). */
    FreezeHighDetailMesh(...args) {
      throw new Error("EveSpaceObject2.FreezeHighDetailMesh is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetDamageLocatorCount (MAP_METHOD_AND_WRAP). */
    GetDamageLocatorCount(...args) {
      throw new Error("EveSpaceObject2.GetDamageLocatorCount is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetLocatorCount (MAP_METHOD_AND_WRAP). */
    GetLocatorCount(...args) {
      throw new Error("EveSpaceObject2.GetLocatorCount is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetCloseLocatorIndex (MAP_METHOD_AND_WRAP). */
    GetCloseLocatorIndex(...args) {
      throw new Error("EveSpaceObject2.GetCloseLocatorIndex is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetGoodLocatorIndex -> GetCloseLocatorIndex (MAP_METHOD_AND_WRAP). */
    GetGoodLocatorIndex(...args) {
      throw new Error("EveSpaceObject2.GetGoodLocatorIndex is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetDamageLocatorDirection -> GetDamageLocatorDirectionLocal (MAP_METHOD_AND_WRAP). */
    GetDamageLocatorDirection(...args) {
      throw new Error("EveSpaceObject2.GetDamageLocatorDirection is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetDamageLocator (MAP_METHOD_AND_WRAP). */
    GetDamageLocator(...args) {
      throw new Error("EveSpaceObject2.GetDamageLocator is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetTransformedDamageLocator (MAP_METHOD_AND_WRAP). */
    GetTransformedDamageLocator(...args) {
      throw new Error("EveSpaceObject2.GetTransformedDamageLocator is not implemented in CarbonEngineJS.");
    }

    /** Carbon method IsImpostor (MAP_METHOD_AND_WRAP). */
    IsImpostor(...args) {
      throw new Error("EveSpaceObject2.IsImpostor is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetLocatorPositionFromSet (MAP_METHOD_AND_WRAP). */
    GetLocatorPositionFromSet(...args) {
      throw new Error("EveSpaceObject2.GetLocatorPositionFromSet is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetLocatorRotationFromSet (MAP_METHOD_AND_WRAP). */
    GetLocatorRotationFromSet(...args) {
      throw new Error("EveSpaceObject2.GetLocatorRotationFromSet is not implemented in CarbonEngineJS.");
    }
    HandleControllerEvent(name) {
      const eventName = String(name ?? "");
      for (const controller of this.controllers) {
        controller?.HandleEvent?.(eventName);
      }
      for (const child of this.effectChildren) {
        child?.HandleControllerEvent?.(eventName);
      }
      for (const overlay of this.overlayEffects) {
        overlay?.HandleControllerEvent?.(eventName);
      }
    }

    /** Carbon method PlayAnimation -> PlayAnimationOnce (MAP_METHOD_AND_WRAP). */
    PlayAnimation(...args) {
      throw new Error("EveSpaceObject2.PlayAnimation is not implemented in CarbonEngineJS.");
    }

    /** Carbon method ChainAnimation (MAP_METHOD_AND_WRAP). */
    ChainAnimation(...args) {
      throw new Error("EveSpaceObject2.ChainAnimation is not implemented in CarbonEngineJS.");
    }

    /** Carbon method ChainAnimationEx (MAP_METHOD_AND_WRAP). */
    ChainAnimationEx(...args) {
      throw new Error("EveSpaceObject2.ChainAnimationEx is not implemented in CarbonEngineJS.");
    }

    /** Carbon method RebuildBoundingSphereInformation (MAP_METHOD_AND_WRAP). */
    RebuildBoundingSphereInformation(...args) {
      throw new Error("EveSpaceObject2.RebuildBoundingSphereInformation is not implemented in CarbonEngineJS.");
    }
    GetControllerVariables() {
      return Object.fromEntries(this.#controllerVariables);
    }

    /** Carbon method GetLastUsedMeshLod (MAP_METHOD_AND_WRAP). */
    GetLastUsedMeshLod(...args) {
      throw new Error("EveSpaceObject2.GetLastUsedMeshLod is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetLocatorTransform -> GetEveLocatorTransform (MAP_METHOD_AND_WRAP). */
    GetLocatorTransform(...args) {
      throw new Error("EveSpaceObject2.GetLocatorTransform is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetLocalBoundingBox -> GetLocalBoundingBoxFromScript (MAP_METHOD_AND_WRAP). */
    GetLocalBoundingBox(...args) {
      throw new Error("EveSpaceObject2.GetLocalBoundingBox is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetBoundingSphereCenter (MAP_METHOD_AND_WRAP). */
    GetBoundingSphereCenter(...args) {
      throw new Error("EveSpaceObject2.GetBoundingSphereCenter is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetBoundingSphereRadius (MAP_METHOD_AND_WRAP). */
    GetBoundingSphereRadius(...args) {
      throw new Error("EveSpaceObject2.GetBoundingSphereRadius is not implemented in CarbonEngineJS.");
    }

    /** Carbon method GetBoneCount (MAP_METHOD_AND_WRAP). */
    GetBoneCount(...args) {
      throw new Error("EveSpaceObject2.GetBoneCount is not implemented in CarbonEngineJS.");
    }
    SetImpactDamageState(shield, armor, hull, doCreateArmorImpacts = true) {
      this.impactOverlay?.SetDamageState?.(shield, armor, hull, doCreateArmorImpacts);
      this.SetControllerVariable("ShieldDamage", shield);
      this.SetControllerVariable("ArmorDamage", armor);
      this.SetControllerVariable("HullDamage", hull);
    }

    /** Carbon method SetImpactAnimation (MAP_METHOD_AND_WRAP). */
    SetImpactAnimation(...args) {
      throw new Error("EveSpaceObject2.SetImpactAnimation is not implemented in CarbonEngineJS.");
    }
    SetControllerVariable(name, value) {
      const key = String(name ?? "");
      const next = Number(value);
      this.#controllerVariables.set(key, next);
      for (const controller of this.controllers) {
        controller?.SetVariable?.(key, next);
      }
      for (const child of this.effectChildren) {
        child?.SetControllerVariable?.(key, next);
      }
      for (const overlay of this.overlayEffects) {
        overlay?.SetControllerVariable?.(key, next);
      }
    }
    SetProceduralContainerVariable(name, value) {
      for (const child of this.effectChildren) {
        child?.SetProceduralContainerVariable?.(name, value);
      }
    }
    StartControllers() {
      for (const controller of this.controllers) {
        controller?.Start?.();
      }
      for (const child of this.effectChildren) {
        child?.StartControllers?.();
      }
      for (const overlay of this.overlayEffects) {
        overlay?.StartControllers?.();
      }
    }

    /** Carbon method TransformLocators -> PyTransformLocators (MAP_METHOD). */
    TransformLocators(...args) {
      throw new Error("EveSpaceObject2.TransformLocators is not implemented in CarbonEngineJS.");
    }
  }];
  #ApplyControllerVariables(target, variables, methodName) {
    const setter = target?.[methodName];
    if (typeof setter !== "function") {
      return;
    }
    for (const [name, value] of variables) {
      setter.call(target, name, value);
    }
  }
  #UpdateCurve(curve, time, out, fallback) {
    if (!curve) {
      for (let index = 0; index < out.length; index++) {
        out[index] = fallback[index];
      }
      return out;
    }
    let result;
    if (typeof curve.Update === "function") {
      result = curve.Update(time, out);
    } else if (typeof curve.GetValueAt === "function") {
      result = curve.GetValueAt(time, out);
    }
    if ((Array.isArray(result) || ArrayBuffer.isView(result)) && result !== out) {
      for (let index = 0; index < out.length; index++) {
        out[index] = result[index];
      }
    }
    return out;
  }
  #GetContextValue(context, methodName, ...propertyNames) {
    const method = context?.[methodName];
    if (typeof method === "function") {
      return Number(method.call(context)) || 0;
    }
    for (const propertyName of propertyNames) {
      if (context?.[propertyName] !== undefined && context?.[propertyName] !== null) {
        return Number(context[propertyName]) || 0;
      }
    }
    return 0;
  }
  #zero = Object.freeze([0, 0, 0]);
  #identityRotation = Object.freeze([0, 0, 0, 1]);
  ReflectionMode = ReflectionMode;
  Tr2Lod = Tr2Lod;
  constructor() {
    super(_EveSpaceObject), _initClass();
  }
}();

export { _EveSpaceObject as EveSpaceObject2 };
//# sourceMappingURL=EveSpaceObject2.js.map
