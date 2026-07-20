import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { defineCjsLightDataAccessors } from './CjsLightData.js';
import { Tr2Light as _Tr2Light } from './Tr2Light.js';

let _initClass, _init_name, _init_extra_name, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile;
let _Tr2PointLight;
new class extends _identity {
  static [class Tr2PointLight extends _Tr2Light {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile],
        c: [_Tr2PointLight, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2PointLight",
        family: "eve/lights"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.string], 16, "lightProfilePath"], [[io, io.read, void 0, type.objectRef("Tr2LightProfileRes")], 16, "lightProfile"]], 0, void 0, _Tr2Light));
    }
    name = _init_name(this, "");
    lightProfilePath = (_init_extra_name(this), _init_lightProfilePath(this, ""));
    lightProfile = (_init_extra_lightProfilePath(this), _init_lightProfile(this, null));
    type = (_init_extra_lightProfile(this), _Tr2Light.POINT_LIGHT);
  }];
  LightDataFields = ["flags", "position", "rotation", "boneIndex", "radius", "innerRadius", "color", "brightness", "noiseAmplitude", "noiseFrequency", "noiseOctaves", "castsShadows", "isVolumetric"];
  constructor() {
    super(_Tr2PointLight), _initClass();
  }
}();
defineCjsLightDataAccessors(_Tr2PointLight, _Tr2PointLight.LightDataFields);

export { _Tr2PointLight as Tr2PointLight };
//# sourceMappingURL=Tr2PointLight.js.map
