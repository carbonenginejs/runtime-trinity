import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_currentOffset, _init_extra_currentOffset, _init_height, _init_extra_height, _init_format, _init_extra_format, _init_width, _init_extra_width;

/** Tr2StreamingBitmapSaver (trinityCore) - generated from schema shapeHash 95ea7d15.... */
let _Tr2StreamingBitmapSa;
new class extends _identity {
  static [class Tr2StreamingBitmapSaver extends CjsModel {
    static {
      ({
        e: [_init_currentOffset, _init_extra_currentOffset, _init_height, _init_extra_height, _init_format, _init_extra_format, _init_width, _init_extra_width, _initProto],
        c: [_Tr2StreamingBitmapSa, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2StreamingBitmapSaver",
        family: "trinityCore"
      })], [[[io, io.read, type, type.uint32], 16, "currentOffset"], [[io, io.read, type, type.uint32], 16, "height"], [[io, io.read, type, type.int32, void 0, schema.enum("PixelFormat")], 16, "format"], [[io, io.read, type, type.uint32], 16, "width"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CopyFromRenderTargetRegion"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "EndSaving"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FlushBatch"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartBatch"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_width(this);
    }
    /** m_currentOffset (uint32_t) [READ] */
    currentOffset = (_initProto(this), _init_currentOffset(this, 0));

    /** m_height (uint32_t) [READ] */
    height = (_init_extra_currentOffset(this), _init_height(this, 0));

    /** m_format (Tr2RenderContextEnum::PixelFormat - enum PixelFormat) [READ] */
    format = (_init_extra_height(this), _init_format(this, 0));

    /** m_width (uint32_t) [READ] */
    width = (_init_extra_format(this), _init_width(this, 0));

    /** Carbon method CopyFromRenderTargetRegion (MAP_METHOD_AND_WRAP). */
    CopyFromRenderTargetRegion(...args) {
      throw new Error("Tr2StreamingBitmapSaver.CopyFromRenderTargetRegion is not implemented in CarbonEngineJS.");
    }

    /** Carbon method EndSaving (MAP_METHOD_AND_WRAP). */
    EndSaving(...args) {
      throw new Error("Tr2StreamingBitmapSaver.EndSaving is not implemented in CarbonEngineJS.");
    }

    /** Carbon method FlushBatch (MAP_METHOD_AND_WRAP). */
    FlushBatch(...args) {
      throw new Error("Tr2StreamingBitmapSaver.FlushBatch is not implemented in CarbonEngineJS.");
    }

    /** Carbon method StartBatch (MAP_METHOD_AND_WRAP). */
    StartBatch(...args) {
      throw new Error("Tr2StreamingBitmapSaver.StartBatch is not implemented in CarbonEngineJS.");
    }
  }];
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
  constructor() {
    super(_Tr2StreamingBitmapSa), _initClass();
  }
}();

export { _Tr2StreamingBitmapSa as Tr2StreamingBitmapSaver };
//# sourceMappingURL=Tr2StreamingBitmapSaver.js.map
