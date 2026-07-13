// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/TriDevice.h
// Hand-maintained from Carbon source; runtime-device owns the canonical JS class.
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** TriDevice (trinityCore) - generated from schema shapeHash 1db3a492.... */
@type.define({ className: "TriDevice", family: "trinityCore" })
export class TriDevice extends CjsModel
{

  static ThrottlingReason = Object.freeze({
    WINDOW_OUT_OF_FOCUS: 1,
    WINDOW_HIDDEN: 2,
    THERMAL_STATE: 4
  });

  static DeviceScreenType = Object.freeze({ WINDOWED: 0, FULLSCREEN: 1, NO_ADAPTER: 2 });

  static DeviceType = Object.freeze({ DEVICE_TYPE_HARDWARE: 0, DEVICE_TYPE_SOFTWARE: 1 });

  static ApplicationActivation = Object.freeze({ APP_ACTIVATED: 0, APP_DEACTIVATED: 1 });

  /** mPresentParam.presentInterval (Tr2PresentParametersAL - enum Tr2PresentParametersAL) [READWRITE, NOTIFY, PERSIST, ENUM] */
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("PresentInterval")
  presentationInterval = 1;

  /** mSwapEffect (Tr2RenderContextEnum::SwapEffect - enum SwapEffect) [READWRITE, NOTIFY, PERSIST, ENUM] */
  @io.notify
  @io.persist
  @type.int32
  @schema.enum("SwapEffect")
  swapEffect = 0;

  /** m_throttlingState (uint32_t) [READ] */
  @io.read
  @type.uint32
  throttlingState = 0;

  /** m_deviceType (DeviceType - enum DeviceType) [READWRITE, ENUM] */
  @io.readwrite
  @type.int32
  @schema.enum("DeviceType")
  deviceType = 0;

  /** m_allowThrottling (bool) [READWRITE] */
  @io.readwrite
  @type.boolean
  allowThrottling = true;

  /** m_onDeviceRemoved (BlueScriptCallback) [READWRITE] */
  @io.readwrite
  @type.rawStruct("BlueScriptCallback")
  onDeviceRemoved = null;

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  @io.persist
  @type.list("TriCurveSet")
  curveSets = [];

  /** m_supportedUpscalingTechniques (PTr2UpscalingTechniqueInfoStructureList) [READ] */
  @io.read
  @type.list("Tr2UpscalingTechniqueInfo")
  supportedUpscalingTechniques = [];

  /** mViewport (PTriViewport) [READ, PERSIST] */
  @io.persist
  @type.objectRef("TriViewport")
  viewport = null;

  /** mDisplayMode.width (Tr2DisplayModeInfo) [READ] */
  @io.read
  @type.uint32
  adapterWidth = 0;

  /** mDisplayMode.height (Tr2DisplayModeInfo) [READ] */
  @io.read
  @type.uint32
  adapterHeight = 0;

  /** mDisplayMode.refreshRateDenominator (Tr2DisplayModeInfo) [READ] */
  @io.read
  @type.uint32
  adapterRefreshRate = 0;

  /** mAdapter (int) [READ] */
  @io.read
  @type.int32
  adapter = 0;

  /** mWidth (int32_t) [READ] */
  @io.read
  @type.int32
  width = 0;

  /** mHeight (int32_t) [READ] */
  @io.read
  @type.int32
  height = 0;

  /** mPresentParam.msaaType (Tr2PresentParametersAL) [READWRITE, NOTIFY, PERSIST] */
  @io.notify
  @io.persist
  @type.uint32
  multiSampleType = 0;

  /** mPresentParam.msaaQuality (Tr2PresentParametersAL) [READWRITE, NOTIFY, PERSIST] */
  @io.notify
  @io.persist
  @type.uint32
  multiSampleQuality = 0;

  /** m_scene (ITr2ScenePtr) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.objectRef("ITr2Scene")
  scene = null;

  /** mBackBufferCount (int) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.int32
  backBufferCount = 1;

  /** mTickInterval (int) [READWRITE] */
  @io.readwrite
  @type.int32
  tickInterval = 0;

  /** m_mipLevelSkipCount (unsigned int) [READWRITE] */
  @io.readwrite
  @type.uint32
  mipLevelSkipCount = 0;

  /** m_animationTimeScale (float) [READWRITE] */
  @io.readwrite
  @type.float32
  animationTimeScale = 1;

  /** m_animationTime (float) [READWRITE] */
  @io.readwrite
  @type.float32
  animationTime = 0;

  /** m_upscalingSetting (Tr2UpscalingAL::Setting) [READ] */
  @io.read
  @type.uint32
  @schema.enum("UpscalingSetting")
  upscalingSetting = 1;

  /** m_upscalingTechnique (Tr2UpscalingAL::Technique) [READ] */
  @io.read
  @type.uint32
  @schema.enum("UpscalingTechnique")
  upscalingTechnique = 0;

  /** m_upscalingWithFrameGeneration (bool) [READ] */
  @io.read
  @type.boolean
  frameGeneration = false;

  /** Carbon method CreateUpscalingContext (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  @carbon.method
  @impl.notImplemented
  CreateUpscalingContext(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "CreateUpscalingContext", args);
  }

  /** Carbon method DeleteUpscalingContext (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  DeleteUpscalingContext(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "DeleteUpscalingContext", args);
  }

  /** Carbon method GetRenderResolution (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetRenderResolution(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "GetRenderResolution", args);
  }

  /** Carbon method RefreshDeviceResources (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  RefreshDeviceResources(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "RefreshDeviceResources", args);
  }

  /** Carbon method Render -> PyRender (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  Render(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "Render", args);
  }

  /** Carbon method GetRenderingPlatformID (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetRenderingPlatformID(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "GetRenderingPlatformID", args);
  }

  /** Carbon method SupportsRenderTargetFormat (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SupportsRenderTargetFormat(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "SupportsRenderTargetFormat", args);
  }

  /** Carbon method IsVariableRefreshRateSupported (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  IsVariableRefreshRateSupported(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "IsVariableRefreshRateSupported", args);
  }

  /** Carbon method SupportsRaytracing (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SupportsRaytracing(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "SupportsRaytracing", args);
  }

  /** Carbon method DoesD3DDeviceExist -> DeviceExists (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  DoesD3DDeviceExist(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "DoesD3DDeviceExist", args);
  }

  /** Carbon method SetRenderJobs (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SetRenderJobs(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "SetRenderJobs", args);
  }

  /** Carbon method SetUpscaling (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  SetUpscaling(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "SetUpscaling", args);
  }

  /** Carbon method GetRenderContext (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  GetRenderContext(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "GetRenderContext", args);
  }

  /** Carbon method UpdateAvailableUpscalingTechniques (MAP_METHOD_AND_WRAP). */
  @carbon.method
  @impl.notImplemented
  UpdateAvailableUpscalingTechniques(...args)
  {
    throw CjsModel.notImplemented("TriDevice", "UpdateAvailableUpscalingTechniques", args);
  }

}
