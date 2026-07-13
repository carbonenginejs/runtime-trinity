import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_visualizeMethod, _init_extra_visualizeMethod, _init_envMap1ResPath, _init_extra_envMap1ResPath, _init_envMap2ResPath, _init_extra_envMap2ResPath, _init_envMap3ResPath, _init_extra_envMap3ResPath, _init_lowQualityNebulaResPath, _init_extra_lowQualityNebulaResPath, _init_lowQualityNebulaMixResPath, _init_extra_lowQualityNebulaMixResPath, _init_envMapResPath, _init_extra_envMapResPath, _init_fogColor, _init_extra_fogColor, _init_sunDirection, _init_extra_sunDirection, _init_ambientColor, _init_extra_ambientColor, _init_shLightingManager, _init_extra_shLightingManager, _init_combinedPostProcessAttributes, _init_extra_combinedPostProcessAttributes, _init_dataTextureMgr, _init_extra_dataTextureMgr, _init_dynamicObjectReflectionEnabled, _init_extra_dynamicObjectReflectionEnabled, _init_componentRegistry, _init_extra_componentRegistry, _init_curveSets, _init_extra_curveSets, _init_defaultDiffuseRoughness, _init_extra_defaultDiffuseRoughness, _init_fogStart, _init_extra_fogStart, _init_fogEnd, _init_extra_fogEnd, _init_reflectionIntensity, _init_extra_reflectionIntensity, _init_distanceFields, _init_extra_distanceFields, _init_backgroundEffect, _init_extra_backgroundEffect, _init_backgroundReflectionIntensity, _init_extra_backgroundReflectionIntensity, _init_nebulaIntensity, _init_extra_nebulaIntensity, _init_display, _init_extra_display, _init_backgroundRenderingEnabled, _init_extra_backgroundRenderingEnabled, _init_update, _init_extra_update, _init_impostorManager, _init_extra_impostorManager, _init_lensflares, _init_extra_lensflares, _init_externalParameters, _init_extra_externalParameters, _init_fogMax, _init_extra_fogMax, _init_staticParticles, _init_extra_staticParticles, _init_debugRenderer, _init_extra_debugRenderer, _init_objects, _init_extra_objects, _init_uiObjects, _init_extra_uiObjects, _init_backgroundObjects, _init_extra_backgroundObjects, _init_planets, _init_extra_planets, _init_raytracingManager, _init_extra_raytracingManager, _init_reflectionBackLightingColor, _init_extra_reflectionBackLightingColor, _init_reflectionBackLightingContrast, _init_extra_reflectionBackLightingContrast, _init_reflectionProbe, _init_extra_reflectionProbe, _init_volumetricsRenderer, _init_extra_volumetricsRenderer, _init_starfield, _init_extra_starfield, _init_planetScale, _init_extra_planetScale, _init_planetCameraScale, _init_extra_planetCameraScale, _init_subSurfaceScattering, _init_extra_subSurfaceScattering, _init_shadowQualitySetting, _init_extra_shadowQualitySetting, _init_sunDiffuseColor, _init_extra_sunDiffuseColor, _init_sunDiffuseColorWithDynamicLights, _init_extra_sunDiffuseColorWithDynamicLights, _init_envMapRotation, _init_extra_envMapRotation, _init_ballpark, _init_extra_ballpark, _init_name, _init_extra_name, _init_sunBall, _init_extra_sunBall, _init_postprocess, _init_extra_postprocess, _init_virtualCameraSystem, _init_extra_virtualCameraSystem, _init_warpTunnel, _init_extra_warpTunnel, _init_perFrameDebug, _init_extra_perFrameDebug, _init_cascadedShadowMap, _init_extra_cascadedShadowMap, _init_updateTime, _init_extra_updateTime, _init_useSunDiffuseColorWithDynamicLights, _init_extra_useSunDiffuseColorWithDynamicLights, _init_envMap, _init_extra_envMap, _init_envMap2, _init_extra_envMap2, _init_envMap3, _init_extra_envMap3;

