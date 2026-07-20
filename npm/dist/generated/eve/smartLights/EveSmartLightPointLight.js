import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../EveEntity.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_flags, _init_extra_flags, _init_lightProfile, _init_extra_lightProfile, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_innerRadius, _init_extra_innerRadius, _init_brightness, _init_extra_brightness, _init_radius, _init_extra_radius, _init_lightProfilePath, _init_extra_lightProfilePath, _init_staticOffsetTranslation, _init_extra_staticOffsetTranslation, _init_staticOffsetRotation, _init_extra_staticOffsetRotation;

/** EveSmartLightPointLight (eve/smartLights) - generated from schema shapeHash d980f7c3.... */
let _EveSmartLightPointLi;
class EveSmartLightPointLight extends _EveEntity {
  static {
    ({
      e: [_init_flags, _init_extra_flags, _init_lightProfile, _init_extra_lightProfile, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_innerRadius, _init_extra_innerRadius, _init_brightness, _init_extra_brightness, _init_radius, _init_extra_radius, _init_lightProfilePath, _init_extra_lightProfilePath, _init_staticOffsetTranslation, _init_extra_staticOffsetTranslation, _init_staticOffsetRotation, _init_extra_staticOffsetRotation],
      c: [_EveSmartLightPointLi, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightPointLight",
      family: "eve/smartLights"
    })], [[[io, io.persist, type, type.uint16], 16, "flags"], [[io, io.read, void 0, type.objectRef("Tr2LightProfileRes")], 16, "lightProfile"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.float32], 16, "innerRadius"], [[io, io.persist, type, type.float32], 16, "brightness"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.notify, io, io.persist, type, type.string], 16, "lightProfilePath"], [[io, io.persist, type, type.vec3], 16, "staticOffsetTranslation"], [[io, io.persist, type, type.quat], 16, "staticOffsetRotation"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_staticOffsetRotation(this);
  }
  /** m_lightGroupData.flags (LightData) [READWRITE, PERSIST] */
  flags = _init_flags(this, 1);

  /** m_lightProfile (Tr2LightProfileResPtr) [READ] */
  lightProfile = (_init_extra_flags(this), _init_lightProfile(this, null));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_lightProfile(this), _init_name(this, ""));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_name(this), _init_display(this, true));

  /** m_lightGroupData.innerRadius (LightData) [READWRITE, PERSIST] */
  innerRadius = (_init_extra_display(this), _init_innerRadius(this, 0));

  /** m_lightGroupData.brightness (LightData) [READWRITE, PERSIST] */
  brightness = (_init_extra_innerRadius(this), _init_brightness(this, 1));

  /** m_lightGroupData.radius (LightData) [READWRITE, PERSIST] */
  radius = (_init_extra_brightness(this), _init_radius(this, 0));

  /** m_lightProfilePath (std::wstring) [READWRITE, PERSIST, NOTIFY] */
  lightProfilePath = (_init_extra_radius(this), _init_lightProfilePath(this, ""));

  /** m_staticOffsetTranslation (Vector3) [READWRITE, PERSIST] */
  staticOffsetTranslation = (_init_extra_lightProfilePath(this), _init_staticOffsetTranslation(this, vec3.create()));

  /** m_staticOffsetRotation (Quaternion) [READWRITE, PERSIST] */
  staticOffsetRotation = (_init_extra_staticOffsetTranslation(this), _init_staticOffsetRotation(this, quat.create()));
  static {
    _initClass();
  }
}

export { _EveSmartLightPointLi as EveSmartLightPointLight };
//# sourceMappingURL=EveSmartLightPointLight.js.map
