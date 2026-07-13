import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { Tr2Light as _Tr2Light } from './Tr2Light.js';
import { Tr2PointLight as _Tr2PointLight } from './Tr2PointLight.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_flags, _init_extra_flags, _init_position, _init_extra_position, _init_rotation, _init_extra_rotation, _init_boneIndex, _init_extra_boneIndex, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_color, _init_extra_color, _init_brightness, _init_extra_brightness, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves, _init_texturePath, _init_extra_texturePath, _init_texture, _init_extra_texture, _init_castsShadows, _init_extra_castsShadows, _init_isVolumetric, _init_extra_isVolumetric, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile;
let _Tr2TexturedPointLigh;
new class extends _identity {
  static [class Tr2TexturedPointLight extends _Tr2PointLight {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_flags, _init_extra_flags, _init_position, _init_extra_position, _init_rotation, _init_extra_rotation, _init_boneIndex, _init_extra_boneIndex, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_color, _init_extra_color, _init_brightness, _init_extra_brightness, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves, _init_texturePath, _init_extra_texturePath, _init_texture, _init_extra_texture, _init_castsShadows, _init_extra_castsShadows, _init_isVolumetric, _init_extra_isVolumetric, _init_lightProfilePath, _init_extra_lightProfilePath, _init_lightProfile, _init_extra_lightProfile, _initProto],
        c: [_Tr2TexturedPointLigh, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2TexturedPointLight",
        family: "eve/lights"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.uint16], 16, "flags"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.notify, io, io.persist, type, type.int32], 16, "boneIndex"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.persist, type, type.float32], 16, "innerRadius"], [[io, io.notify, io, io.persist, type, type.color], 16, "color"], [[io, io.notify, io, io.persist, type, type.float32], 16, "brightness"], [[io, io.persist, type, type.float32], 16, "noiseAmplitude"], [[io, io.persist, type, type.float32], 16, "noiseFrequency"], [[io, io.persist, type, type.uint32], 16, "noiseOctaves"], [[io, io.notify, io, io.persist, type, type.string], 16, "texturePath"], [[io, io.read, void 0, type.objectRef("TriTextureRes")], 16, "texture"], [[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("PerLightShadowSetting")], 16, "castsShadows"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "isVolumetric"], [[io, io.notify, io, io.persist, type, type.string], 16, "lightProfilePath"], [[io, io.read, void 0, type.objectRef("Tr2LightProfileRes")], 16, "lightProfile"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSaturation"]], 0, void 0, _Tr2PointLight));
    }
    name = (_initProto(this), _init_name(this, ""));
    flags = (_init_extra_name(this), _init_flags(this, 1));
    position = (_init_extra_flags(this), _init_position(this, vec3.create()));
    rotation = (_init_extra_position(this), _init_rotation(this, quat.create()));
    boneIndex = (_init_extra_rotation(this), _init_boneIndex(this, -1));
    radius = (_init_extra_boneIndex(this), _init_radius(this, 0));
    innerRadius = (_init_extra_radius(this), _init_innerRadius(this, 0));
    color = (_init_extra_innerRadius(this), _init_color(this, vec4.createLinear()));
    brightness = (_init_extra_color(this), _init_brightness(this, 1));
    noiseAmplitude = (_init_extra_brightness(this), _init_noiseAmplitude(this, 0));
    noiseFrequency = (_init_extra_noiseAmplitude(this), _init_noiseFrequency(this, 1));
    noiseOctaves = (_init_extra_noiseFrequency(this), _init_noiseOctaves(this, 1));
    texturePath = (_init_extra_noiseOctaves(this), _init_texturePath(this, ""));
    texture = (_init_extra_texturePath(this), _init_texture(this, null));
    castsShadows = (_init_extra_texture(this), _init_castsShadows(this, 0));
    isVolumetric = (_init_extra_castsShadows(this), _init_isVolumetric(this, false));
    lightProfilePath = (_init_extra_isVolumetric(this), _init_lightProfilePath(this, ""));
    lightProfile = (_init_extra_lightProfilePath(this), _init_lightProfile(this, null));
    isDynamic = (_init_extra_lightProfile(this), true);
    type = _Tr2Light.POINT_LIGHT;
    #saturation = 1;
    constructor(...args) {
      super(...args);
      _Tr2Light.BindLightDataFields(this, _Tr2TexturedPointLigh.LightDataFields);
    }
    SetSaturation(saturation) {
      this.#saturation = Number(saturation);
    }
  }];
  LightDataFields = Object.freeze([..._Tr2PointLight.LightDataFields, "texturePath"]);
  constructor() {
    super(_Tr2TexturedPointLigh), _initClass();
  }
}();

export { _Tr2TexturedPointLigh as Tr2TexturedPointLight };
//# sourceMappingURL=Tr2TexturedPointLight.js.map
