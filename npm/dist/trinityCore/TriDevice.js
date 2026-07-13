import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_presentationInterval, _init_extra_presentationInterval, _init_swapEffect, _init_extra_swapEffect, _init_throttlingState, _init_extra_throttlingState, _init_deviceType, _init_extra_deviceType, _init_allowThrottling, _init_extra_allowThrottling, _init_onDeviceRemoved, _init_extra_onDeviceRemoved, _init_curveSets, _init_extra_curveSets, _init_supportedUpscalingTechniques, _init_extra_supportedUpscalingTechniques, _init_viewport, _init_extra_viewport, _init_adapterWidth, _init_extra_adapterWidth, _init_adapterHeight, _init_extra_adapterHeight, _init_adapterRefreshRate, _init_extra_adapterRefreshRate, _init_adapter, _init_extra_adapter, _init_width, _init_extra_width, _init_height, _init_extra_height, _init_multiSampleType, _init_extra_multiSampleType, _init_multiSampleQuality, _init_extra_multiSampleQuality, _init_scene, _init_extra_scene, _init_backBufferCount, _init_extra_backBufferCount, _init_tickInterval, _init_extra_tickInterval, _init_mipLevelSkipCount, _init_extra_mipLevelSkipCount, _init_animationTimeScale, _init_extra_animationTimeScale, _init_animationTime, _init_extra_animationTime, _init_upscalingSetting, _init_extra_upscalingSetting, _init_upscalingTechnique, _init_extra_upscalingTechnique, _init_frameGeneration, _init_extra_frameGeneration;

