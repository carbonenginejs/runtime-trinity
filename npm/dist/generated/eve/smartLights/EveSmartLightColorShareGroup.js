import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../EveEntity.js';

let _initClass, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_lightGroups, _init_extra_lightGroups;

/** EveSmartLightColorShareGroup (eve/smartLights) - generated from schema shapeHash 58ac47b4.... */
let _EveSmartLightColorSh;
class EveSmartLightColorShareGroup extends _EveEntity {
  static {
    ({
      e: [_init_display, _init_extra_display, _init_name, _init_extra_name, _init_lightGroups, _init_extra_lightGroups],
      c: [_EveSmartLightColorSh, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightColorShareGroup",
      family: "eve/smartLights"
    })], [[[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, void 0, type.list("IEveSmartLightGroup")], 16, "lightGroups"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_lightGroups(this);
  }
  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = _init_display(this, true);

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_lightGroups (PIEveSmartLightGroupVector) [READ, PERSIST, NOTIFY] */
  lightGroups = (_init_extra_name(this), _init_lightGroups(this, []));
  static {
    _initClass();
  }
}

export { _EveSmartLightColorSh as EveSmartLightColorShareGroup };
//# sourceMappingURL=EveSmartLightColorShareGroup.js.map
