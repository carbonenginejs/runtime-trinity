import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { EveChildMesh as _EveChildMesh } from '../../../eve/child/EveChildMesh.js';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { vec4 } from '@carbonenginejs/runtime-utils/vec4';

let _initClass, _init_pinColor, _init_extra_pinColor, _init_color, _init_extra_color, _init_curveSets, _init_extra_curveSets, _init_centerNormal, _init_extra_centerNormal, _init_pinMaxRadius, _init_extra_pinMaxRadius, _init_pinRadius, _init_extra_pinRadius, _init_pinRotation, _init_extra_pinRotation, _init_pinAlphaThreshold, _init_extra_pinAlphaThreshold;

/** EveChildSpherePin (eve/child) - generated from schema shapeHash 8c9e40ec.... */
let _EveChildSpherePin;
class EveChildSpherePin extends _EveChildMesh {
  static {
    ({
      e: [_init_pinColor, _init_extra_pinColor, _init_color, _init_extra_color, _init_curveSets, _init_extra_curveSets, _init_centerNormal, _init_extra_centerNormal, _init_pinMaxRadius, _init_extra_pinMaxRadius, _init_pinRadius, _init_extra_pinRadius, _init_pinRotation, _init_extra_pinRotation, _init_pinAlphaThreshold, _init_extra_pinAlphaThreshold],
      c: [_EveChildSpherePin, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildSpherePin",
      family: "eve/child"
    })], [[[io, io.notify, io, io.persist, type, type.color], 16, "pinColor"], [[io, io.notify, io, io.persist, type, type.color], 16, "color"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "centerNormal"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinMaxRadius"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinRadius"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinRotation"], [[io, io.notify, io, io.persist, type, type.float32], 16, "pinAlphaThreshold"]], 0, void 0, _EveChildMesh));
  }
  constructor(...args) {
    super(...args);
    _init_extra_pinAlphaThreshold(this);
  }
  /** m_pinColor (Color) [READWRITE, NOTIFY, PERSIST] */
  pinColor = _init_pinColor(this, vec4.fromValues(1, 1, 1, 1));

  /** m_pinColor (Color) [READWRITE, NOTIFY, PERSIST] */
  color = (_init_extra_pinColor(this), _init_color(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_color(this), _init_curveSets(this, []));

  /** m_centerNormal (Vector3) [READWRITE, NOTIFY, PERSIST] */
  centerNormal = (_init_extra_curveSets(this), _init_centerNormal(this, vec3.create()));

  /** m_pinMaxRadius (float) [READWRITE, NOTIFY, PERSIST] */
  pinMaxRadius = (_init_extra_centerNormal(this), _init_pinMaxRadius(this, 0.2));

  /** m_pinRadius (float) [READWRITE, NOTIFY, PERSIST] */
  pinRadius = (_init_extra_pinMaxRadius(this), _init_pinRadius(this, 0));

  /** m_pinRotation (float) [READWRITE, NOTIFY, PERSIST] */
  pinRotation = (_init_extra_pinRadius(this), _init_pinRotation(this, 0));

  /** m_pinAlphaThreshold (float) [READWRITE, NOTIFY, PERSIST] */
  pinAlphaThreshold = (_init_extra_pinRotation(this), _init_pinAlphaThreshold(this, 0));
  static {
    _initClass();
  }
}

export { _EveChildSpherePin as EveChildSpherePin };
//# sourceMappingURL=EveChildSpherePin.js.map
