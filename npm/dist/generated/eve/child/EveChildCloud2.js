import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../EveEntity.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_reflectionMode, _init_extra_reflectionMode, _init_minVisibleQuality, _init_extra_minVisibleQuality, _init_sortingModifier, _init_extra_sortingModifier, _init_animation, _init_extra_animation, _init_shadowMapDS, _init_extra_shadowMapDS, _init_lightmap, _init_extra_lightmap, _init_lightmapSizeScale, _init_extra_lightmapSizeScale, _init_lights, _init_extra_lights, _init_minScreenSize, _init_extra_minScreenSize, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_scaling, _init_extra_scaling, _init_reflectionEffect, _init_extra_reflectionEffect, _init_effect, _init_extra_effect, _init_noiseTextureSize, _init_extra_noiseTextureSize, _init_mapOffset, _init_extra_mapOffset, _init_mapOffset2, _init_extra_mapOffset2, _init_mapOffset3, _init_extra_mapOffset3, _init_castShadows, _init_extra_castShadows, _init_receiveShadows, _init_extra_receiveShadows, _init_name, _init_extra_name, _init_detailTiling, _init_extra_detailTiling, _init_detailTiling2, _init_extra_detailTiling2, _init_textureTiling, _init_extra_textureTiling, _init_display, _init_extra_display;

