// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveCustomMask.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveCustomMask.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveCustomMask_Blue.cpp
import { mat4 } from "@carbonenginejs/runtime-utils/mat4";
import { quat } from "@carbonenginejs/runtime-utils/quat";
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { vec4 } from "@carbonenginejs/runtime-utils/vec4";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({ className: "EveCustomMask", family: "eve/spaceObject" })
export class EveCustomMask extends CjsModel
{
  static CUSTOM_MASK_COUNT = 2;

  @io.persist
  @type.boolean
  clampU = false;

  @io.persist
  @type.boolean
  clampV = false;

  @io.persist
  @type.vec3
  position = vec3.create();

  @io.persist
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.uint8
  materialIndex = 0;

  @io.persist
  @type.boolean
  isMirrored = false;

  @io.persist
  @type.vec4
  targetMaterials = vec4.fromValues(1, 1, 1, 1);

  @carbon.method
  @impl.adapted
  Setup(position, scaling, rotation, isMirrored, clampU, clampV, sourceMaterialID, targets)
  {
    vec3.copy(this.position, position || EveCustomMask.#zero);
    vec3.copy(this.scaling, scaling || EveCustomMask.#one);
    quat.copy(this.rotation, rotation || EveCustomMask.#identityRotation);
    this.isMirrored = !!isMirrored;
    this.clampU = !!clampU;
    this.clampV = !!clampV;
    this.materialIndex = Number(sourceMaterialID) & 0xff;
    vec4.copy(this.targetMaterials, targets || EveCustomMask.#one4);
    return true;
  }

  @carbon.method
  @impl.adapted
  GetDebugDrawMatrix(out = mat4.create(), objectRadius = 0)
  {
    const radius = Number(objectRadius) || 0;
    const scale = vec3.fromValues(0.1 * radius, this.scaling[1] * radius, this.scaling[2] * radius);
    return mat4.fromRotationTranslationScale(out, this.rotation, this.position, scale);
  }

  @carbon.method
  @impl.adapted
  FillPerObjectData(index, vsData, psData)
  {
    if (!EveCustomMask.#isValidSlot(index) || !vsData || !psData)
    {
      return false;
    }
    const transform = mat4.fromRotationTranslationScale(mat4.create(), this.rotation, this.position, this.scaling);
    const inverse = mat4.invert(mat4.create(), transform);
    if (!inverse)
    {
      return false;
    }
    mat4.transpose(EveCustomMask.#mat4Slot(vsData.customMaskMatrix, index), inverse);
    vec4.set(EveCustomMask.#vec4Slot(vsData.customMaskData, index), 1, this.isMirrored ? 1 : 0, 0, 0);
    vec4.set(EveCustomMask.#vec4Slot(psData.customMaskMaterialIDs, index), this.materialIndex, 0, 0, 0);
    vec4.copy(EveCustomMask.#vec4Slot(psData.customMaskTargets, index), this.targetMaterials);
    if (!psData.customMaskClamps || psData.customMaskClamps.length !== 4)
    {
      psData.customMaskClamps = vec4.create();
    }
    psData.customMaskClamps[index * 2] = this.clampU ? 1 : 0;
    psData.customMaskClamps[index * 2 + 1] = this.clampV ? 1 : 0;
    return true;
  }

  @carbon.method
  @impl.adapted
  static ZeroPerObjectData(index, vsData, psData)
  {
    if (!EveCustomMask.#isValidSlot(index) || !vsData || !psData)
    {
      return false;
    }
    mat4.identity(EveCustomMask.#mat4Slot(vsData.customMaskMatrix, index));
    vec4.set(EveCustomMask.#vec4Slot(vsData.customMaskData, index), 0, 0, 0, 0);
    vec4.set(EveCustomMask.#vec4Slot(psData.customMaskMaterialIDs, index), 0, 0, 0, 0);
    vec4.set(EveCustomMask.#vec4Slot(psData.customMaskTargets, index), 0, 0, 0, 0);
    return true;
  }

  static #isValidSlot(index)
  {
    return Number.isInteger(index) && index >= 0 && index < EveCustomMask.CUSTOM_MASK_COUNT;
  }

  static #mat4Slot(slots, index)
  {
    if (!Array.isArray(slots))
    {
      throw new TypeError("EveCustomMask requires a fixed customMaskMatrix array");
    }
    if (!slots[index] || slots[index].length !== 16) slots[index] = mat4.create();
    return slots[index];
  }

  static #vec4Slot(slots, index)
  {
    if (!Array.isArray(slots))
    {
      throw new TypeError("EveCustomMask requires a fixed custom-mask vec4 array");
    }
    if (!slots[index] || slots[index].length !== 4) slots[index] = vec4.create();
    return slots[index];
  }

  static #zero = vec3.create();

  static #one = vec3.fromValues(1, 1, 1);

  static #identityRotation = quat.create();

  static #one4 = vec4.fromValues(1, 1, 1, 1);
}
