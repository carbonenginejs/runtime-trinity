// Source: E:\carbonengine\trinity\trinity\Eve\EveSpaceScene.h
// Source: E:\carbonengine\trinity\trinity\Eve\EveSpaceScene.cpp
//
// Hand-maintained (promoted from src/generated/eve/scene; the generator skips it
// while this file exists). Fields mirror the generated schema shell; the
// additions are the per-frame update driver ported from Carbon
// EveSpaceScene::Update and the scene-owned EveUpdateContext member (Carbon
// m_updateContext - protected, so absent from the Blue schema scan).
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { EveUpdateContext } from "../EveUpdateContext.js";


// Module scratch for the per-frame sun-direction read (assume-dirty).
const sunDirectionScratch = vec3.create();

/** EveSpaceScene (eve/scene) - hand-maintained from schema shapeHash 571234b0.... */
@type.define({ className: "EveSpaceScene", family: "eve/scene" })
export class EveSpaceScene extends CjsModel
{

  /** m_visualizeMethod (EveVisualizeMethod - enum EveVisualizeMethod) [READWRITE, ENUM] */
  @io.readwrite
  @type.int32
  @schema.enum("EveVisualizeMethod")
  visualizeMethod = 0;

  /** m_envMap1ResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  envMap1ResPath = "";

  /** m_envMap2ResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  envMap2ResPath = "";

  /** m_envMap3ResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  envMap3ResPath = "";

  /** m_lowQualityNebulaResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  lowQualityNebulaResPath = "";

  /** m_lowQualityNebulaMixResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  lowQualityNebulaMixResPath = "";

  /** m_envMapResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.string
  envMapResPath = "";

  /** m_fogColor (Color) [READWRITE, PERSIST] */
  @io.persist
  @type.color
  fogColor = vec4.create();

  /** m_sunData.DirWorld (Vector3) [READWRITE, PERSIST] */
  @io.persist
  @type.vec3
  sunDirection = vec3.create();

  /** m_ambientColor (Color) [READWRITE, PERSIST] */
  @io.persist
  @type.color
  ambientColor = vec4.create();

  /** m_shLightingManager (Tr2ShLightingManagerPtr) [PERSISTONLY] */
  @io.persistOnly
  @type.model("Tr2ShLightingManager")
  shLightingManager = null;

  /** m_combinedPostProcessAttributes (Tr2PostProcessAttributesPtr) [READ] */
  @io.read
  @type.objectRef("Tr2PostProcessAttributes")
  combinedPostProcessAttributes = null;

  /** m_dataTextureMgr (Tr2DataTextureManagerPtr) [READ] */
  @io.read
  @type.objectRef("Tr2DataTextureManager")
  dataTextureMgr = null;

  /** m_dynamicObjectReflectionEnabled (bool) [READWRITE] */
  @io.readwrite
  @type.boolean
  dynamicObjectReflectionEnabled = true;

  /** m_componentRegistry (EveComponentRegistryPtr) [READ] */
  @io.read
  @type.objectRef("EveComponentRegistry")
  componentRegistry = null;

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  @io.persist
  @type.list("TriCurveSet")
  curveSets = [];

  /** m_defaultDiffuseRoughness (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  defaultDiffuseRoughness = 1;

  /** m_fogStart (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  fogStart = 0;

  /** m_fogEnd (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  fogEnd = 0;

  /** m_reflectionIntensity (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  reflectionIntensity = 0;

  /** m_distanceFields (PEveDistanceFieldVector) [READ] */
  @io.read
  @type.list("EveDistanceField")
  distanceFields = [];

  /** m_backgroundEffect (Tr2EffectPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("Tr2Effect")
  backgroundEffect = null;

  /** m_backgroundReflectionIntensity (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  backgroundReflectionIntensity = 1;

  /** m_nebulaIntensity (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  nebulaIntensity = 1;

  /** m_display (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  display = true;

  /** m_backgroundRenderingEnabled (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  backgroundRenderingEnabled = false;

  /** m_update (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  update = true;

  /** m_impostorManager (Tr2ImpostorManagerPtr) [READWRITE] */
  @io.readwrite
  @type.objectRef("Tr2ImpostorManager")
  impostorManager = null;

  /** m_lensflares (PEveLensflareVector) [READ, PERSIST] */
  @io.persist
  @type.list("EveLensflare")
  lensflares = [];

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  @io.persist
  @type.list("Tr2ExternalParameter")
  externalParameters = [];

  /** m_fogMax (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  fogMax = 0;

  /** m_staticParticles (PEveSceneStaticParticlesVector) [READ] */
  @io.read
  @type.list("EveSceneStaticParticles")
  staticParticles = [];

  /** m_debugRenderer (Tr2DebugRendererPtr) [READWRITE] */
  @io.readwrite
  @type.objectRef("Tr2DebugRenderer")
  debugRenderer = null;

