import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_position, _init_extra_position, _init_color, _init_extra_color, _init_brightness, _init_extra_brightness, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_rotation, _init_extra_rotation, _init_outerAngle, _init_extra_outerAngle, _init_innerAngle, _init_extra_innerAngle, _init_texturePath, _init_extra_texturePath, _init_boneIndex, _init_extra_boneIndex, _init_flags, _init_extra_flags, _init_startTime, _init_extra_startTime, _init_castsShadows, _init_extra_castsShadows, _init_isVolumetric, _init_extra_isVolumetric;

/** LightData (eve/lights) - generated from schema shapeHash 51130201.... */
let _LightData;
new class extends _identity {
  static [class LightData extends CjsModel {
    static {
      ({
        e: [_init_position, _init_extra_position, _init_color, _init_extra_color, _init_brightness, _init_extra_brightness, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_rotation, _init_extra_rotation, _init_outerAngle, _init_extra_outerAngle, _init_innerAngle, _init_extra_innerAngle, _init_texturePath, _init_extra_texturePath, _init_boneIndex, _init_extra_boneIndex, _init_flags, _init_extra_flags, _init_startTime, _init_extra_startTime, _init_castsShadows, _init_extra_castsShadows, _init_isVolumetric, _init_extra_isVolumetric],
        c: [_LightData, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "LightData",
        family: "eve/lights"
      })], [[[type, type.vec3], 16, "position"], [[type, type.color], 16, "color"], [[type, type.float32], 16, "brightness"], [[type, type.float32], 16, "noiseAmplitude"], [[type, type.float32], 16, "noiseFrequency"], [[type, type.uint32], 16, "noiseOctaves"], [[type, type.float32], 16, "radius"], [[type, type.float32], 16, "innerRadius"], [[type, type.quat], 16, "rotation"], [[type, type.float32], 16, "outerAngle"], [[type, type.float32], 16, "innerAngle"], [[type, type.string], 16, "texturePath"], [[type, type.int32], 16, "boneIndex"], [[type, type.uint16], 16, "flags"], [[type, type.float64], 16, "startTime"], [[type, type.int32, void 0, schema.enum("PerLightShadowSetting")], 16, "castsShadows"], [[type, type.boolean], 16, "isVolumetric"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_isVolumetric(this);
    }
    /** position (Vector3) */
    position = _init_position(this, vec3.create());

    /** color (Color) */
    color = (_init_extra_position(this), _init_color(this, vec4.createLinear()));

    /** brightness (float) */
    brightness = (_init_extra_color(this), _init_brightness(this, 1));

    /** noiseAmplitude (float) */
    noiseAmplitude = (_init_extra_brightness(this), _init_noiseAmplitude(this, 0));

    /** noiseFrequency (float) */
    noiseFrequency = (_init_extra_noiseAmplitude(this), _init_noiseFrequency(this, 1));

    /** noiseOctaves (uint32_t) */
    noiseOctaves = (_init_extra_noiseFrequency(this), _init_noiseOctaves(this, 1));

    /** radius (float) */
    radius = (_init_extra_noiseOctaves(this), _init_radius(this, 0));

    /** innerRadius (float) */
    innerRadius = (_init_extra_radius(this), _init_innerRadius(this, 0));

    /** rotation (Quaternion) */
    rotation = (_init_extra_innerRadius(this), _init_rotation(this, quat.create()));

    /** outerAngle (float) */
    outerAngle = (_init_extra_rotation(this), _init_outerAngle(this, 0));

    /** innerAngle (float) */
    innerAngle = (_init_extra_outerAngle(this), _init_innerAngle(this, 0));

    /** texturePath (std::wstring) */
    texturePath = (_init_extra_innerAngle(this), _init_texturePath(this, ""));

    /** boneIndex (int32_t) */
    boneIndex = (_init_extra_texturePath(this), _init_boneIndex(this, -1));

    /** flags (uint16_t) */
    flags = (_init_extra_boneIndex(this), _init_flags(this, 1));

    /** startTime (Be::Time) */
    startTime = (_init_extra_flags(this), _init_startTime(this, 0));

    /** castsShadows (PerLightShadowSetting - enum PerLightShadowSetting) */
    castsShadows = (_init_extra_startTime(this), _init_castsShadows(this, 0));

    /** isVolumetric (bool) */
    isVolumetric = (_init_extra_castsShadows(this), _init_isVolumetric(this, false));
  }];
  PerLightShadowSetting = Object.freeze({
    DISABLED: 0,
    ENABLED_ONLY_ON_HIGH_QUALITY: 1,
    ALWAYS_ENABLED: 2
  });
  constructor() {
    super(_LightData), _initClass();
  }
}();

export { _LightData as LightData };
//# sourceMappingURL=LightData.js.map
