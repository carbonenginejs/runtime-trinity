// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\TransformModifiers\EveChildModifierSRT.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\TransformModifiers\EveChildModifierSRT.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveChildModifierSRT",
  family: "eve/child/modifiers"
})
export class EveChildModifierSRT extends CjsModel
{
  @io.persist
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.vec3
  translation = vec3.create();

  @carbon.method
  @impl.adapted
  ApplyTransform(transform, _boneCount = 0, _bones = null, out = mat4.create())
  {
    const local = mat4.fromRotationTranslationScale(mat4.create(), this.rotation, this.translation, this.scaling);
    return mat4.multiply(out, local, transform);
  }
}