/** TriDevice (trinityCore) - generated from schema shapeHash 1db3a492.... */
let _TriDevice;
new class extends _identity {
  static [class TriDevice extends CjsModel {
    static {
      ({
        e: [_init_presentationInterval, _init_extra_presentationInterval, _init_swapEffect, _init_extra_swapEffect, _init_throttlingState, _init_extra_throttlingState, _init_deviceType, _init_extra_deviceType, _init_allowThrottling, _init_extra_allowThrottling, _init_onDeviceRemoved, _init_extra_onDeviceRemoved, _init_curveSets, _init_extra_curveSets, _init_supportedUpscalingTechniques, _init_extra_supportedUpscalingTechniques, _init_viewport, _init_extra_viewport, _init_adapterWidth, _init_extra_adapterWidth, _init_adapterHeight, _init_extra_adapterHeight, _init_adapterRefreshRate, _init_extra_adapterRefreshRate, _init_adapter, _init_extra_adapter, _init_width, _init_extra_width, _init_height, _init_extra_height, _init_multiSampleType, _init_extra_multiSampleType, _init_multiSampleQuality, _init_extra_multiSampleQuality, _init_scene, _init_extra_scene, _init_backBufferCount, _init_extra_backBufferCount, _init_tickInterval, _init_extra_tickInterval, _init_mipLevelSkipCount, _init_extra_mipLevelSkipCount, _init_animationTimeScale, _init_extra_animationTimeScale, _init_animationTime, _init_extra_animationTime, _init_upscalingSetting, _init_extra_upscalingSetting, _init_upscalingTechnique, _init_extra_upscalingTechnique, _init_frameGeneration, _init_extra_frameGeneration, _initProto],
        c: [_TriDevice, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriDevice",
        family: "trinityCore"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("PresentInterval")], 16, "presentationInterval"], [[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("SwapEffect")], 16, "swapEffect"], [[io, io.read, type, type.uint32], 16, "throttlingState"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("DeviceType")], 16, "deviceType"], [[io, io.readwrite, type, type.boolean], 16, "allowThrottling"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onDeviceRemoved"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.read, void 0, type.list("Tr2UpscalingTechniqueInfo")], 16, "supportedUpscalingTechniques"], [[io, io.persist, void 0, type.objectRef("TriViewport")], 16, "viewport"], [[io, io.read, type, type.uint32], 16, "adapterWidth"], [[io, io.read, type, type.uint32], 16, "adapterHeight"], [[io, io.read, type, type.uint32], 16, "adapterRefreshRate"], [[io, io.read, type, type.int32], 16, "adapter"], [[io, io.read, type, type.int32], 16, "width"], [[io, io.read, type, type.int32], 16, "height"], [[io, io.notify, io, io.persist, type, type.uint32], 16, "multiSampleType"], [[io, io.notify, io, io.persist, type, type.uint32], 16, "multiSampleQuality"], [[io, io.notify, io, io.readwrite, void 0, type.objectRef("ITr2Scene")], 16, "scene"], [[io, io.notify, io, io.readwrite, type, type.int32], 16, "backBufferCount"], [[io, io.readwrite, type, type.int32], 16, "tickInterval"], [[io, io.readwrite, type, type.uint32], 16, "mipLevelSkipCount"], [[io, io.readwrite, type, type.float32], 16, "animationTimeScale"], [[io, io.readwrite, type, type.float32], 16, "animationTime"], [[io, io.read, type, type.uint32, void 0, schema.enum("UpscalingSetting")], 16, "upscalingSetting"], [[io, io.read, type, type.uint32, void 0, schema.enum("UpscalingTechnique")], 16, "upscalingTechnique"], [[io, io.read, type, type.boolean], 16, "frameGeneration"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CreateUpscalingContext"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DeleteUpscalingContext"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetRenderResolution"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RefreshDeviceResources"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Render"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetRenderingPlatformID"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SupportsRenderTargetFormat"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsVariableRefreshRateSupported"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SupportsRaytracing"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DoesD3DDeviceExist"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetRenderJobs"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetUpscaling"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetRenderContext"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UpdateAvailableUpscalingTechniques"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_frameGeneration(this);
    }
    /** mPresentParam.presentInterval (Tr2PresentParametersAL - enum Tr2PresentParametersAL) [READWRITE, NOTIFY, PERSIST, ENUM] */
    presentationInterval = (_initProto(this), _init_presentationInterval(this, 1));

    /** mSwapEffect (Tr2RenderContextEnum::SwapEffect - enum SwapEffect) [READWRITE, NOTIFY, PERSIST, ENUM] */
    swapEffect = (_init_extra_presentationInterval(this), _init_swapEffect(this, 0));

    /** m_throttlingState (uint32_t) [READ] */
    throttlingState = (_init_extra_swapEffect(this), _init_throttlingState(this, 0));

    /** m_deviceType (DeviceType - enum DeviceType) [READWRITE, ENUM] */
    deviceType = (_init_extra_throttlingState(this), _init_deviceType(this, 0));

    /** m_allowThrottling (bool) [READWRITE] */
    allowThrottling = (_init_extra_deviceType(this), _init_allowThrottling(this, true));

    /** m_onDeviceRemoved (BlueScriptCallback) [READWRITE] */
    onDeviceRemoved = (_init_extra_allowThrottling(this), _init_onDeviceRemoved(this, null));

    /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
    curveSets = (_init_extra_onDeviceRemoved(this), _init_curveSets(this, []));

    /** m_supportedUpscalingTechniques (PTr2UpscalingTechniqueInfoStructureList) [READ] */
    supportedUpscalingTechniques = (_init_extra_curveSets(this), _init_supportedUpscalingTechniques(this, []));

    /** mViewport (PTriViewport) [READ, PERSIST] */
    viewport = (_init_extra_supportedUpscalingTechniques(this), _init_viewport(this, null));

    /** mDisplayMode.width (Tr2DisplayModeInfo) [READ] */
    adapterWidth = (_init_extra_viewport(this), _init_adapterWidth(this, 0));

    /** mDisplayMode.height (Tr2DisplayModeInfo) [READ] */
    adapterHeight = (_init_extra_adapterWidth(this), _init_adapterHeight(this, 0));

    /** mDisplayMode.refreshRateDenominator (Tr2DisplayModeInfo) [READ] */
    adapterRefreshRate = (_init_extra_adapterHeight(this), _init_adapterRefreshRate(this, 0));

    /** mAdapter (int) [READ] */
    adapter = (_init_extra_adapterRefreshRate(this), _init_adapter(this, 0));

    /** mWidth (int32_t) [READ] */
    width = (_init_extra_adapter(this), _init_width(this, 0));

    /** mHeight (int32_t) [READ] */
    height = (_init_extra_width(this), _init_height(this, 0));

    /** mPresentParam.msaaType (Tr2PresentParametersAL) [READWRITE, NOTIFY, PERSIST] */
    multiSampleType = (_init_extra_height(this), _init_multiSampleType(this, 0));

    /** mPresentParam.msaaQuality (Tr2PresentParametersAL) [READWRITE, NOTIFY, PERSIST] */
    multiSampleQuality = (_init_extra_multiSampleType(this), _init_multiSampleQuality(this, 0));

    /** m_scene (ITr2ScenePtr) [READWRITE, NOTIFY] */
    scene = (_init_extra_multiSampleQuality(this), _init_scene(this, null));

    /** mBackBufferCount (int) [READWRITE, NOTIFY] */
    backBufferCount = (_init_extra_scene(this), _init_backBufferCount(this, 1));

    /** mTickInterval (int) [READWRITE] */
    tickInterval = (_init_extra_backBufferCount(this), _init_tickInterval(this, 0));

    /** m_mipLevelSkipCount (unsigned int) [READWRITE] */
    mipLevelSkipCount = (_init_extra_tickInterval(this), _init_mipLevelSkipCount(this, 0));

    /** m_animationTimeScale (float) [READWRITE] */
    animationTimeScale = (_init_extra_mipLevelSkipCount(this), _init_animationTimeScale(this, 1));

    /** m_animationTime (float) [READWRITE] */
    animationTime = (_init_extra_animationTimeScale(this), _init_animationTime(this, 0));

    /** m_upscalingSetting (Tr2UpscalingAL::Setting) [READ] */
    upscalingSetting = (_init_extra_animationTime(this), _init_upscalingSetting(this, 1));

    /** m_upscalingTechnique (Tr2UpscalingAL::Technique) [READ] */
    upscalingTechnique = (_init_extra_upscalingSetting(this), _init_upscalingTechnique(this, 0));

    /** m_upscalingWithFrameGeneration (bool) [READ] */
    frameGeneration = (_init_extra_upscalingTechnique(this), _init_frameGeneration(this, false));

    /** Carbon method CreateUpscalingContext (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
    CreateUpscalingContext(...args) {
      throw CjsModel.notImplemented("TriDevice", "CreateUpscalingContext", args);
    }

    /** Carbon method DeleteUpscalingContext (MAP_METHOD_AND_WRAP). */
    DeleteUpscalingContext(...args) {
      throw CjsModel.notImplemented("TriDevice", "DeleteUpscalingContext", args);
    }

    /** Carbon method GetRenderResolution (MAP_METHOD_AND_WRAP). */
    GetRenderResolution(...args) {
      throw CjsModel.notImplemented("TriDevice", "GetRenderResolution", args);
    }

    /** Carbon method RefreshDeviceResources (MAP_METHOD_AND_WRAP). */
    RefreshDeviceResources(...args) {
      throw CjsModel.notImplemented("TriDevice", "RefreshDeviceResources", args);
    }

    /** Carbon method Render -> PyRender (MAP_METHOD_AND_WRAP). */
    Render(...args) {
      throw CjsModel.notImplemented("TriDevice", "Render", args);
    }

    /** Carbon method GetRenderingPlatformID (MAP_METHOD_AND_WRAP). */
    GetRenderingPlatformID(...args) {
      throw CjsModel.notImplemented("TriDevice", "GetRenderingPlatformID", args);
    }

    /** Carbon method SupportsRenderTargetFormat (MAP_METHOD_AND_WRAP). */
    SupportsRenderTargetFormat(...args) {
      throw CjsModel.notImplemented("TriDevice", "SupportsRenderTargetFormat", args);
    }

    /** Carbon method IsVariableRefreshRateSupported (MAP_METHOD_AND_WRAP). */
    IsVariableRefreshRateSupported(...args) {
      throw CjsModel.notImplemented("TriDevice", "IsVariableRefreshRateSupported", args);
    }

    /** Carbon method SupportsRaytracing (MAP_METHOD_AND_WRAP). */
    SupportsRaytracing(...args) {
      throw CjsModel.notImplemented("TriDevice", "SupportsRaytracing", args);
    }

    /** Carbon method DoesD3DDeviceExist -> DeviceExists (MAP_METHOD_AND_WRAP). */
    DoesD3DDeviceExist(...args) {
      throw CjsModel.notImplemented("TriDevice", "DoesD3DDeviceExist", args);
    }

    /** Carbon method SetRenderJobs (MAP_METHOD_AND_WRAP). */
    SetRenderJobs(...args) {
      throw CjsModel.notImplemented("TriDevice", "SetRenderJobs", args);
    }

    /** Carbon method SetUpscaling (MAP_METHOD_AND_WRAP). */
    SetUpscaling(...args) {
      throw CjsModel.notImplemented("TriDevice", "SetUpscaling", args);
    }

    /** Carbon method GetRenderContext (MAP_METHOD_AND_WRAP). */
    GetRenderContext(...args) {
      throw CjsModel.notImplemented("TriDevice", "GetRenderContext", args);
    }

    /** Carbon method UpdateAvailableUpscalingTechniques (MAP_METHOD_AND_WRAP). */
    UpdateAvailableUpscalingTechniques(...args) {
      throw CjsModel.notImplemented("TriDevice", "UpdateAvailableUpscalingTechniques", args);
    }
  }];
  ThrottlingReason = Object.freeze({
    WINDOW_OUT_OF_FOCUS: 1,
    WINDOW_HIDDEN: 2,
    THERMAL_STATE: 4
  });
  DeviceScreenType = Object.freeze({
    WINDOWED: 0,
    FULLSCREEN: 1,
    NO_ADAPTER: 2
  });
  DeviceType = Object.freeze({
    DEVICE_TYPE_HARDWARE: 0,
    DEVICE_TYPE_SOFTWARE: 1
  });
  ApplicationActivation = Object.freeze({
    APP_ACTIVATED: 0,
    APP_DEACTIVATED: 1
  });
  constructor() {
    super(_TriDevice), _initClass();
  }
}();

export { _TriDevice as TriDevice };
//# sourceMappingURL=TriDevice.js.map