  /** m_objects (PIEveSpaceObject2Vector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveSpaceObject2")
  objects = [];

  /** m_uiObjects (PIEveSpaceObject2Vector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveSpaceObject2")
  uiObjects = [];

  /** m_backgroundObjects (PIEveSpaceObject2Vector) [READ, PERSIST] */
  @io.persist
  @type.list("IEveSpaceObject2")
  backgroundObjects = [];

  /** m_planets (PEvePlanetVector) [READ, PERSIST] */
  @io.persist
  @type.list("EvePlanet")
  planets = [];

  /** m_rtManager (Tr2RaytracingManagerPtr) [READWRITE] */
  @io.readwrite
  @type.objectRef("Tr2RaytracingManager")
  raytracingManager = null;

  /** m_reflectionBackLightingColor (Color) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.color
  reflectionBackLightingColor = vec4.fromValues(2, 2, 2, 2);

  /** m_reflectionBackLightingContrast (float) [READWRITE, PERSIST, NOTIFY] */
  @io.notify
  @io.persist
  @type.float32
  reflectionBackLightingContrast = 8;

  /** m_reflectionProbe (Tr2ReflectionProbePtr) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.objectRef("Tr2ReflectionProbe")
  reflectionProbe = null;

  /** m_volumetricsRenderer (Tr2VolumetricsRendererPtr) [READ] */
  @io.read
  @type.objectRef("Tr2VolumetricsRenderer")
  volumetricsRenderer = null;

  /** m_starfield (EveStarfieldPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("EveStarfield")
  starfield = null;

  /** m_planetScale (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  planetScale = 1000000;

  /** m_planetCameraScale (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  planetCameraScale = 1000000;

  /** m_sssss (Tr2SSSSSPtr) [READ] */
  @io.read
  @type.objectRef("Tr2SSSSS")
  subSurfaceScattering = null;

  /** m_shadowQuality (ShadowQuality - enum ShadowQuality) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.int32
  @schema.enum("ShadowQuality")
  shadowQualitySetting = 3;

  /** m_sunColor (Color) [READWRITE, PERSIST] */
  @io.persist
  @type.color
  sunDiffuseColor = vec4.fromValues(1, 1, 1, 1);

  /** m_sunColorWithDynamicLights (Color) [READWRITE, PERSIST] */
  @io.persist
  @type.color
  sunDiffuseColorWithDynamicLights = vec4.fromValues(1, 1, 1, 1);

  /** m_envMapRotation (Quaternion) [READWRITE, PERSIST] */
  @io.persist
  @type.quat
  envMapRotation = quat.create();

  /** m_ballpark (IEveBallparkPtr) [READWRITE] */
  @io.readwrite
  @type.objectRef("IEveBallpark")
  ballpark = null;

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  @io.persist
  @type.string
  name = "";

  /** m_sunBall (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("ITriVectorFunction")
  sunBall = null;

  /** m_sceneDefaultPostProcess (Tr2PostProcess2Ptr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("Tr2PostProcess2")
  postprocess = null;

  /** m_virtualCameraSystem (EveVirtualCameraSystemPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("EveVirtualCameraSystem")
  virtualCameraSystem = null;

  /** m_warpTunnel (IEveSpaceObject2Ptr) [READWRITE] */
  @io.readwrite
  @type.objectRef("IEveSpaceObject2")
  warpTunnel = null;

  /** m_perFrameDebug (float) [READWRITE] */
  @io.readwrite
  @type.float32
  perFrameDebug = 0;

  /** m_cascadedShadowMap (Tr2ShadowMapPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("Tr2ShadowMap")
  cascadedShadowMap = null;

  /** m_updateTime (Be::Time) [READ] */
  @io.read
  @type.float64
  updateTime = 0;

  /** m_useSunColorWithDynamicLights (bool) [READWRITE, PERSIST] */
  @io.persist
  @type.boolean
  useSunDiffuseColorWithDynamicLights = false;

  /** m_envMap1 (ITr2TextureProviderPtr) [READ] */
  @io.read
  @type.objectRef("ITr2TextureProvider")
  envMap1 = null;

  /** m_envMap2 (ITr2TextureProviderPtr) [READ] */
  @io.read
  @type.objectRef("ITr2TextureProvider")
  envMap2 = null;

  /** m_envMap3 (ITr2TextureProviderPtr) [READ] */
  @io.read
  @type.objectRef("ITr2TextureProvider")
  envMap3 = null;

  // Carbon m_updateContext (protected, absent from the Blue scan): the scene
  // owns ONE frame context, constructed once and re-stamped each Update. The
  // host/driver stamps updateContext.renderContext (camera view) + .device per
  // pass before calling Update - our explicit replacement for Carbon's
  // Tr2Renderer view statics.
  updateContext = new EveUpdateContext();

