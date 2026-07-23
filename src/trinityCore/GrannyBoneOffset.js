// Ported/adapted from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/GrannyBoneOffset.h
//   trinity/trinity/GrannyBoneOffset.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "GrannyBoneOffset", family: "trinityCore" })
export class GrannyBoneOffset extends CjsModel
{
  #transforms = new Map();
  #riggedTransforms = [];

  Initialize()
  {
    return true;
  }

  HaveTransforms()
  {
    return this.#transforms.size !== 0;
  }

  NeedRebind(numBones)
  {
    return this.HaveTransforms() && this.#riggedTransforms.length !== numBones;
  }

  ClearRigBindings()
  {
    this.#riggedTransforms.length = 0;
  }

  @carbon.method
  @impl.implemented
  ClearTransforms()
  {
    this.#transforms.clear();
    this.ClearRigBindings();
  }

  @carbon.method
  @impl.adapted
  SetRotation(bone, r, i, j, k)
  {
    if (!bone) return;
    const transform = mat4.fromQuat(mat4.create(), quat.fromValues(r, i, j, k));
    this.#transforms.set(String(bone), transform);
    this.ClearRigBindings();
  }

  @carbon.method
  @impl.implemented
  SetOffset(bone, x, y, z)
  {
    if (!bone) return;
    const key = String(bone);
    const transform = this.#transforms.get(key) ?? mat4.create();
    transform[12] = x;
    transform[13] = y;
    transform[14] = z;
    this.#transforms.set(key, transform);
    this.ClearRigBindings();
  }

  BindToRig(bones, numBones = bones?.length ?? 0)
  {
    if (!bones || !numBones) return;
    this.#riggedTransforms = Array.from({ length: numBones }, (_, index) =>
      this.#transforms.get(String(bones[index])) ?? null);
  }

  Apply(out, joint, boneMatrix, parentMatrix)
  {
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

  ApplyToLocal(joint, rotation, position)
  {
    const offset = this.#riggedTransforms[joint];
    if (!offset) return false;
    const offsetRotation = mat4.getRotation(quat.create(), offset);
    // Carbon (row-vector): rotation = offsetRotation * rotation - offset first.
    quat.multiply(rotation, rotation, offsetRotation);
    vec3.add(position, position, mat4.getTranslation(vec3.create(), offset));
    return true;
  }
}
