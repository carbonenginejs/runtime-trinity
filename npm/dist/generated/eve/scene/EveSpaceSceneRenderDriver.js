import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_aoQuality, _init_extra_aoQuality, _init_antiAliasingQuality, _init_extra_antiAliasingQuality, _init_visualizeMethod, _init_extra_visualizeMethod, _init_postProcessingQuality, _init_extra_postProcessingQuality, _init_shadowQuality, _init_extra_shadowQuality, _init_customStencilFormat, _init_extra_customStencilFormat, _init_internalPixelFormat, _init_extra_internalPixelFormat, _init_volumetricQuality, _init_extra_volumetricQuality, _init_scene, _init_extra_scene, _init_name, _init_extra_name, _init_enableUpscaling, _init_extra_enableUpscaling, _init_projection, _init_extra_projection, _init_camera, _init_extra_camera, _init_view, _init_extra_view, _init_clearColor, _init_extra_clearColor, _init_distortionEffect, _init_extra_distortionEffect, _init_enableDistortion, _init_extra_enableDistortion, _init_reflectionCorrectionEnabled, _init_extra_reflectionCorrectionEnabled, _init_forceOpaqueBuffer, _init_extra_forceOpaqueBuffer, _init_forceNormalMap, _init_extra_forceNormalMap, _init_forceVelocityMap, _init_extra_forceVelocityMap, _init_fpsRenderer, _init_extra_fpsRenderer, _init_mainPassRenderingEnabled, _init_extra_mainPassRenderingEnabled, _init_toolsScenes, _init_extra_toolsScenes, _init_depthPassTechnique, _init_extra_depthPassTechnique, _init_postProcess, _init_extra_postProcess, _init_showFPS, _init_extra_showFPS, _init_sceneOverlay, _init_extra_sceneOverlay, _init_background, _init_extra_background, _init_SSAO, _init_extra_SSAO, _init_enableRendering, _init_extra_enableRendering;

