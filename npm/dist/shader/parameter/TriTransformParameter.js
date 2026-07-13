import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsShaderParameter } from './CjsShaderParameter.js';

let _initProto, _initClass, _init_transformBase, _init_extra_transformBase, _init_rotationCenter, _init_extra_rotationCenter, _init_name, _init_extra_name, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_translation, _init_extra_translation, _init_worldTransform, _init_extra_worldTransform;

/** TriTransformParameter (shader) - generated from schema shapeHash de073c4a.... */
let _TriTransformParamete;
class TriTransformParameter extends CjsShaderParameter {
  static {
    ({
      e: [_init_transformBase, _init_extra_transformBase, _init_rotationCenter, _init_extra_rotationCenter, _init_name, _init_extra_name, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_translation, _init_extra_translation, _init_worldTransform, _init_extra_worldTransform, _initProto],
      c: [_TriTransformParamete, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriTransformParameter",
      family: "shader"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("TRITRANSFORMBASE")], 16, "transformBase"], [[io, io.persist, type, type.vec3], 16, "rotationCenter"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.mat4], 16, "worldTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetParameterName"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValueToEffect"]], 0, void 0, CjsShaderParameter));
  }
  constructor(...args) {
    super(...args);
    _init_extra_worldTransform(this);
  }
  /** m_transformBase (TRITRANSFORMBASE - enum TRITRANSFORMBASE) [READWRITE, PERSIST, ENUM] */
  transformBase = (_initProto(this), _init_transformBase(this, 0));

  /** m_rotationCenter (Vector3) [READWRITE, PERSIST] */
  rotationCenter = (_init_extra_transformBase(this), _init_rotationCenter(this, vec3.create()));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_rotationCenter(this), _init_name(this, ""));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_name(this), _init_rotation(this, quat.create()));

  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_translation (Vector3) [READWRITE, PERSIST] */
  translation = (_init_extra_scaling(this), _init_translation(this, vec3.create()));

  /** m_worldTransform (Matrix) [READWRITE, PERSIST] */
  worldTransform = (_init_extra_translation(this), _init_worldTransform(this, mat4.create()));
  GetParameterName() {
    return this.name;
  }
  CopyValueToEffect(_inputType, dest, size = 64, context = null) {
    const transform = mat4.create();
    mat4.fromRotationTranslationScaleOrigin(transform, this.rotation, this.translation, this.scaling, this.rotationCenter);
    const base = context?.inverseViewTransform ?? context?.GetInverseViewTransform?.() ?? null;
    if (base && this.transformBase !== 0) {
      const baseTransform = mat4.clone(base);
      baseTransform[12] = 0;
      baseTransform[13] = 0;
      baseTransform[14] = 0;
      mat4.multiply(transform, baseTransform, transform);
    }
    const out = mat4.create();
    mat4.transpose(out, transform);
    const count = Math.min(16, Math.floor(Number(size) / 4) || 16, dest?.length ?? 16);
    for (let i = 0; i < count; i++) {
      dest[i] = out[i];
    }
  }
  static {
    _initClass();
  }
}

export { _TriTransformParamete as TriTransformParameter };
//# sourceMappingURL=TriTransformParameter.js.map
