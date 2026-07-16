import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_lightSource, _init_extra_lightSource, _init_lightDataValid, _init_extra_lightDataValid, _init_lightData, _init_extra_lightData, _init_lightInstances, _init_extra_lightInstances;

/** Tr2InteriorLightSet (interior) - generated from schema shapeHash 848a64a9.... */
let _Tr2InteriorLightSet;
class Tr2InteriorLightSet extends CjsModel {
  static {
    ({
      e: [_init_lightSource, _init_extra_lightSource, _init_lightDataValid, _init_extra_lightDataValid, _init_lightData, _init_extra_lightData, _init_lightInstances, _init_extra_lightInstances],
      c: [_Tr2InteriorLightSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2InteriorLightSet",
      family: "interior"
    })], [[type.objectRef("ITr2InteriorLight"), 0, "lightSource"], [[type, type.boolean], 16, "lightDataValid"], [type.rawStruct("Tr2InteriorPerObjectLightData"), 0, "lightData"], [type.rawStruct("std::list<InternalLightInstance>"), 0, "lightInstances"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_lightInstances(this);
  }
  /** lightSource (ITr2InteriorLight*) */
  lightSource = _init_lightSource(this, null);

  /** lightDataValid (mutable bool) */
  lightDataValid = (_init_extra_lightSource(this), _init_lightDataValid(this, false));

  /** lightData (mutable Tr2InteriorPerObjectLightData) */
  lightData = (_init_extra_lightDataValid(this), _init_lightData(this, null));

  /** m_lightInstances (std::list<InternalLightInstance>) */
  lightInstances = (_init_extra_lightData(this), _init_lightInstances(this, null));
  static {
    _initClass();
  }
}

export { _Tr2InteriorLightSet as Tr2InteriorLightSet };
//# sourceMappingURL=Tr2InteriorLightSet.js.map
