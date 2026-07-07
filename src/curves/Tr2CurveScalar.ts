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

export interface Tr2CurveScalarDefinition
{
  keys: Tr2CurveScalarKey[];
  keyCount: number;
  extrapolationBefore: Tr2CurveExtrapolationValue;
  extrapolationAfter: Tr2CurveExtrapolationValue;
}

export interface Tr2CurveRasterizeDestination
{
  width: number;
  stride: number;
  data: ArrayLike<number> & { [index: number]: number };
}

@CjsSchema.type.define({ className: "Tr2CurveScalar" })
export class Tr2CurveScalar implements ITriCurveLength, ITriScalarFunction
{

  @CjsSchema.type.array({ kind: "struct", className: "Tr2CurveScalarKey" })
  keys: Tr2CurveScalarKey[] = [];

  @CjsSchema.type.string
  name = "";

  @CjsSchema.type.float32
  timeOffset = 0;

  @CjsSchema.type.float32
  timeScale = 1;

  @CjsSchema.type.float32
  currentValue = 0;

  @CjsSchema.type.uint32
  extrapolationBefore: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  @CjsSchema.type.uint32
  extrapolationAfter: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  #lastSegment = 0;

  /**
   * Updates the cached scalar value for the supplied time.
   */
  UpdateValue(time: number): void
  {
    this.currentValue = this.GetValue(time);
  }

  /**
   * Updates and returns the cached scalar value for the supplied time.
   */
  Update(time: number): number
  {
    this.currentValue = this.GetValue(time);
    return this.currentValue;
  }

  /**
   * Gets the scalar value at the supplied time.
   */
  GetValueAt(time: number): number
  {
    return this.GetValue(time);
  }

  /**
   * Sets the curve time scale used by `GetScaledTime`.
   */
  ScaleTime(scale: number): void
  {
    this.timeScale = scale;
  }

  /**
   * Gets the last authored key time, or zero for an empty curve.
   */
  Length(): number
  {
    return this.keys.length ? this.keys[this.keys.length - 1].time : 0;
  }

  /**
   * Gets the authored curve name.
   */
  GetName(): string
  {
    return this.name;
  }

  /**
   * Sets the authored curve name.
   */
  SetName(name: string): void
  {
    this.name = name;
  }

  /**
   * Evaluates the scalar curve with Carbon extrapolation and interpolation rules.
   */
  GetValue(time: number): number
  {
    const count = this.keys.length;
    if (!count)
    {
      return 0;
    }

    const scaledTime = this.GetScaledTime(time);
    const firstKey = this.keys[0];
    const lastKey = this.keys[count - 1];

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.LINEAR &&
      scaledTime < firstKey.time
    )
    {
      return firstKey.value -
        (firstKey.time - scaledTime) * firstKey.leftTangent;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.LINEAR &&
      scaledTime > lastKey.time
    )
    {
      return lastKey.value + (scaledTime - lastKey.time) *
          lastKey.rightTangent;
    }

