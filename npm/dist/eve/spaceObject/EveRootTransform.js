import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveTransform as _EveTransform } from './EveTransform.js';

let _initProto, _initClass, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_rotationCurve, _init_extra_rotationCurve, _init_modelTranslationCurve, _init_extra_modelTranslationCurve, _init_modelRotationCurve, _init_extra_modelRotationCurve, _init_translationCurve, _init_extra_translationCurve;
let _EveRootTransform;
class EveRootTransform extends _EveTransform {
  static {
    ({
      e: [_init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_rotationCurve, _init_extra_rotationCurve, _init_modelTranslationCurve, _init_extra_modelTranslationCurve, _init_modelRotationCurve, _init_extra_modelRotationCurve, _init_translationCurve, _init_extra_translationCurve, _initProto],
      c: [_EveRootTransform, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveRootTransform",
      family: "eve/spaceObject"
    })], [[[io, io.persist, type, type.float32], 16, "boundingSphereRadius"], [[io, io.persist, void 0, type.model("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "modelTranslationCurve"], [[io, io.persist, void 0, type.model("ITriQuaternionFunction")], 16, "modelRotationCurve"], [[io, io.persist, void 0, type.model("ITriVectorFunction")], 16, "translationCurve"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingSphereRadius"]], 0, void 0, _EveTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_translationCurve(this);
  }
  /** m_boundingSphereRadius (float) [READWRITE, PERSIST] */
  boundingSphereRadius = (_initProto(this), _init_boundingSphereRadius(this, -1));

  /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  rotationCurve = (_init_extra_boundingSphereRadius(this), _init_rotationCurve(this, null));

  /** m_modelTranslation (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  modelTranslationCurve = (_init_extra_rotationCurve(this), _init_modelTranslationCurve(this, null));

  /** m_modelRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  modelRotationCurve = (_init_extra_modelTranslationCurve(this), _init_modelRotationCurve(this, null));

  /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = (_init_extra_modelRotationCurve(this), _init_translationCurve(this, null));

  /** Returns the authored bounding-sphere radius. */
  GetBoundingSphereRadius() {
    return this.boundingSphereRadius;
  }
  static {
    _initClass();
  }
}

export { _EveRootTransform as EveRootTransform };
//# sourceMappingURL=EveRootTransform.js.map
