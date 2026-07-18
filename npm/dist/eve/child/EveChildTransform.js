import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { type } from '@carbonenginejs/core-types/schema';

let _initClass, _init_translation, _init_extra_translation, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_localTransform, _init_extra_localTransform, _init_worldTransform, _init_extra_worldTransform, _init_staticTransform, _init_extra_staticTransform, _init_useSRT, _init_extra_useSRT, _init_useStaticRotation, _init_extra_useStaticRotation, _init_useStaticScale, _init_extra_useStaticScale;
let _EveChildTransform;
new class extends _identity {
  static [class EveChildTransform extends CjsModel {
    static {
      ({
        e: [_init_translation, _init_extra_translation, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_localTransform, _init_extra_localTransform, _init_worldTransform, _init_extra_worldTransform, _init_staticTransform, _init_extra_staticTransform, _init_useSRT, _init_extra_useSRT, _init_useStaticRotation, _init_extra_useStaticRotation, _init_useStaticScale, _init_extra_useStaticScale],
        c: [_EveChildTransform, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildTransform",
        family: "eve/child"
      })], [[[type, type.vec3], 16, "translation"], [[type, type.vec3], 16, "scaling"], [[type, type.quat], 16, "rotation"], [[type, type.mat4], 16, "localTransform"], [[type, type.mat4], 16, "worldTransform"], [[type, type.boolean], 16, "staticTransform"], [[type, type.boolean], 16, "useSRT"], [[type, type.boolean], 16, "useStaticRotation"], [[type, type.boolean], 16, "useStaticScale"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_useStaticScale(this);
    }
    translation = _init_translation(this, vec3.create());
    scaling = (_init_extra_translation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));
    rotation = (_init_extra_scaling(this), _init_rotation(this, quat.create()));
    localTransform = (_init_extra_rotation(this), _init_localTransform(this, mat4.create()));
    worldTransform = (_init_extra_localTransform(this), _init_worldTransform(this, mat4.create()));
    staticTransform = (_init_extra_worldTransform(this), _init_staticTransform(this, false));
    useSRT = (_init_extra_staticTransform(this), _init_useSRT(this, true));
    useStaticRotation = (_init_extra_useSRT(this), _init_useStaticRotation(this, false));
    useStaticScale = (_init_extra_useStaticRotation(this), _init_useStaticScale(this, false));
    RebuildLocalTransform() {
      if (this.useSRT) {
        _EveChildTransform.#compose(this.localTransform, this.scaling, this.rotation, this.translation);
      }
      return this.localTransform;
    }
    Setup(scale = null, rotation = null, translation = null, _lowestLodVisible = null) {
      if (!this.useSRT) {
        return this.localTransform;
      }
      if (scale) {
        vec3.copy(this.scaling, scale);
      }
      if (rotation) {
        quat.copy(this.rotation, rotation);
      }
      if (translation) {
        vec3.copy(this.translation, translation);
      }
      return this.RebuildLocalTransform();
    }
    SetupWithStaticRotation(scale = null, rotation = null, translation = null, lowestLodVisible = null) {
      this.useStaticRotation = true;
      return this.Setup(scale, rotation, translation, lowestLodVisible);
    }
    SetupWithStaticTransform(scale = null, rotation = null, translation = null, lowestLodVisible = null) {
      this.staticTransform = true;
      return this.Setup(scale, rotation, translation, lowestLodVisible);
    }
    UpdateTransform(parentTransform) {
      if (this.staticTransform || !this.useSRT) {
        return mat4.multiply(this.worldTransform, this.localTransform, parentTransform);
      }
      this.RebuildLocalTransform();
      if (!this.useStaticRotation && !this.useStaticScale) {
        return mat4.multiply(this.worldTransform, this.localTransform, parentTransform);
      }
      const scale = mat4.getScaling(vec3.create(), parentTransform);
      const rotation = _EveChildTransform.#getRotation(quat.create(), parentTransform, scale);
      const translation = mat4.getTranslation(vec3.create(), parentTransform);
      if (this.useStaticScale) {
        vec3.set(scale, 1, 1, 1);
      }
      if (this.useStaticRotation) {
        quat.identity(rotation);
      }
      const modifiedParentTransform = _EveChildTransform.#compose(mat4.create(), scale, rotation, translation);
      return mat4.multiply(this.worldTransform, this.localTransform, modifiedParentTransform);
    }
  }];
  #compose(out, scale, rotation, translation) {
    return mat4.fromRotationTranslationScale(out, rotation, translation, scale);
  }
  #getRotation(out, transform, scale) {
    const normalized = mat4.create();
    for (let column = 0; column < 3; column++) {
      const divisor = scale[column];
      for (let row = 0; row < 3; row++) {
        normalized[column * 4 + row] = divisor ? transform[column * 4 + row] / divisor : 0;
      }
    }
    mat4.getRotation(out, normalized);
    return quat.normalize(out, out);
  }
  constructor() {
    super(_EveChildTransform), _initClass();
  }
}(); // Module ping-pong scratch for the modifier fold (assume-dirty, never pooled;
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
function applyTransformModifiers(child, context, boneCount, bones) {
  const modifiers = child.transformModifiers;
  if (!modifiers || modifiers.length === 0) {
    return child.worldTransform;
  }
  let source = child.worldTransform;
  let target = modifierFoldScratch;
  for (const modifier of modifiers) {
    if (!modifier?.ApplyTransform) {
      continue;
    }
    modifier.ApplyTransform(context, source, boneCount, bones, target);
    const swap = source;
    source = target;
    target = swap;
  }
  if (source !== child.worldTransform) {
    mat4.copy(child.worldTransform, source);
  }
  return child.worldTransform;
}

export { _EveChildTransform as EveChildTransform, applyTransformModifiers };
//# sourceMappingURL=EveChildTransform.js.map