/** EveSpaceScene (eve/scene) - generated from schema shapeHash 571234b0.... */
let _EveSpaceScene;
class EveSpaceScene extends CjsModel {
  static {
    ({
      e: [_init_visualizeMethod, _init_extra_visualizeMethod, _init_envMap1ResPath, _init_extra_envMap1ResPath, _init_envMap2ResPath, _init_extra_envMap2ResPath, _init_envMap3ResPath, _init_extra_envMap3ResPath, _init_lowQualityNebulaResPath, _init_extra_lowQualityNebulaResPath, _init_lowQualityNebulaMixResPath, _init_extra_lowQualityNebulaMixResPath, _init_envMapResPath, _init_extra_envMapResPath, _init_fogColor, _init_extra_fogColor, _init_sunDirection, _init_extra_sunDirection, _init_ambientColor, _init_extra_ambientColor, _init_shLightingManager, _init_extra_shLightingManager, _init_combinedPostProcessAttributes, _init_extra_combinedPostProcessAttributes, _init_dataTextureMgr, _init_extra_dataTextureMgr, _init_dynamicObjectReflectionEnabled, _init_extra_dynamicObjectReflectionEnabled, _init_componentRegistry, _init_extra_componentRegistry, _init_curveSets, _init_extra_curveSets, _init_defaultDiffuseRoughness, _init_extra_defaultDiffuseRoughness, _init_fogStart, _init_extra_fogStart, _init_fogEnd, _init_extra_fogEnd, _init_reflectionIntensity, _init_extra_reflectionIntensity, _init_distanceFields, _init_extra_distanceFields, _init_backgroundEffect, _init_extra_backgroundEffect, _init_backgroundReflectionIntensity, _init_extra_backgroundReflectionIntensity, _init_nebulaIntensity, _init_extra_nebulaIntensity, _init_display, _init_extra_display, _init_backgroundRenderingEnabled, _init_extra_backgroundRenderingEnabled, _init_update, _init_extra_update, _init_impostorManager, _init_extra_impostorManager, _init_lensflares, _init_extra_lensflares, _init_externalParameters, _init_extra_externalParameters, _init_fogMax, _init_extra_fogMax, _init_staticParticles, _init_extra_staticParticles, _init_debugRenderer, _init_extra_debugRenderer, _init_objects, _init_extra_objects, _init_uiObjects, _init_extra_uiObjects, _init_backgroundObjects, _init_extra_backgroundObjects, _init_planets, _init_extra_planets, _init_raytracingManager, _init_extra_raytracingManager, _init_reflectionBackLightingColor, _init_extra_reflectionBackLightingColor, _init_reflectionBackLightingContrast, _init_extra_reflectionBackLightingContrast, _init_reflectionProbe, _init_extra_reflectionProbe, _init_volumetricsRenderer, _init_extra_volumetricsRenderer, _init_starfield, _init_extra_starfield, _init_planetScale, _init_extra_planetScale, _init_planetCameraScale, _init_extra_planetCameraScale, _init_subSurfaceScattering, _init_extra_subSurfaceScattering, _init_shadowQualitySetting, _init_extra_shadowQualitySetting, _init_sunDiffuseColor, _init_extra_sunDiffuseColor, _init_sunDiffuseColorWithDynamicLights, _init_extra_sunDiffuseColorWithDynamicLights, _init_envMapRotation, _init_extra_envMapRotation, _init_ballpark, _init_extra_ballpark, _init_name, _init_extra_name, _init_sunBall, _init_extra_sunBall, _init_postprocess, _init_extra_postprocess, _init_virtualCameraSystem, _init_extra_virtualCameraSystem, _init_warpTunnel, _init_extra_warpTunnel, _init_perFrameDebug, _init_extra_perFrameDebug, _init_cascadedShadowMap, _init_extra_cascadedShadowMap, _init_updateTime, _init_extra_updateTime, _init_useSunDiffuseColorWithDynamicLights, _init_extra_useSunDiffuseColorWithDynamicLights, _init_envMap, _init_extra_envMap, _init_envMap2, _init_extra_envMap2, _init_envMap3, _init_extra_envMap3, _initProto],
      c: [_EveSpaceScene, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpaceScene",
      family: "eve/scene"
    })], [[[io, io.readwrite, type, type.int32, void 0, schema.enum("EveVisualizeMethod")], 16, "visualizeMethod"], [[io, io.notify, io, io.persist, type, type.string], 16, "envMap1ResPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "envMap2ResPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "envMap3ResPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "lowQualityNebulaResPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "lowQualityNebulaMixResPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "envMapResPath"], [[io, io.persist, type, type.color], 16, "fogColor"], [[io, io.persist, type, type.vec3], 16, "sunDirection"], [[io, io.persist, type, type.color], 16, "ambientColor"], [[io, io.persistOnly, void 0, type.objectRef("Tr2ShLightingManager")], 16, "shLightingManager"], [[io, io.read, void 0, type.objectRef("Tr2PostProcessAttributes")], 16, "combinedPostProcessAttributes"], [[io, io.read, void 0, type.objectRef("Tr2DataTextureManager")], 16, "dataTextureMgr"], [[io, io.readwrite, type, type.boolean], 16, "dynamicObjectReflectionEnabled"], [[io, io.read, void 0, type.objectRef("EveComponentRegistry")], 16, "componentRegistry"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, type, type.float32], 16, "defaultDiffuseRoughness"], [[io, io.persist, type, type.float32], 16, "fogStart"], [[io, io.persist, type, type.float32], 16, "fogEnd"], [[io, io.notify, io, io.persist, type, type.float32], 16, "reflectionIntensity"], [[io, io.read, void 0, type.list("EveDistanceField")], 16, "distanceFields"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "backgroundEffect"], [[io, io.persist, type, type.float32], 16, "backgroundReflectionIntensity"], [[io, io.persist, type, type.float32], 16, "nebulaIntensity"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "backgroundRenderingEnabled"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.readwrite, void 0, type.objectRef("Tr2ImpostorManager")], 16, "impostorManager"], [[io, io.persist, void 0, type.list("EveLensflare")], 16, "lensflares"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, type, type.float32], 16, "fogMax"], [[io, io.read, void 0, type.list("EveSceneStaticParticles")], 16, "staticParticles"], [[io, io.readwrite, void 0, type.objectRef("Tr2DebugRenderer")], 16, "debugRenderer"], [[io, io.persist, void 0, type.list("IEveSpaceObject2")], 16, "objects"], [[io, io.persist, void 0, type.list("IEveSpaceObject2")], 16, "uiObjects"], [[io, io.persist, void 0, type.list("IEveSpaceObject2")], 16, "backgroundObjects"], [[io, io.persist, void 0, type.list("EvePlanet")], 16, "planets"], [[io, io.readwrite, void 0, type.objectRef("Tr2RaytracingManager")], 16, "raytracingManager"], [[io, io.notify, io, io.persist, type, type.color], 16, "reflectionBackLightingColor"], [[io, io.notify, io, io.persist, type, type.float32], 16, "reflectionBackLightingContrast"], [[io, io.notify, io, io.readwrite, void 0, type.objectRef("Tr2ReflectionProbe")], 16, "reflectionProbe"], [[io, io.read, void 0, type.objectRef("Tr2VolumetricsRenderer")], 16, "volumetricsRenderer"], [[io, io.persist, void 0, type.objectRef("EveStarfield")], 16, "starfield"], [[io, io.persist, type, type.float32], 16, "planetScale"], [[io, io.persist, type, type.float32], 16, "planetCameraScale"], [[io, io.read, void 0, type.objectRef("Tr2SSSSS")], 16, "subSurfaceScattering"], [[io, io.notify, io, io.readwrite, type, type.int32, void 0, schema.enum("ShadowQuality")], 16, "shadowQualitySetting"], [[io, io.persist, type, type.color], 16, "sunDiffuseColor"], [[io, io.persist, type, type.color], 16, "sunDiffuseColorWithDynamicLights"], [[io, io.persist, type, type.quat], 16, "envMapRotation"], [[io, io.readwrite, void 0, type.objectRef("IEveBallpark")], 16, "ballpark"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "sunBall"], [[io, io.persist, void 0, type.objectRef("Tr2PostProcess2")], 16, "postprocess"], [[io, io.persist, void 0, type.objectRef("EveVirtualCameraSystem")], 16, "virtualCameraSystem"], [[io, io.readwrite, void 0, type.objectRef("IEveSpaceObject2")], 16, "warpTunnel"], [[io, io.readwrite, type, type.float32], 16, "perFrameDebug"], [[io, io.persist, void 0, type.objectRef("Tr2ShadowMap")], 16, "cascadedShadowMap"], [[io, io.read, type, type.float64], 16, "updateTime"], [[io, io.persist, type, type.boolean], 16, "useSunDiffuseColorWithDynamicLights"], [[io, io.read, void 0, type.objectRef("ITr2TextureProvider")], 16, "envMap1"], [[io, io.read, void 0, type.objectRef("ITr2TextureProvider")], 16, "envMap2"], [[io, io.read, void 0, type.objectRef("ITr2TextureProvider")], 16, "envMap3"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PickObject"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PickAsyncObject"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PickObjectAndAreaID"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PickInfinity"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ReregisterEntities"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetPostProcessDebug"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UpdateScene"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_envMap3(this);
  }
  /** m_visualizeMethod (EveVisualizeMethod - enum EveVisualizeMethod) [READWRITE, ENUM] */
  visualizeMethod = (_initProto(this), _init_visualizeMethod(this, 0));

  /** m_envMap1ResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  envMap1ResPath = (_init_extra_visualizeMethod(this), _init_envMap1ResPath(this, ""));

  /** m_envMap2ResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  envMap2ResPath = (_init_extra_envMap1ResPath(this), _init_envMap2ResPath(this, ""));

  /** m_envMap3ResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  envMap3ResPath = (_init_extra_envMap2ResPath(this), _init_envMap3ResPath(this, ""));

  /** m_lowQualityNebulaResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  lowQualityNebulaResPath = (_init_extra_envMap3ResPath(this), _init_lowQualityNebulaResPath(this, ""));

  /** m_lowQualityNebulaMixResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  lowQualityNebulaMixResPath = (_init_extra_lowQualityNebulaResPath(this), _init_lowQualityNebulaMixResPath(this, ""));

  /** m_envMapResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  envMapResPath = (_init_extra_lowQualityNebulaMixResPath(this), _init_envMapResPath(this, ""));

  /** m_fogColor (Color) [READWRITE, PERSIST] */
  fogColor = (_init_extra_envMapResPath(this), _init_fogColor(this, vec4.create()));

  /** m_sunData.DirWorld (Vector3) [READWRITE, PERSIST] */
  sunDirection = (_init_extra_fogColor(this), _init_sunDirection(this, vec3.create()));

  /** m_ambientColor (Color) [READWRITE, PERSIST] */
  ambientColor = (_init_extra_sunDirection(this), _init_ambientColor(this, vec4.create()));

  /** m_shLightingManager (Tr2ShLightingManagerPtr) [PERSISTONLY] */
  shLightingManager = (_init_extra_ambientColor(this), _init_shLightingManager(this, null));

  /** m_combinedPostProcessAttributes (Tr2PostProcessAttributesPtr) [READ] */
  combinedPostProcessAttributes = (_init_extra_shLightingManager(this), _init_combinedPostProcessAttributes(this, null));

  /** m_dataTextureMgr (Tr2DataTextureManagerPtr) [READ] */
  dataTextureMgr = (_init_extra_combinedPostProcessAttributes(this), _init_dataTextureMgr(this, null));

  /** m_dynamicObjectReflectionEnabled (bool) [READWRITE] */
  dynamicObjectReflectionEnabled = (_init_extra_dataTextureMgr(this), _init_dynamicObjectReflectionEnabled(this, true));

  /** m_componentRegistry (EveComponentRegistryPtr) [READ] */
  componentRegistry = (_init_extra_dynamicObjectReflectionEnabled(this), _init_componentRegistry(this, null));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_componentRegistry(this), _init_curveSets(this, []));

  /** m_defaultDiffuseRoughness (float) [READWRITE, PERSIST] */
  defaultDiffuseRoughness = (_init_extra_curveSets(this), _init_defaultDiffuseRoughness(this, 1));

  /** m_fogStart (float) [READWRITE, PERSIST] */
  fogStart = (_init_extra_defaultDiffuseRoughness(this), _init_fogStart(this, 0));

  /** m_fogEnd (float) [READWRITE, PERSIST] */
  fogEnd = (_init_extra_fogStart(this), _init_fogEnd(this, 0));

  /** m_reflectionIntensity (float) [READWRITE, PERSIST, NOTIFY] */
  reflectionIntensity = (_init_extra_fogEnd(this), _init_reflectionIntensity(this, 0));

  /** m_distanceFields (PEveDistanceFieldVector) [READ] */
  distanceFields = (_init_extra_reflectionIntensity(this), _init_distanceFields(this, []));

  /** m_backgroundEffect (Tr2EffectPtr) [READWRITE, PERSIST] */
  backgroundEffect = (_init_extra_distanceFields(this), _init_backgroundEffect(this, null));

  /** m_backgroundReflectionIntensity (float) [READWRITE, PERSIST] */
  backgroundReflectionIntensity = (_init_extra_backgroundEffect(this), _init_backgroundReflectionIntensity(this, 1));

  /** m_nebulaIntensity (float) [READWRITE, PERSIST] */
  nebulaIntensity = (_init_extra_backgroundReflectionIntensity(this), _init_nebulaIntensity(this, 1));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_nebulaIntensity(this), _init_display(this, true));

