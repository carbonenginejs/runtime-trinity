// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import {
  GetAutoClampedTangent,
  GetAutoTangent,
  GetScalarSegmentTangent,
  GetScalarSegmentValue,
  GetWrappedLocalTime,
} from "./CjsCurveMath.ts";
import {
  Tr2CurveExtrapolation,
  Tr2CurveInterpolation,
  Tr2CurveTangentType,
} from "./enums.ts";
import type {
  Tr2CurveExtrapolationValue,
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";
import type { ITriCurveLength, ITriScalarFunction } from "./contracts.ts";
import { Tr2CurveScalarKey } from "./Tr2CurveScalarKey.ts";

export interface Tr2CurveScalarDefinition {
  keys: Tr2CurveScalarKey[];
  keyCount: number;
  extrapolationBefore: Tr2CurveExtrapolationValue;
  extrapolationAfter: Tr2CurveExtrapolationValue;
}

export interface Tr2CurveRasterizeDestination {
  width: number;
  stride: number;
  data: ArrayLike<number> & { [index: number]: number };
}

export class Tr2CurveScalar implements ITriCurveLength, ITriScalarFunction {
  keys: Tr2CurveScalarKey[] = [];
  name = "";
  timeOffset = 0;
  timeScale = 1;
  currentValue = 0;
  extrapolationBefore: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;
  extrapolationAfter: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  #lastSegment = 0;

  UpdateValue(time: number): void {
    this.currentValue = this.GetValue(time);
  }

  Update(time: number): number {
    this.currentValue = this.GetValue(time);
    return this.currentValue;
  }

  GetValueAt(time: number): number {
    return this.GetValue(time);
  }

  ScaleTime(scale: number): void {
    this.timeScale = scale;
  }

  Length(): number {
    return this.keys.length ? this.keys[this.keys.length - 1].time : 0;
  }

  GetName(): string {
    return this.name;
  }

  SetName(name: string): void {
    this.name = name;
  }

  GetValue(time: number): number {
    const count = this.keys.length;
    if (!count) return 0;

    const scaledTime = this.GetScaledTime(time);
    const firstKey = this.keys[0];
    const lastKey = this.keys[count - 1];

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.LINEAR &&
      scaledTime < firstKey.time
    ) {
      return firstKey.value -
        (firstKey.time - scaledTime) * firstKey.leftTangent;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.LINEAR &&
      scaledTime > lastKey.time
    ) {
      return lastKey.value + (scaledTime - lastKey.time) *
          lastKey.rightTangent;
    }

    if (count === 1) return firstKey.value;

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.CLAMP &&
      scaledTime <= firstKey.time
    ) {
      return firstKey.value;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.CLAMP &&
      scaledTime >= lastKey.time
    ) {
      return lastKey.value;
    }

    const localTime = this.GetLocalTime(time);
    const [k0, k1] = this.FindSegment(localTime);
    return GetScalarSegmentValue(localTime, k0, k1);
  }

  GetTangent(time: number): number {
    const count = this.keys.length;
    if (!count) return 0;

    const scaledTime = this.GetScaledTime(time);
    const firstKey = this.keys[0];
    const lastKey = this.keys[count - 1];

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.LINEAR &&
      scaledTime < firstKey.time
    ) {
      return firstKey.leftTangent;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.LINEAR &&
      scaledTime > lastKey.time
    ) {
      return lastKey.rightTangent;
    }

    if (count === 1) return firstKey.rightTangent;

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.CLAMP &&
      scaledTime <= firstKey.time
    ) {
      return 0;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.CLAMP &&
      scaledTime >= lastKey.time
    ) {
      return 0;
    }

    const localTime = this.GetLocalTime(time);
    const [k0, k1] = this.FindSegment(localTime, false);
    return GetScalarSegmentTangent(localTime, k0, k1);
  }

  GetTangentAt(time: number): number {
    return this.GetTangent(time);
  }

  GetCurrentValue(): number {
    return this.currentValue;
  }

  GetTimeOffset(): number {
    return this.timeOffset;
  }

  SetTimeOffset(timeOffset: number): void {
    this.timeOffset = timeOffset;
  }

  GetTimeScale(): number {
    return this.timeScale;
  }

  SetTimeScale(timeScale: number): void {
    this.timeScale = timeScale;
  }

  IsEmpty(): boolean {
    return this.keys.length === 0;
  }

  OnKeysChanged(): void {
    this.keys = this.keys
      .map((key, index) => ({ key, index }))
      .sort((a, b) => a.key.time - b.key.time || a.index - b.index)
      .map((entry) => entry.key);

    this.#lastSegment = 0;

    for (let i = 0; i < this.keys.length; i++) {
      const key = this.keys[i];

      switch (key.tangentType) {
        case Tr2CurveTangentType.AUTO_CLAMP:
          if (i === 0 || i + 1 === this.keys.length) {
            key.leftTangent = 0;
            key.rightTangent = 0;
          } else {
            const tangent = GetAutoClampedTangent(
              this.keys[i - 1].time,
              this.keys[i - 1].value,
              key.time,
              key.value,
              this.keys[i + 1].time,
              this.keys[i + 1].value,
            );
            key.leftTangent = tangent;
            key.rightTangent = tangent;
          }
          break;

        case Tr2CurveTangentType.AUTO:
          if (i === 0 || i + 1 === this.keys.length) {
            key.leftTangent = 0;
            key.rightTangent = 0;
          } else {
            const tangent = GetAutoTangent(
              this.keys[i - 1].time,
              this.keys[i - 1].value,
              key.time,
              key.value,
              this.keys[i + 1].time,
              this.keys[i + 1].value,
            );
            key.leftTangent = tangent;
            key.rightTangent = tangent;
          }
          break;

        case Tr2CurveTangentType.FREE_JOINED:
          key.rightTangent = key.leftTangent;
          break;
      }
    }
  }

  AddKey(
    time: number,
    value: number,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent = 0,
    rightTangent = 0,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void {
    const key = new Tr2CurveScalarKey();
    key.time = time;
    key.value = value;
    key.leftTangent = leftTangent;
    key.rightTangent = rightTangent;
    key.interpolation = interpolation;
    key.tangentType = tangentType;
    key.id = 0;
    this.keys.push(key);
    this.OnKeysChanged();
  }

  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void {
    this.extrapolationAfter = extrapolation;
    this.extrapolationBefore = extrapolation;
  }

  GetKeys(): Tr2CurveScalarKey[] {
    return this.keys;
  }

  SetDefinition(definition: Tr2CurveScalarDefinition): void {
    this.extrapolationBefore = definition.extrapolationBefore;
    this.extrapolationAfter = definition.extrapolationAfter;
    this.keys = definition.keys.slice(0, definition.keyCount);
    this.OnKeysChanged();
  }

  GetDefinition(): Tr2CurveScalarDefinition {
    return {
      keys: this.keys,
      keyCount: this.keys.length,
      extrapolationBefore: this.extrapolationBefore,
      extrapolationAfter: this.extrapolationAfter,
    };
  }

  Rasterize(destination: Tr2CurveRasterizeDestination): void {
    for (let i = 0; i < destination.width; i++) {
      const t = destination.width === 1 ? 0.5 : i / (destination.width - 1);
      destination.data[i * destination.stride] = this.GetValue(t);
    }
  }

  GetScaledTime(time: number): number {
    return time / this.timeScale - this.timeOffset;
  }

  GetLocalTime(time: number): number {
    if (!this.keys.length) return 0;

    const scaledTime = this.GetScaledTime(time);
    const first = this.keys[0].time;
    const last = this.keys[this.keys.length - 1].time;
    return GetWrappedLocalTime(
      scaledTime,
      first,
      last,
      this.extrapolationBefore,
      this.extrapolationAfter,
    );
  }

  FindSegment(
    time: number,
    updateCache = true,
  ): [Tr2CurveScalarKey, Tr2CurveScalarKey] {
    const count = this.keys.length;

    if (this.#lastSegment + 1 < count) {
      let k0 = this.keys[this.#lastSegment];
      let k1 = this.keys[this.#lastSegment + 1];
      if (time >= k0.time && time < k1.time) return [k0, k1];

      if (this.#lastSegment + 2 < count) {
        k0 = this.keys[this.#lastSegment + 1];
        k1 = this.keys[this.#lastSegment + 2];
        if (time >= k0.time && time < k1.time) {
          if (updateCache) this.#lastSegment++;
          return [k0, k1];
        }
      }

      if (this.#lastSegment > 1) {
        k0 = this.keys[this.#lastSegment - 1];
        k1 = this.keys[this.#lastSegment];
        if (time >= k0.time && time < k1.time) {
          if (updateCache) this.#lastSegment--;
          return [k0, k1];
        }
      }
    }

    for (let i = 0; i + 1 < count; i++) {
      const k0 = this.keys[i];
      const k1 = this.keys[i + 1];
      if (time >= k0.time && time < k1.time) {
        if (updateCache) this.#lastSegment = i;
        return [k0, k1];
      }
    }

    if (updateCache) this.#lastSegment = count - 2;
    return [this.keys[count - 2], this.keys[count - 1]];
  }

  static rasterize(
    destination: Tr2CurveRasterizeDestination,
    definition: Tr2CurveScalarDefinition,
  ): void {
    const curve = new Tr2CurveScalar();
    curve.SetDefinition(definition);
    curve.Rasterize(destination);
  }
}

CjsSchema.define(Tr2CurveScalar, { className: "Tr2CurveScalar" });
CjsSchema.defineField(Tr2CurveScalar, "keys", "type", {
  kind: "array",
  itemType: { kind: "struct", className: "Tr2CurveScalarKey" },
});
CjsSchema.defineField(Tr2CurveScalar, "name", "type", { kind: "string" });
CjsSchema.defineField(Tr2CurveScalar, "timeOffset", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalar, "timeScale", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalar, "currentValue", "type", {
  kind: "float32",
});
CjsSchema.defineField(Tr2CurveScalar, "extrapolationBefore", "type", {
  kind: "uint32",
});
CjsSchema.defineField(Tr2CurveScalar, "extrapolationAfter", "type", {
  kind: "uint32",
});
