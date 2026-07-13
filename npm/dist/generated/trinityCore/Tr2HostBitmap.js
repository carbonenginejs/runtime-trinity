import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_format, _init_extra_format, _init_width, _init_extra_width, _init_height, _init_extra_height, _init_mipCount, _init_extra_mipCount, _init_imageType, _init_extra_imageType, _init_name, _init_extra_name;

/** Tr2HostBitmap (trinityCore) - generated from schema shapeHash fee9dda7.... */
let _Tr2HostBitmap;
class Tr2HostBitmap extends CjsModel {
  static {
    ({
      e: [_init_format, _init_extra_format, _init_width, _init_extra_width, _init_height, _init_extra_height, _init_mipCount, _init_extra_mipCount, _init_imageType, _init_extra_imageType, _init_name, _init_extra_name, _initProto],
      c: [_Tr2HostBitmap, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2HostBitmap",
      family: "trinityCore"
    })], [[[io, io.read, type, type.unknown], 16, "format"], [[io, io.read, type, type.unknown], 16, "width"], [[io, io.read, type, type.unknown], 16, "height"], [[io, io.read, type, type.unknown], 16, "mipCount"], [[io, io.read, type, type.unknown], 16, "imageType"], [[io, io.persist, type, type.unknown], 16, "name"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CreateVolume"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Create"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CreateCube"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "PopulateMargin"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SaveAsync"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "WaitForSave"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeFormat"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Compress"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetMipRawData"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CopyFaceFromRenderTarget"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CopyFromRenderTargetRegion"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CopyFromRenderTarget"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CopyFromTextureRes"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CountPixelsOfValue"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CreateFromHeightData"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Crop"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsSaveSucceeded"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Downsample2x2"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsSaveCompleted"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsSaving"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsValid"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsCompressed"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsMonochrome"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetMipRawData"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetRawData"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Save"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ConvertToVolume"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_format (unknown) [READ] */
  format = (_initProto(this), _init_format(this, null));

  /** m_width (unknown) [READ] */
  width = (_init_extra_format(this), _init_width(this, null));

  /** m_height (unknown) [READ] */
  height = (_init_extra_width(this), _init_height(this, null));

  /** m_mipCount (unknown) [READ] */
  mipCount = (_init_extra_height(this), _init_mipCount(this, null));

  /** m_type (unknown) [READ] */
  imageType = (_init_extra_mipCount(this), _init_imageType(this, null));

  /** m_name (unknown) [READWRITE, PERSIST] */
  name = (_init_extra_imageType(this), _init_name(this, null));

  /** Carbon method CreateVolume (MAP_METHOD_AND_WRAP). */
  CreateVolume(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CreateVolume", args);
  }

  /** Carbon method Create (MAP_METHOD_AND_WRAP). */
  Create(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "Create", args);
  }

  /** Carbon method CreateCube (MAP_METHOD_AND_WRAP). */
  CreateCube(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CreateCube", args);
  }

  /** Carbon method PopulateMargin (MAP_METHOD_AND_WRAP). */
  PopulateMargin(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "PopulateMargin", args);
  }

  /** Carbon method SaveAsync -> PySaveAsync (MAP_METHOD). */
  SaveAsync(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "SaveAsync", args);
  }

  /** Carbon method WaitForSave (MAP_METHOD_AND_WRAP). */
  WaitForSave(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "WaitForSave", args);
  }

  /** Carbon method ChangeFormat -> ChangeFormatFromScript (MAP_METHOD_AND_WRAP). */
  ChangeFormat(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "ChangeFormat", args);
  }

  /** Carbon method Compress (MAP_METHOD_AND_WRAP). */
  Compress(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "Compress", args);
  }

  /** Carbon method SetMipRawData -> PySetMipRawData (MAP_METHOD). */
  SetMipRawData(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "SetMipRawData", args);
  }

  /** Carbon method CopyFaceFromRenderTarget -> CopyFaceFromRenderTargetPython (MAP_METHOD_AND_WRAP). */
  CopyFaceFromRenderTarget(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CopyFaceFromRenderTarget", args);
  }

  /** Carbon method CopyFromRenderTargetRegion -> CopyFromRenderTargetRegionPython (MAP_METHOD_AND_WRAP). */
  CopyFromRenderTargetRegion(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CopyFromRenderTargetRegion", args);
  }

  /** Carbon method CopyFromRenderTarget -> CopyFromRenderTargetPython (MAP_METHOD_AND_WRAP). */
  CopyFromRenderTarget(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CopyFromRenderTarget", args);
  }

  /** Carbon method CopyFromTextureRes -> CopyFromTextureResPython (MAP_METHOD_AND_WRAP). */
  CopyFromTextureRes(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CopyFromTextureRes", args);
  }

  /** Carbon method CountPixelsOfValue (MAP_METHOD_AND_WRAP). */
  CountPixelsOfValue(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CountPixelsOfValue", args);
  }

  /** Carbon method CreateFromHeightData (MAP_METHOD_AND_WRAP). */
  CreateFromHeightData(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "CreateFromHeightData", args);
  }

  /** Carbon method Crop (MAP_METHOD_AND_WRAP). */
  Crop(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "Crop", args);
  }

  /** Carbon method IsSaveSucceeded (MAP_METHOD_AND_WRAP). */
  IsSaveSucceeded(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "IsSaveSucceeded", args);
  }

  /** Carbon method Downsample2x2 (MAP_METHOD_AND_WRAP). */
  Downsample2x2(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "Downsample2x2", args);
  }

  /** Carbon method __init__ -> PyInit (MAP_METHOD). */
  __init__(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "__init__", args);
  }

  /** Carbon method IsSaveCompleted (MAP_METHOD_AND_WRAP). */
  IsSaveCompleted(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "IsSaveCompleted", args);
  }

  /** Carbon method IsSaving (MAP_METHOD_AND_WRAP). */
  IsSaving(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "IsSaving", args);
  }

  /** Carbon method IsValid (MAP_METHOD_AND_WRAP). */
  IsValid(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "IsValid", args);
  }

  /** Carbon method IsCompressed (MAP_METHOD_AND_WRAP). */
  IsCompressed(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "IsCompressed", args);
  }

  /** Carbon method IsMonochrome (MAP_METHOD_AND_WRAP). */
  IsMonochrome(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "IsMonochrome", args);
  }

  /** Carbon method GetMipRawData -> PyGetMipRawData (MAP_METHOD). */
  GetMipRawData(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "GetMipRawData", args);
  }

  /** Carbon method GetRawData -> PyGetRawData (MAP_METHOD). */
  GetRawData(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "GetRawData", args);
  }

  /** Carbon method Save -> PySave (MAP_METHOD). */
  Save(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "Save", args);
  }

  /** Carbon method ConvertToVolume (MAP_METHOD_AND_WRAP). */
  ConvertToVolume(...args) {
    throw CjsModel.notImplemented("Tr2HostBitmap", "ConvertToVolume", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2HostBitmap as Tr2HostBitmap };
//# sourceMappingURL=Tr2HostBitmap.js.map