  /** m_backgroundRenderingEnabled (bool) [READWRITE, PERSIST] */
  backgroundRenderingEnabled = (_init_extra_display(this), _init_backgroundRenderingEnabled(this, false));

  /** m_update (bool) [READWRITE, PERSIST] */
  update = (_init_extra_backgroundRenderingEnabled(this), _init_update(this, true));

  /** m_impostorManager (Tr2ImpostorManagerPtr) [READWRITE] */
  impostorManager = (_init_extra_update(this), _init_impostorManager(this, null));

  /** m_lensflares (PEveLensflareVector) [READ, PERSIST] */
  lensflares = (_init_extra_impostorManager(this), _init_lensflares(this, []));

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  externalParameters = (_init_extra_lensflares(this), _init_externalParameters(this, []));

  /** m_fogMax (float) [READWRITE, PERSIST] */
  fogMax = (_init_extra_externalParameters(this), _init_fogMax(this, 0));

  /** m_staticParticles (PEveSceneStaticParticlesVector) [READ] */
  staticParticles = (_init_extra_fogMax(this), _init_staticParticles(this, []));

  /** m_debugRenderer (Tr2DebugRendererPtr) [READWRITE] */
  debugRenderer = (_init_extra_staticParticles(this), _init_debugRenderer(this, null));

