import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { defineCjsLightDataAccessors } from './CjsLightData.js';
import { Tr2Light as _Tr2Light } from './Tr2Light.js';

let _initClass, _init_name, _init_extra_name, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile;
let _Tr2SpotLight;
new class extends _identity {
  static [class Tr2SpotLight extends _Tr2Light {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile],
        c: [_Tr2SpotLight, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2SpotLight",
        family: "eve/lights"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.string], 16, "lightProfilePath"], [[io, io.read, void 0, type.objectRef("Tr2LightProfileRes")], 16, "lightProfile"]], 0, void 0, _Tr2Light));
    }
    name = _init_name(this, "");
    lightProfilePath = (_init_extra_name(this), _init_lightProfilePath(this, ""));
    lightProfile = (_init_extra_lightProfilePath(this), _init_lightProfile(this, null));
    type = (_init_extra_lightProfile(this), _Tr2Light.SPOT_LIGHT);
  }];
  LightDataFields = ["flags", "position", "rotation", "boneIndex", "radius", "innerRadius", "innerAngle", "outerAngle", "color", "brightness", "noiseAmplitude", "noiseFrequency", "noiseOctaves", "castsShadows", "isVolumetric"];
  constructor() {
    super(_Tr2SpotLight), _initClass();
  }
}();
defineCjsLightDataAccessors(_Tr2SpotLight, _Tr2SpotLight.LightDataFields);

export { _Tr2SpotLight as Tr2SpotLight };
//# sourceMappingURL=Tr2SpotLight.js.map
