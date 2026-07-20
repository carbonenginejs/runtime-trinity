import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { defineCjsLightDataAccessors } from './CjsLightData.js';
import { Tr2Light as _Tr2Light } from './Tr2Light.js';
import { Tr2PointLight as _Tr2PointLight } from './Tr2PointLight.js';

let _initProto, _initClass, _init_texture, _init_extra_texture;
let _Tr2TexturedPointLigh;
new class extends _identity {
  static [class Tr2TexturedPointLight extends _Tr2PointLight {
    static {
      ({
        e: [_init_texture, _init_extra_texture, _initProto],
        c: [_Tr2TexturedPointLigh, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2TexturedPointLight",
        family: "eve/lights"
      })], [[[io, io.read, void 0, type.objectRef("TriTextureRes")], 16, "texture"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSaturation"]], 0, void 0, _Tr2PointLight));
    }
    texture = (_initProto(this), _init_texture(this, null));
    isDynamic = (_init_extra_texture(this), true);
    type = _Tr2Light.POINT_LIGHT;
    #saturation = 1;
    SetSaturation(saturation) {
      this.#saturation = Number(saturation);
    }
  }];
  LightDataFields = [..._Tr2PointLight.LightDataFields, "texturePath"];
  constructor() {
    super(_Tr2TexturedPointLigh), _initClass();
  }
}();
defineCjsLightDataAccessors(_Tr2TexturedPointLigh, ["texturePath"]);

export { _Tr2TexturedPointLigh as Tr2TexturedPointLight };
//# sourceMappingURL=Tr2TexturedPointLight.js.map
