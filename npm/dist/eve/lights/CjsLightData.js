import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { type, schema } from '@carbonenginejs/core-types/schema';

let _initClass, _init_position, _init_extra_position, _init_color, _init_extra_color, _init_brightness, _init_extra_brightness, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_rotation, _init_extra_rotation, _init_outerAngle, _init_extra_outerAngle, _init_innerAngle, _init_extra_innerAngle, _init_texturePath, _init_extra_texturePath, _init_boneIndex, _init_extra_boneIndex, _init_flags, _init_extra_flags, _init_startTime, _init_extra_startTime, _init_castsShadows, _init_extra_castsShadows, _init_isVolumetric, _init_extra_isVolumetric;
let _CjsLightData;
new class extends _identity {
  static [class CjsLightData extends CjsModel {
    static {
      ({
        e: [_init_position, _init_extra_position, _init_color, _init_extra_color, _init_brightness, _init_extra_brightness, _init_noiseAmplitude, _init_extra_noiseAmplitude, _init_noiseFrequency, _init_extra_noiseFrequency, _init_noiseOctaves, _init_extra_noiseOctaves, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_rotation, _init_extra_rotation, _init_outerAngle, _init_extra_outerAngle, _init_innerAngle, _init_extra_innerAngle, _init_texturePath, _init_extra_texturePath, _init_boneIndex, _init_extra_boneIndex, _init_flags, _init_extra_flags, _init_startTime, _init_extra_startTime, _init_castsShadows, _init_extra_castsShadows, _init_isVolumetric, _init_extra_isVolumetric],
        c: [_CjsLightData, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "CjsLightData",
        sourceClass: "LightData",
        aliases: ["LightData"],
        family: "eve/lights"
      })], [[[type, type.vec3], 16, "position"], [[type, type.color], 16, "color"], [[type, type.float32], 16, "brightness"], [[type, type.float32], 16, "noiseAmplitude"], [[type, type.float32], 16, "noiseFrequency"], [[type, type.uint32], 16, "noiseOctaves"], [[type, type.float32], 16, "radius"], [[type, type.float32], 16, "innerRadius"], [[type, type.quat], 16, "rotation"], [[type, type.float32], 16, "outerAngle"], [[type, type.float32], 16, "innerAngle"], [[type, type.string], 16, "texturePath"], [[type, type.int32], 16, "boneIndex"], [[type, type.uint16], 16, "flags"], [[type, type.float64], 16, "startTime"], [[type, type.int32, void 0, schema.enum("PerLightShadowSetting")], 16, "castsShadows"], [[type, type.boolean], 16, "isVolumetric"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_isVolumetric(this);
    }
    position = _init_position(this, vec3.create());
    color = (_init_extra_position(this), _init_color(this, vec4.createLinear()));
    brightness = (_init_extra_color(this), _init_brightness(this, 1));
    noiseAmplitude = (_init_extra_brightness(this), _init_noiseAmplitude(this, 0));
    noiseFrequency = (_init_extra_noiseAmplitude(this), _init_noiseFrequency(this, 1));
    noiseOctaves = (_init_extra_noiseFrequency(this), _init_noiseOctaves(this, 1));
    radius = (_init_extra_noiseOctaves(this), _init_radius(this, 0));
    innerRadius = (_init_extra_radius(this), _init_innerRadius(this, 0));
    rotation = (_init_extra_innerRadius(this), _init_rotation(this, quat.create()));
    outerAngle = (_init_extra_rotation(this), _init_outerAngle(this, 0));
    innerAngle = (_init_extra_outerAngle(this), _init_innerAngle(this, 0));
    texturePath = (_init_extra_innerAngle(this), _init_texturePath(this, ""));
    boneIndex = (_init_extra_texturePath(this), _init_boneIndex(this, -1));
    flags = (_init_extra_boneIndex(this), _init_flags(this, 1));
    startTime = (_init_extra_flags(this), _init_startTime(this, 0));
    castsShadows = (_init_extra_startTime(this), _init_castsShadows(this, 0));
    isVolumetric = (_init_extra_castsShadows(this), _init_isVolumetric(this, false));
  }];
  Fields = ["position", "color", "brightness", "noiseAmplitude", "noiseFrequency", "noiseOctaves", "radius", "innerRadius", "rotation", "outerAngle", "innerAngle", "texturePath", "boneIndex", "flags", "startTime", "castsShadows", "isVolumetric"];
  PerLightShadowSetting = Object.freeze({
    DISABLED: 0,
    ENABLED_ONLY_ON_HIGH_QUALITY: 1,
    ALWAYS_ENABLED: 2
  });
  constructor() {
    super(_CjsLightData), _initClass();
  }
}();
function defineCjsLightDataAccessors(Constructor, fieldNames) {
  const descriptors = {};
  for (const fieldName of fieldNames) {
    descriptors[fieldName] = {
      configurable: true,
      get() {
        return this.lightData[fieldName];
      },
      set(value) {
        this.lightData.SetValues({
          [fieldName]: value
        });
      }
    };
  }
  Object.defineProperties(Constructor.prototype, descriptors);
}
function setCjsLightDataOwnerValues(owner, values, options, setOwnerValues, fieldNames) {
  if (!values || typeof values !== "object") return setOwnerValues(values, options);
  const fieldSet = new Set(fieldNames);
  const ownerValues = {};
  const lightValues = {};
  let hasLightValues = false;
  for (const [key, value] of Object.entries(values)) {
    if (key === "lightData") continue;
    if (fieldSet.has(key)) {
      lightValues[key] = value;
      hasLightValues = true;
    } else {
      ownerValues[key] = value;
    }
  }
  if (Object.prototype.hasOwnProperty.call(values, "lightData")) {
    const nested = values.lightData?.GetValues?.() ?? values.lightData;
    if (nested && typeof nested === "object") {
      for (const fieldName of _CjsLightData.Fields) {
        if (Object.prototype.hasOwnProperty.call(nested, fieldName)) {
          lightValues[fieldName] = nested[fieldName];
          hasLightValues = true;
        }
      }
    }
  }
  const ownerChanged = setOwnerValues(ownerValues, options);
  const lightChanged = hasLightValues ? owner.lightData.SetValues(lightValues, options) : false;
  if (options?.returnBoolean === true) return ownerChanged === true || lightChanged === true;
  const changed = new Set();
  if (ownerChanged instanceof Set) {
    for (const fieldName of ownerChanged) changed.add(fieldName);
  }
  if (lightChanged) changed.add("lightData");
  return changed.size ? changed : false;
}

export { _CjsLightData as CjsLightData, defineCjsLightDataAccessors, setCjsLightDataOwnerValues };
//# sourceMappingURL=CjsLightData.js.map
