import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, impl } from '@carbonenginejs/core-types/schema';
import { defineCjsLightDataAccessors } from '../../../eve/lights/CjsLightData.js';
import { Tr2Light as _Tr2Light } from '../../../eve/lights/Tr2Light.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_factionColor, _init_extra_factionColor, _init_saturation, _init_extra_saturation, _init_isSpotlight, _init_extra_isSpotlight, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile;

/** Tr2FactionLight (eve/lights) - generated from schema shapeHash c9f0dbda.... */
let _Tr2FactionLight;
new class extends _identity {
  static [class Tr2FactionLight extends _Tr2Light {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_factionColor, _init_extra_factionColor, _init_saturation, _init_extra_saturation, _init_isSpotlight, _init_extra_isSpotlight, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile, _initProto],
        c: [_Tr2FactionLight, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2FactionLight",
        family: "eve/lights"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.int32], 16, "factionColor"], [[io, io.notify, io, io.persist, type, type.float32], 16, "saturation"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "isSpotlight"], [[io, io.notify, io, io.persist, type, type.string], 16, "lightProfilePath"], [[io, io.read, void 0, type.objectRef("Tr2LightProfileRes")], 16, "lightProfile"], [[impl, impl.implemented], 18, "SetInheritProperties"], [[impl, impl.implemented], 18, "SetLightColorFromFactionColor"], [[impl, impl.implemented], 18, "GetSelectedColor"], [[impl, impl.adapted, void 0, impl.reason("Browser property notifications identify the changed field by name rather than Carbon's Be::Var pointer.")], 18, "OnModified"]], 0, void 0, _Tr2Light));
    }
    #parentColorSet = (_initProto(this), null);

    /** m_name (std::string) [READWRITE, PERSIST] */
    name = _init_name(this, "");

    /** m_selectedColor (int) [READWRITE, PERSIST, NOTIFY, ENUM] */
    factionColor = (_init_extra_name(this), _init_factionColor(this, -1));

    /** m_saturation (float) [READWRITE, PERSIST, NOTIFY] */
    saturation = (_init_extra_factionColor(this), _init_saturation(this, 1));

    /** m_isSpotlight (bool) [READWRITE, PERSIST, NOTIFY] */
    isSpotlight = (_init_extra_saturation(this), _init_isSpotlight(this, false));

    /** m_lightProfilePath (std::wstring) [READWRITE, PERSIST, NOTIFY] */
    lightProfilePath = (_init_extra_isSpotlight(this), _init_lightProfilePath(this, ""));

    /** m_lightProfile (Tr2LightProfileResPtr) [READ] */
    lightProfile = (_init_extra_lightProfilePath(this), _init_lightProfile(this, null));
    type = (_init_extra_lightProfile(this), _Tr2Light.POINT_LIGHT);
    SetInheritProperties(colorSet) {
      if (colorSet) {
        this.#parentColorSet = colorSet;
        this.SetLightColorFromFactionColor();
      }
    }
    SetLightColorFromFactionColor() {
      const color = this.#parentColorSet?.[this.factionColor];
      if (!color) {
        return false;
      }
      const intensity = color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114;
      const saturation = Math.max(0, Number(this.saturation) || 0);
      this.color[0] = intensity + (color[0] - intensity) * saturation;
      this.color[1] = intensity + (color[1] - intensity) * saturation;
      this.color[2] = intensity + (color[2] - intensity) * saturation;
      this.color[3] = color[3] ?? 1;
      return true;
    }
    GetSelectedColor() {
      return this.color;
    }
    OnModified(propertyName) {
      if (propertyName === "isSpotlight") {
        this.type = this.isSpotlight ? _Tr2Light.SPOT_LIGHT : _Tr2Light.POINT_LIGHT;
      }
      if (propertyName === "factionColor" || propertyName === "saturation") {
        this.SetLightColorFromFactionColor();
      }
      return true;
    }
  }];
  LightDataFields = ["flags", "position", "rotation", "boneIndex", "radius", "innerRadius", "color", "brightness", "innerAngle", "outerAngle", "noiseAmplitude", "noiseFrequency", "noiseOctaves", "castsShadows", "isVolumetric"];
  constructor() {
    super(_Tr2FactionLight), _initClass();
  }
}();
defineCjsLightDataAccessors(_Tr2FactionLight, _Tr2FactionLight.LightDataFields);

export { _Tr2FactionLight as Tr2FactionLight };
//# sourceMappingURL=Tr2FactionLight.js.map
