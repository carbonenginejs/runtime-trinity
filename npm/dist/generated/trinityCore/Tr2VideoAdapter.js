import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_revision, _init_extra_revision, _init_deviceName, _init_extra_deviceName, _init_description, _init_extra_description, _init_deviceID, _init_extra_deviceID, _init_index, _init_extra_index, _init_subSystemID, _init_extra_subSystemID, _init_vendorID, _init_extra_vendorID, _init_driver, _init_extra_driver, _init_driverVersion, _init_extra_driverVersion;

/** Tr2VideoAdapter (trinityCore) - generated from schema shapeHash 6d3f3a55.... */
let _Tr2VideoAdapter;
class Tr2VideoAdapter extends CjsModel {
  static {
    ({
      e: [_init_revision, _init_extra_revision, _init_deviceName, _init_extra_deviceName, _init_description, _init_extra_description, _init_deviceID, _init_extra_deviceID, _init_index, _init_extra_index, _init_subSystemID, _init_extra_subSystemID, _init_vendorID, _init_extra_vendorID, _init_driver, _init_extra_driver, _init_driverVersion, _init_extra_driverVersion, _initProto],
      c: [_Tr2VideoAdapter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2VideoAdapter",
      family: "trinityCore"
    })], [[[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "revision"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "deviceName"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "description"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "deviceID"], [[io, io.read, type, type.uint32], 16, "index"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "subSystemID"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "vendorID"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "driver"], [[io, io.read, void 0, type.rawStruct("Tr2AdapterInfo")], 16, "driverVersion"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDriverInfo"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_driverVersion(this);
  }
  /** m_info.subSystemID (Tr2AdapterInfo) [READ] */
  revision = (_initProto(this), _init_revision(this, null));

  /** m_info.deviceName (Tr2AdapterInfo) [READ] */
  deviceName = (_init_extra_revision(this), _init_deviceName(this, null));

  /** m_info.description (Tr2AdapterInfo) [READ] */
  description = (_init_extra_deviceName(this), _init_description(this, null));

  /** m_info.deviceID (Tr2AdapterInfo) [READ] */
  deviceID = (_init_extra_description(this), _init_deviceID(this, null));

  /** m_index (unsigned) [READ] */
  index = (_init_extra_deviceID(this), _init_index(this, 0));

  /** m_info.subSystemID (Tr2AdapterInfo) [READ] */
  subSystemID = (_init_extra_index(this), _init_subSystemID(this, null));

  /** m_info.vendorID (Tr2AdapterInfo) [READ] */
  vendorID = (_init_extra_subSystemID(this), _init_vendorID(this, null));

  /** m_info.driver (Tr2AdapterInfo) [READ] */
  driver = (_init_extra_vendorID(this), _init_driver(this, null));

  /** m_info.driverVersion (Tr2AdapterInfo) [READ] */
  driverVersion = (_init_extra_driver(this), _init_driverVersion(this, null));

  /** Carbon method GetDriverInfo (MAP_METHOD_AND_WRAP). */
  GetDriverInfo(...args) {
    throw CjsModel.notImplemented("Tr2VideoAdapter", "GetDriverInfo", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2VideoAdapter as Tr2VideoAdapter };
//# sourceMappingURL=Tr2VideoAdapter.js.map
