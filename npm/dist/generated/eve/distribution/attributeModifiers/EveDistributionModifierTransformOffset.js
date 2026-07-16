import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_rotationCurve, _init_extra_rotationCurve, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_scaleCurve, _init_extra_scaleCurve, _init_translationCurve, _init_extra_translationCurve;

/** EveDistributionModifierTransformOffset (eve/distribution/attributeModifiers) - generated from schema shapeHash 6498e175.... */
let _EveDistributionModif;
class EveDistributionModifierTransformOffset extends CjsModel {
  static {
    ({
      e: [_init_rotationCurve, _init_extra_rotationCurve, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_scaleCurve, _init_extra_scaleCurve, _init_translationCurve, _init_extra_translationCurve],
      c: [_EveDistributionModif, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionModifierTransformOffset",
      family: "eve/distribution/attributeModifiers"
    })], [[[io, io.persist, void 0, type.model("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "scaleCurve"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "translationCurve"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_translationCurve(this);
  }
  /** m_rotationCurve (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  rotationCurve = _init_rotationCurve(this, null);

  /** m_translation (Vector3) [READWRITE, PERSIST] */
  translation = (_init_extra_rotationCurve(this), _init_translation(this, vec3.create()));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_translation(this), _init_rotation(this, quat.create()));

  /** m_scale (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_scaleCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  scaleCurve = (_init_extra_scaling(this), _init_scaleCurve(this, null));

  /** m_translationCurve (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = (_init_extra_scaleCurve(this), _init_translationCurve(this, null));
  static {
    _initClass();
  }
}

export { _EveDistributionModif as EveDistributionModifierTransformOffset };
//# sourceMappingURL=EveDistributionModifierTransformOffset.js.map