/** EveSpaceSceneRenderDriver (eve/scene) - generated from schema shapeHash 9eaa96eb.... */
let _EveSpaceSceneRenderD;
new class extends _identity {
  static [class EveSpaceSceneRenderDriver extends CjsModel {
    static {
      ({
        e: [_init_aoQuality, _init_extra_aoQuality, _init_antiAliasingQuality, _init_extra_antiAliasingQuality, _init_visualizeMethod, _init_extra_visualizeMethod, _init_postProcessingQuality, _init_extra_postProcessingQuality, _init_shadowQuality, _init_extra_shadowQuality, _init_customStencilFormat, _init_extra_customStencilFormat, _init_internalPixelFormat, _init_extra_internalPixelFormat, _init_volumetricQuality, _init_extra_volumetricQuality, _init_scene, _init_extra_scene, _init_name, _init_extra_name, _init_enableUpscaling, _init_extra_enableUpscaling, _init_projection, _init_extra_projection, _init_camera, _init_extra_camera, _init_view, _init_extra_view, _init_clearColor, _init_extra_clearColor, _init_distortionEffect, _init_extra_distortionEffect, _init_enableDistortion, _init_extra_enableDistortion, _init_reflectionCorrectionEnabled, _init_extra_reflectionCorrectionEnabled, _init_forceOpaqueBuffer, _init_extra_forceOpaqueBuffer, _init_forceNormalMap, _init_extra_forceNormalMap, _init_forceVelocityMap, _init_extra_forceVelocityMap, _init_fpsRenderer, _init_extra_fpsRenderer, _init_mainPassRenderingEnabled, _init_extra_mainPassRenderingEnabled, _init_toolsScenes, _init_extra_toolsScenes, _init_depthPassTechnique, _init_extra_depthPassTechnique, _init_postProcess, _init_extra_postProcess, _init_showFPS, _init_extra_showFPS, _init_sceneOverlay, _init_extra_sceneOverlay, _init_background, _init_extra_background, _init_SSAO, _init_extra_SSAO, _init_enableRendering, _init_extra_enableRendering, _initProto],
        c: [_EveSpaceSceneRenderD, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveSpaceSceneRenderDriver",
        family: "eve/scene"
      })], [[[io, io.readwrite, type, type.int32, void 0, schema.enum("AmbientOcclusionQuality")], 16, "aoQuality"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("AntiAliasingQuality")], 16, "antiAliasingQuality"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("EveVisualizeMethod")], 16, "visualizeMethod"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("Quality")], 16, "postProcessingQuality"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("ShadowQuality")], 16, "shadowQuality"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("PixelFormat")], 16, "customStencilFormat"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("PixelFormat")], 16, "internalPixelFormat"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("Tr2VolumerticQuality")], 16, "volumetricQuality"], [[io, io.persistOnly, void 0, type.model("EveSpaceScene")], 16, "scene"], [[io, io.readwrite, type, type.string], 16, "name"], [[io, io.readwrite, type, type.boolean], 16, "enableUpscaling"], [[io, io.readwrite, void 0, type.objectRef("TriProjection")], 16, "projection"], [[io, io.readwrite, void 0, type.objectRef("EveCamera")], 16, "camera"], [[io, io.readwrite, void 0, type.objectRef("TriView")], 16, "view"], [[io, io.readwrite, void 0, type.rawStruct("Settings")], 16, "clearColor"], [[io, io.read, void 0, type.objectRef("Tr2Effect")], 16, "distortionEffect"], [[io, io.readwrite, type, type.boolean], 16, "enableDistortion"], [[io, io.readwrite, type, type.boolean], 16, "reflectionCorrectionEnabled"], [[io, io.readwrite, type, type.boolean], 16, "forceOpaqueBuffer"], [[io, io.readwrite, type, type.boolean], 16, "forceNormalMap"], [[io, io.readwrite, type, type.boolean], 16, "forceVelocityMap"], [[io, io.read, void 0, type.objectRef("TriStepRenderFps")], 16, "fpsRenderer"], [[io, io.persist, type, type.boolean], 16, "mainPassRenderingEnabled"], [[io, io.read, void 0, type.list("ITr2Scene")], 16, "toolsScenes"], [[io, io.readwrite, type, type.unknown], 16, "depthPassTechnique"], [[io, io.read, void 0, type.objectRef("Tr2PostProcessRenderer")], 16, "postProcess"], [[io, io.readwrite, type, type.boolean], 16, "showFPS"], [[io, io.readwrite, void 0, type.objectRef("ITr2RenderNode")], 16, "sceneOverlay"], [[io, io.readwrite, void 0, type.objectRef("ITr2RenderNode")], 16, "background"], [[io, io.persist, void 0, type.model("Tr2SSAO")], 16, "SSAO"], [[io, io.readwrite, type, type.boolean], 16, "enableRendering"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetAllTempTextures"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_enableRendering(this);
    }
    /** m_settings.aoQuality (AmbientOcclusionQuality - enum AmbientOcclusionQuality) [READWRITE, ENUM] */
    aoQuality = (_initProto(this), _init_aoQuality(this, 0));

    /** m_settings.antiAliasingQuality (AntiAliasingQuality - enum AntiAliasingQuality) [READWRITE, ENUM] */
    antiAliasingQuality = (_init_extra_aoQuality(this), _init_antiAliasingQuality(this, 0));

    /** m_settings.visualizeMethod (EveSpaceScene::EveVisualizeMethod - enum EveVisualizeMethod) [READWRITE, ENUM] */
    visualizeMethod = (_init_extra_antiAliasingQuality(this), _init_visualizeMethod(this, 0));

    /** m_settings.postProcessingQuality (PostProcess::Quality - enum Quality) [READWRITE, ENUM] */
    postProcessingQuality = (_init_extra_visualizeMethod(this), _init_postProcessingQuality(this, 0));

    /** m_settings.shadowQuality (ShadowQuality - enum ShadowQuality) [READWRITE, ENUM] */
    shadowQuality = (_init_extra_postProcessingQuality(this), _init_shadowQuality(this, 0));

    /** m_customStencilFormat (ImageIO::PixelFormat - enum PixelFormat) [READWRITE, ENUM] */
    customStencilFormat = (_init_extra_shadowQuality(this), _init_customStencilFormat(this, 0));

    /** m_internalPixelFormat (ImageIO::PixelFormat - enum PixelFormat) [READWRITE, ENUM] */
    internalPixelFormat = (_init_extra_customStencilFormat(this), _init_internalPixelFormat(this, 10));

    /** m_settings.volumetricQuality (Tr2VolumerticQuality - enum Tr2VolumerticQuality) [READWRITE, ENUM] */
    volumetricQuality = (_init_extra_internalPixelFormat(this), _init_volumetricQuality(this, 0));

    /** m_scene (EveSpaceScenePtr) [PERSISTONLY] */
    scene = (_init_extra_volumetricQuality(this), _init_scene(this, null));

    /** m_name (std::string) [READWRITE] */
    name = (_init_extra_scene(this), _init_name(this, ""));

    /** m_settings.enableUpscaling (bool) [READWRITE] */
    enableUpscaling = (_init_extra_name(this), _init_enableUpscaling(this, false));

    /** m_projection (TriProjectionPtr) [READWRITE] */
    projection = (_init_extra_enableUpscaling(this), _init_projection(this, null));

    /** m_camera (EveCameraPtr) [READWRITE] */
    camera = (_init_extra_projection(this), _init_camera(this, null));

    /** m_view (TriViewPtr) [READWRITE] */
    view = (_init_extra_camera(this), _init_view(this, null));

    /** m_settings.clearColor (Settings) [READWRITE] */
    clearColor = (_init_extra_view(this), _init_clearColor(this, null));

    /** m_distortionEffect (Tr2EffectPtr) [READ] */
    distortionEffect = (_init_extra_clearColor(this), _init_distortionEffect(this, null));

    /** m_settings.enableDistortion (bool) [READWRITE] */
    enableDistortion = (_init_extra_distortionEffect(this), _init_enableDistortion(this, false));

    /** m_reflectionCorrectionEnabled (bool) [READWRITE] */
    reflectionCorrectionEnabled = (_init_extra_enableDistortion(this), _init_reflectionCorrectionEnabled(this, true));

    /** m_settings.forceOpaqueBuffer (bool) [READWRITE] */
    forceOpaqueBuffer = (_init_extra_reflectionCorrectionEnabled(this), _init_forceOpaqueBuffer(this, false));

    /** m_settings.forceNormalMap (bool) [READWRITE] */
    forceNormalMap = (_init_extra_forceOpaqueBuffer(this), _init_forceNormalMap(this, false));

    /** m_settings.forceVelocityMap (bool) [READWRITE] */
    forceVelocityMap = (_init_extra_forceNormalMap(this), _init_forceVelocityMap(this, false));

    /** m_fpsRenderer (TriStepRenderFpsPtr) [READ] */
    fpsRenderer = (_init_extra_forceVelocityMap(this), _init_fpsRenderer(this, null));

    /** m_mainPassRenderingEnabled (bool) [READWRITE, PERSIST] */
    mainPassRenderingEnabled = (_init_extra_fpsRenderer(this), _init_mainPassRenderingEnabled(this, true));

    /** m_toolsScenes (PITr2SceneVector) [READ] */
    toolsScenes = (_init_extra_mainPassRenderingEnabled(this), _init_toolsScenes(this, []));

    /** m_depthPassTechnique (unknown) [READWRITE] */
    depthPassTechnique = (_init_extra_toolsScenes(this), _init_depthPassTechnique(this, null));

    /** m_postProcess (Tr2PostProcessRendererPtr) [READ] */
    postProcess = (_init_extra_depthPassTechnique(this), _init_postProcess(this, null));

    /** m_settings.showFPS (bool) [READWRITE] */
    showFPS = (_init_extra_postProcess(this), _init_showFPS(this, false));

    /** m_sceneOverlay (ITr2RenderNodePtr) [READWRITE] */
    sceneOverlay = (_init_extra_showFPS(this), _init_sceneOverlay(this, null));

    /** m_background (ITr2RenderNodePtr) [READWRITE] */
    background = (_init_extra_sceneOverlay(this), _init_background(this, null));

    /** m_ssao (Tr2SSAOPtr) [READWRITE, PERSIST] */
    SSAO = (_init_extra_background(this), _init_SSAO(this, null));

    /** m_enableRendering (bool) [READWRITE] */
    enableRendering = (_init_extra_SSAO(this), _init_enableRendering(this, true));

    /** Carbon method GetAllTempTextures (MAP_METHOD_AND_WRAP). */
    GetAllTempTextures(...args) {
      throw new Error("EveSpaceSceneRenderDriver.GetAllTempTextures is not implemented in CarbonEngineJS.");
    }
  }];
  AmbientOcclusionQuality = Object.freeze({
    Disabled: 0,
    Low: 1,
    Medium: 2,
    High: 3
  });
  AntiAliasingQuality = Object.freeze({
    Disabled: 0,
    Low: 1,
    Medium: 2,
    High: 3
  });
  EveVisualizeMethod = Object.freeze({
    VM_NONE: 0,
    VM_TEXCOORD0: 1,
    VM_TEXCOORD1: 2,
    VM_WHITE: 3,
    VM_OVERDRAW: 4,
    VW_WIREFRAME: 5,
    VW_LIGHT_COUNT: 6,
    VM_COUNT: 7
  });
  PixelFormat = Object.freeze({
    PIXEL_FORMAT_UNKNOWN: 0,
    PIXEL_FORMAT_R32G32B32A32_TYPELESS: 1,
    PIXEL_FORMAT_R32G32B32A32_FLOAT: 2,
    PIXEL_FORMAT_R32G32B32A32_UINT: 3,
    PIXEL_FORMAT_R32G32B32A32_SINT: 4,
    PIXEL_FORMAT_R32G32B32_TYPELESS: 5,
    PIXEL_FORMAT_R32G32B32_FLOAT: 6,
    PIXEL_FORMAT_R32G32B32_UINT: 7,
    PIXEL_FORMAT_R32G32B32_SINT: 8,
    PIXEL_FORMAT_R16G16B16A16_TYPELESS: 9,
    PIXEL_FORMAT_R16G16B16A16_FLOAT: 10,
    PIXEL_FORMAT_R16G16B16A16_UNORM: 11,
    PIXEL_FORMAT_R16G16B16A16_UINT: 12,
    PIXEL_FORMAT_R16G16B16A16_SNORM: 13,
    PIXEL_FORMAT_R16G16B16A16_SINT: 14,
    PIXEL_FORMAT_R32G32_TYPELESS: 15,
    PIXEL_FORMAT_R32G32_FLOAT: 16,
    PIXEL_FORMAT_R32G32_UINT: 17,
    PIXEL_FORMAT_R32G32_SINT: 18,
    PIXEL_FORMAT_R32G8X24_TYPELESS: 19,
    PIXEL_FORMAT_D32_FLOAT_S8X24_UINT: 20,
    PIXEL_FORMAT_R32_FLOAT_X8X24_TYPELESS: 21,
    PIXEL_FORMAT_X32_TYPELESS_G8X24_UINT: 22,
    PIXEL_FORMAT_R10G10B10A2_TYPELESS: 23,
    PIXEL_FORMAT_R10G10B10A2_UNORM: 24,
    PIXEL_FORMAT_R10G10B10A2_UINT: 25,
    PIXEL_FORMAT_R11G11B10_FLOAT: 26,
    PIXEL_FORMAT_R8G8B8A8_TYPELESS: 27,
    PIXEL_FORMAT_R8G8B8A8_UNORM: 28,
    PIXEL_FORMAT_R8G8B8A8_UNORM_SRGB: 29,
    PIXEL_FORMAT_R8G8B8A8_UINT: 30,
    PIXEL_FORMAT_R8G8B8A8_SNORM: 31,
    PIXEL_FORMAT_R8G8B8A8_SINT: 32,
    PIXEL_FORMAT_R16G16_TYPELESS: 33,
    PIXEL_FORMAT_R16G16_FLOAT: 34,
    PIXEL_FORMAT_R16G16_UNORM: 35,
    PIXEL_FORMAT_R16G16_UINT: 36,
    PIXEL_FORMAT_R16G16_SNORM: 37,
    PIXEL_FORMAT_R16G16_SINT: 38,
    PIXEL_FORMAT_R32_TYPELESS: 39,
    PIXEL_FORMAT_D32_FLOAT: 40,
    PIXEL_FORMAT_R32_FLOAT: 41,
    PIXEL_FORMAT_R32_UINT: 42,
    PIXEL_FORMAT_R32_SINT: 43,
    PIXEL_FORMAT_R24G8_TYPELESS: 44,
    PIXEL_FORMAT_D24_UNORM_S8_UINT: 45,
    PIXEL_FORMAT_R24_UNORM_X8_TYPELESS: 46,
    PIXEL_FORMAT_X24_TYPELESS_G8_UINT: 47,
    PIXEL_FORMAT_R8G8_TYPELESS: 48,
    PIXEL_FORMAT_R8G8_UNORM: 49,
    PIXEL_FORMAT_R8G8_UINT: 50,
    PIXEL_FORMAT_R8G8_SNORM: 51,
    PIXEL_FORMAT_R8G8_SINT: 52,
    PIXEL_FORMAT_R16_TYPELESS: 53,
    PIXEL_FORMAT_R16_FLOAT: 54,
    PIXEL_FORMAT_D16_UNORM: 55,
    PIXEL_FORMAT_R16_UNORM: 56,
    PIXEL_FORMAT_R16_UINT: 57,
    PIXEL_FORMAT_R16_SNORM: 58,
    PIXEL_FORMAT_R16_SINT: 59,
    PIXEL_FORMAT_R8_TYPELESS: 60,
    PIXEL_FORMAT_R8_UNORM: 61,
    PIXEL_FORMAT_R8_UINT: 62,
    PIXEL_FORMAT_R8_SNORM: 63,
    PIXEL_FORMAT_R8_SINT: 64,
    PIXEL_FORMAT_A8_UNORM: 65,
    PIXEL_FORMAT_R1_UNORM: 66,
    PIXEL_FORMAT_R9G9B9E5_SHAREDEXP: 67,
    PIXEL_FORMAT_R8G8_B8G8_UNORM: 68,
    PIXEL_FORMAT_G8R8_G8B8_UNORM: 69,
    PIXEL_FORMAT_BC1_TYPELESS: 70,
    PIXEL_FORMAT_BC1_UNORM: 71,
    PIXEL_FORMAT_BC1_UNORM_SRGB: 72,
    PIXEL_FORMAT_BC2_TYPELESS: 73,
    PIXEL_FORMAT_BC2_UNORM: 74,
    PIXEL_FORMAT_BC2_UNORM_SRGB: 75,
    PIXEL_FORMAT_BC3_TYPELESS: 76,
    PIXEL_FORMAT_BC3_UNORM: 77,
    PIXEL_FORMAT_BC3_UNORM_SRGB: 78,
    PIXEL_FORMAT_BC4_TYPELESS: 79,
    PIXEL_FORMAT_BC4_UNORM: 80,
    PIXEL_FORMAT_BC4_SNORM: 81,
    PIXEL_FORMAT_BC5_TYPELESS: 82,
    PIXEL_FORMAT_BC5_UNORM: 83,
    PIXEL_FORMAT_BC5_SNORM: 84,
    PIXEL_FORMAT_B5G6R5_UNORM: 85,
    PIXEL_FORMAT_B5G5R5A1_UNORM: 86,
    PIXEL_FORMAT_B8G8R8A8_UNORM: 87,
    PIXEL_FORMAT_B8G8R8X8_UNORM: 88,
    PIXEL_FORMAT_R10G10B10_XR_BIAS_A2_UNORM: 89,
    PIXEL_FORMAT_B8G8R8A8_TYPELESS: 90,
    PIXEL_FORMAT_B8G8R8A8_UNORM_SRGB: 91,
    PIXEL_FORMAT_B8G8R8X8_TYPELESS: 92,
    PIXEL_FORMAT_B8G8R8X8_UNORM_SRGB: 93,
    PIXEL_FORMAT_BC6H_TYPELESS: 94,
    PIXEL_FORMAT_BC6H_UF16: 95,
    PIXEL_FORMAT_BC6H_SF16: 96,
    PIXEL_FORMAT_BC7_TYPELESS: 97,
    PIXEL_FORMAT_BC7_UNORM: 98,
    PIXEL_FORMAT_BC7_UNORM_SRGB: 99,
    PIXEL_FORMAT_SENTINEL: 100,
    PIXEL_FORMAT_FORCE_UINT: 4294967295
  });
  Quality = Object.freeze({
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    COUNT: 3
  });
  ShadowQuality = Object.freeze({
    SHADOW_DISABLED: 0,
    SHADOW_LOW: 1,
    SHADOW_HIGH: 2,
    SHADOW_RAYTRACED: 3
  });
  Tr2VolumerticQuality = Object.freeze({
    Low: 0,
    Medium: 1,
    High: 2,
    Ultra: 3
  });
  constructor() {
    super(_EveSpaceSceneRenderD), _initClass();
  }
}();

export { _EveSpaceSceneRenderD as EveSpaceSceneRenderDriver };
//# sourceMappingURL=EveSpaceSceneRenderDriver.js.map