  /** m_objects (PIEveSpaceObject2Vector) [READ, PERSIST] */
  objects = (_init_extra_debugRenderer(this), _init_objects(this, []));

  /** m_uiObjects (PIEveSpaceObject2Vector) [READ, PERSIST] */
  uiObjects = (_init_extra_objects(this), _init_uiObjects(this, []));

  /** m_backgroundObjects (PIEveSpaceObject2Vector) [READ, PERSIST] */
  backgroundObjects = (_init_extra_uiObjects(this), _init_backgroundObjects(this, []));

  /** m_planets (PEvePlanetVector) [READ, PERSIST] */
  planets = (_init_extra_backgroundObjects(this), _init_planets(this, []));

  /** m_rtManager (Tr2RaytracingManagerPtr) [READWRITE] */
  raytracingManager = (_init_extra_planets(this), _init_raytracingManager(this, null));

  /** m_reflectionBackLightingColor (Color) [READWRITE, PERSIST, NOTIFY] */
  reflectionBackLightingColor = (_init_extra_raytracingManager(this), _init_reflectionBackLightingColor(this, vec4.fromValues(2, 2, 2, 2)));

  /** m_reflectionBackLightingContrast (float) [READWRITE, PERSIST, NOTIFY] */
  reflectionBackLightingContrast = (_init_extra_reflectionBackLightingColor(this), _init_reflectionBackLightingContrast(this, 8));

