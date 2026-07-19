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
import { EveLODHelper, Tr2Lod } from '../EveLODHelper.js';

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
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("ReflectionMode")], 16, "reflectionMode"], [[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "effectChildren"], [[io, io.persist, void 0, type.list("IEveTransform")], 16, "children"], [[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.readwrite, void 0, type.objectRef("EveChildInheritProperties")], 16, "inheritProperties"], [[io, io.persist, void 0, type.list("EveCustomMask")], 16, "customMasks"], [[io, io.persist, void 0, type.list("EveMeshOverlayEffect")], 16, "overlayEffects"], [[io, io.read, void 0, type.objectRef("Tr2BindingVector3")], 16, "positionDelta"], [[io, io.read, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lodLevel"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.readwrite, type, type.boolean], 16, "isPickable"], [[io, io.read, type, type.float32], 16, "estimatedPixelDiameter"], [[io, io.read, type, type.float32], 16, "estimatedPixelDiameterWithChildren"], [[io, io.read, type, type.vec3], 16, "generatedShapeEllipsoidCenter"], [[io, io.read, type, type.vec3], 16, "generatedShapeEllipsoidRadius"], [[io, io.read, void 0, type.objectRef("Tr2GrannyAnimation")], 16, "animationUpdater"], [[io, io.persist, type, type.string], 16, "dna"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "castShadow"], [[io, io.persist, type, type.boolean], 16, "isAnimated"], [[io, io.persist, type, type.boolean], 16, "dynamicBoundingSphereEnabled"], [[io, io.persist, void 0, type.list("IEveSpaceObjectAttachment")], 16, "attachments"], [[io, io.persist, void 0, type.list("EveSpaceObjectDecal")], 16, "decals"], [[io, io.notify, io, io.persist, void 0, type.list("Tr2Light")], 16, "lights"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.list("EveLocator2")], 16, "locators"], [[io, io.persist, void 0, type.objectRef("Tr2MeshBase")], 16, "mesh"], [[io, io.persist, void 0, type.objectRef("EveImpactOverlay")], 16, "impactOverlay"], [[io, io.persist, type, type.vec3], 16, "clipSphereCenter"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "clipSphereFactor2"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "clipSphereFactor"], [[io, io.persist, void 0, type.list("TriObserverLocal")], 16, "observers"], [[io, io.read, type, type.vec3], 16, "worldPosition"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.read, type, type.quat], 16, "worldRotation"], [[io, io.persist, type, type.float32], 16, "modelScale"], [[io, io.persist, void 0, type.list("EveLocatorSets")], 16, "locatorSets"], [[io, io.readwrite, type, type.float32], 16, "activationStrength"], [[io, io.readwrite, type, type.color], 16, "albedoColor"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.read, type, type.float32], 16, "secondaryLightingSphereRadius"], [[io, io.persist, type, type.vec3], 16, "boundingSphereCenter"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "dirtLevel"], [[io, io.read, type, type.int32], 16, "lastDamageLocatorHit"], [[io, io.persist, type, type.float32], 16, "boundingSphereRadius"], [[io, io.read, type, type.vec3], 16, "modelWorldPosition"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "modelTranslationCurve"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "modelRotationCurve"], [[io, io.persist, type, type.vec3], 16, "shapeEllipsoidCenter"], [[io, io.persist, type, type.vec3], 16, "shapeEllipsoidRadius"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "translationCurve"], [[io, io.read, type, type.mat4], 16, "worldTransform"], [[io, io.read, type, type.mat4], 16, "inverseWorldTransform"], [[io, io.read, type, type.mat4], 16, "lastWorldTransform"], [[io, io.read, type, type.vec3], 16, "worldVelocity"], [[io, io.readwrite, void 0, type.objectRef("ITr2AudGeometry")], 16, "audioGeometry"], [[type, type.boolean], 16, "isVisible"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetMesh"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMesh"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddController"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddObserver"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetInheritProperties"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetEffectChildByName"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddToEffectChildrenList"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddLight"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearLights"], [[carbon, carbon.method, impl, impl.implemented], 18, "RemoveFromEffectChildrenList"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetModelRotationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetModelRotationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetModelTranslationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetModelTranslationCurve"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateWorldTransform"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateSyncronous"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateAsyncronous"], [[carbon, carbon.method, impl, impl.implemented], 18, "DisplayChildren"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetObserverTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalToWorldTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWorldPosition"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetWorldRotation"], [[carbon, carbon.method, impl, impl.implemented], 18, "FindSoundEmitter"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMute"], [[carbon, carbon.method, impl, impl.adapted], 18, "PlayAnimationEx"], [[carbon, carbon.method, impl, impl.adapted], 18, "CalculateSkinnedBoundingBoxFromTransform"], [[carbon, carbon.method, impl, impl.adapted], 18, "CalculateSkinnedBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearImpactDamage"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearAnimations"], [[carbon, carbon.method, impl, impl.implemented], 18, "CreateImpactFromPosition"], [[carbon, carbon.method, impl, impl.adapted], 18, "CreateImpact"], [[carbon, carbon.method, impl, impl.implemented], 18, "EndAnimation"], [[carbon, carbon.method, impl, impl.implemented], 18, "FreezeHighDetailMesh"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetDamageLocatorCount"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocatorCount"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCloseLocatorIndex"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetGoodLocatorIndex"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDamageLocatorDirection"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetDamageLocator"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTransformedDamageLocator"], [[carbon, carbon.method, impl, impl.adapted], 18, "IsImpostor"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocatorPositionFromSet"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocatorRotationFromSet"], [[carbon, carbon.method, impl, impl.implemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.adapted], 18, "PlayAnimation"], [[carbon, carbon.method, impl, impl.implemented], 18, "ChainAnimation"], [[carbon, carbon.method, impl, impl.implemented], 18, "ChainAnimationEx"], [[carbon, carbon.method, impl, impl.adapted], 18, "RebuildBoundingSphereInformation"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetControllerVariables"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLastUsedMeshLod"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetLocatorTransform"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetLocalBoundingBox"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphereCenter"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphereRadius"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetBoneCount"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetImpactDamageState"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetImpactAnimation"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetProceduralContainerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "StartControllers"], [[carbon, carbon.method, impl, impl.adapted], 18, "TransformLocators"]], 0, void 0, _EveEntity));
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
      // Authored inherit properties propagate as part of the lifecycle so a
      // field-populated graph (values import, document hydration) matches the
      // SetInheritProperties authoring path.
      if (this.inheritProperties) {
        this.#PropagateInheritProperties();
      }
      // Carbon derives the impact overlay's damage locator count from the
      // "damage" locator set at build time; deriving it here keeps it out of
      // the authored values while reproducing the same live state.
      if (this.impactOverlay) {
        let damageLocatorCount = 0;
        for (const set of this.locatorSets) {
          if (set?.HasName?.("damage")) damageLocatorCount += set.locators.length;
        }
        this.impactOverlay.SetDamageLocatorCount(damageLocatorCount);
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
      this.#PropagateInheritProperties();
    }
    #PropagateInheritProperties() {
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

      // LOD-gated curve/overlay stamp (Carbon EveSpaceObject2::UpdateSyncronous:
      // ShouldUpdate(m_lodLevelWithChildren, time - m_lastCurveUpdateTime) -
      // adapted to lodLevel, m_lodLevelWithChildren is unported). Overlay effects
      // receive the context time as BOTH clocks, as Carbon does; the async pass
      // updates curve sets only on frames stamped here.
      if (EveLODHelper.ShouldUpdate(this.lodLevel, time - this.#lastCurveUpdateTime)) {
        this.#lastCurveUpdateTime = time;
        for (const overlay of this.overlayEffects) {
          overlay?.Update?.(time, time);
        }
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

      // Object-level curve sets update only on frames the sync-side LOD gate
      // stamped, receiving the context time as BOTH realTime and simTime
      // (Carbon EveSpaceObject2::UpdateAsyncronous: if (m_lastCurveUpdateTime ==
      // time) (*it)->Update(time, time)).
      const time = _EveSpaceObject.#GetContextValue(updateContext, "GetTime", "currentTime", "time");
      if (this.#lastCurveUpdateTime === time) {
        for (const curveSet of this.curveSets) {
          curveSet?.Update?.(time, time);
        }
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

    /**
     * Plays an animation with explicit loop, start, and speed settings
     * (Carbon PlayAnimationEx, MAP_METHOD_AND_WRAP_OPTIONAL_ARGS).
     */
    PlayAnimationEx(animName, loopCount, start, speed, clearWhenDone = true) {
      this.#PlayAnimation(animName, true, loopCount, start, speed, clearWhenDone);
    }

    /**
     * Calculates the skinned bounding box under a transform (CMF path: the
     * local box corners transformed with perspective divide). The granny path
     * is unported. Returns an inverted-empty { min, max } box when dynamic
     * bounds are disabled, as Carbon's BoundingBoxInitialize does.
     */
    CalculateSkinnedBoundingBoxFromTransform(transform) {
      const min = vec3.fromValues(Infinity, Infinity, Infinity);
      const max = vec3.fromValues(-Infinity, -Infinity, -Infinity);
      if (this.dynamicBoundingSphereEnabled && this.mesh?.GetGeometryResource?.()?.IsUsingCMF?.()) {
        const {
          min: localMin,
          max: localMax
        } = this.GetLocalBoundingBox();
        const corner = vec3.create();
        for (let index = 0; index < 8; index++) {
          vec3.set(corner, index & 1 ? localMax[0] : localMin[0], index & 2 ? localMax[1] : localMin[1], index & 4 ? localMax[2] : localMin[2]);
          vec3.transformMat4(corner, corner, transform);
          vec3.min(min, min, corner);
          vec3.max(max, max, corner);
        }
      }
      return {
        min,
        max
      };
    }

    /**
     * Calculates the skinned bounding sphere (CMF path: the current bounding
     * sphere; granny path unported). Returns (0,0,0,-1) when dynamic bounds
     * are disabled.
     */
    CalculateSkinnedBoundingSphere(out = vec4.create()) {
      if (this.dynamicBoundingSphereEnabled && this.mesh?.GetGeometryResource?.()?.IsUsingCMF?.()) {
        const center = this.GetBoundingSphereCenter();
        return vec4.set(out, center[0], center[1], center[2], this.GetBoundingSphereRadius());
      }
      return vec4.set(out, 0, 0, 0, -1);
    }

    /**
     * Clears all impact and damage effects on the impact overlay.
     */
    ClearImpactDamage() {
      this.impactOverlay?.Clear?.();
    }

    /**
     * Clears all animations on the animation updater.
     */
    ClearAnimations() {
      this.animationUpdater?.ClearAnimations?.();
    }

    /**
     * Creates an impact facing a position on the closest facing damage locator.
     */
    CreateImpactFromPosition(position, direction, lifeTime, size) {
      const closestDamageLocator = this.#GetClosestLocatorIndex(position, _EveSpaceObject.#damageLocatorSetName);
      return this.CreateImpact(closestDamageLocator, direction, lifeTime, size);
    }

    /**
     * Creates an impact effect on a damage locator through the impact overlay.
     */
    CreateImpact(damageLocatorIndex, direction, lifeTime, size) {
      if (this.impactOverlay) {
        return this.impactOverlay.CreateImpact?.(damageLocatorIndex, direction, lifeTime, size, 1, this.lodLevel, this) ?? -1;
      }
      return -1;
    }

    /**
     * Ends the current animation on the animation updater.
     */
    EndAnimation() {
      this.animationUpdater?.EndAnimation?.();
    }

    /**
     * Freezes LOD selection at the current mesh and marks decal geometry
     * frozen.
     */
    FreezeHighDetailMesh() {
      this.#allowLodSelection = false;
      for (const decal of this.decals) {
        decal?.SetHighDetailDecalState?.(true);
      }
    }

    /**
     * Gets the number of damage locators on this object.
     */
    GetDamageLocatorCount() {
      return this.GetLocatorCount(_EveSpaceObject.#damageLocatorSetName);
    }

    /**
     * Gets the number of locators in a named locator set.
     */
    GetLocatorCount(locatorSetName) {
      return this.#GetLocatorsForSet(locatorSetName)?.length ?? 0;
    }

    /**
     * Gets the closest locator in a set to a world position, ignoring locator
     * facing. Returns -1 when the set is missing or empty.
     */
    GetCloseLocatorIndex(position, locatorSetName) {
      const locators = this.#GetLocatorsForSet(locatorSetName);
      if (!locators) {
        return -1;
      }
      const posInObjectSpace = vec3.transformMat4(vec3.create(), position, this.inverseWorldTransform);
      const locatorPosition = vec3.create();
      const locatorDirection = vec3.create();
      let closestLength = Infinity;
      let closestIndex = -1;
      for (let index = 0; index < locators.length; index++) {
        this.#GetLocatorInObjectSpace(locatorPosition, locatorDirection, locators[index]);
        const distance = vec3.squaredDistance(locatorPosition, posInObjectSpace);
        if (distance < closestLength) {
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
    GetGoodLocatorIndex(position, locatorSetName) {
      return this.GetCloseLocatorIndex(position, locatorSetName);
    }

    /**
     * Gets the local direction of an indexed damage locator, (0,0,0) for
     * indices out of range (Carbon script GetDamageLocatorDirection maps to
     * GetDamageLocatorDirectionLocal).
     */
    GetDamageLocatorDirection(index, out = vec3.create()) {
      const locators = this.#GetLocatorsForSet(_EveSpaceObject.#damageLocatorSetName);
      if (!locators || !(index >= 0 && index < locators.length)) {
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
    GetDamageLocator(index, out = vec3.create()) {
      const locators = this.#GetLocatorsForSet(_EveSpaceObject.#damageLocatorSetName);
      if (!locators || !(index >= 0 && index < locators.length)) {
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
    GetTransformedDamageLocator(index, out = vec3.create()) {
      const locators = this.#GetLocatorsForSet(_EveSpaceObject.#damageLocatorSetName);
      if (!locators || !(index >= 0 && index < locators.length)) {
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
    IsImpostor() {
      return this.#impostorMode;
    }

    /**
     * Gets a locator position from a named set. Out-of-range or missing-set
     * queries return the world translation in world space and (0,0,0) in
     * object space, as Carbon does.
     */
    GetLocatorPositionFromSet(index, inWorldSpace, locatorSetName, out = vec3.create()) {
      const locators = this.#GetLocatorsForSet(locatorSetName);
      if (index < 0 || !locators || index >= locators.length) {
        if (inWorldSpace) {
          return vec3.set(out, this.worldTransform[12], this.worldTransform[13], this.worldTransform[14]);
        }
        return vec3.set(out, 0, 0, 0);
      }
      const direction = vec3.create();
      this.#GetLocatorInObjectSpace(out, direction, locators[index]);
      if (inWorldSpace) {
        vec3.transformMat4(out, out, this.worldTransform);
      }
      return out;
    }

    /**
     * Gets a locator direction from a named set. Out-of-range or missing-set
     * queries return (0,1,0), as Carbon does.
     */
    GetLocatorRotationFromSet(index, inWorldSpace, locatorSetName, out = vec3.create()) {
      const locators = this.#GetLocatorsForSet(locatorSetName);
      if (index < 0 || !locators || index >= locators.length) {
        return vec3.set(out, 0, 1, 0);
      }
      const position = vec3.create();
      this.#GetLocatorInObjectSpace(position, out, locators[index]);
      if (inWorldSpace) {
        _EveSpaceObject.#TransformNormal(out, out, this.worldTransform);
      }
      return out;
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

    /**
     * Plays an animation once, replacing the current one
     * (Carbon script PlayAnimation maps to PlayAnimationOnce).
     */
    PlayAnimation(animName) {
      this.#PlayAnimation(animName, true, 1, 0, 1, true);
    }

    /**
     * Chains an animation once after the current one (Carbon ChainAnimation).
     */
    ChainAnimation(animName) {
      this.#PlayAnimation(animName, false, 1, 0, 1, true);
    }

    /**
     * Chains an animation with explicit loop, start, and speed settings
     * (Carbon ChainAnimationEx).
     */
    ChainAnimationEx(animName, loopCount, start, speed) {
      this.#PlayAnimation(animName, false, loopCount, start, speed, true);
    }

    // Carbon EveSpaceObject2::PlayAnimation: every playback wrapper funnels
    // into the animation updater, which owns playback state; a missing updater
    // is a Carbon-faithful no-op.
    #PlayAnimation(animName, replace, loopCount, delay, speed, clearWhenDone) {
      this.animationUpdater?.PlayAnimation?.(String(animName ?? ""), replace, loopCount, delay, speed, clearWhenDone);
    }

    /**
     * Recalculates the authored bounding sphere from the mesh geometry
     * resource. Fails when no mesh or ready geometry resource is attached.
     */
    RebuildBoundingSphereInformation() {
      const mesh = this.mesh;
      if (!mesh) {
        return false;
      }
      const geometryRes = mesh.GetGeometryResource?.();
      if (!geometryRes || !geometryRes.IsGood?.()) {
        return false;
      }
      geometryRes.RecalculateBoundingSphere?.();
      const sphere = vec4.create();
      geometryRes.GetBoundingSphere?.(mesh.GetMeshIndex?.() ?? 0, sphere);
      vec3.set(this.boundingSphereCenter, sphere[0], sphere[1], sphere[2]);
      this.boundingSphereRadius = sphere[3];
      return true;
    }
    GetControllerVariables() {
      return Object.fromEntries(this.#controllerVariables);
    }

    /** Carbon method GetLastUsedMeshLod (MAP_METHOD_AND_WRAP). */
    GetLastUsedMeshLod(...args) {
      throw new Error("EveSpaceObject2.GetLastUsedMeshLod is not implemented in CarbonEngineJS.");
    }

    /**
     * Gets a named locator's transform (Carbon script GetLocatorTransform maps
     * to GetEveLocatorTransform): the identity for unknown names, the animated
     * bone world transform when the animation updater resolves the name, else
     * the authored locator transform.
     */
    GetLocatorTransform(name, out = mat4.create()) {
      const target = String(name ?? "");
      let locator = null;
      for (const candidate of this.locators) {
        if (candidate?.GetName?.() === target) {
          locator = candidate;
          break;
        }
      }
      if (!locator) {
        return mat4.identity(out);
      }
      if (this.animationUpdater?.GetBoneWorldTransform?.(target, out)) {
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
    GetLocalBoundingBox(minBounds, maxBounds) {
      const min = vec3.create();
      const max = vec3.create();
      const updater = this.animationUpdater;
      if (this.dynamicBoundingSphereEnabled && updater?.IsInitialized?.()) {
        const sphere = vec4.create();
        updater.GetDynamicBounds?.(sphere, min, max);
        vec3.copy(this.#localAabbMin, min);
        vec3.copy(this.#localAabbMax, max);
      } else if (this.mesh?.GetBoundingBox?.(min, max)) {
        vec3.copy(this.#localAabbMin, min);
        vec3.copy(this.#localAabbMax, max);
      } else {
        vec3.copy(min, this.#localAabbMin);
        vec3.copy(max, this.#localAabbMax);
      }
      if (minBounds && maxBounds) {
        vec3.copy(minBounds, min);
        vec3.copy(maxBounds, max);
        return true;
      }
      return {
        min,
        max
      };
    }

    /**
     * Gets the bounding sphere center, preferring the dynamic skinned sphere
     * when one is published.
     */
    GetBoundingSphereCenter(out = vec3.create()) {
      if (this.#dynamicBoundingSphere[3] !== -1) {
        return vec3.set(out, this.#dynamicBoundingSphere[0], this.#dynamicBoundingSphere[1], this.#dynamicBoundingSphere[2]);
      }
      return vec3.copy(out, this.boundingSphereCenter);
    }

    /**
     * Gets the model-scaled bounding sphere radius, preferring the dynamic
     * skinned sphere when one is published.
     */
    GetBoundingSphereRadius() {
      if (this.#dynamicBoundingSphere[3] !== -1) {
        return this.modelScale * this.#dynamicBoundingSphere[3];
      }
      return this.modelScale * this.boundingSphereRadius;
    }

    /**
     * Gets the number of mesh-bound bones. Carbon dereferences the animation
     * updater unchecked; CarbonEngineJS reports 0 when none is attached.
     */
    GetBoneCount() {
      const updater = this.animationUpdater;
      if (!updater) {
        return 0;
      }
      if (updater.IsUsingCMF?.()) {
        if (!updater.HasMeshBinding?.()) {
          return 0;
        }
        return updater.GetSkeletonBoneIndices?.().length ?? 0;
      }
      return updater.GetMeshBindingBoneCount?.() ?? 0;
    }
    SetImpactDamageState(shield, armor, hull, doCreateArmorImpacts = true) {
      this.impactOverlay?.SetDamageState?.(shield, armor, hull, doCreateArmorImpacts);
      this.SetControllerVariable("ShieldDamage", shield);
      this.SetControllerVariable("ArmorDamage", armor);
      this.SetControllerVariable("HullDamage", hull);
    }

    /**
     * Toggles a named impact-overlay animation (boosters, hardeners, ...).
     */
    SetImpactAnimation(name, enable, duration) {
      this.impactOverlay?.ToggleEffect?.(name, enable, duration);
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

    /**
     * Applies bone and model transforms to locators and returns
     * [position, rotation, boneIndex] tuples, as the Carbon script surface
     * does (TransformLocators maps to PyTransformLocators). Accepts either
     * locator records ({ position, direction, boneIndex }, Carbon's
     * LocatorStructureList shape) or the same [position, rotation, boneIndex]
     * tuple shape it returns.
     */
    TransformLocators(locators = []) {
      const result = [];
      for (const locator of locators ?? []) {
        const record = Array.isArray(locator) ? {
          position: locator[0],
          rotation: locator[1],
          boneIndex: locator[2]
        } : {
          position: locator?.position,
          rotation: locator?.direction ?? locator?.rotation,
          boneIndex: locator?.boneIndex
        };
        const position = vec3.clone(record.position ?? _EveSpaceObject.#zero);
        const rotation = quat.clone(record.rotation ?? _EveSpaceObject.#identityRotation);
        const boneIndex = Number(record.boneIndex ?? 0);
        this.#TransformLocator(position, rotation, boneIndex);
        if (this.modelTranslationCurve || this.modelRotationCurve) {
          this.#ApplyModelTransform(position, rotation);
        }
        result.push([position, rotation, boneIndex]);
      }
      return result;
    }

    // Carbon Blue TransformLocator: bone-attached records pick up the mesh
    // bone matrix; without bone data the authored values pass through.
    #TransformLocator(position, rotation, boneIndex) {
      const updater = this.animationUpdater;
      if (boneIndex <= 0 || !updater?.IsInitialized?.()) {
        return;
      }
      const bone = _EveSpaceObject.#GetBoneMatrix(updater, boneIndex);
      if (!bone) {
        return;
      }
      vec3.transformMat4(position, position, bone);
      const boneRotation = mat4.getRotation(quat.create(), bone);
      quat.multiply(rotation, boneRotation, rotation);
    }

    // Carbon Blue ApplyModelTransform samples both curves at the Be::Time()
    // origin (pure GetValueAt, no playback advance): translation adds, model
    // rotation rotates the position and pre-multiplies.
    #ApplyModelTransform(position, rotation) {
      if (this.modelTranslationCurve) {
        const translation = vec3.create();
        this.modelTranslationCurve.GetValueAt?.(0, translation);
        vec3.add(position, position, translation);
      }
      if (this.modelRotationCurve) {
        const modelRotation = quat.create();
        this.modelRotationCurve.GetValueAt?.(0, modelRotation);
        vec3.transformQuat(position, position, modelRotation);
        quat.multiply(rotation, modelRotation, rotation);
      }
    }

    // Carbon GetLocatorsForSet: first set matching the name wins.
    #GetLocatorsForSet(locatorSetName) {
      const target = String(locatorSetName ?? "");
      for (const set of this.locatorSets) {
        if (set?.HasName?.(target)) {
          return set.GetLocators();
        }
      }
      return null;
    }

    // Carbon GetLocatorInObjectSpace: the direction is +Y rotated by the
    // authored quaternion; bone-attached locators additionally apply the mesh
    // bone matrix. Carbon leaves the outputs untouched (caller-uninitialized)
    // when bone data is missing; CarbonEngineJS keeps the unskinned values.
    #GetLocatorInObjectSpace(outPosition, outDirection, locator) {
      vec3.transformQuat(outDirection, _EveSpaceObject.#unitY, locator.direction);
      vec3.copy(outPosition, locator.position);
      const updater = this.animationUpdater;
      if (locator.boneIndex > 0 && updater?.IsInitialized?.()) {
        const boneCount = Number(updater.GetMeshBoneCount?.() ?? 0);
        if (locator.boneIndex < boneCount) {
          const bone = _EveSpaceObject.#GetBoneMatrix(updater, locator.boneIndex);
          if (bone) {
            vec3.transformMat4(outPosition, locator.position, bone);
            _EveSpaceObject.#TransformNormal(outDirection, outDirection, bone);
          }
        }
      }
    }

    // Carbon GetClosestLocatorIndex: facing-gated closest search; 0 when the
    // set is missing, -1 when no locator faces the position.
    #GetClosestLocatorIndex(position, locatorSetName) {
      const locators = this.#GetLocatorsForSet(locatorSetName);
      if (!locators) {
        return 0;
      }
      const posInObjectSpace = vec3.transformMat4(vec3.create(), position, this.inverseWorldTransform);
      const locatorPosition = vec3.create();
      const locatorDirection = vec3.create();
      let closestLength = Infinity;
      let closestIndex = -1;
      for (let index = 0; index < locators.length; index++) {
        this.#GetLocatorInObjectSpace(locatorPosition, locatorDirection, locators[index]);
        if (!_EveSpaceObject.#IsLocatorFacingPosition(locatorDirection, posInObjectSpace)) {
          continue;
        }
        const distance = vec3.squaredDistance(locatorPosition, posInObjectSpace);
        if (distance < closestLength) {
          closestIndex = index;
          closestLength = distance;
        }
      }
      return closestIndex;
    }

    // Mesh bone matrices come from the (unported) animation updater; only
    // mat4-shaped entries are usable.
  }];
  #IsLocatorFacingPosition(locatorDirection, posInObjectSpace) {
    const moved = vec3.subtract(vec3.create(), posInObjectSpace, locatorDirection);
    return vec3.squaredLength(moved) < vec3.squaredLength(posInObjectSpace);
  }
  #TransformNormal(out, direction, matrix) {
    const x = direction[0];
    const y = direction[1];
    const z = direction[2];
    out[0] = matrix[0] * x + matrix[4] * y + matrix[8] * z;
    out[1] = matrix[1] * x + matrix[5] * y + matrix[9] * z;
    out[2] = matrix[2] * x + matrix[6] * y + matrix[10] * z;
    return out;
  }
  #GetBoneMatrix(updater, boneIndex) {
    const bones = updater.GetMeshBoneMatrixList?.();
    const bone = bones?.[boneIndex];
    return bone && bone.length >= 16 ? bone : null;
  }
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
  #unitY = Object.freeze([0, 1, 0]);
  #identityRotation = Object.freeze([0, 0, 0, 1]);
  #damageLocatorSetName = "damage";
  ReflectionMode = ReflectionMode;
  Tr2Lod = Tr2Lod;
  constructor() {
    super(_EveSpaceObject), _initClass();
  }
}();

export { _EveSpaceObject as EveSpaceObject2 };
//# sourceMappingURL=EveSpaceObject2.js.map
