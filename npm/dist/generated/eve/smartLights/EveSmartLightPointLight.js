import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../EveEntity.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsLightData as _CjsLightData, setCjsLightDataOwnerValues, defineCjsLightDataAccessors } from '../../../eve/lights/CjsLightData.js';

let _initClass, _init_lightData, _init_extra_lightData, _init_lightProfile, _init_extra_lightProfile, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_lightProfilePath, _init_extra_lightProfilePath, _init_staticOffsetTranslation, _init_extra_staticOffsetTranslation, _init_staticOffsetRotation, _init_extra_staticOffsetRotation;

/** EveSmartLightPointLight (eve/smartLights) - generated from schema shapeHash d980f7c3.... */
let _EveSmartLightPointLi;
new class extends _identity {
  static [class EveSmartLightPointLight extends _EveEntity {
    static {
      ({
        e: [_init_lightData, _init_extra_lightData, _init_lightProfile, _init_extra_lightProfile, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_lightProfilePath, _init_extra_lightProfilePath, _init_staticOffsetTranslation, _init_extra_staticOffsetTranslation, _init_staticOffsetRotation, _init_extra_staticOffsetRotation],
        c: [_EveSmartLightPointLi, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveSmartLightPointLight",
        family: "eve/smartLights"
      })], [[[io, io.owned, void 0, type.struct("CjsLightData")], 16, "lightData"], [[io, io.read, void 0, type.objectRef("Tr2LightProfileRes")], 16, "lightProfile"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.notify, io, io.persist, type, type.string], 16, "lightProfilePath"], [[io, io.persist, type, type.vec3], 16, "staticOffsetTranslation"], [[io, io.persist, type, type.quat], 16, "staticOffsetRotation"]], 0, void 0, _EveEntity));
    }
    constructor(...args) {
      super(...args);
      _init_extra_staticOffsetRotation(this);
    }
    /** m_lightGroupData (LightData) */
    lightData = _init_lightData(this, new _CjsLightData());

    /** m_lightProfile (Tr2LightProfileResPtr) [READ] */
    lightProfile = (_init_extra_lightData(this), _init_lightProfile(this, null));

    /** m_name (std::string) [READWRITE, PERSIST] */
    name = (_init_extra_lightProfile(this), _init_name(this, ""));

    /** m_display (bool) [READWRITE, PERSIST] */
    display = (_init_extra_name(this), _init_display(this, true));

    /** m_lightProfilePath (std::wstring) [READWRITE, PERSIST, NOTIFY] */
    lightProfilePath = (_init_extra_display(this), _init_lightProfilePath(this, ""));

    /** m_staticOffsetTranslation (Vector3) [READWRITE, PERSIST] */
    staticOffsetTranslation = (_init_extra_lightProfilePath(this), _init_staticOffsetTranslation(this, vec3.create()));

    /** m_staticOffsetRotation (Quaternion) [READWRITE, PERSIST] */
    staticOffsetRotation = (_init_extra_staticOffsetTranslation(this), _init_staticOffsetRotation(this, quat.create()));
    SetValues(values = {}, options = {}) {
      return setCjsLightDataOwnerValues(this, values, options, (ownerValues, ownerOptions) => super.SetValues(ownerValues, ownerOptions), this.constructor.LightDataFields);
    }
  }];
  LightDataFields = ["flags", "innerRadius", "brightness", "radius"];
  constructor() {
    super(_EveSmartLightPointLi), _initClass();
  }
}();
defineCjsLightDataAccessors(_EveSmartLightPointLi, _EveSmartLightPointLi.LightDataFields);

export { _EveSmartLightPointLi as EveSmartLightPointLight };
//# sourceMappingURL=EveSmartLightPointLight.js.map