  /** m_reflectionProbe (Tr2ReflectionProbePtr) [READWRITE, NOTIFY] */
  reflectionProbe = (_init_extra_reflectionBackLightingContrast(this), _init_reflectionProbe(this, null));

  /** m_volumetricsRenderer (Tr2VolumetricsRendererPtr) [READ] */
  volumetricsRenderer = (_init_extra_reflectionProbe(this), _init_volumetricsRenderer(this, null));

  /** m_starfield (EveStarfieldPtr) [READWRITE, PERSIST] */
  starfield = (_init_extra_volumetricsRenderer(this), _init_starfield(this, null));

  /** m_planetScale (float) [READWRITE, PERSIST] */
  planetScale = (_init_extra_starfield(this), _init_planetScale(this, 1000000));

  /** m_planetCameraScale (float) [READWRITE, PERSIST] */
  planetCameraScale = (_init_extra_planetScale(this), _init_planetCameraScale(this, 1000000));

  /** m_sssss (Tr2SSSSSPtr) [READ] */
  subSurfaceScattering = (_init_extra_planetCameraScale(this), _init_subSurfaceScattering(this, null));

  /** m_shadowQuality (ShadowQuality - enum ShadowQuality) [READWRITE, NOTIFY] */
  shadowQualitySetting = (_init_extra_subSurfaceScattering(this), _init_shadowQualitySetting(this, 3));