  /**
   * Per-frame scene update, ported from Carbon EveSpaceScene::Update: stamps the
   * scene-owned frame context (time, origin, data-texture manager), then drives
   * every collection in Carbon's order - background objects, warp tunnel,
   * starfield, static particles, data textures, distance fields, lensflares,
   * virtual camera system, curve sets, then all space/UI objects synchronous
   * first and asynchronous second (Carbon parallelizes the async pass on a task
   * group; JS runs it sequentially). Finally reads the sun direction from the
   * sun ball.
   *
   * Adapted - deferred vs Carbon: the recording-frame dedup fast path, frustum
   * derivation (TriFrustum unported; context.frustum stays null), detail
   * threshold / LOD stamping (console-var globals + upscaling), raytracing flag,
   * planet update (planet view-matrix swap unported), post-process attribute
   * combine, and main-thread action flush.
   * @param {Number} realTime
   * @param {Number} simTime
   */
  @carbon.method
  @impl.adapted
  Update(realTime, simTime)
  {
    if (!this.update)
    {
      return;
    }

    const context = this.updateContext;
    context.SetTime(simTime);
    context.UpdateOrigin(this.ballpark);
    context.dataTextureManager = this.dataTextureMgr;

    for (const object of this.backgroundObjects)
    {
      object?.UpdateSyncronous?.(context);
    }
    for (const object of this.backgroundObjects)
    {
      object?.UpdateAsyncronous?.(context);
    }

    if (this.warpTunnel)
    {
      this.warpTunnel.UpdateSyncronous?.(context);
      this.warpTunnel.UpdateAsyncronous?.(context);
    }

    this.starfield?.Update?.(simTime);

    for (const staticParticles of this.staticParticles)
    {
      staticParticles?.Update?.(context);
    }

    this.dataTextureMgr?.Update?.(context);

    for (const distanceField of this.distanceFields)
    {
      distanceField?.Update?.(context);
    }

    for (const lensflare of this.lensflares)
    {
      lensflare?.Update?.(realTime, simTime);
    }

    this.virtualCameraSystem?.Update?.(realTime);

    for (const curveSet of this.curveSets)
    {
      curveSet?.Update?.(realTime, simTime);
    }

    for (const object of this.objects)
    {
      object?.UpdateSyncronous?.(context);
    }
    for (const object of this.uiObjects)
    {
      object?.UpdateSyncronous?.(context);
    }

    for (const object of this.objects)
    {
      object?.UpdateAsyncronous?.(context);
    }
    for (const object of this.uiObjects)
    {
      object?.UpdateAsyncronous?.(context);
    }

    // Sun direction from the sun ball: the normalized sun position, negated
    // (Carbon: m_sunData.DirWorld = -Normalize(sunDirection)).
    if (this.sunBall?.Update)
    {
      this.sunBall.Update(simTime, sunDirectionScratch);
      vec3.normalize(sunDirectionScratch, sunDirectionScratch);
      vec3.negate(this.sunDirection, sunDirectionScratch);
    }

    this.updateTime = simTime;
  }

  /** Carbon method PickObject (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  @carbon.method
  @impl.notImplemented
  PickObject(...args)
  {
    throw new Error("EveSpaceScene.PickObject is not implemented in CarbonEngineJS.");
  }

  /** Carbon method PickAsyncObject (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  @carbon.method
  @impl.notImplemented
  PickAsyncObject(...args)
  {
    throw new Error("EveSpaceScene.PickAsyncObject is not implemented in CarbonEngineJS.");
  }

  /** Carbon method PickObjectAndAreaID -> PyPickObjectAndAreaID (MAP_METHOD). */
  @carbon.method
  @impl.notImplemented
  PickObjectAndAreaID(...args)
  {
    throw new Error("EveSpaceScene.PickObjectAndAreaID is not implemented in CarbonEngineJS.");
  }

  /** Carbon method PickInfinity (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  PickInfinity(...args)
  {
    throw new Error("EveSpaceScene.PickInfinity is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ReregisterEntities (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  ReregisterEntities(...args)
  {
    throw new Error("EveSpaceScene.ReregisterEntities is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetPostProcessDebug (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetPostProcessDebug(...args)
  {
    throw new Error("EveSpaceScene.GetPostProcessDebug is not implemented in CarbonEngineJS.");
  }

  /** Carbon method UpdateScene -> UpdateSceneFromScript (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  UpdateScene(...args)
  {
    throw new Error("EveSpaceScene.UpdateScene is not implemented in CarbonEngineJS.");
  }

  static EveVisualizeMethod = Object.freeze({
    VM_NONE: 0,
    VM_TEXCOORD0: 1,
    VM_TEXCOORD1: 2,
    VM_WHITE: 3,
    VM_OVERDRAW: 4,
    VW_WIREFRAME: 5,
    VW_LIGHT_COUNT: 6,
    VM_COUNT: 7,
  });

  static ShadowQuality = Object.freeze({
    SHADOW_DISABLED: 0,
    SHADOW_LOW: 1,
    SHADOW_HIGH: 2,
    SHADOW_RAYTRACED: 3,
  });

}
