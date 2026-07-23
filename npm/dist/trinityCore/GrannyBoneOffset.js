import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass;
let _GrannyBoneOffset;
class GrannyBoneOffset extends CjsModel {
  static {
    ({
      e: [_initProto],
      c: [_GrannyBoneOffset, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "GrannyBoneOffset",
      family: "trinityCore"
    })], [[[carbon, carbon.method, impl, impl.implemented], 18, "ClearTransforms"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetRotation"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetOffset"]], 0, void 0, CjsModel));
  }
  #transforms = (_initProto(this), new Map());
  #riggedTransforms = [];
  Initialize() {
    return true;
  }
  HaveTransforms() {
    return this.#transforms.size !== 0;
  }
  NeedRebind(numBones) {
    return this.HaveTransforms() && this.#riggedTransforms.length !== numBones;
  }
  ClearRigBindings() {
    this.#riggedTransforms.length = 0;
  }
  ClearTransforms() {
    this.#transforms.clear();
    this.ClearRigBindings();
  }
  SetRotation(bone, r, i, j, k) {
    if (!bone) return;
    const transform = mat4.fromQuat(mat4.create(), quat.fromValues(r, i, j, k));
    this.#transforms.set(String(bone), transform);
    this.ClearRigBindings();
  }
  SetOffset(bone, x, y, z) {
    if (!bone) return;
    const key = String(bone);
    const transform = this.#transforms.get(key) ?? mat4.create();
    transform[12] = x;
    transform[13] = y;
    transform[14] = z;
    this.#transforms.set(key, transform);
    this.ClearRigBindings();
  }
  BindToRig(bones, numBones = bones?.length ?? 0) {
    if (!bones || !numBones) return;
    this.#riggedTransforms = Array.from({
      length: numBones
    }, (_, index) => this.#transforms.get(String(bones[index])) ?? null);
  }
  Apply(out, joint, boneMatrix, parentMatrix) {
    const offset = this.#riggedTransforms[joint];
    if (!offset) return false;

    // Carbon stores row-major matrices. Runtime matrices are column-major, so
    // Carbon's `(offset * bone) * parent` becomes `parent * (bone * offset)`.
    const local = mat4.multiply(mat4.create(), boneMatrix, offset);
    local[12] = boneMatrix[12] + offset[12];
    local[13] = boneMatrix[13] + offset[13];
    local[14] = boneMatrix[14] + offset[14];
    local[15] = 1;
    mat4.multiply(out, parentMatrix, local);
    return true;
  }
  ApplyToLocal(joint, rotation, position) {
    const offset = this.#riggedTransforms[joint];
    if (!offset) return false;
    const offsetRotation = mat4.getRotation(quat.create(), offset);
    // Carbon (row-vector): rotation = offsetRotation * rotation - offset first.
    quat.multiply(rotation, rotation, offsetRotation);
    vec3.add(position, position, mat4.getTranslation(vec3.create(), offset));
    return true;
  }
  static {
    _initClass();
  }
}

export { _GrannyBoneOffset as GrannyBoneOffset };
//# sourceMappingURL=GrannyBoneOffset.js.map
