import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { isArrayLike } from '@carbonenginejs/core-math/is';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2MatrixKey as _Tr2MatrixKey } from './Tr2MatrixKey.js';

let _initProto, _initClass, _init_currentValue, _init_extra_currentValue, _init_name, _init_extra_name, _init_length, _init_extra_length, _init_cycle, _init_extra_cycle, _init_reversed, _init_extra_reversed, _init_startValue, _init_extra_startValue, _init_endValue, _init_extra_endValue, _init_skinnedObject, _init_extra_skinnedObject, _init_transform, _init_extra_transform, _init_keys, _init_extra_keys;
let _Tr2BoneMatrixCurve;
new class extends _identity {
  static [class Tr2BoneMatrixCurve extends CjsModel {
    static {
      ({
        e: [_init_currentValue, _init_extra_currentValue, _init_name, _init_extra_name, _init_length, _init_extra_length, _init_cycle, _init_extra_cycle, _init_reversed, _init_extra_reversed, _init_startValue, _init_extra_startValue, _init_endValue, _init_extra_endValue, _init_skinnedObject, _init_extra_skinnedObject, _init_transform, _init_extra_transform, _init_keys, _init_extra_keys, _initProto],
        c: [_Tr2BoneMatrixCurve, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2BoneMatrixCurve",
        family: "curves"
      })], [[[io, io.read, type, type.unknown], 16, "currentValue"], [[io, io.persist, type, type.unknown], 16, "name"], [[io, io.persist, type, type.unknown], 16, "length"], [[io, io.persist, type, type.unknown], 16, "cycle"], [[io, io.persist, type, type.unknown], 16, "reversed"], [[io, io.persist, type, type.unknown], 16, "startValue"], [[io, io.persist, type, type.unknown], 16, "endValue"], [[io, io.readwrite, void 0, type.objectRef("Tr2SkinnedObject")], 16, "skinnedObject"], [[io, io.persist, type, type.mat4], 16, "transform"], [[io, io.persistOnly, type, type.unknown], 16, "keys"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "Length"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValueAt"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "Sort"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddKey"], [[carbon, carbon.method, impl, impl.implemented], 18, "RemoveKey"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetBone"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBone"]], 0, void 0, CjsModel));
    }
    currentValue = (_initProto(this), _init_currentValue(this, mat4.create()));
    name = (_init_extra_currentValue(this), _init_name(this, ""));
    length = (_init_extra_name(this), _init_length(this, 1));
    cycle = (_init_extra_length(this), _init_cycle(this, true));
    reversed = (_init_extra_cycle(this), _init_reversed(this, false));
    startValue = (_init_extra_reversed(this), _init_startValue(this, mat4.create()));
    endValue = (_init_extra_startValue(this), _init_endValue(this, mat4.create()));
    skinnedObject = (_init_extra_endValue(this), _init_skinnedObject(this, null));
    transform = (_init_extra_skinnedObject(this), _init_transform(this, mat4.create()));
    keys = (_init_extra_transform(this), _init_keys(this, []));
    #bone = (_init_extra_keys(this), "");
    #scratch = mat4.create();

    /**
     * Initializes sorted keys and cached value.
     */
    Initialize() {
      this.Sort();
      this.UpdateValue(0);
      return true;
    }

    /**
     * Gets authored duration.
     */
    Length() {
      const keys = this.keys;
      const length = this.length;
      return length || (keys.length ? keys[keys.length - 1].time : 0);
    }

    /**
     * Updates cached matrix value.
     */
    UpdateValue(time) {
      this.GetValueAt(time, this.currentValue);
    }

    /**
     * Gets matrix value at a time.
     */
    GetValueAt(_time, out) {
      const boneMatrix = _Tr2BoneMatrixCurve.#getBoneMatrix(this.skinnedObject, this.#bone);
      if (!boneMatrix) {
        return mat4.identity(out);
      }
      mat4.multiply(this.#scratch, this.transform, boneMatrix);
      const worldTransform = _Tr2BoneMatrixCurve.#getSkinnedObjectTransform(this.skinnedObject);
      return worldTransform ? mat4.multiply(out, this.#scratch, worldTransform) : mat4.copy(out, this.#scratch);
    }

    /**
     * Gets matrix value at a time.
     */
    GetValue(time, out) {
      return this.GetValueAt(time, out);
    }

    /**
     * Sorts keys by time.
     */
    Sort() {
      const keys = this.keys;
      keys.sort((a, b) => a.time - b.time);
      const lastKey = keys.at(-1);
      const length = this.length;
      if (lastKey && lastKey.time > length) {
        const previousLength = this.length;
        mat4.copy(this.#scratch, this.endValue);
        this.length = lastKey.time;
        mat4.copy(this.endValue, lastKey.value);
        if (previousLength > 0) {
          lastKey.time = previousLength;
          mat4.copy(lastKey.value, this.#scratch);
        }
      }
    }

    /**
     * Adds a matrix key.
     */
    AddKey(time, value = null) {
      const keyValue = value ?? _Tr2BoneMatrixCurve.#identityMatrix;
      const keys = this.keys;
      for (let i = 0; i < this.keys.length; i++) {
        const key = keys[i];
        if (key.time === time) {
          mat4.copy(key.value, keyValue);
          return i;
        }
      }
      const key = new _Tr2MatrixKey();
      key.time = time;
      mat4.copy(key.value, keyValue);
      keys.push(key);
      this.Sort();
      return keys.indexOf(key);
    }

    /**
     * Removes a matrix key.
     */
    RemoveKey(index) {
      this.keys.splice(index, 1);
    }

    /**
     * Sets the source bone name.
     */
    SetBone(bone) {
      this.#bone = bone;
    }

    /**
     * Gets the source bone name.
     */
    GetBone() {
      return this.#bone;
    }
    GetKeyForTime(time) {
      const keys = this.keys;
      if (!this.keys.length) {
        return null;
      }
      let best = keys[0];
      for (const key of keys) {
        if (key.time <= time) {
          best = key;
        } else {
          break;
        }
      }
      return best;
    }
  }];
  #identityMatrix = mat4.create();
  #getBoneMatrix(skinnedObject, bone) {
    if (!skinnedObject || !bone) {
      return null;
    }
    if (typeof skinnedObject === "object" && "GetBoneMatrix" in skinnedObject && typeof skinnedObject.GetBoneMatrix === "function") {
      const value = skinnedObject.GetBoneMatrix(bone);
      return isArrayLike(value, 16) ? value : null;
    }
    if (typeof skinnedObject === "object" && "GetBoneTransform" in skinnedObject && typeof skinnedObject.GetBoneTransform === "function") {
      const value = skinnedObject.GetBoneTransform(bone);
      return isArrayLike(value, 16) ? value : null;
    }
    return null;
  }
  #getSkinnedObjectTransform(skinnedObject) {
    if (skinnedObject && typeof skinnedObject === "object" && "GetTransform" in skinnedObject && typeof skinnedObject.GetTransform === "function") {
      const value = skinnedObject.GetTransform();
      return isArrayLike(value, 16) ? value : null;
    }
    return null;
  }
  constructor() {
    super(_Tr2BoneMatrixCurve), _initClass();
  }
}();

export { _Tr2BoneMatrixCurve as Tr2BoneMatrixCurve };
//# sourceMappingURL=Tr2BoneMatrixCurve.js.map