/** EveChildCloud2 (eve/child) - generated from schema shapeHash e973d7fa.... */
let _EveChildCloud;
new class extends _identity {
  static [class EveChildCloud2 extends _EveEntity {
    static {
      ({
        e: [_init_reflectionMode, _init_extra_reflectionMode, _init_minVisibleQuality, _init_extra_minVisibleQuality, _init_sortingModifier, _init_extra_sortingModifier, _init_animation, _init_extra_animation, _init_shadowMapDS, _init_extra_shadowMapDS, _init_lightmap, _init_extra_lightmap, _init_lightmapSizeScale, _init_extra_lightmapSizeScale, _init_lights, _init_extra_lights, _init_minScreenSize, _init_extra_minScreenSize, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_scaling, _init_extra_scaling, _init_reflectionEffect, _init_extra_reflectionEffect, _init_effect, _init_extra_effect, _init_noiseTextureSize, _init_extra_noiseTextureSize, _init_mapOffset, _init_extra_mapOffset, _init_mapOffset2, _init_extra_mapOffset2, _init_mapOffset3, _init_extra_mapOffset3, _init_castShadows, _init_extra_castShadows, _init_receiveShadows, _init_extra_receiveShadows, _init_name, _init_extra_name, _init_detailTiling, _init_extra_detailTiling, _init_detailTiling2, _init_extra_detailTiling2, _init_textureTiling, _init_extra_textureTiling, _init_display, _init_extra_display],
        c: [_EveChildCloud, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildCloud2",
        family: "eve/child"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("ReflectionMode")], 16, "reflectionMode"], [[io, io.persist, type, type.int32, void 0, schema.enum("Tr2VolumerticQuality")], 16, "minVisibleQuality"], [[io, io.persist, type, type.float32], 16, "sortingModifier"], [[io, io.persist, void 0, type.model("Tr2TextureAnimation")], 16, "animation"], [[io, io.notify, io, io.readwrite, void 0, type.objectRef("Tr2DepthStencil")], 16, "shadowMapDS"], [[io, io.read, void 0, type.objectRef("Tr2TextureReference")], 16, "lightmap"], [[io, io.read, type, type.float32], 16, "lightmapSizeScale"], [[io, io.persist, void 0, type.list("Tr2Light")], 16, "lights"], [[io, io.persist, type, type.float32], 16, "minScreenSize"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "reflectionEffect"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.uint32], 16, "noiseTextureSize"], [[io, io.read, type, type.vec3], 16, "mapOffset0"], [[io, io.read, type, type.vec3], 16, "mapOffset1"], [[io, io.read, type, type.vec3], 16, "mapOffset2"], [[io, io.persist, type, type.boolean], 16, "castShadows"], [[io, io.persist, type, type.boolean], 16, "receiveShadows"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.vec3], 16, "detailTiling1"], [[io, io.persist, type, type.vec3], 16, "detailTiling2"], [[io, io.persist, type, type.vec3], 16, "textureTiling"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"]], 0, void 0, _EveEntity));
    }
    constructor(...args) {
      super(...args);
      _init_extra_display(this);
    }
    /** m_reflectionMode (EntityComponents::ReflectionMode - enum ReflectionMode) [READWRITE, PERSIST, NOTIFY, ENUM] */
    reflectionMode = _init_reflectionMode(this, 0);

    /** m_minVisibleQuality (Tr2VolumerticQuality - enum Tr2VolumerticQuality) [READWRITE, PERSIST, ENUM] */
    minVisibleQuality = (_init_extra_reflectionMode(this), _init_minVisibleQuality(this, 0));

    /** m_sortingModifier (float) [READWRITE, PERSIST] */
    sortingModifier = (_init_extra_minVisibleQuality(this), _init_sortingModifier(this, 0));

    /** m_animation (Tr2TextureAnimationPtr) [READWRITE, PERSIST] */
    animation = (_init_extra_sortingModifier(this), _init_animation(this, null));

    /** m_shadowMapDS (Tr2DepthStencilPtr) [READWRITE, NOTIFY] */
    shadowMapDS = (_init_extra_animation(this), _init_shadowMapDS(this, null));

    /** m_lightMap (Tr2TextureReferencePtr) [READ] */
    lightmap = (_init_extra_shadowMapDS(this), _init_lightmap(this, null));

    /** m_lightmapSizeScale (float) [READ] */
    lightmapSizeScale = (_init_extra_lightmap(this), _init_lightmapSizeScale(this, 0));

    /** m_lights (PTr2LightVector) [READ, PERSIST] */
    lights = (_init_extra_lightmapSizeScale(this), _init_lights(this, []));

    /** m_minScreenSize (float) [READWRITE, PERSIST] */
    minScreenSize = (_init_extra_lights(this), _init_minScreenSize(this, 0));

    /** m_rotation (Quaternion) [READWRITE, PERSIST] */
    rotation = (_init_extra_minScreenSize(this), _init_rotation(this, quat.create()));

    /** m_translation (Vector3) [READWRITE, PERSIST] */
    translation = (_init_extra_rotation(this), _init_translation(this, vec3.create()));

    /** m_scaling (Vector3) [READWRITE, PERSIST] */
    scaling = (_init_extra_translation(this), _init_scaling(this, vec3.create()));

    /** m_reflectionEffect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
    reflectionEffect = (_init_extra_scaling(this), _init_reflectionEffect(this, null));

    /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
    effect = (_init_extra_reflectionEffect(this), _init_effect(this, null));

    /** m_noiseTextureSize (uint32_t) [READWRITE, PERSIST] */
    noiseTextureSize = (_init_extra_effect(this), _init_noiseTextureSize(this, 0));

    /** m_mapOffsets[0] (Vector3) [READ] */
    mapOffset0 = (_init_extra_noiseTextureSize(this), _init_mapOffset(this, vec3.create()));

    /** m_mapOffsets[1] (Vector3) [READ] */
    mapOffset1 = (_init_extra_mapOffset(this), _init_mapOffset2(this, vec3.create()));

    /** m_mapOffsets[2] (Vector3) [READ] */
    mapOffset2 = (_init_extra_mapOffset2(this), _init_mapOffset3(this, vec3.create()));

    /** m_castShadows (bool) [READWRITE, PERSIST] */
    castShadows = (_init_extra_mapOffset3(this), _init_castShadows(this, false));

    /** m_receiveShadows (bool) [READWRITE, PERSIST] */
    receiveShadows = (_init_extra_castShadows(this), _init_receiveShadows(this, false));

    /** m_name (std::string) [READWRITE, PERSIST] */
    name = (_init_extra_receiveShadows(this), _init_name(this, ""));

    /** m_mapTiling[1] (Vector3) [READWRITE, PERSIST] */
    detailTiling1 = (_init_extra_name(this), _init_detailTiling(this, vec3.create()));

    /** m_mapTiling[2] (Vector3) [READWRITE, PERSIST] */
    detailTiling2 = (_init_extra_detailTiling(this), _init_detailTiling2(this, vec3.create()));

    /** m_mapTiling[0] (Vector3) [READWRITE, PERSIST] */
    textureTiling = (_init_extra_detailTiling2(this), _init_textureTiling(this, vec3.create()));

    /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
    display = (_init_extra_textureTiling(this), _init_display(this, false));
  }];
  ReflectionMode = Object.freeze({
    REFLECT_HIGH: 0,
    REFLECT_MEDIUM_AND_HIGH: 1,
    REFLECT_LOW_MEDIUM_HIGH: 2,
    REFLECT_NEVER: 3
  });
  Tr2VolumerticQuality = Object.freeze({
    Low: 0,
    Medium: 1,
    High: 2,
    Ultra: 3
  });
  constructor() {
    super(_EveChildCloud), _initClass();
  }
}();

export { _EveChildCloud as EveChildCloud2 };
//# sourceMappingURL=EveChildCloud2.js.map
