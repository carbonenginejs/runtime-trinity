import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initStatic, _initClass, _init_clampU, _init_extra_clampU, _init_clampV, _init_extra_clampV, _init_position, _init_extra_position, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_materialIndex, _init_extra_materialIndex, _init_isMirrored, _init_extra_isMirrored, _init_targetMaterials, _init_extra_targetMaterials;
let _EveCustomMask;
new class extends _identity {
  static [class EveCustomMask extends CjsModel {
    static {
      ({
        e: [_init_clampU, _init_extra_clampU, _init_clampV, _init_extra_clampV, _init_position, _init_extra_position, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_materialIndex, _init_extra_materialIndex, _init_isMirrored, _init_extra_isMirrored, _init_targetMaterials, _init_extra_targetMaterials, _initProto, _initStatic],
        c: [_EveCustomMask, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveCustomMask",
        family: "eve/spaceObject"
      })], [[[io, io.persist, type, type.boolean], 16, "clampU"], [[io, io.persist, type, type.boolean], 16, "clampV"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.uint8], 16, "materialIndex"], [[io, io.persist, type, type.boolean], 16, "isMirrored"], [[io, io.persist, type, type.vec4], 16, "targetMaterials"], [[carbon, carbon.method, impl, impl.adapted], 18, "Setup"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetDebugDrawMatrix"], [[carbon, carbon.method, impl, impl.adapted], 18, "FillPerObjectData"], [[carbon, carbon.method, impl, impl.adapted], 26, "ZeroPerObjectData"]], 0, void 0, CjsModel));
      _initStatic(this);
    }
    constructor(...args) {
      super(...args);
      _init_extra_targetMaterials(this);
    }
    clampU = (_initProto(this), _init_clampU(this, false));
    clampV = (_init_extra_clampU(this), _init_clampV(this, false));
    position = (_init_extra_clampV(this), _init_position(this, vec3.create()));
    scaling = (_init_extra_position(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));
    rotation = (_init_extra_scaling(this), _init_rotation(this, quat.create()));
    materialIndex = (_init_extra_rotation(this), _init_materialIndex(this, 0));
    isMirrored = (_init_extra_materialIndex(this), _init_isMirrored(this, false));
    targetMaterials = (_init_extra_isMirrored(this), _init_targetMaterials(this, vec4.fromValues(1, 1, 1, 1)));
    Setup(position, scaling, rotation, isMirrored, clampU, clampV, sourceMaterialID, targets) {
      vec3.copy(this.position, position || _EveCustomMask.#zero);
      vec3.copy(this.scaling, scaling || _EveCustomMask.#one);
      quat.copy(this.rotation, rotation || _EveCustomMask.#identityRotation);
      this.isMirrored = !!isMirrored;
      this.clampU = !!clampU;
      this.clampV = !!clampV;
      this.materialIndex = Number(sourceMaterialID) & 0xff;
      vec4.copy(this.targetMaterials, targets || _EveCustomMask.#one4);
      return true;
    }
    GetDebugDrawMatrix(out = mat4.create(), objectRadius = 0) {
      const radius = Number(objectRadius) || 0;
      const scale = vec3.fromValues(0.1 * radius, this.scaling[1] * radius, this.scaling[2] * radius);
      return mat4.fromRotationTranslationScale(out, this.rotation, this.position, scale);
    }
    FillPerObjectData(index, vsData, psData) {
      if (!_EveCustomMask.#isValidSlot(index) || !vsData || !psData) {
        return false;
      }
      const transform = mat4.fromRotationTranslationScale(mat4.create(), this.rotation, this.position, this.scaling);
      const inverse = mat4.invert(mat4.create(), transform);
      if (!inverse) {
        return false;
      }
      mat4.transpose(_EveCustomMask.#mat4Slot(vsData.customMaskMatrix, index), inverse);
      vec4.set(_EveCustomMask.#vec4Slot(vsData.customMaskData, index), 1, this.isMirrored ? 1 : 0, 0, 0);
      vec4.set(_EveCustomMask.#vec4Slot(psData.customMaskMaterialIDs, index), this.materialIndex, 0, 0, 0);
      vec4.copy(_EveCustomMask.#vec4Slot(psData.customMaskTargets, index), this.targetMaterials);
      if (!psData.customMaskClamps || psData.customMaskClamps.length !== 4) {
        psData.customMaskClamps = vec4.create();
      }
      psData.customMaskClamps[index * 2] = this.clampU ? 1 : 0;
      psData.customMaskClamps[index * 2 + 1] = this.clampV ? 1 : 0;
      return true;
    }
    static ZeroPerObjectData(index, vsData, psData) {
      if (!_EveCustomMask.#isValidSlot(index) || !vsData || !psData) {
        return false;
      }
      mat4.identity(_EveCustomMask.#mat4Slot(vsData.customMaskMatrix, index));
      vec4.set(_EveCustomMask.#vec4Slot(vsData.customMaskData, index), 0, 0, 0, 0);
      vec4.set(_EveCustomMask.#vec4Slot(psData.customMaskMaterialIDs, index), 0, 0, 0, 0);
      vec4.set(_EveCustomMask.#vec4Slot(psData.customMaskTargets, index), 0, 0, 0, 0);
      return true;
    }
  }];
  CUSTOM_MASK_COUNT = 2;
  #isValidSlot(index) {
    return Number.isInteger(index) && index >= 0 && index < _EveCustomMask.CUSTOM_MASK_COUNT;
  }
  #mat4Slot(slots, index) {
    if (!Array.isArray(slots)) {
      throw new TypeError("EveCustomMask requires a fixed customMaskMatrix array");
    }
    if (!slots[index] || slots[index].length !== 16) slots[index] = mat4.create();
    return slots[index];
  }
  #vec4Slot(slots, index) {
    if (!Array.isArray(slots)) {
      throw new TypeError("EveCustomMask requires a fixed custom-mask vec4 array");
    }
    if (!slots[index] || slots[index].length !== 4) slots[index] = vec4.create();
    return slots[index];
  }
  #zero = vec3.create();
  #one = vec3.fromValues(1, 1, 1);
  #identityRotation = quat.create();
  #one4 = vec4.fromValues(1, 1, 1, 1);
  constructor() {
    super(_EveCustomMask), _initClass();
  }
}();

export { _EveCustomMask as EveCustomMask };
//# sourceMappingURL=EveCustomMask.js.map
