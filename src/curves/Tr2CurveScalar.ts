// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
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

@type.define({ className: "Tr2CurveScalar", family: "curves" })
export class Tr2CurveScalar extends CjsModel implements ITriCurveLength, ITriScalarFunction
{

  @io.persist
  @type.array({ kind: "struct", className: "Tr2CurveScalarKey" })
  keys: Tr2CurveScalarKey[] = [];

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.float32
  timeOffset = 0;

  @io.persist
  @type.float32
  timeScale = 1;

  @io.read
  @type.float32
  currentValue = 0;

  @io.persist
  @type.uint32
  @schema.enum("Tr2CurveExtrapolation")
  extrapolationBefore: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  @io.persist
  @type.uint32
  @schema.enum("Tr2CurveExtrapolation")
  extrapolationAfter: Tr2CurveExtrapolationValue = Tr2CurveExtrapolation.CLAMP;

  #lastSegment = 0;

  /**
   * Updates the cached scalar value for the supplied time.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void
  {
    this.currentValue = this.GetValue(time);
  }

  /**
   * Updates and returns the cached scalar value for the supplied time.
   */
  @carbon.method
  @impl.implemented
  Update(time: number): number
  {
    this.currentValue = this.GetValue(time);
    return this.currentValue;
  }

  /**
   * Gets the scalar value at the supplied time.
   */
  @carbon.method
  @impl.implemented
  GetValueAt(time: number): number
  {
    return this.GetValue(time);
  }

  /**
   * Sets the curve time scale used by `GetScaledTime`.
   */
  @carbon.method
  @impl.implemented
  ScaleTime(scale: number): void
  {
    this.timeScale = scale;
  }

  /**
   * Gets the last authored key time, or zero for an empty curve.
   */
  @carbon.method
  @impl.implemented
  Length(): number
  {
    return this.keys.length ? this.keys[this.keys.length - 1].time : 0;
  }

  /**
   * Gets the authored curve name.
   */
  @carbon.method
  @impl.implemented
  GetName(): string
  {
    return this.name;
  }

  /**
   * Sets the authored curve name.
   */
  @carbon.method
  @impl.implemented
  SetName(name: string): void
  {
    this.name = name;
  }

  /**
   * Evaluates the scalar curve with Carbon extrapolation and interpolation rules.
   */
  @carbon.method
  @impl.implemented
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
    const segment = this.FindSegment(localTime);
    return GetScalarSegmentValue(
      localTime,
      this.keys[segment],
      this.keys[segment + 1],
    );
  }

  /**
   * Evaluates the scalar tangent with Carbon extrapolation and interpolation rules.
   */
  @carbon.method
  @impl.implemented
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
    const segment = this.FindSegment(localTime, false);
    return GetScalarSegmentTangent(
      localTime,
      this.keys[segment],
      this.keys[segment + 1],
    );
  }

  /**
   * Carbon-compatible alias for `GetTangent`.
   */
  @carbon.method
  @impl.implemented
  GetTangentAt(time: number): number
  {
    return this.GetTangent(time);
  }

  /**
   * Gets the last cached value.
   */
  @carbon.method
  @impl.implemented
  GetCurrentValue(): number
  {
    return this.currentValue;
  }

  /**
   * Gets the time offset applied by `GetScaledTime`.
   */
  @carbon.method
  @impl.implemented
  GetTimeOffset(): number
  {
    return this.timeOffset;
  }

  /**
   * Sets the time offset applied by `GetScaledTime`.
   */
  @carbon.method
  @impl.implemented
  SetTimeOffset(timeOffset: number): void
  {
    this.timeOffset = timeOffset;
  }

  /**
   * Gets the time scale applied by `GetScaledTime`.
   */
  @carbon.method
  @impl.implemented
  GetTimeScale(): number
  {
    return this.timeScale;
  }

  /**
   * Sets the time scale applied by `GetScaledTime`.
   */
  @carbon.method
  @impl.implemented
  SetTimeScale(timeScale: number): void
  {
    this.timeScale = timeScale;
  }

  /**
   * Checks whether the curve has no authored keys.
   */
  @carbon.method
  @impl.implemented
  IsEmpty(): boolean
  {
    return this.keys.length === 0;
  }

  /**
   * Sorts keys and recomputes automatic tangents after key edits.
   */
  @carbon.method
  @impl.adapted
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
  @carbon.method
  @impl.implemented
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
  @carbon.method
  @impl.implemented
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void
  {
    this.extrapolationAfter = extrapolation;
    this.extrapolationBefore = extrapolation;
  }

  /**
   * Gets the mutable key list.
   */
  @carbon.method
  @impl.implemented
  GetKeys(): Tr2CurveScalarKey[]
  {
    return this.keys;
  }

  /**
   * Applies a compact curve definition and refreshes derived key state.
   */
  @carbon.method
  @impl.adapted
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
  @carbon.method
  @impl.adapted
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
  @carbon.method
  @impl.adapted
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
  FindSegment(time: number, updateCache = true): number
  {
    const count = this.keys.length;

    if (this.#lastSegment + 1 < count)
    {
      let k0 = this.keys[this.#lastSegment];
      let k1 = this.keys[this.#lastSegment + 1];
      if (time >= k0.time && time < k1.time)
      {
        return this.#lastSegment;
      }

      if (this.#lastSegment + 2 < count)
      {
        k0 = this.keys[this.#lastSegment + 1];
        k1 = this.keys[this.#lastSegment + 2];
        if (time >= k0.time && time < k1.time)
        {
          const segment = this.#lastSegment + 1;
          if (updateCache)
          {
            this.#lastSegment = segment;
          }
          return segment;
        }
      }

      if (this.#lastSegment > 1)
      {
        k0 = this.keys[this.#lastSegment - 1];
        k1 = this.keys[this.#lastSegment];
        if (time >= k0.time && time < k1.time)
        {
          const segment = this.#lastSegment - 1;
          if (updateCache)
          {
            this.#lastSegment = segment;
          }
          return segment;
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
        return i;
      }
    }

    if (updateCache)
    {
      this.#lastSegment = count - 2;
    }
    return count - 2;
  }

  /**
   * One-shot static rasterization helper for compact curve definitions.
   */
  @carbon.method
  @impl.adapted
  static Rasterize(
    destination: Tr2CurveRasterizeDestination,
    definition: Tr2CurveScalarDefinition,
  ): void
  {
    this.rasterize(destination, definition);
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
