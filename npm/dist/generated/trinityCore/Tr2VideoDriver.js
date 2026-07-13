import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_driverDate, _init_extra_driverDate, _init_driverVendor, _init_extra_driverVendor, _init_driverVersion, _init_extra_driverVersion, _init_driverVersionString, _init_extra_driverVersionString, _init_isAmdDynamicSwitchable, _init_extra_isAmdDynamicSwitchable, _init_isOptimus, _init_extra_isOptimus;

/** Tr2VideoDriver (trinityCore) - generated from schema shapeHash ee9f979c.... */
let _Tr2VideoDriver;
class Tr2VideoDriver extends CjsModel {
  static {
    ({
      e: [_init_driverDate, _init_extra_driverDate, _init_driverVendor, _init_extra_driverVendor, _init_driverVersion, _init_extra_driverVersion, _init_driverVersionString, _init_extra_driverVersionString, _init_isAmdDynamicSwitchable, _init_extra_isAmdDynamicSwitchable, _init_isOptimus, _init_extra_isOptimus],
      c: [_Tr2VideoDriver, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2VideoDriver",
      family: "trinityCore"
    })], [[[io, io.read, void 0, type.rawStruct("Tr2VideoDriverInfo")], 16, "driverDate"], [[io, io.read, void 0, type.rawStruct("Tr2VideoDriverInfo")], 16, "driverVendor"], [[io, io.read, void 0, type.rawStruct("Tr2VideoDriverInfo")], 16, "driverVersion"], [[io, io.read, void 0, type.rawStruct("Tr2VideoDriverInfo")], 16, "driverVersionString"], [[io, io.read, void 0, type.rawStruct("Tr2VideoDriverInfo")], 16, "isAmdDynamicSwitchable"], [[io, io.read, void 0, type.rawStruct("Tr2VideoDriverInfo")], 16, "isOptimus"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isOptimus(this);
  }
  /** m_info.driverDate (Tr2VideoDriverInfo) [READ] */
  driverDate = _init_driverDate(this, null);

  /** m_info.driverVendor (Tr2VideoDriverInfo) [READ] */
  driverVendor = (_init_extra_driverDate(this), _init_driverVendor(this, null));

  /** m_info.driverVersion (Tr2VideoDriverInfo) [READ] */
  driverVersion = (_init_extra_driverVendor(this), _init_driverVersion(this, null));

  /** m_info.driverVersionString (Tr2VideoDriverInfo) [READ] */
  driverVersionString = (_init_extra_driverVersion(this), _init_driverVersionString(this, null));

  /** m_info.isAmdDynamicSwitchable (Tr2VideoDriverInfo) [READ] */
  isAmdDynamicSwitchable = (_init_extra_driverVersionString(this), _init_isAmdDynamicSwitchable(this, null));

  /** m_info.isOptimus (Tr2VideoDriverInfo) [READ] */
  isOptimus = (_init_extra_isAmdDynamicSwitchable(this), _init_isOptimus(this, null));
  static {
    _initClass();
  }
}

export { _Tr2VideoDriver as Tr2VideoDriver };
//# sourceMappingURL=Tr2VideoDriver.js.map
