// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildTransform.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildTransform.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "EveChildTransform",
  family: "eve/child"
})
export class EveChildTransform extends CjsModel
{
  @type.vec3
  translation = vec3.create();

  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @type.quat
  rotation = quat.create();

  @type.mat4
  localTransform = mat4.create();

  @type.mat4
  worldTransform = mat4.create();

  @type.boolean
  staticTransform = false;

  @type.boolean
  useSRT = true;

  @type.boolean
  useStaticRotation = false;

  @type.boolean
  useStaticScale = false;

  RebuildLocalTransform()
  {
    if (this.useSRT)
    {
      EveChildTransform.#compose(this.localTransform, this.scaling, this.rotation, this.translation);
    }
    return this.localTransform;
  }

  Setup(scale = null, rotation = null, translation = null, _lowestLodVisible = null)
  {
    if (!this.useSRT)
    {
      return this.localTransform;
    }
    if (scale)
    {
      vec3.copy(this.scaling, scale);
    }
    if (rotation)
    {
      quat.copy(this.rotation, rotation);
    }
    if (translation)
    {
      vec3.copy(this.translation, translation);
    }
    return this.RebuildLocalTransform();
  }

  SetupWithStaticRotation(scale = null, rotation = null, translation = null, lowestLodVisible = null)
  {
    this.useStaticRotation = true;
    return this.Setup(scale, rotation, translation, lowestLodVisible);
  }

  SetupWithStaticTransform(scale = null, rotation = null, translation = null, lowestLodVisible = null)
  {
    this.staticTransform = true;
    return this.Setup(scale, rotation, translation, lowestLodVisible);
  }

  UpdateTransform(parentTransform)
  {
    if (this.staticTransform || !this.useSRT)
    {
      return mat4.multiply(this.worldTransform, this.localTransform, parentTransform);
    }
    this.RebuildLocalTransform();
    if (!this.useStaticRotation && !this.useStaticScale)
    {
      return mat4.multiply(this.worldTransform, this.localTransform, parentTransform);
    }
    const scale = mat4.getScaling(vec3.create(), parentTransform);
    const rotation = EveChildTransform.#getRotation(quat.create(), parentTransform, scale);
    const translation = mat4.getTranslation(vec3.create(), parentTransform);
    if (this.useStaticScale)
    {
      vec3.set(scale, 1, 1, 1);
    }
    if (this.useStaticRotation)
    {
      quat.identity(rotation);
    }
    const modifiedParentTransform = EveChildTransform.#compose(mat4.create(), scale, rotation, translation);
    return mat4.multiply(this.worldTransform, this.localTransform, modifiedParentTransform);
  }

  static #compose(out, scale, rotation, translation)
  {
    return mat4.fromRotationTranslationScale(out, rotation, translation, scale);
  }

  static #getRotation(out, transform, scale)
  {
    const normalized = mat4.create();
    for (let column = 0; column < 3; column++)
    {
      const divisor = scale[column];
      for (let row = 0; row < 3; row++)
      {
        normalized[column * 4 + row] = divisor ? transform[column * 4 + row] / divisor : 0;
      }
    }
    mat4.getRotation(out, normalized);
    return quat.normalize(out, out);
  }
}

// Module ping-pong scratch for the modifier fold (assume-dirty, never pooled;
// child updates run sequentially so it is non-reentrant).
const modifierFoldScratch = mat4.create();

/**
 * Folds a child's transform modifiers over its worldTransform in order, each
 * modifier's output feeding the next. Carbon inlines this loop inside each
 * EveChildMesh/Container/ParticleSystem UpdateAsyncronous
 * (`m_worldTransform = (*it)->ApplyTransform(m_worldTransform, boneCount, bones)`);
 * this is a JS-only helper (zero-alloc ping-pong between worldTransform and a
 * module scratch buffer so no modifier reads and writes the same matrix), kept a
 * free function rather than a method so it stays off the Carbon method surface.
 * The frame context is threaded through to camera-dependent modifiers.
 * @param {EveChildTransform} child - owns transformModifiers + worldTransform
 * @param {Object} context - frame context (EveUpdateContext)
 * @param {Number} boneCount
 * @param {Float32Array|null} bones
 * @returns {Float32Array} child.worldTransform
 */
export function applyTransformModifiers(child, context, boneCount, bones)
{
  const modifiers = child.transformModifiers;

  if (!modifiers || modifiers.length === 0)
  {
    return child.worldTransform;
  }

  let source = child.worldTransform;
  let target = modifierFoldScratch;

  for (const modifier of modifiers)
  {
    if (!modifier?.ApplyTransform)
    {
      continue;
    }
    modifier.ApplyTransform(context, source, boneCount, bones, target);
    const swap = source;
    source = target;
    target = swap;
  }

  if (source !== child.worldTransform)
  {
    mat4.copy(child.worldTransform, source);
  }
  return child.worldTransform;
}
