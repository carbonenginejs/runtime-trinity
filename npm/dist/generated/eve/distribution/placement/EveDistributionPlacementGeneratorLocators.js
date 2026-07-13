import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_locators, _init_extra_locators;

/** EveDistributionPlacementGeneratorLocators (eve/distribution/placement) - generated from schema shapeHash f7dad053.... */
let _EveDistributionPlace;
class EveDistributionPlacementGeneratorLocators extends CjsModel {
  static {
    ({
      e: [_init_locators, _init_extra_locators],
      c: [_EveDistributionPlace, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionPlacementGeneratorLocators",
      family: "eve/distribution/placement"
    })], [[[io, io.persist, void 0, type.list("Locator")], 16, "locators"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_locators(this);
  }
  /** m_locators (PLocatorStructureList) [READ, PERSIST] */
  locators = _init_locators(this, []);
  static {
    _initClass();
  }
}

export { _EveDistributionPlace as EveDistributionPlacementGeneratorLocators };
//# sourceMappingURL=EveDistributionPlacementGeneratorLocators.js.map
