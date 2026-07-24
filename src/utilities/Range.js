// Source: E:\carbonengine\trinity\trinity\Utilities\Range.h
// Source: E:\carbonengine\trinity\trinity\Utilities\Range.cpp
// Source: E:\carbonengine\trinity\trinity\Utilities\Range_Blue.cpp
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "Range",
  family: "utilities"
})
export class Range extends CjsModel
{
  @type.boolean
  isUniform = true;

  @type.float32
  centerPoint = 0;

  @type.float32
  minRangePoint = 0;

  @type.float32
  maxRangePoint = 0;

  #minRange = 0;

  #maxRange = 0;

  #sliderRangeMin = 0;

  #sliderRangeMax = 0;

  /** Moves the range while preserving both distances from its center. */
  @carbon.method
  @impl.implemented
  SetCenterPoint(value)
  {
    const delta = value - this.centerPoint;
    this.centerPoint = value;
    this.#minRange += delta;
    this.#maxRange += delta;
    this.#syncRangePoints();
  }

  /** Configures the symmetric range and its slider bounds. */
  @carbon.method
  @impl.implemented
  Setup(rangeCenterPoint, rangeDeltaFromCenter, sliderMin, sliderMax)
  {
    this.centerPoint = rangeCenterPoint;
    this.#minRange = this.centerPoint - rangeDeltaFromCenter;
    this.#maxRange = this.centerPoint + rangeDeltaFromCenter;
    this.#sliderRangeMin = sliderMin;
    this.#sliderRangeMax = sliderMax;
    this.#syncRangePoints();
  }

  /** Sets the lower range point and mirrors it when uniform. */
  @carbon.method
  @impl.implemented
  SetMinRangePoint(value)
  {
    this.#minRange = Math.min(value, this.centerPoint);
    if (this.isUniform)
    {
      this.#maxRange = this.centerPoint + (this.centerPoint - this.#minRange);
    }
    this.#syncRangePoints();
  }

  /** Sets the upper range point and mirrors it when uniform. */
  @carbon.method
  @impl.implemented
  SetMaxRangePoint(value)
  {
    this.#maxRange = Math.max(value, this.centerPoint);
    if (this.isUniform)
    {
      this.#minRange = this.centerPoint - (this.#maxRange - this.centerPoint);
    }
    this.#syncRangePoints();
  }

  @carbon.method
  @impl.implemented
  GetCenterPoint()
  {
    return this.centerPoint;
  }

  /** Preserves Carbon's exact lower-bound comparison behavior. */
  @carbon.method
  @impl.implemented
  GetMinRangePoint()
  {
    return this.minRangePoint;
  }

  @carbon.method
  @impl.implemented
  GetMaxRangePoint()
  {
    return this.maxRangePoint;
  }

  @carbon.method
  @impl.implemented
  ToggleIsUniform()
  {
    this.isUniform = !this.isUniform;
    if (this.isUniform)
    {
      this.FixUniformity();
    }
  }

  @carbon.method
  @impl.implemented
  SetIsUniform(value)
  {
    this.isUniform = value;
    if (this.isUniform)
    {
      this.FixUniformity();
    }
  }

  FixUniformity()
  {
    const minRangeDelta = this.centerPoint - this.#minRange;
    const maxRangeDelta = this.#maxRange - this.centerPoint;
    const newDelta = Math.min(minRangeDelta, maxRangeDelta);
    this.SetMinRangePoint(this.centerPoint - newDelta);
    this.SetMaxRangePoint(this.centerPoint + newDelta);
  }

  @carbon.method
  @impl.implemented
  GetIsUniform()
  {
    return this.isUniform;
  }

  @carbon.method
  @impl.implemented
  SetSliderMin(value)
  {
    this.#sliderRangeMin = value;
    this.#syncRangePoints();
  }

  @carbon.method
  @impl.implemented
  SetSliderMax(value)
  {
    this.#sliderRangeMax = value;
    this.#syncRangePoints();
  }

  @carbon.method
  @impl.implemented
  GetSliderMin()
  {
    return this.#sliderRangeMin;
  }

  @carbon.method
  @impl.implemented
  GetSliderMax()
  {
    return this.#sliderRangeMax;
  }

  #syncRangePoints()
  {
    this.minRangePoint = Math.min(this.#minRange, this.#sliderRangeMin);
    this.maxRangePoint = Math.min(this.#maxRange, this.#sliderRangeMax);
  }
}
