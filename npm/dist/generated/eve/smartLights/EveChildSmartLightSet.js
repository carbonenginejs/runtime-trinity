import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initClass, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_distribution, _init_extra_distribution, _init_lightGroups, _init_extra_lightGroups;

/** EveChildSmartLightSet (eve/smartLights) - generated from schema shapeHash 05d4824f.... */
let _EveChildSmartLightSe;
class EveChildSmartLightSet extends _EveChildTransform {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_display, _init_extra_display, _init_distribution, _init_extra_distribution, _init_lightGroups, _init_extra_lightGroups],
      c: [_EveChildSmartLightSe, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildSmartLightSet",
      family: "eve/smartLights"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, void 0, type.objectRef("IEveDistributionMethod")], 16, "distribution"], [[io, io.persist, void 0, type.list("IEveSmartLightGroup")], 16, "lightGroups"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_lightGroups(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_name(this), _init_display(this, true));

  /** m_distribution (IEveDistributionMethodPtr) [READWRITE, PERSIST] */
  distribution = (_init_extra_display(this), _init_distribution(this, null));

  /** m_lightGroups (PIEveSmartLightGroupVector) [READ, PERSIST] */
  lightGroups = (_init_extra_distribution(this), _init_lightGroups(this, []));
  static {
    _initClass();
  }
}

export { _EveChildSmartLightSe as EveChildSmartLightSet };
//# sourceMappingURL=EveChildSmartLightSet.js.map
