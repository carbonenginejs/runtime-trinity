import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_locatorSetName, _init_extra_locatorSetName;

/** EveDistributionPlacementGeneratorParentLocators (eve/distribution/placement) - generated from schema shapeHash ebb2456a.... */
let _EveDistributionPlace;
class EveDistributionPlacementGeneratorParentLocators extends CjsModel {
  static {
    ({
      e: [_init_locatorSetName, _init_extra_locatorSetName],
      c: [_EveDistributionPlace, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionPlacementGeneratorParentLocators",
      family: "eve/distribution/placement"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "locatorSetName"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_locatorSetName(this);
  }
  /** m_locatorSetName (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
  locatorSetName = _init_locatorSetName(this, "damage");
  static {
    _initClass();
  }
}

export { _EveDistributionPlace as EveDistributionPlacementGeneratorParentLocators };
//# sourceMappingURL=EveDistributionPlacementGeneratorParentLocators.js.map