    if (count === 1)
    {
      return firstKey.value;
    }

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.CLAMP &&
      scaledTime <= firstKey.time
    )
    {
      return firstKey.value;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.CLAMP &&
      scaledTime >= lastKey.time
    )
    {
      return lastKey.value;
    }

    const localTime = this.GetLocalTime(time);
    const [k0, k1] = this.FindSegment(localTime);
    return GetScalarSegmentValue(localTime, k0, k1);
  }

  /**
   * Evaluates the scalar tangent with Carbon extrapolation and interpolation rules.
   */
  GetTangent(time: number): number
  {
    const count = this.keys.length;
    if (!count)
    {
      return 0;
    }

    const scaledTime = this.GetScaledTime(time);
    const firstKey = this.keys[0];
    const lastKey = this.keys[count - 1];

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.LINEAR &&
      scaledTime < firstKey.time
    )
    {
      return firstKey.leftTangent;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.LINEAR &&
      scaledTime > lastKey.time
    )
    {
      return lastKey.rightTangent;
    }

    if (count === 1)
    {
      return firstKey.rightTangent;
    }

    if (
      this.extrapolationBefore === Tr2CurveExtrapolation.CLAMP &&
      scaledTime <= firstKey.time
    )
    {
      return 0;
    }

    if (
      this.extrapolationAfter === Tr2CurveExtrapolation.CLAMP &&
      scaledTime >= lastKey.time
    )
    {
      return 0;
    }

    const localTime = this.GetLocalTime(time);
    const [k0, k1] = this.FindSegment(localTime, false);
    return GetScalarSegmentTangent(localTime, k0, k1);
  }

  /**
   * Carbon-compatible alias for `GetTangent`.
   */
  GetTangentAt(time: number): number
  {
    return this.GetTangent(time);
  }

  /**
   * Gets the last cached value.
   */
  GetCurrentValue(): number
  {
    return this.currentValue;
  }

  /**
   * Gets the time offset applied by `GetScaledTime`.
   */
  GetTimeOffset(): number
  {
    return this.timeOffset;
  }

  /**
   * Sets the time offset applied by `GetScaledTime`.
   */
  SetTimeOffset(timeOffset: number): void
  {
    this.timeOffset = timeOffset;
  }

  /**
   * Gets the time scale applied by `GetScaledTime`.
   */
  GetTimeScale(): number
  {
    return this.timeScale;
  }

  /**
   * Sets the time scale applied by `GetScaledTime`.
   */
  SetTimeScale(timeScale: number): void
  {
    this.timeScale = timeScale;
  }

  /**
   * Checks whether the curve has no authored keys.
   */
  IsEmpty(): boolean
  {
    return this.keys.length === 0;
  }

  /**
   * Sorts keys and recomputes automatic tangents after key edits.
   */
  OnKeysChanged(): void
  {
    this.keys = this.keys
      .map((key, index) => ({ key, index }))
      .sort((a, b) => a.key.time - b.key.time || a.index - b.index)
      .map((entry) => entry.key);

    this.#lastSegment = 0;

    for (let i = 0; i < this.keys.length; i++)
    {
      const key = this.keys[i];

      switch (key.tangentType)
      {
        case Tr2CurveTangentType.AUTO_CLAMP:
          if (i === 0 || i + 1 === this.keys.length)
          {
            key.leftTangent = 0;
            key.rightTangent = 0;
          }
          else
          {
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
          if (i === 0 || i + 1 === this.keys.length)
          {
            key.leftTangent = 0;
            key.rightTangent = 0;
          }
          else
          {
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

  /**
   * Adds a scalar key and refreshes key ordering and derived tangents.
   */
  AddKey(
    time: number,
    value: number,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent = 0,
    rightTangent = 0,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void
  {
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

  /**
   * Sets both before and after extrapolation modes.
   */
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void
  {
    this.extrapolationAfter = extrapolation;
    this.extrapolationBefore = extrapolation;
  }

  /**
   * Gets the mutable key list.
   */
  GetKeys(): Tr2CurveScalarKey[]
  {
    return this.keys;
  }

  /**
   * Applies a compact curve definition and refreshes derived key state.
   */
  SetDefinition(definition: Tr2CurveScalarDefinition): void
  {
    this.extrapolationBefore = definition.extrapolationBefore;
    this.extrapolationAfter = definition.extrapolationAfter;
    this.keys = definition.keys.slice(0, definition.keyCount);
    this.OnKeysChanged();
  }

  /**
   * Gets a compact curve definition using the current key list.
   */
  GetDefinition(): Tr2CurveScalarDefinition
  {
    return {
      keys: this.keys,
      keyCount: this.keys.length,
      extrapolationBefore: this.extrapolationBefore,
      extrapolationAfter: this.extrapolationAfter,
    };
  }

  /**
   * Samples the curve into the destination buffer.
   */
  Rasterize(destination: Tr2CurveRasterizeDestination): void
  {
    for (let i = 0; i < destination.width; i++)
    {
      const t = destination.width === 1 ? 0.5 : i / (destination.width - 1);
      destination.data[i * destination.stride] = this.GetValue(t);
    }
  }

  /**
   * Converts caller time into curve-local scaled time.
   */
  GetScaledTime(time: number): number
  {
    return time / this.timeScale - this.timeOffset;
  }

  /**
   * Converts caller time into the authored key range according to extrapolation.
   */
  GetLocalTime(time: number): number
  {
    if (!this.keys.length)
    {
      return 0;
    }

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

  /**
   * Finds the key segment containing local time, optionally updating the segment cache.
   */
  FindSegment(
    time: number,
    updateCache = true,
  ): [Tr2CurveScalarKey, Tr2CurveScalarKey]
  {
    const count = this.keys.length;

    if (this.#lastSegment + 1 < count)
    {
      let k0 = this.keys[this.#lastSegment];
      let k1 = this.keys[this.#lastSegment + 1];
      if (time >= k0.time && time < k1.time)
      {
        return [k0, k1];
      }

      if (this.#lastSegment + 2 < count)
      {
        k0 = this.keys[this.#lastSegment + 1];
        k1 = this.keys[this.#lastSegment + 2];
        if (time >= k0.time && time < k1.time)
        {
          if (updateCache)
          {
            this.#lastSegment++;
          }
          return [k0, k1];
        }
      }

      if (this.#lastSegment > 1)
      {
        k0 = this.keys[this.#lastSegment - 1];
        k1 = this.keys[this.#lastSegment];
        if (time >= k0.time && time < k1.time)
        {
          if (updateCache)
          {
            this.#lastSegment--;
          }
          return [k0, k1];
        }
      }
    }

    for (let i = 0; i + 1 < count; i++)
    {
      const k0 = this.keys[i];
      const k1 = this.keys[i + 1];
      if (time >= k0.time && time < k1.time)
      {
        if (updateCache)
        {
          this.#lastSegment = i;
        }
        return [k0, k1];
      }
    }

    if (updateCache)
    {
      this.#lastSegment = count - 2;
    }
    return [this.keys[count - 2], this.keys[count - 1]];
  }

  /**
   * One-shot static rasterization helper for compact curve definitions.
   */
  static rasterize(
    destination: Tr2CurveRasterizeDestination,
    definition: Tr2CurveScalarDefinition,
  ): void
  {
    const curve = new Tr2CurveScalar();
    curve.SetDefinition(definition);
    curve.Rasterize(destination);
  }

}
