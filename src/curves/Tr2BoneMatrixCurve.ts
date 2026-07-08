// Source: E:\carbonengine\trinity\trinity\Curves\Tr2BoneMatrixCurve.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2BoneMatrixCurve.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4 } from "@carbonenginejs/core-math/types";
import { isArrayLike } from "@carbonenginejs/core-math/is";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength } from "./contracts.ts";
import { Tr2MatrixKey } from "./Tr2MatrixKey.ts";

const IDENTITY_MATRIX: Mat4 = mat4.create();

@type.define({ className: "Tr2BoneMatrixCurve", family: "curves" })
export class Tr2BoneMatrixCurve extends CjsModel implements ITriCurveLength {
  @io.persist
  @type.unknown
  interpolation = 0;

  @io.read
  @type.unknown
  currentValue: unknown = mat4.create();

  @io.persist
  @type.unknown
  name = "";

  @io.persist
  @type.unknown
  length = 1;

  @io.persist
  @type.unknown
  cycle = true;

  @io.persist
  @type.unknown
  reversed = false;

  @io.persist
  @type.unknown
  startValue: unknown = mat4.create();

  @io.persist
  @type.unknown
  endValue: unknown = mat4.create();

  @io.readwrite
  @type.objectRef("Tr2SkinnedObject")
  skinnedObject: unknown = null;

  @io.persist
  @type.mat4
  transform: Mat4 = mat4.create();

  @io.persistOnly
  @type.unknown
  keys: unknown[] = [];

  #bone = "";
  #scratch: Mat4 = mat4.create();

  /**
   * Initializes sorted keys and cached value.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.Sort();
    this.UpdateValue(0);
    return true;
  }

  /**
   * Gets authored duration.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    const keys = this.keys as Tr2MatrixKey[];
    const length = this.length as number;
    return length || (keys.length ? keys[keys.length - 1].time as number : 0);
  }

  /**
   * Updates cached matrix value.
   */
  @carbon.method
  @impl.adapted
  UpdateValue(time: number): void {
    this.GetValueAt(time, this.currentValue as Mat4);
  }

  /**
   * Gets matrix value at a time.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(_time: number, out: Mat4): Mat4 {
    const boneMatrix = GetBoneMatrix(this.skinnedObject, this.#bone);
    if (!boneMatrix) {
      return mat4.identity(out);
    }

    mat4.multiply(this.#scratch, this.transform, boneMatrix);
    const worldTransform = GetSkinnedObjectTransform(this.skinnedObject);
    return worldTransform
      ? mat4.multiply(out, this.#scratch, worldTransform)
      : mat4.copy(out, this.#scratch);
  }

  /**
   * Gets matrix value at a time.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Mat4): Mat4 {
    return this.GetValueAt(time, out);
  }

  /**
   * Sorts keys by time.
   */
  @carbon.method
  @impl.implemented
  Sort(): void {
    const keys = this.keys as Tr2MatrixKey[];
    keys.sort((a, b) => (a.time as number) - (b.time as number));
    const lastKey = keys.at(-1);
    const length = this.length as number;
    if (lastKey && (lastKey.time as number) > length) {
      const previousLength = this.length as number;
      mat4.copy(this.#scratch, this.endValue as Mat4);
      this.length = (lastKey.time as number);
      mat4.copy(this.endValue as Mat4, lastKey.value as Mat4);
      if (previousLength > 0) {
        lastKey.time = previousLength;
        mat4.copy(lastKey.value as Mat4, this.#scratch);
      }
    }
  }

  /**
   * Adds a matrix key.
   */
  @carbon.method
  @impl.adapted
  AddKey(time: number, value: Mat4 | null = null): number {
    const keyValue = value ?? IDENTITY_MATRIX;
    const keys = this.keys as Tr2MatrixKey[];
    for (let i = 0; i < this.keys.length; i++) {
      const key = keys[i];
      if ((key.time as number) === time) {
        mat4.copy(key.value as Mat4, keyValue);
        return i;
      }
    }

    const key = new Tr2MatrixKey();
    key.time = time;
    mat4.copy(key.value as Mat4, keyValue);
    keys.push(key);
    this.Sort();
    return keys.indexOf(key);
  }

  /**
   * Removes a matrix key.
   */
  @carbon.method
  @impl.implemented
  RemoveKey(index: number): void {
    (this.keys as Tr2MatrixKey[]).splice(index, 1);
  }

  /**
   * Sets the source bone name.
   */
  @carbon.method
  @impl.implemented
  SetBone(bone: string): void {
    this.#bone = bone;
  }

  /**
   * Gets the source bone name.
   */
  @carbon.method
  @impl.implemented
  GetBone(): string {
    return this.#bone;
  }

  GetKeyForTime(time: number): Tr2MatrixKey | null {
    const keys = this.keys as Tr2MatrixKey[];
    if (!this.keys.length) {
      return null;
    }
    let best = keys[0];
    for (const key of keys) {
      if ((key.time as number) <= time) {
        best = key;
      } else {
        break;
      }
    }
    return best;
  }
}

function GetBoneMatrix(skinnedObject: unknown, bone: string): Mat4 | null {
  if (!skinnedObject || !bone) {
    return null;
  }
  if (
    typeof skinnedObject === "object" &&
    "GetBoneMatrix" in skinnedObject &&
    typeof skinnedObject.GetBoneMatrix === "function"
  ) {
    const value = skinnedObject.GetBoneMatrix(bone);
    return isArrayLike(value, 16) ? value as Mat4 : null;
  }
  if (
    typeof skinnedObject === "object" &&
    "GetBoneTransform" in skinnedObject &&
    typeof skinnedObject.GetBoneTransform === "function"
  ) {
    const value = skinnedObject.GetBoneTransform(bone);
    return isArrayLike(value, 16) ? value as Mat4 : null;
  }
  return null;
}

function GetSkinnedObjectTransform(skinnedObject: unknown): Mat4 | null {
  if (
    skinnedObject &&
    typeof skinnedObject === "object" &&
    "GetTransform" in skinnedObject &&
    typeof skinnedObject.GetTransform === "function"
  ) {
    const value = skinnedObject.GetTransform();
    return isArrayLike(value, 16) ? value as Mat4 : null;
  }
  return null;
}
