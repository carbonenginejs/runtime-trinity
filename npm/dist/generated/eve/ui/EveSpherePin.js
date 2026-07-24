import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { quat } from '@carbonenginejs/runtime-utils/quat';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { vec4 } from '@carbonenginejs/runtime-utils/vec4';

let _initClass, _init_primitiveCount, _init_extra_primitiveCount, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_display, _init_extra_display, _init_enablePicking, _init_extra_enablePicking, _init_name, _init_extra_name, _init_pinColor, _init_extra_pinColor, _init_color, _init_extra_color, _init_curveSets, _init_extra_curveSets, _init_sortValueMultiplier, _init_extra_sortValueMultiplier, _init_centerNormal, _init_extra_centerNormal, _init_pinMaxRadius, _init_extra_pinMaxRadius, _init_pinRadius, _init_extra_pinRadius, _init_pinEffectResPath, _init_extra_pinEffectResPath, _init_geometryResPath, _init_extra_geometryResPath, _init_pinRotation, _init_extra_pinRotation, _init_pinAlphaThreshold, _init_extra_pinAlphaThreshold, _init_uvAtlasScaleOffset, _init_extra_uvAtlasScaleOffset, _init_pinEffect, _init_extra_pinEffect, _init_pickEffect, _init_extra_pickEffect;

/** EveSpherePin (eve/ui) - generated from schema shapeHash 3f243d93.... */
let _EveSpherePin;
class EveSpherePin extends CjsModel {
  static {
    ({
      e: [_init_primitiveCount, _init_extra_primitiveCount, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_display, _init_extra_display, _init_enablePicking, _init_extra_enablePicking, _init_name, _init_extra_name, _init_pinColor, _init_extra_pinColor, _init_color, _init_extra_color, _init_curveSets, _init_extra_curveSets, _init_sortValueMultiplier, _init_extra_sortValueMultiplier, _init_centerNormal, _init_extra_centerNormal, _init_pinMaxRadius, _init_extra_pinMaxRadius, _init_pinRadius, _init_extra_pinRadius, _init_pinEffectResPath, _init_extra_pinEffectResPath, _init_geometryResPath, _init_extra_geometryResPath, _init_pinRotation, _init_extra_pinRotation, _init_pinAlphaThreshold, _init_extra_pinAlphaThreshold, _init_uvAtlasScaleOffset, _init_extra_uvAtlasScaleOffset, _init_pinEffect, _init_extra_pinEffect, _init_pickEffect, _init_extra_pickEffect],
      c: [_EveSpherePin, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpherePin",
      family: "eve/ui"
    })], [[[io, io.read, type, type.int32], 16, "primitiveCount"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "enablePicking"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.color], 16, "pinColor"], [[io, io.notify, io, io.persist, type, type.color], 16, "color"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, type, type.float32], 16, "sortValueMultiplier"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "centerNormal"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinMaxRadius"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinRadius"], [[io, io.notify, io, io.persist, type, type.string], 16, "pinEffectResPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "geometryResPath"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinRotation"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinAlphaThreshold"], [[io, io.notify, io, io.persist, type, type.vec4], 16, "uvAtlasScaleOffset"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "pinEffect"], [[io, io.read, void 0, type.objectRef("Tr2Effect")], 16, "pickEffect"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_pickEffect(this);
  }
  /** m_primitiveCount (int) [READ] */
  primitiveCount = _init_primitiveCount(this, 0);

  /** m_translation (Vector3) [READWRITE, PERSIST] */
  translation = (_init_extra_primitiveCount(this), _init_translation(this, vec3.create()));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_translation(this), _init_rotation(this, quat.create()));

  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_scaling(this), _init_display(this, true));

  /** m_enablePicking (bool) [READWRITE, PERSIST] */
  enablePicking = (_init_extra_display(this), _init_enablePicking(this, true));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_enablePicking(this), _init_name(this, ""));

  /** m_pinColor (Color) [READWRITE, NOTIFY, PERSIST] */
  pinColor = (_init_extra_name(this), _init_pinColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_pinColor (Color) [READWRITE, NOTIFY, PERSIST] */
  color = (_init_extra_pinColor(this), _init_color(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_color(this), _init_curveSets(this, []));

  /** m_sortValueMultiplier (float) [READWRITE, PERSIST] */
  sortValueMultiplier = (_init_extra_curveSets(this), _init_sortValueMultiplier(this, 1));

  /** m_centerNormal (Vector3) [READWRITE, NOTIFY, PERSIST] */
  centerNormal = (_init_extra_sortValueMultiplier(this), _init_centerNormal(this, vec3.fromValues(0, 0, 1)));

  /** m_pinMaxRadius (float) [READWRITE, NOTIFY, PERSIST] */
  pinMaxRadius = (_init_extra_centerNormal(this), _init_pinMaxRadius(this, 0.2));

  /** m_pinRadius (float) [READWRITE, NOTIFY, PERSIST] */
  pinRadius = (_init_extra_pinMaxRadius(this), _init_pinRadius(this, 0.2));

  /** m_pinEffectResPath (std::string) [READWRITE, NOTIFY, PERSIST] */
  pinEffectResPath = (_init_extra_pinRadius(this), _init_pinEffectResPath(this, ""));

  /** m_geomResPath (std::string) [READWRITE, NOTIFY, PERSIST] */
  geometryResPath = (_init_extra_pinEffectResPath(this), _init_geometryResPath(this, ""));

  /** m_pinRotation (float) [READWRITE, NOTIFY, PERSIST] */
  pinRotation = (_init_extra_geometryResPath(this), _init_pinRotation(this, 0));

  /** m_pinAlphaThreshold (float) [READWRITE, NOTIFY, PERSIST] */
  pinAlphaThreshold = (_init_extra_pinRotation(this), _init_pinAlphaThreshold(this, 0));

  /** m_uvAtlasScaleOffset (Vector4) [READWRITE, NOTIFY, PERSIST] */
  uvAtlasScaleOffset = (_init_extra_pinAlphaThreshold(this), _init_uvAtlasScaleOffset(this, vec4.fromValues(1, 1, 0, 0)));

  /** m_pinEffect (Tr2EffectPtr) [READWRITE, PERSIST] */
  pinEffect = (_init_extra_uvAtlasScaleOffset(this), _init_pinEffect(this, null));

  /** m_pickEffect (Tr2EffectPtr) [READ] */
  pickEffect = (_init_extra_pinEffect(this), _init_pickEffect(this, null));
  static {
    _initClass();
  }
}

export { _EveSpherePin as EveSpherePin };
//# sourceMappingURL=EveSpherePin.js.map