  /** m_sunColor (Color) [READWRITE, PERSIST] */
  sunDiffuseColor = (_init_extra_shadowQualitySetting(this), _init_sunDiffuseColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_sunColorWithDynamicLights (Color) [READWRITE, PERSIST] */
  sunDiffuseColorWithDynamicLights = (_init_extra_sunDiffuseColor(this), _init_sunDiffuseColorWithDynamicLights(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_envMapRotation (Quaternion) [READWRITE, PERSIST] */
  envMapRotation = (_init_extra_sunDiffuseColorWithDynamicLights(this), _init_envMapRotation(this, quat.create()));

  /** m_ballpark (IEveBallparkPtr) [READWRITE] */
  ballpark = (_init_extra_envMapRotation(this), _init_ballpark(this, null));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_ballpark(this), _init_name(this, ""));

  /** m_sunBall (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  sunBall = (_init_extra_name(this), _init_sunBall(this, null));

  /** m_sceneDefaultPostProcess (Tr2PostProcess2Ptr) [READWRITE, PERSIST] */
  postprocess = (_init_extra_sunBall(this), _init_postprocess(this, null));

  /** m_virtualCameraSystem (EveVirtualCameraSystemPtr) [READWRITE, PERSIST] */
  virtualCameraSystem = (_init_extra_postprocess(this), _init_virtualCameraSystem(this, null));

  /** m_warpTunnel (IEveSpaceObject2Ptr) [READWRITE] */
  warpTunnel = (_init_extra_virtualCameraSystem(this), _init_warpTunnel(this, null));

  /** m_perFrameDebug (float) [READWRITE] */
  perFrameDebug = (_init_extra_warpTunnel(this), _init_perFrameDebug(this, 0));

  /** m_cascadedShadowMap (Tr2ShadowMapPtr) [READWRITE, PERSIST] */
  cascadedShadowMap = (_init_extra_perFrameDebug(this), _init_cascadedShadowMap(this, null));

  /** m_updateTime (Be::Time) [READ] */
  updateTime = (_init_extra_cascadedShadowMap(this), _init_updateTime(this, 0));

  /** m_useSunColorWithDynamicLights (bool) [READWRITE, PERSIST] */
  useSunDiffuseColorWithDynamicLights = (_init_extra_updateTime(this), _init_useSunDiffuseColorWithDynamicLights(this, false));

  /** m_envMap1 (ITr2TextureProviderPtr) [READ] */
  envMap1 = (_init_extra_useSunDiffuseColorWithDynamicLights(this), _init_envMap(this, null));

  /** m_envMap2 (ITr2TextureProviderPtr) [READ] */
  envMap2 = (_init_extra_envMap(this), _init_envMap2(this, null));

  /** m_envMap3 (ITr2TextureProviderPtr) [READ] */
  envMap3 = (_init_extra_envMap2(this), _init_envMap3(this, null));

  /** Carbon method PickObject (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  PickObject(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "PickObject", args);
  }

  /** Carbon method PickAsyncObject (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  PickAsyncObject(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "PickAsyncObject", args);
  }

  /** Carbon method PickObjectAndAreaID -> PyPickObjectAndAreaID (MAP_METHOD). */
  PickObjectAndAreaID(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "PickObjectAndAreaID", args);
  }

  /** Carbon method PickInfinity (MAP_METHOD_AND_WRAP). */
  PickInfinity(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "PickInfinity", args);
  }

  /** Carbon method ReregisterEntities (MAP_METHOD_AND_WRAP). */
  ReregisterEntities(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "ReregisterEntities", args);
  }

  /** Carbon method GetPostProcessDebug (MAP_METHOD_AND_WRAP). */
  GetPostProcessDebug(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "GetPostProcessDebug", args);
  }

  /** Carbon method UpdateScene -> UpdateSceneFromScript (MAP_METHOD_AND_WRAP). */
  UpdateScene(...args) {
    throw CjsModel.notImplemented("EveSpaceScene", "UpdateScene", args);
  }
  static {
    _initClass();
  }
}

export { _EveSpaceScene as EveSpaceScene };
//# sourceMappingURL=EveSpaceScene.js.map
